"""Import the polished reviews into SQLite and export the static frontend JSON.

    python manage.py import_reviews                 # import + export (defaults)
    python manage.py import_reviews --export-only   # rebuild the JSON from the DB

Safe to re-run: reviews are matched by username hash; unchanged rows are left
alone, changed text/sentiment is updated in place, new ones are created.
"""

import json
from datetime import datetime, timezone
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from django.db import IntegrityError, transaction

from apps.reviews.export import DEFAULT_EXPORT_PATH, DEFAULT_IMAGES_DIR, PLACEHOLDER_NAME, write_export
from apps.reviews.models import Review
from apps.reviews.polished import POLISHED_PATH, validate_polished

FIELDS = (
    "fictional_name",
    "title",
    "comment",
    "quality_score",
    "weeks",
    "posted_at",
    "source_order",
    "sentiment",
    "scraped_at",
)


def _aware(value):
    if value is None:
        return None
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)


class Command(BaseCommand):
    help = "Import reviews_polished.json into the database and export the frontend JSON."

    def add_arguments(self, parser):
        parser.add_argument("--polished", default=str(POLISHED_PATH), help="polished JSON to import")
        parser.add_argument("--out", default=str(DEFAULT_EXPORT_PATH), help="frontend JSON to write")
        parser.add_argument("--images-dir", default=str(DEFAULT_IMAGES_DIR), help="avatar folder")
        parser.add_argument("--export-only", action="store_true", help="skip the import step")

    def handle(self, *args, **options):
        images_dir = Path(options["images_dir"])
        if not options["export_only"]:
            created, updated, unchanged = self.import_file(Path(options["polished"]))
            self.stdout.write(f"Import: {created} created, {updated} updated, {unchanged} unchanged.")
        data = write_export(Path(options["out"]), images_dir)
        own = sum(1 for r in data["reviews"] if not r["avatar"].endswith(PLACEHOLDER_NAME))
        self.stdout.write(
            f"Export: {data['count']} positive review(s) written to {options['out']} "
            f"({own} with own avatar, {data['count'] - own} using the placeholder)."
        )

    def import_file(self, path: Path):
        if not path.exists():
            raise CommandError(f"Polished file not found: {path}")
        data = json.loads(path.read_text(encoding="utf-8"))
        problems = validate_polished(data)
        if problems:
            shown = "\n  ".join(problems[:10])
            raise CommandError(f"{path} is not valid ({len(problems)} problem(s)):\n  {shown}")
        scraped_at = _aware(data["scraped_at"])
        created = updated = unchanged = 0
        try:
            with transaction.atomic():
                existing = {r.username_hash: r for r in Review.objects.all()}
                for item in data["reviews"]:
                    values = {
                        "fictional_name": item["fictional_name"],
                        "title": item["title"],
                        "comment": item["comment"],
                        "quality_score": item["quality_score"],
                        "weeks": item["weeks"],
                        "posted_at": _aware(item["posted_at"]),
                        "source_order": item["source_order"],
                        "sentiment": item["sentiment"],
                        "scraped_at": scraped_at,
                    }
                    review = existing.get(item["username_hash"])
                    if review is None:
                        Review.objects.create(username_hash=item["username_hash"], **values)
                        created += 1
                        continue
                    changed = [f for f in FIELDS if getattr(review, f) != values[f]]
                    if changed:
                        for field in changed:
                            setattr(review, field, values[field])
                        review.save(update_fields=changed)
                        updated += 1
                    else:
                        unchanged += 1
        except IntegrityError as exc:
            raise CommandError(f"Import aborted, nothing was written: {exc}")
        return created, updated, unchanged
