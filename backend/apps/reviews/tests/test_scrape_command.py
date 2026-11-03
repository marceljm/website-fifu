"""Tests for `manage.py scrape_reviews`, the thin Django wrapper around the scraper."""

from __future__ import annotations

import json
import tempfile
from io import StringIO
from pathlib import Path
from unittest import mock

from django.core.management import CommandError, call_command
from django.test import TestCase

from apps.reviews.models import Review, hash_username
from scraper import fifu_reviews as scraper
from scraper.fifu_reviews import CachingFetcher, DictFetcher, listing_url

from .fixtures import SAMPLE_REVIEWS, make_site, topic_url


def store(review: dict, order: int) -> Review:
    return Review.objects.create(
        username_hash=hash_username(review["username"]),
        fictional_name="Someone",
        title=review["title"],
        comment="\n\n".join(review["paragraphs"]),
        weeks=0,
        source_order=order,
        sentiment=Review.POSITIVE,
    )


class ScrapeReviewsCommandTests(TestCase):
    def setUp(self):
        self.site = make_site(SAMPLE_REVIEWS)
        self.tmp = tempfile.TemporaryDirectory()
        self.out = Path(self.tmp.name) / "reviews_raw.json"
        patcher = mock.patch.object(scraper, "HttpFetcher", return_value=DictFetcher(self.site))
        self.http = patcher.start()
        self.addCleanup(patcher.stop)
        self.addCleanup(self.tmp.cleanup)

    def run_command(self, *args):
        stdout = StringIO()
        if "--cache-dir" not in args:  # never write into the real backend/data/ from tests
            args = ("--cache-dir", str(Path(self.tmp.name) / "cache"), *args)
        call_command("scrape_reviews", "--out", str(self.out), *args, stdout=stdout)
        return stdout.getvalue()

    def test_writes_all_reviews_when_table_is_empty(self):
        output = self.run_command()
        data = json.loads(self.out.read_text(encoding="utf-8"))
        self.assertEqual(len(data["reviews"]), 7)
        self.assertEqual(data["total_five_star"], 7)
        self.assertIn("7", output)

    def test_aborts_when_table_count_equals_site_count(self):
        for order, review in enumerate(SAMPLE_REVIEWS):
            store(review, order)
        with self.assertRaises(CommandError) as ctx:
            self.run_command()
        self.assertIn("no new reviews", str(ctx.exception).lower())
        self.assertFalse(self.out.exists())

    def test_skips_reviews_already_in_the_database(self):
        for order, review in enumerate(SAMPLE_REVIEWS[:4]):
            store(review, order)
        self.run_command()
        data = json.loads(self.out.read_text(encoding="utf-8"))
        self.assertEqual(
            [r["topic_url"] for r in data["reviews"]],
            [topic_url(r["slug"]) for r in SAMPLE_REVIEWS[4:]],
        )
        self.assertEqual(data["skipped_known"], 4)

    def test_limit_and_delay_are_forwarded(self):
        self.run_command("--limit", "2", "--delay", "0.25")
        data = json.loads(self.out.read_text(encoding="utf-8"))
        self.assertEqual(len(data["reviews"]), 2)
        self.assertEqual(self.http.call_args.kwargs.get("delay"), 0.25)

    def test_default_delay_is_ten_seconds(self):
        self.run_command("--limit", "1")
        self.assertEqual(self.http.call_args.kwargs.get("delay"), 10.0)

    def test_offline_reads_from_cache_without_http(self):
        cache = Path(self.tmp.name) / "cache"
        warm = CachingFetcher(DictFetcher(self.site), cache)
        for url in self.site:
            warm.get(url)
        self.http.return_value = DictFetcher({})
        self.run_command("--offline", "--cache-dir", str(cache))
        data = json.loads(self.out.read_text(encoding="utf-8"))
        self.assertEqual(len(data["reviews"]), 7)

    def test_failed_topics_raise_after_writing_partial_output(self):
        del self.site[topic_url("works-perfectly")]
        self.http.return_value = DictFetcher(self.site)
        with self.assertRaises(CommandError) as ctx:
            self.run_command()
        self.assertIn("1 topic", str(ctx.exception))
        data = json.loads(self.out.read_text(encoding="utf-8"))
        self.assertEqual(len(data["reviews"]), 6)

    def test_default_output_path_is_backend_data_dir(self):
        stdout = StringIO()
        cache = Path(self.tmp.name) / "cache"  # never write into the real backend/data/ from tests
        with mock.patch.object(scraper, "write_result") as write:
            call_command("scrape_reviews", "--cache-dir", str(cache), stdout=stdout)
        path = Path(write.call_args.args[1])
        self.assertEqual(path.name, "reviews_raw.json")
        self.assertEqual(path.parent.name, "data")
        self.assertEqual(path.parent.parent.name, "backend")
        self.assertEqual(self.http.return_value.requested[0], listing_url(1))
