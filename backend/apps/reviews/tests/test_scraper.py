"""Phase 2 tests for the standalone scraper (backend/scraper/fifu_reviews.py)."""

from __future__ import annotations

import hashlib
import json
import sqlite3
import tempfile
from pathlib import Path
from unittest import mock

import requests
from django.test import SimpleTestCase

from apps.reviews.models import hash_username as model_hash_username
from scraper import fifu_reviews as scraper
from scraper.fifu_reviews import (
    CachingFetcher,
    DictFetcher,
    HttpFetcher,
    NoNewReviews,
    hash_username,
    listing_url,
    load_known_from_sqlite,
    parse_absolute_date,
    parse_listing,
    parse_topic,
    relative_to_weeks,
    scrape,
    validate,
)

from .fixtures import SAMPLE_REVIEWS, make_listing, make_site, make_topic, read_fixture, topic_url


class StandaloneTests(SimpleTestCase):
    def test_script_does_not_import_django_or_project_modules(self):
        source = Path(scraper.__file__).read_text(encoding="utf-8")
        for forbidden in ["django", "from apps", "import apps", "from config", "import config"]:
            self.assertNotIn(forbidden, source)

    def test_hash_matches_the_django_model_helper(self):
        for username in ["newscaribe", "@Alice", "(@bob_77)", " carol "]:
            self.assertEqual(hash_username(username), model_hash_username(username))
        self.assertEqual(hash_username("newscaribe"), hashlib.sha256(b"newscaribe").hexdigest())

    def test_listing_urls(self):
        base = "https://wordpress.org/support/plugin/featured-image-from-url/reviews/"
        self.assertEqual(listing_url(1), base + "?filter=5")
        self.assertEqual(listing_url(2), base + "page/2/?filter=5")
        self.assertEqual(listing_url(8), base + "page/8/?filter=5")


class RelativeDateTests(SimpleTestCase):
    def test_one_month_is_four_weeks_and_one_year_is_forty_eight(self):
        cases = {
            "8 months, 2 weeks ago": 34,
            "2 months ago": 8,
            "1 year ago": 48,
            "1 year, 1 month ago": 52,
            "5 years, 4 months ago": 256,
            "11 months, 3 weeks ago": 47,
            "3 weeks ago": 3,
            "1 week ago": 1,
        }
        for text, weeks in cases.items():
            with self.subTest(text=text):
                self.assertEqual(relative_to_weeks(text), weeks)

    def test_days_hours_and_minutes_floor_to_zero_weeks(self):
        for text in ["5 days ago", "23 hours ago", "10 minutes ago", "1 second ago"]:
            with self.subTest(text=text):
                self.assertEqual(relative_to_weeks(text), 0)
        self.assertEqual(relative_to_weeks("3 weeks, 6 days ago"), 3)

    def test_tolerates_spacing_case_and_missing_ago(self):
        self.assertEqual(relative_to_weeks("  1 Year,  2 Months  "), 56)
        self.assertEqual(relative_to_weeks("2 months"), 8)

    def test_rejects_unparseable_text(self):
        for text in ["", "yesterday", "a while ago", "2 fortnights ago"]:
            with self.subTest(text=text), self.assertRaises(ValueError):
                relative_to_weeks(text)


class AbsoluteDateTests(SimpleTestCase):
    def test_parses_wordpress_org_title_format_to_iso(self):
        self.assertEqual(parse_absolute_date("August 27, 2026 at 9:05 pm"), "2026-08-27T21:05:00")
        self.assertEqual(parse_absolute_date("August 31, 2026 at 1:56 am"), "2026-08-31T01:56:00")
        self.assertEqual(parse_absolute_date("June 1, 2021 at 12:30 pm"), "2021-06-01T12:30:00")
        self.assertEqual(parse_absolute_date("June 1, 2021 at 12:05 am"), "2021-06-01T00:05:00")

    def test_does_not_depend_on_system_locale(self):
        # strptime("%B", "%p") is locale dependent; the parser must not use it.
        source = Path(scraper.__file__).read_text(encoding="utf-8")
        self.assertNotIn("strptime", source)

    def test_returns_none_for_unknown_format(self):
        self.assertIsNone(parse_absolute_date(""))
        self.assertIsNone(parse_absolute_date("27/08/2026"))


class ParseListingTests(SimpleTestCase):
    def test_real_first_page(self):
        page = parse_listing(read_fixture("listing-page-1.html"))
        self.assertEqual(page.total_five_star, 228)
        self.assertEqual(page.last_page, 8)
        self.assertEqual(len(page.topics), 30)
        first = page.topics[0]
        self.assertEqual(first.title, "plugin FIFU muy útil")
        self.assertEqual(first.url, "https://wordpress.org/support/topic/plugin-fifu-muy-util/")
        self.assertEqual(first.topic_id, 19005008)
        self.assertEqual(first.author, "newscaribe")
        self.assertTrue(all(t.is_five_star for t in page.topics))
        self.assertEqual(
            page.topics[-1].url,
            "https://wordpress.org/support/topic/great-plugin-and-even-better-service-3/",
        )

    def test_real_second_page(self):
        page = parse_listing(read_fixture("listing-page-2.html"))
        self.assertEqual(page.total_five_star, 228)
        self.assertEqual(page.last_page, 8)
        self.assertEqual(len(page.topics), 30)
        self.assertEqual(
            page.topics[0].url,
            "https://wordpress.org/support/topic/great-functionality-great-support-7/",
        )
        first = parse_listing(read_fixture("listing-page-1.html"))
        self.assertFalse({t.url for t in first.topics} & {t.url for t in page.topics})

    def test_synthetic_listing_controls(self):
        html = make_listing(
            [
                {"slug": "a", "title": "A", "author": "ann"},
                {"slug": "b", "title": "B", "author": "ben", "rating": "4 out of 5 stars"},
            ],
            page=2,
            last_page=3,
            total_five_star=7,
        )
        page = parse_listing(html)
        self.assertEqual(page.total_five_star, 7)
        self.assertEqual(page.last_page, 3)
        self.assertEqual([t.title for t in page.topics], ["A", "B"])
        self.assertEqual([t.is_five_star for t in page.topics], [True, False])

    def test_missing_pagination_means_single_page(self):
        html = make_listing([{"slug": "a", "title": "A", "author": "ann"}], last_page=1)
        self.assertEqual(parse_listing(html).last_page, 1)


class ParseTopicTests(SimpleTestCase):
    def test_real_topic_page(self):
        topic = parse_topic(read_fixture("topic-plugin-fifu-muy-util.html"))
        self.assertEqual(topic.title, "plugin FIFU muy útil")
        self.assertEqual(topic.username, "newscaribe")
        self.assertEqual(topic.relative_date, "2 months ago")
        self.assertEqual(topic.absolute_date, "August 27, 2026 at 9:05 pm")
        self.assertTrue(topic.is_five_star)
        self.assertEqual(len(topic.paragraphs), 2)
        self.assertTrue(topic.paragraphs[0].startswith("Me parece un plugin muy útil"))
        self.assertTrue(topic.paragraphs[1].startswith("Tengo una duda"))
        self.assertEqual(topic.comment, "\n\n".join(topic.paragraphs))
        # Only the reviewer's post, never the plugin author's reply.
        self.assertNotIn("Muchas gracias", topic.comment)
        self.assertNotEqual(topic.username, "marceljm3")

    def test_uses_nicename_not_display_name(self):
        html = make_topic(
            slug="x",
            title="X",
            username="real_handle",
            display_name="Pretty Name",
            paragraphs=["Hi"],
        )
        self.assertEqual(parse_topic(html).username, "real_handle")

    def test_topic_without_replies(self):
        html = make_topic(slug="x", title="X", username="u", paragraphs=["Only post"], with_reply=False)
        self.assertEqual(parse_topic(html).comment, "Only post")

    def test_line_breaks_inside_a_paragraph_are_kept(self):
        html = make_topic(slug="x", title="X", username="u", paragraphs=["placeholder"])
        html = html.replace("<p class=\"wp-block-paragraph\">placeholder</p>", "<p>Line one<br/>Line two</p>")
        self.assertEqual(parse_topic(html).comment, "Line one\nLine two")

    def test_content_without_paragraph_tags(self):
        html = make_topic(slug="x", title="X", username="u", paragraphs=["placeholder"])
        html = html.replace("<p class=\"wp-block-paragraph\">placeholder</p>", "Bare   text  here")
        self.assertEqual(parse_topic(html).comment, "Bare text here")

    def test_revision_log_with_editor_username_is_stripped(self):
        # WordPress.org appends bbPress's revision log inside .bbp-topic-content.
        html = make_topic(slug="x", title="X", username="u", paragraphs=["placeholder"])
        html = html.replace(
            '<p class="wp-block-paragraph">placeholder</p>',
            '<p>Great plugin.</p><p>Thanks!</p>'
            '<ul id="bbp-topic-revision-log-1" class="bbp-topic-revision-log">'
            '<li class="bbp-topic-revision-log-item">This topic was modified 1 year, 1 month ago by '
            '<a href="https://wordpress.org/support/users/markrh/">MarkRH</a>. Reason: Typo</li>'
            '<li class="bbp-topic-revision-log-item">This topic was modified 1 year ago by '
            '<a href="https://wordpress.org/support/users/mod/">Jan Dembowski</a>.</li></ul>',
        )
        topic = parse_topic(html)
        self.assertEqual(topic.paragraphs, ["Great plugin.", "Thanks!"])
        self.assertNotIn("MarkRH", topic.comment)

    def test_revision_text_without_markup_is_dropped_too(self):
        html = make_topic(slug="x", title="X", username="u", paragraphs=["placeholder"])
        html = html.replace(
            '<p class="wp-block-paragraph">placeholder</p>',
            '<p>Great plugin.</p><p>This topic was modified 8 years ago by warcraft14115. Reason: policy</p>',
        )
        self.assertEqual(parse_topic(html).comment, "Great plugin.")

    def test_missing_lead_post_raises(self):
        with self.assertRaises(ValueError):
            parse_topic("<html><body><h1 class='page-title'>X</h1></body></html>")


class ScrapeFlowTests(SimpleTestCase):
    def setUp(self):
        self.site = make_site(SAMPLE_REVIEWS, per_page=3)
        self.fetcher = DictFetcher(self.site)

    def test_full_scrape_walks_every_page_and_topic_in_site_order(self):
        result = scrape(self.fetcher, log=lambda *_: None)
        self.assertEqual(result["total_five_star"], 7)
        self.assertEqual(result["pages"], 3)
        self.assertEqual(len(result["reviews"]), 7)
        self.assertEqual([r["source_order"] for r in result["reviews"]], list(range(7)))
        self.assertEqual(
            [r["topic_url"] for r in result["reviews"]],
            [topic_url(r["slug"]) for r in SAMPLE_REVIEWS],
        )
        self.assertEqual(
            self.fetcher.requested[:3], [listing_url(1), listing_url(2), listing_url(3)]
        )
        self.assertEqual(len(self.fetcher.requested), 3 + 7)
        self.assertEqual(result["failed"], [])
        self.assertEqual(result["skipped_known"], 0)
        self.assertIsNone(result["limit"])
        self.assertIn("scraped_at", result)
        self.assertEqual(result["source"], listing_url(1))

    def test_review_records_have_hash_and_no_username(self):
        result = scrape(self.fetcher, log=lambda *_: None)
        first = result["reviews"][0]
        self.assertEqual(first["username_hash"], hash_username("newscaribe"))
        self.assertEqual(first["title"], "plugin FIFU muy útil")
        self.assertEqual(first["comment"], "Me parece un plugin muy útil.\n\nTengo una duda.")
        self.assertEqual(first["relative_date"], "2 months ago")
        self.assertEqual(first["weeks"], 8)
        self.assertEqual(first["posted_at"], "2026-08-27T21:05:00")
        self.assertEqual(
            set(first),
            {"username_hash", "topic_url", "title", "comment", "relative_date", "weeks", "posted_at", "source_order"},
        )
        self.assertNotIn("newscaribe", json.dumps(result))
        weeks = {r["topic_url"]: r["weeks"] for r in result["reviews"]}
        self.assertEqual(weeks[topic_url("great-support")], 34)
        self.assertEqual(weeks[topic_url("muito-bom")], 256)
        self.assertEqual(weeks[topic_url("thank-you")], 0)

    def test_aborts_before_fetching_topics_when_count_is_unchanged(self):
        with self.assertRaises(NoNewReviews):
            scrape(self.fetcher, known_count=7, log=lambda *_: None)
        self.assertEqual(self.fetcher.requested, [listing_url(1)])

    def test_known_hashes_are_skipped(self):
        known = {hash_username(r["username"]) for r in SAMPLE_REVIEWS[:5]}
        result = scrape(self.fetcher, known_hashes=known, known_count=5, log=lambda *_: None)
        self.assertEqual(result["skipped_known"], 5)
        self.assertEqual([r["topic_url"] for r in result["reviews"]], [topic_url("five-stars"), topic_url("thank-you")])
        # source_order still reflects the position on the site, not in this run.
        self.assertEqual([r["source_order"] for r in result["reviews"]], [5, 6])

    def test_limit_stops_early_and_is_recorded(self):
        result = scrape(self.fetcher, limit=2, log=lambda *_: None)
        self.assertEqual(len(result["reviews"]), 2)
        self.assertEqual(result["limit"], 2)
        self.assertEqual(result["total_five_star"], 7)

    def test_limit_bypasses_the_unchanged_count_abort(self):
        result = scrape(self.fetcher, known_count=7, limit=1, log=lambda *_: None)
        self.assertEqual(len(result["reviews"]), 1)

    def test_failed_topic_is_recorded_and_run_continues(self):
        broken = dict(self.site)
        del broken[topic_url("works-perfectly")]
        result = scrape(DictFetcher(broken), log=lambda *_: None)
        self.assertEqual(len(result["reviews"]), 6)
        self.assertEqual(len(result["failed"]), 1)
        self.assertEqual(result["failed"][0]["topic_url"], topic_url("works-perfectly"))
        self.assertIn("error", result["failed"][0])

    def test_non_five_star_rows_are_skipped(self):
        reviews = [dict(r) for r in SAMPLE_REVIEWS[:3]]
        reviews[1]["rating"] = "4 out of 5 stars"
        messages = []
        result = scrape(DictFetcher(make_site(reviews, total_five_star=2)), log=lambda m: messages.append(m))
        self.assertEqual([r["topic_url"] for r in result["reviews"]], [topic_url(reviews[0]["slug"]), topic_url(reviews[2]["slug"])])
        self.assertTrue(any("not a 5-star" in m for m in messages))

    def test_same_user_twice_keeps_only_the_first(self):
        reviews = [dict(r) for r in SAMPLE_REVIEWS[:3]]
        reviews[2]["username"] = reviews[0]["username"]
        result = scrape(DictFetcher(make_site(reviews)), log=lambda *_: None)
        self.assertEqual(len(result["reviews"]), 2)
        self.assertEqual(len({r["username_hash"] for r in result["reviews"]}), 2)

    def test_duplicate_topics_across_pages_are_fetched_once(self):
        site = make_site(SAMPLE_REVIEWS[:3], per_page=3)
        site[listing_url(2)] = site[listing_url(1)]
        site[listing_url(1)] = make_listing(
            [{"slug": r["slug"], "title": r["title"], "author": r["username"]} for r in SAMPLE_REVIEWS[:3]],
            page=1,
            last_page=2,
            total_five_star=3,
        )
        result = scrape(DictFetcher(site), log=lambda *_: None)
        self.assertEqual(len(result["reviews"]), 3)

    def test_fails_loudly_when_total_cannot_be_read(self):
        site = dict(self.site)
        # Drop the 5-star bar entirely (its anchor is the only one ending in reviews/?filter=5).
        site[listing_url(1)] = site[listing_url(1)].replace('reviews/?filter=5"', 'reviews/?filter=0"')
        with self.assertRaises(ValueError):
            scrape(DictFetcher(site), log=lambda *_: None)


class ValidateTests(SimpleTestCase):
    def setUp(self):
        self.result = scrape(DictFetcher(make_site(SAMPLE_REVIEWS)), log=lambda *_: None)

    def test_scrape_output_is_valid(self):
        self.assertEqual(validate(self.result), [])

    def test_detects_count_mismatch_unless_limited(self):
        data = json.loads(json.dumps(self.result))
        data["reviews"].pop()
        self.assertTrue(any("total_five_star" in p for p in validate(data)))
        data["limit"] = 6
        self.assertEqual([p for p in validate(data) if "total_five_star" in p], [])

    def test_detects_bad_hashes_and_duplicates(self):
        data = json.loads(json.dumps(self.result))
        data["reviews"][1]["username_hash"] = data["reviews"][0]["username_hash"]
        data["reviews"][2]["username_hash"] = "not-a-hash"
        problems = validate(data)
        self.assertTrue(any("duplicate" in p for p in problems))
        self.assertTrue(any("username_hash" in p for p in problems))

    def test_detects_weeks_inconsistent_with_relative_date(self):
        data = json.loads(json.dumps(self.result))
        data["reviews"][0]["weeks"] = 99
        self.assertTrue(any("weeks" in p for p in validate(data)))

    def test_detects_empty_text_bad_dates_and_order(self):
        data = json.loads(json.dumps(self.result))
        data["reviews"][0]["title"] = "  "
        data["reviews"][1]["comment"] = ""
        data["reviews"][2]["posted_at"] = "yesterday"
        data["reviews"][3]["source_order"] = 42
        problems = validate(data)
        for needle in ["title", "comment", "posted_at", "source_order"]:
            self.assertTrue(any(needle in p for p in problems), needle)

    def test_detects_failed_topics_and_missing_header(self):
        data = json.loads(json.dumps(self.result))
        data["failed"] = [{"topic_url": "x", "error": "boom"}]
        del data["scraped_at"]
        problems = validate(data)
        self.assertTrue(any("failed" in p for p in problems))
        self.assertTrue(any("scraped_at" in p for p in problems))

    def test_rejects_username_leak(self):
        data = json.loads(json.dumps(self.result))
        data["reviews"][0]["username"] = "newscaribe"
        self.assertTrue(any("username" in p for p in validate(data)))


class CachingFetcherTests(SimpleTestCase):
    def test_online_mode_fetches_and_writes_cache(self):
        site = make_site(SAMPLE_REVIEWS[:1])
        inner = DictFetcher(site)
        with tempfile.TemporaryDirectory() as tmp:
            fetcher = CachingFetcher(inner, Path(tmp))
            html = fetcher.get(listing_url(1))
            self.assertEqual(html, site[listing_url(1)])
            files = sorted(p.name for p in Path(tmp).iterdir())
            self.assertEqual(len(files), 1)
            self.assertTrue(files[0].endswith(".html"))
            self.assertEqual(inner.requested, [listing_url(1)])
            # Online mode always refreshes; cache is written, not read.
            fetcher.get(listing_url(1))
            self.assertEqual(len(inner.requested), 2)

    def test_offline_mode_reads_cache_and_never_fetches(self):
        site = make_site(SAMPLE_REVIEWS[:1])
        with tempfile.TemporaryDirectory() as tmp:
            CachingFetcher(DictFetcher(site), Path(tmp)).get(topic_url("plugin-fifu-muy-util"))
            inner = DictFetcher(site)
            offline = CachingFetcher(inner, Path(tmp), offline=True)
            self.assertEqual(offline.get(topic_url("plugin-fifu-muy-util")), site[topic_url("plugin-fifu-muy-util")])
            self.assertEqual(inner.requested, [])
            with self.assertRaises(FileNotFoundError):
                offline.get(listing_url(1))

    def test_cache_file_names_are_readable_and_distinct(self):
        with tempfile.TemporaryDirectory() as tmp:
            fetcher = CachingFetcher(DictFetcher({}), Path(tmp))
            names = {fetcher.cache_path(u).name for u in [listing_url(1), listing_url(2), topic_url("a"), topic_url("b")]}
            self.assertEqual(len(names), 4)
            self.assertIn("listing-page-1.html", names)
            self.assertIn("listing-page-2.html", names)
            self.assertIn("topic-a.html", names)


class HttpFetcherTests(SimpleTestCase):
    def _response(self, status, text="<html/>"):
        response = mock.Mock()
        response.status_code = status
        response.text = text
        response.headers = {}
        return response

    def _session(self, *responses):
        session = requests.Session()
        session.get = mock.Mock(side_effect=list(responses))
        return session

    def test_sets_user_agent_and_returns_text(self):
        session = self._session(self._response(200, "<html>ok</html>"))
        fetcher = HttpFetcher(session=session, delay=0)
        self.assertEqual(fetcher.get("https://example.org/"), "<html>ok</html>")
        self.assertIn("FIFU", session.headers["User-Agent"])
        self.assertIn("timeout", session.get.call_args.kwargs)

    def test_retries_on_429_and_5xx_then_succeeds(self):
        session = self._session(self._response(429), self._response(503), self._response(200, "done"))
        sleeps = []
        fetcher = HttpFetcher(session=session, delay=0, backoff=1.0, sleep=sleeps.append)
        self.assertEqual(fetcher.get("https://example.org/"), "done")
        self.assertEqual(session.get.call_count, 3)
        self.assertEqual(len(sleeps), 2)
        self.assertLess(sleeps[0], sleeps[1])

    def test_gives_up_after_max_attempts(self):
        session = self._session(*[self._response(503)] * 3)
        fetcher = HttpFetcher(session=session, delay=0, max_attempts=3, sleep=lambda _: None)
        with self.assertRaises(RuntimeError):
            fetcher.get("https://example.org/")
        self.assertEqual(session.get.call_count, 3)

    def test_404_is_not_retried(self):
        session = self._session(*[self._response(404)] * 4)
        fetcher = HttpFetcher(session=session, delay=0, sleep=lambda _: None)
        with self.assertRaises(RuntimeError):
            fetcher.get("https://example.org/")
        self.assertEqual(session.get.call_count, 1)

    def test_default_delay_is_ten_seconds(self):
        self.assertEqual(HttpFetcher(session=self._session(), delay=scraper.DEFAULT_DELAY).delay, 10.0)
        self.assertEqual(HttpFetcher(session=self._session()).delay, 10.0)
        self.assertEqual(scraper.build_parser().parse_args([]).delay, 10.0)

    def test_waits_between_successive_requests(self):
        session = self._session(self._response(200), self._response(200))
        sleeps = []
        fetcher = HttpFetcher(session=session, delay=1.5, sleep=sleeps.append)
        fetcher.get("https://example.org/a")
        fetcher.get("https://example.org/b")
        self.assertEqual(sleeps, [1.5])


class SqliteKnownTests(SimpleTestCase):
    def test_reads_count_and_hashes_from_reviews_table(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Path(tmp) / "db.sqlite3"
            connection = sqlite3.connect(db)
            connection.execute("CREATE TABLE reviews_review (id INTEGER PRIMARY KEY, username_hash TEXT UNIQUE)")
            connection.executemany("INSERT INTO reviews_review (username_hash) VALUES (?)", [("a" * 64,), ("b" * 64,)])
            connection.commit()
            connection.close()
            count, hashes = load_known_from_sqlite(db)
            self.assertEqual(count, 2)
            self.assertEqual(hashes, {"a" * 64, "b" * 64})

    def test_missing_table_means_nothing_known(self):
        with tempfile.TemporaryDirectory() as tmp:
            db = Path(tmp) / "db.sqlite3"
            sqlite3.connect(db).close()
            self.assertEqual(load_known_from_sqlite(db), (0, set()))

    def test_missing_file_raises(self):
        with self.assertRaises(FileNotFoundError):
            load_known_from_sqlite(Path("/nonexistent/db.sqlite3"))


class CommandLineTests(SimpleTestCase):
    def test_offline_run_writes_utf8_json_from_cache(self):
        site = make_site(SAMPLE_REVIEWS)
        with tempfile.TemporaryDirectory() as tmp:
            cache = Path(tmp) / "cache"
            warm = CachingFetcher(DictFetcher(site), cache)
            for url in site:
                warm.get(url)
            out = Path(tmp) / "reviews_raw.json"
            messages = []
            code = scraper.main(["--offline", "--cache-dir", str(cache), "--out", str(out)], log=messages.append)
            self.assertEqual(code, 0)
            data = json.loads(out.read_text(encoding="utf-8"))
            self.assertEqual(len(data["reviews"]), 7)
            self.assertIn("útil", out.read_text(encoding="utf-8"))  # not \u escaped
            self.assertEqual(validate(data), [])
            self.assertTrue(any("7" in m for m in messages))

    def test_unchanged_count_aborts_with_distinct_exit_code(self):
        site = make_site(SAMPLE_REVIEWS)
        with tempfile.TemporaryDirectory() as tmp:
            cache = Path(tmp) / "cache"
            CachingFetcher(DictFetcher(site), cache).get(listing_url(1))
            db = Path(tmp) / "db.sqlite3"
            connection = sqlite3.connect(db)
            connection.execute("CREATE TABLE reviews_review (id INTEGER PRIMARY KEY, username_hash TEXT UNIQUE)")
            connection.executemany(
                "INSERT INTO reviews_review (username_hash) VALUES (?)",
                [(hash_username(r["username"]),) for r in SAMPLE_REVIEWS],
            )
            connection.commit()
            connection.close()
            out = Path(tmp) / "out.json"
            messages = []
            code = scraper.main(
                ["--offline", "--cache-dir", str(cache), "--out", str(out), "--db", str(db)],
                log=messages.append,
            )
            self.assertEqual(code, scraper.EXIT_NO_NEW_REVIEWS)
            self.assertFalse(out.exists())
            self.assertTrue(any("no new reviews" in m.lower() for m in messages))

    def test_failed_topics_give_nonzero_exit_but_still_write_output(self):
        site = make_site(SAMPLE_REVIEWS[:2])
        del site[topic_url("great-support")]
        with tempfile.TemporaryDirectory() as tmp:
            cache = Path(tmp) / "cache"
            warm = CachingFetcher(DictFetcher(site), cache)
            for url in site:
                warm.get(url)
            out = Path(tmp) / "out.json"
            code = scraper.main(["--offline", "--cache-dir", str(cache), "--out", str(out)], log=lambda *_: None)
            self.assertEqual(code, scraper.EXIT_PARTIAL)
            data = json.loads(out.read_text(encoding="utf-8"))
            self.assertEqual(len(data["reviews"]), 1)
            self.assertEqual(len(data["failed"]), 1)

    def test_validate_mode(self):
        result = scrape(DictFetcher(make_site(SAMPLE_REVIEWS)), log=lambda *_: None)
        with tempfile.TemporaryDirectory() as tmp:
            good = Path(tmp) / "good.json"
            good.write_text(json.dumps(result), encoding="utf-8")
            self.assertEqual(scraper.main(["--validate", str(good)], log=lambda *_: None), 0)
            result["reviews"][0]["weeks"] = 1000
            bad = Path(tmp) / "bad.json"
            bad.write_text(json.dumps(result), encoding="utf-8")
            messages = []
            self.assertEqual(scraper.main(["--validate", str(bad)], log=messages.append), scraper.EXIT_INVALID)
            self.assertTrue(any("weeks" in m for m in messages))

    def test_online_mode_uses_http_fetcher_with_requested_delay(self):
        with mock.patch.object(scraper, "HttpFetcher") as http_cls:
            http_cls.return_value = DictFetcher(make_site(SAMPLE_REVIEWS[:1]))
            with tempfile.TemporaryDirectory() as tmp:
                out = Path(tmp) / "out.json"
                code = scraper.main(["--out", str(out), "--delay", "0.5"], log=lambda *_: None)
        self.assertEqual(code, 0)
        self.assertEqual(http_cls.call_args.kwargs.get("delay"), 0.5)
