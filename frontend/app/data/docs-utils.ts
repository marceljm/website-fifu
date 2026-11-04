/** A documentation category, shown as a section on /docs/. */
export interface DocCategory {
  id: string;
  title: string;
  description: string;
}

/** The card-level fields every guide has in docs.json. */
export interface DocSummary {
  slug: string;
  title: string;
  summary: string;
  /** Key of an icon in app/components/docs/doc-icons.ts. */
  icon: string;
  /** Id of a category in DocsData.categories. */
  category: string;
}

/** A card plus its computed reading time, as sent to the listing and related links. */
export interface DocCard extends DocSummary {
  readingMinutes: number;
}

export type CalloutTone = 'tip' | 'note' | 'warning';

/**
 * Content blocks of a guide. Text fields accept a tiny inline markup (see
 * parseInline): **bold**, `code`, [[UI label]], and [text](/docs/slug/).
 */
export type DocBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { title: string; text?: string }[] }
  | { type: 'settings'; items: { label: string; text: string }[] }
  | { type: 'callout'; tone: CalloutTone; title: string; text: string }
  | { type: 'code'; language: 'bash' | 'php'; code: string; caption?: string }
  | { type: 'table'; columns: string[]; rows: string[][] };

export const BLOCK_TYPES = [
  'paragraph',
  'list',
  'steps',
  'settings',
  'callout',
  'code',
  'table',
] as const;

export interface DocSection {
  /** Anchor id, unique within the guide. */
  id: string;
  title: string;
  blocks: DocBlock[];
}

/** "Where to find it": a named path through the WordPress admin. */
export interface DocLocation {
  label: string;
  path: string[];
}

/** A short "at a glance" fact, such as the default value of a setting. */
export interface DocFact {
  label: string;
  value: string;
}

/**
 * The featured illustration of a guide: `key` names a scene in
 * app/components/docs/illustrations/registry.ts, `caption` is shown under it,
 * and `alt` describes it for screen readers.
 */
export interface DocIllustration {
  key: string;
  caption: string;
  alt: string;
}

/** A full guide as stored in docs.json. */
export interface DocGuide extends DocSummary {
  illustration: DocIllustration;
  locations: DocLocation[];
  facts: DocFact[];
  sections: DocSection[];
  /** Slugs of other guides worth reading next. */
  related: string[];
}

export interface DocsData {
  plugin: string;
  categories: DocCategory[];
  docs: DocGuide[];
}

/** Catalog payload for /docs/: only card fields, never full guides. */
export interface DocsCatalog {
  plugin: string;
  categories: DocCategory[];
  docs: DocCard[];
}

export interface DocGroup<T extends DocSummary = DocSummary> {
  category: DocCategory;
  docs: T[];
}

/* ------------------------------------------------------------------ */
/* Inline markup                                                       */
/* ------------------------------------------------------------------ */

export type InlineToken =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'code'; text: string }
  | { kind: 'ui'; text: string }
  | { kind: 'link'; text: string; href: string };

const INLINE_RE = /\*\*(.+?)\*\*|`([^`]+)`|\[\[(.+?)\]\]|\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Splits text into tokens: **bold**, `code`, [[UI label]] (an exact label from
 * the FIFU interface), and [text](href) links. Everything else is plain text,
 * so docs.json never needs raw HTML.
 */
export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_RE)) {
    const index = match.index ?? 0;
    if (index > last) tokens.push({ kind: 'text', text: text.slice(last, index) });
    const [, strong, code, ui, linkText, href] = match;
    if (strong !== undefined) tokens.push({ kind: 'strong', text: strong });
    else if (code !== undefined) tokens.push({ kind: 'code', text: code });
    else if (ui !== undefined) tokens.push({ kind: 'ui', text: ui });
    else tokens.push({ kind: 'link', text: linkText, href });
    last = index + match[0].length;
  }
  if (last < text.length) tokens.push({ kind: 'text', text: text.slice(last) });
  return tokens;
}

/** The visible text of inline markup, without the markers. */
export function plainText(text: string): string {
  return parseInline(text)
    .map((token) => token.text)
    .join('');
}

/** Every link target used in a guide's text, in order. */
export function collectLinks(guide: DocGuide): string[] {
  return collectTexts(guide).flatMap((text) =>
    parseInline(text)
      .filter(
        (token): token is Extract<InlineToken, { kind: 'link' }> => token.kind === 'link',
      )
      .map((token) => token.href),
  );
}

/* ------------------------------------------------------------------ */
/* Reading time                                                        */
/* ------------------------------------------------------------------ */

export const WORDS_PER_MINUTE = 200;

function blockTexts(block: DocBlock): string[] {
  switch (block.type) {
    case 'paragraph':
      return [block.text];
    case 'list':
      return block.items;
    case 'steps':
      return block.items.flatMap((item) => [item.title, item.text ?? '']);
    case 'settings':
      return block.items.flatMap((item) => [item.label, item.text]);
    case 'callout':
      return [block.title, block.text];
    case 'code':
      return [block.caption ?? '', block.code];
    case 'table':
      return [...block.columns, ...block.rows.flat()];
    default:
      return [];
  }
}

/** All the reader-facing text of a guide (with inline markup still in place). */
export function collectTexts(guide: DocGuide): string[] {
  return [
    guide.title,
    guide.summary,
    guide.illustration?.caption ?? '',
    ...guide.locations.flatMap((location) => [location.label, ...location.path]),
    ...guide.facts.flatMap((fact) => [fact.label, fact.value]),
    ...guide.sections.flatMap((section) => [
      section.title,
      ...section.blocks.flatMap(blockTexts),
    ]),
  ].filter(Boolean);
}

export function countWords(text: string): number {
  return plainText(text).split(/\s+/).filter(Boolean).length;
}

/** Minutes needed to read a guide at WORDS_PER_MINUTE, rounded up, at least 1. */
export function readingMinutes(guide: DocGuide): number {
  const words = collectTexts(guide).reduce((total, text) => total + countWords(text), 0);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/* ------------------------------------------------------------------ */
/* Lookup, search, grouping                                            */
/* ------------------------------------------------------------------ */

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

/** Strips a trailing slash so `/docs/foo/` and `/docs/foo` resolve to the same guide. */
export function normalizeSlug(path: string | undefined): string {
  return (path || '').replace(/^\/+|\/+$/g, '');
}

export function findDoc<T extends DocSummary>(
  data: { docs: T[] },
  slug: string | undefined,
): T | undefined {
  const wanted = normalizeSlug(slug);
  return wanted ? data.docs.find((doc) => doc.slug === wanted) : undefined;
}

export function findCategory(
  data: { categories: DocCategory[] },
  id: string,
): DocCategory | undefined {
  return data.categories.find((category) => category.id === id);
}

/** The card fields of a guide plus its reading time. */
export function toCard(guide: DocGuide): DocCard {
  const { slug, title, summary, icon, category } = guide;
  return { slug, title, summary, icon, category, readingMinutes: readingMinutes(guide) };
}

export function toCatalog(data: DocsData): DocsCatalog {
  return {
    plugin: data.plugin,
    categories: data.categories,
    docs: data.docs.map(toCard),
  };
}

/** Previous and next guides in the reading order of docs.json. */
export function neighbours(
  data: DocsData,
  slug: string,
): { previous: DocCard | null; next: DocCard | null } {
  const index = data.docs.findIndex((doc) => doc.slug === slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? toCard(data.docs[index - 1]) : null,
    next: index < data.docs.length - 1 ? toCard(data.docs[index + 1]) : null,
  };
}

/**
 * Returns the guides whose title, summary, or category title contain every word of
 * the query (case- and accent-insensitive). An empty query returns every guide.
 */
export function filterDocs<T extends DocSummary>(
  data: { categories: DocCategory[]; docs: T[] },
  query: string,
): T[] {
  const words = normalize(query).split(' ').filter(Boolean);
  if (!words.length) return data.docs;
  return data.docs.filter((doc) => {
    const haystack = normalize(
      `${doc.title} ${doc.summary} ${findCategory(data, doc.category)?.title ?? ''}`,
    );
    return words.every((word) => haystack.includes(word));
  });
}

/** Groups guides by category, in category order, dropping empty categories. */
export function groupDocs<T extends DocSummary>(
  data: { categories: DocCategory[]; docs: T[] },
  docs: T[] = data.docs,
): DocGroup<T>[] {
  return data.categories
    .map((category) => ({
      category,
      docs: docs.filter((doc) => doc.category === category.id),
    }))
    .filter((group) => group.docs.length > 0);
}
