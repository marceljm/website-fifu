import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import reviews from '../app/data/reviews.json' with { type: 'json' };
const root = resolve('build/client');
const countCards = (html) => (html.match(/class="[^"]*\btestimonial-card\b/g) || []).length;
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
  const positions = reviews.reviews.map((review) => html.indexOf(escapeHtml(review.title)));
  assert.ok(positions.every((p) => p >= 0), 'every review title is rendered');
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
  for (const hidden of ['Broken (resolved)', 'Is the plugin hacked?', 'It was already good', 'OK, OK']) {
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
