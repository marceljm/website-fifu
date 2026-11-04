"""Phase 1 tests: data model, hashing helper, app registration, admin, migrations."""

import hashlib
import importlib
from datetime import datetime, timezone

from django.apps import apps
from django.contrib import admin
from django.core.management import call_command
from django.db import IntegrityError
from django.test import SimpleTestCase, TestCase

from apps.reviews.models import Review, hash_username


def make_review(**overrides):
    data = {
        "username_hash": hash_username("newscaribe"),
        "fictional_name": "Lucia Fernandez",
        "title": "FIFU is a very useful plugin",
        "comment": "A useful and easy-to-use plugin.\n\nThe support is very good.",
        "quality_score": 5,
        "weeks": 8,
        "posted_at": datetime(2026, 8, 27, 21, 5, tzinfo=timezone.utc),
        "source_order": 0,
        "sentiment": Review.POSITIVE,
    }
    data.update(overrides)
    return Review.objects.create(**data)


class HashUsernameTests(SimpleTestCase):
    def test_is_plain_sha256_hex_of_username(self):
        expected = hashlib.sha256(b"newscaribe").hexdigest()
        self.assertEqual(hash_username("newscaribe"), expected)
        self.assertEqual(len(hash_username("newscaribe")), 64)

    def test_normalises_at_sign_whitespace_and_case(self):
        reference = hash_username("newscaribe")
        for variant in ["@newscaribe", " newscaribe ", "(@newscaribe)", "NewsCaribe"]:
            with self.subTest(variant=variant):
                self.assertEqual(hash_username(variant), reference)

    def test_rejects_empty_username(self):
        for value in ["", "@", "  ", "(@)"]:
            with self.subTest(value=value), self.assertRaises(ValueError):
                hash_username(value)


class ReviewModelTests(TestCase):
    def test_creates_review_with_all_fields(self):
        review = make_review()
        review.refresh_from_db()
        self.assertEqual(review.username_hash, hash_username("newscaribe"))
        self.assertEqual(review.fictional_name, "Lucia Fernandez")
        self.assertEqual(review.title, "FIFU is a very useful plugin")
        self.assertIn("\n\n", review.comment)
        self.assertEqual(review.weeks, 8)
        self.assertEqual(review.quality_score, 5)
        self.assertEqual(review.posted_at.year, 2026)
        self.assertEqual(review.source_order, 0)

    def test_username_hash_is_unique(self):
        make_review()
        with self.assertRaises(IntegrityError):
            make_review(source_order=1)

    def test_username_hash_is_required(self):
        with self.assertRaises(IntegrityError):
            make_review(username_hash=None)

    def test_scraped_at_timestamp_is_set_automatically(self):
        before = datetime.now(timezone.utc)
        review = make_review()
        self.assertIsNotNone(review.scraped_at)
        self.assertGreaterEqual(review.scraped_at, before)

    def test_posted_at_is_optional(self):
        review = make_review(posted_at=None)
        self.assertIsNone(review.posted_at)

    def test_weeks_cannot_be_negative(self):
        with self.assertRaises(IntegrityError):
            make_review(weeks=-1)

    def test_quality_score_must_be_between_zero_and_ten(self):
        make_review(quality_score=0)
        make_review(username_hash=hash_username("max-score"), quality_score=10)
        with self.assertRaises(IntegrityError):
            make_review(username_hash=hash_username("too-high"), quality_score=11)

    def test_sentiment_choices_and_constraint(self):
        self.assertEqual(
            [choice for choice, _ in Review.SENTIMENTS], ["positive", "negative", "neutral"]
        )
        for value in [Review.POSITIVE, Review.NEGATIVE, Review.NEUTRAL]:
            review = make_review(username_hash=hash_username(value), sentiment=value)
            self.assertEqual(review.sentiment, value)
        with self.assertRaises(IntegrityError):
            make_review(username_hash=hash_username("x"), sentiment="mixed")

    def test_sentiment_is_required(self):
        with self.assertRaises(IntegrityError):
            make_review(sentiment=None)

    def test_positive_manager_filters_displayable_reviews(self):
        # Only positive reviews are displayable; they keep the default ordering
        # (highest quality score first, then WordPress.org order).
        make_review(username_hash=hash_username("a"), sentiment=Review.POSITIVE, quality_score=6, source_order=0)
        make_review(username_hash=hash_username("b"), sentiment=Review.NEGATIVE, quality_score=10, source_order=1)
        make_review(username_hash=hash_username("c"), sentiment=Review.NEUTRAL, quality_score=9, source_order=2)
        make_review(username_hash=hash_username("d"), sentiment=Review.POSITIVE, quality_score=8, source_order=3)
        self.assertEqual(
            [r.username_hash for r in Review.objects.positive()],
            [hash_username("d"), hash_username("a")],
        )

    def test_default_ordering_is_quality_then_site_order(self):
        make_review(username_hash=hash_username("c"), quality_score=6, source_order=2)
        make_review(username_hash=hash_username("b"), quality_score=9, source_order=1)
        make_review(username_hash=hash_username("a"), quality_score=9, source_order=0)
        self.assertEqual(
            [(r.quality_score, r.source_order) for r in Review.objects.all()],
            [(9, 0), (9, 1), (6, 2)],
        )

    def test_str_uses_fictional_name_and_title(self):
        review = make_review()
        self.assertEqual(str(review), "Lucia Fernandez: FIFU is a very useful plugin")

    def test_field_capacities(self):
        fields = {f.name: f for f in Review._meta.get_fields()}
        self.assertEqual(fields["username_hash"].max_length, 64)
        self.assertTrue(fields["username_hash"].unique)
        self.assertEqual(fields["fictional_name"].max_length, 80)
        self.assertEqual(fields["title"].max_length, 200)
        self.assertEqual(fields["comment"].get_internal_type(), "TextField")
        self.assertEqual(fields["quality_score"].get_internal_type(), "PositiveSmallIntegerField")
        self.assertEqual(fields["weeks"].get_internal_type(), "PositiveIntegerField")
        self.assertEqual(fields["source_order"].get_internal_type(), "PositiveIntegerField")
        self.assertFalse(fields["scraped_at"].auto_now_add)
        self.assertTrue(callable(fields["scraped_at"].default))

        self.assertEqual(fields["sentiment"].max_length, 8)
        self.assertFalse(fields["sentiment"].null)

    def test_scraped_at_can_be_set_explicitly_to_the_scrape_time(self):
        when = datetime(2026, 11, 1, 18, 34, 28, tzinfo=timezone.utc)
        review = make_review(scraped_at=when)
        review.refresh_from_db()
        self.assertEqual(review.scraped_at, when)


class ScaffoldingTests(TestCase):
    def test_reviews_app_is_installed(self):
        config = apps.get_app_config("reviews")
        self.assertEqual(config.name, "apps.reviews")

    def test_review_is_registered_in_admin(self):
        self.assertTrue(admin.site.is_registered(Review))
        model_admin = admin.site._registry[Review]
        for column in ["fictional_name", "title", "sentiment", "quality_score", "weeks", "posted_at", "scraped_at"]:
            self.assertIn(column, model_admin.list_display)
        self.assertIn("sentiment", model_admin.list_filter)
        self.assertIn("fictional_name", model_admin.search_fields)
        self.assertIn("title", model_admin.search_fields)

    def test_migrations_are_up_to_date(self):
        # --check exits non-zero (SystemExit) when model changes lack a migration.
        call_command("makemigrations", "reviews", "--check", "--dry-run", verbosity=0)

    def test_scraper_dependencies_are_installed(self):
        for module in ["requests", "bs4"]:
            with self.subTest(module=module):
                importlib.import_module(module)

    def test_scraper_dependencies_are_declared_in_requirements(self):
        from pathlib import Path

        requirements = (Path(__file__).resolve().parents[3] / "requirements.txt").read_text()
        self.assertIn("requests", requirements)
        self.assertIn("beautifulsoup4", requirements)
