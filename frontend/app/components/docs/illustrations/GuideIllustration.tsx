import { Sparkles } from 'lucide-react';
import type { DocIllustration } from '../../../data/docs-utils';
import { ILLUSTRATION_KINDS, KIND_LABELS, type IllustrationKey } from './registry';
import { SCENES } from './scenes';

/**
 * The featured illustration of a guide. The drawing is decorative markup, so it's
 * hidden from assistive technology; `alt` describes it instead, and `caption` is
 * shown under it for everyone.
 */
export function GuideIllustration({ illustration }: { illustration: DocIllustration }) {
  const key = illustration.key as IllustrationKey;
  const Scene = SCENES[key];
  if (!Scene) return null;
  const kind = ILLUSTRATION_KINDS[key];
  return (
    <figure
      className={`guide-illustration guide-illustration--${kind}`}
      data-illustration={key}
    >
      <div className="guide-illustration-head">
        <span className="guide-illustration-kind">
          <Sparkles size={13} aria-hidden="true" />
          {KIND_LABELS[kind]}
        </span>
      </div>
      <div className="guide-illustration-stage" role="img" aria-label={illustration.alt}>
        <div className="ill" aria-hidden="true">
          <Scene />
        </div>
      </div>
      <figcaption>{illustration.caption}</figcaption>
    </figure>
  );
}
