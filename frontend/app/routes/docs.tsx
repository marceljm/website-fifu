import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigationType,
  useSearchParams,
  type ShouldRevalidateFunctionArgs,
} from 'react-router';
import { DocCard } from '../components/docs/DocCard';
import { GuideLayout } from '../components/docs/GuideLayout';
import { Page } from '../components/layout/SiteLayout';
import { docsData } from '../data/docs';
import {
  filterDocs,
  findCategory,
  findDoc,
  groupDocs,
  neighbours,
  readingMinutes,
  toCard,
  toCatalog,
  type DocGuide,
  type DocsCatalog,
} from '../data/docs-utils';

const EYEBROW = 'FIFU HELP CENTER';

export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const slug = params['*'];
  if (slug && slug.replace(/\/+$/, '')) {
    const guide = findDoc(docsData, slug);
    if (!guide) return { view: 'missing' as const };
    const related = guide.related
      .map((relatedSlug) => findDoc(docsData, relatedSlug))
      .filter((doc): doc is DocGuide => Boolean(doc))
      .map(toCard);
    return {
      view: 'guide' as const,
      guide,
      category: findCategory(docsData, guide.category) ?? null,
      readingMinutes: readingMinutes(guide),
      related,
      ...neighbours(docsData, guide.slug),
    };
  }
  // Only card fields (plus reading time) go to the listing, never full guides.
  return { view: 'catalog' as const, catalog: toCatalog(docsData) };
}

type LoaderData = Awaited<ReturnType<typeof loader>>;

/** Typing in the search box only changes `?q=`; the catalog data stays the same. */
export function shouldRevalidate({
  currentUrl,
  nextUrl,
  defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs) {
  return currentUrl.pathname === nextUrl.pathname ? false : defaultShouldRevalidate;
}

export function meta({ data }: { data?: LoaderData }) {
  if (data?.view === 'guide') {
    return [
      { title: `${data.guide.title} | FIFU Docs` },
      { name: 'description', content: data.guide.summary },
    ];
  }
  if (data?.view === 'missing') {
    return [
      { title: 'Guide not found | FIFU Docs' },
      {
        name: 'description',
        content: 'Browse the Featured Image from URL (FIFU) guides.',
      },
    ];
  }
  return [
    { title: 'FIFU Documentation | Featured Image from URL Guides' },
    {
      name: 'description',
      content:
        'Step-by-step guides for every free feature of Featured Image from URL (FIFU): remote featured images, WooCommerce, automation, metadata, and integrations.',
    },
  ];
}

export default function Docs() {
  const data = useLoaderData<typeof loader>();
  if (data.view === 'guide') {
    const { view: _view, ...props } = data;
    return <GuideLayout {...props} />;
  }
  if (data.view === 'missing') return <GuideNotFound />;
  return <Catalog catalog={data.catalog} />;
}

function GuideNotFound() {
  return (
    <Page eyebrow={EYEBROW} title="Guide not found." className="docs-page">
      <p>That guide doesn’t exist or has moved.</p>
      <Link className="button" to="/docs/">
        Browse documentation
      </Link>
    </Page>
  );
}

function Catalog({ catalog }: { catalog: DocsCatalog }) {
  const [params, setParams] = useSearchParams();
  const urlQuery = params.get('q') || '';
  // Start empty so the first render matches the pre-rendered HTML (which has no
  // query); the effect below applies `?q=` right after hydration.
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigationType = useNavigationType();
  // The input owns the query while typing; only follow the URL on first load and
  // back/forward (both are POP navigations).
  useEffect(() => {
    if (navigationType === 'POP') setQuery(urlQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);
  const updateQuery = (value: string) => {
    setQuery(value);
    setParams(value ? { q: value } : {}, { replace: true, preventScrollReset: true });
  };
  const results = filterDocs(catalog, query);
  const groups = groupDocs(catalog, results);
  const searching = query.trim().length > 0;

  return (
    <Page
      eyebrow={EYEBROW}
      title="Everything you can do with FIFU."
      className="docs-page"
    >
      <p>
        Plain-language guides for every free feature of Featured Image from URL. Each
        guide explains what a feature does, where to find it, and how to set it up.
      </p>

      <div className="docs-toolbar">
        <label className="docs-search">
          <span className="docs-search-label">Search documentation</span>
          <span className="docs-search-field">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              aria-label="Search documentation"
              placeholder="Try “default image” or “CLI”"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </span>
        </label>
        <p className="docs-result-count" aria-live="polite">
          {searching
            ? `${results.length} ${results.length === 1 ? 'guide' : 'guides'} for “${query.trim()}”`
            : `${catalog.docs.length} guides in ${catalog.categories.length} topics`}
        </p>
      </div>

      {!searching && (
        <nav className="docs-topics" aria-label="Documentation topics">
          {groupDocs(catalog).map(({ category, docs }) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
              <span>{docs.length}</span>
            </a>
          ))}
        </nav>
      )}

      {groups.map(({ category, docs }) => (
        <section
          className="docs-category"
          id={category.id}
          key={category.id}
          aria-labelledby={`${category.id}-title`}
        >
          <header className="docs-category-header">
            <h2 id={`${category.id}-title`}>{category.title}</h2>
            <p>{category.description}</p>
          </header>
          <div className="cards docs-cards">
            {docs.map((doc) => (
              <DocCard doc={doc} key={doc.slug} />
            ))}
          </div>
        </section>
      ))}

      {searching && !results.length && (
        <div className="docs-empty">
          <p>No guides match “{query.trim()}”. Try a broader word.</p>
          <button type="button" className="button" onClick={() => updateQuery('')}>
            Show all guides
          </button>
        </div>
      )}
    </Page>
  );
}
