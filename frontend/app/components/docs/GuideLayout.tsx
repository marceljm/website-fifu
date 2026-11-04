import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock,
  ListTree,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router';
import type { DocCard, DocCategory, DocGuide } from '../../data/docs-utils';
import { Shell } from '../layout/SiteLayout';
import { getDocIcon } from './doc-icons';
import { GuideBlock } from './GuideBlocks';
import { GuideIllustration } from './illustrations/GuideIllustration';
import { InlineText } from './InlineText';

export interface GuideLayoutProps {
  guide: DocGuide;
  category: DocCategory | null;
  readingMinutes: number;
  related: DocCard[];
  previous: DocCard | null;
  next: DocCard | null;
}

function TableOfContents({ guide }: { guide: DocGuide }) {
  return (
    <ol className="guide-toc-list">
      {guide.sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>{section.title}</a>
        </li>
      ))}
    </ol>
  );
}

/** The shared layout of every guide page: header, overview, body, and navigation. */
export function GuideLayout({
  guide,
  category,
  readingMinutes,
  related,
  previous,
  next,
}: GuideLayoutProps) {
  const Icon = getDocIcon(guide.icon);
  return (
    <Shell>
      <main className="page docs-page guide-page">
        <nav className="guide-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/docs/">Docs</Link>
            </li>
            {category && (
              <li>
                <Link to={`/docs/#${category.id}`}>{category.title}</Link>
              </li>
            )}
            <li aria-current="page">{guide.title}</li>
          </ol>
        </nav>

        <header className="guide-hero">
          <span className="guide-hero-icon" aria-hidden="true">
            <Icon size={30} strokeWidth={1.8} />
          </span>
          <div className="guide-hero-text">
            <div className="eyebrow">
              FIFU HELP CENTER{category ? ` · ${category.title.toUpperCase()}` : ''}
            </div>
            <h1>{guide.title}</h1>
            <p className="guide-lead">{guide.summary}</p>
            <ul className="guide-meta" aria-label="About this guide">
              <li>
                <Clock size={15} aria-hidden="true" />
                {readingMinutes} min read
              </li>
              <li>
                <BadgeCheck size={15} aria-hidden="true" />
                Free feature
              </li>
            </ul>
          </div>
        </header>

        <section className="guide-overview" aria-label="At a glance">
          <div className="guide-locations">
            <h2 className="guide-overview-title">
              <MapPin size={17} aria-hidden="true" />
              Where to find it
            </h2>
            {guide.locations.map((location) => (
              <div className="guide-location" key={location.label}>
                <span className="guide-location-label">{location.label}</span>
                <ol className="guide-path">
                  {location.path.map((step, index) => (
                    <li key={`${step}-${index}`}>
                      <InlineText text={step} />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          {guide.facts.length > 0 && (
            <dl className="guide-facts">
              {guide.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>
                    <InlineText text={fact.value} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        {guide.illustration && <GuideIllustration illustration={guide.illustration} />}

        <details className="guide-toc-mobile">
          <summary>
            <ListTree size={17} aria-hidden="true" />
            On this page
            <ChevronDown className="guide-toc-chevron" size={17} aria-hidden="true" />
          </summary>
          <TableOfContents guide={guide} />
        </details>

        <div className="guide-body">
          <article className="guide-article">
            {guide.sections.map((section) => (
              <section
                className="guide-section"
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <h2 id={`${section.id}-title`}>
                  <a className="guide-anchor" href={`#${section.id}`} aria-hidden="true">
                    #
                  </a>
                  {section.title}
                </h2>
                {section.blocks.map((block, index) => (
                  <GuideBlock block={block} key={index} />
                ))}
              </section>
            ))}
          </article>

          <aside className="guide-toc" aria-label="On this page">
            <p className="guide-toc-title">On this page</p>
            <TableOfContents guide={guide} />
            <Link className="guide-toc-back" to="/docs/">
              <ArrowLeft size={15} aria-hidden="true" />
              All documentation
            </Link>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="guide-related" aria-labelledby="guide-related-title">
            <h2 id="guide-related-title">Related guides</h2>
            <div className="guide-related-grid">
              {related.map((doc) => {
                const RelatedIcon = getDocIcon(doc.icon);
                return (
                  <Link
                    className="guide-related-card"
                    to={`/docs/${doc.slug}/`}
                    key={doc.slug}
                  >
                    <span className="guide-related-icon" aria-hidden="true">
                      <RelatedIcon size={20} strokeWidth={1.9} />
                    </span>
                    <span>
                      <strong>{doc.title}</strong>
                      <small>{doc.readingMinutes} min read</small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <nav className="guide-pagination" aria-label="More guides">
          {previous ? (
            <Link
              className="guide-pagination-link"
              to={`/docs/${previous.slug}/`}
              rel="prev"
            >
              <small>
                <ArrowLeft size={14} aria-hidden="true" /> Previous
              </small>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              className="guide-pagination-link guide-pagination-next"
              to={`/docs/${next.slug}/`}
              rel="next"
            >
              <small>
                Next <ArrowRight size={14} aria-hidden="true" />
              </small>
              <strong>{next.title}</strong>
            </Link>
          )}
        </nav>
      </main>
    </Shell>
  );
}
