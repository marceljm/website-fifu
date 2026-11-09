import {
  Accessibility,
  AlertTriangle,
  Image,
  MousePointerClick,
} from 'lucide-react';
import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import {
  FeatureGuideChecklist,
  FeatureGuideCta,
  FeatureGuideHeading,
  FeatureGuideHighlight,
  FeatureGuideOptions,
  FeatureGuideSteps,
  FeatureRelatedGuides,
} from '../components/features/FeatureGuideSections';

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

      <FeatureGuideHighlight id="featured-image-url-block-intro">
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
      </FeatureGuideHighlight>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-image-url-block-purpose"
      >
        <FeatureGuideHeading id="featured-image-url-block-purpose" icon={<>
<Image size={19} aria-hidden="true" />
</>} kicker={<>
WHEN TO USE IT
</>}>
Keep a remote image with the post you are editing.
</FeatureGuideHeading>
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
        <FeatureGuideHeading id="featured-image-url-block-steps" icon={<>
<MousePointerClick size={19} aria-hidden="true" />
</>} kicker={<>
ADD · PREVIEW · SAVE
</>}>
Set the image in a post.
</FeatureGuideHeading>
        <FeatureGuideSteps>
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
              Open the block’s <strong>Settings</strong> panel and enter a complete image address in <strong>Image URL</strong>.
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
              Save or update the post. FIFU uses this image as the post’s featured image. The block itself does not add an extra image to the published content.
            </p>
          </li>
        </FeatureGuideSteps>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-image-url-block-controls"
      >
        <FeatureGuideHeading id="featured-image-url-block-controls" icon={<>
<Accessibility size={19} aria-hidden="true" />
</>} kicker={<>
BLOCK SETTINGS
</>}>
What each control changes
</FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Image URL</dt>
            <dd>
              Enter a complete image URL. The block displays a preview when the address is available.
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
        </FeatureGuideOptions>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="featured-image-url-block-limits"
      >
        <FeatureGuideHeading id="featured-image-url-block-limits" icon={<>
<AlertTriangle size={18} aria-hidden="true" />
</>} kicker={<>
ACCESS AND TROUBLESHOOTING
</>} tone="help">
If the block or preview is missing
</FeatureGuideHeading>
        <FeatureGuideChecklist>
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
              <strong>URL rejected on save:</strong> Check that you entered a complete image address and that it opens directly in your browser.
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
        </FeatureGuideChecklist>
      </section>

      <FeatureRelatedGuides>
        <Link to="/features/remote-featured-image/">Remote Featured Image</Link>,{' '}
        <Link to="/features/quick-editor/">Quick Editor</Link>, and{' '}
        <Link to="/features/fifu-fields/">FIFU Fields</Link>.
      </FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}
