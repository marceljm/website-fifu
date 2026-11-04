import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import type { DocCard as DocCardData } from '../../data/docs-utils';
import { getDocIcon } from './doc-icons';

export function DocCard({ doc }: { doc: DocCardData }) {
  const Icon = getDocIcon(doc.icon);
  return (
    <Link
      className="simplecard catalog-card docs-catalog-card"
      to={`/docs/${doc.slug}/`}
      data-doc-slug={doc.slug}
    >
      <span className="catalog-card-heading docs-card-heading">
        <span className="catalog-icon docs-card-icon" aria-hidden="true">
          <Icon size={24} strokeWidth={1.9} />
        </span>
        <span className="catalog-card-title docs-card-title">
          <small>GUIDE · {doc.readingMinutes} MIN READ</small>
          <strong>{doc.title}</strong>
        </span>
      </span>
      <p>{doc.summary}</p>
      <b>
        Open guide <ArrowRight size={15} aria-hidden="true" />
      </b>
    </Link>
  );
}
