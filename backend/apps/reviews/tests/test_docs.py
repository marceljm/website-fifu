"""Phase 6: the README documents the reviews workflow and the repo ignores raw data."""

import json
import re
from pathlib import Path

from django.test import SimpleTestCase

ROOT = Path(__file__).resolve().parents[4]
README = ROOT / "README.md"
GITIGNORE = ROOT / ".gitignore"
PACKAGE_JSON = ROOT / "frontend" / "package.json"


class ReadmeTests(SimpleTestCase):
    def setUp(self):
        self.text = README.read_text(encoding="utf-8")

    def test_has_a_reviews_section(self):
        self.assertRegex(self.text, r"(?m)^##+ .*[Rr]eviews")

    def test_documents_every_step_of_the_workflow(self):
        for needle in [
            "fifu_reviews.py",          # standalone scraper
            "scrape_reviews",           # Django wrapper
            "reviews_raw.json",         # raw output (git-ignored)
            "reviews_polished.json",    # hand-polished, committed
            "import_reviews",           # import + export
            "--export-only",            # refresh JSON after adding avatars / admin edits
            "reviews.json",             # frontend static data
            "npm run build",            # pre-render
        ]:
            with self.subTest(needle=needle):
                self.assertIn(needle, self.text)

    def test_documents_the_scraper_options_and_the_abort_rule(self):
        for needle in ["--limit", "--cache-dir", "--offline", "--db", "--validate"]:
            with self.subTest(needle=needle):
                self.assertIn(needle, self.text)
        self.assertRegex(self.text, r"(?i)abort")
        self.assertRegex(self.text, r"(?i)no new reviews")
        self.assertRegex(self.text, r"10\s*seconds")

    def test_documents_the_data_rules(self):
        self.assertRegex(self.text, r"(?i)sha-?256")
        self.assertRegex(self.text, r"(?i)1 month = 4 weeks")
        self.assertRegex(self.text, r"(?i)1 year = 48 weeks")
        self.assertRegex(self.text, r"(?i)positive")
        self.assertRegex(self.text, r"(?i)fictional name")
        self.assertIn("placeholder.webp", self.text)
        self.assertRegex(self.text, r"<hash>\.webp")

    def test_documents_the_test_commands(self):
        self.assertIn("python3 manage.py test", self.text)
        self.assertIn("npm run test:unit", self.text)
        self.assertIn("npm run test:e2e", self.text)

    def test_useful_files_list_the_new_modules(self):
        for path in [
            "backend/scraper/fifu_reviews.py",
            "backend/apps/reviews/",
            "backend/data/reviews_polished.json",
            "frontend/app/data/reviews.json",
            "frontend/public/images/reviews/",
        ]:
            with self.subTest(path=path):
                self.assertIn(path, self.text)

    def test_no_longer_claims_reviews_are_fictional(self):
        self.assertNotRegex(self.text, r"(?i)fictional[^.\n]*reviews")
        self.assertNotRegex(self.text, r"(?i)reviews[^.\n]*fictional examples")


class RepoHygieneTests(SimpleTestCase):
    def test_raw_scrape_and_cache_are_git_ignored_but_polished_file_is_not(self):
        lines = [line.strip() for line in GITIGNORE.read_text(encoding="utf-8").splitlines()]
        self.assertIn("backend/data/reviews_raw.json", lines)
        self.assertIn("backend/data/html_cache/", lines)
        self.assertNotIn("backend/data/", lines)
        self.assertNotIn("backend/data/reviews_polished.json", lines)

    def test_frontend_scripts_include_the_unit_tests(self):
        scripts = json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))["scripts"]
        self.assertIn("test:unit", scripts)
        self.assertIn("reviews.test.mjs", scripts["test:unit"])

    def test_no_html_fixtures_or_raw_data_outside_their_folders(self):
        skip = {"node_modules", "build", ".react-router", ".venv", "venv", "tests"}
        stray = [p for p in ROOT.rglob("*.html") if not skip & set(p.parts)]
        self.assertEqual(stray, [])
        self.assertFalse((ROOT / "backend" / "data" / "html_cache").exists())

    def test_version_control_tracks_the_committed_data_file(self):
        tracked_or_new = (ROOT / "backend" / "data" / "reviews_polished.json")
        self.assertTrue(tracked_or_new.exists())
        # guard against accidental username leakage in anything committed under data/
        for path in (ROOT / "backend" / "data").glob("*.json"):
            if path.name == "reviews_raw.json":
                continue
            text = path.read_text(encoding="utf-8")
            self.assertNotRegex(text, r'"username"\s*:')
            self.assertNotRegex(text, r"(?<![\w.])@[A-Za-z0-9_]{2,}")
