"""`manage.py seed_demo` no longer seeds documentation: guides live in docs.json."""

from __future__ import annotations

from io import StringIO

from django.core.management import call_command
from django.test import TestCase

from apps.content.management.commands.seed_demo import DATA
from apps.content.models import PublicItem, SiteSetting


def seed() -> str:
    out = StringIO()
    call_command("seed_demo", stdout=out)
    return out.getvalue()


class SeedDemoTests(TestCase):
    def test_seed_data_has_no_docs_kind(self):
        self.assertNotIn("docs", DATA)

    def test_seeding_creates_no_docs_items(self):
        seed()
        self.assertFalse(PublicItem.objects.filter(kind="docs").exists())
        self.assertFalse(PublicItem.objects.filter(slug__startswith="docs-").exists())

    def test_other_demo_content_is_still_seeded(self):
        output = seed()
        self.assertIn("Demo content seeded.", output)
        for kind, titles in DATA.items():
            with self.subTest(kind=kind):
                self.assertEqual(PublicItem.objects.filter(kind=kind).count(), len(titles))
        self.assertTrue(SiteSetting.objects.filter(key="brand").exists())

    def test_seeding_twice_is_idempotent(self):
        seed()
        first = PublicItem.objects.count()
        seed()
        self.assertEqual(PublicItem.objects.count(), first)
        self.assertEqual(first, sum(len(titles) for titles in DATA.values()))

    def test_public_api_serves_no_docs_after_seeding(self):
        seed()
        response = self.client.get("/api/public/")
        self.assertEqual(response.status_code, 200)
        kinds = {item["kind"] for item in response.json()["items"]}
        self.assertNotIn("docs", kinds)
        self.assertTrue({"feature", "integration", "blog", "faq"} <= kinds)
