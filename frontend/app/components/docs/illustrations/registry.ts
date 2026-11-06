/**
 * Every guide illustration and the layout it uses. docs.json refers to these keys
 * in `illustration.key`; scenes.tsx provides one component per key (TypeScript
 * checks that both lists match).
 *
 * - workflow:   numbered steps connected by arrows
 * - comparison: two panels side by side (before/after, two options, or cause/effect)
 * - overview:   one annotated scene
 */
export const ILLUSTRATION_KINDS = {
  'getting-started': 'workflow',
  'save-in-media-library': 'workflow',
  'featured-image-from-url': 'comparison',
  'unsplash-image-search': 'workflow',
  'quick-editor': 'overview',
  'optimized-images': 'comparison',
  'hide-featured-media': 'comparison',
  'default-featured-image': 'comparison',
  'modify-post-content': 'comparison',
  'replace-not-found-image': 'comparison',
  'disable-right-click': 'comparison',
  'auto-set-featured-media': 'workflow',
  'product-and-category-images': 'overview',
  'lightbox-and-zoom': 'comparison',
  'add-image-to-order-email': 'comparison',
  'image-metadata': 'workflow',
  'clear-metadata': 'comparison',
  'reset-settings': 'comparison',
  'delete-all-urls': 'workflow',
  'fifu-api': 'workflow',
  'wp-cli': 'comparison',
  'debug-mode': 'comparison',
  'status-page': 'workflow',
  'featured-image-block': 'overview',
  'featured-media-widget': 'overview',
  'elementor-widget': 'workflow',
  'seo-and-social-sharing': 'comparison',
  'forms-and-marketplaces': 'workflow',
  'multilingual-and-duplicated-content': 'workflow',
  'bulk-editors': 'workflow',
  'import-and-automation-plugins': 'workflow',
  'theme-and-plugin-compatibility': 'comparison',
  'fifu-cloud': 'workflow',
} as const;

export type IllustrationKey = keyof typeof ILLUSTRATION_KINDS;
export type IllustrationKind = (typeof ILLUSTRATION_KINDS)[IllustrationKey];

export const KIND_LABELS: Record<IllustrationKind, string> = {
  workflow: 'Step by step',
  comparison: 'Side by side',
  overview: 'At a glance',
};
