import { ArrowUpRight, CircleAlert, Images, Settings2 } from 'lucide-react';
import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { FeatureCliSection } from '../components/features/FeatureCliSection';

export default function SaveInMediaLibraryGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Save in the Media Library"
      className="feature-guide-page media-library-feature-page"
    >
      <p className="lead">
        Copy a remote FIFU image into WordPress when you need a local attachment for
        editing, product galleries, or workflows that require hosted media.
      </p>

      <section className="feature-highlight" aria-labelledby="media-library-highlight">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" /> REMOTE TO LOCAL
          </span>
          <h2 id="media-library-highlight">Keep the image; change where it lives.</h2>
          <p>
            Turn a FIFU image URL into a WordPress attachment on demand, or scan for
            remote images automatically. The local copy can support WordPress tools and
            product galleries that need attachment files.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/save-in-the-media-library-guide-1.png"
            alt="Upload a FIFU remote image from the editor and see it as an attachment in the WordPress Media Library."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="media-library-purpose"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="media-library-purpose">Use a local copy when a URL is not enough.</h2>
          </div>
        </div>
        <p>
              Saving a remote image places a copy in your WordPress Media Library and uses it for the post or product. This is useful when a theme or plugin needs a locally stored image. If you prefer remote images, you can leave this feature off.
            </p>
        <p>
          If you only need to display remote featured images or remote WooCommerce gallery
          images, keep using{' '}
          <Link to="/features/remote-featured-image/">Remote Featured Image</Link> or{' '}
          <Link to="/features/remote-product-gallery-images/">
            Remote Product Gallery Images
          </Link>
          . Convert them only when you need local attachments.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="media-library-settings"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP</span>
            <h2 id="media-library-settings">Choose the controls you need.</h2>
          </div>
        </div>
        <p>
          In WordPress, open{' '}
          <strong>FIFU → FIFU Settings → Media → Save in the Media Library</strong>. The
          three tabs control the editor button, automatic scan, allowed image domains, and
          download proxy.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Main</dt>
            <dd>
              Turn on <strong>show save button on post editor</strong> to reveal upload
              controls in FIFU editor panels, quick edit, and product variation editing.
              Turn on{' '}
              <strong>
                run a function that periodically searches for remote images and saves them
                in the media library
              </strong>{' '}
              only if you want an automatic scan. The scan processes eligible posts and
              taxonomy terms; a domain list narrows what it considers.
            </dd>
          </div>
          <div>
            <dt>Filter by domain</dt>
            <dd>
              Enter comma-separated domains, for example{' '}
              <code>images.example.com,photos.example.org</code>. Matching includes the
              listed host and its subdomains. The filter applies to automatic scanning and
              uploads; leave it empty to allow any domain.
            </dd>
          </div>
          <div>
            <dt>Proxy</dt>
            <dd>
              Enable <strong>Proxy</strong> if an image host blocks downloads from your server. You can use a public proxy or enter your own proxy address and credentials in the private proxy settings.
            </dd>
          </div>
        </dl>
      </section>

      <FeatureCliSection
        id="media-library-cli"
        commands={[
          {
            label: 'Limit uploads to selected domains',
            command: 'wp fifu upload --domain="images.example.com,photos.example.org"',
            description: 'Replace the example domains with your image hosts.',
          },
          { label: 'Show the upload button', command: 'wp fifu upload --show-button=on' },
          { label: 'Enable automatic conversion', command: 'wp fifu upload --job=on' },
          { label: 'Enable download proxies', command: 'wp fifu upload --proxy=on' },
          {
            label: 'Set a private proxy',
            command: 'wp fifu upload --private-proxy=HOST:PORT',
            description: 'Replace HOST:PORT with your proxy address.',
          },
        ]}
        note="Replace on with off to disable a switch. Back up your site before enabling automatic conversion."
      />

      <section
        className="activation-feature-section"
        aria-labelledby="media-library-editor"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">EDITOR UPLOAD</span>
            <h2 id="media-library-editor">Convert selected media as you edit.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Open a post or product and enter its remote image in a FIFU image field. For
              a WooCommerce product, add any remote gallery images in its FIFU gallery
              fields.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select <strong>Upload to media library</strong>. For a product variation,
              select its upload checkbox before saving the variation. See{' '}
              <Link to="/features/remote-variation-images/">Remote Variation Images</Link>{' '}
              for the variation editor workflow. In quick edit, use the upload action in
              the FIFU editor; the{' '}
              <Link to="/features/quick-editor/">Quick Editor guide</Link> covers that
              interface.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Once uploaded, the local image replaces the remote featured image. Product gallery uploads likewise replace the remote images with local copies.
            </p>
          </li>
        </ol>
        <p>
          The upload uses the image’s alternative text when available; otherwise, it uses
          the post title. Repeated uses of the same remote URL can reuse an existing
          attachment instead of downloading another copy.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="media-library-automatic"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AUTOMATIC SCAN</span>
            <h2 id="media-library-automatic">
              Enable it only after checking your scope.
            </h2>
          </div>
        </div>
        <p>
              It respects the allowed-domain list. Use a narrower list when you want to convert images from specific hosts only.
            </p>
        <p>
          Back up your site before enabling the job. A conversion changes the image from a
          remote URL to a local attachment and cannot be automatically reverted. The job
          works through matching items over time; it is separate from the editor button,
          which converts the item you choose.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="media-library-help"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF AN UPLOAD FAILS</span>
            <h2 id="media-library-help">Check access to the image URL.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>No upload button</dt>
            <dd>
              Enable <strong>show save button on post editor</strong> on the Main tab. The
              control appears only where FIFU has an image to upload.
            </dd>
          </div>
          <div>
            <dt>Image is skipped</dt>
            <dd>
              Check that its host matches the domain list, including subdomains. An empty
              list allows any domain. URLs hosted on <code>.fifu.app</code> are excluded.
            </dd>
          </div>
          <div>
            <dt>Download fails</dt>
            <dd>
              If the download still fails, try another image address or a different proxy.
            </dd>
          </div>
        </dl>
      </section>

      <section className="feature-detail-cta">
        <div>
          <h2>Explore more FIFU features.</h2>
          <p>Return to the feature list to continue exploring.</p>
        </div>
        <div className="feature-detail-actions">
          <Link className="button" to="/features/">
            Browse features <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Page>
  );
}
