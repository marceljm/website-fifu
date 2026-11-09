import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const paths = [
  'app/routes/detail.tsx',
  'app/routes/save-in-media-library-guide.tsx',
  'app/routes/featured-image-url-block-guide.tsx',
];

const pages = paths.map((path) => ({
  path,
  source: readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'),
}));

const count = (source, pattern) => [...source.matchAll(pattern)].length;

test('feature guides use the same section components instead of copied layouts', () => {
  for (const { path, source } of pages) {
    assert.match(source, /<FeatureGuideSection\b/, path);
    assert.match(source, /<FeatureGuideHeading\b/, path);
    assert.match(source, /<FeatureGuideHighlight\b/, path);
    assert.match(source, /<FeatureGuideSteps\b/, path);
    assert.match(source, /<FeatureGuideOptions\b/, path);
    assert.match(source, /<FeatureGuideCta\b/, path);

    for (const legacy of [
      /<div className="activation-feature-section-heading">/,
      /<section\b[^>]*className="activation-feature-section(?: activation-feature-help)?"/,
      /<section\b[^>]*className="feature-detail-cta/,
      /<nav className="feature-related-guides"/,
      /<(?:ol|ul) className="activation-feature-steps"/,
      /<dl className="(?:feature-guide-options|fifu-fields-options|db-migration-options)"/,
    ]) {
      assert.doesNotMatch(source, legacy, `${path}: duplicated section markup`);
    }
  }
});

test('shared section headings retain accessible section anchors', () => {
  let total = 0;
  for (const { path, source } of pages) {
    const sections = [
      ...source.matchAll(
        /<FeatureGuideSection\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/FeatureGuideSection>/g,
      ),
    ];
    for (const [, id, content] of sections) {
      assert.match(content, /<FeatureGuideHeading\b/, `${path}: ${id}`);
      assert.ok(
        content.includes(`id="${id}"`),
        `${path}: heading id does not match ${id}`,
      );
    }
    total += sections.length;
  }
  assert.ok(total >= 275, 'expected existing feature sections to remain');
});

test('all featured guides use shared introductions and navigation patterns', () => {
  const all = pages.map(({ source }) => source).join('\n');
  assert.ok(count(all, /<FeatureGuideHighlight\b/g) >= 70);
  assert.ok(count(all, /<FeatureGuideCta\b/g) >= 70);
  assert.ok(count(all, /<FeatureRelatedGuides\b/g) >= 42);

  const component = readFileSync(
    new URL('../app/components/features/FeatureGuideSections.tsx', import.meta.url),
    'utf8',
  );
  assert.match(component, /aria-labelledby=\{id\}/);
  assert.match(component, /<Link className="button" to="\/features\/">/);
  assert.match(component, /<nav className="feature-related-guides" aria-label="Related guides">/);
});

test('settings tables and related links share responsive layout rules', () => {
  const css = readFileSync(new URL('../app/styles.css', import.meta.url), 'utf8');
  for (const selector of [
    '.page .feature-section-options',
    '.page .feature-related-guides',
    '.page .activation-feature-help-list',
  ]) {
    assert.ok(css.includes(selector), `Missing shared style: ${selector}`);
  }
});
