import { Check, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export interface FeatureCliCommand {
  label: string;
  command: string;
  description?: string;
}

interface FeatureCliSectionProps {
  id: string;
  commands: readonly FeatureCliCommand[];
  note?: string;
}

function CliCommandCard({ label, command, description }: FeatureCliCommand) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="feature-cli-card">
      <div className="feature-cli-card-heading">
        <strong>{label}</strong>
        <button
          type="button"
          className="feature-cli-copy"
          onClick={copyCommand}
          aria-label={`Copy command: ${label}`}
        >
          {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre tabIndex={0}><code>{command}</code></pre>
      {description && <p className="feature-cli-description">{description}</p>}
    </div>
  );
}

/** Shared WP-CLI presentation for individual feature guides. */
export function FeatureCliSection({ id, commands, note }: FeatureCliSectionProps) {
  return (
    <section className="activation-feature-section feature-cli-section" aria-labelledby={`${id}-title`}>
      <div className="activation-feature-section-heading">
        <span className="activation-feature-icon">
          <Terminal size={19} aria-hidden="true" />
        </span>
        <div>
          <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
          <h2 id={`${id}-title`}>WP-CLI commands</h2>
        </div>
      </div>
      <p className="feature-cli-intro">Run each command separately from your WordPress installation.</p>
      <div className="feature-cli-command-list">
        {commands.map((item) => <CliCommandCard key={item.command} {...item} />)}
      </div>
      {note && <p className="feature-cli-note">{note}</p>}
      <p className="feature-cli-reference">
        Need more options? <Link to="/features/wp-cli/">See the WP-CLI guide</Link>.
      </p>
    </section>
  );
}
