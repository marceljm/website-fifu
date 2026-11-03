"""Build the static JSON consumed by the pre-rendered frontend.

Only positive reviews are exported, highest quality score first (then site
order). Each entry carries the fictional name, polished text, quality score,
weeks, the scrape timestamp and an avatar path. The avatar points to
``/images/reviews/<hash>.webp`` when available, otherwise to the shared placeholder.
"""

from __future__ import annotations

import json
from datetime import timezone
from pathlib import Path

from django.conf import settings
from django.utils import timezone as dj_timezone

from .models import Review

FRONTEND_DIR = Path(settings.BASE_DIR).parent / "frontend"
DEFAULT_EXPORT_PATH = FRONTEND_DIR / "app" / "data" / "reviews.json"
DEFAULT_IMAGES_DIR = FRONTEND_DIR / "public" / "images" / "reviews"
PUBLIC_IMAGES_URL = "/images/reviews"
PLACEHOLDER_NAME = "placeholder.webp"


def _iso_utc(value) -> str | None:
    if value is None:
        return None
    return value.astimezone(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def avatar_for(username_hash: str, images_dir: Path) -> str:
    """Public URL of the reviewer's avatar, or of the placeholder when none exists."""
    if (Path(images_dir) / f"{username_hash}.webp").is_file():
        return f"{PUBLIC_IMAGES_URL}/{username_hash}.webp"
    return f"{PUBLIC_IMAGES_URL}/{PLACEHOLDER_NAME}"


def build_export(images_dir: Path = DEFAULT_IMAGES_DIR) -> dict:
    reviews = list(Review.objects.positive().order_by("-quality_score", "source_order"))
    scraped = max((r.scraped_at for r in reviews), default=None)
    return {
        "generated_at": _iso_utc(dj_timezone.now()),
        "scraped_at": _iso_utc(scraped),
        "count": len(reviews),
        "placeholder": f"{PUBLIC_IMAGES_URL}/{PLACEHOLDER_NAME}",
        "reviews": [
            {
                "name": r.fictional_name,
                "title": r.title,
                "comment": r.comment,
                "quality_score": r.quality_score,
                "weeks": r.weeks,
                "timestamp": _iso_utc(r.scraped_at),
                "posted_at": _iso_utc(r.posted_at),
                "avatar": avatar_for(r.username_hash, images_dir),
            }
            for r in reviews
        ],
    }


def write_export(path: Path = DEFAULT_EXPORT_PATH, images_dir: Path = DEFAULT_IMAGES_DIR) -> dict:
    data = build_export(images_dir)
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
    return data
