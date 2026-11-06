import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import docsJson from '../app/data/docs.json' with { type: 'json' };
import {
  BLOCK_TYPES,
  WORDS_PER_MINUTE,
  collectLinks,
  collectTexts,
  countWords,
  filterDocs,
  findDoc,
  groupDocs,
  neighbours,
  normalizeSlug,
  parseInline,
  plainText,
  readingMinutes,
  toCatalog,
} from '../app/data/docs-utils.ts';
import { docIcons, getDocIcon } from '../app/components/docs/doc-icons.ts';
import {
  ILLUSTRATION_KINDS,
  KIND_LABELS,
} from '../app/components/docs/illustrations/registry.ts';

const { categories, docs } = docsJson;

test('docs.json describes FIFU with categories and guides', () => {
  assert.equal(docsJson.plugin, 'Featured Image from URL (FIFU)');
  assert.ok(
    !('plugin_version' in docsJson),
    'the docs describe the latest version, not a number',
  );
  assert.ok(categories.length > 0);
  assert.ok(docs.length > 0);
});

test('every guide has a title, slug, short description, icon, and category', () => {
  for (const doc of docs) {
    for (const field of ['slug', 'title', 'summary', 'icon', 'category']) {
      assert.equal(typeof doc[field], 'string', `${doc.slug}.${field}`);
      assert.ok(doc[field].trim(), `${doc.slug}.${field} is empty`);
    }
  }
});

test('slugs are unique, URL-safe, and categories are unique', () => {
  const slugs = docs.map((doc) => doc.slug);
  assert.equal(new Set(slugs).size, slugs.length, 'duplicate slug');
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, slug);
  const ids = categories.map((category) => category.id);
  assert.equal(new Set(ids).size, ids.length, 'duplicate category');
  for (const category of categories) {
    assert.ok(category.title.trim() && category.description.trim(), category.id);
  }
});

test('titles are unique so no two cards look the same', () => {
  const titles = docs.map((doc) => doc.title.toLowerCase());
  assert.equal(new Set(titles).size, titles.length);
});

test('every guide points to an existing category, and no category is empty', () => {
  const ids = new Set(categories.map((category) => category.id));
  for (const doc of docs)
    assert.ok(ids.has(doc.category), `${doc.slug}: ${doc.category}`);
  for (const id of ids)
    assert.ok(
      docs.some((doc) => doc.category === id),
      `category ${id} has no guides`,
    );
});

test('every icon exists in the icon registry and icons are not reused', () => {
  for (const doc of docs) assert.ok(doc.icon in docIcons, `${doc.slug}: ${doc.icon}`);
  const icons = docs.map((doc) => doc.icon);
  assert.equal(new Set(icons).size, icons.length, 'two guides share an icon');
});

test('short descriptions are short, single sentences of plain text', () => {
  for (const doc of docs) {
    assert.ok(doc.summary.length >= 40, `${doc.slug} summary is too short`);
    assert.ok(doc.summary.length <= 160, `${doc.slug} summary is too long`);
    assert.match(doc.summary, /\.$/, `${doc.slug} summary should end with a period`);
    assert.doesNotMatch(doc.summary, /<[^>]+>/, `${doc.slug} summary contains HTML`);
  }
});

test('PRO-only features are not documented as cards', () => {
  const text = docs
    .map((doc) => `${doc.title} ${doc.summary}`)
    .join(' ')
    .toLowerCase();
  for (const pro of [
    'featured video',
    'featured slider',
    'featured audio',
    'product gallery',
    'quick buy',
    'wp all import',
    'rest api',
    'shortcode',
    'save in the media library',
    'page redirection',
    'custom popup',
  ])
    assert.ok(!text.includes(pro), `PRO feature found: ${pro}`);
});

test('maintenance and support tools each have their own guide', () => {
  const bySlug = Object.fromEntries(docs.map((doc) => [doc.slug, doc]));
  const expected = {
    'image-metadata': ['Image Metadata', 'metadata'],
    'clear-metadata': ['Clear Metadata', 'metadata'],
    'reset-settings': ['Reset Settings', 'metadata'],
    'delete-all-urls': ['Delete All URLs', 'metadata'],
    'debug-mode': ['Debug Mode', 'developers'],
    'status-page': ['Status page', 'developers'],
  };
  for (const [slug, [title, category]] of Object.entries(expected)) {
    assert.equal(bySlug[slug]?.title, title, slug);
    assert.equal(bySlug[slug]?.category, category, slug);
  }
  for (const combined of ['debug-mode-and-status', 'reset-settings-and-delete-all-urls'])
    assert.equal(bySlug[combined], undefined, combined);
});

test('guides never mention a plugin release number', () => {
  for (const doc of docs)
    for (const text of collectTexts(doc))
      assert.doesNotMatch(text, /\b\d+\.\d+\.\d+\b/, `${doc.slug}: “${text}”`);
});

test('getDocIcon falls back instead of failing on an unknown key', () => {
  assert.equal(getDocIcon('rocket'), docIcons.rocket);
  assert.ok(getDocIcon('does-not-exist'));
});

test('findDoc accepts slugs with or without slashes', () => {
  assert.equal(normalizeSlug('/getting-started/'), 'getting-started');
  assert.equal(findDoc(docsJson, 'getting-started/')?.title, 'Getting started');
  assert.equal(findDoc(docsJson, 'missing-guide'), undefined);
  assert.equal(findDoc(docsJson, ''), undefined);
});

test('filterDocs matches every word, ignores case and accents', () => {
  assert.equal(filterDocs(docsJson, '').length, docs.length);
  const email = filterDocs(docsJson, 'ORDER émail').map((doc) => doc.slug);
  assert.deepEqual(email, ['add-image-to-order-email']);
  const woo = filterDocs(docsJson, 'woocommerce').map((doc) => doc.slug);
  assert.ok(woo.includes('lightbox-and-zoom'), 'matches by category title');
  assert.equal(filterDocs(docsJson, 'zzzz-no-match').length, 0);
});

test('groupDocs keeps category order and drops empty groups', () => {
  const groups = groupDocs(docsJson);
  assert.deepEqual(
    groups.map((group) => group.category.id),
    categories.map((category) => category.id),
  );
  assert.equal(
    groups.reduce((total, group) => total + group.docs.length, 0),
    docs.length,
  );
  const filtered = groupDocs(docsJson, filterDocs(docsJson, 'WP-CLI'));
  assert.deepEqual(
    filtered.map((group) => group.category.id),
    ['developers'],
  );
});

test('sitemap no longer publishes the retired docs pages', () => {
  const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  assert.doesNotMatch(sitemap, /\/docs\//);
});

/* ------------------------------------------------------------------ */
/* Full guides                                                         */
/* ------------------------------------------------------------------ */

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slugSet = new Set(docs.map((doc) => doc.slug));
const textsOf = (doc) => collectTexts(doc);

test('every guide has locations, facts, sections, and related guides', () => {
  for (const doc of docs) {
    assert.ok(Array.isArray(doc.locations) && doc.locations.length >= 1, doc.slug);
    for (const location of doc.locations) {
      assert.ok(location.label.trim(), `${doc.slug}: location label`);
      assert.ok(location.path.length >= 1, `${doc.slug}: location path`);
      for (const step of location.path)
        assert.ok(step.trim(), `${doc.slug}: empty path step`);
    }
    assert.ok(doc.facts.length >= 2 && doc.facts.length <= 4, `${doc.slug}: 2-4 facts`);
    for (const fact of doc.facts)
      assert.ok(fact.label.trim() && fact.value.trim(), doc.slug);
    assert.ok(doc.sections.length >= 2, `${doc.slug}: at least two sections`);
  }
});

test('section ids are URL-safe and unique within each guide', () => {
  for (const doc of docs) {
    const ids = doc.sections.map((section) => section.id);
    assert.equal(new Set(ids).size, ids.length, `${doc.slug}: duplicate section id`);
    for (const section of doc.sections) {
      assert.match(section.id, SLUG_RE, `${doc.slug}: ${section.id}`);
      assert.ok(section.title.trim(), `${doc.slug}: ${section.id} title`);
      assert.ok(section.blocks.length >= 1, `${doc.slug}: ${section.id} is empty`);
    }
  }
});

test('every block has a known type and the fields that type needs', () => {
  for (const doc of docs)
    for (const section of doc.sections)
      for (const block of section.blocks) {
        const where = `${doc.slug}#${section.id} (${block.type})`;
        assert.ok(BLOCK_TYPES.includes(block.type), `${where}: unknown type`);
        switch (block.type) {
          case 'paragraph':
            assert.ok(block.text.trim(), where);
            break;
          case 'list':
            assert.ok(block.items.length >= 2, `${where}: lists need 2+ items`);
            for (const item of block.items) assert.ok(item.trim(), where);
            break;
          case 'steps':
            assert.ok(block.items.length >= 2, `${where}: steps need 2+ items`);
            for (const item of block.items) assert.ok(item.title.trim(), where);
            break;
          case 'settings':
            assert.ok(block.items.length >= 1, where);
            for (const item of block.items)
              assert.ok(item.label.trim() && item.text.trim(), where);
            break;
          case 'callout':
            assert.ok(['tip', 'note', 'warning'].includes(block.tone), `${where}: tone`);
            assert.ok(block.title.trim() && block.text.trim(), where);
            break;
          case 'code':
            assert.ok(['bash', 'php'].includes(block.language), `${where}: language`);
            assert.ok(block.code.trim(), where);
            break;
          case 'table':
            assert.ok(block.columns.length >= 2, where);
            assert.ok(block.rows.length >= 1, where);
            for (const row of block.rows)
              assert.equal(row.length, block.columns.length, `${where}: row width`);
            break;
        }
      }
});

test('guide text uses inline markup correctly and never raw HTML', () => {
  for (const doc of docs)
    for (const text of textsOf(doc)) {
      assert.doesNotMatch(text, /<\/?[a-z][^>]*>/i, `${doc.slug}: raw HTML in “${text}”`);
      const visible = plainText(text);
      for (const marker of ['**', '[[', ']]', '](/'])
        assert.ok(!visible.includes(marker), `${doc.slug}: stray ${marker} in “${text}”`);
    }
});

test('links point to existing guides (with a trailing slash) or to https pages', () => {
  for (const doc of docs)
    for (const href of collectLinks(doc)) {
      if (href.startsWith('/')) {
        const match = href.match(/^\/docs\/([a-z0-9-]+)\/$/);
        assert.ok(match, `${doc.slug}: bad internal link ${href}`);
        assert.ok(slugSet.has(match[1]), `${doc.slug}: link to missing guide ${href}`);
        assert.notEqual(match[1], doc.slug, `${doc.slug}: links to itself`);
      } else {
        assert.match(href, /^https:\/\//, `${doc.slug}: external links must use https`);
      }
    }
});

test('related guides exist, are unique, and never point to the guide itself', () => {
  for (const doc of docs) {
    assert.ok(doc.related.length >= 1 && doc.related.length <= 3, doc.slug);
    assert.equal(new Set(doc.related).size, doc.related.length, `${doc.slug}: duplicate`);
    for (const slug of doc.related) {
      assert.ok(slugSet.has(slug), `${doc.slug}: unknown related guide ${slug}`);
      assert.notEqual(slug, doc.slug, `${doc.slug}: related to itself`);
    }
  }
});

test('the full text of every guide stays free of PRO-only features', () => {
  const proTerms = [
    'featured video',
    'featured slider',
    'featured audio',
    'product gallery',
    'quick buy',
    'wp all import',
    'rest api',
    'shortcode',
    'save in the media library',
    'page redirection',
    'custom popup',
    'fifu pro',
    'premium',
  ];
  for (const doc of docs) {
    const text = textsOf(doc).map(plainText).join(' ').toLowerCase();
    for (const term of proTerms) assert.ok(!text.includes(term), `${doc.slug}: ${term}`);
  }
});

test('every guide is written in plain, readable chunks', () => {
  for (const doc of docs)
    for (const section of doc.sections)
      for (const block of section.blocks)
        if (block.type === 'paragraph')
          assert.ok(
            countWords(block.text) <= 90,
            `${doc.slug}#${section.id}: paragraph over 90 words`,
          );
});

/* ------------------------------------------------------------------ */
/* Inline markup parser                                                */
/* ------------------------------------------------------------------ */

test('parseInline recognizes bold, code, UI labels, and links', () => {
  assert.deepEqual(
    parseInline(
      'Click [[Preview]] then **save** with `wp fifu` or see [WP-CLI](/features/wp-cli/).',
    ),
    [
      { kind: 'text', text: 'Click ' },
      { kind: 'ui', text: 'Preview' },
      { kind: 'text', text: ' then ' },
      { kind: 'strong', text: 'save' },
      { kind: 'text', text: ' with ' },
      { kind: 'code', text: 'wp fifu' },
      { kind: 'text', text: ' or see ' },
      { kind: 'link', text: 'WP-CLI', href: '/features/wp-cli/' },
      { kind: 'text', text: '.' },
    ],
  );
});

test('parseInline leaves plain text and unmatched markers untouched', () => {
  assert.deepEqual(parseInline('Just text.'), [{ kind: 'text', text: 'Just text.' }]);
  assert.deepEqual(parseInline(''), []);
  assert.equal(plainText('a ** b [[ c'), 'a ** b [[ c');
  assert.equal(plainText('Go to [[FIFU]] › [[Settings]]'), 'Go to FIFU › Settings');
});

/* ------------------------------------------------------------------ */
/* Reading time                                                        */
/* ------------------------------------------------------------------ */

const guideWith = (words) => ({
  slug: 'x',
  title: '',
  summary: '',
  icon: 'rocket',
  category: 'c',
  locations: [],
  facts: [],
  related: [],
  sections: [
    {
      id: 's',
      title: '',
      blocks: [{ type: 'paragraph', text: Array(words).fill('word').join(' ') }],
    },
  ],
});

test('reading time uses 200 words per minute, rounds up, and is at least 1', () => {
  assert.equal(WORDS_PER_MINUTE, 200);
  assert.equal(readingMinutes(guideWith(0)), 1);
  assert.equal(readingMinutes(guideWith(200)), 1);
  assert.equal(readingMinutes(guideWith(201)), 2);
  assert.equal(readingMinutes(guideWith(1000)), 5);
});

test('reading time counts every block type and ignores markup symbols', () => {
  assert.equal(countWords('[[Image URL]] and **bold** `code`'), 5);
  const guide = guideWith(0);
  guide.sections[0].blocks = [
    { type: 'list', items: ['one two', 'three'] },
    { type: 'steps', items: [{ title: 'four', text: 'five six' }] },
    { type: 'settings', items: [{ label: 'seven', text: 'eight' }] },
    { type: 'callout', tone: 'tip', title: 'nine', text: 'ten' },
    { type: 'code', language: 'bash', code: 'eleven twelve' },
    { type: 'table', columns: ['thirteen'], rows: [['fourteen']] },
  ];
  const words = collectTexts(guide).reduce((total, text) => total + countWords(text), 0);
  assert.equal(words, 14);
});

test('each real guide takes between 1 and 10 minutes to read', () => {
  for (const doc of docs) {
    const minutes = readingMinutes(doc);
    assert.ok(minutes >= 1 && minutes <= 10, `${doc.slug}: ${minutes} min`);
  }
});

/* ------------------------------------------------------------------ */
/* Catalog and navigation helpers                                     */
/* ------------------------------------------------------------------ */

test('toCatalog keeps only card fields plus the reading time', () => {
  const catalog = toCatalog(docsJson);
  assert.equal(catalog.docs.length, docs.length);
  for (const [index, card] of catalog.docs.entries()) {
    assert.deepEqual(Object.keys(card).sort(), [
      'category',
      'icon',
      'readingMinutes',
      'slug',
      'summary',
      'title',
    ]);
    assert.equal(card.readingMinutes, readingMinutes(docs[index]));
  }
});

test('neighbours follows the docs.json order', () => {
  const first = neighbours(docsJson, docs[0].slug);
  assert.equal(first.previous, null);
  assert.equal(first.next.slug, docs[1].slug);
  const last = neighbours(docsJson, docs.at(-1).slug);
  assert.equal(last.next, null);
  assert.equal(last.previous.slug, docs.at(-2).slug);
  assert.deepEqual(neighbours(docsJson, 'missing'), { previous: null, next: null });
});

/* ------------------------------------------------------------------ */
/* Featured illustrations                                              */
/* ------------------------------------------------------------------ */

const kinds = Object.entries(ILLUSTRATION_KINDS);

test('every guide has a featured illustration with a caption and a description', () => {
  for (const doc of docs) {
    const illustration = doc.illustration;
    assert.ok(illustration, `${doc.slug}: missing illustration`);
    assert.ok(
      illustration.key in ILLUSTRATION_KINDS,
      `${doc.slug}: unknown scene ${illustration.key}`,
    );
    for (const field of ['caption', 'alt']) {
      const text = illustration[field];
      assert.equal(typeof text, 'string', `${doc.slug}.${field}`);
      assert.match(text, /\.$/, `${doc.slug}.${field} should end with a period`);
      assert.equal(
        plainText(text),
        text,
        `${doc.slug}.${field} must be plain text (no markup)`,
      );
      assert.doesNotMatch(text, /<[^>]+>/, `${doc.slug}.${field} contains HTML`);
    }
    assert.ok(
      illustration.caption.length >= 40 && illustration.caption.length <= 200,
      `${doc.slug}: caption length`,
    );
    assert.ok(
      illustration.alt.length >= 60,
      `${doc.slug}: the description should describe the picture`,
    );
    assert.notEqual(
      illustration.alt,
      illustration.caption,
      `${doc.slug}: alt repeats the caption`,
    );
  }
});

test('each scene is used by exactly one guide, and every scene is used', () => {
  const used = docs.map((doc) => doc.illustration.key);
  assert.equal(new Set(used).size, used.length, 'two guides share a scene');
  assert.deepEqual([...used].sort(), kinds.map(([key]) => key).sort());
});

test('every scene uses one of the three shared layouts, each with a label', () => {
  for (const [key, kind] of kinds) {
    assert.ok(['workflow', 'comparison', 'overview'].includes(kind), `${key}: ${kind}`);
    assert.ok(KIND_LABELS[kind].trim(), kind);
  }
  for (const kind of ['workflow', 'comparison', 'overview'])
    assert.ok(
      kinds.some(([, used]) => used === kind),
      `layout ${kind} is never used`,
    );
});

test('illustration captions and descriptions stay free of PRO features', () => {
  for (const doc of docs) {
    const text = `${doc.illustration.caption} ${doc.illustration.alt}`.toLowerCase();
    for (const term of [
      'featured video',
      'featured slider',
      'product gallery',
      'quick buy',
      'shortcode',
    ])
      assert.ok(!text.includes(term), `${doc.slug}: ${term}`);
  }
});

test('the illustration caption counts toward the reading time; the description does not', () => {
  const guide = guideWith(200);
  assert.equal(readingMinutes(guide), 1);
  guide.illustration = {
    key: 'x',
    caption: 'one more word',
    alt: Array(500).fill('w').join(' '),
  };
  assert.equal(readingMinutes(guide), 2, 'caption words are counted');
  guide.illustration.caption = '';
  assert.equal(readingMinutes(guide), 1, 'alt words are not counted');
});

/* ------------------------------------------------------------------ */
/* Task coverage: features, labels, language, responsive layout        */
/* ------------------------------------------------------------------ */

const featureMap = JSON.parse(
  readFileSync(new URL('./fixtures/feature-map.json', import.meta.url), 'utf8'),
);
const interfaceLabels = JSON.parse(
  readFileSync(new URL('./fixtures/interface-labels.json', import.meta.url), 'utf8'),
);
const fullText = (doc) => collectTexts(doc).map(plainText).join(' ').toLowerCase();

test('every free FIFU feature (readme, settings, and code) is documented in its guide', () => {
  const bySlug = Object.fromEntries(docs.map((doc) => [doc.slug, doc]));
  assert.ok(featureMap.features.length >= 60, 'the feature map looks incomplete');
  for (const { feature, guide, mentions } of featureMap.features) {
    assert.ok(bySlug[guide], `${feature}: guide ${guide} is missing`);
    assert.ok(
      fullText(bySlug[guide]).includes(mentions.toLowerCase()),
      `${feature}: “${mentions}” not found in ${guide}`,
    );
  }
});

test('every guide documents at least one feature from the feature map', () => {
  const mapped = new Set(featureMap.features.map((item) => item.guide));
  for (const doc of docs)
    assert.ok(mapped.has(doc.slug), `${doc.slug} documents no mapped feature`);
});

test('interface labels are exact labels from FIFU, WordPress, or the named plugins', () => {
  const groups = Object.entries(interfaceLabels).filter(([key]) => !key.startsWith('_'));
  const approved = new Map();
  for (const [group, labels] of groups)
    for (const label of labels) {
      assert.ok(!approved.has(label), `“${label}” is listed in two groups`);
      approved.set(label, group);
    }
  const used = new Set();
  for (const doc of docs) {
    for (const text of collectTexts(doc))
      for (const token of parseInline(text))
        if (token.kind === 'ui') used.add(token.text);
    for (const section of doc.sections)
      for (const block of section.blocks)
        if (block.type === 'settings')
          block.items.forEach((item) => used.add(item.label));
  }
  for (const label of used)
    assert.ok(
      approved.has(label),
      `“${label}” isn't an approved interface label (check it, then add it to the fixture)`,
    );
  for (const label of approved.keys())
    assert.ok(
      used.has(label),
      `“${label}” is approved but no longer used; remove it from the fixture`,
    );
});

test('technical jargon only appears in the developer guides', () => {
  const jargon = [
    'og:image',
    'twitter:card',
    'json-ld',
    'blogposting',
    'imageobject',
    'media:content',
    'data:image',
    'postmeta',
    '_thumbnail_id',
    'wp_posts',
    'ajax',
    'db2',
    'regex',
    'html tag',
    'transient',
    'cron',
    'hook',
  ];
  for (const doc of docs) {
    if (doc.category === 'developers') continue;
    const text = fullText(doc);
    for (const term of jargon)
      assert.ok(
        !new RegExp(
          `(^|[^a-z0-9_])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z0-9_]|$)`,
        ).test(text),
        `${doc.slug}: “${term}” is too technical for this guide`,
      );
  }
});

test('guides address the reader directly and keep sentences short', () => {
  for (const doc of docs) {
    const sentences = collectTexts(doc)
      .map(plainText)
      .flatMap((text) => text.split(/(?<=[.!?])\s+/))
      .filter((sentence) => sentence.split(/\s+/).length > 3);
    const long = sentences.filter((sentence) => sentence.split(/\s+/).length > 45);
    assert.deepEqual(long, [], `${doc.slug}: sentences over 45 words`);
    assert.ok(
      /\byou(r)?\b/i.test(fullText(doc)),
      `${doc.slug}: never addresses the reader`,
    );
  }
});

test('the stylesheet stacks the docs layouts on small screens', () => {
  const css = readFileSync(new URL('../app/styles.css', import.meta.url), 'utf8');
  const mediaBlocks = [
    ...css.matchAll(/@media \(max-width: (\d+)px\) \{([\s\S]*?)\n\}/g),
  ].map(([, width, body]) => ({ width: Number(width), body }));
  const rule = (selector, declaration) =>
    mediaBlocks.some(({ width, body }) => {
      if (width > 1080) return false;
      const at = body.indexOf(selector);
      if (at < 0) return false;
      const block = body.slice(at, body.indexOf('}', at));
      return block.includes(declaration);
    });
  for (const [selector, declaration] of [
    ['.page .docs-cards', 'grid-template-columns: 1fr'],
    ['.guide-body', 'grid-template-columns: minmax(0, 1fr)'],
    ['.guide-toc-mobile', 'display: block'],
    ['.guide-toc {', 'display: none'],
    ['.guide-overview', 'grid-template-columns: minmax(0, 1fr)'],
    ['.guide-hero', 'grid-template-columns: minmax(0, 1fr)'],
    ['.guide-table tr', 'display: block'],
    ['.guide-pagination', 'grid-template-columns: minmax(0, 1fr)'],
    ['.ill-workflow {', 'flex-direction: column'],
    ['.ill-comparison', 'grid-template-columns: minmax(0, 1fr)'],
    ['.ill-connector-arrow--down', 'display: grid'],
  ])
    assert.ok(
      rule(selector, declaration),
      `no small-screen rule: ${selector} { ${declaration} }`,
    );
});
