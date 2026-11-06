import { ArrowUpRight, CircleAlert, Images, Settings2 } from 'lucide-react';
import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';

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
          A remote FIFU image is displayed from its source URL and is not a WordPress
          attachment. Saving it creates an attachment in your site’s Media Library and
          switches the post or product to that local media. This is useful when a workflow
          needs attachment IDs or locally hosted files; if you want to keep images remote
          and avoid local copies, leave this feature unused. Local uploads also use your
          site’s storage and image-processing resources.
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
              Enable{' '}
              <strong>
                use proxies to intermediate the traffic between your site and the image
                hosts
              </strong>{' '}
              if a host blocks downloads from your server. Public proxies may be
              rate-limited, blocked, or slower; FIFU rotates through alternatives and
              caches working proxies. For a private proxy, enter one or more IP and port
              values, optionally with credentials, such as <code>192.168.0.1:80</code> or{' '}
              <code>user:pass@192.168.0.1:8080</code>. A configured private proxy takes
              precedence over the public list; leave the proxy toggle on to use it for
              downloads.
            </dd>
          </div>
        </dl>
      </section>

      <section className="activation-feature-section" aria-labelledby="media-library-cli">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ALTERNATIVE SETUP</span>
            <h2 id="media-library-cli">Set upload options with WP-CLI.</h2>
          </div>
        </div>
        <p>
          From your WordPress installation, the <code>wp fifu upload</code> command
          accepts
          <code>--domain</code>, <code>--show-button=on|off</code>,{' '}
          <code>--job=on|off</code>,<code>--proxy=on|off</code>, and{' '}
          <code>--private-proxy</code>. For example, limit uploads to two hosts with:
        </p>
        <pre>
          <code>{'wp fifu upload --domain="images.example.com,photos.example.org"'}</code>
        </pre>
        <p>
          The domain argument replaces the current filter. The toggle arguments change the
          corresponding setting; enabling <code>--job=on</code> starts the automatic
          conversion workflow, so back up first. Read the{' '}
          <Link to="/features/wp-cli/">WP-CLI guide</Link> for how to run FIFU commands.
        </p>
      </section>

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
              FIFU downloads the image and creates a WordPress attachment. A successful
              featured-image upload sets the attachment as featured and clears the remote
              image URL and alt value. Product gallery uploads replace the remote gallery
              with local attachment IDs.
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
          The periodic job looks for remote featured images on posts and taxonomy terms,
          plus remote product gallery images. It uses the same allowed-domain list and
          skips items already processed. Keep the list narrow if only selected image hosts
          should be converted.
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
              Confirm the remote URL is reachable from your web server and points to an
              image. Some hosts block repeated requests; enable Proxy or configure a
              working private proxy. Proxy limits and blocked proxy IPs can make the
              process slower or still fail.
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
