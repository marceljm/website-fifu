import docsJson from './docs.json';
import type { DocsData } from './docs-utils';

/**
 * FIFU documentation, maintained in docs.json (the single source of truth).
 * The JSON's block types are validated by tests/docs.test.mjs and the Django
 * tests, so the literal types can be asserted here.
 */
export const docsData = docsJson as DocsData;
