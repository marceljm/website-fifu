import { Check, Copy, Info, Lightbulb, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import type { CalloutTone, DocBlock } from '../../data/docs-utils';
import { InlineText } from './InlineText';

const CALLOUT_ICONS = { tip: Lightbulb, note: Info, warning: TriangleAlert };
const CALLOUT_LABELS: Record<CalloutTone, string> = {
  tip: 'Tip',
  note: 'Note',
  warning: 'Warning',
};
const LANGUAGE_LABELS = { bash: 'Terminal', php: 'PHP' };

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="guide-code-copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? (
        <Check size={15} aria-hidden="true" />
      ) : (
        <Copy size={15} aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

/** Renders one content block of a guide. Every guide uses the same set. */
export function GuideBlock({ block }: { block: DocBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="guide-paragraph">
          <InlineText text={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul className="guide-list">
          {block.items.map((item, index) => (
            <li key={index}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol className="guide-steps">
          {block.items.map((item, index) => (
            <li key={index}>
              <span className="guide-step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div className="guide-step-body">
                <p className="guide-step-title">
                  <InlineText text={item.title} />
                </p>
                {item.text && (
                  <p className="guide-step-text">
                    <InlineText text={item.text} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );
    case 'settings':
      return (
        <dl className="guide-settings">
          {block.items.map((item, index) => (
            <div className="guide-setting" key={index}>
              <dt>
                <span className="ui-label">{item.label}</span>
              </dt>
              <dd>
                <InlineText text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case 'callout': {
      const Icon = CALLOUT_ICONS[block.tone];
      return (
        <aside
          className={`guide-callout guide-callout--${block.tone}`}
          aria-label={CALLOUT_LABELS[block.tone]}
        >
          <span className="guide-callout-icon" aria-hidden="true">
            <Icon size={20} strokeWidth={2} />
          </span>
          <div>
            <p className="guide-callout-title">
              <InlineText text={block.title} />
            </p>
            <p className="guide-callout-text">
              <InlineText text={block.text} />
            </p>
          </div>
        </aside>
      );
    }
    case 'code':
      return (
        <figure className="guide-code">
          <figcaption>
            <span className="guide-code-language">{LANGUAGE_LABELS[block.language]}</span>
            {block.caption && <span className="guide-code-caption">{block.caption}</span>}
            <CopyButton code={block.code} />
          </figcaption>
          <pre tabIndex={0}>
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case 'table':
      return (
        <div className="guide-table-wrap" role="region" tabIndex={0} aria-label="Table">
          <table className="guide-table">
            <thead>
              <tr>
                {block.columns.map((column) => (
                  <th scope="col" key={column}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} data-label={block.columns[cellIndex]}>
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}
