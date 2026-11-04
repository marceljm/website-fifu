"""The FIFU documentation file (frontend/app/data/docs.json) and how it is wired up.

Docs are not stored in the database: docs.json is the single source of truth for
/docs/ and every /docs/<slug>/ guide. These tests validate the committed file from
the backend side, the same way the reviews tests validate reviews_polished.json.
"""

from __future__ import annotations

import copy
import json
import re
from pathlib import Path

from django.conf import settings
from django.test import SimpleTestCase

ROOT = Path(settings.BASE_DIR).parent
FRONTEND = ROOT / "frontend"
DOCS_PATH = FRONTEND / "app" / "data" / "docs.json"
ICONS_PATH = FRONTEND / "app" / "components" / "docs" / "doc-icons.ts"
ILLUSTRATIONS_PATH = FRONTEND / "app" / "components" / "docs" / "illustrations" / "registry.ts"
SCENES_PATH = FRONTEND / "app" / "components" / "docs" / "illustrations" / "scenes.tsx"
SITEMAP_PATH = FRONTEND / "public" / "sitemap.xml"
ROUTER_CONFIG_PATH = FRONTEND / "react-router.config.ts"
PACKAGE_JSON = FRONTEND / "package.json"
README = ROOT / "README.md"

DOC_FIELDS = ("slug", "title", "summary", "icon", "category")
CATEGORY_FIELDS = ("id", "title", "description")
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
SUMMARY_MIN, SUMMARY_MAX = 40, 160
# Features that only exist in FIFU PRO must never appear on a card.
PRO_TERMS = (
    "featured video",
    "featured slider",
    "featured audio",
    "product gallery",
    "variation",
    "quick buy",
    "wp all import",
    "rest api",
    "shortcode",
    "save in the media library",
    "page redirection",
    "custom popup",
    "fifu cdn",
)


BLOCK_FIELDS = {
    "paragraph": ("text",),
    "list": ("items",),
    "steps": ("items",),
    "settings": ("items",),
    "callout": ("tone", "title", "text"),
    "code": ("language", "code"),
    "table": ("columns", "rows"),
}
CALLOUT_TONES = {"tip", "note", "warning"}
CODE_LANGUAGES = {"bash", "php"}
INLINE_RE = re.compile(r"\*\*(.+?)\*\*|`([^`]+)`|\[\[(.+?)\]\]|\[([^\]]+)\]\(([^)\s]+)\)")
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
HTML_RE = re.compile(r"</?[a-z][^>]*>", re.I)
WORDS_PER_MINUTE = 200
# PRO-only features that must not be described anywhere in a guide.
PRO_CONTENT_TERMS = (
    "featured video",
    "featured slider",
    "featured audio",
    "product gallery",
    "quick buy",
    "wp all import",
    "rest api",
    "shortcode",
    "save in the media library",
    "page redirection",
    "custom popup",
    "fifu pro",
    "premium",
)


def plain_text(text: str) -> str:
    """Visible text of docs.json inline markup (mirrors parseInline in docs-utils.ts)."""

    def visible(match: re.Match) -> str:
        strong, code, ui, link_text, _href = match.groups()
        return next(part for part in (strong, code, ui, link_text) if part is not None)

    return INLINE_RE.sub(visible, text)


def block_texts(block: dict) -> list[str]:
    kind = block.get("type")
    if kind == "paragraph":
        return [block["text"]]
    if kind == "list":
        return list(block["items"])
    if kind == "steps":
        return [t for item in block["items"] for t in (item["title"], item.get("text", ""))]
    if kind == "settings":
        return [t for item in block["items"] for t in (item["label"], item["text"])]
    if kind == "callout":
        return [block["title"], block["text"]]
    if kind == "code":
        return [block.get("caption", ""), block["code"]]
    if kind == "table":
        return list(block["columns"]) + [cell for row in block["rows"] for cell in row]
    return []


def guide_texts(doc: dict) -> list[str]:
    texts = [doc["title"], doc["summary"], (doc.get("illustration") or {}).get("caption", "")]
    for location in doc.get("locations", []):
        texts += [location["label"], *location["path"]]
    for fact in doc.get("facts", []):
        texts += [fact["label"], fact["value"]]
    for section in doc.get("sections", []):
        texts.append(section["title"])
        for block in section["blocks"]:
            texts += block_texts(block)
    return [text for text in texts if text]


def reading_minutes(doc: dict) -> int:
    """Mirrors readingMinutes() in docs-utils.ts: 200 words per minute, at least 1."""
    words = sum(len(plain_text(text).split()) for text in guide_texts(doc))
    return max(1, -(-words // WORDS_PER_MINUTE))


def validate_guide_content(doc: dict, slugs: set[str]) -> list[str]:
    """Checks the full-guide fields of one docs.json entry."""
    name = doc.get("slug", "?")
    errors: list[str] = []

    locations = doc.get("locations")
    if not isinstance(locations, list) or not locations:
        errors.append(f"{name}: locations must be a non-empty list")
    else:
        for location in locations:
            if not isinstance(location, dict) or not str(location.get("label", "")).strip():
                errors.append(f"{name}: every location needs a label")
            elif not location.get("path") or not all(
                isinstance(step, str) and step.strip() for step in location["path"]
            ):
                errors.append(f"{name}: every location needs a path of non-empty steps")

    facts = doc.get("facts")
    if not isinstance(facts, list) or not 2 <= len(facts) <= 4:
        errors.append(f"{name}: facts must list 2-4 items")
    elif not all(str(f.get("label", "")).strip() and str(f.get("value", "")).strip() for f in facts):
        errors.append(f"{name}: every fact needs a label and a value")

    sections = doc.get("sections")
    if not isinstance(sections, list) or len(sections) < 2:
        errors.append(f"{name}: sections must list at least 2 items")
        sections = []
    section_ids: list[str] = []
    for section in sections:
        section_id = section.get("id") if isinstance(section, dict) else None
        if not isinstance(section_id, str) or not SLUG_RE.match(section_id):
            errors.append(f"{name}: section id {section_id!r} is not URL-safe")
            continue
        if section_id in section_ids:
            errors.append(f"{name}: duplicate section id {section_id!r}")
        section_ids.append(section_id)
        if not str(section.get("title", "")).strip():
            errors.append(f"{name}#{section_id}: section title is empty")
        blocks = section.get("blocks")
        if not isinstance(blocks, list) or not blocks:
            errors.append(f"{name}#{section_id}: section has no blocks")
            continue
        for block in blocks:
            kind = block.get("type") if isinstance(block, dict) else None
            where = f"{name}#{section_id} ({kind})"
            if kind not in BLOCK_FIELDS:
                errors.append(f"{where}: unknown block type")
                continue
            missing = [field for field in BLOCK_FIELDS[kind] if not block.get(field)]
            if missing:
                errors.append(f"{where}: missing {', '.join(missing)}")
                continue
            if kind == "callout" and block["tone"] not in CALLOUT_TONES:
                errors.append(f"{where}: unknown callout tone {block['tone']!r}")
            if kind == "code" and block["language"] not in CODE_LANGUAGES:
                errors.append(f"{where}: unknown code language {block['language']!r}")
            if kind == "table" and any(len(row) != len(block["columns"]) for row in block["rows"]):
                errors.append(f"{where}: every table row needs one cell per column")
            if kind == "steps" and not all(str(item.get("title", "")).strip() for item in block["items"]):
                errors.append(f"{where}: every step needs a title")

    related = doc.get("related")
    if not isinstance(related, list) or not 1 <= len(related) <= 3:
        errors.append(f"{name}: related must list 1-3 guides")
    else:
        for slug in related:
            if slug == name:
                errors.append(f"{name}: related guides can't include itself")
            elif slug not in slugs:
                errors.append(f"{name}: unknown related guide {slug!r}")

    if errors:
        return errors

    full_text = " ".join(plain_text(text) for text in guide_texts(doc)).lower()
    for term in PRO_CONTENT_TERMS:
        if term in full_text:
            errors.append(f"{name}: guide mentions the PRO feature {term!r}")
    for text in guide_texts(doc):
        if HTML_RE.search(text):
            errors.append(f"{name}: raw HTML in {text[:40]!r}")
        visible = plain_text(text)
        for marker in ("**", "[[", "]]"):
            if marker in visible:
                errors.append(f"{name}: unbalanced {marker} in {text[:40]!r}")
        for _label, href in LINK_RE.findall(text):
            if href.startswith("/"):
                match = re.fullmatch(r"/docs/([a-z0-9-]+)/", href)
                if not match or match.group(1) not in slugs:
                    errors.append(f"{name}: broken link {href}")
            elif not href.startswith("https://"):
                errors.append(f"{name}: external link must use https: {href}")
    return errors


def load_docs(path: Path = DOCS_PATH) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def load_icon_keys(path: Path = ICONS_PATH) -> set[str]:
    """Keys of the `docIcons` registry in doc-icons.ts, e.g. `rocket` or `'eye-off'`."""
    source = path.read_text(encoding="utf-8")
    match = re.search(r"export const docIcons = \{(.*?)\} satisfies", source, re.S)
    if not match:
        raise AssertionError("docIcons registry not found in doc-icons.ts")
    return set(re.findall(r"^\s*'?([a-z0-9-]+)'?\s*:", match.group(1), re.M))


def load_illustration_kinds(path: Path = ILLUSTRATIONS_PATH) -> dict[str, str]:
    """Scene keys and layouts of ILLUSTRATION_KINDS in registry.ts."""
    source = path.read_text(encoding="utf-8")
    match = re.search(r"export const ILLUSTRATION_KINDS = \{(.*?)\} as const", source, re.S)
    if not match:
        raise AssertionError("ILLUSTRATION_KINDS not found in registry.ts")
    return dict(re.findall(r"^\s*'([a-z0-9-]+)':\s*'([a-z]+)',", match.group(1), re.M))


def validate_illustration(doc: dict, scene_keys: set[str] | None) -> list[str]:
    """Checks the featured illustration of one guide."""
    name = doc.get("slug", "?")
    illustration = doc.get("illustration")
    if not isinstance(illustration, dict):
        return [f"{name}: illustration must be an object with key, caption, and alt"]
    errors: list[str] = []
    key = illustration.get("key")
    if not isinstance(key, str) or not SLUG_RE.match(key):
        errors.append(f"{name}: illustration key {key!r} is not valid")
    elif scene_keys is not None and key not in scene_keys:
        errors.append(f"{name}: unknown illustration {key!r}")
    for field in ("caption", "alt"):
        text = illustration.get(field)
        if not isinstance(text, str) or not text.strip():
            errors.append(f"{name}: illustration {field} must be a non-empty string")
            continue
        if plain_text(text) != text or HTML_RE.search(text):
            errors.append(f"{name}: illustration {field} must be plain text")
        if not text.endswith("."):
            errors.append(f"{name}: illustration {field} must end with a period")
    caption, alt = illustration.get("caption"), illustration.get("alt")
    if isinstance(caption, str) and len(caption) > 200:
        errors.append(f"{name}: illustration caption is too long")
    if isinstance(alt, str) and len(alt) < 60:
        errors.append(f"{name}: illustration alt must describe the picture (60+ characters)")
    if caption and caption == alt:
        errors.append(f"{name}: illustration alt repeats the caption")
    return errors


def validate_docs(data: object, icon_keys: set[str], scene_keys: set[str] | None = None) -> list[str]:
    """Returns every problem found in a docs.json payload (an empty list means valid)."""
    if not isinstance(data, dict):
        return ["top level must be an object"]
    errors: list[str] = []
    if not isinstance(data.get("plugin"), str) or not data["plugin"].strip():
        errors.append("plugin must be a non-empty string")
    if "plugin_version" in data:
        errors.append("plugin_version must not be set: the docs describe the latest version")
    categories = data.get("categories")
    docs = data.get("docs")
    if not isinstance(categories, list) or not categories:
        errors.append("categories must be a non-empty list")
        categories = []
    if not isinstance(docs, list) or not docs:
        errors.append("docs must be a non-empty list")
        docs = []

    category_ids: list[str] = []
    for index, category in enumerate(categories):
        if not isinstance(category, dict):
            errors.append(f"categories[{index}] must be an object")
            continue
        for field in CATEGORY_FIELDS:
            if not isinstance(category.get(field), str) or not category[field].strip():
                errors.append(f"categories[{index}].{field} must be a non-empty string")
        category_id = category.get("id")
        if isinstance(category_id, str):
            if not SLUG_RE.match(category_id):
                errors.append(f"category id {category_id!r} is not URL-safe")
            if category_id in category_ids:
                errors.append(f"duplicate category id {category_id!r}")
            category_ids.append(category_id)

    seen: dict[str, set[str]] = {"slug": set(), "title": set(), "icon": set()}
    used_categories: set[str] = set()
    for index, doc in enumerate(docs):
        if not isinstance(doc, dict):
            errors.append(f"docs[{index}] must be an object")
            continue
        name = doc.get("slug") if isinstance(doc.get("slug"), str) else f"docs[{index}]"
        missing = [
            field
            for field in DOC_FIELDS
            if not isinstance(doc.get(field), str) or not doc[field].strip()
        ]
        for field in missing:
            errors.append(f"{name}.{field} must be a non-empty string")
        if missing:
            continue
        if not SLUG_RE.match(doc["slug"]):
            errors.append(f"{name}: slug is not URL-safe")
        for field, value in (
            ("slug", doc["slug"]),
            ("title", doc["title"].lower()),
            ("icon", doc["icon"]),
        ):
            if value in seen[field]:
                errors.append(f"{name}: duplicate {field} {value!r}")
            seen[field].add(value)
        if doc["icon"] not in icon_keys:
            errors.append(f"{name}: unknown icon {doc['icon']!r}")
        if doc["category"] not in category_ids:
            errors.append(f"{name}: unknown category {doc['category']!r}")
        used_categories.add(doc["category"])
        summary = doc["summary"]
        if not SUMMARY_MIN <= len(summary) <= SUMMARY_MAX:
            errors.append(
                f"{name}: summary must have {SUMMARY_MIN}-{SUMMARY_MAX} characters"
            )
        if not summary.endswith("."):
            errors.append(f"{name}: summary must end with a period")
        if re.search(r"<[^>]+>", summary) or "\n" in summary:
            errors.append(f"{name}: summary must be one line of plain text")
        text = f"{doc['title']} {summary}".lower()
        for term in PRO_TERMS:
            if term in text:
                errors.append(f"{name}: mentions the PRO feature {term!r}")

    for category_id in category_ids:
        if category_id not in used_categories:
            errors.append(f"category {category_id!r} has no guides")

    # Guide content is only checked once the card fields are valid.
    complete = [
        doc
        for doc in docs
        if isinstance(doc, dict)
        and all(isinstance(doc.get(field), str) and doc[field].strip() for field in DOC_FIELDS)
    ]
    slugs = {doc["slug"] for doc in complete}
    for doc in complete:
        errors.extend(validate_guide_content(doc, slugs))
        errors.extend(validate_illustration(doc, scene_keys))
    keys = [doc["illustration"]["key"] for doc in complete if isinstance(doc.get("illustration"), dict) and "key" in doc["illustration"]]
    for key in {k for k in keys if keys.count(k) > 1}:
        errors.append(f"illustration {key!r} is used by more than one guide")
    return errors


class CommittedDocsFileTests(SimpleTestCase):
    """The committed docs.json is valid and describes the free FIFU features."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.data = load_docs()
        cls.icon_keys = load_icon_keys()

    def test_file_is_utf8_json_with_readable_unicode(self):
        raw = DOCS_PATH.read_bytes()
        text = raw.decode("utf-8")
        self.assertNotIn("\\u", text, "store characters directly, not as \\u escapes")
        self.assertTrue(text.endswith("\n"))

    def test_file_is_valid(self):
        scene_keys = set(load_illustration_kinds())
        self.assertEqual(validate_docs(self.data, self.icon_keys, scene_keys), [])

    def test_every_scene_is_used_once_and_has_a_component(self):
        kinds = load_illustration_kinds()
        used = sorted(doc["illustration"]["key"] for doc in self.data["docs"])
        self.assertEqual(used, sorted(kinds))
        self.assertEqual(set(kinds.values()), {"workflow", "comparison", "overview"})
        scenes = SCENES_PATH.read_text(encoding="utf-8")
        self.assertIn("satisfies Record<IllustrationKey, ComponentType>", scenes)
        for key in kinds:
            with self.subTest(key=key):
                self.assertIsNotNone(
                    re.search(rf"(?m)^\s*'{re.escape(key)}': [A-Z]\w+,$", scenes),
                    f"scenes.tsx has no component for {key}",
                )

    def test_describes_fifu_free_version(self):
        self.assertEqual(self.data["plugin"], "Featured Image from URL (FIFU)")
        self.assertNotIn("plugin_version", self.data)

    def test_no_plugin_version_number_in_any_guide(self):
        """The docs describe the latest FIFU version, so no release number is shown."""
        for doc in self.data["docs"]:
            for text in guide_texts(doc):
                with self.subTest(slug=doc["slug"]):
                    self.assertNotRegex(text, r"\b\d+\.\d+\.\d+\b")

    def test_icon_registry_is_parsed(self):
        self.assertGreaterEqual(len(self.icon_keys), len(self.data["docs"]))
        self.assertIn("rocket", self.icon_keys)
        self.assertIn("eye-off", self.icon_keys)

    def test_key_features_have_a_guide(self):
        slugs = {doc["slug"] for doc in self.data["docs"]}
        for slug in (
            "getting-started",
            "featured-image-from-url",
            "default-featured-image",
            "auto-set-featured-media-from-post-content",
            "product-and-category-images",
            "add-image-to-order-email",
            "image-metadata",
            "clear-metadata",
            "reset-settings",
            "delete-all-urls",
            "wp-cli",
            "debug-mode",
            "status-page",
        ):
            with self.subTest(slug=slug):
                self.assertIn(slug, slugs)

    def test_every_guide_has_full_content_and_a_sensible_reading_time(self):
        for doc in self.data["docs"]:
            with self.subTest(slug=doc["slug"]):
                self.assertGreaterEqual(len(doc["sections"]), 2)
                self.assertTrue(1 <= reading_minutes(doc) <= 10)

    def test_maintenance_and_support_tools_have_separate_guides(self):
        """Each tool has its own settings section, so each gets its own card."""
        docs = {doc["slug"]: doc for doc in self.data["docs"]}
        expected = {
            "image-metadata": ("Image Metadata", "metadata"),
            "clear-metadata": ("Clear Metadata", "metadata"),
            "reset-settings": ("Reset Settings", "metadata"),
            "delete-all-urls": ("Delete All URLs", "metadata"),
            "debug-mode": ("Debug Mode", "developers"),
            "status-page": ("Status page", "developers"),
        }
        for slug, (title, category) in expected.items():
            with self.subTest(slug=slug):
                self.assertEqual(docs[slug]["title"], title)
                self.assertEqual(docs[slug]["category"], category)
        for combined in ("debug-mode-and-status", "reset-settings-and-delete-all-urls"):
            self.assertNotIn(combined, docs)
        for doc in self.data["docs"]:
            self.assertNotRegex(doc["title"], r"(?i)metadata and|settings and|mode and")


def guide(slug, title, summary, icon, category, related):
    """A minimal but complete guide, used as a valid fixture."""
    return {
        "slug": slug,
        "title": title,
        "summary": summary,
        "icon": icon,
        "category": category,
        "illustration": {
            "key": slug,
            "caption": "Two steps show how this feature works on your site.",
            "alt": "Two panels: the setting in the FIFU screen, and the page of your site after saving it.",
        },
        "locations": [{"label": "Settings", "path": ["FIFU", "Settings", "Image"]}],
        "facts": [
            {"label": "Default", "value": "Off"},
            {"label": "Setup", "value": "None"},
        ],
        "sections": [
            {
                "id": "what-it-does",
                "title": "What it does",
                "blocks": [
                    {"type": "paragraph", "text": "Open [[Settings]] and read **this**."},
                    {"type": "callout", "tone": "tip", "title": "Tip", "text": "Use `https://`."},
                ],
            },
            {
                "id": "set-up",
                "title": "Set it up",
                "blocks": [
                    {"type": "steps", "items": [{"title": "Open it"}, {"title": "Switch it on", "text": "Done."}]},
                    {"type": "settings", "items": [{"label": "zoom", "text": "Zooms in."}]},
                    {"type": "code", "language": "bash", "code": "wp fifu reset"},
                    {"type": "table", "columns": ["A", "B"], "rows": [["1", "2"]]},
                    {"type": "list", "items": ["One", f"See [the other guide](/docs/{related[0]}/)."]},
                ],
            },
        ],
        "related": related,
    }


class DocsValidatorTests(SimpleTestCase):
    """Each check in validate_docs catches the problem it is meant to catch."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.icon_keys = {"rocket", "mail", "bug"}
        cls.valid = {
            "plugin": "Featured Image from URL (FIFU)",
            "categories": [
                {"id": "start", "title": "Start", "description": "First steps."},
                {"id": "store", "title": "Store", "description": "Shop features."},
            ],
            "docs": [
                guide(
                    "getting-started",
                    "Getting started",
                    "Install FIFU and set your first remote featured image.",
                    "rocket",
                    "start",
                    related=["order-email"],
                ),
                guide(
                    "order-email",
                    "Add image to order email",
                    "Show product images next to items in order emails.",
                    "mail",
                    "store",
                    related=["getting-started"],
                ),
            ],
        }

    def broken(self, mutate) -> list[str]:
        data = copy.deepcopy(self.valid)
        mutate(data)
        return validate_docs(data, self.icon_keys)

    def assertReports(self, errors: list[str], needle: str):
        self.assertTrue(
            any(needle in error for error in errors),
            f"expected an error containing {needle!r}, got {errors}",
        )

    def test_valid_payload_has_no_errors(self):
        self.assertEqual(validate_docs(self.valid, self.icon_keys), [])

    def test_rejects_wrong_top_level_shapes(self):
        self.assertReports(validate_docs([], self.icon_keys), "top level")
        self.assertReports(self.broken(lambda d: d.update(docs=[])), "docs must be")
        self.assertReports(
            self.broken(lambda d: d.update(categories={})), "categories must be"
        )
        self.assertReports(
            self.broken(lambda d: d.update(plugin="")), "plugin must be"
        )
        self.assertReports(
            self.broken(lambda d: d.update(plugin_version="1.2.3")), "plugin_version must not be set"
        )

    def test_requires_every_card_field(self):
        for field in DOC_FIELDS:
            with self.subTest(field=field):
                errors = self.broken(lambda d: d["docs"][0].pop(field))
                self.assertReports(errors, f".{field} must be a non-empty string")
        errors = self.broken(lambda d: d["docs"][1].update(title="   "))
        self.assertReports(errors, "order-email.title")

    def test_requires_category_fields_and_unique_ids(self):
        errors = self.broken(lambda d: d["categories"][0].update(description=""))
        self.assertReports(errors, "categories[0].description")
        errors = self.broken(lambda d: d["categories"][1].update(id="start"))
        self.assertReports(errors, "duplicate category id")
        errors = self.broken(lambda d: d["categories"][1].update(id="Store Front"))
        self.assertReports(errors, "is not URL-safe")

    def test_rejects_duplicate_or_unsafe_slugs(self):
        errors = self.broken(lambda d: d["docs"][1].update(slug="getting-started"))
        self.assertReports(errors, "duplicate slug")
        errors = self.broken(lambda d: d["docs"][1].update(slug="Order_Email/"))
        self.assertReports(errors, "slug is not URL-safe")

    def test_rejects_duplicate_titles_case_insensitively(self):
        errors = self.broken(lambda d: d["docs"][1].update(title="GETTING STARTED"))
        self.assertReports(errors, "duplicate title")

    def test_rejects_unknown_or_reused_icons(self):
        self.assertReports(
            self.broken(lambda d: d["docs"][1].update(icon="camera")), "unknown icon"
        )
        self.assertReports(
            self.broken(lambda d: d["docs"][1].update(icon="rocket")), "duplicate icon"
        )

    def test_rejects_unknown_and_empty_categories(self):
        errors = self.broken(lambda d: d["docs"][1].update(category="billing"))
        self.assertReports(errors, "unknown category 'billing'")
        self.assertReports(errors, "category 'store' has no guides")

    def test_summary_must_be_one_short_plain_sentence(self):
        cases = {
            "Too short.": "characters",
            "x" * 170 + ".": "characters",
            "Show product images next to items in order emails": "end with a period",
            "Show <b>product</b> images next to items in order emails.": "plain text",
            "Show product images next to items\nin order emails.": "plain text",
        }
        for summary, needle in cases.items():
            with self.subTest(summary=summary[:30]):
                errors = self.broken(lambda d: d["docs"][1].update(summary=summary))
                self.assertReports(errors, needle)

    def test_rejects_pro_features(self):
        for term in ("Featured video", "Quick Buy", "WP All Import", "Shortcode"):
            with self.subTest(term=term):
                errors = self.broken(
                    lambda d: d["docs"][1].update(title=f"{term} settings")
                )
                self.assertReports(errors, "PRO feature")

    # ---- full guide content -------------------------------------------------

    def test_requires_locations_facts_sections_and_related(self):
        cases = {
            "locations must be a non-empty list": lambda d: d["docs"][0].update(locations=[]),
            "needs a path of non-empty steps": lambda d: d["docs"][0]["locations"][0].update(path=["FIFU", " "]),
            "facts must list 2-4 items": lambda d: d["docs"][0].update(facts=[{"label": "a", "value": "b"}]),
            "sections must list at least 2 items": lambda d: d["docs"][0]["sections"].pop(),
            "related must list 1-3 guides": lambda d: d["docs"][0].update(related=[]),
        }
        for needle, mutate in cases.items():
            with self.subTest(needle=needle):
                self.assertReports(self.broken(mutate), needle)

    def test_rejects_bad_or_duplicate_section_ids(self):
        errors = self.broken(lambda d: d["docs"][0]["sections"][1].update(id="what-it-does"))
        self.assertReports(errors, "duplicate section id")
        errors = self.broken(lambda d: d["docs"][0]["sections"][1].update(id="Set Up"))
        self.assertReports(errors, "is not URL-safe")
        errors = self.broken(lambda d: d["docs"][0]["sections"][1].update(blocks=[]))
        self.assertReports(errors, "section has no blocks")

    def test_rejects_unknown_or_incomplete_blocks(self):
        def block(d, index):
            return d["docs"][0]["sections"][1]["blocks"][index]

        cases = {
            "unknown block type": lambda d: block(d, 0).update(type="video"),
            "missing code": lambda d: block(d, 2).update(code=""),
            "unknown code language": lambda d: block(d, 2).update(language="python"),
            "one cell per column": lambda d: block(d, 3).update(rows=[["only one"]]),
            "every step needs a title": lambda d: block(d, 0)["items"].append({"title": " "}),
            "unknown callout tone": lambda d: d["docs"][0]["sections"][0]["blocks"][1].update(tone="danger"),
        }
        for needle, mutate in cases.items():
            with self.subTest(needle=needle):
                self.assertReports(self.broken(mutate), needle)

    def test_rejects_broken_links_and_bad_related_guides(self):
        def set_list(d, item):
            d["docs"][0]["sections"][1]["blocks"][4]["items"][1] = item

        self.assertReports(self.broken(lambda d: set_list(d, "See [x](/docs/missing/).")), "broken link")
        self.assertReports(self.broken(lambda d: set_list(d, "See [x](/docs/order-email)")), "broken link")
        self.assertReports(self.broken(lambda d: set_list(d, "See [x](http://a.b/).")), "must use https")
        self.assertReports(self.broken(lambda d: d["docs"][0].update(related=["getting-started"])), "itself")
        self.assertReports(self.broken(lambda d: d["docs"][0].update(related=["nope"])), "unknown related guide")

    def test_rejects_raw_html_and_unbalanced_markup(self):
        def set_paragraph(d, text):
            d["docs"][1]["sections"][0]["blocks"][0]["text"] = text

        self.assertReports(self.broken(lambda d: set_paragraph(d, "Click <b>here</b>.")), "raw HTML")
        self.assertReports(self.broken(lambda d: set_paragraph(d, "Open [[Settings.")), "unbalanced [[")
        self.assertReports(self.broken(lambda d: set_paragraph(d, "A **bold start.")), "unbalanced **")

    def test_rejects_pro_features_anywhere_in_the_guide(self):
        def set_step(d, text):
            d["docs"][1]["sections"][1]["blocks"][0]["items"][0]["text"] = text

        for term in ("Set a featured video", "Use the FIFU PRO shortcode", "Try Quick Buy"):
            with self.subTest(term=term):
                self.assertReports(self.broken(lambda d: set_step(d, term)), "guide mentions the PRO feature")

    def test_rejects_missing_or_invalid_illustrations(self):
        def ill(d):
            return d["docs"][0]["illustration"]

        scene_keys = {"getting-started", "order-email"}
        cases = {
            "illustration must be an object": lambda d: d["docs"][0].pop("illustration"),
            "unknown illustration": lambda d: ill(d).update(key="not-a-scene"),
            "caption must be a non-empty string": lambda d: ill(d).update(caption=""),
            "caption must be plain text": lambda d: ill(d).update(caption="Click [[Save]] to see it."),
            "alt must end with a period": lambda d: ill(d).update(alt=ill(d)["alt"].rstrip(".")),
            "alt must describe the picture": lambda d: ill(d).update(alt="A picture."),
            "alt repeats the caption": lambda d: ill(d).update(alt=ill(d)["caption"]),
            "caption is too long": lambda d: ill(d).update(caption="x" * 210 + "."),
            "used by more than one guide": lambda d: ill(d).update(key="order-email"),
        }
        for needle, mutate in cases.items():
            with self.subTest(needle=needle):
                data = copy.deepcopy(self.valid)
                mutate(data)
                self.assertReports(validate_docs(data, self.icon_keys, scene_keys), needle)

    def test_plain_text_and_reading_time_mirror_the_frontend(self):
        self.assertEqual(plain_text("Go to [[FIFU]] › **now** `x` [docs](/docs/a/)"), "Go to FIFU › now x docs")
        self.assertEqual(plain_text("a ** b [[ c"), "a ** b [[ c")
        doc = copy.deepcopy(self.valid["docs"][0])
        self.assertEqual(reading_minutes(doc), 1)
        doc["sections"][0]["blocks"][0]["text"] = " ".join(["word"] * 401)
        self.assertEqual(reading_minutes(doc), 3)


class DocsWiringTests(SimpleTestCase):
    """docs.json drives the pre-rendered routes, the sitemap, and the test scripts."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.slugs = [doc["slug"] for doc in load_docs()["docs"]]

    def test_router_prerenders_guides_from_docs_json(self):
        config = ROUTER_CONFIG_PATH.read_text(encoding="utf-8")
        self.assertIn("./app/data/docs.json", config)
        self.assertIn("docsData.docs.map((doc) => doc.slug)", config)
        self.assertIn("'/docs/'", config)
        for old in ("install-demosuite", "billing-and-licenses", "create-your-first-workspace"):
            self.assertNotIn(old, config)

    def test_sitemap_lists_exactly_the_guides(self):
        sitemap = SITEMAP_PATH.read_text(encoding="utf-8")
        listed = re.findall(r"/docs/([^<>/]+)/</loc>", sitemap)
        self.assertEqual(listed, self.slugs)
        self.assertIn("/docs/</loc>", sitemap)

    def test_frontend_catalog_no_longer_holds_docs(self):
        catalog = (FRONTEND / "app" / "data" / "catalog.ts").read_text(encoding="utf-8")
        self.assertNotIn("export const docs", catalog)

    def test_unit_test_script_runs_the_docs_tests(self):
        scripts = json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))["scripts"]
        self.assertIn("docs.test.mjs", scripts["test:unit"])
        self.assertIn("reviews.test.mjs", scripts["test:unit"])
        self.assertTrue((FRONTEND / "tests" / "docs.test.mjs").exists())


class DocsReadmeTests(SimpleTestCase):
    """The README explains where the documentation lives and how to edit it."""

    def setUp(self):
        self.text = README.read_text(encoding="utf-8")

    def test_has_a_documentation_section(self):
        self.assertRegex(self.text, r"(?m)^## Documentation$")

    def test_documents_the_docs_files_and_rules(self):
        for needle in (
            "frontend/app/data/docs.json",
            "doc-icons.ts",
            "docs-utils.ts",
            "docs.test.mjs",
            "sitemap.xml",
        ):
            with self.subTest(needle=needle):
                self.assertIn(needle, self.text)
        self.assertRegex(self.text, r"(?i)not (stored )?in the database")
        self.assertRegex(self.text, r"(?i)PRO-only features are intentionally left out")
