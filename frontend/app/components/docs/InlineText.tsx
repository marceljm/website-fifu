import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { parseInline } from '../../data/docs-utils';

/**
 * Renders docs.json inline markup as React elements (never as raw HTML):
 * **bold**, `code`, [[UI label]], and [text](href).
 */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((token, index) => {
        switch (token.kind) {
          case 'strong':
            return <strong key={index}>{token.text}</strong>;
          case 'code':
            return <code key={index}>{token.text}</code>;
          case 'ui':
            return (
              <span className="ui-label" key={index}>
                {token.text}
              </span>
            );
          case 'link':
            return token.href.startsWith('/') ? (
              <Link className="guide-link" to={token.href} key={index}>
                {token.text}
              </Link>
            ) : (
              <a
                className="guide-link"
                href={token.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {token.text}
                <ExternalLink size={13} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            );
          default:
            return token.text;
        }
      })}
    </>
  );
}
