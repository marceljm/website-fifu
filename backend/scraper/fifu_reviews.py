#!/usr/bin/env python3
"""Scrape the 5-star reviews of the FIFU plugin from WordPress.org into a JSON file.

Standalone: this file has no dependency on the rest of the project. Copy it
anywhere and run it with Python 3.9+ after `pip install requests beautifulsoup4`.

    python fifu_reviews.py --limit 5 --out reviews_raw.json --cache-dir html_cache
    python fifu_reviews.py --out reviews_raw.json --cache-dir html_cache
    python fifu_reviews.py --out reviews_raw.json --db path/to/db.sqlite3

A 10-second pause is made before every request (--delay) so WordPress.org does
not answer "too many requests"; a full run of ~240 pages takes about 40 minutes.
    python fifu_reviews.py --offline --cache-dir html_cache --out reviews_raw.json
    python fifu_reviews.py --validate reviews_raw.json

The output never contains usernames, only their SHA-256 hash. Titles and
comments are stored exactly as written (original language); the polished
English versions are produced in a later step.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sqlite3
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Callable, Dict, Iterable, List, Optional, Set, Tuple
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup, Tag

REVIEWS_URL = "https://wordpress.org/support/plugin/featured-image-from-url/reviews/"
USER_AGENT = "FIFU-reviews-importer/1.0 (+https://fifu.app; polite crawler, 1 request per 10 s)"
DEFAULT_DELAY = 10.0  # seconds between requests; WordPress.org rate-limits faster crawlers
WEEKS_PER_YEAR = 48
WEEKS_PER_MONTH = 4
HASH_RE = re.compile(r"^[0-9a-f]{64}$")

EXIT_OK = 0
EXIT_ERROR = 1
EXIT_PARTIAL = 2
EXIT_NO_NEW_REVIEWS = 3
EXIT_INVALID = 4

Log = Callable[[str], None]


# --------------------------------------------------------------------------- helpers


def hash_username(username: str) -> str:
    """SHA-256 hex digest of a normalised username ("(@Name)" -> "name")."""
    normalised = username.strip().strip("()").lstrip("@").strip().lower()
    if not normalised:
        raise ValueError("Username must not be empty")
    return hashlib.sha256(normalised.encode("utf-8")).hexdigest()


def listing_url(page: int) -> str:
    if page == 1:
        return REVIEWS_URL + "?filter=5"
    return REVIEWS_URL + "page/{}/?filter=5".format(page)


_RELATIVE_RE = re.compile(r"(\d+)\s*(year|month|week|day|hour|minute|second)s?", re.IGNORECASE)
_UNIT_WEEKS = {"year": WEEKS_PER_YEAR, "month": WEEKS_PER_MONTH, "week": 1}


def relative_to_weeks(text: str) -> int:
    """"8 months, 2 weeks ago" -> 34. Days and smaller units floor to 0."""
    parts = _RELATIVE_RE.findall(text or "")
    if not parts:
        raise ValueError("Unrecognised relative date: {!r}".format(text))
    consumed = _RELATIVE_RE.sub("", text).lower()
    leftovers = consumed.replace("ago", "").replace(",", "").replace("and", "").strip()
    if leftovers:
        raise ValueError("Unrecognised relative date: {!r}".format(text))
    return sum(int(amount) * _UNIT_WEEKS.get(unit.lower(), 0) for amount, unit in parts)


_MONTHS = {
    name: number
    for number, name in enumerate(
        ["january", "february", "march", "april", "may", "june", "july", "august",
         "september", "october", "november", "december"],
        start=1,
    )
}
_ABSOLUTE_RE = re.compile(
    r"^\s*([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})\s+at\s+(\d{1,2}):(\d{2})\s*([ap]m)\s*$",
    re.IGNORECASE,
)


def parse_absolute_date(text: str) -> Optional[str]:
    """"August 27, 2026 at 9:05 pm" -> "2026-08-27T21:05:00" (locale independent)."""
    match = _ABSOLUTE_RE.match(text or "")
    if not match:
        return None
    month = _MONTHS.get(match.group(1).lower())
    if not month:
        return None
    day, year, hour, minute = (int(match.group(i)) for i in (2, 3, 4, 5))
    meridiem = match.group(6).lower()
    hour = hour % 12 + (12 if meridiem == "pm" else 0)
    try:
        return datetime(year, month, day, hour, minute).isoformat()
    except ValueError:
        return None


_REVISION_RE = re.compile(r"^\s*This (topic|reply) was modified\b", re.IGNORECASE)


def _clean_text(text: str) -> str:
    """Collapse runs of whitespace within lines while keeping line breaks."""
    lines = [re.sub(r"[ \t\r\f\v\xa0]+", " ", line).strip() for line in text.split("\n")]
    return "\n".join(lines).strip()


# --------------------------------------------------------------------------- parsing


@dataclass
class ListingTopic:
    topic_id: int
    url: str
    title: str
    author: str
    is_five_star: bool


@dataclass
class ListingPage:
    total_five_star: Optional[int]
    last_page: int
    topics: List[ListingTopic] = field(default_factory=list)


@dataclass
class Topic:
    title: str
    username: str
    relative_date: str
    absolute_date: str
    paragraphs: List[str]
    is_five_star: bool

    @property
    def comment(self) -> str:
        return "\n\n".join(self.paragraphs)


def _is_five_star(container: Optional[Tag]) -> bool:
    rating = container.select_one(".wporg-ratings") if container is not None else None
    label = (rating.get("aria-label") or "") if rating is not None else ""
    return label.strip().lower().startswith("5 out of 5")


def parse_listing(html: str) -> ListingPage:
    soup = BeautifulSoup(html, "html.parser")

    total = None
    bar = soup.select_one('.wporg-ratings-bars__bar a[href*="filter=5"]')
    if bar is not None:
        count = bar.select_one(".wporg-ratings-bars__bar-count")
        text = count.get_text(strip=True) if count is not None else bar.get_text(" ", strip=True)
        match = re.search(r"(\d[\d,]*)", text)
        if match:
            total = int(match.group(1).replace(",", ""))

    last_page = 1
    for node in soup.select(".bbp-pagination-links .page-numbers"):
        number = node.get_text(strip=True)
        if number.isdigit():
            last_page = max(last_page, int(number))

    topics: List[ListingTopic] = []
    for row in soup.select("li.bbp-body ul[id^=bbp-topic-]"):
        link = row.select_one("a.bbp-topic-permalink")
        if link is None or not link.get("href"):
            continue
        title = " ".join(node.strip() for node in link.find_all(string=True, recursive=False)).strip()
        if not title:
            title = link.get_text(" ", strip=True)
        author = row.select_one(".bbp-topic-started-by .bbp-author-name")
        topic_id_match = re.search(r"(\d+)$", row.get("id", ""))
        topics.append(
            ListingTopic(
                topic_id=int(topic_id_match.group(1)) if topic_id_match else 0,
                url=link["href"],
                title=title,
                author=author.get_text(strip=True) if author is not None else "",
                is_five_star=_is_five_star(row),
            )
        )
    return ListingPage(total_five_star=total, last_page=last_page, topics=topics)


def parse_topic(html: str) -> Topic:
    soup = BeautifulSoup(html, "html.parser")
    lead = soup.select_one("li.bbp-body div.type-topic")
    if lead is None:
        lead = soup.select_one("li.bbp-body div[id^=post-]")
    if lead is None:
        raise ValueError("Lead post not found on topic page")

    heading = soup.select_one("h1.page-title") or soup.select_one("h1")
    title = heading.get_text(" ", strip=True) if heading is not None else ""

    nicename = lead.select_one(".bbp-user-nicename")
    username = nicename.get_text(strip=True) if nicename is not None else ""
    if not username:
        author_link = lead.select_one("a.bbp-author-link[href]")
        if author_link is not None:
            username = urlparse(author_link["href"]).path.rstrip("/").rsplit("/", 1)[-1]
    username = username.strip().strip("()").lstrip("@").strip()
    if not username:
        raise ValueError("Reviewer username not found on topic page")

    date_link = lead.select_one(".bbp-topic-post-date a") or lead.select_one(".bbp-topic-post-date")
    relative_date = date_link.get_text(" ", strip=True) if date_link is not None else ""
    absolute_date = (date_link.get("title") or "").strip() if date_link is not None else ""

    content = lead.select_one(".bbp-topic-content")
    paragraphs: List[str] = []
    if content is not None:
        # bbPress appends its revision log ("This topic was modified ... by <user>")
        # inside the content block; it names editors and moderators, so drop it.
        for log in content.select(".bbp-topic-revision-log, .bbp-reply-revision-log"):
            log.decompose()
        for br in content.find_all("br"):
            br.replace_with("\n")
        blocks = [child for child in content.children if isinstance(child, Tag)]
        if blocks:
            for block in blocks:
                text = _clean_text(block.get_text())
                if text and not _REVISION_RE.match(text):
                    paragraphs.append(text)
        else:
            text = _clean_text(content.get_text())
            if text and not _REVISION_RE.match(text):
                paragraphs.append(text)

    # The star rating lives outside the lead post on topic pages.
    return Topic(
        title=title,
        username=username,
        relative_date=relative_date,
        absolute_date=absolute_date,
        paragraphs=paragraphs,
        is_five_star=_is_five_star(soup),
    )


# --------------------------------------------------------------------------- fetching


class DictFetcher:
    """Serve pages from a mapping; records the URLs requested (for tests)."""

    def __init__(self, pages: Dict[str, str]):
        self.pages = pages
        self.requested: List[str] = []

    def get(self, url: str) -> str:
        self.requested.append(url)
        if url not in self.pages:
            raise RuntimeError("404 for {}".format(url))
        return self.pages[url]


class HttpFetcher:
    """Polite HTTP client: User-Agent, delay between requests, retry with backoff."""

    RETRY_STATUSES = {429, 500, 502, 503, 504}

    def __init__(
        self,
        session: Optional[requests.Session] = None,
        delay: float = DEFAULT_DELAY,
        max_attempts: int = 4,
        backoff: float = 2.0,
        timeout: float = 30.0,
        sleep: Callable[[float], None] = time.sleep,
    ):
        self.session = session or requests.Session()
        self.session.headers["User-Agent"] = USER_AGENT
        self.delay = delay
        self.max_attempts = max_attempts
        self.backoff = backoff
        self.timeout = timeout
        self.sleep = sleep
        self._last_request: Optional[float] = None

    def _throttle(self) -> None:
        if self._last_request is not None and self.delay > 0:
            self.sleep(self.delay)
        self._last_request = time.monotonic()

    def get(self, url: str) -> str:
        last_error = "unknown error"
        for attempt in range(1, self.max_attempts + 1):
            self._throttle()
            retry_after = 0.0
            try:
                response = self.session.get(url, timeout=self.timeout)
            except requests.RequestException as exc:  # network hiccup: retry
                last_error = "{}: {}".format(type(exc).__name__, exc)
            else:
                if response.status_code == 200:
                    return response.text
                last_error = "HTTP {}".format(response.status_code)
                if response.status_code not in self.RETRY_STATUSES:
                    break
                try:
                    retry_after = float(response.headers.get("Retry-After", 0) or 0)
                except (TypeError, ValueError):
                    retry_after = 0.0
            if attempt < self.max_attempts:
                self.sleep(max(retry_after, self.backoff * (2 ** (attempt - 1))))
        raise RuntimeError("Failed to fetch {} ({})".format(url, last_error))


class CachingFetcher:
    """Write every fetched page to `cache_dir`; in offline mode read only from it."""

    def __init__(self, inner, cache_dir: Path, offline: bool = False):
        self.inner = inner
        self.cache_dir = Path(cache_dir)
        self.offline = offline

    def cache_path(self, url: str) -> Path:
        """Readable, unique file name per URL: listing-page-N.html or topic-<slug>.html."""
        parsed = urlparse(url)
        if parsed.path.rstrip("/").endswith("/reviews") or "/reviews/page/" in parsed.path:
            match = re.search(r"/page/(\d+)/", parsed.path)
            name = "listing-page-{}".format(match.group(1) if match else 1)
        else:
            slug = parsed.path.rstrip("/").rsplit("/", 1)[-1] or "index"
            safe = re.sub(r"[^A-Za-z0-9_.-]", "_", slug)[:80]
            if safe != slug:  # non-ASCII or truncated slug: keep the name unique
                safe += "-" + hashlib.sha1(url.encode("utf-8")).hexdigest()[:8]
            name = "topic-{}".format(safe)
        return self.cache_dir / "{}.html".format(name)

    def get(self, url: str) -> str:
        path = self.cache_path(url)
        if self.offline:
            if not path.exists():
                raise FileNotFoundError("Not in cache: {} ({})".format(url, path))
            return path.read_text(encoding="utf-8")
        html = self.inner.get(url)
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        path.write_text(html, encoding="utf-8")
        return html


# --------------------------------------------------------------------------- scraping


class NoNewReviews(Exception):
    """Raised when the site count equals the stored count: nothing to import."""


def scrape(
    fetcher,
    known_hashes: Iterable[str] = (),
    known_count: Optional[int] = None,
    limit: Optional[int] = None,
    log: Log = print,
) -> dict:
    known = set(known_hashes)
    started = datetime.now(timezone.utc)

    first = parse_listing(fetcher.get(listing_url(1)))
    if first.total_five_star is None:
        raise ValueError("Could not read the 5-star review count from the listing page")
    total = first.total_five_star
    log("Site reports {} five-star reviews across {} page(s); {} already stored.".format(
        total, first.last_page, known_count if known_count is not None else "unknown"))
    if known_count is not None and known_count == total and not limit:
        raise NoNewReviews("No new reviews to import: site has {} and the table has {}.".format(total, known_count))

    topics: List[ListingTopic] = []
    seen_urls: Set[str] = set()
    pages = [first]
    for page_number in range(2, first.last_page + 1):
        log("Reading listing page {}/{}".format(page_number, first.last_page))
        pages.append(parse_listing(fetcher.get(listing_url(page_number))))
    for page in pages:
        for topic in page.topics:
            if topic.url in seen_urls:
                continue
            seen_urls.add(topic.url)
            if not topic.is_five_star:
                log("Skipping {} (not a 5-star review)".format(topic.url))
                continue
            topics.append(topic)

    reviews: List[dict] = []
    failed: List[dict] = []
    skipped_known = 0
    run_hashes: Set[str] = set()
    for order, topic in enumerate(topics):
        if limit is not None and len(reviews) >= limit:
            break
        log("Topic {}/{}: {}".format(order + 1, len(topics), topic.url))
        try:
            parsed = parse_topic(fetcher.get(topic.url))
            digest = hash_username(parsed.username)
            if digest in known:
                skipped_known += 1
                continue
            if digest in run_hashes:
                log("Skipping {} (same reviewer as an earlier topic)".format(topic.url))
                continue
            if not parsed.comment:
                raise ValueError("Empty review body")
            reviews.append({
                "username_hash": digest,
                "topic_url": topic.url,
                "title": parsed.title or topic.title,
                "comment": parsed.comment,
                "relative_date": parsed.relative_date,
                "weeks": relative_to_weeks(parsed.relative_date),
                "posted_at": parse_absolute_date(parsed.absolute_date),
                "source_order": order,
            })
            run_hashes.add(digest)
        except Exception as exc:  # keep going; report at the end
            log("FAILED {}: {}".format(topic.url, exc))
            failed.append({"topic_url": topic.url, "error": "{}: {}".format(type(exc).__name__, exc)})

    log("Done: {} new review(s), {} already known, {} failed.".format(len(reviews), skipped_known, len(failed)))
    return {
        "source": listing_url(1),
        "scraped_at": started.replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "total_five_star": total,
        "pages": first.last_page,
        "limit": limit,
        "skipped_known": skipped_known,
        "failed": failed,
        "reviews": reviews,
    }


# --------------------------------------------------------------------------- validation


def validate(data: dict) -> List[str]:
    """Return a list of problems with a scrape result; empty means valid."""
    problems: List[str] = []
    for key in ["source", "scraped_at", "total_five_star", "reviews"]:
        if key not in data:
            problems.append("missing header field: {}".format(key))
    if data.get("failed"):
        problems.append("{} topic(s) failed to scrape".format(len(data["failed"])))
    reviews = data.get("reviews")
    if not isinstance(reviews, list):
        problems.append("reviews must be a list")
        return problems
    expected = data.get("total_five_star")
    if data.get("limit") is None and isinstance(expected, int):
        stored = data.get("skipped_known", 0) or 0
        if len(reviews) + stored != expected:
            problems.append(
                "reviews ({}) + already stored ({}) != total_five_star ({})".format(len(reviews), stored, expected)
            )
    hashes: Dict[str, int] = {}
    orders: List[int] = []
    required = {"username_hash", "topic_url", "title", "comment", "relative_date", "weeks", "posted_at", "source_order"}
    for index, review in enumerate(reviews):
        label = "review #{}".format(index)
        extra = set(review) - required
        if extra:
            problems.append("{}: unexpected field(s) {} (username must never be stored)".format(label, sorted(extra)))
        missing = required - set(review)
        if missing:
            problems.append("{}: missing field(s) {}".format(label, sorted(missing)))
            continue
        digest = review["username_hash"]
        if not isinstance(digest, str) or not HASH_RE.match(digest):
            problems.append("{}: username_hash is not a SHA-256 hex digest".format(label))
        elif digest in hashes:
            problems.append("{}: duplicate username_hash (same as review #{})".format(label, hashes[digest]))
        else:
            hashes[digest] = index
        for text_field in ("title", "comment"):
            if not isinstance(review[text_field], str) or not review[text_field].strip():
                problems.append("{}: {} is empty".format(label, text_field))
        try:
            if relative_to_weeks(review["relative_date"]) != review["weeks"]:
                problems.append("{}: weeks ({}) do not match relative_date {!r}".format(label, review["weeks"], review["relative_date"]))
        except ValueError:
            problems.append("{}: relative_date {!r} is not parseable (weeks unverified)".format(label, review["relative_date"]))
        posted = review["posted_at"]
        if posted is not None:
            try:
                datetime.fromisoformat(posted)
            except (TypeError, ValueError):
                problems.append("{}: posted_at {!r} is not ISO-8601".format(label, posted))
        if not isinstance(review["source_order"], int) or review["source_order"] < 0:
            problems.append("{}: source_order must be a non-negative integer".format(label))
        else:
            orders.append(review["source_order"])
    if orders != sorted(orders) or len(set(orders)) != len(orders):
        problems.append("source_order values must be unique and ascending")
    elif orders and data.get("limit") is None and not data.get("skipped_known") and orders != list(range(len(orders))):
        problems.append("source_order values must be contiguous from 0")
    return problems


# --------------------------------------------------------------------------- CLI


def load_known_from_sqlite(path: Path) -> Tuple[int, Set[str]]:
    """Read (count, hashes) from the Django `reviews_review` table without Django."""
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(path)
    connection = sqlite3.connect(str(path))
    try:
        exists = connection.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='reviews_review'"
        ).fetchone()
        if not exists:
            return 0, set()
        rows = connection.execute("SELECT username_hash FROM reviews_review").fetchall()
    finally:
        connection.close()
    hashes = {row[0] for row in rows}
    return len(rows), hashes


def write_result(data: dict, path: Path) -> None:
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
        handle.write("\n")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--out", default="reviews_raw.json", help="output JSON path (default: reviews_raw.json)")
    parser.add_argument("--limit", type=int, default=None, help="stop after N new reviews (validation runs)")
    parser.add_argument("--cache-dir", default=None, help="save every fetched page here")
    parser.add_argument("--offline", action="store_true", help="parse from --cache-dir only, no network")
    parser.add_argument("--db", default=None, help="path to the Django db.sqlite3 to skip stored reviews")
    parser.add_argument("--delay", type=float, default=DEFAULT_DELAY, help="seconds between requests (default 10)")
    parser.add_argument("--validate", metavar="JSON", default=None, help="validate an existing output file and exit")
    return parser


def main(argv: Optional[List[str]] = None, log: Log = print) -> int:
    args = build_parser().parse_args(argv)

    if args.validate:
        data = json.loads(Path(args.validate).read_text(encoding="utf-8"))
        problems = validate(data)
        if problems:
            for problem in problems:
                log("INVALID: {}".format(problem))
            return EXIT_INVALID
        log("OK: {} review(s), total_five_star={}".format(len(data["reviews"]), data["total_five_star"]))
        return EXIT_OK

    known_count: Optional[int] = None
    known_hashes: Set[str] = set()
    if args.db:
        known_count, known_hashes = load_known_from_sqlite(Path(args.db))
    else:
        log("No --db given: the stored-count check is skipped; every review will be exported.")

    if args.offline and not args.cache_dir:
        log("--offline requires --cache-dir")
        return EXIT_ERROR
    fetcher = HttpFetcher(delay=args.delay)
    if args.cache_dir:
        fetcher = CachingFetcher(fetcher, Path(args.cache_dir), offline=args.offline)

    try:
        result = scrape(fetcher, known_hashes=known_hashes, known_count=known_count, limit=args.limit, log=log)
    except NoNewReviews as exc:
        log("Aborted: {}".format(exc))
        return EXIT_NO_NEW_REVIEWS

    write_result(result, Path(args.out))
    log("Wrote {} review(s) to {}".format(len(result["reviews"]), args.out))
    if result["failed"]:
        log("WARNING: {} topic(s) failed; re-run or fix before importing.".format(len(result["failed"])))
        return EXIT_PARTIAL
    return EXIT_OK


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(errors="replace")  # non-ASCII URLs on narrow consoles
    sys.exit(main())
