"""Phase 4 tests: `manage.py import_reviews` (DB import, avatars, static JSON export)."""

from __future__ import annotations

import json
import tempfile
from datetime import datetime, timezone
from io import StringIO
from pathlib import Path

from django.conf import settings
from django.core.management import CommandError, call_command
from django.test import TestCase

from apps.reviews.export import (
    DEFAULT_EXPORT_PATH,
    DEFAULT_IMAGES_DIR,
    PLACEHOLDER_NAME,
    avatar_for,
    build_export,
)
from apps.reviews.models import Review, hash_username
from apps.reviews.polished import POLISHED_PATH, load_polished

from .test_polished import polished_file, polished_review

FRONTEND = Path(settings.BASE_DIR).parent / "frontend"


def webp_size(path: Path) -> tuple[int, int]:
    data = path.read_bytes()
    assert data[:4] == b"RIFF" and data[8:12] == b"WEBP", "not a WebP file"
    index = data.find(b"VP8")
    chunk = data[index : index + 4]
    if chunk == b"VP8X":
        return (
            int.from_bytes(data[index + 12 : index + 15], "little") + 1,
            int.from_bytes(data[index + 15 : index + 18], "little") + 1,
        )
    if chunk == b"VP8L":
        bits = int.from_bytes(data[index + 9 : index + 13], "little")
        return (bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1
    return (
        int.from_bytes(data[index + 14 : index + 16], "little") & 0x3FFF,
        int.from_bytes(data[index + 16 : index + 18], "little") & 0x3FFF,
    )


def sample_reviews() -> list[dict]:
    return [
        polished_review(
            username_hash=hash_username("old-positive"),
            fictional_name="Owen Morgan",
            title="Great plugin",
            comment="Works very well.",
            quality_score=4,
            weeks=27,
            posted_at="2026-04-15T10:00:00",
            source_order=0,
            sentiment="positive",
        ),
        polished_review(
            username_hash=hash_username("negative"),
            fictional_name="Zofia Nowak",
            title="Broken (resolved)",
            comment="When I upgraded, my site broke immediately.",
            weeks=5,
            posted_at="2026-09-20T10:00:00",
            source_order=1,
            sentiment="negative",
        ),
        polished_review(
            username_hash=hash_username("new-positive"),
            fictional_name="Aiko Nakamura",
            title="Good plugin, very useful",
            comment="Good plugin, very useful.",
            quality_score=8,
            weeks=14,
            posted_at="2026-07-20T09:02:00",
            source_order=2,
            sentiment="positive",
        ),
        polished_review(
            username_hash=hash_username("neutral"),
            fictional_name="Petr Horák",
            title="OK, OK",
            comment="OK, OK.",
            weeks=14,
            posted_at="2026-07-19T09:02:00",
            source_order=3,
            sentiment="neutral",
        ),
        polished_review(
            username_hash=hash_username("tie-positive"),
            fictional_name="Léa Moreau",
            title="Excellent",
            comment="Really great work.",
            quality_score=4,
            weeks=14,
            posted_at="2026-07-18T09:02:00",
            source_order=4,
            sentiment="positive",
        ),
    ]


class ImportReviewsCommandTests(TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.polished = self.root / "reviews_polished.json"
        self.out = self.root / "reviews.json"
        self.images = self.root / "images"
        self.images.mkdir()
        self.write(sample_reviews())

    def write(self, reviews):
        data = polished_file(reviews)
        self.polished.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
        return data

    def run_command(self, *args):
        stdout = StringIO()
        call_command(
            "import_reviews",
            "--polished", str(self.polished),
            "--out", str(self.out),
            "--images-dir", str(self.images),
            *args,
            stdout=stdout,
        )
        return stdout.getvalue()

    def exported(self) -> dict:
        return json.loads(self.out.read_text(encoding="utf-8"))

    # ---- import -------------------------------------------------------------

    def test_imports_every_review_with_all_fields(self):
        output = self.run_command()
        self.assertEqual(Review.objects.count(), 5)
        review = Review.objects.get(username_hash=hash_username("old-positive"))
        self.assertEqual(review.fictional_name, "Owen Morgan")
        self.assertEqual(review.title, "Great plugin")
        self.assertEqual(review.comment, "Works very well.")
        self.assertEqual(review.weeks, 27)
        self.assertEqual(review.posted_at, datetime(2026, 4, 15, 10, 0, tzinfo=timezone.utc))
        self.assertEqual(review.source_order, 0)
        self.assertEqual(review.sentiment, Review.POSITIVE)
        self.assertIn("5 created", output)

    def test_scraped_at_comes_from_the_file_header_not_import_time(self):
        self.run_command()
        review = Review.objects.first()
        self.assertEqual(review.scraped_at, datetime(2026, 11, 1, 18, 34, 28, tzinfo=timezone.utc))

    def test_rerun_is_idempotent(self):
        self.run_command()
        output = self.run_command()
        self.assertEqual(Review.objects.count(), 5)
        self.assertIn("0 created", output)
        self.assertIn("0 updated", output)

    def test_rerun_updates_changed_text_and_sentiment_in_place(self):
        self.run_command()
        reviews = sample_reviews()
        reviews[1]["sentiment"] = "positive"
        reviews[1]["title"] = "Fixed quickly"
        self.write(reviews)
        output = self.run_command()
        self.assertIn("1 updated", output)
        review = Review.objects.get(username_hash=hash_username("negative"))
        self.assertEqual(review.title, "Fixed quickly")
        self.assertEqual(review.sentiment, Review.POSITIVE)
        self.assertEqual(Review.objects.count(), 5)

    def test_invalid_file_aborts_before_touching_db_or_export(self):
        reviews = sample_reviews()
        reviews[0]["comment"] = "Has an emoji 🎉"
        self.write(reviews)
        with self.assertRaises(CommandError) as ctx:
            self.run_command()
        self.assertIn("emoji", str(ctx.exception))
        self.assertEqual(Review.objects.count(), 0)
        self.assertFalse(self.out.exists())

    def test_missing_file_is_a_clear_error(self):
        self.polished.unlink()
        with self.assertRaises(CommandError):
            self.run_command()

    def test_import_is_atomic(self):
        reviews = sample_reviews()
        reviews[4]["username_hash"] = reviews[0]["username_hash"]  # duplicate slips past a patched validator
        self.write(reviews)
        from unittest import mock

        with mock.patch("apps.reviews.management.commands.import_reviews.validate_polished", return_value=[]):
            with self.assertRaises(CommandError):
                self.run_command()
        self.assertEqual(Review.objects.count(), 0)

    # ---- export -------------------------------------------------------------

    def test_export_contains_only_positive_reviews_sorted_by_quality_then_site_order(self):
        self.run_command()
        data = self.exported()
        self.assertEqual(
            [r["name"] for r in data["reviews"]],
            ["Aiko Nakamura", "Owen Morgan", "Léa Moreau"],
        )
        self.assertEqual(data["count"], 3)
        self.assertEqual(data["scraped_at"], "2026-11-01T18:34:28Z")
        self.assertIn("generated_at", data)
        self.assertEqual(data["placeholder"], f"/images/reviews/{PLACEHOLDER_NAME}")

    def test_exported_review_shape_has_no_hash_or_sentiment(self):
        self.run_command()
        review = self.exported()["reviews"][0]
        self.assertEqual(
            set(review), {"name", "title", "comment", "quality_score", "weeks", "timestamp", "posted_at", "avatar"}
        )
        self.assertEqual(review["title"], "Good plugin, very useful")
        self.assertEqual(review["quality_score"], 8)
        self.assertEqual(review["weeks"], 14)
        self.assertEqual(review["timestamp"], "2026-11-01T18:34:28Z")
        self.assertEqual(review["posted_at"], "2026-07-20T09:02:00Z")
        text = self.out.read_text(encoding="utf-8")
        self.assertNotIn("username", text)
        self.assertNotIn("sentiment", text)
        self.assertNotIn("\\u", text)
        self.assertIn("Léa", text)

    def test_avatar_is_placeholder_unless_a_hash_named_image_exists(self):
        digest = hash_username("new-positive")
        (self.images / f"{digest}.webp").write_bytes(b"RIFF\x00\x00\x00\x00WEBP")
        self.run_command()
        by_name = {r["name"]: r for r in self.exported()["reviews"]}
        self.assertEqual(by_name["Aiko Nakamura"]["avatar"], f"/images/reviews/{digest}.webp")
        self.assertEqual(by_name["Owen Morgan"]["avatar"], f"/images/reviews/{PLACEHOLDER_NAME}")
        self.assertIn("1 with own avatar", self.run_command())

    def test_export_is_rebuilt_from_the_database_not_the_file(self):
        self.run_command()
        Review.objects.filter(username_hash=hash_username("old-positive")).update(title="Edited in admin")
        self.run_command("--export-only")
        titles = [r["title"] for r in self.exported()["reviews"]]
        self.assertIn("Edited in admin", titles)

    def test_export_only_skips_the_import(self):
        self.run_command()
        self.polished.unlink()
        self.run_command("--export-only")
        self.assertEqual(self.exported()["count"], 3)


class ExportHelpersTests(TestCase):
    def test_default_paths_point_into_the_frontend(self):
        self.assertEqual(DEFAULT_EXPORT_PATH, FRONTEND / "app" / "data" / "reviews.json")
        self.assertEqual(DEFAULT_IMAGES_DIR, FRONTEND / "public" / "images" / "reviews")

    def test_avatar_for_checks_the_images_dir(self):
        with tempfile.TemporaryDirectory() as tmp:
            images = Path(tmp)
            self.assertEqual(avatar_for("a" * 64, images), f"/images/reviews/{PLACEHOLDER_NAME}")
            (images / ("a" * 64 + ".webp")).write_bytes(b"x")
            self.assertEqual(avatar_for("a" * 64, images), "/images/reviews/" + "a" * 64 + ".webp")

    def test_build_export_uses_quality_then_site_order_for_positive_reviews(self):
        for index, (score, order, sentiment) in enumerate([(7, 0, "positive"), (10, 1, "negative"), (9, 2, "positive"), (7, 3, "positive")]):
            Review.objects.create(
                username_hash=hash_username(str(index)), fictional_name=f"Name {index}", title="T",
                comment="C", quality_score=score, weeks=order, source_order=order, sentiment=sentiment,
            )
        with tempfile.TemporaryDirectory() as tmp:
            data = build_export(Path(tmp))
        self.assertEqual([r["quality_score"] for r in data["reviews"]], [9, 7, 7])
        self.assertEqual([r["name"] for r in data["reviews"]], ["Name 2", "Name 0", "Name 3"])


class PlaceholderAssetTests(TestCase):
    def test_placeholder_is_a_small_320px_webp_like_the_original_avatars(self):
        placeholder = DEFAULT_IMAGES_DIR / PLACEHOLDER_NAME
        self.assertTrue(placeholder.exists(), placeholder)
        self.assertEqual(webp_size(placeholder), (320, 320))  # the template's avatars were 320x320
        self.assertLess(placeholder.stat().st_size, 20_000)

    def test_template_sample_portraits_were_removed(self):
        for old in ["review-maya.webp", "review-chris.webp", "review-sofia.webp"]:
            self.assertFalse((FRONTEND / "public" / "images" / old).exists(), old)


class RealDataImportTests(TestCase):
    """End-to-end with the committed polished file, exporting to a temp location."""

    def test_imports_228_and_exports_220_positive_reviews(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "reviews.json"
            stdout = StringIO()
            call_command("import_reviews", "--out", str(out), "--images-dir", tmp, stdout=stdout)
            self.assertEqual(Review.objects.count(), 228)
            self.assertEqual(Review.objects.positive().count(), 220)
            data = json.loads(out.read_text(encoding="utf-8"))
        self.assertEqual(data["count"], 220)
        scores = [r["quality_score"] for r in data["reviews"]]
        self.assertEqual(scores, sorted(scores, reverse=True))
        self.assertEqual(data["reviews"][0]["name"], "Priya Malik")
        polished_hashes = {r["username_hash"] for r in load_polished()["reviews"]}
        self.assertEqual(set(Review.objects.values_list("username_hash", flat=True)), polished_hashes)
        self.assertTrue(POLISHED_PATH.exists())
