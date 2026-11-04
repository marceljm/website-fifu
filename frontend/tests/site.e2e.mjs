import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import reviews from '../app/data/reviews.json' with { type: 'json' };
import docsData from '../app/data/docs.json' with { type: 'json' };
import { plainText, readingMinutes } from '../app/data/docs-utils.ts';
import {
  ILLUSTRATION_KINDS,
  KIND_LABELS,
} from '../app/components/docs/illustrations/registry.ts';
const root = resolve('build/client');
const countCards = (html) =>
  (html.match(/class="[^"]*\btestimonial-card\b/g) || []).length;
const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
let server;
let origin;
before(async () => {
  server = createServer(async (request, response) => {
    try {
      const urlPath = decodeURIComponent(
        new URL(request.url, 'http://localhost').pathname,
      );
      const candidate = resolve(
        root,
        `.${urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath}`,
      );
      if (!candidate.startsWith(root + sep) && candidate !== resolve(root, 'index.html'))
        throw new Error('invalid path');
      let file = candidate;
      try {
        if (!(await stat(file)).isFile()) throw new Error();
      } catch {
        file = resolve(root, 'index.html');
      }
      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      response.end(await readFile(file));
    } catch {
      response.writeHead(400);
      response.end();
    }
  });
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
  origin = `http://127.0.0.1:${server.address().port}`;
});
after(() => server?.close());
for (const [path, expected] of [
  ['/', 'Keep projects moving'],
  ['/features/smart-workflows/', 'Smart workflows'],
  ['/integrations/cloudnote/', 'Connect CloudNote'],
  ['/blog/a-calmer-way-to-plan-your-week/', 'A calmer way to plan your week'],
  ['/docs/getting-started/', 'Getting started'],
  ['/pricing/', 'WordPress site licenses'],
  ['/checkout/', 'Review your plugin plan.'],
  ['/reviews/', 'CUSTOMER REVIEWS'],
]) {
  test(`pre-rendered route ${path}`, async () => {
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(expected), `expected rendered HTML to include ${expected}`);
  });
}
test('homepage shows the three highest-quality positive reviews with clear attribution', async () => {
  const response = await fetch(`${origin}/`);
  const html = await response.text();
  assert.ok(html.includes('PROJECT WORKFLOWS FOR WORDPRESS'));
  assert.ok(html.includes('CUSTOMER REVIEWS'));
  assert.ok(html.includes('WordPress.org'));
  assert.ok(html.includes('changed for privacy'));
  assert.ok(html.includes('/pricing/'));
  const expected = reviews.reviews.slice(0, 3);
  for (const review of expected) {
    assert.ok(html.includes(escapeHtml(review.title)), review.title);
    assert.ok(html.includes(escapeHtml(review.name)), review.name);
  }
  assert.equal(countCards(html), 3);
  assert.ok(!html.includes('SAMPLE STORY'));
  assert.ok(!html.includes('Fictional examples'));
  assert.ok(!html.includes('5-STAR REVIEW ON WORDPRESS.ORG'));
  assert.ok(!html.includes('weeks ago'));
});
test('homepage separates sample stories from the plugin plan action and shows WordPress screens', async () => {
  const html = await (await fetch(`${origin}/`)).text();
  assert.ok(html.includes('testimonial-more'));
  assert.ok(html.includes('testimonial-plan-cta'));
  assert.ok(html.includes('Explore plugin plans'));
  assert.ok(html.includes('INSIDE DEMOSUITE FOR WORDPRESS'));
  assert.ok(html.includes('WordPress / DemoSuite / Settings'));
  assert.ok(html.includes('verified product screenshots'));
});
test('integration catalog gives each icon and label a spaced heading group', async () => {
  const html = await (await fetch(`${origin}/integrations/`)).text();
  assert.ok(html.includes('integration-card-heading'));
  assert.ok(html.includes('integration-icon'));
  assert.ok(html.includes('integration-card-title'));
});
test('feature, docs, and blog listings share the responsive catalog card layout', async () => {
  const [features, docs, blog] = await Promise.all(
    ['/features/', '/docs/', '/blog/'].map(async (path) =>
      (await fetch(`${origin}${path}`)).text(),
    ),
  );
  assert.ok(features.includes('feature-catalog-card'));
  assert.ok(features.includes('catalog-icon'));
  assert.ok(docs.includes('docs-catalog-card'));
  assert.ok(docs.includes('catalog-card-heading'));
  assert.ok(blog.includes('catalog-card blog-card'));
  assert.ok(blog.includes('blog-card'));
  for (const html of [features, docs, blog]) assert.ok(html.includes('site-shell'));
});
test('integration preview explains that it is illustrative', async () => {
  const response = await fetch(`${origin}/integrations/cloudnote/`);
  const html = await response.text();
  assert.ok(html.includes('Preview only'));
  assert.ok(html.includes('does not transfer data'));
  assert.ok(html.includes('How this sample works'));
});
test('feature detail has separated plan actions and readable highlight', async () => {
  const response = await fetch(`${origin}/features/smart-workflows/`);
  const html = await response.text();
  assert.ok(html.includes('feature-highlight-kicker'));
  assert.ok(html.includes('feature-detail-actions'));
  assert.ok(html.includes('Explore plans'));
});
test('reviews use the exported avatar paths and the old sample portraits are gone', async () => {
  const html = await (await fetch(`${origin}/`)).text();
  for (const review of reviews.reviews.slice(0, 3)) {
    assert.ok(html.includes(review.avatar));
    await stat(resolve(root, '.' + review.avatar));
  }
  for (const image of ['review-maya.webp', 'review-chris.webp', 'review-sofia.webp']) {
    assert.ok(!html.includes(image));
    await assert.rejects(stat(resolve(root, 'images', image)));
  }
  assert.ok(html.includes('View plugin plans'));
});

test('reviews page lists every positive review, highest quality first, pre-rendered', async () => {
  const html = await (await fetch(`${origin}/reviews/`)).text();
  assert.equal(countCards(html), reviews.count);
  const positions = reviews.reviews.map((review) =>
    html.indexOf(escapeHtml(review.title)),
  );
  assert.ok(
    positions.every((p) => p >= 0),
    'every review title is rendered',
  );
  let cursor = -1;
  for (const review of reviews.reviews) {
    const at = html.indexOf(escapeHtml(review.title), cursor + 1);
    assert.ok(at > cursor, `out of order: ${review.title}`);
    cursor = at;
  }
  assert.ok(!html.includes('weeks ago'));
  assert.ok(!html.includes('5-STAR REVIEW ON WORDPRESS.ORG'));
  assert.ok(html.includes('WordPress.org'));
  assert.ok(html.includes('changed for privacy'));
  assert.ok(!html.includes('SAMPLE CUSTOMER STORIES'));
  for (const hidden of [
    'Broken (resolved)',
    'Is the plugin hacked?',
    'It was already good',
    'OK, OK',
  ]) {
    assert.ok(!html.includes(hidden), `non-positive review leaked: ${hidden}`);
  }
  assert.ok(!/@\w+/.test(html.replace(/@context|@type/g, '')));
});

test('reviews page exposes its loader data for client-side navigation', async () => {
  const response = await fetch(`${origin}/reviews.data`);
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes(reviews.reviews[0].title));
});

test('docs page renders one card per guide, grouped by category, in JSON order', async () => {
  const html = await (await fetch(`${origin}/docs/`)).text();
  assert.ok(html.includes('FIFU HELP CENTER'));
  assert.ok(!html.includes('DEMOSUITE HELP CENTER'));
  assert.ok(!html.includes('6.1.4'), 'the docs page shows a version number');
  const cards = html.match(/data-doc-slug="([^"]+)"/g) || [];
  assert.deepEqual(
    cards.map((card) => card.slice('data-doc-slug="'.length, -1)),
    docsData.categories.flatMap((category) =>
      docsData.docs.filter((doc) => doc.category === category.id).map((doc) => doc.slug),
    ),
  );
  for (const doc of docsData.docs) {
    assert.ok(html.includes(`href="/docs/${doc.slug}/"`), doc.slug);
    assert.ok(html.includes(escapeHtml(doc.title)), doc.title);
    assert.ok(html.includes(escapeHtml(doc.summary)), doc.summary);
  }
  for (const category of docsData.categories) {
    assert.ok(html.includes(`id="${category.id}"`), category.id);
    assert.ok(html.includes(`href="#${category.id}"`), `topic link ${category.id}`);
    assert.ok(html.includes(escapeHtml(category.title)), category.title);
  }
  const icons = html.match(/class="catalog-icon docs-card-icon"[^>]*><svg/g) || [];
  assert.equal(icons.length, docsData.docs.length, 'every card has an SVG icon');
  for (const old of ['install-demosuite', 'billing-and-licenses', '⌘'])
    assert.ok(!html.includes(old), `placeholder doc left behind: ${old}`);
});

test('every guide is pre-rendered with its own title and description', async () => {
  for (const doc of docsData.docs) {
    const html = await (await fetch(`${origin}/docs/${doc.slug}/`)).text();
    assert.ok(
      html.includes(`<title>${escapeHtml(doc.title)} | FIFU Docs</title>`),
      doc.slug,
    );
    assert.ok(html.includes(escapeHtml(doc.summary)), doc.slug);
    assert.ok(!html.includes('Guide not found'), doc.slug);
  }
});

test('docs listing data only carries card fields for client-side navigation', async () => {
  const response = await fetch(`${origin}/docs.data`);
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes(docsData.docs[0].summary));
});

test('home page setup link points to an existing guide', async () => {
  const html = await (await fetch(`${origin}/`)).text();
  assert.ok(html.includes('href="/docs/getting-started/"'));
  assert.ok(!html.includes('/docs/install-demosuite/'));
});

const stripComments = (html) => html.replace(/<!-- -->/g, '');
const guideHtml = async (slug) =>
  stripComments(await (await fetch(`${origin}/docs/${slug}/`)).text());

test('every guide page uses the shared guide layout', async () => {
  for (const [index, doc] of docsData.docs.entries()) {
    const html = await guideHtml(doc.slug);
    const where = doc.slug;
    assert.ok(html.includes('class="page docs-page guide-page"'), where);
    for (const part of [
      'guide-breadcrumb',
      'guide-hero',
      'guide-overview',
      'Where to find it',
      'guide-toc-mobile',
      'class="guide-toc"',
      'guide-article',
      'guide-pagination',
    ])
      assert.ok(html.includes(part), `${where}: missing ${part}`);
    assert.match(
      html,
      new RegExp(`<h1[^>]*>${escapeHtml(doc.title).replace(/[()]/g, '\\$&')}</h1>`),
      where,
    );
    assert.ok(html.includes(`${readingMinutes(doc)} min read`), `${where}: reading time`);
    assert.ok(!/\bFIFU \d+\.\d+/.test(html), `${where}: shows a version number`);
    for (const location of doc.locations)
      for (const step of location.path)
        assert.ok(
          html.includes(escapeHtml(plainText(step))),
          `${where}: path step ${step}`,
        );
    for (const fact of doc.facts) assert.ok(html.includes(escapeHtml(fact.label)), where);
    for (const section of doc.sections) {
      assert.ok(html.includes(`id="${section.id}"`), `${where}: section ${section.id}`);
      const tocLinks = html.split(`href="#${section.id}"`).length - 1;
      assert.ok(
        tocLinks >= 3,
        `${where}: ${section.id} needs desktop, mobile, and anchor links`,
      );
    }
    for (const slug of doc.related)
      assert.ok(
        html.includes(`class="guide-related-card" href="/docs/${slug}/"`),
        `${where}: related ${slug}`,
      );
    const previous = docsData.docs[index - 1];
    const next = docsData.docs[index + 1];
    const relTag = (rel) =>
      (html.match(new RegExp(`<a[^>]*rel="${rel}"[^>]*>`)) || [''])[0];
    if (previous)
      assert.ok(relTag('prev').includes(`href="/docs/${previous.slug}/"`), where);
    else assert.equal(relTag('prev'), '', where);
    if (next) assert.ok(relTag('next').includes(`href="/docs/${next.slug}/"`), where);
    else assert.equal(relTag('next'), '', where);
    const article = html.slice(html.indexOf('guide-article'), html.indexOf('guide-toc"'));
    for (const marker of ['[[', ']]', '**'])
      assert.ok(!article.includes(marker), `${where}: raw markup ${marker} rendered`);
  }
});

test('guides render every content block with its own styling hooks', async () => {
  const pages = await Promise.all(docsData.docs.map((doc) => guideHtml(doc.slug)));
  const all = pages.join('\n');
  for (const hook of [
    'class="guide-paragraph"',
    'class="guide-list"',
    'class="guide-steps"',
    'class="guide-step-number"',
    'class="guide-settings"',
    'guide-callout guide-callout--tip',
    'guide-callout guide-callout--note',
    'guide-callout guide-callout--warning',
    'class="guide-code"',
    'guide-code-copy',
    'class="guide-table"',
    'data-label="',
    'class="ui-label"',
    'class="guide-link"',
  ])
    assert.ok(all.includes(hook), `no guide renders ${hook}`);
});

test('the WP-CLI guide renders its commands as tables and copyable code', async () => {
  const html = await guideHtml('wp-cli');
  assert.ok(html.includes('<code>wp fifu content on</code>'));
  assert.ok(html.includes('<th scope="col">Command</th>'));
  assert.ok(html.includes('guide-code-language">Terminal<'));
  assert.ok(html.includes('>Copy<'));
});

test('guide links inside the text point to other pre-rendered guides', async () => {
  const html = await guideHtml('default-featured-image');
  assert.ok(html.includes('class="guide-link" href="/docs/image-metadata/"'));
  const target = await fetch(`${origin}/docs/image-metadata/`);
  assert.equal(target.status, 200);
});

test('docs cards show the reading time computed from each guide', async () => {
  const html = stripComments(await (await fetch(`${origin}/docs/`)).text());
  for (const doc of docsData.docs) {
    const card = html.slice(html.indexOf(`data-doc-slug="${doc.slug}"`));
    const label = card.slice(0, card.indexOf('</small>'));
    assert.ok(
      label.endsWith(`GUIDE · ${readingMinutes(doc)} MIN READ`),
      `${doc.slug}: ${label.slice(-40)}`,
    );
  }
});

test('each guide ships only its own content for client-side navigation', async () => {
  const cli = await (await fetch(`${origin}/docs/wp-cli.data`)).text();
  assert.ok(cli.includes('One option per command'));
  assert.ok(
    !cli.includes('Never lose an image again'),
    'another guide leaked into wp-cli.data',
  );
  const catalog = await (await fetch(`${origin}/docs.data`)).text();
  assert.ok(catalog.includes('readingMinutes'));
  assert.ok(
    !catalog.includes('One option per command'),
    'guide content leaked into the listing',
  );
});

test('every guide shows its featured illustration before the guide text', async () => {
  for (const doc of docsData.docs) {
    const html = await guideHtml(doc.slug);
    const { key, caption, alt } = doc.illustration;
    const kind = ILLUSTRATION_KINDS[key];
    const where = doc.slug;
    const figure = html.indexOf(
      `<figure class="guide-illustration guide-illustration--${kind}" data-illustration="${key}"`,
    );
    assert.ok(figure > 0, `${where}: figure missing`);
    assert.ok(
      figure < html.indexOf('class="guide-body"'),
      `${where}: illustration must come before the guide text`,
    );
    assert.ok(
      figure > html.indexOf('guide-overview'),
      `${where}: illustration must come after the overview`,
    );
    assert.ok(
      html.includes(`role="img" aria-label="${escapeHtml(alt)}"`),
      `${where}: description`,
    );
    assert.ok(
      html.includes('<div class="ill" aria-hidden="true">'),
      `${where}: drawing hidden from screen readers`,
    );
    assert.ok(
      html.includes(`<figcaption>${escapeHtml(caption)}</figcaption>`),
      `${where}: caption`,
    );
    assert.ok(html.includes(`${KIND_LABELS[kind]}</span>`), `${where}: layout label`);
    assert.ok(html.includes(`class="ill-${kind}"`), `${where}: uses the ${kind} layout`);
  }
});

test('illustrations are built from the shared primitives', async () => {
  const pages = await Promise.all(docsData.docs.map((doc) => guideHtml(doc.slug)));
  for (const [index, html] of pages.entries()) {
    const start = html.indexOf('class="guide-illustration-stage"');
    const scene = html.slice(start, html.indexOf('</figure>', start));
    const slug = docsData.docs[index].slug;
    assert.ok(
      (scene.match(/class="ill-/g) || []).length >= 8,
      `${slug}: scene too simple`,
    );
    assert.doesNotMatch(scene, /<img\b/, `${slug}: scenes are HTML/CSS only, no images`);
    assert.doesNotMatch(
      scene,
      /style="(?!grid-template-columns|--ill-steps)/,
      `${slug}: unexpected inline style`,
    );
  }
  const all = pages.join('\n');
  for (const primitive of [
    'ill-pic',
    'ill-browser',
    'ill-panel',
    'ill-field',
    'ill-btn',
    'ill-toggle',
    'ill-chip',
    'ill-tile',
    'ill-cursor',
    'ill-terminal',
    'ill-email',
    'ill-sheet',
    'ill-card',
  ])
    assert.ok(all.includes(`class="${primitive}`), `${primitive} is never used`);
});

/* ------------------------------------------------------------------ */
/* Styling coverage, search, and unknown guides                        */
/* ------------------------------------------------------------------ */

// Modifiers that intentionally use the base style (no rule of their own).
const DEFAULT_MODIFIERS = new Set([
  'guide-callout--note',
  'guide-illustration--workflow',
  'guide-illustration--comparison',
  'guide-illustration--overview',
  'ill-pic--wide',
  'ill-pic--sky',
  'ill-btn--primary',
  'ill-chip--blue',
  'ill-badge--blue',
  'ill-tile--blue',
  'ill-side--neutral',
  'ill-terminal-line--command',
  'ill-terminal-line--code',
]);

test('every class used by the docs pages is styled by the stylesheet', async () => {
  const { readdir } = await import('node:fs/promises');
  const assets = await readdir(resolve(root, 'assets'));
  const css = (
    await Promise.all(
      assets
        .filter((file) => file.endsWith('.css'))
        .map((file) => readFile(resolve(root, 'assets', file), 'utf8')),
    )
  ).join('\n');
  const pages = ['/docs/', ...docsData.docs.map((doc) => `/docs/${doc.slug}/`)];
  const used = new Set();
  for (const path of pages) {
    const html = await (await fetch(`${origin}${path}`)).text();
    for (const [, classes] of html.matchAll(/class="([^"]+)"/g))
      for (const name of classes.split(/\s+/))
        if (/^(guide|ill|docs|ui-label)/.test(name)) used.add(name);
  }
  assert.ok(used.size > 150, 'expected the docs pages to use many styled classes');
  const unstyled = [...used].filter(
    (name) =>
      !DEFAULT_MODIFIERS.has(name) &&
      !new RegExp(`\\.${name.replace(/[-]/g, '\\-')}(?![\\w-])`).test(css),
  );
  assert.deepEqual(unstyled, [], 'classes without any CSS rule');
  for (const name of DEFAULT_MODIFIERS)
    assert.ok(used.has(name), `${name} is no longer used`);
});

test('the docs page offers a search box wired to the URL query', async () => {
  const html = await (await fetch(`${origin}/docs/`)).text();
  assert.match(html, /<input type="search" aria-label="Search documentation"/);
  assert.ok(html.includes('class="docs-topics"'), 'topic links are shown');
  assert.ok(
    html.includes(
      `${docsData.docs.length} guides in ${docsData.categories.length} topics`,
    ),
  );
});

test('an unknown guide renders a “Guide not found” page', async () => {
  const { createRequestHandler } = await import('react-router');
  const build = await import(resolve('build/server/index.js'));
  const handler = createRequestHandler(build, 'production');
  const response = await handler(new Request('http://localhost/docs/no-such-guide/'));
  const html = await response.text();
  assert.ok(html.includes('Guide not found.'), 'page heading');
  assert.ok(html.includes('<title>Guide not found | FIFU Docs</title>'), 'page title');
  assert.ok(html.includes('href="/docs/"'), 'link back to the documentation');
  assert.ok(!html.includes('guide-article'), 'no guide content');
});
