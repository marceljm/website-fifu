/**
 * Building blocks for guide illustrations. Every scene is composed from these,
 * so all illustrations share one visual language (see "Guide illustrations" in
 * app/styles.css). They are decorative: GuideIllustration hides them from
 * assistive technology and exposes the text description instead.
 */
import {
  ArrowDown,
  ArrowRight,
  Ban,
  Camera,
  Check,
  EyeOff,
  ImageOff,
  MousePointer2,
  X,
  type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';

type Tone = 'sky' | 'sunset' | 'forest' | 'violet' | 'sand' | 'slate';

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* ------------------------------------------------------------------ */

/** A stylized photo. `state` draws the special cases (broken, empty, hidden). */
export function Pic({
  tone = 'sky',
  ratio = 'wide',
  state,
  icon: Icon,
  badge,
  badgeTone = 'blue',
  label,
  faded,
  highlight,
}: {
  tone?: Tone;
  ratio?: 'wide' | 'square' | 'banner' | 'tall';
  state?: 'broken' | 'empty' | 'hidden';
  icon?: LucideIcon;
  badge?: string;
  badgeTone?: 'blue' | 'green' | 'red' | 'amber' | 'dark';
  label?: string;
  faded?: boolean;
  highlight?: boolean;
}) {
  const StateIcon = state === 'broken' ? ImageOff : state === 'hidden' ? EyeOff : null;
  return (
    <span
      className={[
        'ill-pic',
        `ill-pic--${ratio}`,
        state ? `ill-pic--${state}` : `ill-pic--${tone}`,
        faded ? 'ill-pic--faded' : '',
        highlight ? 'ill-pic--highlight' : '',
      ].join(' ')}
    >
      {!state && !Icon && (
        <>
          <span className="ill-pic-sun" />
          <span className="ill-pic-hill" />
          <span className="ill-pic-hill ill-pic-hill--front" />
        </>
      )}
      {!state && Icon && (
        <span className="ill-pic-icon">
          <Icon size={26} strokeWidth={1.6} />
        </span>
      )}
      {(StateIcon || label) && (
        <span className="ill-pic-state">
          {StateIcon && <StateIcon size={20} strokeWidth={1.8} />}
          {label && <span>{label}</span>}
        </span>
      )}
      {badge && <span className={`ill-badge ill-badge--${badgeTone}`}>{badge}</span>}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Frames                                                              */
/* ------------------------------------------------------------------ */

/** A browser window showing a page of the site. */
export function Browser({
  url = 'yoursite.com',
  children,
  className = '',
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`ill-browser ${className}`}>
      <span className="ill-browser-bar">
        <span className="ill-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="ill-browser-url">{url}</span>
      </span>
      <span className="ill-browser-body">{children}</span>
    </span>
  );
}

/** A WordPress admin box, like the FIFU box in the editor sidebar. */
export function Panel({
  title = 'FIFU',
  icon: Icon = Camera,
  children,
  className = '',
}: {
  title?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`ill-panel ${className}`}>
      <span className="ill-panel-title">
        <Icon size={13} strokeWidth={2} />
        {title}
      </span>
      <span className="ill-panel-body">{children}</span>
    </span>
  );
}

/** An email message. */
export function Email({
  subject,
  to,
  children,
}: {
  subject: string;
  to?: string;
  children: ReactNode;
}) {
  return (
    <span className="ill-email">
      <span className="ill-email-head">
        {to && <span className="ill-email-to">To: {to}</span>}
        <strong>{subject}</strong>
      </span>
      <span className="ill-email-body">{children}</span>
    </span>
  );
}

/** A dark terminal or code window. */
export function Terminal({
  title = 'Terminal',
  lines,
}: {
  title?: string;
  lines: { text: string; kind?: 'command' | 'code' | 'comment' | 'output' }[];
}) {
  return (
    <span className="ill-terminal">
      <span className="ill-terminal-bar">
        <span className="ill-dots">
          <i />
          <i />
          <i />
        </span>
        {title}
      </span>
      <span className="ill-terminal-body">
        {lines.map((line, index) => (
          <span
            className={`ill-terminal-line ill-terminal-line--${line.kind ?? 'command'}`}
            key={index}
          >
            {line.kind === 'command' || line.kind === undefined ? <b>$</b> : null}
            {line.text}
          </span>
        ))}
      </span>
    </span>
  );
}

/** A small spreadsheet. */
export function Sheet({ columns, rows }: { columns: string[]; rows: ReactNode[][] }) {
  return (
    <span
      className="ill-sheet"
      style={{ gridTemplateColumns: `repeat(${columns.length}, auto)` }}
    >
      {columns.map((column) => (
        <span className="ill-sheet-head" key={column}>
          {column}
        </span>
      ))}
      {rows.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <span className="ill-sheet-cell" key={`${rowIndex}-${cellIndex}`}>
            {cell}
          </span>
        )),
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Interface pieces                                                    */
/* ------------------------------------------------------------------ */

/** A text field. Shows `value` if given, otherwise the placeholder. */
export function Field({
  value,
  placeholder,
  icon: Icon,
  focus,
}: {
  value?: string;
  placeholder?: string;
  icon?: LucideIcon;
  focus?: boolean;
}) {
  return (
    <span className={`ill-field${focus ? ' ill-field--focus' : ''}`}>
      {Icon && <Icon size={12} strokeWidth={2} />}
      {value ? (
        <span>{value}</span>
      ) : (
        <span className="ill-placeholder">{placeholder}</span>
      )}
    </span>
  );
}

export function Btn({
  children,
  variant = 'primary',
  icon: Icon,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: LucideIcon;
}) {
  return (
    <span className={`ill-btn ill-btn--${variant}`}>
      {Icon && <Icon size={12} strokeWidth={2.2} />}
      {children}
    </span>
  );
}

/** An on/off switch with its label, as in FIFU's settings. */
export function Toggle({ label, on }: { label: string; on: boolean }) {
  return (
    <span className={`ill-toggle${on ? ' ill-toggle--on' : ''}`}>
      <span className="ill-toggle-track">
        <span className="ill-toggle-knob" />
      </span>
      <span className="ill-toggle-label">{label}</span>
    </span>
  );
}

/** Placeholder text lines. */
export function Lines({ count = 3, short }: { count?: number; short?: boolean }) {
  return (
    <span className={`ill-lines${short ? ' ill-lines--short' : ''}`}>
      {Array.from({ length: count }, (_, index) => (
        <i key={index} />
      ))}
    </span>
  );
}

/** A bold placeholder line used as a title. */
export function Heading({ text }: { text?: string }) {
  return text ? (
    <span className="ill-heading">{text}</span>
  ) : (
    <span className="ill-heading ill-heading--bar" />
  );
}

export function Chip({
  children,
  tone = 'blue',
  icon: Icon,
}: {
  children: ReactNode;
  tone?: 'blue' | 'green' | 'red' | 'amber' | 'gray' | 'dark';
  icon?: LucideIcon;
}) {
  return (
    <span className={`ill-chip ill-chip--${tone}`}>
      {Icon && <Icon size={11} strokeWidth={2.4} />}
      {children}
    </span>
  );
}

/** A large icon tile, used for concepts without an interface (FIFU, a database…). */
export function Tile({
  icon: Icon,
  label,
  tone = 'blue',
}: {
  icon: LucideIcon;
  label?: string;
  tone?: 'blue' | 'green' | 'red' | 'amber' | 'dark';
}) {
  return (
    <span className={`ill-tile ill-tile--${tone}`}>
      <span className="ill-tile-icon">
        <Icon size={26} strokeWidth={1.8} />
      </span>
      {label && <span className="ill-tile-label">{label}</span>}
    </span>
  );
}

/** The mouse pointer, placed over the element the user clicks. */
export function Cursor({ blocked }: { blocked?: boolean }) {
  return (
    <span className={`ill-cursor${blocked ? ' ill-cursor--blocked' : ''}`}>
      <MousePointer2 size={18} strokeWidth={2} fill="#fff" />
      {blocked && (
        <span className="ill-cursor-ban">
          <Ban size={14} strokeWidth={2.6} />
        </span>
      )}
    </span>
  );
}

/** A small green tick or red cross. */
export function Mark({ ok = true }: { ok?: boolean }) {
  return (
    <span className={`ill-mark ill-mark--${ok ? 'ok' : 'no'}`}>
      {ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
    </span>
  );
}

/** Groups children in a column (default) or row. */
export function Stack({
  children,
  row,
  gap = 'md',
  className = '',
}: {
  children: ReactNode;
  row?: boolean;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <span
      className={`ill-stack ill-stack--${row ? 'row' : 'col'} ill-gap-${gap} ${className}`}
    >
      {children}
    </span>
  );
}

/** A post or product card: image, title, and text lines. */
export function Card({
  pic,
  title,
  lines = 2,
  footer,
}: {
  pic?: ReactNode;
  title?: string;
  lines?: number;
  footer?: ReactNode;
}) {
  return (
    <span className="ill-card">
      {pic}
      <Heading text={title} />
      {lines > 0 && <Lines count={lines} short />}
      {footer}
    </span>
  );
}

/** Wraps an element so a floating item (a cursor, a menu) can sit over it. */
export function Spot({
  children,
  overlay,
  inline,
}: {
  children: ReactNode;
  overlay: ReactNode;
  /** Fit the wrapped element (a button) instead of the full width. */
  inline?: boolean;
}) {
  return (
    <span className={`ill-spot${inline ? ' ill-spot--inline' : ''}`}>
      {children}
      <span className="ill-spot-overlay">{overlay}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Layouts                                                             */
/* ------------------------------------------------------------------ */

function Connector({ label }: { label?: string }) {
  return (
    <span className="ill-connector">
      <span className="ill-connector-arrow ill-connector-arrow--right">
        <ArrowRight size={18} strokeWidth={2.2} />
      </span>
      <span className="ill-connector-arrow ill-connector-arrow--down">
        <ArrowDown size={18} strokeWidth={2.2} />
      </span>
      {label && <span className="ill-connector-label">{label}</span>}
    </span>
  );
}

export interface WorkflowStep {
  title: string;
  visual: ReactNode;
}

/** Numbered steps connected by arrows (stacked on small screens). */
export function Workflow({ steps }: { steps: WorkflowStep[] }) {
  return (
    <span className="ill-workflow" style={{ ['--ill-steps' as string]: steps.length }}>
      {steps.map((step, index) => (
        <span className="ill-workflow-item" key={step.title}>
          {index > 0 && <Connector />}
          <span className="ill-step">
            <span className="ill-step-visual">{step.visual}</span>
            <span className="ill-step-title">
              <b>{index + 1}</b>
              {step.title}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}

export interface ComparisonSide {
  label: string;
  tone?: 'bad' | 'good' | 'neutral';
  visual: ReactNode;
  note?: string;
}

/** Two panels side by side, joined by an arrow or “vs”. */
export function Comparison({
  left,
  right,
  join = 'arrow',
}: {
  left: ComparisonSide;
  right: ComparisonSide;
  join?: 'arrow' | 'vs';
}) {
  const side = (item: ComparisonSide) => (
    <span className={`ill-side ill-side--${item.tone ?? 'neutral'}`}>
      <span className="ill-side-label">
        {item.tone === 'good' && <Check size={12} strokeWidth={3} />}
        {item.tone === 'bad' && <X size={12} strokeWidth={3} />}
        {item.label}
      </span>
      <span className="ill-side-visual">{item.visual}</span>
      {item.note && <span className="ill-side-note">{item.note}</span>}
    </span>
  );
  return (
    <span className="ill-comparison">
      {side(left)}
      {join === 'vs' ? <span className="ill-vs">vs</span> : <Connector />}
      {side(right)}
    </span>
  );
}

/** A single scene, optionally with numbered callouts underneath. */
export function Overview({ children, notes }: { children: ReactNode; notes?: string[] }) {
  return (
    <span className="ill-overview">
      <span className="ill-overview-scene">{children}</span>
      {notes && notes.length > 0 && (
        <span className="ill-overview-notes">
          {notes.map((note, index) => (
            <span key={note}>
              <b>{index + 1}</b>
              {note}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}

/** A numbered marker placed inside a scene, matching an Overview note. */
export function Pin({ n }: { n: number }) {
  return <span className="ill-pin">{n}</span>;
}
