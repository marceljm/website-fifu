"""Thin Django wrapper around the standalone scraper (backend/scraper/fifu_reviews.py).

Supplies the stored review count and hashes from the ORM so the scraper can
abort when nothing is new and skip reviews that are already imported.
"""

from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from apps.reviews.models import Review
from scraper import fifu_reviews as scraper

DEFAULT_OUT = Path(settings.BASE_DIR) / "data" / "reviews_raw.json"
DEFAULT_CACHE = Path(settings.BASE_DIR) / "data" / "html_cache"


class Command(BaseCommand):
    help = "Scrape new 5-star FIFU reviews from WordPress.org into a raw JSON file."

    def add_arguments(self, parser):
        parser.add_argument("--out", default=str(DEFAULT_OUT), help="output JSON path")
        parser.add_argument("--limit", type=int, default=None, help="stop after N new reviews")
        parser.add_argument("--cache-dir", default=str(DEFAULT_CACHE), help="save fetched pages here")
        parser.add_argument("--offline", action="store_true", help="parse from the cache only")
        parser.add_argument(
            "--delay", type=float, default=scraper.DEFAULT_DELAY, help="seconds between requests (default 10)"
        )

    def handle(self, *args, **options):
        log = lambda message: self.stdout.write(message)  # noqa: E731
        known_hashes = set(Review.objects.values_list("username_hash", flat=True))
        fetcher = scraper.HttpFetcher(delay=options["delay"])
        fetcher = scraper.CachingFetcher(fetcher, Path(options["cache_dir"]), offline=options["offline"])
        try:
            result = scraper.scrape(
                fetcher,
                known_hashes=known_hashes,
                known_count=len(known_hashes),
                limit=options["limit"],
                log=log,
            )
        except scraper.NoNewReviews as exc:
            raise CommandError(str(exc))
        out = Path(options["out"])
        scraper.write_result(result, out)
        log(f"Wrote {len(result['reviews'])} review(s) to {out}")
        if result["failed"]:
            raise CommandError(
                f"{len(result['failed'])} topic(s) failed to scrape; see {out} and re-run."
            )
