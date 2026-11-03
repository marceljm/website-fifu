"""Phase 3 tests: the polished reviews file (translated, corrected, fictional names)."""

from __future__ import annotations

import json
import copy
from pathlib import Path

from django.conf import settings
from django.test import SimpleTestCase

from apps.reviews.models import hash_username
from apps.reviews.polished import (
    POLISHED_PATH,
    RAW_PATH,
    load_polished,
    validate_polished,
)


def polished_review(**overrides) -> dict:
    data = {
        "username_hash": hash_username("newscaribe"),
        "fictional_name": "Lucia Fernandez",
        "title": "A very useful FIFU plugin",
        "comment": "I find it a very useful and easy-to-use plugin. The support is very good.",
        "quality_score": 5,
        "weeks": 8,
        "posted_at": "2026-08-27T21:05:00",
        "source_order": 0,
        "sentiment": "positive",
    }
    data.update(overrides)
    return data


def raw_review(**overrides) -> dict:
    data = {
        "username_hash": hash_username("newscaribe"),
        "topic_url": "https://wordpress.org/support/topic/plugin-fifu-muy-util/",
        "title": "plugin FIFU muy útil",
        "comment": "Me parece un plugin muy útil y fácil de manejar.\n\nEl soporte es muy bueno.",
        "relative_date": "2 months ago",
        "weeks": 8,
        "posted_at": "2026-08-27T21:05:00",
        "source_order": 0,
    }
    data.update(overrides)
    return data


def polished_file(reviews) -> dict:
    return {
        "source": "https://wordpress.org/support/plugin/featured-image-from-url/reviews/?filter=5",
        "scraped_at": "2026-11-01T18:34:28Z",
        "polished_at": "2026-11-02T10:00:00Z",
        "total_five_star": len(reviews),
        "reviews": list(reviews),
    }


def raw_file(reviews) -> dict:
    return {
        "source": "https://wordpress.org/support/plugin/featured-image-from-url/reviews/?filter=5",
        "scraped_at": "2026-11-01T18:34:28Z",
        "total_five_star": len(reviews),
        "pages": 1,
        "limit": None,
        "skipped_known": 0,
        "failed": [],
        "reviews": list(reviews),
    }


class ValidatePolishedTests(SimpleTestCase):
    def setUp(self):
        self.second = polished_review(
            username_hash=hash_username("alice"),
            fictional_name="Mateo Rossi",
            title="Great support",
            comment="Fast and friendly support.",
            weeks=34,
            posted_at="2026-02-14T10:00:00",
            source_order=1,
        )
        self.data = polished_file([polished_review(), self.second])

    def assertProblem(self, data, needle, raw=None):
        problems = validate_polished(data, raw)
        self.assertTrue(any(needle in p for p in problems), f"{needle!r} not in {problems}")

    def test_valid_file_has_no_problems(self):
        self.assertEqual(validate_polished(self.data), [])

    def test_header_fields_are_required(self):
        for key in ["source", "scraped_at", "polished_at", "total_five_star", "reviews"]:
            data = copy.deepcopy(self.data)
            del data[key]
            with self.subTest(key=key):
                self.assertProblem(data, key)

    def test_exact_field_set_per_review(self):
        data = copy.deepcopy(self.data)
        data["reviews"][0]["username"] = "newscaribe"
        self.assertProblem(data, "unexpected")
        data = copy.deepcopy(self.data)
        del data["reviews"][0]["fictional_name"]
        self.assertProblem(data, "missing")

    def test_hash_must_be_sha256_and_unique(self):
        data = copy.deepcopy(self.data)
        data["reviews"][0]["username_hash"] = "abc"
        self.assertProblem(data, "username_hash")
        data = copy.deepcopy(self.data)
        data["reviews"][1]["username_hash"] = data["reviews"][0]["username_hash"]
        self.assertProblem(data, "duplicate username_hash")

    def test_fictional_name_rules(self):
        for bad in ["", "Lucia", "lucia fernandez", "Lucia  Fernandez", "Lucia Fernandez 2", "A B"]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["fictional_name"] = bad
            with self.subTest(name=bad):
                self.assertProblem(data, "fictional_name")
        data = copy.deepcopy(self.data)
        data["reviews"][1]["fictional_name"] = data["reviews"][0]["fictional_name"]
        self.assertProblem(data, "duplicate fictional_name")
        for good in ["Noah Bergström", "Ana-Maria O'Neill", "José da Silva", "Aiko Tanaka", "Anton Dvořák", "Zofia Wiśniewski"]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["fictional_name"] = good
            with self.subTest(name=good):
                self.assertEqual([p for p in validate_polished(data) if "fictional_name" in p], [])

    def test_text_rules(self):
        data = copy.deepcopy(self.data)
        data["reviews"][0]["title"] = " "
        data["reviews"][1]["comment"] = ""
        self.assertProblem(data, "title is empty")
        self.assertProblem(data, "comment is empty")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["title"] = "x" * 201
        self.assertProblem(data, "title is longer than 200")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["comment"] = "  padded  "
        self.assertProblem(data, "surrounding whitespace")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["comment"] = "<p>Hello</p>"
        self.assertProblem(data, "HTML")

    def test_sentiment_is_required_and_restricted(self):
        for bad in ["", "mixed", "Positive", None, 1]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["sentiment"] = bad
            with self.subTest(sentiment=bad):
                self.assertProblem(data, "sentiment")
        for good in ["positive", "negative", "neutral"]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["sentiment"] = good
            with self.subTest(sentiment=good):
                self.assertEqual([p for p in validate_polished(data) if "sentiment" in p], [])

    def test_text_is_a_single_plain_paragraph(self):
        for bad in ["First paragraph.\n\nSecond paragraph.", "Line one\nline two", "Tab\there"]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["comment"] = bad
            with self.subTest(text=bad):
                self.assertProblem(data, "single paragraph")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["comment"] = "Double  space inside."
        self.assertProblem(data, "single paragraph")

    def test_no_emoji_or_emoticons(self):
        for bad in [
            "Game changer! 🎉",
            "Good one ☝️",
            "Thank you 🙏❤️",
            "Good job to the programmer. 👍",
            "It makes life easier :D Thank you.",
            "Easy to use and fast support :-)",
            "Thanks for the quick support :) I enjoy it.",
            "Finally a plugin that works ;-)",
            "Great plugin (y)",
            "Love it <3",
        ]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["comment"] = bad
            with self.subTest(text=bad):
                self.assertProblem(data, "emoji")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["title"] = "Easy to use :-)"
        self.assertProblem(data, "emoji")
        for good in ["Rated 5/5 – worth it (really).", "It's “great” — thanks… 100%!", "Ratio 8:1 and 10:30 am."]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["comment"] = good
            with self.subTest(text=good):
                self.assertEqual([p for p in validate_polished(data) if "emoji" in p], [])

    def test_no_handles_emails_or_revision_logs(self):
        for bad in [
            "Working great on @Jamfreeradio",
            "Thanks Marcel @marceljm for this",
            "Contact me at someone@example.com",
            "Great plugin.\n\nThis topic was modified 1 year ago by MarkRH.",
            "This reply was modified 2 weeks ago by someone.",
        ]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["comment"] = bad
            with self.subTest(text=bad):
                self.assertProblem(data, "private")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["title"] = "Amazing! Working great on @Jamfreeradio"
        self.assertProblem(data, "private")

    def test_text_must_be_translated_to_latin_script(self):
        for bad in ["作業効率が上がった", "Отличный плагин!", "非常棒且快速的支援", "ممتاز"]:
            data = copy.deepcopy(self.data)
            data["reviews"][0]["title"] = bad
            with self.subTest(text=bad):
                self.assertProblem(data, "translated")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["comment"] = "Saves me time every week. 🎉 Thank you, Marcel!"
        self.assertEqual([p for p in validate_polished(data) if "translated" in p], [])

    def test_weeks_dates_and_order(self):
        data = copy.deepcopy(self.data)
        data["reviews"][0]["weeks"] = -1
        data["reviews"][1]["posted_at"] = "yesterday"
        self.assertProblem(data, "weeks")
        self.assertProblem(data, "posted_at")
        data = copy.deepcopy(self.data)
        data["reviews"][0]["weeks"] = "8"
        self.assertProblem(data, "weeks")
        data = copy.deepcopy(self.data)
        data["reviews"][1]["source_order"] = 0
        self.assertProblem(data, "source_order")
        data = copy.deepcopy(self.data)
        data["reviews"].reverse()
        self.assertProblem(data, "source_order")

    def test_quality_score_must_be_an_integer_from_zero_to_ten(self):
        for value in (-1, 11, True, "8"):
            data = copy.deepcopy(self.data)
            data["reviews"][0]["quality_score"] = value
            with self.subTest(value=value):
                self.assertProblem(data, "quality_score")

    def test_count_matches_total(self):
        data = copy.deepcopy(self.data)
        data["total_five_star"] = 3
        self.assertProblem(data, "total_five_star")

    def test_cross_check_against_raw_file(self):
        raw = raw_file([
            raw_review(),
            raw_review(
                username_hash=hash_username("alice"),
                topic_url="https://wordpress.org/support/topic/great-support/",
                title="Great support",
                comment="Fast and friendly support.",
                relative_date="8 months, 2 weeks ago",
                weeks=34,
                posted_at="2026-02-14T10:00:00",
                source_order=1,
            ),
        ])
        self.assertEqual(validate_polished(self.data, raw), [])
        data = copy.deepcopy(self.data)
        data["reviews"][1]["weeks"] = 35
        self.assertProblem(data, "weeks", raw)
        data = copy.deepcopy(self.data)
        data["reviews"][1]["posted_at"] = "2026-02-14T11:00:00"
        self.assertProblem(data, "posted_at", raw)
        data = copy.deepcopy(self.data)
        data["reviews"][1]["source_order"] = 2
        self.assertProblem(data, "source_order", raw)
        data = copy.deepcopy(self.data)
        data["reviews"].pop()
        self.assertProblem(data, "missing from polished", raw)
        data = copy.deepcopy(self.data)
        data["reviews"].append(polished_review(username_hash="c" * 64, fictional_name="Zoe Park", source_order=2))
        self.assertProblem(data, "not in raw", raw)
        data = copy.deepcopy(self.data)
        data["scraped_at"] = "2020-01-01T00:00:00Z"
        self.assertProblem(data, "scraped_at", raw)

    def test_cross_check_requires_polished_text_to_be_different_when_raw_is_foreign(self):
        raw = raw_file([raw_review()])
        data = polished_file([polished_review(comment=raw["reviews"][0]["comment"])])
        self.assertProblem(data, "identical", raw)


class CommittedPolishedFileTests(SimpleTestCase):
    """The real data file shipped in backend/data/ must always be valid."""

    def test_paths(self):
        self.assertEqual(POLISHED_PATH, Path(settings.BASE_DIR) / "data" / "reviews_polished.json")
        self.assertEqual(RAW_PATH, Path(settings.BASE_DIR) / "data" / "reviews_raw.json")

    def test_file_exists_and_is_valid(self):
        data = load_polished()
        self.assertEqual(validate_polished(data), [])
        self.assertEqual(len(data["reviews"]), 228)
        self.assertEqual(data["total_five_star"], 228)

    def test_file_is_utf8_with_readable_unicode(self):
        text = POLISHED_PATH.read_text(encoding="utf-8")
        self.assertNotIn("\\u", text)
        json.loads(text)

    def test_known_mentions_are_neutralised(self):
        by_hash = {r["username_hash"]: r for r in load_polished()["reviews"]}
        radio = next(r for r in by_hash.values() if "radio station" in r["comment"])
        self.assertNotIn("@", radio["title"] + radio["comment"])
        marcel = next(r for r in by_hash.values() if "geniuses of the century" in r["comment"])
        self.assertIn("Marcel", marcel["comment"])
        self.assertNotIn("@", marcel["comment"])

    def test_no_revision_logs_or_sign_off_names_remain(self):
        for review in load_polished()["reviews"]:
            text = review["title"] + "\n" + review["comment"]
            self.assertNotIn("was modified", text)
            self.assertNotIn("White Code Agency", text)
            self.assertNotIn("Machado", text)

    def test_newest_three_are_translated_english(self):
        reviews = sorted(load_polished()["reviews"], key=lambda r: (r["weeks"], r["source_order"]))[:3]
        self.assertEqual([r["weeks"] for r in reviews], [8, 14, 22])
        self.assertTrue(reviews[0]["title"].lower().startswith("a very useful"))
        self.assertIn("efficiency", reviews[2]["comment"].lower())

    def test_sentiment_classification(self):
        reviews = load_polished()["reviews"]
        by_sentiment = {}
        for review in reviews:
            by_sentiment.setdefault(review["sentiment"], []).append(review["title"])
        self.assertEqual(
            sorted(by_sentiment["negative"]),
            sorted([
                "A very useful FIFU plugin",
                "It was already good",
                "Is the plugin hacked?",
                "Broken (resolved)",
                "Not showing the image on the WPtouch homepage",
            ]),
        )
        self.assertEqual(
            sorted(by_sentiment["neutral"]),
            sorted(["Auto set featured media from post content", "OK, OK", "."]),
        )
        self.assertEqual(len(by_sentiment["positive"]), 228 - 5 - 3)

    def test_comments_are_plain_single_paragraphs(self):
        for review in load_polished()["reviews"]:
            self.assertNotIn("\n", review["comment"])
            self.assertNotIn("\n", review["title"])
            self.assertNotIn("  ", review["comment"])

    def test_matches_raw_scrape_when_available(self):
        if not RAW_PATH.exists():
            self.skipTest("raw scrape not present (git-ignored)")
        raw = json.loads(RAW_PATH.read_text(encoding="utf-8"))
        self.assertEqual(validate_polished(load_polished(), raw), [])
