import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

type ChildrenProps = { children: ReactNode };

type HeadingProps = ChildrenProps & {
  id: string;
  icon: ReactNode;
  kicker: ReactNode;
  tone?: 'default' | 'help';
};

export function FeatureGuideHeading({
  id,
  icon,
  kicker,
  tone = 'default',
  children,
}: HeadingProps) {
  return (
    <div className="activation-feature-section-heading">
      <span
        className={`activation-feature-icon${tone === 'help' ? ' help' : ''}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <span className="activation-feature-kicker">{kicker}</span>
        <h2 id={id}>{children}</h2>
      </div>
    </div>
  );
}

export function FeatureGuideSection({
  id,
  help = false,
  className = '',
  children,
}: ChildrenProps & { id: string; help?: boolean; className?: string }) {
  const classes = [
    'activation-feature-section',
    help ? 'activation-feature-help' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={classes} aria-labelledby={id}>
      {children}
    </section>
  );
}

export function FeatureGuideHighlight({
  id,
  children,
}: ChildrenProps & { id: string }) {
  return (
    <section className="feature-highlight" aria-labelledby={id}>
      {children}
    </section>
  );
}

export function FeatureGuideSteps({ children }: ChildrenProps) {
  return <ol className="activation-feature-steps">{children}</ol>;
}

export function FeatureGuideChecklist({ children }: ChildrenProps) {
  return <ul className="activation-feature-steps">{children}</ul>;
}

export function FeatureGuideOptions({
  children,
  variant = 'default',
}: ChildrenProps & { variant?: 'default' | 'fields' | 'migration' }) {
  const className =
    variant === 'fields'
      ? 'fifu-fields-options'
      : variant === 'migration'
        ? 'db-migration-options'
        : 'feature-guide-options';
  return <dl className={`feature-section-options ${className}`}>{children}</dl>;
}

export function FeatureGuideHelpList({ children }: ChildrenProps) {
  return <ul className="activation-feature-help-list">{children}</ul>;
}

export function FeatureRelatedGuides({ children }: ChildrenProps) {
  return (
    <nav className="feature-related-guides" aria-label="Related guides">
      <strong>Related guides</strong>
      <p>{children}</p>
    </nav>
  );
}

type CtaProps = {
  title?: string;
  description?: string;
  spaced?: boolean;
};

export function FeatureGuideCta({
  title = 'Explore more FIFU features.',
  description = 'Return to the feature list to continue exploring.',
  spaced = false,
}: CtaProps) {
  return (
    <section
      className={`feature-detail-cta${spaced ? ' activation-feature-cta' : ''}`}
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="feature-detail-actions">
        <Link className="button" to="/features/">
          Browse features <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
