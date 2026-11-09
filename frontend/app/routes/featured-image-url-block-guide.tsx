import {
  Accessibility,
  AlertTriangle,
  ArrowUpRight,
  Image,
  MousePointerClick,
} from 'lucide-react';
import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';

export function FeaturedImageUrlBlockGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Image (URL) Block"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Add a remote image to a post from the block editor and save it as the post’s
        featured image without uploading it to your media library.
      </p>

      <section
        className="feature-highlight"
        aria-labelledby="featured-image-url-block-intro"
      >
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> EDIT A POST
          </span>
          <h2 id="featured-image-url-block-intro">
            Use an image address as the featured image.
          </h2>
          <p>
            The block keeps the remote image choice beside your post content. You can set
            or change its URL while editing, preview it there, and save the post to apply
            it as the featured image.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/featured-image-url-block-guide-1.png"
            alt="Select the Featured Image (URL) block, enter an image URL and alternative text, then preview the remote image."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-image-url-block-purpose"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="featured-image-url-block-purpose">
              Keep a remote image with the post you are editing.
            </h2>
          </div>
        </div>
        <p>
          Use this block when an image already has a web address and you want to assign it
          as a post’s featured image without first adding a local media-library copy.
          Editing the URL and alternative text in the post gives you an in-context preview
          and keeps those values synchronized with FIFU’s featured-image data. If you
          already set the featured image elsewhere, or prefer a local upload, this block
          is optional.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-image-url-block-steps"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ADD · PREVIEW · SAVE</span>
            <h2 id="featured-image-url-block-steps">Set the image in a post.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Open a post in the WordPress block editor. In the block inserter, search for{' '}
              <strong>Featured Image (URL)</strong> or <code>fifu</code>; choose it from
              the Media category.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Open the block’s <strong>Settings</strong> panel and enter the remote
              address in <strong>Image URL</strong>. Use an HTTP or HTTPS address with a
              host; the host must contain a dot, unless it is <code>localhost</code>.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              When the URL is set, enter useful <strong>Alternative text</strong> for the
              image. The block displays a preview in the post content. If the preview does
              not load, check the address and confirm the image is reachable from that
              URL.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Save or update the post. FIFU synchronizes the block’s URL and alternative
              text with the post’s featured-image data. The block itself does not render
              content on the front end.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-image-url-block-controls"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Accessibility size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BLOCK SETTINGS</span>
            <h2 id="featured-image-url-block-controls">What each control changes</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Image URL</dt>
            <dd>
              The remote image address. The block shows its preview when a URL is present.
              A nonempty URL must use HTTP or HTTPS and have a dotted host or the host{' '}
              <code>localhost</code>.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>
              Text associated with the image for assistive technology. If you leave it
              empty, the post title is used as the alternative text.
            </dd>
          </div>
          <div>
            <dt>Remove remote image</dt>
            <dd>
              Clears both the URL and alternative text from the block. Save the post to
              apply the cleared image data.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="featured-image-url-block-limits"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <AlertTriangle size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ACCESS AND TROUBLESHOOTING</span>
            <h2 id="featured-image-url-block-limits">
              If the block or preview is missing
            </h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <Accessibility size={14} aria-hidden="true" />
            </span>
            <p>
              <strong>Access:</strong> You need permission to edit posts. The block is not
              registered on the Customizer or Widgets screen.
            </p>
          </li>
          <li>
            <span>
              <AlertTriangle size={14} aria-hidden="true" />
            </span>
            <p>
              <strong>URL rejected on save:</strong> Use an HTTP or HTTPS URL with a
              dotted host, such as <code>images.example.com</code>, or use{' '}
              <code>localhost</code> for a local host. Other schemes and hostless or
              single-label host names are not accepted.
            </p>
          </li>
          <li>
            <span>
              <Image size={14} aria-hidden="true" />
            </span>
            <p>
              <strong>Preview unavailable:</strong> The editor switches to an
              image-not-found placeholder when the remote image fails to load. Correct the
              address or use an image URL that the editor can reach, then save the post
              again.
            </p>
          </li>
        </ul>
      </section>

      <p>
        Related guides:{' '}
        <Link to="/features/remote-featured-image/">Remote Featured Image</Link>,{' '}
        <Link to="/features/quick-editor/">Quick Editor</Link>, and{' '}
        <Link to="/features/fifu-fields/">FIFU Fields</Link>.
      </p>

      <section className="feature-detail-cta activation-feature-cta">
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
