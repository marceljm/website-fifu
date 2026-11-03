"""Validation and loading of the polished reviews file (backend/data/reviews_polished.json).

The polished file is produced by hand from the raw scrape: every title and
comment translated to English and corrected, every reviewer given a fictional
name. It is committed, so a fresh clone can rebuild the database without
repeating that work. The raw scrape is git-ignored and never published.
"""

from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path

from django.conf import settings

DATA_DIR = Path(settings.BASE_DIR) / "data"
POLISHED_PATH = DATA_DIR / "reviews_polished.json"
RAW_PATH = DATA_DIR / "reviews_raw.json"

HEADER_FIELDS = ("source", "scraped_at", "polished_at", "total_five_star", "reviews")
REVIEW_FIELDS = frozenset(
    {
        "username_hash",
        "fictional_name",
        "title",
        "comment",
        "quality_score",
        "weeks",
        "posted_at",
        "source_order",
        "sentiment",
    }
)
SENTIMENTS = ("positive", "negative", "neutral")
HASH_RE = re.compile(r"^[0-9a-f]{64}$")
# Two or more capitalised words (letters of any Latin script, apostrophes, hyphens),
# separated by single spaces: "Noah Bergström", "Ana-Maria O'Neill", "José da Silva".
NAME_RE = re.compile(
    r"^[A-ZÀ-ÖØ-Þ\u0100-\u017F][A-Za-zÀ-ÖØ-öø-ÿ\u0100-\u017F'’-]+( [A-Za-zÀ-ÖØ-öø-ÿ\u0100-\u017F'’-]{2,})+$"
)
HANDLE_RE = re.compile(r"(?<![\w.])@[A-Za-z0-9_]{2,}")
EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+\.[\w.-]+")
REVISION_RE = re.compile(r"This (topic|reply) was modified", re.IGNORECASE)
HTML_RE = re.compile(r"</?[a-zA-Z][^>]*>|&[a-z]+;|&#\d+;")
# Pictographic emoji, dingbats, variation selectors / ZWJ, and ASCII emoticons.
EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FFFF\u2600-\u27BF\u2B00-\u2BFF\u2300-\u23FF\u2190-\u21FF\uFE0F\u200D]"
)
EMOTICON_RE = re.compile(r"(?<![\w/])(?:[:;=8][-^'o]?[)(DPpOo3/\\|\]\[]|\(y\)|<3)(?![\w:])", re.IGNORECASE)
ACCENTED_RE = re.compile("[À-ÖØ-öø-ÿ]")  # accented Latin letters: a hint the raw text is not English
NON_LATIN_RE = re.compile(
    "[\u0370-\u03ff\u0400-\u04ff\u0530-\u058f\u0590-\u05ff\u0600-\u06ff\u0900-\u0dff"
    "\u0e00-\u0e7f\u1100-\u11ff\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]"
)


def load_polished(path: Path = POLISHED_PATH) -> dict:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def _check_text(label: str, field: str, value, problems: list[str]) -> None:
    if not isinstance(value, str) or not value.strip():
        problems.append(f"{label}: {field} is empty")
        return
    if value != value.strip():
        problems.append(f"{label}: {field} has surrounding whitespace")
    if field == "title" and len(value) > 200:
        problems.append(f"{label}: title is longer than 200 characters")
    if HTML_RE.search(value):
        problems.append(f"{label}: {field} contains HTML")
    if "\n" in value or "\t" in value or "\r" in value or "  " in value:
        problems.append(f"{label}: {field} must be a single paragraph with single spaces")
    if EMOJI_RE.search(value) or EMOTICON_RE.search(value):
        problems.append(f"{label}: {field} contains an emoji or emoticon")
    if HANDLE_RE.search(value) or EMAIL_RE.search(value):
        problems.append(f"{label}: {field} contains a private handle or e-mail address")
    if REVISION_RE.search(value):
        problems.append(f"{label}: {field} contains a private revision log line")
    if NON_LATIN_RE.search(value):
        problems.append(f"{label}: {field} is not translated to English (non-Latin script)")


def validate_polished(data: dict, raw: dict | None = None) -> list[str]:
    """Return a list of problems; an empty list means the file is valid."""
    problems: list[str] = []
    for key in HEADER_FIELDS:
        if key not in data:
            problems.append(f"missing header field: {key}")
    reviews = data.get("reviews")
    if not isinstance(reviews, list):
        problems.append("reviews must be a list")
        return problems
    if isinstance(data.get("total_five_star"), int) and data["total_five_star"] != len(reviews):
        problems.append(f"total_five_star ({data['total_five_star']}) != number of reviews ({len(reviews)})")

    hashes: dict[str, int] = {}
    names: dict[str, int] = {}
    orders: list[int] = []
    for index, review in enumerate(reviews):
        label = f"review #{index}"
        fields = set(review)
        if fields - REVIEW_FIELDS:
            problems.append(f"{label}: unexpected field(s) {sorted(fields - REVIEW_FIELDS)}")
        if REVIEW_FIELDS - fields:
            problems.append(f"{label}: missing field(s) {sorted(REVIEW_FIELDS - fields)}")
            continue

        digest = review["username_hash"]
        if not isinstance(digest, str) or not HASH_RE.match(digest):
            problems.append(f"{label}: username_hash is not a SHA-256 hex digest")
        elif digest in hashes:
            problems.append(f"{label}: duplicate username_hash (same as review #{hashes[digest]})")
        else:
            hashes[digest] = index

        name = review["fictional_name"]
        if not isinstance(name, str) or not NAME_RE.match(name):
            problems.append(f"{label}: fictional_name must be a capitalised first and last name")
        elif name in names:
            problems.append(f"{label}: duplicate fictional_name (same as review #{names[name]})")
        else:
            names[name] = index
        if isinstance(name, str) and NON_LATIN_RE.search(name):
            problems.append(f"{label}: fictional_name must use the Latin alphabet")

        _check_text(label, "title", review["title"], problems)
        _check_text(label, "comment", review["comment"], problems)
        if review["sentiment"] not in SENTIMENTS:
            problems.append(f"{label}: sentiment must be one of {', '.join(SENTIMENTS)}")

        quality_score = review["quality_score"]
        if (
            isinstance(quality_score, bool)
            or not isinstance(quality_score, int)
            or not 0 <= quality_score <= 10
        ):
            problems.append(f"{label}: quality_score must be an integer from 0 to 10")

        weeks = review["weeks"]
        if isinstance(weeks, bool) or not isinstance(weeks, int) or weeks < 0:
            problems.append(f"{label}: weeks must be a non-negative integer")
        posted = review["posted_at"]
        if posted is not None:
            try:
                datetime.fromisoformat(posted)
            except (TypeError, ValueError):
                problems.append(f"{label}: posted_at {posted!r} is not ISO-8601")
        order = review["source_order"]
        if isinstance(order, bool) or not isinstance(order, int) or order < 0:
            problems.append(f"{label}: source_order must be a non-negative integer")
        else:
            orders.append(order)
    if orders != sorted(orders) or len(set(orders)) != len(orders):
        problems.append("source_order values must be unique and ascending")

    if raw is not None:
        problems.extend(_cross_check(data, reviews, raw))
    return problems


def _cross_check(data: dict, reviews: list[dict], raw: dict) -> list[str]:
    problems: list[str] = []
    if data.get("scraped_at") != raw.get("scraped_at"):
        problems.append("scraped_at differs from the raw scrape")
    raw_by_hash = {r["username_hash"]: r for r in raw.get("reviews", [])}
    polished_by_hash = {r["username_hash"]: r for r in reviews if "username_hash" in r}
    for digest in raw_by_hash.keys() - polished_by_hash.keys():
        problems.append(f"raw review {digest[:12]}… is missing from polished")
    for digest in polished_by_hash.keys() - raw_by_hash.keys():
        problems.append(f"polished review {digest[:12]}… is not in raw")
    for digest, polished in polished_by_hash.items():
        source = raw_by_hash.get(digest)
        if source is None:
            continue
        label = f"review {digest[:12]}…"
        for field in ("weeks", "posted_at", "source_order"):
            if polished.get(field) != source.get(field):
                problems.append(f"{label}: {field} differs from raw ({polished.get(field)!r} != {source.get(field)!r})")
        for field in ("title", "comment"):
            original = source.get(field) or ""
            looks_foreign = NON_LATIN_RE.search(original) or ACCENTED_RE.search(original)
            if polished.get(field) == original and looks_foreign:
                problems.append(f"{label}: {field} is identical to the untranslated raw text")
    return problems
