import {
  Bug,
  Check,
  ClipboardCopy,
  CircleAlert,
  Code2,
  CloudOff,
  CloudUpload,
  Database,
  ExternalLink,
  EyeOff,
  FileImage,
  Globe,
  Image,
  ImagePlus,
  KeyRound,
  ListFilter,
  Link2,
  Tags,
  MailPlus,
  MessageSquare,
  Music2,
  MousePointerClick,
  ShoppingCart,
  ShoppingBag,
  Images,
  Search,
  SlidersHorizontal,
  Play,
  Puzzle,
  RotateCcw,
  RefreshCw,
  Rss,
  Share2,
  ImageOff,
  Terminal,
  Settings2,
  ShieldCheck,
  Video,
  Wrench,
  VolumeX,
  UsersRound,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { FeatureCliSection } from '../components/features/FeatureCliSection';
import {
  FeatureGuideChecklist,
  FeatureGuideCta,
  FeatureGuideHeading,
  FeatureGuideHelpList,
  FeatureGuideHighlight,
  FeatureGuideOptions,
  FeatureGuideSection,
  FeatureGuideSteps,
  FeatureRelatedGuides,
} from '../components/features/FeatureGuideSections';
import { featureCards, fifuFeatureSlug } from '../data/fifu-features';
import SaveInMediaLibraryGuide from './save-in-media-library-guide';
import { FeaturedImageUrlBlockGuide } from './featured-image-url-block-guide';
export function meta({ params }: { params: Record<string, string | undefined> }) {
  if (params.slug === 'activation')
    return [
      { title: 'Activation | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Submit your FIFU license key for validation, review the activation result, and check domain coverage and renewal information.',
      },
    ];
  if (params.slug === 'quick-editor')
    return [
      { title: 'Quick Editor | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Edit and save featured media from WordPress content lists, including posts, pages, products, product categories, and supported custom post types.',
      },
    ];
  if (params.slug === 'background-video')
    return [
      { title: 'Background Video | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable silent, control-free background playback for Vimeo featured videos and optionally restrict it to matching single-content pages.',
      },
    ];
  if (params.slug === 'auto-set-featured-media-from-custom-field')
    return [
      { title: 'Auto set featured media from custom field | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Configure custom field keys or URL templates so scheduled checks assign featured images and videos to content without featured media.',
      },
    ];
  if (params.slug === 'automatic-updates')
    return [
      { title: 'Automatic Updates | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Register a FIFU Premium license, choose WordPress automatic installation or manual review, and check release availability from Installed Plugins.',
      },
    ];
  if (params.slug === 'auto-set-featured-image-using-post-title-and-search-engine')
    return [
      {
        title:
          'Auto set featured image using post title and search engine | FIFU Feature Guide',
      },
      {
        name: 'description',
        content:
          'Enable title-based image search for posts, review matching images in the editor, and tune search filters for your content.',
      },
    ];
  if (params.slug === 'auto-set-product-images-from-asin')
    return [
      { title: 'Auto set product images from ASIN | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set Amazon Product Advertising API credentials, add an ASIN to a product or map an existing custom field, and let scheduled checks assign product images.',
      },
    ];
  if (params.slug === 'auto-set-featured-media-using-web-page-address')
    return [
      { title: 'Auto set featured media using web page address | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Save a source page URL with a post and let the scheduled finder assign its featured image or video, with optional custom-field and Amazon gallery sources.',
      },
    ];
  if (params.slug === 'auto-share-on-social-media')
    return [
      { title: 'Auto-share on social media | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Connect Facebook, Instagram, or X and automatically share published WordPress posts that have shareable media.',
      },
    ];
  if (params.slug === 'disable-right-click')
    return [
      { title: 'Disable right-click | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Turn on Disable right-click to suppress the browser context menu when visitors right-click images on your site.',
      },
    ];
  if (params.slug === 'replace-not-found-image')
    return [
      { title: 'Replace Not Found Image | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set a backup image URL for featured images and WooCommerce gallery images when their current image fails to load.',
      },
    ];
  if (params.slug === 'broken-link-checker')
    return [
      { title: 'Broken Link Checker | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Monitor remote featured-image URLs during page rendering, with daily retries and a Broken Links results table.',
      },
    ];
  if (params.slug === 'default-featured-image')
    return [
      { title: 'Default Featured Image | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set a fallback image URL, choose the post types it applies to, and show it where matching content has no featured image.',
      },
    ];
  if (params.slug === 'modify-post-content')
    return [
      { title: 'Modify Post Content | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add a featured image to displayed post content or remove matching media while keeping saved post text intact, with an optional post type scope.',
      },
    ];
  if (params.slug === 'hide-featured-media')
    return [
      { title: 'Hide Featured Media | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Hide featured images, videos, and sliders on selected singular post types and formats while keeping them visible on archives and the homepage.',
      },
    ];
  if (params.slug === 'page-redirection')
    return [
      { title: 'Page Redirection | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set a forwarding URL on supported content so its featured image opens the destination in a new tab.',
      },
    ];
  if (params.slug === 'custom-popup')
    return [
      { title: 'Custom Popup | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add embed code to a post or page and open it in a popup when a visitor clicks that item’s featured image.',
      },
    ];
  if (params.slug === 'auto-set-featured-media-from-post-content')
    return [
      { title: 'Auto set featured media from post content | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Choose the first eligible image or video in saved post content as featured media, filter candidates, and control which post types and existing media are affected.',
      },
    ];
  if (params.slug === 'auto-set-screenshot-as-featured-image')
    return [
      { title: 'Auto set screenshot as featured image | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Save a web page address in a custom field, enable screenshot assignment, and choose an optional screenshot size for posts without featured media.',
      },
    ];
  if (params.slug === 'image-metadata')
    return [
      { title: 'Image Metadata | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Fill missing WordPress attachment records for remote FIFU media and see when to run the generation pass.',
      },
    ];
  if (params.slug === 'schedule-metadata-generation')
    return [
      { title: 'Schedule Metadata Generation | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Schedule recurring checks for remote image URLs that lack the metadata WordPress needs to display them.',
      },
    ];
  if (params.slug === 'clear-metadata')
    return [
      { title: 'Clear Metadata | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Clear generated FIFU image metadata while keeping your saved remote image URLs, then regenerate metadata later if needed.',
      },
    ];
  if (params.slug === 'delete-all-urls')
    return [
      { title: 'Delete All URLs | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable the required constant, then remove FIFU remote image URLs and related media metadata from your WordPress content.',
      },
    ];
  if (params.slug === 'optimized-images')
    return [
      { title: 'Optimized Images | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Configure CDN resizing for remote FIFU images and optional responsive, lazy-loaded delivery for images in post content.',
      },
    ];
  if (params.slug === 'square-image-options')
    return [
      { title: 'Square Image Options | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Choose square cropping or added space separately for desktop and mobile images served through FIFU CDN or FIFU Cloud.',
      },
    ];
  if (params.slug === 'image-seo')
    return [
      { title: 'Image SEO | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set alternative text for featured images and understand how FIFU uses it in image markup, structured data, and supported SEO integrations.',
      },
    ];
  if (params.slug === 'featured-images-in-rss-feeds')
    return [
      { title: 'Featured Images in RSS Feeds | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Include a post’s resolved featured image in RSS 2 feeds as a media:content image for feed readers and connected services.',
      },
    ];
  if (params.slug === 'fifu-shortcode')
    return [
      { title: 'FIFU Shortcode | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add FIFU featured images, sliders, product galleries, or taxonomy images to content with the matching shortcode.',
      },
    ];
  if (params.slug === 'bbpress-and-buddyboss-platform')
    return [
      { title: 'bbPress and BuddyBoss Platform | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add remote images to bbPress topics and replies, display FIFU images beside forum and topic content, and convert direct image links in BuddyBoss activity posts and comments.',
      },
    ];
  if (params.slug === 'taxonomy-image')
    return [
      { title: 'Taxonomy Image | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add remote image URLs and optional alt text to taxonomy terms, then display those images in archives or post content.',
      },
    ];
  if (params.slug === 'play-button')
    return [
      { title: 'Play Button | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Show a play overlay on featured video thumbnails and choose inline playback or a lightbox, with optional grid hiding.',
      },
    ];
  if (params.slug === 'video-thumbnail')
    return [
      { title: 'Video Thumbnail | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Show the featured video thumbnail in selected page contexts, then let visitors load the video when they select it.',
      },
    ];
  if (params.slug === 'video-controls')
    return [
      { title: 'Video Controls | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Choose whether featured video players show playback controls, then check the result on a page that displays your featured video.',
      },
    ];
  if (params.slug === 'minimum-width')
    return [
      { title: 'Minimum Width | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set the minimum rendered width required before a featured video replaces its thumbnail with a player.',
      },
    ];
  if (params.slug === 'autoplay')
    return [
      { title: 'Autoplay | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Choose where supported featured videos start automatically, then verify muted playback on your site.',
      },
    ];
  if (params.slug === 'autoplay-on-mouseover')
    return [
      { title: 'Autoplay on Mouseover | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Play supported featured videos when you move the pointer over them, and pause when it leaves.',
      },
    ];
  if (params.slug === 'playback-loop')
    return [
      { title: 'Playback Loop | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable continuous playback for featured YouTube, Vimeo, local, and remote video files from FIFU’s Video settings.',
      },
    ];
  if (params.slug === 'mute')
    return [
      { title: 'Mute | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Choose whether featured videos start without audio on desktop, mobile, or both, then review the playback behavior on your site.',
      },
    ];
  if (params.slug === 'youtube-options')
    return [
      { title: 'YouTube options | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable privacy enhanced mode for supported FIFU YouTube embeds and check when the setting applies.',
      },
    ];
  if (params.slug === 'vimeo-options')
    return [
      { title: 'Vimeo options | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Configure Vimeo background playback or use Vimeo MP4 files with an access token and preferred video resolution.',
      },
    ];
  if (params.slug === 'privacy-enhanced-mode')
    return [
      { title: 'Privacy Enhanced Mode | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable Privacy Enhanced Mode to use YouTube’s youtube-nocookie.com domain for supported FIFU video embeds.',
      },
    ];
  if (params.slug === 'watch-later')
    return [
      { title: 'Watch Later | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add Watch later and Queue controls to featured videos, then build a browser-saved queue and open it as a gallery.',
      },
    ];
  if (params.slug === 'lightbox-and-zoom')
    return [
      { title: 'Lightbox and Zoom | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable a lightbox gallery or image zoom for FIFU media on WooCommerce product pages.',
      },
    ];
  if (params.slug === 'auto-set-category-images')
    return [
      { title: 'Auto set category images | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Assign product category images from product FIFU images, or set a category image URL manually in the product category editor.',
      },
    ];
  if (params.slug === 'add-image-to-order-email')
    return [
      { title: 'Add image to order email | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add 100 × 100 product images to WooCommerce order emails with the Add image to order email setting.',
      },
    ];
  if (params.slug === 'woocommerce-import')
    return [
      { title: 'WooCommerce import | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Import FIFU image, video, slider, and iframe media metadata with WooCommerce products.',
      },
    ];
  if (params.slug === 'wp-all-import-add-on')
    return [
      { title: 'WP All Import add-on | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Map FIFU image, video, gallery, slider, finder, ASIN, and redirect fields in WP All Import, then import them with your content.',
      },
    ];
  if (params.slug === 'quick-buy')
    return [
      { title: 'Quick Buy | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable Quick Buy for WooCommerce product archives, customize its button and disclaimer, and open a product lightbox from featured media.',
      },
    ];
  if (params.slug === 'fifu-api')
    return [
      { title: 'FIFU API | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Call FIFU PHP developer functions to set featured images, videos, media lists, sliders, and product category media.',
      },
    ];
  if (params.slug === 'wp-woocommerce-rest-api')
    return [
      { title: 'WP / WooCommerce REST API | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Create or update WordPress posts and WooCommerce products through REST API requests with FIFU image, video, gallery, and slider metadata.',
      },
    ];
  if (params.slug === 'wp-cli')
    return [
      { title: 'WP-CLI | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Run FIFU commands from your WordPress server to change settings, run metadata tasks, or create posts with remote featured images.',
      },
    ];
  if (params.slug === 'featured-media-filter')
    return [
      { title: 'Featured Media Filter | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Filter WordPress content lists by featured media status, including images, video, sliders, and audio.',
      },
    ];
  if (params.slug === 'featured-image-url-block')
    return [
      { title: 'Featured Image (URL) Block | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add the Featured Image (URL) Block to a post, set its image URL and alternative text, and save the post to sync its FIFU featured image.',
      },
    ];
  if (params.slug === 'widgets')
    return [
      { title: 'Widgets | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add FIFU image, grid, and product gallery widgets to WordPress widget areas, or place image and video widgets in Elementor layouts.',
      },
    ];
  if (params.slug === 'fifu-fields')
    return [
      { title: 'FIFU Fields | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add FIFU image fields to WordPress and WooCommerce editors, Gravity Forms, and vendor product forms in Dokan and MultiVendorX.',
      },
    ];
  if (params.slug === 'unsplash-image-search')
    return [
      { title: 'Unsplash Image Search | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Search Unsplash from the featured image field, choose a result, and save its image URL with your post, page, or product.',
      },
    ];
  if (params.slug === 'hotlink-protection')
    return [
      { title: 'Hotlink protection | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable hotlink protection for FIFU Cloud images from the Account tab and understand its effect on embeds from other sites.',
      },
    ];
  if (params.slug === 'delete-from-cloud')
    return [
      { title: 'Delete from Cloud | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Find cloud images by URL or post ID, remove selected images, or enable automatic deletion when they are no longer used on your site.',
      },
    ];
  if (params.slug === 'upload-to-cloud')
    return [
      { title: 'Upload to Cloud | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Select FIFU image URLs to upload to FIFU Cloud, or enable automatic uploads for remote images already in use on your site.',
      },
    ];
  if (params.slug === 'db-migration')
    return [
      { title: 'DB Migration | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Move older FIFU data to its current format, review progress, and retry failed items.',
      },
    ];
  if (params.slug === 'reset-settings')
    return [
      { title: 'Reset Settings | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Reset FIFU’s configurable settings while keeping your license, default image, and content image assignments.',
      },
    ];
  if (params.slug === 'debug-mode')
    return [
      { title: 'Debug Mode | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable Debug Mode to collect item diagnostics, copy your site status, and download available FIFU logs while investigating an issue.',
      },
    ];
  if (params.slug === 'remote-featured-image')
    return [
      { title: 'Remote Featured Image | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set a post, page, or product featured image from an image URL, add alternative text, and save it with your content.',
      },
    ];
  if (params.slug === 'save-in-the-media-library')
    return [
      { title: 'Save in the Media Library | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Learn how to show FIFU’s editor save button and convert a remote image into a WordPress Media Library attachment.',
      },
    ];
  if (params.slug === 'featured-video-audio')
    return [
      { title: 'Featured Video / Audio | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Turn on Featured Video / Audio in settings, add a video or audio URL in the editor, preview it, and save your content.',
      },
    ];
  if (params.slug === 'featured-slider')
    return [
      { title: 'Featured Slider | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Set up a featured slider with ordered image or video URLs, optional image alt text, and display controls for your site.',
      },
    ];
  if (params.slug === 'remote-product-gallery-images')
    return [
      { title: 'Remote Product Gallery Images | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Add and arrange remote image URLs in a WooCommerce product gallery, with image previews and alternative text, without uploading local copies.',
      },
    ];
  if (params.slug === 'remote-variation-images')
    return [
      { title: 'Remote Variation Images | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Learn how to set a remote main image and gallery for each WooCommerce product variation with FIFU.',
      },
    ];
  if (params.slug === 'fifu-product-gallery')
    return [
      { title: 'FIFU Product Gallery | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Enable the FIFU WooCommerce product gallery, arrange remote image and video items, include variation media, and configure its display.',
      },
    ];
  if (params.slug === 'link-local-image-urls-to-fifu-plugin')
    return [
      { title: 'Link local image URLs to FIFU plugin | FIFU Feature Guide' },
      {
        name: 'description',
        content:
          'Select images already used from your Media Library, link their URLs to FIFU fields, then upload them to FIFU Cloud.',
      },
    ];
  const item = featureCards.find((x) => fifuFeatureSlug(x.title) === params.slug);
  return [
    {
      title: `${item?.title || 'Feature'} | FIFU Feature Guide`,
    },
    {
      name: 'description',
      content: item?.description || 'Learn how to use this FIFU feature in WordPress.',
    },
  ];
}
export default function Detail() {
  const { slug } = useParams();
  if (slug === 'activation') return <ActivationGuide />;
  if (slug === 'automatic-updates') return <AutomaticUpdatesGuide />;
  if (slug === 'auto-set-featured-image-using-post-title-and-search-engine')
    return <AutoSetFeaturedImageByTitleGuide />;
  if (slug === 'auto-set-product-images-from-asin')
    return <AutoSetProductImagesFromAsinGuide />;
  if (slug === 'auto-set-featured-media-from-custom-field')
    return <AutoSetCustomFieldGuide />;
  if (slug === 'auto-set-featured-media-using-web-page-address')
    return <AutoSetFeaturedMediaByPageGuide />;
  if (slug === 'auto-share-on-social-media') return <AutoShareSocialGuide />;
  if (slug === 'disable-right-click') return <DisableRightClickGuide />;
  if (slug === 'replace-not-found-image') return <ReplaceNotFoundImageGuide />;
  if (slug === 'broken-link-checker') return <BrokenLinkCheckerGuide />;
  if (slug === 'default-featured-image') return <DefaultFeaturedImageGuide />;
  if (slug === 'modify-post-content') return <ModifyPostContentGuide />;
  if (slug === 'hide-featured-media') return <HideFeaturedMediaGuide />;
  if (slug === 'page-redirection') return <PageRedirectionGuide />;
  if (slug === 'custom-popup') return <CustomPopupGuide />;
  if (slug === 'auto-set-featured-media-from-post-content')
    return <AutoSetFeaturedMediaGuide />;
  if (slug === 'auto-set-screenshot-as-featured-image') return <AutoSetScreenshotGuide />;
  if (slug === 'image-metadata') return <ImageMetadataGuide />;
  if (slug === 'schedule-metadata-generation') return <ScheduleMetadataGenerationGuide />;
  if (slug === 'clear-metadata') return <ClearMetadataGuide />;
  if (slug === 'delete-all-urls') return <DeleteAllUrlsGuide />;
  if (slug === 'optimized-images') return <OptimizedImagesGuide />;
  if (slug === 'square-image-options') return <SquareImageOptionsGuide />;
  if (slug === 'image-seo') return <ImageSeoGuide />;
  if (slug === 'featured-images-in-rss-feeds') return <FeaturedImagesRssGuide />;
  if (slug === 'fifu-shortcode') return <FifuShortcodeGuide />;
  if (slug === 'bbpress-and-buddyboss-platform') return <BbpressBuddybossGuide />;
  if (slug === 'taxonomy-image') return <TaxonomyImageGuide />;
  if (slug === 'video-thumbnail') return <VideoThumbnailGuide />;
  if (slug === 'play-button') return <PlayButtonGuide />;
  if (slug === 'video-controls') return <VideoControlsGuide />;
  if (slug === 'minimum-width') return <MinimumWidthGuide />;
  if (slug === 'autoplay') return <AutoplayGuide />;
  if (slug === 'autoplay-on-mouseover') return <AutoplayOnMouseoverGuide />;
  if (slug === 'playback-loop') return <PlaybackLoopGuide />;
  if (slug === 'mute') return <MuteGuide />;
  if (slug === 'background-video') return <BackgroundVideoGuide />;
  if (slug === 'youtube-options') return <YoutubeOptionsGuide />;
  if (slug === 'vimeo-options') return <VimeoOptionsGuide />;
  if (slug === 'privacy-enhanced-mode') return <PrivacyEnhancedModeGuide />;
  if (slug === 'watch-later') return <WatchLaterGuide />;
  if (slug === 'lightbox-and-zoom') return <LightboxAndZoomGuide />;
  if (slug === 'add-image-to-order-email') return <OrderEmailImagesGuide />;
  if (slug === 'auto-set-category-images') return <AutoSetCategoryImagesGuide />;
  if (slug === 'woocommerce-import') return <WooCommerceImportGuide />;
  if (slug === 'wp-all-import-add-on') return <WpAllImportAddonGuide />;
  if (slug === 'quick-buy') return <QuickBuyGuide />;
  if (slug === 'fifu-api') return <FifuApiGuide />;
  if (slug === 'wp-woocommerce-rest-api') return <WpWooCommerceRestApiGuide />;
  if (slug === 'wp-cli') return <WpCliGuide />;
  if (slug === 'quick-editor') return <QuickEditorGuide />;
  if (slug === 'featured-media-filter') return <FeaturedMediaFilterGuide />;
  if (slug === 'featured-image-url-block') return <FeaturedImageUrlBlockGuide />;
  if (slug === 'widgets') return <WidgetsGuide />;
  if (slug === 'fifu-fields') return <FifuFieldsGuide />;
  if (slug === 'unsplash-image-search') return <UnsplashImageSearchGuide />;
  if (slug === 'hotlink-protection') return <HotlinkProtectionGuide />;
  if (slug === 'db-migration') return <DbMigrationGuide />;
  if (slug === 'reset-settings') return <ResetSettingsGuide />;
  if (slug === 'debug-mode') return <DebugModeGuide />;
  if (slug === 'remote-featured-image') return <RemoteFeaturedImageGuide />;
  if (slug === 'save-in-the-media-library') return <SaveInMediaLibraryGuide />;
  if (slug === 'featured-video-audio') return <FeaturedVideoAudioGuide />;
  if (slug === 'featured-slider') return <FeaturedSliderGuide />;
  if (slug === 'remote-product-gallery-images')
    return <RemoteProductGalleryImagesGuide />;
  if (slug === 'remote-variation-images') return <RemoteVariationImagesGuide />;
  if (slug === 'fifu-product-gallery') return <FifuProductGalleryGuide />;
  if (slug === 'link-local-image-urls-to-fifu-plugin') return <LinkLocalImagesGuide />;
  if (slug === 'delete-from-cloud') return <DeleteFromCloudGuide />;
  if (slug === 'upload-to-cloud') return <UploadToCloudGuide />;
  return (
    <Page eyebrow="FEATURE NOT FOUND" title="That feature is not here.">
      <p>Choose a feature from the catalog to learn more.</p>
      <Link className="button" to="/features/">
        Browse features
      </Link>
    </Page>
  );
}

function CustomPopupGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Custom Popup"
      className="feature-guide-page"
    >
      <p className="lead">
        Add embed code to a supported post, then open it when visitors click that post’s
        FIFU featured image.
      </p>

      <FeatureGuideHighlight id="custom-popup-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MessageSquare size={15} aria-hidden="true" /> CUSTOM EMBED
          </span>
          <h2 id="custom-popup-intro">Open embedded media from the image.</h2>
          <p>
            This is useful when a featured image should reveal a video or other embed
            without taking visitors away from the page they are viewing. The click opens
            the saved embed in an overlay instead of following that image’s usual link.
            Leave the feature off when the normal image click is all you need.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/custom-popup-guide-1.png"
            alt="Enable Custom Popup, save embed code in a post, and open its embedded media by clicking the featured image."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="custom-popup-setup-title">
        <FeatureGuideHeading
          id="custom-popup-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETUP
          </>}
          >
          Turn it on and add each embed.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Image</strong> and enable{' '}
              <strong>Custom Popup</strong>. This site-wide switch also adds a{' '}
              <strong>Custom popup</strong> side panel to supported post editors.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit a supported post or page and paste the provider’s embed markup into the{' '}
              <strong>Embed code</strong> field in its <strong>Custom popup</strong>{' '}
              panel. The field accepts embed code such as a TikTok embed.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save or update the post. Its embed is saved with that item; visitors can
              then click its FIFU featured image to open the embed in a popup.
            </p>
          </li>
        </FeatureGuideSteps>
        
      </FeatureGuideSection>

      <FeatureCliSection
        id="custom-popup-cli"
        commands={[
          {
            label: 'Enable Custom Popup',
            command: 'wp fifu image --popup=on',
          },
          {
            label: 'Disable Custom Popup',
            command: 'wp fifu image --popup=off',
          },
        ]}
      />

      <FeatureGuideSection id="custom-popup-behavior-title">
        <FeatureGuideHeading
          id="custom-popup-behavior-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT CHANGES
          </>}
          >
          Each post opens its own saved embed.
        </FeatureGuideHeading>
        <p>
          The saved embed belongs to one post or page. When the feature is enabled,
          clicking that item’s FIFU featured image (including a link containing the image)
          opens its embed in a lightbox and cancels that click’s usual navigation.
        </p>
        <p>
          The popup is sized to the visitor’s window: 85% of its width and height on wider
          screens, or 95% on screens 768 px wide or smaller. Its maximum height is 95% of
          the window.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="custom-popup-controls-title">
        <FeatureGuideHeading
          id="custom-popup-controls-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONTROLS AND AVAILABILITY
          </>}
          >
          Where the controls apply
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Custom Popup</dt>
            <dd>
              One site-wide on/off setting. Turning it on loads popup handling and exposes
              the per-item editor panel; there are no additional popup appearance options.
            </dd>
          </div>
          <div>
            <dt>Custom popup panel</dt>
            <dd>
              The panel contains one <strong>Embed code</strong> text field. Its saved
              value is attached to that post or page, so you can use different embeds on
              different items.
            </dd>
          </div>
          <div>
            <dt>Supported editors</dt>
            <dd>
              The panel is available for supported posts and pages,
              not WooCommerce product editors.
            </dd>
          </div>
          <div>
            <dt>Popup trigger</dt>
            <dd>
              Clicking the content's FIFU featured image opens
              its saved popup. Other images on the page do
              not automatically trigger it.
            </dd>
          </div>
          
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="custom-popup-check-title">
        <FeatureGuideHeading
          id="custom-popup-check-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the popup does not open
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Editor field is missing</dt>
            <dd>
              Enable <strong>Custom Popup</strong> in{' '}
              <strong>FIFU → Settings → Image</strong> and
              edit a supported post or page.
            </dd>
          </div>
          <div>
            <dt>Click has no effect</dt>
            <dd>
              Save your embed code on the same post as the
              featured image and test that image on the published page.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link> and <Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function FifuShortcodeGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="FIFU Shortcode"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Add a shortcode to post or page content to render FIFU featured media at that
        exact point.
      </p>
      <FeatureGuideHighlight id="fifu-shortcode-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Terminal size={15} aria-hidden="true" /> PLACE MEDIA IN CONTENT
          </span>
          <h2 id="fifu-shortcode-intro">
            Put FIFU media exactly where your layout needs it.
          </h2>
          <p>
            Shortcodes turn media already associated with a post or its terms into page
            content. Use them when your theme or editor does not place that media where
            you need it; the output stays tied to the selected post instead of requiring
            you to copy a media URL into the content.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/fifu-shortcode-guide-1.png"
            alt="A FIFU shortcode in content renders the post’s featured image in a page preview"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="fifu-shortcode-use">
        <FeatureGuideHeading
          id="fifu-shortcode-use"
          icon={<>
            <Terminal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ADD · RENDER
          </>}
          >
          Insert a shortcode
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>
                FIFU → Settings → Developer → FIFU Shortcode → Display media
              </strong>
              . Choose an entry from the reference table and copy its shortcode.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Use <code>post_id</code> to show media from a specific post. Otherwise, the shortcode uses the current post.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save and view the content. FIFU returns the corresponding image markup,
              slider, or product gallery at the shortcode location.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-shortcode-outputs">
        <FeatureGuideHeading
          id="fifu-shortcode-outputs"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OUTPUTS · PARAMETERS
          </>}
          >
          Choose the output and parameters
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>
              <code>[fifu]</code>
            </dt>
            <dd>
              Outputs the post’s featured image as an <code>&lt;img&gt;</code>. Optional:{' '}
              <code>post_id</code>, <code>width</code>, <code>height</code>,{' '}
              <code>style</code>. Saved image alt text is included when present.
            </dd>
          </div>
          <div>
            <dt>
              <code>[fifu_slider]</code>
            </dt>
            <dd>
              Outputs the post’s featured slider. Optional: <code>post_id</code>,{' '}
              <code>width</code>, <code>height</code>. Slider assets are enqueued for the
              page.
            </dd>
          </div>
          <div>
            <dt>
              <code>[fifu_gallery]</code>
            </dt>
            <dd>
              Outputs the WooCommerce product gallery. Optional: <code>post_id</code>. Use
              it with a product that has FIFU gallery media; slider assets are enqueued.
              For gallery setup, read the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>
              .
            </dd>
          </div>
          <div>
            <dt>
              <code>[fifu_taxonomy]</code>
            </dt>
            <dd>
              Outputs images for the current post’s terms in a taxonomy. Required:{' '}
              <code>slug</code>. Optional: <code>width</code>, <code>height</code>,{' '}
              <code>style</code>. Example:{' '}
              <code>[fifu_taxonomy slug="category" width="150" height="100"]</code>.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-shortcode-limits" help>
        <FeatureGuideHeading
          id="fifu-shortcode-limits"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            REQUIREMENTS · TROUBLESHOOTING
          </>}
          tone="help"
          >
          When output is empty
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Featured image or slider:</strong> confirm the target post exists and
            has the relevant FIFU media. These outputs return nothing when the post cannot
            be resolved.
          </li>
          <li>
            <strong>Product gallery:</strong> target a WooCommerce product with gallery
            media. For gallery setup, read the{' '}
            <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>.
          </li>
          <li>
            <strong>Taxonomy images:</strong> enable{' '}
            <Link to="/features/taxonomy-image/">Taxonomy Image</Link> under{' '}
            <strong>FIFU → Settings → Developer</strong>, assign an image to a term, and
            use its taxonomy slug. This output only runs inside the WordPress loop. A
            missing slug or matching terms returns an explanatory message; terms without
            an image add no image markup.
          </li>
          <li>
            <strong>Dimensions:</strong> <code>width</code> and{' '}
            <code>height</code> are optional dimensions for
            the shortcode output.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>
      <FeatureGuideCta />
    </Page>
  );
}

function WatchLaterGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Watch Later" className="feature-guide-page">
      <p className="lead">
        Enable Watch Later for featured videos so visitors can save a personal queue in
        their browser and play it as a gallery.
      </p>
      <FeatureGuideHighlight id="watch-later-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIDEO QUEUE
          </span>
          <h2 id="watch-later-intro">Keep videos handy for later.</h2>
          <p>
            The clock saves a featured video to this browser; Queue opens saved videos
            together with a thumbnail strip for choosing and removing items.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/watch-later-guide-1.png"
            alt="A featured video saved with the Watch later control and opened in a queue gallery"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="watch-later-purpose-title">
        <FeatureGuideHeading
          id="watch-later-purpose-title"
          icon={<>
            <Play size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE IT
          </>}
          >
          Give visitors a simple way to collect videos.
        </FeatureGuideHeading>
        <p>
          A video normally appears where your featured media is rendered. Watch Later adds
          a browser-local queue, so visitors can mark several featured videos and return
          to them together without keeping a separate list. This helps when a page or
          catalog contains videos someone wants to watch in sequence. The queue belongs to
          the current browser, so it does not follow a visitor to another browser or
          device; skip it if visitors do not need a saved video list.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="watch-later-setup-title">
        <FeatureGuideHeading
          id="watch-later-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE · POSITION
          </>}
          >
          Choose whether to show the controls.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              First set up a featured video with{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
              Watch Later controls appear on FIFU featured video thumbnails and their
              supported player embeds, not on arbitrary videos across your site.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In WordPress, open <strong>FIFU → Video</strong>, then the{' '}
              <strong>Watch Later</strong> panel. Turn on{' '}
              <strong>watch later and queue buttons</strong> to enable both controls.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Optionally turn on <strong>move to left</strong> to place the controls on
              the left side of the featured video. Leave it off to keep them on the right.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="watch-later-workflow-title">
        <FeatureGuideHeading
          id="watch-later-workflow-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SAVE · PLAY · REMOVE
          </>}
          >
          Use the queue on a page with featured videos.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Select the clock-shaped <strong>Watch later</strong> control on a featured
              video. A check mark indicates it is saved.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select <strong>Queue</strong> on a featured video to open the saved items in
              a gallery. Choose a video from the thumbnail strip.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Remove an item with the X on its gallery thumbnail, or select its checked
              Watch later control again.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="watch-later-limits-title" help>
        <FeatureGuideHeading
          id="watch-later-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            STORAGE · AVAILABILITY
          </>}
          tone="help"
          >
          Understand what the queue keeps.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>i</span>
            <p>
              Saved videos stay in the visitor's current browser. Clearing browser data also clears the list.
            </p>
          </li>
          <li>
            <span>i</span>
            <p>
              <strong>Empty queue:</strong> Queue does not open a gallery until at least
              one item is saved.
            </p>
          </li>
          <li>
            <span>i</span>
            <p>
              These controls appear on supported FIFU featured videos, not every video embedded on the site.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/video-thumbnail/">Video Thumbnail</Link> and <Link to="/features/play-button/">Play Button</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function UnsplashImageSearchGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Unsplash Image Search"
      className="feature-guide-page"
    >
      <p className="lead">
        Find a suitable Unsplash photo with keywords, then save its remote image URL as
        the featured image for your content.
      </p>

      <FeatureGuideHighlight id="unsplash-image-search-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Search size={15} aria-hidden="true" /> SEARCH · SELECT · SAVE
          </span>
          <h2 id="unsplash-image-search-intro">Choose by subject, not by URL.</h2>
          <p>
            When you do not already have an image address, search Unsplash from FIFU’s
            image field. This lets you compare photos in place and save the selected
            remote URL without first downloading the image into your Media Library. If you
            need a local copy, use{' '}
            <Link to="/features/save-in-the-media-library/">
              Save in the Media Library
            </Link>{' '}
            instead.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/unsplash-image-search-guide-1.png"
            alt="Enter keywords in FIFU’s image field, choose an Unsplash photo, and preview its selected URL."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="unsplash-image-search-editor-title">
        <FeatureGuideHeading
          id="unsplash-image-search-editor-title"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            IN THE CONTENT EDITOR
          </>}
          >
          Search and save a featured image.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open the post, page, or product you want to edit and locate FIFU’s featured
              image field.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter descriptive search words in <strong>Image URL or Keywords</strong>,
              then select <strong>Preview</strong>. The Unsplash results open in a photo
              grid.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Scroll the results to load more photos, then select the one you want. FIFU
              places its image URL in the field and previews it.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Save or update the post, page, or product. The selected URL is saved as its
              FIFU featured image.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="unsplash-image-search-quick-title">
        <FeatureGuideHeading
          id="unsplash-image-search-quick-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FROM A CONTENT LIST
          </>}
          >
          Search with Quick Edit.
        </FeatureGuideHeading>
        <p>
          Open <Link to="/features/quick-editor/">Quick Editor</Link> from a WordPress
          content list, enter keywords in its <strong>Image URL or Keywords</strong>{' '}
          field, and select <strong>Preview</strong>. Choose a result, then save the Quick
          Edit form to set that item’s featured image.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="unsplash-image-search-help-title" help>
        <FeatureGuideHeading
          id="unsplash-image-search-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            ACCESS · RESULTS · LIMITS
          </>}
          tone="help"
          >
          What to check when search is empty.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>
              <Check size={15} aria-hidden="true" />
            </span>
            <p>
              <strong>Access:</strong> use an account with permission
              to upload images in WordPress.
            </p>
          </li>
          <li>
            <span>
              <Search size={15} aria-hidden="true" />
            </span>
            <p>
              <strong>No photos appear:</strong> check that your keywords are not blank
              and try a more specific or broader phrase. Blank searches return no results.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={15} aria-hidden="true" />
            </span>
            <p>
              <strong>Search unavailable:</strong> if the image
              service is not responding, try again later.
            </p>
          </li>
          <li>
            <span>
              <Image size={15} aria-hidden="true" />
            </span>
            <p>
              <strong>After selection:</strong> FIFU saves the remote image URL; it does
              not import the photo into your Media Library as part of this search flow.
              Use this when remote image URLs fit your site’s workflow.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function DeleteFromCloudGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Delete from Cloud"
      className="feature-guide-page delete-cloud-feature-page"
    >
      <p className="lead">
        Remove chosen FIFU Cloud images after reviewing their site references, or turn on
        optional cleanup for images FIFU no longer finds in use.
      </p>

      <FeatureGuideHighlight id="delete-cloud-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <CloudOff size={15} aria-hidden="true" /> CLOUD STORAGE CLEANUP
          </span>
          <h2 id="delete-cloud-purpose">
            Remove cloud copies when you no longer need them.
          </h2>
          <p>
            Cloud images remain in storage after their content is retired unless you
            remove them. FIFU Cloud billing uses the average number of stored images in
            each 30-day period, and a deleted image stops counting from the next day. Use
            manual deletion when you want to review specific images; use automatic cleanup
            if you routinely remove content and want unused copies cleared without
            reviewing each one. Leave automation off when you prefer to keep every cloud
            copy.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/delete-from-cloud-guide-1.png"
            alt="Select cloud image rows, confirm deletion, and see the removed rows disappear from the inventory."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="delete-cloud-manual-title">
        <FeatureGuideHeading
          id="delete-cloud-manual-title"
          icon={<>
            <Search size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MANUAL CLEANUP
          </>}
          >
          Find and remove selected images.
        </FeatureGuideHeading>
        <p>
          Complete FIFU Cloud account setup and connect your site first. Open{' '}
          <strong>FIFU → Cloud → Delete</strong>. The inventory shows a thumbnail, post
          title, upload date, Post ID, and image location. Locations include featured
          images, gallery images, sliders, and category images. Images added through{' '}
          <Link to="/features/upload-to-cloud/">Upload to Cloud</Link> appear in this same
          inventory.
        </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Choose <strong>Image URL</strong> or <strong>ID</strong> (the Post ID),
              enter a search value, and select <strong>Search</strong>. A blank value does
              not start a search.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Review the rows and select the images to remove. Use{' '}
              <strong>Filter results</strong> to narrow the loaded rows and{' '}
              <strong>Show results</strong> to change how many are displayed.{' '}
              <strong>select all</strong> selects up to the 1,000-row limit;{' '}
              <strong>select none</strong> clears your selection. Select{' '}
              <strong>load more</strong> to request another page when the current page
              contains 1,000 rows.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Choose <strong>delete</strong>, then select <strong>Delete</strong> in the
              confirmation dialog. Select <strong>Cancel</strong> to close the dialog
              without deleting the selected images.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Deletion is permanent and cannot be undone. When deletion succeeds, FIFU removes
          the Cloud URL from the associated media record and returns supported featured,
          gallery, or category media to its local version when an intact local backup is
          available. This does not restore a missing local file, so check each row’s title
          and location before confirming.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="delete-cloud-auto-title">
        <FeatureGuideHeading
          id="delete-cloud-auto-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL AUTOMATION
          </>}
          >
          Automatically clear unused cloud images.
        </FeatureGuideHeading>
        <p>
              In <strong>FIFU → Cloud → Delete</strong>, turn on <strong>Automatic delete</strong> to remove Cloud images that are no longer used. Keep it off if you prefer to review each deletion manually.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="delete-cloud-troubleshooting-title" help>
        <FeatureGuideHeading
          id="delete-cloud-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            ACCESS AND RESULTS
          </>}
          tone="help"
          >
          When the inventory or action is unavailable.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Not connected</dt>
            <dd>
              Finish account setup from <strong>FIFU → Cloud → Account</strong>. Listing,
              searching, and deleting require a connected Cloud account.
            </dd>
          </div>
          <div>
            <dt>No images available</dt>
            <dd>
              No rows match the current search. Try the other search type or a different
              URL or Post ID.
            </dd>
          </div>
          <div>
            <dt>Web service is down</dt>
            <dd>
              The Cloud service did not return a usable response. Retry after the service
              connection is available.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/hotlink-protection/">Hotlink protection</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function UploadToCloudGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Upload to Cloud"
      className="upload-cloud-feature-page"
    >
      <p className="lead">
        Store selected FIFU image URLs in Cloud so your site can keep serving them if
        their original host changes or disappears.
      </p>

      <FeatureGuideHighlight id="upload-cloud-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <CloudUpload size={15} aria-hidden="true" /> STABLE IMAGE HOSTING
          </span>
          <h2 id="upload-cloud-intro">Keep a cloud copy behind your FIFU images.</h2>
          <p>
            Uploading saves the image in FIFU Cloud and replaces the selected FIFU URL
            with its Cloud URL. This can protect embedded images from source URL changes
            and can provide optimized thumbnails without processing each image on your
            WordPress server. Use it for remote images you want to preserve or serve
            through Cloud; skip it when your existing image hosting already meets your
            needs.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/upload-to-cloud-guide-1.png"
            alt="Select a FIFU image, upload it to Cloud, and display the image from its Cloud URL."
            loading="eager"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="upload-cloud-connection-title">
        <FeatureGuideHeading
          id="upload-cloud-connection-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            REQUIRED · ACCOUNT
          </>}
          >
          Connect the site before uploading.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress admin, open <strong>FIFU → Cloud → Account</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For a new connection, enter your email and choose <strong>Sign up</strong>.
              The website field is filled from your site address and is read-only.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Wait until the account status is <strong>Connected</strong>. Upload and
              automatic upload controls require a completed connection.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="upload-cloud-manual-title">
        <FeatureGuideHeading
          id="upload-cloud-manual-title"
          icon={<>
            <CloudUpload size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MANUAL UPLOAD
          </>}
          >
          Find and upload selected images.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Cloud → Upload</strong>. Search by{' '}
              <strong>Post title</strong> or <strong>Image URL</strong>, then choose{' '}
              <strong>Search</strong>. Rows show an image preview, title, post date, post
              ID, and location such as featured media, gallery, slider, or category.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select the rows you want. Use <strong>SHIFT</strong> to select adjacent rows
              or <strong>CTRL</strong> to select separate rows.{' '}
              <strong>select all</strong> selects up to 1,000 loaded rows;{' '}
              <strong>select none</strong> clears the selection. Choose{' '}
              <strong>load more</strong> to fetch another page when the current page is
              full.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Choose <strong>upload</strong> and wait for the progress bar to finish.
              Successful rows leave the list, and the corresponding FIFU media URLs are
              replaced by Cloud URLs used to display the images.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="upload-cloud-automatic-title">
        <FeatureGuideHeading
          id="upload-cloud-automatic-title"
          icon={<>
            <RefreshCw size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL · AUTOMATIC UPLOAD
          </>}
          >
          Let scheduled jobs process remote URLs.
        </FeatureGuideHeading>
        <p>
          On <strong>FIFU → Cloud → Upload</strong>, enable{' '}
          <strong>Automatic upload</strong> to let scheduled Cloud jobs upload remote
          image URLs already used by FIFU. Successfully uploaded URLs are replaced with Cloud URLs. Turn the option off to revoke
          automatic-upload authorization. Use this when you want ongoing remote images
          handled without selecting each one manually; manual upload remains available
          when you want control over each batch.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="upload-cloud-costs-title">
        <FeatureGuideHeading
          id="upload-cloud-costs-title"
          icon={<>
            <CloudUpload size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COST AND COVERAGE
          </>}
          >
          Know what changes when an image is stored.
        </FeatureGuideHeading>
        <p>
          Charges start on the upload date. Pricing is €0.001 per image, based on the
          daily average number of stored images over each 30-day billing period; generated
          thumbnails are excluded from the image count. Cloud processing and thumbnail
          delivery can reduce image-processing work on your WordPress server and deliver
          smaller image variants to visitors.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="upload-cloud-recovery-title" help>
        <FeatureGuideHeading
          id="upload-cloud-recovery-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            BEFORE RETRYING
          </>}
          tone="help"
          >
          Resolve missing rows and connection errors.
        </FeatureGuideHeading>
        <p>
          <strong>Local Media Library images:</strong> they do not appear in Upload until
          their URL is linked into a FIFU field. Open{' '}
          <strong>FIFU → Cloud → Local images</strong>, select the relevant rows, and
          choose <strong>link</strong>. This copies local URLs into FIFU; it does not
          upload the files. Keep the original Media Library files while linking. For the
          full local-image workflow, read the{' '}
          <Link to="/features/link-local-image-urls-to-fifu-plugin/">
            Link local image URLs to FIFU plugin guide
          </Link>
          .
        </p>
        <p>
          <strong>Not connected:</strong> reconnect the Cloud account before using upload
          controls. <strong>Web service is down:</strong> Cloud is unavailable, so wait
          and retry when the service responds. If a selected row remains after an upload,
          treat it as not completed and retry after confirming the connection and service
          status.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/delete-from-cloud/">Delete from Cloud</Link> and <Link to="/features/hotlink-protection/">Hotlink protection</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function LinkLocalImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Link local image URLs to FIFU plugin"
      className="local-images-feature-page"
    >
      <p className="lead">
        Connect images already used on your posts to FIFU’s image fields, then optionally
        send them to FIFU Cloud.
      </p>

      <FeatureGuideHighlight id="local-image-link-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> LOCAL IMAGE URLS
          </span>
          <h2 id="local-image-link-intro">
            Keep your existing files and give FIFU the image URL.
          </h2>
          <p>
            WordPress stores local featured images as Media Library attachments. Linking
            copies their URLs into FIFU fields, so FIFU can display them and include them
            in its Cloud upload list. This is useful when you want to move selected images
            into Cloud without replacing the files on your site; if you only need local
            display, linking is optional.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/link-local-image-urls-to-fifu-plugin-guide-1.png"
            alt="Select a local image row, link its URL, and see the image in a FIFU featured image field."
            loading="eager"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="local-images-workflow-title">
        <FeatureGuideHeading
          id="local-images-workflow-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SELECT AND LINK
          </>}
          >
          Copy selected local image URLs into FIFU.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress admin, open <strong>FIFU → Cloud → Local images</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Search by <strong>Post title</strong> or <strong>Post ID</strong>. The
              results show the featured image, post title, post date, post ID, and gallery
              image count. When WooCommerce is active, product category images are
              included too; their title and ID searches match the category name and term
              ID.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Select the rows you want to connect, then choose <strong>link</strong>. FIFU
              copies each featured image URL and any associated gallery URLs into its
              fields. <strong>select all</strong> selects up to 1,000 rows; use{' '}
              <strong>select none</strong> to clear the selection.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              When a 1,000-row page is full, or after linking rows, choose{' '}
              <strong>load more</strong> to fetch the next page. Linked rows leave the
              list; if an operation fails, keep the Media Library files and retry after
              the service is available.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="local-images-effects-title">
        <FeatureGuideHeading
          id="local-images-effects-title"
          icon={<>
            <CloudUpload size={19} aria-hidden="true" />
          </>}
          kicker={<>
            AFTER LINKING
          </>}
          >
          Upload to Cloud only when you need hosted copies.
        </FeatureGuideHeading>
        <p>
          Linking copies the local image URL into FIFU fields; it does not upload the file
          to Cloud. Keep the Media Library file until linking finishes. The linked image
          can then appear under <strong>FIFU → Cloud → Upload</strong>. Select it there
          and choose <strong>upload</strong> to create the Cloud copy. This two-stage
          process lets you choose which local images to move.
        </p>
        <p>
          Before uploading, complete Cloud sign-up and connect your account. If the Cloud
          page shows <strong>Not connected</strong>, reconnect before uploading. If it
          shows <strong>Web service is down</strong>, wait and retry. Keep the original
          file until you have confirmed linking has completed.
        </p>
        <p>
          For the upload stage, continue with the{' '}
          <Link to="/features/upload-to-cloud/">Upload to Cloud guide</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/save-in-the-media-library/">Save in the Media Library</Link> and <Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function DbMigrationGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="DB Migration"
      className="db-migration-guide"
    >
      <p className="lead">
        Move media data saved by older FIFU versions into the current format.
      </p>
      <FeatureGuideHighlight id="db-migration-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">LEGACY DATA BACKFILL</span>
          <h2 id="db-migration-purpose">Move old FIFU records into dedicated tables.</h2>
          <p>
              Sites upgraded from older FIFU versions may need to move existing media data to the newer storage format. The migration handles this in small steps so large sites can complete the process without a single long operation.
            </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/db-migration-guide-1.png"
            alt="Three-step illustration of opening DB Migration, transferring legacy rows in batches, and seeing completed progress."
            loading="eager"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="db-migration-start-title">
        <FeatureGuideHeading
          id="db-migration-start-title"
          icon={<>
            <Database size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPEN THE TOOL
          </>}
          >
          Start the background migration.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In the WordPress site admin, open{' '}
              <strong>FIFU → Settings → Developers</strong> and enable{' '}
              <Link to="/features/debug-mode/">
                <strong>Debug Mode</strong>
              </Link>
              . This reveals the migration submenu; it is not registered in Network Admin.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Open <strong>FIFU → DB Migration</strong> while signed in with an account
              that has the <code>manage_options</code> capability.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              FIFU migrates the data in batches and saves progress so you can pause or resume the process.
            </p>
          </li>
        </FeatureGuideSteps>
        <p className="db-migration-callout">
              FIFU keeps the old data until its replacement has been saved successfully.
            </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="db-migration-monitor-title">
        <FeatureGuideHeading
          id="db-migration-monitor-title"
          icon={<>
            <RefreshCw size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MONITOR AND CONTROL
          </>}
          >
          Use the summary and task rows.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="migration">
          <div>
            <dt>Overall status</dt>
            <dd>
              <strong>Not started</strong>, <strong>Running</strong>,{' '}
              <strong>Paused</strong>, <strong>Needs attention</strong>, or{' '}
              <strong>Completed</strong> describes the whole run. Individual tasks show
              pending, running, or finished.
            </dd>
          </div>
          <div>
            <dt>Progress summary</dt>
            <dd>
              Shows migration progress, completed work, remaining items, and any errors.
            </dd>
          </div>
          <div>
            <dt>Task rows</dt>
            <dd>
              Shows the progress and errors for each migration task.
            </dd>
          </div>
          <div>
            <dt>Pause migration / Resume migration</dt>
            <dd>
              Pause an active background run or continue a paused run. A pause expires
              after one hour.
            </dd>
          </div>
          <div>
            <dt>Retry failed items</dt>
            <dd>
              When the overall status needs attention, inspect the last error and task
              error counts, then retry the failed items.
            </dd>
          </div>
          <div>
            <dt>Refresh status</dt>
            <dd>Request the latest saved summary and task state.</dd>
          </div>
          <div>
            <dt>Scan for new legacy data</dt>
            <dd>
              After a completed pass, scan again to find legacy values that appeared since
              that pass.
            </dd>
          </div>
          <div>
            <dt>Run now</dt>
            <dd>
              In the FIFU migration admin notice, request background ticks immediately
              instead of waiting for the regular schedule.
            </dd>
          </div>
          <div>
            <dt>Copy diagnostic info</dt>
            <dd>
              Copy overall and per-task status, cursors, counts, errors, and timestamps
              for troubleshooting.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="db-migration-coverage-title">
        <FeatureGuideHeading
          id="db-migration-coverage-title"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT IT BACKFILLS
          </>}
          >
          Coverage depends on registered tasks.
        </FeatureGuideHeading>
        <p>
              The tool migrates supported older FIFU images, galleries, sliders, videos, category media, and related information. The migration page shows the tasks available on your site.
            </p>
        <p>
              The migration moves supported older FIFU data into the newer format without changing unrelated WordPress content.
            </p>
      </FeatureGuideSection>
            <FeatureCliSection
        id="db-migration-cli-title"
        commands={[
          {
            label: 'Run one migration task',
            command: 'wp fifu-migrate run_task featured',
            description: 'Processes a batch for the named task.',
          },
          {
            label: 'Run all migration tasks',
            command: 'wp fifu-migrate run-all --limit=1000 --time=30',
            description: 'Processes a batch for each task, with optional size and time limits.',
          },
          {
            label: 'Restart a migration task',
            command: 'wp fifu-migrate reset_task featured',
            description: 'Restarts the named task from the beginning.',
          },
        ]}
        note="Each command processes a batch. Repeat runs as needed; use Reset only when you intend to restart a task."
      />
      <FeatureGuideSection id="db-migration-help-title" help>
        <FeatureGuideHeading
          id="db-migration-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF A RUN STOPS
          </>}
          tone="help"
          >
          Check access, runtime, and task errors.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="migration">
          <div>
            <dt>The menu is missing</dt>
            <dd>
              Enable Debug Mode under FIFU → Settings → Developers, use the site admin
              rather than Network Admin, and sign in with <code>manage_options</code>.
            </dd>
          </div>
          
          <div>
            <dt>A task needs attention</dt>
            <dd>
              Read the last error and task error count, copy diagnostic info if you need
              to preserve the state for troubleshooting, then use{' '}
              <strong>Retry failed items</strong>.
            </dd>
          </div>
          
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/image-metadata/">Image Metadata</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}
function FifuFieldsGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="FIFU Fields" className="feature-guide-page">
      <p className="lead">
        Enter a remote media URL where you create content; FIFU applies it to the saved
        post or product.
      </p>
      <FeatureGuideHighlight id="fifu-fields-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <FileImage size={15} aria-hidden="true" /> MEDIA IN YOUR WORKFLOW
          </span>
          <h2 id="fifu-fields-intro">Add media at the point of entry.</h2>
          <p>
            FIFU Fields carry a remote image address from an editor or submission form
            into the saved content. This helps when contributors already have image URLs:
            they can assign media during the same task, reducing handoffs and duplicate
            entry. Use the fields when your publishing or vendor workflow starts with a
            URL; if you only use WordPress’s usual media picker, you may not need the
            extra integrations.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/fifu-fields-guide-1.png"
            alt="Enter an image URL in the FIFU editor panel, save the post, and display the image on the published page"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="fifu-fields-editor-title">
        <FeatureGuideHeading
          id="fifu-fields-editor-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WORDPRESS EDITOR
          </>}
          >
          Save a featured media URL.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open a post, page, or supported custom post type. In the{' '}
              <strong>FIFU</strong> panel, choose <strong>Media type</strong> and enter
              the address in <strong>Image URL</strong>, <strong>Video URL</strong>, or
              the matching media field. Add <strong>Alternative text</strong> for an image
              when useful. The panel includes <strong>Preview</strong> so you can check
              the media before saving. The available types include featured image,
              featured video, featured audio, and featured slider; slider and video/audio
              choices depend on their matching FIFU features being enabled.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Save or update the content. FIFU stores the remote image URL with that item.
              The related{' '}
              <Link to="/features/remote-featured-image/">Remote Featured Image</Link>{' '}
              workflow explains how supported themes and integrations display it.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          For a WooCommerce product, use the product editor’s FIFU fields for the main
          image and image/video gallery. Add, preview, reorder, or remove gallery items,
          then save the product. For variations, enter media on each variation; its first
          image is the variation image and additional images form its gallery. See{' '}
          <Link to="/features/remote-variation-images/">Remote Variation Images</Link> and{' '}
          <Link to="/features/remote-product-gallery-images/">
            Remote Product Gallery Images
          </Link>{' '}
          for those workflows.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-fields-gravity-title">
        <FeatureGuideHeading
          id="fifu-fields-gravity-title"
          icon={<>
            <ClipboardCopy size={19} aria-hidden="true" />
          </>}
          kicker={<>
            GRAVITY FORMS
          </>}
          >
          Collect media with a submission.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              With Gravity Forms active, open the form editor and add{' '}
              <strong>Featured Image (FIFU)</strong> from <strong>Post Fields</strong>.
              Configure its label, description, required rule, placeholder, CSS class,
              size, default value, visibility, or conditional logic using the form’s field
              settings.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Connect the form to a post-creation workflow and collect an image URL. On
              entry save, the field value is passed into FIFU’s featured-image save flow
              for the created post. The field collects a URL; your form still needs a
              configured post-creation workflow.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Additional <strong>Featured Slider (FIFU)</strong> and{' '}
          <strong>Featured Video (FIFU)</strong> fields are available only when the
          matching FIFU feature is enabled. These collect their respective media URLs. For
          their display and configuration options, read{' '}
          <Link to="/features/featured-slider/">Featured Slider</Link> and{' '}
          <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-fields-vendors-title">
        <FeatureGuideHeading
          id="fifu-fields-vendors-title"
          icon={<>
            <UsersRound size={19} aria-hidden="true" />
          </>}
          kicker={<>
            VENDOR PRODUCT FORMS
          </>}
          >
          Let marketplace vendors set product images.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Dokan</dt>
            <dd>
              The add and edit product forms include <strong>Product image</strong> and
              FIFU gallery controls. Enter the main URL and any gallery URLs, then save.
              The save updates the FIFU image and synchronizes featured and gallery
              attachments.
            </dd>
          </div>
          <div>
            <dt>MultiVendorX</dt>
            <dd>
              The product manager includes a <strong>Product image</strong> URL field.
              Save or process the product to store that URL as its FIFU featured image.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          These fields appear when the matching vendor integration is active. For Dokan
          saves, FIFU checks that the current account is a seller. Existing product URLs
          are populated in edit forms.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-fields-availability-title" help>
        <FeatureGuideHeading
          id="fifu-fields-availability-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            AVAILABILITY AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check the integration and media type.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Image</dt>
            <dd>
              Available in the FIFU editor and WooCommerce product controls. Gravity Forms
              adds its image field when Gravity Forms is active; Dokan and MultiVendorX
              fields require their corresponding integrations.
            </dd>
          </div>
          <div>
            <dt>Slider, video, or audio</dt>
            <dd>
              The editor offers slider only when Featured Slider is enabled, and
              video/audio when Featured Video / Audio is enabled. Gravity Forms adds its
              slider and video fields only when those matching features are enabled; it
              has no separate audio field here. A missing field usually means its
              integration or media feature is inactive.
            </dd>
          </div>
          <div>
            <dt>Remote address</dt>
            <dd>
              The URL must remain reachable by your site and visitors. A URL that is
              unavailable or blocked cannot provide a displayable remote image.
            </dd>
          </div>
          <div>
            <dt>Preview or save issue</dt>
            <dd>
              Confirm the address is complete and accessible, then use Preview in the
              editor before saving. In a form workflow, confirm that the submitted field
              is connected to post creation; the field alone collects a value but does not
              create a post.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideCta />
    </Page>
  );
}

function FeaturedMediaFilterGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Media Filter"
      className="feature-guide-page"
    >
      <p className="lead">
        Filter a WordPress content list by the kind of featured media assigned to each
        item.
      </p>

      <FeatureGuideHighlight id="featured-media-filter-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ListFilter size={15} aria-hidden="true" /> ADMIN CONTENT LISTS
          </span>
          <h2 id="featured-media-filter-intro">Find the items that need attention.</h2>
          <p>
            A long list can hide posts with missing media or a particular image, video,
            slider, or audio assignment. Filter the list by that saved state to focus your
            review, spot gaps, and check which items use remote versus local images.
          </p>
        </div>
        <div
          className="feature-highlight-visual"
          aria-label="Featured media filter workflow"
        >
          <img
            src="/images/featured-media-filter-guide-1.png"
            alt="Choose Featured video in a content list filter and review the matching items."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="featured-media-filter-purpose-title">
        <FeatureGuideHeading
          id="featured-media-filter-purpose-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Review media coverage in place.
        </FeatureGuideHeading>
        <p>
          Use this when you are auditing content, locating records that still need media,
          or checking how featured media is stored. It narrows the existing admin list, so
          you can inspect matching items without opening them one by one. It is optional
          when your list is already manageable or you do not need to sort content by media
          state.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-media-filter-workflow-title">
        <FeatureGuideHeading
          id="featured-media-filter-workflow-title"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FILTER THE LIST
          </>}
          >
          Choose a status and apply it.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress admin, open <strong>Posts</strong>, <strong>Pages</strong>, or
              another content list whose post type supports featured images.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In the top list controls, choose a value from{' '}
              <strong>All featured media statuses</strong>, then click{' '}
              <strong>Filter</strong>.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Review the matching rows. To clear this condition, return the dropdown to{' '}
              <strong>All featured media statuses</strong> and apply the list filter
              again.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-media-filter-options-title">
        <FeatureGuideHeading
          id="featured-media-filter-options-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            AVAILABLE MATCHES
          </>}
          >
          Match the state you want to review.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Status</dt>
            <dd>
              <strong>Any featured media</strong> matches an assigned image, video,
              slider, or audio. <strong>No assigned featured media</strong> matches items
              with none of those assignments.
            </dd>
          </div>
          <div>
            <dt>Images</dt>
            <dd>
              <strong>Featured image</strong> matches either image source.{' '}
              <strong>Remote featured image</strong> matches a non-empty FIFU image URL.{' '}
              <strong>Local featured image</strong> matches a WordPress thumbnail
              attachment not authored by FIFU, when no remote FIFU image is set.
            </dd>
          </div>
          <div>
            <dt>Other media</dt>
            <dd>
              <strong>Featured video</strong>, <strong>Featured slider</strong>, and{' '}
              <strong>Featured audio</strong> each match items with that assigned media
              type.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-media-filter-help-title" help>
        <FeatureGuideHeading
          id="featured-media-filter-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF THE FILTER IS MISSING
          </>}
          tone="help"
          >
          Check the list and your access.
        </FeatureGuideHeading>
        <p>
              If you do not see the filter, open a supported WordPress content list and check that your account can edit that content type.
            </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>, <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> and <Link to="/features/featured-slider/">Featured Slider</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function OrderEmailImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Add image to order email"
      className="feature-guide-page"
    >
      <p className="lead">
        Show product thumbnails beside ordered items in WooCommerce emails, including
        remote featured images added with FIFU.
      </p>

      <FeatureGuideHighlight id="order-email-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MailPlus size={15} aria-hidden="true" />
            ORDER ITEM IMAGES
          </span>
          <h2 id="order-email-purpose">Make ordered products easier to recognize.</h2>
          <p>
            An order may contain several products with similar names. Adding a small
            thumbnail next to each available product image helps customers see what
            they bought and helps store owners review the order. FIFU can supply
            remotely hosted featured images through WooCommerce’s normal product
            image rendering.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/add-image-to-order-email-guide-1.png"
            alt="Turn on Add image to order email, then see a product image beside an item in the WooCommerce order email."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="order-email-enable">
        <FeatureGuideHeading
          id="order-email-enable"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE IT
          </>}
          >
          Enable thumbnails in order emails.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, go to <strong>FIFU → Settings → WooCommerce</strong>
              and find <strong>Add image to order email</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on the <strong>Add image to order email</strong> switch.
              No product-by-product configuration is required for this option.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Send a new test order email using your normal WooCommerce workflow.
              In an HTML email that contains the standard ordered-items table,
              products with available images can now show a thumbnail beside
              their details.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="order-email-behavior">
        <FeatureGuideHeading
          id="order-email-behavior"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT CHANGES
          </>}
          >
          What changes in the email?
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Where thumbnails appear</dt>
            <dd>
              In WooCommerce’s standard ordered-items table when an email
              renders that table. The setting does not add images to
              the subject, header, or unrelated email sections.
            </dd>
          </div>
          
          <div>
            <dt>When turned off</dt>
            <dd>
              FIFU leaves WooCommerce’s original order-items table untouched
              by this feature. Emails already sent are not changed.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          The option uses WooCommerce’s product-image output, which can include a{' '}
          <Link to="/features/remote-featured-image/">remote FIFU featured image</Link>.
          Only products with an available image can display a thumbnail.
          When enabled, FIFU asks WooCommerce to render the items table again
          with images, so heavily customized email templates or email-design
          plugins may display the rows differently.
        </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="order-email-cli"
        commands={[
          {
            label: 'Show product images in order emails',
            command: 'wp fifu woo --order-email=on',
          },
          {
            label: 'Hide product images in order emails',
            command: 'wp fifu woo --order-email=off',
          },
        ]}
      />

      <FeatureGuideSection id="order-email-troubleshooting" help>
        <FeatureGuideHeading
          id="order-email-troubleshooting"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If thumbnails do not appear
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Confirm the switch:</strong> Check{' '}
            <strong>FIFU → Settings → WooCommerce → Add image to order email</strong>{' '}
            and send a new test email. Previously delivered messages do not change.
          </li>
          <li>
            <strong>Check the product image:</strong> Make sure the product has
            an image that WooCommerce can display. For a remote FIFU image,
            open its URL and check that the host still serves the image.
          </li>
          <li>
            <strong>Check the email template:</strong> This works through
            WooCommerce’s standard ordered-items table. A custom template or
            email builder that bypasses it may not show the thumbnails.
          </li>
          <li>
            <strong>Check the recipient’s email app:</strong> Some mail clients
            block externally hosted pictures until the recipient allows
            images to load. Test the email in another client if needed.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/woocommerce-import/">WooCommerce Import</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced description="Browse the feature list to find another workflow for your store." />
    </Page>
  );
}

function AutoSetCategoryImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set category images"
      className="feature-guide-page"
    >
      <p className="lead">
        Automatically give WooCommerce product categories a thumbnail using remote
        featured images already assigned to their products.
      </p>

      <FeatureGuideHighlight id="category-images-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Tags size={15} aria-hidden="true" /> WOOCOMMERCE CATEGORIES
          </span>
          <h2 id="category-images-intro">
            Reuse product images for category thumbnails.
          </h2>
          <p>
            Turn on this option to fill missing WooCommerce category images
            from products already using FIFU featured images. It is useful for
            large catalogs where setting every category thumbnail manually
            would take too much time. The images remain at their original URLs.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-category-images-guide-1.png"
            alt="An enabled category image setting selects a product’s FIFU image for a category thumbnail"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="category-images-purpose-title">
        <FeatureGuideHeading
          id="category-images-purpose-title"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Fill category imagery from your catalog.
        </FeatureGuideHeading>
        <p>
          FIFU selects an image from a product assigned to the category. The
          product must have a saved FIFU featured-image URL, and products in the
          Trash are excluded. Categories without a suitable product image are
          left unchanged.
        </p>
        <p>
          <strong>This is an ongoing automatic feature, not just a one-time fill.</strong>{' '}
          When it runs again, FIFU may replace an existing category image with
          another product image. If you prefer to choose and keep category
          thumbnails yourself, leave the feature disabled.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="category-images-enable-title">
        <FeatureGuideHeading
          id="category-images-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE AUTOMATIC ASSIGNMENT
          </>}
          >
          Enable automatic category images.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → WooCommerce → Auto set category images</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enable <strong>Auto set category images</strong>. FIFU can assign
              missing category thumbnails using the remote featured images
              of products in those categories.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open <strong>Products → Categories</strong> to review the result.
              Categories without an eligible product image will stay empty.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          The switch can also be turned off at any time. This stops further
          automatic assignments and changes, but it does not remove category
          images that FIFU has already saved.
        </p>
        
      </FeatureGuideSection>

      <FeatureCliSection
        id="category-images-cli"
        commands={[
          {
            label: 'Enable automatic category images',
            command: 'wp fifu woo --category-auto=on',
          },
          {
            label: 'Disable automatic category images',
            command: 'wp fifu woo --category-auto=off',
          },
        ]}
      />

      <FeatureGuideSection id="category-images-edit-title">
        <FeatureGuideHeading
          id="category-images-edit-title"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET OR CLEAR AN IMAGE
          </>}
          >
          Set a specific image for a category.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>Products → Categories</strong>, then add a category or choose
              one to edit.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In the <strong>FIFU</strong> area, choose the image media type.
              Paste an image URL in <strong>Image URL or Keywords</strong>, or
              search by keywords and choose a result. Use <strong>Preview</strong>{' '}
              to check the image and add descriptive alternative text as needed.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the category. FIFU stores the image URL and alternative text
              with the category and synchronizes its WordPress-compatible
              thumbnail information for themes that display category images.
            </p>
          </li>
        </FeatureGuideSteps>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Image URL or Keywords</dt>
            <dd>
              Use an absolute URL that includes <code>http://</code> or{' '}
              <code>https://</code> and the domain, or enter search keywords and choose an
              image result. Preview the image before saving. To clear the image,
              use its remove control. If automatic assignment is enabled, clearing
              the URL can cause FIFU to assign another image from the category's
              products. Turn the automatic feature off first if you want it to
              remain empty.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>
              Describe what the image shows. Leaving this field blank clears the
              category's saved alternative text.
            </dd>
          </div>
          <div>
            <dt>Use screenshot</dt>
            <dd>
              When the optional checkbox is available and selected, previewing a page URL
              uses a screenshot of that page as the image. See the{' '}
              <Link to="/features/auto-set-screenshot-as-featured-image/">
                Auto set screenshot as featured image guide
              </Link>{' '}
              for the screenshot workflow.
            </dd>
          </div>
          <div>
            <dt>Upload to media library</dt>
            <dd>
              This optional button appears when Media Library upload controls
              are enabled. It downloads the image into WordPress instead of
              continuing to reference only the remote file. See the{' '}
              <Link to="/features/save-in-the-media-library/">
                Save in the Media Library guide
              </Link>{' '}
              for that workflow.
            </dd>
          </div>
          <div>
            <dt>Sirv image picker</dt>
            <dd>
              If the Sirv plugin is active and its picker is available, choose a Sirv
              image to use in the category.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="category-images-updates-title">
        <FeatureGuideHeading
          id="category-images-updates-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            SELECTION AND UPDATES
          </>}
          tone="help"
          >
          Understand automatic updates.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              A category must contain an eligible product with a saved FIFU
              featured-image URL. A product with only a local WordPress image
              is not sufficient for this automatic URL-based assignment.
            </p>
          </li>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              The initial fill targets categories missing a FIFU image.
              Further runs can occur when products are saved or category
              metadata is processed. These runs can replace a category's
              current image, even if you previously selected it manually.
              Disable the setting before curating fixed category images.
            </p>
          </li>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              If a category stays empty, check its assigned products and confirm
              at least one has a FIFU featured-image URL. You can also
              enter an image URL manually under <strong>Products → Categories</strong>.
              A parent category may use a subcategory's thumbnail when its own
              thumbnail is missing.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function LightboxAndZoomGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Lightbox and Zoom"
      className="feature-guide-page"
    >
      <p className="lead">
        Open WooCommerce product images in a larger lightbox, or magnify image
        details with desktop hover zoom.
      </p>

      <FeatureGuideHighlight id="lightbox-zoom-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Search size={15} aria-hidden="true" /> PRODUCT IMAGE DETAILS
          </span>
          <h2 id="lightbox-zoom-intro">Help shoppers see the details before buying.</h2>
          <p>
            Lightbox lets shoppers open product media in an overlay and browse
            larger views. Zoom magnifies eligible product photos when a desktop
            visitor moves the pointer over them. These are separate controls:
            you can enable either one or both. They are useful when product
            details are difficult to see at the size displayed by your theme.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/lightbox-and-zoom-guide-1.png"
            alt="A product image opens in a larger lightbox gallery and a desktop hover zoom reveals image detail."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="lightbox-zoom-settings-title">
        <FeatureGuideHeading
          id="lightbox-zoom-settings-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS · WOOCOMMERCE
          </>}
          >
          Turn on the behavior you need.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, go to <strong>FIFU → Settings → WooCommerce</strong>
              and find the <strong>Lightbox and Zoom</strong> section.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enable <strong>Lightbox</strong> to allow product media to open in
              a larger viewer when clicked. If you use{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link>,
              this also enables its clickable gallery viewer on product pages.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enable <strong>Zoom</strong> for hover magnification on supported
              product image slides on desktop. This setting does not enable
              hover zoom on mobile devices or video slides, and it is independent
              of <strong>Lightbox</strong>.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Wait for the settings to confirm they are saved, then refresh a
              product page. Click an image to test Lightbox; move your pointer
              over an image to test desktop Zoom.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="lightbox-zoom-conditions-title">
        <FeatureGuideHeading
          id="lightbox-zoom-conditions-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE AND CONDITIONS
          </>}
          >
          If lightbox or zoom is missing.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Product page</dt>
            <dd>
              Check the live WooCommerce single-product page rather than the
              editor or a product listing. These settings are intended for
              product media, not every image across the website.
            </dd>
          </div>
          <div>
            <dt>Mobile devices</dt>
            <dd>
              Hover zoom is not initialized on mobile devices. Lightbox
              viewing is a separate interaction and may still be available.
            </dd>
          </div>
          
          <div>
            <dt>Video and image sources</dt>
            <dd>
              Hover zoom applies to eligible photos, not video slides or
              recognized video thumbnails. A remote image must also be
              accessible from the storefront to display and magnify correctly.
            </dd>
          </div>
          <div>
            <dt>Theme and gallery compatibility</dt>
            <dd>
              A theme that replaces WooCommerce’s product-image template may use
              its own lightbox or zoom controls, or prevent FIFU Product Gallery
              from replacing the default display. Confirm the relevant
              switch is on and check the theme’s gallery settings. See the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
              if you want FIFU to render the product gallery.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/play-button/">Play Button</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function VimeoOptionsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Vimeo options"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Choose silent background playback for Vimeo embeds, or use a scoped access token
        to select an available MP4 rendition.
      </p>

      <FeatureGuideHighlight id="vimeo-options-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIMEO OPTIONS
          </span>
          <h2 id="vimeo-options-intro">Choose an embed or MP4 playback path.</h2>
          <p>
            Vimeo’s standard embed keeps player controls and uses Vimeo streaming. Choose
            background mode for decorative silent playback. With a scoped token, use an
            available MP4 instead and choose its resolution; selecting a lower available
            rendition can reduce data sent to visitors. If the standard player fits your
            page, leave these options off.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/vimeo-options-guide-1.png"
            alt="Vimeo settings for background playback and MP4 quality, followed by a featured video playing on a page"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="vimeo-setup-title">
        <FeatureGuideHeading
          id="vimeo-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS LOCATION
          </>}
          >
          Open Vimeo options.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings</strong>, select{' '}
              <strong>Video</strong>, then find <strong>Vimeo options</strong> in the{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>{' '}
              area.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit the content where you want the video, open its FIFU{' '}
              <strong>Featured video</strong> panel, enter the Vimeo URL, select{' '}
              <strong>Preview</strong>, then save or update the content.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="vimeo-background-options-title">
        <FeatureGuideHeading
          id="vimeo-background-options-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BACKGROUND VIDEO TAB
          </>}
          >
          Choose where background mode applies.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Background video</dt>
            <dd>
              Turn this on to start eligible Vimeo embeds as background video, with
              controls hidden and sound off. It does not affect other video providers.
            </dd>
          </div>
          <div>
            <dt>on single post types only</dt>
            <dd>
              Turn this on to restrict background playback to the Vimeo featured video
              matching the current single content page. Leave it off to apply background
              mode to eligible Vimeo videos across the site.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Each toggle saves when you change it. If you turn on the single-content
          restriction, make sure the page’s featured video is the Vimeo video you expect
          to play.
        </p>
        <p>
          The <Link to="/features/background-video/">Background Video guide</Link> also
          explains this playback mode in the broader video settings workflow.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="vimeo-token-title">
        <FeatureGuideHeading
          id="vimeo-token-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MP4 TAB · OPTIONAL
          </>}
          >
          Add a token and choose a rendition.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open the <strong>mp4</strong> tab, select <strong>Access token</strong>, and
              enter a Vimeo personal access token with the <code>public</code>,{' '}
              <code>private</code>, and <code>video_files</code> scopes. Changing the
              token saves it and refreshes the status check. A green status icon means all
              three scopes are recorded; red means the check did not confirm all three.{' '}
              <a
                href="https://help.vimeo.com/hc/en-us/articles/12427789081745-How-to-generate-a-personal-access-token"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a Vimeo personal access token
              </a>{' '}
              with those scopes.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Under <strong>Video resolution</strong>, choose{' '}
              <strong>preferred video resolution</strong>: <code>1080p</code>,{' '}
              <code>720p</code>, <code>540p</code>, <code>360p</code>, or{' '}
              <code>240p</code>. The default is <code>540p</code>; changing the selection
              saves it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              FIFU tries your preferred resolution when that version is available. Otherwise, it chooses another available video quality.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="vimeo-limits-title" help>
        <FeatureGuideHeading
          id="vimeo-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN MP4 LOOKUP DOES NOT COMPLETE
          </>}
          tone="help"
          >
          Check scopes and file availability.
        </FeatureGuideHeading>
        <p>
              If the token does not work or an MP4 file is unavailable, the standard Vimeo player is used. Check the token permissions if the MP4 option does not work.
            </p>
        <p>
              Background mode works with Vimeo embeds, not with the MP4 playback option.
            </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="vimeo-cli-title"
        commands={[
          {
            label: 'Enable Vimeo background playback',
            command: 'wp fifu video --background=on',
          },
          {
            label: 'Limit background playback to single pages',
            command: 'wp fifu video --background-single=on',
          },
          {
            label: 'Set your Vimeo access token',
            command: 'wp fifu video --vimeo-access-token=YOUR_TOKEN',
            description: 'Replace YOUR_TOKEN with your Vimeo personal access token.',
          },
          {
            label: 'Choose a preferred MP4 quality',
            command: 'wp fifu video --vimeo-mp4-rendition=720p',
            description: 'Supported values: 1080p, 720p, 540p, 360p, and 240p.',
          },
        ]}
        note="Replace on with off to disable a switch. To verify access-token permissions, save the token on the Vimeo settings page."
      />

      <FeatureGuideCta />
    </Page>
  );
}

function BackgroundVideoGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Background Video"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Choose a Vimeo video as featured media, then set where it uses FIFU’s background
        playback mode.
      </p>
      <FeatureGuideHighlight id="background-video-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIMEO BACKGROUND PLAYBACK
          </span>
          <h2 id="background-video-intro">Keep the video; remove the player controls.</h2>
          <p>
            Background mode lets a Vimeo featured video add motion to a page without a
            visible player interface or sound. Use it for decorative page visuals when
            visitors do not need to hear or control the clip; leave it off for videos that
            depend on audio or visitor playback.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/background-video-guide-1.png"
            alt="Set a Vimeo video as featured media, enable background playback, and display it behind page content"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="background-video-workflow-title">
        <FeatureGuideHeading
          id="background-video-workflow-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP AND APPLY
          </>}
          >
          Enable the Vimeo background option.
        </FeatureGuideHeading>
        <p>
              Background mode plays supported Vimeo videos silently, without visible controls. Use it for decorative videos rather than content visitors need to operate.
            </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Make sure <strong>Featured Video / Audio</strong> is enabled at{' '}
              <strong>FIFU → Settings → Video → Featured video / audio</strong>. This
              makes the video field available in the content editor. The{' '}
              <Link to="/features/featured-video-audio/">
                Featured Video / Audio guide
              </Link>{' '}
              covers adding and previewing that media.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In the content editor, enter the Vimeo URL in FIFU’s{' '}
              <strong>Featured video</strong> field and save the content.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open{' '}
              <strong>FIFU → Settings → Video → Vimeo options → Background video</strong>{' '}
              and turn on <strong>background video</strong>. The setting applies to
              eligible Vimeo embeds across the site.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Open a page that displays the featured Vimeo video. When the background
              option applies, the video is embedded in muted, control-free background
              mode.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="background-video-scope-title">
        <FeatureGuideHeading
          id="background-video-scope-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL SCOPE CONTROL
          </>}
          >
          Restrict background mode to the matching content page.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>background video</dt>
            <dd>
              Turn this on for silent, control-free Vimeo playback. Turn it off for the standard Vimeo player.
            </dd>
          </div>
          <div>
            <dt>on single post types only</dt>
            <dd>
              Turn this on to use background playback only on the page where the Vimeo video is featured. Leave it off to use background mode in other eligible placements too.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Use the restriction when the video should behave as a background only on its own
          single-content page. Keep it off when the same Vimeo video should retain
          background behavior wherever it appears.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="background-video-conditions-title" help>
        <FeatureGuideHeading
          id="background-video-conditions-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE AND CHECKS
          </>}
          tone="help"
          >
          Check the video type and URL match.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Provider coverage</dt>
            <dd>
              Background mode is available for Vimeo embeds, not YouTube or direct video files.
            </dd>
          </div>
          <div>
            <dt>Restriction is on, but playback is not backgrounded</dt>
            <dd>
              Make sure the page is displaying its own featured Vimeo video.
            </dd>
          </div>
          <div>
            <dt>Need a standard player</dt>
            <dd>
              Turn off <strong>background video</strong> when visitors need controls or
              sound. The separate Vimeo MP4 rendition tab configures file rendition and
              does not enable background playback.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          For the other Vimeo playback and file settings, continue with the{' '}
          <Link to="/features/vimeo-options/">Vimeo options guide</Link>.
        </p>
      </FeatureGuideSection>
            <FeatureCliSection
        id="background-video-cli-title"
        commands={[
          {
            label: 'Enable background video',
            command: 'wp fifu video --background=on',
          },
          {
            label: 'Disable background video',
            command: 'wp fifu video --background=off',
          },
          {
            label: 'Restrict background video to single pages',
            command: 'wp fifu video --background-single=on',
          },
          {
            label: 'Remove the single-page restriction',
            command: 'wp fifu video --background-single=off',
          },
        ]}
      />
      <FeatureGuideCta />
    </Page>
  );
}

function AutoplayOnMouseoverGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Autoplay on Mouseover"
      className="feature-guide-page"
    >
      <p className="lead">
        Enable muted hover previews for supported featured videos; YouTube and Vimeo
        embeds also need Video Controls.
      </p>

      <FeatureGuideHighlight id="mouseover-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">VIDEO PLAYBACK</span>
          <h2 id="mouseover-intro">Preview video with a pointer hover.</h2>
          <p>
            Playback starts while a visitor points at a supported featured video and
            pauses when the pointer leaves. This lets visitors preview motion without a
            separate play click, while pausing on exit avoids leaving hover previews
            running after they move on.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/autoplay-on-mouseover-guide-1.png"
            alt="Enable mouseover playback and its prerequisites, then see a featured video play on hover and pause when the pointer leaves"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="mouseover-when-title">
        <FeatureGuideHeading
          id="mouseover-when-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN IT FITS
          </>}
          >
          Use hover previews where a pointer is expected.
        </FeatureGuideHeading>
        <p>
          Use this on product or content grids where visitors benefit from quick motion
          previews. Because playback follows the pointer and pauses when it leaves, keep
          it off if you prefer click-to-play or pointer hover is not a natural part of
          browsing.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="mouseover-config-title">
        <FeatureGuideHeading
          id="mouseover-config-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP PLAYBACK
          </>}
          >
          Enable the setting and its prerequisites.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Video → Featured video / audio</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Autoplay on Mouseover</strong>. The setting is saved when
              you change its toggle.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enable <Link to="/features/mute/">Mute</Link> for the device you want to
              support. The separate desktop and mobile toggles start videos without audio;
              mute is required for hover playback.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              For YouTube or Vimeo embeds, also turn on{' '}
              <Link to="/features/video-controls/">Video Controls</Link> so visitors have
              player controls. Video files do not require this setting.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              Open a page with a supported featured video. Move the pointer over the
              player to start playback; move it away to pause.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="mouseover-coverage-title" help>
        <FeatureGuideHeading
          id="mouseover-coverage-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE · TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check the player and required settings.
        </FeatureGuideHeading>
        <p>
          Hover playback is supported for <strong>YouTube</strong>, <strong>Vimeo</strong>
          , <strong>local videos</strong>, and <strong>remote video files</strong>. If it
          does not start, confirm that the featured media is one of these types,{' '}
          <strong>Autoplay on Mouseover</strong> and the matching desktop or mobile{' '}
          <Link to="/features/mute/">Mute</Link> toggle are on, and embedded YouTube or
          Vimeo players also have{' '}
          <Link to="/features/video-controls/">Video Controls</Link> on. Video files do
          not need Video Controls.
        </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="mouseover-cli-title"
        commands={[
          {
            label: 'Enable hover playback',
            command: 'wp fifu video --mouse=on',
          },
          {
            label: 'Disable hover playback',
            command: 'wp fifu video --mouse=off',
          },
        ]}
        note="Hover playback also needs the matching Mute setting, and embedded YouTube or Vimeo players need Video Controls enabled."
      />

      <FeatureGuideCta />
    </Page>
  );
}

function AutoplayGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Autoplay" className="feature-guide-page">
      <p className="lead">
        Choose where featured videos start by themselves, and enable Mute for the devices
        where you want playback.
      </p>

      <FeatureGuideHighlight id="autoplay-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Play size={15} aria-hidden="true" /> FEATURED VIDEO PLAYBACK
          </span>
          <h2 id="autoplay-intro">Let featured videos begin without a click.</h2>
          <p>
            Autoplay starts supported videos as they enter the viewport. On the homepage,
            you can also start every video at once, including videos outside the visible
            area.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/autoplay-guide-1.png"
            alt="Autoplay and Mute settings lead to a featured video playing silently on a page."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="autoplay-purpose">
        <FeatureGuideHeading
          id="autoplay-purpose"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE AUTOPLAY
          </>}
          >
          Make a featured video visible in motion.
        </FeatureGuideHeading>
        <p>
          A visitor otherwise has to start a featured video manually. Autoplay can make a
          video’s content apparent as it comes into view and reduce that extra action. Use
          it on pages where immediate playback helps explain the content; leave it off
          where automatic motion would distract from reading or where visitors should
          choose when playback begins.
        </p>
        <p>
          Autoplay requires <Link to="/features/mute/">Mute</Link> for the visitor’s
          device. The setting covers YouTube, Vimeo, Odysee, Rumble, local videos, and
          remote video files. Other supported video and audio providers do not appear in
          this autoplay-specific support list.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="autoplay-setup">
        <FeatureGuideHeading
          id="autoplay-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP · FIFU SETTINGS
          </>}
          >
          Choose the pages that should start playback.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open{' '}
              <strong>
                FIFU → FIFU Settings → Video →{' '}
                <Link to="/features/featured-video-audio/">Featured video / audio</Link>
              </strong>
              .
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enable <strong>Autoplay · on single post types</strong> for matching
              featured videos on single post type pages, outside the front page and
              WooCommerce home/shop context.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enable <strong>Autoplay · on homepage</strong> to start videos on the front
              page. When this is on, the nested{' '}
              <strong>play all homepage videos simultaneously</strong> switch appears.
              Enable it to start all homepage videos together, including those outside the
              visible area.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Enable <strong>Autoplay · elsewhere</strong> for matching featured videos on
              other non-front-page locations. This can overlap the single-post setting;
              choose the switches that fit the locations you want covered.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              In the same section, enable <strong>Mute · on desktop</strong>,{' '}
              <strong>Mute · on mobile phone</strong>, or both. Playback checks the Mute
              switch for the visitor’s device.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          The simultaneous homepage option is optional. Use it only when you want every
          homepage video to begin together; loading several videos at once can use more
          network and device resources than starting only the video in view.
        </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="autoplay-controls"
        commands={[
          {
            label: 'Autoplay on single post pages',
            command: 'wp fifu video --autoplay=on',
          },
          {
            label: 'Autoplay on the homepage',
            command: 'wp fifu video --autoplay-front=on',
          },
          {
            label: 'Play all homepage videos together',
            command: 'wp fifu video --autoplay-front-all=on',
          },
          {
            label: 'Autoplay in other locations',
            command: 'wp fifu video --autoplay-else=on',
          },
          {
            label: 'Mute on desktop',
            command: 'wp fifu video --mute-desktop=on',
          },
          {
            label: 'Mute on mobile',
            command: 'wp fifu video --mute-mobile=on',
          },
        ]}
        note="Replace on with off to disable any option. Homepage-wide playback requires homepage autoplay to be enabled. Autoplay needs the appropriate Mute setting."
      />

      <FeatureGuideSection id="autoplay-check" help>
        <FeatureGuideHeading
          id="autoplay-check"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK PLAYBACK
          </>}
          tone="help"
          >
          Verify the device, page, and video type.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>!</span>
            <p>
              If playback does not start, confirm the switch for that page location and
              the matching desktop or mobile Mute setting.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              Confirm the featured media is one of the autoplay-supported types listed
              above. Autoplay is configured in FIFU Settings; this guide’s feature has no
              separate post-editor control.
            </p>
          </li>
          <li>
            <span>i</span>
            <p>
              For playback triggered by pointer hover, see{' '}
              <Link to="/features/autoplay-on-mouseover/">Autoplay on Mouseover</Link>.
              That separate feature responds to pointer entry rather than page visibility.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function MinimumWidthGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Minimum Width"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Keep featured-video thumbnails in narrow layouts by setting the smallest rendered
        width at which FIFU may show the player.
      </p>

      <FeatureGuideHighlight id="minimum-width-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIDEO DISPLAY
          </span>
          <h2 id="minimum-width-intro">Set the width a video needs.</h2>
          <p>
            A small card can leave an embedded player cramped. Set a minimum so narrow
            placements keep their thumbnail, while wider placements can show the video.
            This is useful for responsive grids and optional when every video placement
            already has enough room.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/minimum-width-guide-1.png"
            alt="Set a minimum width, retain a thumbnail in a narrow container, and show a video player in a wider container"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="minimum-width-config-title">
        <FeatureGuideHeading
          id="minimum-width-config-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONFIGURE
          </>}
          >
          Choose a minimum width
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open the FIFU settings screen for{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> and
              locate <strong>Minimum Width</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter a positive whole number of pixels. The default is <strong>100</strong>
              . The change is saved automatically.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              View a page with a featured video at narrow and wide sizes. FIFU checks the
              available width. At or above your value, the video can replace the thumbnail;
              below it, the thumbnail remains.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="minimum-width-rules-title">
        <FeatureGuideHeading
          id="minimum-width-rules-title"
          icon={<>
            <Settings2 size={18} aria-hidden="true" />
          </>}
          kicker={<>
            FINE-TUNE
          </>}
          >
          Adjust the width for your layout
        </FeatureGuideHeading>
        <p>
          If the thumbnail appears instead of a player, try a lower minimum width.
          Increase it to keep thumbnails visible in narrower layouts.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/video-thumbnail/">Video Thumbnail</Link> and <Link to="/features/play-button/">Play Button</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function VideoControlsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Video Controls"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Choose whether FIFU featured video players expose playback controls to visitors.
      </p>

      <FeatureGuideHighlight id="video-controls-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <SlidersHorizontal size={15} aria-hidden="true" /> FEATURED VIDEO PLAYBACK
          </span>
          <h2 id="video-controls-intro">Put playback in your visitors’ hands.</h2>
          <p>
            Enable the site-wide toggle when viewers need to pause or navigate a featured
            video in place. It changes FIFU-generated players; each provider determines
            which controls it can display.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/video-controls-guide-1.png"
            alt="Turn on Video Controls and show playback controls on a featured video"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="video-controls-purpose-title">
        <FeatureGuideHeading
          id="video-controls-purpose-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE THIS SETTING
          </>}
          >
          Match the player to the viewing experience.
        </FeatureGuideHeading>
        <p>
          A video without usable controls can leave visitors unable to pause, seek, or
          adjust playback from your page. Turn controls on when the video is content
          visitors should operate; the player can then expose its supported controls
          without sending viewers elsewhere. Turn them off for a presentation where you
          want fewer player interactions. This is one site-wide preference for FIFU
          featured video players, so it is optional if you do not display those players or
          want to keep their controls available.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-controls-setup-title">
        <FeatureGuideHeading
          id="video-controls-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETUP · WORDPRESS ADMIN
          </>}
          >
          Choose the site-wide behavior.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Video</strong>, then choose the{' '}
              <strong>Featured video / audio</strong> subtab. This settings area also
              configures{' '}
              <Link to="/features/featured-video-audio/">featured video and audio</Link>{' '}
              sources.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn <strong>Video Controls</strong> on when visitors should control playback, or off for fewer player controls. Save the setting.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Check a page that displays a FIFU featured video. The visible result depends
              on whether it is a native video file or an embedded player.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-controls-effects-title">
        <FeatureGuideHeading
          id="video-controls-effects-title"
          icon={<>
            <Play size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PLAYER BEHAVIOR
          </>}
          >
          What on and off mean
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Native video files</dt>
            <dd>
              When on, visitors can use the video file's playback controls. When off, those controls are hidden.
            </dd>
          </div>
          <div>
            <dt>YouTube embeds</dt>
            <dd>
              When off, FIFU asks YouTube to hide playback controls. When on, YouTube can show its available controls.
            </dd>
          </div>
          <div>
            <dt>Vimeo embeds</dt>
            <dd>
              Vimeo manages its own playback controls. To show a silent video without controls, see <Link to="/features/background-video/">Background Video</Link>.
            </dd>
          </div>
          <div>
            <dt>Other embedded players</dt>
            <dd>
              The effect varies by provider. Some players continue to display their own controls even when this setting is off.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
              This setting applies to FIFU featured videos, not videos embedded separately through other plugins or blocks. For supported services, see <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-controls-related-title">
        <FeatureGuideHeading
          id="video-controls-related-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            RELATED PLAYBACK BEHAVIOR
          </>}
          >
          Use it with hover playback
        </FeatureGuideHeading>
        <p>
              Embedded videos using <Link to="/features/autoplay-on-mouseover/">Autoplay on Mouseover</Link> require <strong>Video Controls</strong> and <strong>Mute</strong> to be enabled. Keep playback controls on when visitors need to pause the video.
            </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="video-controls-cli-title"
        commands={[
          {
            label: 'Enable player controls',
            command: 'wp fifu video --controls=on',
          },
          {
            label: 'Disable player controls',
            command: 'wp fifu video --controls=off',
          },
        ]}
      />

      <FeatureGuideSection id="video-controls-help-title" help>
        <FeatureGuideHeading
          id="video-controls-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            LIMITS · TROUBLESHOOTING
          </>}
          tone="help"
          >
          When the player still shows controls
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <p>
              Some video providers manage their own controls. Check the published page and the provider's playback settings.
            </p>
          </li>
          <li>
            <p>
              If you added an embed directly with another block or player, this FIFU
              preference does not configure it. Check that embed’s own player options.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function PlayButtonGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Play Button" className="feature-guide-page">
      <p className="lead">
        Give visitors an on-demand way to play a featured video from its thumbnail.
      </p>

      <FeatureGuideHighlight id="play-button-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Play size={15} aria-hidden="true" /> VIDEO THUMBNAIL PLAYBACK
          </span>
          <h2 id="play-button-intro">Give visitors a clear way to start the video.</h2>
          <p>
            Thumbnails are images and load faster than embedded videos. The overlay keeps
            the image in place until a visitor selects it, then opens playback inline or
            in a lightbox. This can reduce initial player work on pages where visitors may
            skip the video while making playback obvious. Use it when you want on-demand
            viewing; leave it off if you show the player directly or do not want an
            overlay.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/play-button-guide-1.png"
            alt="Configure the play button, select the overlay on a video thumbnail, and view inline playback."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="play-button-requirements-title">
        <FeatureGuideHeading
          id="play-button-requirements-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BEFORE YOU TURN IT ON
          </>}
          >
          Prepare a supported featured video and thumbnail.
        </FeatureGuideHeading>
        <p>
          Turn on <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>{' '}
          first. The play control is added to a recognized video thumbnail, so configure
          the <Link to="/features/video-thumbnail/">Video Thumbnail</Link> display for the
          page types where you want it. Remote videos need a remote featured image; a
          local video needs a thumbnail saved in your Media Library. You can create one by
          choosing a frame in the featured video field and selecting “set this frame as
          thumbnail.”
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>Home</dt>
            <dd>Displays thumbnails on the front page and WooCommerce shop.</dd>
          </div>
          <div>
            <dt>Page</dt>
            <dd>
              Displays on pages, the blog index, archives, and search results; this option
              excludes the static front page.
            </dd>
          </div>
          <div>
            <dt>Post</dt>
            <dd>Displays on individual posts.</dd>
          </div>
          <div>
            <dt>Custom post type</dt>
            <dd>Displays on individual custom post type entries.</dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Supported sources include YouTube, Vimeo, X/Twitter, TikTok, 9GAG, Cloudinary,
          Tumblr, Publitio, JW Player, VideoPress, Sprout, Odysee, Rumble, Dailymotion,
          Cloudflare Stream, Bunny Stream, Amazon, BitChute, Brighteon, Google Drive,
          MEGA, Spotify, SoundCloud, and remote or local video files.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="play-button-setup-title">
        <FeatureGuideHeading
          id="play-button-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP PLAYBACK
          </>}
          >
          Choose how the overlay behaves.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Featured Video / Audio → Featured video / audio</strong>,
              then turn on the video setting if it is not already enabled. Set the{' '}
              <strong>Video Thumbnail</strong> switches for the contexts listed above,
              then find <strong>Play Button</strong> and turn on its toggle.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Choose <strong>mode</strong>: <strong>inline</strong> replaces the thumbnail
              with the player on the page; <strong>lightbox</strong> opens playback in an
              overlay. Select a visible video thumbnail on your site to confirm the
              behavior.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Each toggle or changed value saves separately; wait for the{' '}
          <strong>Success</strong> message before leaving the settings screen.
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>color</dt>
            <dd>Sets the play control’s hover background color.</dd>
          </div>
          <div>
            <dt>size</dt>
            <dd>
              Changes the size of the play icon so it stays visible over thumbnails.
            </dd>
          </div>
          <div>
            <dt>z-index</dt>
            <dd>
              Sets the thumbnail wrapper’s stacking level when another page element
              overlaps it.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="play-button-grid-title">
        <FeatureGuideHeading
          id="play-button-grid-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL · GRID DISPLAY
          </>}
          >
          Choose where the overlay is hidden.
        </FeatureGuideHeading>
        <p>
          Under <strong>Hide from grid</strong>, enable <strong>WordPress</strong> to hide
          the overlay on the blog home, archives, and search results. Enable{' '}
          <strong>WooCommerce</strong> to hide it on shop and product category pages.
          These switches hide the play button, not the featured video thumbnail itself.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="play-button-availability-title" help>
        <FeatureGuideHeading
          id="play-button-availability-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF THE BUTTON DOES NOT APPEAR
          </>}
          tone="help"
          >
          Check these display conditions.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Video and thumbnail:</strong> the video setting and Play Button toggle
            must be on, the video URL must resolve, and the video must be displayed as a
            thumbnail on that page type.
          </li>
          <li>
            <strong>Minimum width:</strong> the thumbnail must meet the configured minimum
            width (default <code>100</code> pixels). In{' '}
            <strong>FIFU → Featured Video / Audio</strong>, adjust{' '}
            <Link to="/features/minimum-width/">Minimum Width</Link> if the layout is
            intentionally narrower.
          </li>
          <li>
            <strong>Hidden media:</strong> if featured media is hidden for the current
            page, the play overlay is skipped too.
          </li>
          
          
          <li>
            <strong>Grid switches:</strong> confirm that WordPress or WooCommerce hiding
            is not enabled for the page you are checking.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

            <FeatureCliSection
        id="play-button-cli-title"
        commands={[
          {
            label: 'Enable the play button',
            command: 'wp fifu video --play=on',
          },
          {
            label: 'Open videos in a lightbox',
            command: 'wp fifu video --play-mode=lightbox',
            description: 'Use inline instead of lightbox to play in place.',
          },
          {
            label: 'Change the hover color',
            command: 'wp fifu video --play-color=blue',
            description: 'Replace blue with your preferred color.',
          },
          {
            label: 'Set play-button size',
            command: 'wp fifu video --play-size=24',
            description: 'Adjust the example size in pixels.',
          },
          {
            label: 'Adjust stacking order',
            command: 'wp fifu video --play-zindex=10',
            description: 'Adjust the stacking order for your theme.',
          },
          {
            label: 'Hide the button in WordPress grids',
            command: 'wp fifu video --play-hide=on',
          },
          {
            label: 'Hide the button in WooCommerce grids',
            command: 'wp fifu video --play-hide-wc=on',
          },
        ]}
        note="Use off instead of on to disable a switch. Adjust example colors and numbers to suit your layout."
      />

      <FeatureGuideCta />
    </Page>
  );
}

function VideoThumbnailGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Video Thumbnail"
      className="feature-guide-page"
    >
      <p className="lead">
        Display a video’s thumbnail instead of loading its player
        immediately, with separate settings for page types, a play button,
        and minimum video width.
      </p>

      <FeatureGuideHighlight id="video-thumbnail-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIDEO THUMBNAILS
          </span>
          <h2 id="video-thumbnail-intro">Show an image before the video.</h2>
          <p>
            Video embeds can make a page heavier to load, especially
            when many posts or products appear together. FIFU can
            display each video’s preview image first, without
            replacing it with an embedded player on the page types
            you select. An optional play button lets visitors
            start watching when they choose.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/video-thumbnail-guide-1.png"
            alt="Create a video still, choose where thumbnails remain visible, and let visitors select the preview to load playback"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="video-thumbnail-source-title">
        <FeatureGuideHeading
          id="video-thumbnail-source-title"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FIRST, SET THE VIDEO
          </>}
          >
          Give your video a thumbnail.
        </FeatureGuideHeading>
        <p>
          Enable <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>{' '}
          and save a supported video URL on a post, page, or product.
          Video Thumbnail controls how this media is displayed;
          it does not create a video or enable the Featured Video
          field by itself.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Recognized video services</dt>
            <dd>
              FIFU can retrieve a preview image from many supported
              video services, including YouTube and Vimeo. The
              source must be accessible, and not every provider
              or URL guarantees a usable thumbnail. For the
              complete service list, see{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
            </dd>
          </div>
          <div>
            <dt>Videos in your WordPress Media Library</dt>
            <dd>
              In the FIFU Featured video panel, preview the file,
              move to the frame you want, and choose{' '}
              <strong>Set frame as thumbnail</strong>. Save or update
              the content to store the captured image in
              the Media Library.
            </dd>
          </div>
          <div>
            <dt>Direct remote video files</dt>
            <dd>
              When FIFU cannot retrieve a thumbnail automatically,
              supply a remote image URL in the{' '}
              <strong>Thumbnail URL</strong> field when it appears
              for a custom video. Keep the video and image URLs
              reachable by site visitors.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
              When importing video thumbnails, use the field mappings described in the <Link to="/features/wp-all-import-add-on/">WP All Import add-on</Link> guide rather than putting import values in the editor's video field.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-thumbnail-contexts-title">
        <FeatureGuideHeading
          id="video-thumbnail-contexts-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            VIDEO THUMBNAIL SETTINGS
          </>}
          >
          Choose where to show the image.
        </FeatureGuideHeading>
        <p>
          In WordPress, open <strong>FIFU → Settings → Video</strong>
          and find the separate <strong>Video Thumbnail</strong>{' '}
          settings section, below <strong>Featured video / audio</strong>.
          Enable the switches that match the locations where
          you want to keep the thumbnail instead of replacing
          it with the video player:
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>on homepage</dt>
            <dd>
              The site's front page and, with WooCommerce,
              the main shop page.
            </dd>
          </div>
          <div>
            <dt>on other pages</dt>
            <dd>
              Other pages, the posts index, archive listings,
              and search results, excluding the front page.
            </dd>
          </div>
          <div>
            <dt>on posts</dt>
            <dd>Single standard WordPress posts.</dd>
          </div>
          <div>
            <dt>on custom post types</dt>
            <dd>
              Single pages for custom post types, such as
              individual WooCommerce products where applicable.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Each switch is independent. Check the front page,
          an archive, and a single post or product after
          changing the settings. Contexts you leave disabled
          may show the embedded video instead of its image,
          depending on the video and theme.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-thumbnail-play-title">
        <FeatureGuideHeading
          id="video-thumbnail-play-title"
          icon={<>
            <Play size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL PLAY BUTTON
          </>}
          >
          Let visitors start the video.
        </FeatureGuideHeading>
        <p>
          <strong>Video Thumbnail</strong> and{' '}
          <Link to="/features/play-button/">Play Button</Link> are different
          features. Showing a thumbnail does not automatically
          mean an on-image play button will appear. To offer
          an obvious way to watch, open{' '}
          <strong>FIFU → Settings → Video → Play Button</strong>{' '}
          and enable it. See the Play Button guide for
          its full set of display and playback options.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Mode: Inline or Lightbox</dt>
            <dd>
              <strong>Inline</strong> replaces the preview
              with playback in the page. <strong>Lightbox</strong>{' '}
              opens playback in an overlay. Choose the mode
              that works best with your theme.
            </dd>
          </div>
          <div>
            <dt>Color and Size</dt>
            <dd>
              Adjust the appearance of the play button
              to make it visible against your thumbnails.
            </dd>
          </div>
          <div>
            <dt>Z-index</dt>
            <dd>
              Adjust the button's stacking order if a theme
              overlays other elements on the thumbnail.
            </dd>
          </div>
          <div>
            <dt>Hide from grid: WordPress / WooCommerce</dt>
            <dd>
              Use the separate options to suppress the
              play-button overlay on WordPress content grids
              or WooCommerce shop/category grids.
              The underlying thumbnail can still appear.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          On the same Video settings page,{' '}
          <Link to="/features/minimum-width/">Minimum Width</Link>{' '}
          can keep a thumbnail in a narrow container instead
          of displaying a player there. It is a separate
          sizing rule and does not replace the four
          page-context switches.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-thumbnail-help-title" help>
        <FeatureGuideHeading
          id="video-thumbnail-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the thumbnail or playback is missing.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No thumbnail:</strong> Verify the video
            URL and check whether FIFU found a provider image.
            For a direct remote file, provide a thumbnail
            URL; for a Media Library video, capture a frame
            and save the content.
          </li>
          <li>
            <strong>A video player appears immediately:</strong>{' '}
            Check the <strong>Video Thumbnail</strong> switch
            for that page type.{' '}
            <Link to="/features/autoplay/">Autoplay</Link> or{' '}
            <Link to="/features/background-video/">Background Video</Link>{' '}
            can override the thumbnail-first behavior.
          </li>
          <li>
            <strong>No play button:</strong> Enable the{' '}
            <Link to="/features/play-button/">Play Button</Link> feature,
            then check its <strong>Hide from grid</strong> options.
            Some thumbnail types or theme layouts may not
            use a separate overlay button.
          </li>
          <li>
            <strong>The thumbnail is visible but playback fails:</strong>{' '}
            Try the original video URL. The source must allow
            playback or embedding, and the browser must support
            the file format. Check Inline versus Lightbox mode.
          </li>
          <li>
            <strong>Different results across pages:</strong>{' '}
            Front page, archives, individual posts, and
            custom post types have separate rules. Test
            the published page, not just the editor preview.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function TaxonomyImageGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Taxonomy Image"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Add an image URL to each taxonomy term, then display it in term-aware content or
        taxonomy archives.
      </p>

      <FeatureGuideHighlight id="taxonomy-image-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Tags size={15} aria-hidden="true" /> TERM IMAGES
          </span>
          <h2 id="taxonomy-image-intro">
            Give categories and other terms their own image.
          </h2>
          <p>
            A term image fills a gap WordPress does not cover with its post featured-image
            field: categories and other taxonomy terms can carry their own visual. Store
            one remote image URL with each term, then reuse it in archive descriptions or
            inside posts. This helps you give term-based pages a consistent visual without
            uploading a separate copy to your Media Library.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/taxonomy-image-guide-1.png"
            alt="Add an image URL to a taxonomy term and display the saved image on its archive"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="taxonomy-image-enable">
        <FeatureGuideHeading
          id="taxonomy-image-enable"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE THE TERM FIELDS
          </>}
          >
          Turn on Taxonomy Image.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Developers</strong> and enable{' '}
              <strong>Taxonomy Image</strong>. This adds the image fields to taxonomy term
              add and edit screens.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For WooCommerce product categories, use the separate product-category editor
              fields. The general taxonomy fields deliberately skip that taxonomy. In its
              FIFU media selector, choose <strong>Featured image</strong>; if the selector
              is set to <strong>Featured video</strong>, switch it back to the image
              option. The video choice appears only when video support is enabled; see{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="taxonomy-image-assign">
        <FeatureGuideHeading
          id="taxonomy-image-assign"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ASSIGN AN IMAGE
          </>}
          >
          Save a URL with each term.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open the term screen for a taxonomy, then add a term or edit an existing
              one. Product categories have their own editor screen.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter the remote image address in <strong>Image URL</strong> and select{' '}
              <strong>Preview</strong> to check it. The preview control appears when no
              image URL is already saved.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Optionally enter <strong>Alternative text</strong>, then save the term.
              Clear the URL and save to remove the image.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="taxonomy-image-display">
        <FeatureGuideHeading
          id="taxonomy-image-display"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            DISPLAY THE IMAGE
          </>}
          >
          Choose an archive or shortcode output.
        </FeatureGuideHeading>
        <p>
              FIFU can display term images in taxonomy archive descriptions. WooCommerce product categories use their own image integration.
            </p>
        <p>
          To place images for a post’s assigned terms in content, use the{' '}
          <code>[fifu_taxonomy]</code> shortcode inside the post loop. The{' '}
          <Link to="/features/fifu-shortcode/">FIFU Shortcode guide</Link> covers the
          other available shortcode outputs:
        </p>
        <pre>
          <code>{'[fifu_taxonomy slug="category" width="150" height="100"]'}</code>
        </pre>
        <FeatureGuideOptions>
          <div>
            <dt>
              <code>slug</code>
            </dt>
            <dd>
              Required. Use the taxonomy name, such as <code>category</code>. The
              shortcode outputs an image for each assigned term in that taxonomy that has
              an image URL.
            </dd>
          </div>
          <div>
            <dt>
              <code>width</code> and <code>height</code>
            </dt>
            <dd>
              Optional image width and height. See <Link to="/features/optimized-images/">Optimized Images</Link> for image sizing options.
            </dd>
          </div>
          <div>
            <dt>
              <code>style</code>
            </dt>
            <dd>Optional inline style attribute for the rendered image.</dd>
          </div>
        </FeatureGuideOptions>
        <p>
              Use the shortcode with a valid taxonomy name on a post that has terms with images.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="taxonomy-image-coverage" help>
        <FeatureGuideHeading
          id="taxonomy-image-coverage"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE AND CHECKS
          </>}
          tone="help"
          >
          Check the taxonomy, saved URL, and output location.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Fields are missing:</strong> enable Taxonomy Image in the Developers
            settings. Standard term fields exclude WooCommerce product categories, which
            have a dedicated integration.
          </li>
          <li>
            <strong>The shortcode shows no image:</strong> confirm the feature is enabled,
            the shortcode is inside the post loop, the post has a term for the supplied
            taxonomy name, and that term has an image URL.
          </li>
          <li>
            <strong>Automatic integration:</strong> Taxonomy Image is also integrated with
            Variation Swatches for WooCommerce. The term fields and shortcode remain
            available for other taxonomies and themes.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function ImageSeoGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Image SEO" className="feature-guide-page">
      <p className="lead">
        Add useful alternative text to a FIFU featured image; FIFU carries image URLs into
        page markup, social metadata, and supported structured data.
      </p>

      <FeatureGuideHighlight id="image-seo-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <FileImage size={15} aria-hidden="true" /> IMAGE DESCRIPTION & DISCOVERY
          </span>
          <h2 id="image-seo-intro">Give images context wherever they appear.</h2>
          <p>
            Remote FIFU images are not ordinary local uploads with complete attachment
            metadata. Add a meaningful description once, and FIFU can expose it as image
            alt text while supplying the image URL to supported search and sharing
            metadata.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/image-seo-guide-1.png"
            alt="Enter alternative text for a featured image, then use the image and its URL in page metadata and structured data."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="image-seo-purpose-title">
        <FeatureGuideHeading
          id="image-seo-purpose-title"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE IT
          </>}
          >
          Describe remote images and make their URLs discoverable.
        </FeatureGuideHeading>
        <p>
              Add descriptive alternative text to help visitors using screen readers understand the image. FIFU can also make the featured image available to supported search and social-sharing tools.
            </p>
        <p>
          Use this when you set featured media through FIFU and want descriptive image
          markup or image metadata on singular content pages. It is optional if your theme
          or SEO setup already supplies the right description and image data, or if your
          content has no FIFU image.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="image-seo-alt-title">
        <FeatureGuideHeading
          id="image-seo-alt-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONTENT EDITOR
          </>}
          >
          Set alternative text for the featured image.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Edit the post, page, or product and open the FIFU{' '}
              <strong>Featured media</strong> panel. Select{' '}
              <strong>Featured image</strong> and enter or choose its image URL.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter a concise description in the <strong>Alternative text</strong> field
              and save or update the content. Describe what the image communicates in this
              context.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              If you leave the field empty, FIFU uses the post title as the featured image
              alt text. Add your own text when the title does not describe the image well.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
              A slider image can use its own alternative text when one is provided.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="image-seo-output-title">
        <FeatureGuideHeading
          id="image-seo-output-title"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FRONTEND OUTPUT
          </>}
          >
          Know which metadata FIFU supplies.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Image alt text</dt>
            <dd>
              FIFU uses your image description as alternative text. If it is empty, the post title is used instead.
            </dd>
          </div>
          <div>
            <dt>Structured data</dt>
            <dd>
              FIFU shares available featured images with supported SEO plugins and structured data, including slider images where applicable.
            </dd>
          </div>
          <div>
            <dt>Yoast social previews</dt>
            <dd>
              FIFU can supply featured images for Yoast SEO social previews. If you choose a custom social image in Yoast SEO, that image takes priority.
            </dd>
          </div>
          <div>
            <dt>Rank Math</dt>
            <dd>
              FIFU supports Rank Math's social images and image sitemaps, including optimized FIFU image URLs when enabled.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="image-seo-check-title" help>
        <FeatureGuideHeading
          id="image-seo-check-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK OUTPUT
          </>}
          tone="help"
          >
          If image data is missing
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No description:</strong> confirm the content has a FIFU featured
            image, enter text in its <strong>Alternative text</strong> field, then save.
            An empty value falls back to the post title.
          </li>
          <li>
            <strong>No structured image data:</strong> FIFU needs image URLs and handles
            singular content pages. An active SEO plugin can own the schema graph; verify
            that its integration is active and that the page has an image URL.
          </li>
          
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/image-metadata/">Image Metadata</Link>, <Link to="/features/remote-featured-image/">Remote Featured Image</Link> and <Link to="/features/featured-images-in-rss-feeds/">Featured Images in RSS Feeds</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function ScheduleMetadataGenerationGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Schedule Metadata Generation"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Run a recurring check for FIFU image URLs added through custom workflows that have
        not received their required WordPress metadata.
      </p>

      <FeatureGuideHighlight id="schedule-metadata-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <RefreshCw size={15} aria-hidden="true" /> REPAIR NONSTANDARD URL WORKFLOWS
          </span>
          <h2 id="schedule-metadata-intro">Let a recurring check fill metadata gaps.</h2>
          <p>
            FIFU can create the records it needs when an image URL is saved through its
            usual workflows. If another tool writes FIFU URLs directly, scheduled
            generation checks for missing records and can make those images available to
            WordPress features that depend on them.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/schedule-metadata-generation-guide-1.png"
            alt="A saved FIFU image URL is checked by the schedule and receives its missing metadata record."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="schedule-metadata-purpose-title">
        <FeatureGuideHeading
          id="schedule-metadata-purpose-title"
          icon={<>
            <Database size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Use it when another process saves FIFU URLs.
        </FeatureGuideHeading>
        <p>
          Without the metadata records, a remote image URL added outside FIFU’s normal
          path may not display to visitors or work with WordPress components that expect
          an image record. A recurring scan can find these gaps across posts and terms,
          reducing the need to run a manual repair after each external update. Use the
          separate <Link to="/features/image-metadata/">Image Metadata</Link> action when
          you want to start a generation pass yourself. If your URLs always enter through
          FIFU’s normal editor or import workflow, this schedule is optional.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="schedule-metadata-setup-title">
        <FeatureGuideHeading
          id="schedule-metadata-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            TURN ON THE SCHEDULE
          </>}
          >
          Enable the recurring check.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Metadata</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Schedule Metadata Generation</strong> to check for missing media data automatically.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Leave the toggle on while external workflows may add FIFU URLs. The job
              checks every minute for missing metadata on post and term records.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="schedule-metadata-controls-title">
        <FeatureGuideHeading
          id="schedule-metadata-controls-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONTROL AND SCOPE
          </>}
          >
          One toggle controls the recurring job.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Schedule Metadata Generation</dt>
            <dd>
              Turns recurring generation on or off. There is no interval field; runs are
              scheduled every minute.
            </dd>
          </div>
          <div>
            <dt>What it checks</dt>
            <dd>
              Checks posts, products, and categories that have FIFU media but are missing the data WordPress needs to display it.
            </dd>
          </div>
          
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureCliSection
        id="schedule-metadata-cli"
        commands={[
          {
            label: 'Enable scheduled metadata generation',
            command: 'wp fifu schedule on',
          },
          {
            label: 'Disable scheduled metadata generation',
            command: 'wp fifu schedule off',
          },
        ]}
      />

      <FeatureGuideSection id="schedule-metadata-troubleshooting-title" help>
        <FeatureGuideHeading
          id="schedule-metadata-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF AN IMAGE STILL DOES NOT DISPLAY
          </>}
          tone="help"
          >
          Check the saved URL and job conditions.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>The expected image is not picked up:</strong> confirm the FIFU URL is
            saved on the intended post or term. The scan only finds FIFU media records
            with missing metadata.
          </li>
          
          <li>
            <strong>The record exists but the image is still broken:</strong> this job
            creates missing metadata; it does not correct an invalid URL or make an
            unreachable image host available.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/clear-metadata/">Clear Metadata</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}

function ImageMetadataGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Image Metadata"
      className="feature-guide-page"
    >
      <p className="lead">
        Create the missing WordPress attachment records that let themes and other
        components work with your saved remote FIFU media.
      </p>

      <FeatureGuideHighlight id="image-metadata-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Database size={15} aria-hidden="true" /> REPAIR MISSING RECORDS
          </span>
          <h2 id="image-metadata-intro">Keep remote images usable in WordPress.</h2>
          <p>
            A saved FIFU URL does not always provide the attachment records some WordPress
            components expect. This pass fills those gaps while the image stays at its
            remote address.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/image-metadata-guide-1.png"
            alt="A post with a remote image URL receives missing attachment metadata after you start the FIFU generation pass."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="image-metadata-use-title">
        <FeatureGuideHeading
          id="image-metadata-use-title"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY RUN A PASS
          </>}
          >
          Use it when remote media lacks WordPress records.
        </FeatureGuideHeading>
        <p>
          Some themes and integrations look for a WordPress attachment even when FIFU
          stores the image URL remotely. Generating the missing records can restore
          compatibility without copying the image into your Media Library. Run a manual
          pass after URLs were added through a process that did not prepare metadata, or
          when remote media is saved but a component that relies on attachments cannot use
          it. If the images already work and no records are missing, you can leave the
          one-time pass unused; FIFU's normal save and import flows may have prepared them
          already.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="image-metadata-workflow-title">
        <FeatureGuideHeading
          id="image-metadata-workflow-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ONE-TIME GENERATION
          </>}
          >
          Start the missing-records queue.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Metadata</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Under <strong>Image Metadata</strong>, turn on{' '}
              <strong>generate the missing metadata now</strong>. FIFU finds records that
              are still missing and begins processing them in batches; progress appears
              beside the section title.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Keep the page open to follow the progress. Turn the control off to pause the
              queued work, then turn it on again to resume. The pass is complete when
              progress reaches 100%.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Starting this manual run turns off{' '}
          <Link to="/features/schedule-metadata-generation/">
            Schedule Metadata Generation
          </Link>{' '}
          if it is active. Re-enable that schedule afterward if you still need recurring
          checks for URLs added outside the usual FIFU workflow.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="image-metadata-coverage-title">
        <FeatureGuideHeading
          id="image-metadata-coverage-title"
          icon={<>
            <Database size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT IT CHECKS
          </>}
          >
          The queue covers FIFU media on posts, products, and terms.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Posts and post types</dt>
            <dd>
              Checks remote FIFU images, videos, and sliders when WordPress still needs image information for them.
            </dd>
          </div>
          <div>
            <dt>WooCommerce products</dt>
            <dd>
              Product image, video, slider, and gallery media that still need
              corresponding attachment records.
            </dd>
          </div>
          <div>
            <dt>Terms and categories</dt>
            <dd>
              FIFU image and video URLs without an existing thumbnail or completed
              metadata marker.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
              FIFU only generates missing information. Existing images are left alone.
            </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="image-metadata-controls-title"
        commands={[
          {
            label: 'Generate missing metadata',
            command: 'wp fifu metadata on',
          },
          {
            label: 'Stop metadata generation',
            command: 'wp fifu metadata off',
          },
        ]}
      />

      <FeatureGuideSection id="image-metadata-recovery-title" help>
        <FeatureGuideHeading
          id="image-metadata-recovery-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF THE IMAGE STILL FAILS
          </>}
          tone="help"
          >
          Check the saved address and queue state.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>The image remains unavailable:</strong> confirm the post, product, or
            term has the intended FIFU URL and that the remote address is reachable. This
            job creates records; it cannot correct an invalid URL or restore an
            unavailable image host.
          </li>
          <li>
            <strong>You add URLs repeatedly outside FIFU:</strong>{' '}
            <Link to="/features/schedule-metadata-generation/">
              Schedule Metadata Generation
            </Link>{' '}
            checks for missing records automatically every minute.
          </li>
          <li>
            <strong>You want to remove generated records:</strong> turning generation off
            only pauses it; existing records remain.{' '}
            <Link to="/features/clear-metadata/">Clear Metadata</Link> removes
            FIFU-generated records but keeps saved URLs. Run this guide's pass again if
            you continue using remote FIFU media and need those records rebuilt.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function AutoSetFeaturedMediaGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set featured media from post content"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Set the first eligible image or video in a post’s saved content as its featured
        media, automatically.
      </p>

      <FeatureGuideHighlight id="auto-content-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <FileImage size={15} aria-hidden="true" /> POST CONTENT SCAN
          </span>
          <h2 id="auto-content-intro">Make content media the featured media.</h2>
          <p>
            Posts often contain the image or video you want to feature, but assigning it
            by hand adds a separate editing step. This scan reuses the first eligible item
            already in saved content, helping keep featured media aligned without another
            URL entry. Use it when your content already includes its intended media; leave
            it off when you choose featured media separately or content order should not
            decide.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-featured-media-from-post-content-guide-1.png"
            alt="Post content with image and video, the Auto set control, and the first eligible image assigned as featured media"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="auto-content-enable-title">
        <FeatureGuideHeading
          id="auto-content-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE THE AUTOMATION
          </>}
          >
          Turn it on for new or edited posts.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Auto</strong> and find{' '}
              <strong>Auto set featured media from post content</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In <strong>Auto set</strong>, switch on{' '}
              <strong>auto set featured media from post content</strong>. When you create
              or update a post, FIFU reads its saved content and selects the first
              eligible media item.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save a post that contains an image or video. The selected item becomes that
              post’s featured media. Use <strong>Run it for all posts</strong> to apply
              the current settings to existing content; it processes each post once, and
              you can switch it on again to repeat.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="auto-content-filters-title">
        <FeatureGuideHeading
          id="auto-content-filters-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONTROL WHAT QUALIFIES
          </>}
          >
          Set filters for the content scan.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Filter by post type</dt>
            <dd>
              Enter comma-separated post type names, such as{' '}
              <code>post,page,product</code>. The field is initially configured for{' '}
              <code>post</code>; the post types found on your site are listed beside it.
            </dd>
          </div>
          <div>
            <dt>Filter by media type</dt>
            <dd>
              <strong>Image</strong> selects the first eligible image.{' '}
              <strong>Video</strong> selects the first eligible supported video.{' '}
              <strong>All</strong> checks images and videos in content order. Video
              assignment also requires{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> to
              be enabled.
            </dd>
          </div>
          <div>
            <dt>Filter by source</dt>
            <dd>
              Enter comma-separated keywords. A media tag containing one of those strings
              is skipped, so a later eligible item may be selected.
            </dd>
          </div>
          <div>
            <dt>Overwrite the existing featured media</dt>
            <dd>
              Enable this when the content item should replace an existing FIFU featured
              item. A local WordPress featured image prevents automatic replacement.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="auto-content-limits-title" help>
        <FeatureGuideHeading
          id="auto-content-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF NOTHING CHANGES
          </>}
          tone="help"
          >
          Check the candidate and save path.
        </FeatureGuideHeading>
        <p>
              FIFU looks through your saved post content for supported images and videos, then chooses the first eligible item. Use the source filters to skip media you do not want to feature.
            </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/auto-set-featured-media-from-custom-field/">Auto set featured media from custom field</Link> and <Link to="/features/auto-set-featured-media-using-web-page-address/">Auto set featured media using web page address</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function AutoSetScreenshotGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set screenshot as featured image"
      className="feature-guide-page"
    >
      <p className="lead">
        Turn saved page addresses into featured screenshots automatically when a post has
        no featured media.
      </p>

      <FeatureGuideHighlight id="screenshot-feature-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> AUTOMATIC SCREENSHOTS
          </span>
          <h2 id="screenshot-feature-purpose">
            Fill missing featured images from page URLs.
          </h2>
          <p>
            When your posts already store the page they refer to, the saved address can
            produce a screenshot stored as FIFU media. This helps you cover link-based
            posts without creating or attaching an image by hand. Use the feature when
            those posts need a visual preview; leave it off when you assign every image
            yourself.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-screenshot-as-featured-image-guide-1.png"
            alt="A saved page URL flows through the screenshot setting and becomes a post’s featured image"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="screenshot-feature-setup">
        <FeatureGuideHeading
          id="screenshot-feature-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP
          </>}
          >
          Connect the page URL field.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Automatic</strong> and locate{' '}
              <strong>Auto set screenshot as featured image</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Open <strong>Custom field</strong> and enter the exact key that stores each
              post’s page address. If you store URLs under multiple keys, enter the keys
              separated by commas.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Under <strong>Auto set</strong>, switch the feature on. Under{' '}
              <strong>Size</strong>, optionally enter dimensions such as{' '}
              <code>1280x960</code>. Changing the field and size inputs saves them
              automatically. Turning on <strong>Auto set</strong> registers the scheduled
              check.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              FIFU creates a screenshot from the saved page address and uses it as featured media when the post has no featured image or video.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="screenshot-feature-coverage" help>
        <FeatureGuideHeading
          id="screenshot-feature-coverage"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            RESULTS AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Know which posts are eligible.
        </FeatureGuideHeading>
        <p>
              FIFU leaves existing featured media alone. Screenshots remain remote unless you choose to save them in the <Link to="/features/save-in-the-media-library/">Media Library</Link>.
            </p>
        <FeatureGuideOptions>
          <div>
            <dt>Size</dt>
            <dd>
              Enter dimensions such as <code>1280x960</code>, or leave the size empty to use the default.
            </dd>
          </div>
          <div>
            <dt>No screenshot yet</dt>
            <dd>
              Check that the field key matches the saved custom field and that the value
              starts with <code>http</code>. If the preview says “Generating Preview,” the
              image is being generated; save the post, wait a few seconds, then refresh.
            </dd>
          </div>
          <div>
            <dt>One post at a time</dt>
            <dd>
              In the post editor, <strong>Use screenshot</strong> lets you create a screenshot from a page address without setting up the automatic custom-field workflow.
            </dd>
          </div>
        </FeatureGuideOptions>
        
      </FeatureGuideSection>

      <FeatureCliSection
        id="screenshot-cli"
        commands={[
          {
            label: 'Enable automatic screenshots',
            command: 'wp fifu screenshot on',
          },
          {
            label: 'Disable automatic screenshots',
            command: 'wp fifu screenshot off',
          },
          {
            label: 'Choose the source field',
            command: 'wp fifu screenshot --field=meta_key',
            description: 'Replace meta_key with your custom field name.',
          },
          {
            label: 'Set screenshot dimensions',
            command: 'wp fifu screenshot --size=1280x960',
          },
        ]}
      />

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function PageRedirectionGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Page Redirection"
      className="feature-guide-page"
    >
      <p className="lead">
        Choose where a visitor goes when they click a post’s featured image; the post
        itself remains on your site.
      </p>

      <FeatureGuideHighlight id="page-redirection-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ExternalLink size={15} aria-hidden="true" /> FEATURED IMAGE DESTINATION
          </span>
          <h2 id="page-redirection-intro">Give the image its own destination.</h2>
          <p>
            Add a forwarding URL to the content item and its featured image becomes a link
            that opens the destination in a new tab. Use this when the page should remain
            on your site while its image sends visitors to a campaign, partner, or related
            page.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/page-redirection-guide-1.png"
            alt="Enter and save a forwarding URL, then open it by clicking the page’s featured image"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="page-redirection-enable-title">
        <FeatureGuideHeading
          id="page-redirection-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE THE FIELD
          </>}
          >
          Turn on Page redirection.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Image</strong> and find
              <strong> Page redirection (forwarding URL)</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on the setting. The <strong>Page redirection</strong> editor panel then
              appears on supported content items.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-redirection-destination-title">
        <FeatureGuideHeading
          id="page-redirection-destination-title"
          icon={<>
            <ExternalLink size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET AND SAVE
          </>}
          >
          Add the destination to your content.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Edit the post, page, or supported content item. In its
              <strong> Page redirection</strong> panel, enter the destination in the
              <strong> Forwarding URL</strong> field. For example,
              <code>https://example.com</code> is a destination URL.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Save or update the content. The URL is stored with that item as
              <code>fifu_redirection_url</code>. Clear the field and save to remove its
              forwarding URL.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              On that item’s public page, clicking the featured image opens the saved
              destination in a new tab. The content page itself is not redirected.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-redirection-coverage-title">
        <FeatureGuideHeading
          id="page-redirection-coverage-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE
          </>}
          >
          Where the field appears
        </FeatureGuideHeading>
        <p>
              This feature is available for supported posts, pages, and bbPress content. It does not apply to WooCommerce products.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-redirection-troubleshooting-title" help>
        <FeatureGuideHeading
          id="page-redirection-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK THE RESULT
          </>}
          tone="help"
          >
          If the image does not open the destination
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>!</span>
            <p>
              Confirm the global setting is on and the content item has a saved forwarding
              URL.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              Test the item’s own page. Forwarding does not run on the front page or the
              posts index.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              Check that the item has a featured image. The destination link is attached
              to the matching featured image in the page markup.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link> and <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function DisableRightClickGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Disable right-click"
      className="feature-guide-page"
    >
      <p className="lead">
        Enable one Image setting to suppress the browser context menu on images across your site.
      </p>

      <FeatureGuideHighlight id="disable-right-click-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MousePointerClick size={15} aria-hidden="true" /> IMAGE CONTEXT MENU
          </span>
          <h2 id="disable-right-click-intro">Make casual image saving less direct.</h2>
          <p>
            Use this to deter casual copying or saving through the browser’s image menu. The setting suppresses that menu on every frontend image, including images FIFU does not manage, adding friction without securing the image file. Leave it off when visitors need the menu or when you need stronger protection.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/disable-right-click-guide-1.png"
            alt="A site image, the Disable right-click setting switched on, and the image shown without a browser context menu."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="disable-right-click-setup">
        <FeatureGuideHeading
          id="disable-right-click-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP
          </>}
          >
          Turn on the site-wide setting.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>In WordPress admin, open <strong>FIFU → Settings → Image</strong>.</p>
          </li>
          <li>
            <span>2</span>
            <p>Find <strong>Disable right-click</strong> and switch it on. The setting applies to all frontend image elements, including images that FIFU does not manage.</p>
          </li>
          <li>
            <span>3</span>
            <p>Open a public page and right-click an image to confirm that its browser context menu no longer opens.</p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

            <FeatureCliSection
        id="disable-right-click-cli"
        commands={[
          {
            label: 'Disable right-click on images',
            command: 'wp fifu image --block=on',
          },
          {
            label: 'Allow right-click again',
            command: 'wp fifu image --block=off',
          },
        ]}
      />

      <FeatureGuideSection id="disable-right-click-scope" help>
        <FeatureGuideHeading
          id="disable-right-click-scope"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            SCOPE AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Know what the setting affects.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li><strong>Only image menus are suppressed.</strong> The handler targets frontend <code>&lt;img&gt;</code> elements; right-clicking page text or a background is outside its scope.</li>
          <li><strong>This is a deterrent, not access control.</strong> Visitors may still obtain an image through other browser or network tools.</li>
          <li><strong>If the menu still appears,</strong> confirm the setting is on and test the image itself on a public page rather than in the admin editor.</li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/hotlink-protection/">Hotlink protection</Link> and <Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}
function AutoSetFeaturedMediaByPageGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set featured media using web page address"
      className="feature-guide-page"
    >
      <p className="lead">
        Save a source page address on a content item, and FIFU can find its featured media automatically.
      </p>

      <FeatureGuideHighlight id="page-finder-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Search size={15} aria-hidden="true" /> AUTOMATIC MEDIA ASSIGNMENT
          </span>
          <h2 id="page-finder-purpose">Use the page you already have as the media source.</h2>
          <p>
            If you know the article or product page but not its image file address, save the page URL and let the scheduled finder retrieve its media. This can cut down manual image hunting and repeated URL entry when you publish or import content. Use it when a source page contains the image you want; skip it when another workflow already assigns the right media.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-featured-media-using-web-page-address-guide-1.png"
            alt="A saved Web page URL leads to the same product image featured on a post"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="page-finder-enable">
        <FeatureGuideHeading
          id="page-finder-enable"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE THE SCHEDULED SEARCH
          </>}
          >
          Turn on page-based media lookup.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li><span>1</span><p>In WordPress admin, open <strong>FIFU → Settings → Automatic</strong>, then find <strong>Auto set featured media using web page address</strong>.</p></li>
          <li><span>2</span><p>On <strong>Auto set</strong>, enable <strong>auto set featured media using web page address</strong>. The scheduled finder checks about once a minute for eligible content without FIFU featured media.</p></li>
          <li><span>3</span><p>Leave <strong>look for embedded videos</strong> off to search for an image only. Turn it on if you also want the first embedded video found to be assigned as featured video; the <Link to="/features/featured-video-audio/">Featured Video / Audio guide</Link> explains how FIFU displays that media.</p></li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-finder-source">
        <FeatureGuideHeading
          id="page-finder-source"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ADD A SOURCE PAGE
          </>}
          >
          Save the page address with each item.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open the post, page, product, or other content item in its editor. In the FIFU <strong>Media finder</strong> panel, enter the source page in <strong>Web page URL</strong>, then save the item. The panel appears after the scheduled finder is enabled.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              If the page address is already stored in post metadata, open the <strong>Custom field</strong> tab in the finder settings and enter the exact field name. Separate multiple names with commas. For example, use <code>_product_url</code> or <code>original_link</code>.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              A URL entered in the item's <strong>Web page URL</strong> field takes priority. If it is empty, FIFU uses the first populated configured custom field.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>These custom fields must contain a web page address. If your field already contains the image or video URL itself, use the <Link to="/features/auto-set-featured-media-from-custom-field/">Auto set featured media from custom field guide</Link> for that workflow.</p>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-finder-integrations">
        <FeatureGuideHeading
          id="page-finder-integrations"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            IMPORTS AND AUTOMATION
          </>}
          >
          Set the source during import or through an API.
        </FeatureGuideHeading>
        <p>If you create content in bulk, map the source page to <code>Media finder (webpage URL)</code> in the <Link to="/features/wp-all-import-add-on/">WP All Import add-on</Link>. The WordPress REST integration also accepts the post field <code>fifu_finder_url</code>, so your publishing process can set the same source address. See the <Link to="/features/wp-woocommerce-rest-api/">WordPress and WooCommerce REST API guide</Link> for the integration's broader setup.</p>
        <p>You can configure the finder from a WordPress installation with <Link to="/features/wp-cli/">WP-CLI</Link>:</p>
        
      </FeatureGuideSection>

      <FeatureCliSection
        id="page-finder-cli"
        commands={[
          {
            label: 'Enable the page finder',
            command: 'wp fifu finder on',
          },
          {
            label: 'Choose the page-address field',
            command: 'wp fifu finder --field=_product_url',
            description: 'Replace _product_url with your field name.',
          },
          {
            label: 'Include videos',
            command: 'wp fifu finder --video=on',
          },
          {
            label: 'Include Amazon product galleries',
            command: 'wp fifu finder --amazon=on',
          },
          {
            label: 'Disable the page finder',
            command: 'wp fifu finder off',
          },
        ]}
        note="Use off to disable the optional video or Amazon lookup."
      />

      <FeatureGuideSection id="page-finder-amazon">
        <FeatureGuideHeading
          id="page-finder-amazon"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL · AMAZON SOURCES
          </>}
          >
          Choose how Amazon pages are handled.
        </FeatureGuideHeading>
        <p>Open the <strong>Amazon</strong> tab in the same settings panel and enable <strong>set images and videos to the product gallery</strong> if you want Amazon page results added to a product's gallery. Amazon pages, including <code>amzn.to</code> short links, use this branch only while that option is on. With it off, they use the regular single-media lookup.</p>
        <p>For regular page lookups, FIFU prefers the page's Open Graph image; if that is unavailable, it selects the largest image it can measure. When video search is on, the finder can instead assign the first embedded video it finds. Amazon results may include multiple images and videos for the product gallery.</p>
        <p>For a separate workflow that sets a product gallery from image URLs you already have, read <Link to="/features/remote-product-gallery-images/">Remote Product Gallery Images</Link>.</p>
      </FeatureGuideSection>

      <FeatureGuideSection id="page-finder-results" help>
        <FeatureGuideHeading
          id="page-finder-results"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            RESULTS AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Know when the finder can act.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li><strong>Existing featured media stays in place.</strong> The scheduled scan selects items without FIFU image, video, custom-video, or slider-image values.</li>
          <li><strong>If nothing is assigned,</strong> confirm the page address is saved and the source page returns a usable image or embedded video. Failed, non-success, or empty remote lookup responses do not produce media.</li>
          <li><strong>This feature stores media URLs.</strong> It does not copy the found image into the WordPress Media Library. To save remote images locally instead, read <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>.</li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function AutoSetCustomFieldGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set featured media from custom field"
      className="feature-guide-page"
    >
      <p className="lead">
        Connect a saved custom-field URL to missing featured media with a scheduled check
        for posts and terms.
      </p>

      <FeatureGuideHighlight id="custom-field-auto-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ImagePlus size={15} aria-hidden="true" /> METADATA TO FEATURED MEDIA
          </span>
          <h2 id="custom-field-auto-intro">
            Fill the gap from the URL you already store.
          </h2>
          <p>
            When another tool or your workflow stores a media address in post or term
            metadata, this check can assign it without a second manual entry. You keep one
            source value, and content that already has featured media stays as it is. Use
            it when your metadata contains image or video URLs; skip it when your content
            already gets featured media through another workflow.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/auto-set-featured-media-from-custom-field-guide-1.png"
            alt="A custom field URL and enabled Auto set option resulting in featured media on a post"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="custom-field-setup">
        <FeatureGuideHeading
          id="custom-field-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP THE SOURCE
          </>}
          >
          Choose the metadata key and enable the check.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Automatic</strong>, then locate{' '}
              <strong>Auto set featured media from custom field</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Open <strong>Custom field</strong> and enter the exact metadata key used on
              your posts or terms. Separate multiple keys or templates with commas. For
              example, use <code>image_url, video_url</code> when those fields contain
              complete URLs.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              If a field stores only an identifier, wrap its exact key in braces inside a
              URL pattern, such as <code>{'https://example.com/{asset_id}.jpg'}</code>.
              The field value replaces <code>{'{asset_id}'}</code>. Each resulting value
              must start with <code>http://</code> or <code>https://</code>.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              In <strong>Auto set</strong>, turn on the toggle to enable scheduled
              assignment. The setting works only when a non-empty field configuration is
              saved.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="custom-field-coverage">
        <FeatureGuideHeading
          id="custom-field-coverage"
          icon={<>
            <RefreshCw size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT THE CHECK CHANGES
          </>}
          >
          It fills empty featured-media slots.
        </FeatureGuideHeading>
        <p>
              FIFU checks for a saved image or video URL and only assigns media to content that does not already have featured media.
            </p>
        <p>
              Enter the name of a field that already stores an image or video URL, or use a URL template if the field stores an identifier. You do not need this setting if another workflow already assigns featured media.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="custom-field-troubleshooting">
        <FeatureGuideHeading
          id="custom-field-troubleshooting"
          icon={<>
            <CircleAlert size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN NOTHING IS ASSIGNED
          </>}
          >
          Check the saved key and URL value.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>No assignment appears</dt>
            <dd>
              Confirm Auto set is enabled, the configured field is saved, and the post or
              term has no featured media already. Match the key's spelling and punctuation
              to the saved metadata name.
            </dd>
          </div>
          <div>
            <dt>A template is ignored</dt>
            <dd>
              Use braces around the metadata key, for example <code>{'{asset_id}'}</code>,
              and make sure the stored value completes an HTTP or HTTPS URL.
            </dd>
          </div>
          <div>
            <dt>The field is empty or contains other text</dt>
            <dd>
              Empty values are skipped. The setting expects a media URL or an identifier
              used by a URL template.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

            <FeatureCliSection
        id="custom-field-cli"
        commands={[
          {
            label: 'Choose the custom field',
            command: 'wp fifu customfield --field=image_url',
            description: 'Replace image_url with your field key.',
          },
          {
            label: 'Enable automatic assignment',
            command: 'wp fifu customfield on',
          },
          {
            label: 'Disable automatic assignment',
            command: 'wp fifu customfield off',
          },
        ]}
      />

      <FeatureRelatedGuides><Link to="/features/auto-set-featured-media-from-post-content/">Auto set featured media from post content</Link> and <Link to="/features/auto-set-featured-media-using-web-page-address/">Auto set featured media using web page address</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function AutoSetProductImagesFromAsinGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set product images from ASIN"
      className="feature-guide-page asin-feature-page"
    >
      <p className="lead">
        Use an Amazon ASIN to automatically add remote product images to content
        that does not already have featured media.
      </p>

      <FeatureGuideHighlight id="asin-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingBag size={15} aria-hidden="true" /> ASIN IMAGE LOOKUP
          </span>
          <h2 id="asin-intro">Find product images without searching for URLs.</h2>
          <p>
            If your products already have Amazon Standard Identification Numbers
            (ASINs), FIFU can request their media using Amazon’s Product Advertising API.
            Successful lookups save remote media URLs automatically, making it easier
            to populate a catalog with missing images. Content that already has
            featured media is skipped rather than overwritten.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-product-images-from-asin-guide-1.png"
            alt="An ASIN is looked up and the returned product images appear as a product image and gallery."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="asin-connect-title">
        <FeatureGuideHeading
          id="asin-connect-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP THE LOOKUP
          </>}
          >
          Connect Amazon and enable automatic lookup.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, go to <strong>FIFU → Settings → Auto</strong> and find{' '}
              <strong>Auto set product images from ASIN</strong>. Open its{' '}
              <strong>Credentials</strong> tab and enter the{' '}
              <strong>Partner tag</strong>, <strong>Access key</strong>, and{' '}
              <strong>Secret key</strong> for your Amazon Product Advertising API
              account. An ASIN alone is not enough to perform the lookup.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Choose the <strong>Locale</strong> for the Amazon marketplace where
              the products are listed, such as United States, United Kingdom,
              or Brazil. The complete list of supported locales appears in the
              dropdown. Make sure the credentials are valid for the selected
              marketplace.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              FIFU looks for eligible content automatically after the feature is enabled and the required Amazon credentials are saved. New images may take a little time to appear.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="asin-input-title">
        <FeatureGuideHeading
          id="asin-input-title"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PROVIDE AN IDENTIFIER
          </>}
          >
          Provide the ASIN for each item.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Enter it on the item</dt>
            <dd>
              Edit a product, post, or other content type that uses FIFU and
              enter its identifier in the <strong>ASIN</strong> panel, then save
              the item. The panel appears when this feature is enabled.
              Enter the ASIN itself, not an Amazon product-page URL.
            </dd>
          </div>
          <div>
            <dt>Read an existing field</dt>
            <dd>
              In <strong>FIFU → Settings → Auto</strong>, open this feature’s{' '}
              <strong>Custom field</strong> tab and enter the metadata key that
              contains an ASIN. For example, use <code>_sku</code> only when
              your WooCommerce SKUs actually contain ASINs. You can enter several
              field names separated by commas; FIFU uses the first nonempty
              value it finds. An ASIN saved directly in FIFU takes priority.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="asin-result-title">
        <FeatureGuideHeading
          id="asin-result-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT THE CHECK DOES
          </>}
          >
          What happens after a successful lookup?
        </FeatureGuideHeading>
        <ul className="activation-feature-help-list asin-results">
          <li>
            <p>
              <strong>WooCommerce products:</strong> returned image URLs are saved
              as the FIFU product image and additional product gallery images.
              The first image is the main product image; the others become
              gallery items. See the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
              for display options.
            </p>
          </li>
          <li>
            <p>
              <strong>Posts and other supported content:</strong> returned image
              URLs are saved as a FIFU{' '}
              <Link to="/features/featured-slider/">Featured Slider</Link>.
              The plugin also enables its featured slider setting for this
              workflow.
            </p>
          </li>
        </ul>
        <p>
          When the lookup provides a valid Amazon product link, FIFU also saves
          it as the content’s redirection URL. If there are no image URLs
          but video URLs are available, the workflow uses those URLs instead.
          Images remain hosted remotely unless you separately choose to
          download them.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="asin-eligibility-title" help>
        <FeatureGuideHeading
          id="asin-eligibility-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            ELIGIBILITY AND CHECKS
          </>}
          tone="help"
          >
          Why might an item be skipped?
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Already has media:</strong> items with a WordPress featured
            image or existing FIFU featured image, video, custom video, or
            slider are not candidates. This feature fills gaps; it does
            not replace images that are already set.
          </li>
          <li>
            <strong>No media returned:</strong> FIFU marks the ASIN as not found
            when a successful lookup returns neither images nor videos.
            That identifier is not continuously retried as a new lookup.
            Check the ASIN and marketplace if this happens.
          </li>
          <li>
            <strong>Lookup could not complete:</strong> check the Partner tag,
            Access key, Secret key, and Locale first. Invalid or missing
            credentials prevent successful lookups. Connection failures and
            unreadable responses are treated as failed attempts rather than
            as proof that the ASIN does not exist.
          </li>
          <li>
            <strong>Nothing happens immediately:</strong> the feature works
            through scheduled jobs, not an instant lookup when you save a
            post. Check that it is enabled, the item has an ASIN, and it
            does not already have featured media.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/woocommerce-import/">WooCommerce Import</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function AutomaticUpdatesGuide() {
  return (
    <Page
      className="activation-feature-page automatic-updates-feature-page"
      eyebrow="FIFU FEATURE GUIDE"
      title="Automatic Updates"
    >
      <p className="lead">
        Register a FIFU Premium license, then check for releases and choose whether
        WordPress installs them automatically.
      </p>
      <FeatureGuideHighlight id="automatic-updates-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <RefreshCw size={15} aria-hidden="true" /> WORDPRESS RELEASE DELIVERY
          </span>
          <h2 id="automatic-updates-intro">Keep release checks in your dashboard.</h2>
          <p>
            Without a registered license, WordPress cannot retrieve FIFU Premium releases.
            A valid key connects the plugin’s update check to your site, so you can
            install a release from Installed Plugins or let WordPress install eligible
            releases automatically. This suits site owners who manage updates in
            WordPress; automatic installation is optional when you prefer to review each
            release.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/automatic-updates-guide-1.png"
            alt="Three-panel workflow showing a FIFU Premium update check, an available release, and the updated plugin in WordPress."
            loading="eager"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="automatic-updates-license-title">
        <FeatureGuideHeading
          id="automatic-updates-license-title"
          icon={<>
            <KeyRound size={19} aria-hidden="true" />
          </>}
          kicker={<>
            REGISTER YOUR SITE
          </>}
          >
          Submit your license key.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → License key</strong>, then select the{' '}
              <strong>Activation</strong> tab.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter the key in <strong>License key</strong> and select{' '}
              <strong>Submit</strong>. The request validates the key and registers the
              site for release checks.
            </p>
          </li>
        </FeatureGuideSteps>
        <dl className="automatic-updates-license-rules">
          <div>
            <dt>Domain coverage</dt>
            <dd>
              One key covers the registered domain, its subdomains, and paths on that
              domain.
            </dd>
          </div>
          <div>
            <dt>Test site</dt>
            <dd>
              You can activate one additional test, development, or staging domain. A
              second distinct live domain requires another key.
            </dd>
          </div>
          <div>
            <dt>Multisite</dt>
            <dd>
              Submit the key from Network Admin to copy the key and account email across
              network sites.
            </dd>
          </div>
        </dl>
        <p>
          For the broader license activation workflow, see the{' '}
          <Link to="/features/activation/">Activation guide</Link>.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="automatic-updates-install-title">
        <FeatureGuideHeading
          id="automatic-updates-install-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK AND INSTALL
          </>}
          >
          Choose how releases are installed.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>Plugins → Installed Plugins</strong> and locate{' '}
              <strong>FIFU Premium</strong>. WordPress checks the update service on its
              scheduled cycle (every 12 hours).
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              To check immediately, select <strong>Check for updates</strong> on the FIFU
              Premium row. The request includes your saved license key and registered
              domain.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              To install future eligible releases without a manual action, choose{' '}
              <strong>Enable auto-updates</strong> in that row. Leave it disabled to
              review and install releases yourself. This preference changes installation
              only; update checks still run.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="automatic-updates-troubleshoot-title" help>
        <FeatureGuideHeading
          id="automatic-updates-troubleshoot-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN A CHECK DOES NOT WORK
          </>}
          tone="help"
          >
          Read the result and correct its cause.
        </FeatureGuideHeading>
        <dl className="automatic-updates-results">
          <div>
            <dt>Key rejected or expired</dt>
            <dd>
              Re-enter the key under <strong>FIFU → License key → Activation</strong>. For
              an expired key, open the <strong>Renewal</strong> tab. One key supports its
              registered domain plus one test domain; contact{' '}
              <a href="mailto:support@fifu.app">FIFU support</a> if your domain changed.
            </dd>
          </div>
          <div>
            <dt>Request failed</dt>
            <dd>
              WordPress shows the request error for a failed manual check. Restore the
              site’s access to the FIFU update service, including any firewall rule
              blocking its requests, then run <strong>Check for updates</strong> again.
            </dd>
          </div>
          <div>
            <dt>Up to date</dt>
            <dd>
              No newer release was returned. Your current installation preference remains
              in effect.
            </dd>
          </div>
        </dl>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/reset-settings/">Reset Settings</Link> and <Link to="/features/debug-mode/">Debug Mode</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}

function AutoSetFeaturedImageByTitleGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set featured image using post title and search engine"
      className="feature-guide-page"
    >
      <p className="lead">
        Search with a post title, review a result in the editor, or optionally schedule
        assignments for posts that have no featured image.
      </p>
      <FeatureGuideHighlight id="title-search-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Search size={15} aria-hidden="true" /> TITLE-BASED IMAGE SEARCH
          </span>
          <h2 id="title-search-purpose">Find a starting image from the title.</h2>
          <p>
            Search results turn a post title into candidate image URLs. You can select and
            check a match before saving, or let scheduled checks fill missing featured
            images for selected post types.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/auto-set-featured-image-using-post-title-and-search-engine-guide-1.png"
            alt="A post title is searched for matching images, then a selected image is previewed in the post editor."
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="title-search-use">
        <FeatureGuideHeading
          id="title-search-use"
          icon={<>
            <Search size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE TITLE SEARCH
          </>}
          >
          Choose how much review you want.
        </FeatureGuideHeading>
        <p>
          Without this search, you need to find an image elsewhere and enter its address
          for each post. A title-based search brings candidate images into the FIFU editor
          flow; reviewing a candidate first helps you catch an irrelevant match, while
          scheduled assignment can reduce repetitive work on a site that accepts the
          search results for its chosen post types.
        </p>
        <p>
          Use manual search when each image needs editorial approval. Enable scheduled
          assignment only when you want FIFU to fill empty featured-image slots
          automatically. It checks one eligible post per minute, so it is intended for
          gradual assignment rather than an immediate bulk pass.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="title-search-manual">
        <FeatureGuideHeading
          id="title-search-manual"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MANUAL SEARCH
          </>}
          >
          Preview a match before you save.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open a post in the WordPress editor and locate FIFU’s featured image URL
              field. Manual image search requires the WordPress <code>upload_files</code>{' '}
              capability.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Leave the URL field empty and select <strong>Preview</strong> to search
              using the post title. To add search terms, enter them in{' '}
              <strong>Keywords</strong>; an empty Keywords field uses the title.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Choose a result to populate the URL field. Preview the image, then save or
              update the post to store it as the featured image.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          You can also search from <Link to="/features/quick-editor/">Quick Editor</Link>:
          enter keywords in <strong>Image URL or Keywords</strong>, select{' '}
          <strong>Preview</strong>, choose a result, then select <strong>Save</strong>.
          Leave keywords empty to search from the post title.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="title-search-filters">
        <FeatureGuideHeading
          id="title-search-filters"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SEARCH FILTERS
          </>}
          >
          Narrow or broaden the candidates.
        </FeatureGuideHeading>
        <p>
          Open{' '}
          <strong>
            FIFU → Settings → Automatic → Auto set featured image using post title and
            search engine → Search filters
          </strong>{' '}
          to adjust these independent filters:
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>Filter by size</dt>
            <dd>
              Set minimum width and height in pixels. Defaults are <code>600</code> ×{' '}
              <code>315</code>.
            </dd>
          </div>
          <div>
            <dt>Filter by layout</dt>
            <dd>
              Choose <strong>All</strong>, <strong>Square</strong>, <strong>Tall</strong>,
              or <strong>Wide</strong>.
            </dd>
          </div>
          <div>
            <dt>Filter by source</dt>
            <dd>
              Limit results to one or more site names, separated by commas. Leave this
              empty if you do not want to restrict the source sites.
            </dd>
          </div>
          <div>
            <dt>Blocklist</dt>
            <dd>
              Enter prohibited strings, one per line. Matching strings are applied to
              candidate image URLs.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Broader filters are more likely to return candidates. A vague title or
          restrictive combination can produce irrelevant results or none at all.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="title-search-auto">
        <FeatureGuideHeading
          id="title-search-auto"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL SCHEDULED ASSIGNMENT
          </>}
          >
          Fill missing featured images gradually.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open{' '}
              <strong>
                FIFU → Settings → Automatic → Auto set featured image using post title and
                search engine → Auto set
              </strong>{' '}
              and turn on <strong>Auto set</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In <strong>Post types</strong>, keep the default <code>post</code> or enter
              comma-separated post type names available on your site.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Leave the feature enabled for scheduled processing. Every minute, it checks
              configured post types for content without a featured image and processes one
              post in that interval.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Scheduled assignment is optional. Search results can be a poor fit for some
          titles and filter combinations, so use manual review if every image must be
          approved before assignment.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="title-search-credit">
        <FeatureGuideHeading
          id="title-search-credit"
          icon={<>
            <ExternalLink size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SOURCE CREDIT
          </>}
          >
          Optionally link visitors to the source page.
        </FeatureGuideHeading>
        <p>
          Search results include the address of the remote post that owns the image. To
          make the featured image link to that page on singular content pages, enable{' '}
          <Link to="/features/page-redirection/">Page Redirection</Link> under{' '}
          <strong>FIFU → Settings → Image</strong>. The link destination is the returned
          remote post address.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="title-search-troubleshoot" help>
        <FeatureGuideHeading
          id="title-search-troubleshoot"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          When results are empty or off-topic.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No useful matches:</strong> test the post title with Keywords left
            empty, then relax minimum dimensions, source sites, layout, or blocklist
            restrictions.
          </li>
          <li>
            <strong>Preview does not load:</strong> check that the search returns an image
            URL accepted by FIFU; the search response is filtered to valid image URLs.
          </li>
          <li>
            <strong>Scheduled item remains empty:</strong> confirm the content type is
            included in <strong>Post types</strong> and still has no featured image. The
            scheduled process handles only one eligible item per minute.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/unsplash-image-search/">Unsplash Image Search</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function ReplaceNotFoundImageGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Replace Not Found Image"
      className="feature-guide-page"
    >
      <p className="lead">
        Set a backup image URL so supported FIFU images can show a replacement
        when the browser cannot load the original file.
      </p>

      <FeatureGuideHighlight id="replace-not-found-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ImageOff size={15} aria-hidden="true" /> IMAGE FALLBACK
          </span>
          <h2 id="replace-not-found-purpose">Show a useful image instead of a broken one.</h2>
          <p>
            Image hosts can remove files, change sharing permissions, or block
            requests from your website. When a supported FIFU image fails to load,
            the visitor's browser can display your chosen replacement instead.
            The original image address remains saved in WordPress.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/replace-not-found-image-guide-1.png"
            alt="A remote image fails to load, so the page displays the backup image configured in FIFU."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="replace-not-found-why">
        <FeatureGuideHeading
          id="replace-not-found-why"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Keep your layouts readable when a host fails.
        </FeatureGuideHeading>
        <p>
          A broken featured image can leave an empty thumbnail or a browser's
          missing-image icon in blog cards, articles, or product displays.
          Choose a simple branded placeholder that still looks appropriate
          across different kinds of content. This is particularly useful
          when your images come from external servers you do not control.
        </p>
        <p>
          The replacement is a <strong>display fallback</strong>. It does not
          fix the original URL, download a local copy, or permanently replace
          the post's image. If the original starts working again, visitors
          can see it on a later page load.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="replace-not-found-setup">
        <FeatureGuideHeading
          id="replace-not-found-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP YOUR BACKUP
          </>}
          >
          Choose one reliable replacement image.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Image</strong>
              and find <strong>Replace Not Found Image</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Paste a complete public image address into <strong>Image URL</strong>.
              Prefer <code>https://</code> and choose a small, stable image
              that the hosting service allows other websites to display.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Leave the field after editing it so FIFU can save the change.
              There is no separate enable switch: the configured URL
              activates the replacement behavior in supported displays.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Open the backup URL in a private browser window to confirm
              that it works without signing in. FIFU checks the URL's format
              before saving, but that does not prove the image will load.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          To stop using your custom replacement, clear <strong>Image URL</strong>
          and let the setting save. Some integrations may still have their own
          built-in placeholder.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="replace-not-found-how">
        <FeatureGuideHeading
          id="replace-not-found-how"
          icon={<>
            <RefreshCw size={19} aria-hidden="true" />
          </>}
          kicker={<>
            HOW IT WORKS
          </>}
          >
          The browser swaps the displayed image after an error.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              A visitor opens a page containing a supported FIFU image.
              The browser first requests the original image URL.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              If that image request fails, FIFU's frontend handling points
              the displayed image to your backup URL instead.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              The page shows the backup if it loads successfully.
              The post's saved remote URL is unchanged, so the same check
              happens the next time the image is requested.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          This works when an image load fails; it is not a scheduled link
          scan or a guarantee that every image on the site will be replaced.
          The result depends on how your theme or integration renders the image.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="replace-not-found-coverage">
        <FeatureGuideHeading
          id="replace-not-found-coverage"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHERE IT APPLIES
          </>}
          >
          Know which FIFU displays use the backup.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Remote featured images · Free and Premium</dt>
            <dd>
              FIFU provides fallback handling for supported remote featured-image
              output. Coverage can vary when a theme or another plugin builds
              its own image markup or error handling.
            </dd>
          </div>
          <div>
            <dt>Featured Slider · Premium</dt>
            <dd>
              Slider image rendering can use the same replacement URL.
              See the <Link to="/features/featured-slider/">Featured Slider guide</Link>.
            </dd>
          </div>
          <div>
            <dt>WooCommerce product galleries · Premium</dt>
            <dd>
              Supported FIFU-rendered gallery images can switch to the backup
              on a load error, including images added through AJAX updates.
              See the <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>.
            </dd>
          </div>
          <div>
            <dt>Elementor FIFU Image widget · Premium</dt>
            <dd>
              The Premium widget uses your configured backup image. If the field
              is empty, that widget uses its own built-in error image instead.
              The Free widget does not apply this custom fallback by itself.
              See the <Link to="/features/widgets/">Widgets guide</Link>.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="replace-not-found-related">
        <FeatureGuideHeading
          id="replace-not-found-related"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            RELATED FEATURES
          </>}
          >
          A fallback is different from an empty-image default.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Replace Not Found Image</dt>
            <dd>
              The post already has an image URL, but the browser cannot
              display the image. This feature provides a visual backup.
            </dd>
          </div>
          <div>
            <dt><Link to="/features/default-featured-image/">Default Featured Image</Link></dt>
            <dd>
              A post has no featured image assigned. Use this feature to
              give eligible content a shared thumbnail from the start.
            </dd>
          </div>
          <div>
            <dt><Link to="/features/broken-link-checker/">Broken Link Checker</Link></dt>
            <dd>
              Use this separate feature to check remote image links and
              identify repeatedly failing URLs for review. A visual
              replacement alone does not repair the broken links.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

            <FeatureCliSection
        id="replace-not-found-cli"
        commands={[
          {
            label: 'Set a replacement image',
            command: 'wp fifu image --replace="https://example.com/backup.jpg"',
            description: 'Replace the example address with your image URL.',
          },
          {
            label: 'Remove the replacement image',
            command: 'wp fifu image --replace=""',
          },
        ]}
      />

      <FeatureGuideSection id="replace-not-found-troubleshooting" help>
        <FeatureGuideHeading
          id="replace-not-found-troubleshooting"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the backup does not appear
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Test the backup itself:</strong> visit the exact URL
            privately and verify that it returns a real image, not a
            sharing page or sign-in form. The backup must be available
            even when another image host is down.
          </li>
          <li>
            <strong>Check that the setting saved:</strong> the field saves
            when its value changes. A malformed URL is rejected without
            replacing your previous setting.
          </li>
          <li>
            <strong>Check the output:</strong> the fallback applies to
            supported FIFU displays, not every image tag on your website.
            Other themes or scripts can manage load errors differently.
          </li>
          <li>
            <strong>Check the original image:</strong> if it has genuinely
            disappeared, update the post's source URL. The backup only
            covers the visible error; it does not restore the original.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function BrokenLinkCheckerGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Broken Link Checker"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Track recurring failures in remote featured-image URLs from the pages your
        WordPress site actually renders.
      </p>

      <FeatureGuideHighlight id="broken-link-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Link2 size={15} aria-hidden="true" /> CHECK REMOTE IMAGE URLS
          </span>
          <h2 id="broken-link-intro">
            Find recurring failures in the remote images your site displays.
          </h2>
          <p>
            Remote image files can disappear, move, or become inaccessible while their
            addresses remain saved in WordPress. Turn on Link Checker to check featured
            images encountered as pages render. After repeated failures, you can find
            affected posts in one place instead of checking them individually. This
            is useful when you depend on externally hosted images and optional when
            your content uses only local images.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/broken-link-checker-guide-1.png"
            alt="Enable Link Checker, render a post with a featured image, and review a failed image URL in the Broken Links table"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="blc-enable-title">
        <FeatureGuideHeading
          id="blc-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            START MONITORING
          </>}
          >
          Enable the check and let eligible pages enter the queue.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Image → Broken Link Checker → Settings</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Link Checker</strong>. This is the only checker setting; you
              do not need an API key, a list of URLs, or a scan schedule.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              FIFU checks eligible featured images as visitors browse the site.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Open <strong>Broken Link Checker → Broken Links</strong> to review any URLs
              that meet the failure threshold.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
              The checker monitors remote FIFU featured images. It does not scan images inside post content or every product gallery image.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="blc-results-title">
        <FeatureGuideHeading
          id="blc-results-title"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            UNDERSTAND THE RESULTS
          </>}
          >
          A URL appears after three failed checks.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Checks run in the background</dt>
            <dd>
              The checker tests one queued featured-image URL at a time
              in the background, helping avoid large bursts of requests.
            </dd>
          </div>
          <div>
            <dt>Retries are at least 24 hours apart</dt>
            <dd>
              A previously checked URL is eligible again after 24 hours and only when it
              is encountered again during featured-image rendering. Expect several days
              for three failures if the site has low traffic or pages are served from
              cache.
            </dd>
          </div>
          <div>
            <dt>Success clears its failure count</dt>
            <dd>
              Successful checks clear the failure count. An image is listed as broken after three failed checks.
            </dd>
          </div>
          <div>
            <dt>Broken Links table</dt>
            <dd>
              The table links affected posts to their editors and shows their failing image addresses. Only administrators can view these results.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="blc-repair-title">
        <FeatureGuideHeading
          id="blc-repair-title"
          icon={<>
            <Wrench size={19} aria-hidden="true" />
          </>}
          kicker={<>
            REPAIR A LISTED URL
          </>}
          >
          Update the source on the affected post.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In{' '}
              <strong>
                FIFU → Settings → Image → Broken Link Checker → Broken Links
              </strong>
              , select the post title to open its editor. You can also open the image
              URL directly from the second column to inspect the current source.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Saving a working image URL fixes the affected post. The list updates as the checker continues to run.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Once you replace the post's broken image URL, the old URL is no longer
          associated with that post and should no longer appear for it in the results.
          If you keep the same broken URL, it stays listed until a successful check
          resets its failure count. To show visitors a backup image while the original
          fails to load, use{' '}
          <Link to="/features/replace-not-found-image/">Replace Not Found Image</Link>.
          A visual fallback does not repair the saved URL.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="blc-troubleshoot-title" help>
        <FeatureGuideHeading
          id="blc-troubleshoot-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IF A URL IS MISSING
          </>}
          tone="help"
          >
          Check eligibility, timing, and access.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No row yet:</strong> confirm Link Checker is enabled and that
            WordPress has rendered the post’s featured image. A full-page cache can serve
            HTML without running WordPress, so that visit may not queue a check.
          </li>
          <li>
            <strong>The image looks wrong but is not listed:</strong> the checker confirms
            whether an address responds, not whether it displays the intended image.
            Open the URL to check what the host actually shows.
          </li>
          <li>
            <strong>The table will not load:</strong> sign in as a site administrator
            to view the broken-link results.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

            <FeatureCliSection
        id="blc-cli-title"
        commands={[
          {
            label: 'Enable the checker',
            command: 'wp fifu image --validate-featured-image-urls=on',
          },
          {
            label: 'Disable the checker',
            command: 'wp fifu image --validate-featured-image-urls=off',
          },
        ]}
        note="These commands change the setting; they do not start a bulk scan."
      />

      <FeatureGuideCta />
    </Page>
  );
}
function ModifyPostContentGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Modify Post Content"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Show a featured image in the article body or remove its repeated copy while
        leaving your saved post content intact.
      </p>

      <FeatureGuideHighlight id="modify-content-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <FileImage size={15} aria-hidden="true" />
            CHANGE THE DISPLAYED POST BODY
          </span>
          <h2 id="modify-content-intro">
            Fill a theme’s image gap or remove a repeated image.
          </h2>
          <p>
            Some themes omit the featured image from the article, while others show it
            again when it is already in the body. These controls adjust WordPress’s
            displayed content at render time, so you can correct either layout without
            rewriting saved post text. Use them when the theme’s single-post layout needs
            an image added or a duplicate hidden; turn the change off to restore the
            original content output.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/modify-post-content-guide-1.png"
            alt="Modify Post Content toggles, a post with repeated featured media, and the displayed article image"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="modify-content-setup">
        <FeatureGuideHeading
          id="modify-content-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS WORKFLOW
          </>}
          >
          Choose one display change.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Image → Modify Post Content</strong>. On the{' '}
              <strong>Modify post content</strong> tab, choose the toggle that matches the
              result you want.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Open a post on your site to review the rendered result. The controls affect
              the content output, not the text stored in the editor.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="modify-content-options">
        <FeatureGuideHeading
          id="modify-content-options"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            AVAILABLE CHANGES
          </>}
          >
          What each toggle changes
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>add missing media</dt>
            <dd>
              Prepends the post’s featured image, centered above its displayed content,
              when a featured image exists. It does not check whether that image is
              already in the body, so use this on its own when your theme omits the image
              and the content does not already include it.
            </dd>
          </div>
          <div>
            <dt>remove duplicated media</dt>
            <dd>
              Removes a duplicate of the featured image or supported video from the displayed post content. Other images are left alone.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="modify-content-scope">
        <FeatureGuideHeading
          id="modify-content-scope"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL SCOPE
          </>}
          >
          Apply the changes to selected post types.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>Filter by post type</strong> and enter comma-separated post
              type slugs, for example <code>post,page</code>. The same list scopes both
              toggles.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter post types to limit where this applies, or leave the field empty to use the default scope.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="modify-content-matching" help>
        <FeatureGuideHeading
          id="modify-content-matching"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            MATCHING AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          If repeated media remains
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <p>
              If a duplicate remains, confirm that the image in the post matches the featured image.
            </p>
          </li>
          <li>
            <p>
              Video duplicates can also be removed when the same featured video appears in the post content.
            </p>
          </li>
          <li>
            <p>
              Using both options together can cancel out the result. Enable only the change your layout needs.
            </p>
          </li>
          <li>
            <p>
              If you turn a toggle off, FIFU stops transforming the displayed content. Any
              image or text already saved in the post body remains there because these
              controls do not edit stored content.
            </p>
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced description="Browse the feature list for other ways to manage featured media." />
    </Page>
  );
}

function HideFeaturedMediaGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Hide Featured Media"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Hide FIFU featured media on selected singular pages while keeping it available in
        your homepage and post lists.
      </p>

      <FeatureGuideHighlight id="hide-featured-media-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <EyeOff size={15} aria-hidden="true" /> CONTROL SINGULAR DISPLAY
          </span>
          <h2 id="hide-featured-media-purpose">
            Keep the image in lists, remove it from the article view.
          </h2>
          <p>
            If your theme shows a featured image above every article, it can repeat an
            image already used in the post body. Hide Featured Media suppresses FIFU’s
            featured image, video, or slider on matching singular pages while leaving list
            and homepage views alone. Use it when you want the media for browsing and
            sharing, but prefer a cleaner article page; leave it off if your theme already
            handles featured media the way you want.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/hide-featured-media-guide-1.png"
            alt="Enable Hide in FIFU settings, hide featured media on a matching singular page, and keep it visible in a post list"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="hide-featured-media-setup">
        <FeatureGuideHeading
          id="hide-featured-media-setup"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET THE DISPLAY RULE
          </>}
          >
          Choose where the media disappears.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress admin, open{' '}
              <strong>FIFU → Settings → Image → Hide Featured Media</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              On the <strong>Hide</strong> tab, turn on the toggle. It applies to eligible
              singular pages unless you narrow the scope with the filters.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Optionally enter comma-separated post type names on{' '}
              <strong>Filter by post type</strong>, and/or comma-separated formats on{' '}
              <strong>Filter by post format</strong>. Each empty field leaves that
              dimension unrestricted.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Each change is saved automatically. Open a matching singular page and check
              the featured media; also check a list view to confirm its media remains.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="hide-featured-media-filters">
        <FeatureGuideHeading
          id="hide-featured-media-filters"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL FILTERS
          </>}
          >
          Limit the rule by content type.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Filter by post type</dt>
            <dd>
              Enter WordPress post type slugs separated by commas, such as{' '}
              <code>post,page</code>. The setting lists post types on your site that
              support featured images; if bbPress is active, <code>forum</code>,{' '}
              <code>topic</code>, and <code>reply</code> are also included. Leave the
              field blank to include all eligible types.
            </dd>
          </div>
          <div>
            <dt>Filter by post format</dt>
            <dd>
              Enter format slugs separated by commas, such as <code>video,audio</code>.
              Available formats depend on your theme’s registered post formats. A post
              without an assigned format is treated as <code>standard</code>. Leave blank
              to include every format.
            </dd>
          </div>
          <div>
            <dt>When both filters have values</dt>
            <dd>
              The singular page must match both its post type and its post format for FIFU
              to hide the featured media.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="hide-featured-media-coverage">
        <FeatureGuideHeading
          id="hide-featured-media-coverage"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT TO EXPECT
          </>}
          >
          Understand the display boundary.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Hidden:</strong> FIFU featured media on a matching singular page. The
            image and video renderers output hidden media, and the slider renderer applies{' '}
            <code>display:none</code>.
          </li>
          <li>
            <strong>Unaffected:</strong> the front page, WooCommerce product pages,
            archives, and other post cards shown alongside the main post.
          </li>
          <li>
            <strong>Theme-dependent:</strong> a theme that prints featured media through
            its own custom markup may still show it. The rule applies through FIFU’s
            featured-media rendering paths.
          </li>
          <li>
            <strong>Social sharing:</strong> this display rule affects page rendering; it
            does not change the saved featured image data used elsewhere.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

            <FeatureCliSection
        id="hide-featured-media-cli"
        commands={[
          {
            label: 'Hide featured media',
            command: 'wp fifu image --hide=on',
          },
          {
            label: 'Show featured media again',
            command: 'wp fifu image --hide=off',
          },
          {
            label: 'Choose post types',
            command: 'wp fifu image --hide-types=post,page',
          },
          {
            label: 'Clear the post-type filter',
            command: 'wp fifu image --hide-types=',
          },
          {
            label: 'Choose post formats',
            command: 'wp fifu image --hide-formats=video,audio',
          },
          {
            label: 'Clear the post-format filter',
            command: 'wp fifu image --hide-formats=',
          },
        ]}
      />

      <FeatureGuideSection id="hide-featured-media-troubleshooting" help>
        <FeatureGuideHeading
          id="hide-featured-media-troubleshooting"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the result does not match.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            If FIFU media remains on a singular page, confirm the <strong>Hide</strong>{' '}
            toggle is on and that every populated filter matches the page’s type and
            format.
          </li>
          <li>
            If the page uses a custom theme layout, check whether the theme outputs a
            separate featured image outside FIFU’s media rendering. This setting cannot
            hide markup that bypasses those rendering paths.
          </li>
          <li>
            If media disappears from a WooCommerce product page or the front page, this
            setting is not the cause under the current rule; inspect the theme or another
            display setting.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/modify-post-content/">Modify Post Content</Link> and <Link to="/features/featured-slider/">Featured Slider</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function ClearMetadataGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Clear Metadata"
      className="feature-guide-page"
    >
      <p className="lead">
        Remove FIFU-generated image records from WordPress while preserving saved remote
        image URLs.
      </p>

      <FeatureGuideHighlight id="clear-metadata-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Database size={15} aria-hidden="true" /> METADATA MAINTENANCE
          </span>
          <h2 id="clear-metadata-intro">
            Clear image records in batches; keep your URLs.
          </h2>
          <p>
              You can follow the cleanup progress on the settings page. If remote images stop displaying after cleanup, regenerate their metadata.
            </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/clear-metadata-guide-1.png"
            alt="Enable Clear Metadata, follow batch progress, and retain a remote image URL after cleanup"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="clear-metadata-workflow-title">
        <FeatureGuideHeading
          id="clear-metadata-workflow-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            RUN THE CLEANUP
          </>}
          >
          Start it from Metadata settings.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Metadata</strong>. Find{' '}
              <strong>Clear Metadata</strong> below <strong>Image Metadata</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Clear Metadata</strong>. FIFU processes the generated
              records in batches and displays a percentage progress indicator.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Wait for completion. The cleanup switch turns off automatically.{' '}
              <Link to="/features/image-metadata/">Image Metadata</Link> generation and{' '}
              <Link to="/features/schedule-metadata-generation/">
                Schedule Metadata Generation
              </Link>{' '}
              are also disabled as part of completion.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="clear-metadata-effects-title">
        <FeatureGuideHeading
          id="clear-metadata-effects-title"
          icon={<>
            <Database size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT CHANGES
          </>}
          >
          Metadata is removed; saved image URLs stay.
        </FeatureGuideHeading>
        <p>
          The operation removes FIFU-generated Image Metadata records, not the image URLs.
          Turning off <strong>Image Metadata</strong> only stops metadata generation; it
          does not remove records already stored.
        </p>
        <p>
          If you still use remote FIFU images, enable <strong>Image Metadata</strong> and
          choose <strong>generate the missing metadata now</strong> after cleanup. This
          rebuilds the records that WordPress components need; until then, themes or
          plugins that depend on those records may not display the remote images. Follow
          the <Link to="/features/image-metadata/">Image Metadata guide</Link> for that
          regeneration workflow.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="clear-metadata-limits-title" help>
        <FeatureGuideHeading
          id="clear-metadata-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            LIMITS AND RECOVERY
          </>}
          tone="help"
          >
          Wait for active metadata work to finish.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Another metadata task is running:</strong> a cleanup request is
            reported as busy. Wait until that operation completes, then start cleanup
            again.
          </li>
          
          <li>
            <strong>Remove URLs too:</strong> use{' '}
            <Link to="/features/delete-all-urls/">Delete All URLs</Link> for the broader
            removal of saved FIFU addresses. That operation runs metadata cleanup first.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureCliSection
        id="clear-metadata-cli"
        commands={[
          {
            label: 'Clear generated image metadata',
            command: 'wp fifu clean',
          },
        ]}
        note="This clears generated metadata but keeps saved remote image addresses."
      />

      <FeatureGuideCta />
    </Page>
  );
}

function DeleteAllUrlsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Delete All URLs"
      className="feature-guide-page"
    >
      <p className="lead">
        Permanently remove FIFU image and media references from your site when you are
        leaving remote FIFU media behind.
      </p>

      <FeatureGuideHighlight id="delete-all-urls-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <CircleAlert size={15} aria-hidden="true" />
            SITE-WIDE CLEANUP
          </span>
          <h2 id="delete-all-urls-intro">
            Clear remote media references across your site.
          </h2>
          <p>
              This action permanently removes FIFU's saved remote media addresses and related data. Use it only when you want to stop using remote FIFU media across the site.
            </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/delete-all-urls-guide-1.png"
            alt="Enable the deletion prerequisite, run Delete All URLs, and remove FIFU image and media references"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="delete-all-urls-purpose-title">
        <FeatureGuideHeading
          id="delete-all-urls-purpose-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Use this when you are removing FIFU media.
        </FeatureGuideHeading>
        <p>
          This cleanup is for a site-wide switch away from remote FIFU images, or another
          deliberate removal of all FIFU media references. It can prevent old remote URLs
          and media metadata from continuing to affect content after that change. If you
          only want to remove generated image metadata while keeping your FIFU URLs, use{' '}
          <Link to="/features/clear-metadata/">Clear Metadata</Link> instead.
        </p>
        <p>
              FIFU clears its image metadata first, then removes saved remote featured images, galleries, videos, audio, and sliders.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="delete-all-urls-prereq-title">
        <FeatureGuideHeading
          id="delete-all-urls-prereq-title"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            REQUIRED ACCESS
          </>}
          >
          Enable the deletion safeguard.
        </FeatureGuideHeading>
        <p>
          Before the control can delete data, set <code>FIFU_DELETE_ALL_URLS</code> to{' '}
          <code>true</code> in the FIFU plugin file. The constant defaults to{' '}
          <code>false</code>, so the deletion handler exits unless you explicitly enable
          it.
        </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>Plugins → Plugin Editor</strong>, choose the FIFU
              plugin, and select it.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find <code>FIFU_DELETE_ALL_URLS</code> and change its value from{' '}
              <code>false</code> to <code>true</code>.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the file. The default is restored if the constant is absent, so confirm
              the saved value before you run the action.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="delete-all-urls-use-title">
        <FeatureGuideHeading
          id="delete-all-urls-use-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            RUN THE CLEANUP
          </>}
          >
          Start the site-wide deletion.
        </FeatureGuideHeading>
        <p>
          The action is in <strong>FIFU → Settings → Metadata → Delete All URLs</strong>,
          below the metadata and cleanup controls.
        </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Review the warning in the Delete All URLs panel. The action removes remote
              featured images, gallery, video, audio, and slider data, and it cannot be
              undone.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select <strong>delete all your URLs now</strong>. The page runs Clear
              Metadata first, then sends the deletion request only when cleanup completes.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="delete-all-urls-help-title" help>
        <FeatureGuideHeading
          id="delete-all-urls-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            LIMITS AND RECOVERY
          </>}
          tone="help"
          >
          Understand what can stop the run.
        </FeatureGuideHeading>
        <p>
          If metadata cleanup cannot finish, deletion does not proceed. Resolve the
          reported errors, confirm <code>FIFU_DELETE_ALL_URLS</code> is enabled, and
          try again.
        </p>
        <p>
              This action cannot restore removed images or their saved addresses. Make a backup before continuing.
            </p>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function OptimizedImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Optimized Images"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Resize remote FIFU images for the dimensions your theme requests, and optionally
        optimize and lazy-load images inside post content.
      </p>

      <FeatureGuideHighlight id="optimized-images-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> IMAGE DELIVERY
          </span>
          <h2 id="optimized-images-intro">Send each page a more suitable image size.</h2>
          <p>
            Remote images often come from one large source file. Resizing them for the
            dimensions a page requests can reduce bytes sent to visitors; content-image
            optimization separately delays offscreen images until they approach view.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/optimized-images-guide-1.png"
            alt="A WordPress page requests a smaller remote image, the CDN resizes it, and the resulting thumbnail appears in desktop and mobile layouts."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="optimized-purpose-title">
        <FeatureGuideHeading
          id="optimized-purpose-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Reduce oversized downloads on image-heavy pages.
        </FeatureGuideHeading>
        <p>
              FIFU requests smaller versions of remote images when your pages need them, which can improve loading on cards, archives, and phones. The original image stays on its existing host.
            </p>
        <p>
          Turn it on when your site uses remote FIFU images and needs smaller displayed
          copies. The separate content option is useful when post bodies contain large
          inline images below the fold. If your pages already serve appropriately sized
          files, these options are optional.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="optimized-enable-title">
        <FeatureGuideHeading
          id="optimized-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP · OPTIMIZE
          </>}
          >
          Enable the delivery paths you need.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Image → Optimized Images → Optimize</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enable <strong>optimize featured images</strong> to resize eligible remote
              FIFU attachments. Your site needs a configured main domain; WordPress
              image-size requests supply the dimensions and crop value.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enable <strong>optimize secondary images</strong> separately to rewrite
              eligible <code>&lt;img&gt;</code> tags in post content for CDN delivery and
              lazy loading. This switch does not depend on the featured-image switch.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="optimized-providers-title">
        <FeatureGuideHeading
          id="optimized-providers-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PROVIDER · SIZES
          </>}
          >
          Choose a CDN and optional square output.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>
              <strong>FIFU CDN</strong> tab
            </dt>
            <dd>
              Enable <strong>optimize images with FIFU CDN</strong>{' '}
              to use FIFU's on-the-fly CDN instead of the public CDN.
              This is a Premium feature. To serve images through
              your own domain, configure the <code>img</code> CNAME
              pointing to <code>i0.fifu.app</code>.
            </dd>
          </div>
          <div>
            <dt>use your site's domain</dt>
            <dd>
              Enable this only after the required DNS record is in place. It selects the
              custom-domain delivery option; it does not replace the CNAME setup.
            </dd>
          </div>
          <div>
            <dt>
              <strong>Sizes → Make all images square</strong>
            </dt>
            <dd>
              Set <strong>Desktop computer</strong> and <strong>Mobile phone</strong>{' '}
              independently. Leave a choice blank to use registered sizes, select{' '}
              <strong>Make square by cropping</strong> to trim edges, or select{' '}
              <strong>Make square by extending</strong> to add empty space. These settings
              apply to images served by FIFU CDN or FIFU Cloud. If you also need to move
              remote image files into FIFU Cloud, see the{' '}
              <Link to="/features/upload-to-cloud/">Upload to Cloud guide</Link>. For the
              crop and extend tradeoff, see{' '}
              <Link to="/features/square-image-options/">Square Image Options</Link>.
            </dd>
          </div>
          <div>
            <dt>
              <strong>Sizes → Registered sizes</strong>
            </dt>
            <dd>
              Review detected size names, dimensions, crop behavior, and the page types
              that requested them. FIFU records these as pages are visited. Edit a row’s
              width, height, or crop checkbox and select <strong>Save</strong> to override
              its detected values. <strong>Reset</strong> clears detected and saved
              overrides; browsing the relevant page types again repopulates the list.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="optimized-limits-title" help>
        <FeatureGuideHeading
          id="optimized-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE · TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check what the optimizer can process.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Featured-image resizing</dt>
            <dd>
              Enable optimization for featured images and make sure the
              original image is publicly accessible. FIFU requests
              an appropriate size when the selected CDN supports it.
            </dd>
          </div>
          <div>
            <dt>Post-content optimization</dt>
            <dd>
              Enable the separate option for images inside post content.
              FIFU optimizes eligible images and can load them lazily.
              Check published pages if your theme uses custom image layouts.
            </dd>
          </div>
          <div>
            <dt>If an image does not change</dt>
            <dd>
              Confirm that the corresponding optimization option is on
              and the image opens in a browser. Some hosts and file types
              are not supported by every CDN; check the selected
              delivery option and test the published page.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}

function SquareImageOptionsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Square Image Options"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Choose independent square image treatments for desktop and mobile requests served
        through FIFU CDN or FIFU Cloud.
      </p>

      <FeatureGuideHighlight id="square-images-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> IMAGE SHAPE
          </span>
          <h2 id="square-images-intro">Fit image shape to your layout.</h2>
          <p>
            Crop to fill a square, or extend the image with empty space to preserve its
            full contents. Set each screen size independently.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/square-image-options-guide-1.png"
            alt="Desktop and mobile square image choices lead to cropped or extended square versions of an image."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="square-purpose-title">
        <FeatureGuideHeading
          id="square-purpose-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE SQUARE OUTPUT
          </>}
          >
          Match square placements without changing the source image.
        </FeatureGuideHeading>
        <p>
          A theme or layout may request a square image even when your source is landscape
          or portrait. These choices change the delivered image dimensions: cropping fills
          the square but removes outer content; extending keeps the full image and adds
          blank space. This can give cards and grids consistent image boxes while letting
          you choose whether framing or complete image content matters more.
        </p>
        <p>
          Use the options when remote images delivered through{' '}
          <Link to="/features/optimized-images/">Optimized Images</Link> need square
          framing on one or both device types. Leave a device selection empty when you
          want its registered image sizes instead; you do not need square output if your
          design already uses varied image proportions.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="square-settings-title">
        <FeatureGuideHeading
          id="square-settings-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONFIGURE · IMAGE SIZES
          </>}
          >
          Set desktop and mobile separately.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>
                FIFU → Settings → Image → Optimized Images → Sizes → Make all images
                square
              </strong>
              .
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For <strong>Desktop computer</strong>, choose{' '}
              <strong>Make square by cropping</strong> or{' '}
              <strong>Make square by extending</strong>, or leave the selection empty. The
              selection saves when it changes.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Set <strong>Mobile phone</strong> independently. Its selection also saves
              when it changes, and the settings screen reports whether the save succeeded.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="square-options-title">
        <FeatureGuideHeading
          id="square-options-title"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            AVAILABLE CHOICES
          </>}
          >
          Choose how each square is made.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Make square by cropping</dt>
            <dd>
              Cuts off parts of the image. The square is filled, but edge content may be
              lost.
            </dd>
          </div>
          <div>
            <dt>Make square by extending</dt>
            <dd>
              Adds empty space around the image to make it square, keeping the original
              image content visible.
            </dd>
          </div>
          <div>
            <dt>Empty selection</dt>
            <dd>
              Does not force a square; registered image sizes are applied automatically.
            </dd>
          </div>
          <div>
            <dt>Desktop computer / Mobile phone</dt>
            <dd>
              Each saved choice applies to its corresponding request device, so you can
              use different treatments or disable square output on either one.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="square-scope-title" help>
        <FeatureGuideHeading
          id="square-scope-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            SCOPE AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check the delivery path and device selection.
        </FeatureGuideHeading>
        <p>
              These options apply only to images delivered through FIFU CDN or FIFU Cloud. Other images keep their normal appearance.
            </p>
        <p>
          If an image remains rectangular, confirm that its delivery uses FIFU CDN or FIFU
          Cloud and that the matching device selection is not empty. If the entire image
          remains visible with added space, the device is set to extend; if edges
          disappear, it is set to crop.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function FeaturedImagesRssGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Images in RSS Feeds"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Give a post a featured image and its RSS 2 item can carry that image URL for
        compatible feed readers and email services.
      </p>

      <FeatureGuideHighlight id="rss-feature-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Rss size={15} aria-hidden="true" /> RSS 2 FEED MEDIA
          </span>
          <h2 id="rss-feature-intro">Put the post image in the feed item.</h2>
          <p>
            RSS readers and connected email services can use the image directly from the
            item, even when the post uses a remote FIFU image.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/featured-images-in-rss-feeds-guide-1.png"
            alt="A post image is added to an RSS item as media content and shown in an email feed reader."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="rss-feature-purpose-title">
        <FeatureGuideHeading
          id="rss-feature-purpose-title"
          icon={<>
            <Rss size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY INCLUDE IMAGES
          </>}
          >
          Make feed items useful beyond your site.
        </FeatureGuideHeading>
        <p>
          A feed item may otherwise contain only its text and links. Adding the featured
          image URL lets a compatible reader or email service display the same visual
          alongside the item, which can make image-led updates easier to recognize and
          scan without uploading a separate feed copy.
        </p>
        <p>
          Use this when you distribute posts through RSS readers or a service that
          consumes RSS items. It is automatic; you do not need it if your feed consumers
          ignore Media RSS image entries or your posts do not use featured images.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="rss-feature-workflow-title">
        <FeatureGuideHeading
          id="rss-feature-workflow-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            AUTOMATIC WORKFLOW
          </>}
          >
          Add an image to a feed item.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Set the post’s featured media with FIFU, or assign a WordPress featured
              image.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Let WordPress generate its RSS 2 item. No FIFU RSS setting or per-post
              action is required.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              When an image URL resolves, the item receives{' '}
              <code>&lt;media:content medium="image"&gt;</code> with that URL. The feed
              declares the Media RSS namespace automatically.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="rss-feature-coverage-title" help>
        <FeatureGuideHeading
          id="rss-feature-coverage-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            IMAGE SELECTION AND LIMITS
          </>}
          tone="help"
          >
          Know which image URL is included.
        </FeatureGuideHeading>
        <p>
          The resolved FIFU main image is used first; if that does not resolve, the
          WordPress featured attachment URL is used. If neither produces a URL, the item
          has no <code>media:content</code> image entry.
        </p>
        <p>
          When images use{' '}
          <Link to="/features/optimized-images/">Optimized Images</Link>,
          FIFU provides a compatible image URL for the feed.
          The final display depends on the feed reader.
        </p>
        <p>
              Check that the image URL works and that the feed reader supports images. Not every feed reader displays them.
            </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link> and <Link to="/features/image-seo/">Image SEO</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function BbpressBuddybossGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="bbPress and BuddyBoss Platform"
      className="feature-guide-page"
    >
      <p className="lead">
        Enable the shared integration, then add remote images to bbPress discussions or
        paste image links into BuddyBoss activity.
      </p>
      <FeatureGuideHighlight id="community-media-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MessageSquare size={15} aria-hidden="true" /> DISCUSSION MEDIA
          </span>
          <h2 id="community-media-intro">Put remote images beside the conversation.</h2>
          <p>
            Add a URL in a bbPress topic or reply form, or paste a direct image link into
            a BuddyBoss activity editor.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/bbpress-and-buddyboss-platform-guide-1.png"
            alt="Add a remote image to a bbPress discussion or BuddyBoss activity and display it with the conversation"
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="community-context-title">
        <FeatureGuideHeading
          id="community-context-title"
          icon={<>
            <UsersRound size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Give forum and activity posts a place for remote images.
        </FeatureGuideHeading>
        <p>
          Community forms do not use the usual FIFU post editor. This integration adds a
          remote image URL field to bbPress topic and reply forms and converts direct
          image links in BuddyBoss activity posts and comments into inline images. Use it
          when members need to share visual context in either platform; if your site uses
          neither, leave the switch off.
        </p>
        <p>
          Keeping an image with its discussion can make the context visible at a glance
          and saves members from leaving the conversation to open a link. The URL-based
          workflow references an image hosted elsewhere instead of uploading that image
          through these forms.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="community-setup-title">
        <FeatureGuideHeading
          id="community-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE
          </>}
          >
          Turn on the shared community option.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Image</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>bbPress and BuddyBoss Platform</strong>. This is one shared
              on/off option for both integrations; there are no separate switches here.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          Keep bbPress active to use the forum field and display hooks. Keep BuddyBoss
          Platform active for activity conversion. Its Activity component must be active
          for the front-end paste helper and styles to load.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="bbpress-flow-title">
        <FeatureGuideHeading
          id="bbpress-flow-title"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BBPRESS
          </>}
          >
          Add an image URL to a topic or reply.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In a topic or reply form, enter a remote image URL in the{' '}
              <strong>Image</strong> field, then save the topic or reply. When editing
              one, the field is filled with its saved FIFU URL when one exists.
            </p>
          </li>
        </FeatureGuideSteps>
        <FeatureGuideOptions>
          <div>
            <dt>Where the image appears</dt>
            <dd>
              A saved FIFU URL appears beside forum and topic titles and after topic and
              reply content. Without one, output falls back to the resolved main image
              when available. A forum title can show a resolved image, but only topic and
              reply forms have the <strong>Image</strong> URL field.
            </dd>
          </div>
          <div>
            <dt>Check the address</dt>
            <dd>
              The field does not check whether the image loads. Use a direct image URL
              that visitors can access.
            </dd>
          </div>
          <div>
            <dt>Display size</dt>
            <dd>
              Images beside titles are shown as compact thumbnails.
              Images in discussions may appear larger, depending
              on the theme.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="buddyboss-flow-title">
        <FeatureGuideHeading
          id="buddyboss-flow-title"
          icon={<>
            <MessageSquare size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BUDDYBOSS ACTIVITY
          </>}
          >
          Paste direct image links into activity.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In an activity post or comment editor, paste a direct image URL. The helper
              checks whether it loads, inserts a successful image inline, and adds a
              remove control. Remove an image before submitting with that control; in a
              rich text editor, use Enter or Space to activate it.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Submit the activity. The image appears in the post or comment. Repeated
              copies of the same image link are deduplicated in the displayed content.
            </p>
          </li>
        </FeatureGuideSteps>
        <FeatureGuideOptions>
          <div>
            <dt>Paste helper suffixes</dt>
            <dd>
              Paste a publicly accessible direct image URL in a
              supported image format. FIFU checks that the image
              loads before inserting it.
            </dd>
          </div>
          <div>
            <dt>Typed links and saved content</dt>
            <dd>
              Direct image links can also be converted in displayed
              activity content. If a link stays as text, try
              pasting it into the activity editor.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="community-troubleshooting-title" help>
        <FeatureGuideHeading
          id="community-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check the matching platform and image path.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>bbPress field or image is missing</dt>
            <dd>
              Confirm bbPress is active and the shared switch is on. The URL field is in
              topic and reply forms, not the forum title form. A displayed image needs a
              saved FIFU URL or another resolvable main image.
            </dd>
          </div>
          <div>
            <dt>BuddyBoss paste does not insert an image</dt>
            <dd>
              Confirm BuddyBoss Platform and its Activity component
              are active. Paste a direct image URL that opens
              successfully without signing in.
            </dd>
          </div>
          
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>, <Link to="/features/taxonomy-image/">Taxonomy Image</Link> and <Link to="/features/fifu-shortcode/">FIFU Shortcode</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}

function PlaybackLoopGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Playback Loop"
      className="feature-guide-page playback-loop-feature-page"
    >
      <p className="lead">
        Choose whether supported featured videos restart automatically when playback
        reaches the end.
      </p>

      <FeatureGuideHighlight id="playback-loop-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <RefreshCw size={15} aria-hidden="true" /> VIDEO PLAYBACK
          </span>
          <h2 id="playback-loop-intro">Let a finished clip start again.</h2>
          <p>
            Without looping, a visitor must replay a clip after it ends. This site-wide
            switch can keep demonstrations and product videos available without another
            play action; leave it off when a clip should finish naturally.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/playback-loop-guide-1.png"
            alt="Turn on the Playback Loop setting, then a featured video repeats from the end to the beginning."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="playback-loop-enable-title">
        <FeatureGuideHeading
          id="playback-loop-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WORDPRESS DASHBOARD
          </>}
          >
          Turn on the site-wide switch.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In your WordPress dashboard, open <strong>FIFU → Video</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find <strong>Playback Loop</strong> and switch it on. This one setting
              applies to supported featured video players across your site.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="playback-loop-coverage-title">
        <FeatureGuideHeading
          id="playback-loop-coverage-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE
          </>}
          >
          Where the switch applies.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Supported players</dt>
            <dd>YouTube, Vimeo, local videos, and remote video files.</dd>
          </div>
          <div>
            <dt>Setting scope</dt>
            <dd>
              One global on/off switch controls looping wherever supported featured
              players are rendered. There is no separate per-video loop setting.
            </dd>
          </div>
          <div>
            <dt>What changes</dt>
            <dd>
              When enabled, supported featured videos repeat after they finish. The exact behavior depends on the video service.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          If you also need to adjust provider-specific embed behavior, read the{' '}
          <Link to="/features/youtube-options/">YouTube options</Link> or{' '}
          <Link to="/features/vimeo-options/">Vimeo options</Link> guide. The loop switch
          itself remains global.
        </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="playback-loop-cli-title"
        commands={[
          {
            label: 'Enable looping',
            command: 'wp fifu video --loop=on',
          },
          {
            label: 'Disable looping',
            command: 'wp fifu video --loop=off',
          },
        ]}
      />

      <FeatureGuideSection id="playback-loop-help-title" help>
        <FeatureGuideHeading
          id="playback-loop-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If a video stops at the end.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>1</span>
            <p>
              Confirm Playback Loop is on in <strong>FIFU → Video</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Confirm the displayed featured video uses YouTube, Vimeo, a local video, or
              a remote video file. Other player types are not listed for this setting.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function MuteGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Mute"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Choose whether featured videos start silently on desktop, mobile, or both from
        FIFU’s Video settings.
      </p>

      <FeatureGuideHighlight id="mute-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <VolumeX size={15} aria-hidden="true" /> VIDEO PLAYBACK
          </span>
          <h2 id="mute-intro">Choose the sound your visitors hear.</h2>
          <p>
            Separate device controls let you start featured videos without audio where
            sound would be disruptive, while preserving sound on the other device type.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/mute-guide-1.png"
            alt="Desktop and mobile mute settings lead to a featured video playing silently"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="mute-purpose-title">
        <FeatureGuideHeading
          id="mute-purpose-title"
          icon={<>
            <VolumeX size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE MUTE
          </>}
          >
          Control unexpected sound.
        </FeatureGuideHeading>
        <p>
              Turn on <strong>Mute</strong> when you want featured videos to start silently, especially when using <Link to="/features/autoplay/">Autoplay</Link> or <Link to="/features/autoplay-on-mouseover/">Autoplay on Mouseover</Link>. Leave it off when videos should start with sound.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="mute-setup-title">
        <FeatureGuideHeading
          id="mute-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS · VIDEO / AUDIO
          </>}
          >
          Set each device control.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Video / Audio</strong>. Find
              the <strong>Mute</strong> controls.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>on desktop</strong>, <strong>on mobile phone</strong>, or
              both. The two switches are saved independently when you change them.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Test the result on desktop and mobile, since each has its own setting.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="mute-coverage-title">
        <FeatureGuideHeading
          id="mute-coverage-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COVERAGE AND LIMITS
          </>}
          >
          Where the setting applies.
        </FeatureGuideHeading>
        <p>
          Mute applies to supported featured video players,
          including YouTube, Vimeo, and direct video files.
          The device setting determines the starting sound
          state; visitors can still change it with player controls.
        </p>
      </FeatureGuideSection>

            <FeatureCliSection
        id="mute-cli-title"
        commands={[
          {
            label: 'Mute desktop videos',
            command: 'wp fifu video --mute-desktop=on',
          },
          {
            label: 'Allow sound on desktop',
            command: 'wp fifu video --mute-desktop=off',
          },
          {
            label: 'Mute mobile videos',
            command: 'wp fifu video --mute-mobile=on',
          },
          {
            label: 'Allow sound on mobile',
            command: 'wp fifu video --mute-mobile=off',
          },
        ]}
      />

      <FeatureGuideSection id="mute-help-title" help>
        <FeatureGuideHeading
          id="mute-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If playback starts with sound.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>1</span>
            <p>
              Desktop and mobile have separate mute settings. Check the setting for the device you are using.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Confirm the video uses a supported player and check
              its sound controls. Some external services manage
              audio independently.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/background-video/">Background Video</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function YoutubeOptionsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="YouTube options"
      className="feature-guide-page"
    >
      <p className="lead">
        Route supported YouTube video embeds through YouTube’s privacy enhanced domain
        with one setting.
      </p>

      <FeatureGuideHighlight id="youtube-options-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShieldCheck size={15} aria-hidden="true" /> YOUTUBE VIDEO EMBEDS
          </span>
          <h2 id="youtube-options-intro">
            Keep embedded views separate from YouTube browsing.
          </h2>
          <p>
            Turn on <strong>Privacy Enhanced Mode</strong> to use{' '}
            <code>youtube-nocookie.com</code> for supported embeds. This can keep views on
            your site from affecting the viewer’s YouTube browsing experience. Use it when
            you embed YouTube videos and want that separation; it is optional if you do
            not embed YouTube videos or prefer the regular embed domain.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/youtube-options-guide-1.png"
            alt="Enable Privacy Enhanced Mode and route a supported YouTube embed through youtube-nocookie.com."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="youtube-options-setup-title">
        <FeatureGuideHeading
          id="youtube-options-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS · YOUTUBE ONLY
          </>}
          >
          Enable the setting.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Video</strong> and find{' '}
              <strong>YouTube options</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Privacy Enhanced Mode</strong>. The toggle submits and saves
              the setting immediately.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Play a FIFU YouTube video on your site to confirm it works after enabling the setting.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="youtube-options-coverage-title">
        <FeatureGuideHeading
          id="youtube-options-coverage-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            EFFECT AND SCOPE
          </>}
          >
          What changes when it is on.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>On</dt>
            <dd>
              Supported YouTube embed URLs use <code>youtube-nocookie.com</code>. The
              embedded view is kept separate from the viewer’s YouTube browsing
              experience.
            </dd>
          </div>
          <div>
            <dt>Off</dt>
            <dd>
              Supported embeds keep the regular <code>youtube.com</code> host.
            </dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>
              The YouTube address saved with your post does not change. Other video services are unaffected.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

            <FeatureCliSection
        id="youtube-options-cli-title"
        commands={[
          {
            label: 'Enable privacy-enhanced YouTube',
            command: 'wp fifu video --privacy=on',
          },
          {
            label: 'Use regular YouTube embeds',
            command: 'wp fifu video --privacy=off',
          },
        ]}
      />

      <FeatureGuideSection id="youtube-options-help-title" help>
        <FeatureGuideHeading
          id="youtube-options-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the embed still uses youtube.com.
        </FeatureGuideHeading>
        <p>
              Make sure the setting is on and test with a YouTube video added through FIFU.
            </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function PrivacyEnhancedModeGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Privacy Enhanced Mode"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Route supported YouTube video embeds through YouTube’s privacy-enhanced domain by
        turning on one FIFU setting.
      </p>
      <FeatureGuideHighlight id="privacy-enhanced-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShieldCheck size={15} aria-hidden="true" /> YOUTUBE VIDEO EMBEDS
          </span>
          <h2 id="privacy-enhanced-intro">
            Keep embedded views separate from YouTube browsing.
          </h2>
          <p>
            The setting changes supported rendered YouTube embed hosts to{' '}
            <code>youtube-nocookie.com</code>. This helps embedded views avoid affecting a
            viewer’s YouTube browsing experience. Use it when your site embeds YouTube
            videos and you want that separation; it is optional if you have no YouTube
            embeds or prefer the regular YouTube host.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/privacy-enhanced-mode-guide-1.png"
            alt="Turn on FIFU privacy enhanced mode, change a YouTube embed to youtube-nocookie.com, and display the video on a site."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="privacy-enhanced-settings-title">
        <FeatureGuideHeading
          id="privacy-enhanced-settings-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETTINGS · YOUTUBE ONLY
          </>}
          >
          Enable the setting.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Video</strong> and find{' '}
              <Link to="/features/youtube-options/">YouTube options</Link>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>privacy enhanced mode</strong>. The toggle submits and saves
              the setting immediately.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open a page with a FIFU YouTube video to confirm it plays normally with privacy-enhanced mode enabled.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="privacy-enhanced-scope-title">
        <FeatureGuideHeading
          id="privacy-enhanced-scope-title"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SCOPE AND OPTIONS
          </>}
          >
          What changes
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Privacy Enhanced Mode</dt>
            <dd>
              When on, FIFU uses YouTube's privacy-enhanced playback mode for supported embeds. The original address saved with your post stays unchanged.
            </dd>
          </div>
          <div>
            <dt>Coverage</dt>
            <dd>
              YouTube only. Other providers are unaffected. The host change applies to
              rendered embeds in{' '}
              <Link to="/features/featured-slider/">Featured Slider</Link>,
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link>, and
              the <Link to="/features/lightbox-and-zoom/">WooCommerce lightbox</Link>; it
              does not change a video file URL.
            </dd>
          </div>
          
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureCliSection
        id="privacy-enhanced-cli"
        commands={[
          {
            label: 'Enable privacy-enhanced YouTube playback',
            command: 'wp fifu video --privacy=on',
          },
          {
            label: 'Disable privacy-enhanced playback',
            command: 'wp fifu video --privacy=off',
          },
        ]}
      />

      <FeatureGuideSection id="privacy-enhanced-check-title" help>
        <FeatureGuideHeading
          id="privacy-enhanced-check-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK THE RESULT
          </>}
          tone="help"
          >
          If the regular host still appears
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              Make sure the setting is enabled, then reload a page that displays a FIFU YouTube video.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={14} aria-hidden="true" />
            </span>
            <p>
              This applies to rendered YouTube embeds. A direct video file or a different
              provider does not become a YouTube privacy embed.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function WpAllImportAddonGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="WP All Import add-on"
      className="feature-guide-page"
    >
      <p className="lead">
        Assign remote featured images, product galleries, videos, and other FIFU
        media while WP All Import creates or updates your content.
      </p>

      <FeatureGuideHighlight id="wai-import-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Puzzle size={15} aria-hidden="true" /> BULK MEDIA MAPPING
          </span>
          <h2 id="wai-import-purpose">Bring remote media into the same import.</h2>
          <p>
            The add-on adds a dedicated FIFU panel to WP All Import. Map the
            image or video URLs in your CSV or XML to the matching FIFU fields
            once, then reuse the import for new or updated records. Remote
            images remain hosted at their original addresses instead of
            being copied into the WordPress Media Library.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/wp-all-import-add-on-guide-1.png"
            alt="A product image URL is mapped to the FIFU product image and gallery field, then appears in the imported product gallery."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="wai-setup-title">
        <FeatureGuideHeading
          id="wai-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            START AN IMPORT
          </>}
          >
          Map fields in the FIFU panel.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Activate FIFU Premium and either WP All Import or WP All Import Pro. Start a
              new import or edit a saved one, choose your source, and select the content
              type you are importing.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              On the import field-mapping screen, open the automatically added{' '}
              <strong>FIFU</strong> panel. Drag a source field into the matching FIFU
              input, or type a fixed value when every imported record should receive the
              same value.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              For lists, separate image URLs with <code>|</code> by default.
              Match alternative-text entries to their corresponding images
              in the same order. If your source uses a different separator,
              set <strong>List delimiter</strong> when that field is available.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Configure other post and product fields normally, but map
              remote media through the <strong>FIFU</strong> panel.
              Review the import settings and run a small sample first.
              The FAQ below explains common mapping mistakes.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              Finish the import and check a small sample in the WordPress editor
              and on the storefront. Verify both the main image and gallery
              before importing your entire catalog. For later updates, confirm
              WP All Import is configured to update existing matching records.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          This guide covers WP All Import. If you are importing products with
          WooCommerce's built-in CSV importer instead, use the{' '}
          <Link to="/features/woocommerce-import/">WooCommerce import guide</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="wai-content-title">
        <FeatureGuideHeading
          id="wai-content-title"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            POSTS, PAGES AND TAXONOMIES
          </>}
          >
          Choose featured media for non-product content.
        </FeatureGuideHeading>
        <p>
          For posts, pages, and supported custom post types, use the
          featured-image field rather than WooCommerce's product list.
          Taxonomy imports can also use <strong>Featured image (URL)</strong>{' '}
          and <strong>Featured image title</strong> for term images.
          See <Link to="/features/taxonomy-image/">Taxonomy Image</Link>
          for where those images appear.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Featured image (URL)</dt>
            <dd>
              The remote image URL used as the featured image. For WooCommerce products,
              use the product list field below instead.
            </dd>
          </div>
          <div>
            <dt>Featured image title</dt>
            <dd>
              Alternative text for the featured image. If left empty, the post title is
              used.
            </dd>
          </div>
          <div>
            <dt>Featured video (URL)</dt>
            <dd>
              A video URL for{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
              This field appears when the video feature is enabled,
              and the video must also be supported by FIFU.
            </dd>
          </div>
          <div>
            <dt>
              <Link to="/features/featured-slider/">Featured slider (URLs)</Link>
            </dt>
            <dd>
              An ordered list of image URLs for a Featured Slider.
              This field appears when <strong>Featured Slider</strong>{' '}
              is enabled. On regular posts, choose the slider or a
              single featured image rather than configuring both.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="wai-products-title">
        <FeatureGuideHeading
          id="wai-products-title"
          icon={<>
            <ShoppingCart size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WOOCOMMERCE PRODUCTS
          </>}
          >
          Import product media as ordered lists.
        </FeatureGuideHeading>
        <p>
          Map image and gallery URLs in one field. Its first URL becomes the main product
          image and the remaining URLs become gallery images. Product video URLs can also
          be added to the product media gallery.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Product image URL + gallery URLs</dt>
            <dd>
              Put the main image first, followed by gallery image URLs. This is the image
              field for a product; product imports do not use the single{' '}
              <strong>Featured image (URL)</strong> field.
            </dd>
          </div>
          <div>
            <dt>Product image title + gallery titles</dt>
            <dd>
              Alternative text in the same order as the image URLs. If the list is empty,
              the product title is used for each image.
            </dd>
          </div>
          <div>
            <dt>Product video URL + gallery URLs</dt>
            <dd>
              Add the featured video and other video URLs in their own
              list, using the configured delimiter. The video list
              does not need to match image-list positions. Images
              and videos share the same product gallery. This field
              appears when{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>{' '}
              is enabled.
            </dd>
          </div>
          <div>
            <dt>
              <Link to="/features/featured-slider/">Featured slider (URLs)</Link>
            </dt>
            <dd>
              Use an ordered list of slide URLs when the product should
              display a Featured Slider. A nonempty slider list takes
              priority over regular image and video lists. Avoid
              mapping both types of featured media for the same product.
            </dd>
          </div>
          <div>
            <dt>List delimiter</dt>
            <dd>
              The separator between URLs or descriptions, normally
              <code>|</code>. Change it when your source uses another
              separator; FIFU normalizes the imported lists.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Example: map{' '}
          <code>https://example.com/front.jpg|https://example.com/side.jpg</code> to{' '}
          <strong>Product image URL + gallery URLs</strong> and{' '}
          <code>Front view|Side view</code> to{' '}
          <strong>Product image title + gallery titles</strong>. The front image and title
          stay paired as the main image; the second pair becomes a gallery image and its
          alternative text.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="wai-variations-title">
        <FeatureGuideHeading
          id="wai-variations-title"
          icon={<>
            <UsersRound size={19} aria-hidden="true" />
          </>}
          kicker={<>
            VARIABLE PRODUCTS
          </>}
          >
          Keep variation media tied to each variation.
        </FeatureGuideHeading>
        <p>
          For variable products imported with nested variation records,
          include each variation's <code>sku</code> and{' '}
          <code>fifu_list_url</code> together so FIFU can assign
          its images. Check the variation images after importing.
          The FAQ below includes downloadable XML and Import
          template examples for this workflow.
        </p>
      </FeatureGuideSection>


      <FeatureGuideSection id="wai-optional-title">
        <FeatureGuideHeading
          id="wai-optional-title"
          icon={<>
            <Tags size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL FEATURES
          </>}
          >
          Import values for other FIFU features.
        </FeatureGuideHeading>
        <p>
          When their corresponding FIFU features are enabled, the
          mapping panel also offers these fields. The imported value
          supplies the feature with data; each feature still needs
          its own configuration.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>ASIN</dt>
            <dd>
              An Amazon product identifier for{' '}
              <Link to="/features/auto-set-product-images-from-asin/">
                Auto set product images from ASIN
              </Link>
              . The mapping supplies the identifier; configure that image lookup feature
              separately.
            </dd>
          </div>
          <div>
            <dt>Media finder (webpage URL)</dt>
            <dd>
              The source-page address used by{' '}
              <Link to="/features/auto-set-featured-media-using-web-page-address/">
                Auto set featured media using web page address
              </Link>
              . This field supplies the address; it does not itself fetch media during the
              import.
            </dd>
          </div>
          <div>
            <dt>Page redirection (forwarding URL)</dt>
            <dd>
              A destination address for{' '}
              <Link to="/features/page-redirection/">Page redirection</Link>. Configure
              that feature separately to use the imported address.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="wai-faq-title">
        <FeatureGuideHeading
          id="wai-faq-title"
          icon={<>
            <Puzzle size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FIFU ADD-ON FAQ
          </>}
          >
          Examples, delimiters, and common mistakes.
        </FeatureGuideHeading>
        <p>
          Find these examples under{' '}
          <strong>FIFU → Settings → WP All Import → FAQ</strong>.
          The adjacent <strong>Importing...</strong> tab also has a{' '}
          <strong>CSV example</strong> you can download.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Importing variable products</dt>
            <dd>
              For the WooCommerce variation setup, see the{' '}
              <a
                href="https://www.wpallimport.com/documentation/import-variable-products-woocommerce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                official WP All Import guide
              </a>.
              It covers parent products, variation attributes,
              SKUs, and the <strong>Variations as Child XML Element</strong>{' '}
              option.
            </dd>
          </div>
          <div>
            <dt>Variations as Child XML Elements: sample files</dt>
            <dd>
              FIFU provides downloadable <strong>XML</strong> and{' '}
              <strong>Import template</strong> files in its FAQ.
              The XML contains a parent product with nested{' '}
              <code>variant</code> elements, each carrying a
              variation <code>sku</code> and <code>fifu_list_url</code>.
              Use these examples to understand the required
              relationship between parent and variation media,
              then adapt the mappings to your own import.
            </dd>
          </div>
          <div>
            <dt>Keep the standard Images section empty</dt>
            <dd>
              Do not add filenames or image URLs to WP All
              Import's <strong>Images</strong> fields when those
              images are handled by FIFU. Put their URLs in the
              FIFU panel instead to avoid competing image imports.
            </dd>
          </div>
          <div>
            <dt>Do not duplicate FIFU custom fields</dt>
            <dd>
              Avoid adding FIFU keys to WP All Import's{' '}
              <strong>Custom Fields</strong> section. The FIFU
              add-on supplies its own fields and processes
              those values during the import.
            </dd>
          </div>
          <div>
            <dt>Comma-separated image lists</dt>
            <dd>
              If a source contains{' '}
              <code>https://example.com/a.jpg,https://example.com/b.jpg</code>,
              enter a comma (<code>,</code>) in{' '}
              <strong>List delimiter</strong>. The add-on
              interprets that separator and normalizes
              the list for FIFU.
            </dd>
          </div>
          <div>
            <dt>Image URLs in different columns</dt>
            <dd>
              Combine several source fields in one product image list,
              for example{' '}
              <code>{'{columnA[1]}|{columnB[1]}|{columnC[1]}'}</code>.
              WP All Import inserts each column's value; the
              vertical bars separate the image URLs. Put the
              featured image column first, followed by gallery
              image columns.
            </dd>
          </div>
          <div>
            <dt>Exporting existing local image URLs</dt>
            <dd>
              WP All Export can produce image URLs from local
              attachment data instead of exporting only media
              attachment IDs. The{' '}
              <a
                href="https://www.wpallimport.com/documentation/custom-wordpress-export-php/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP All Export PHP-functions guide
              </a>{' '}
              explains how to convert attachment IDs into URLs
              and build gallery URL lists for an import file.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="wai-check-title" help>
        <FeatureGuideHeading
          id="wai-check-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK YOUR IMPORT
          </>}
          tone="help"
          >
          Resolve common mapping problems.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>The FIFU panel is missing:</strong> Confirm FIFU Premium and WP All
            Import or WP All Import Pro are active. The panel is added to the import
            mapping workflow, not the regular WordPress editor.
          </li>
          <li>
            <strong>A product image is missing:</strong> Map the URL to{' '}
            <strong>Product image URL + gallery URLs</strong>. Confirm the source value is
            a usable image URL and that the first list item is the image you expect as the
            main image.
          </li>
          <li>
            <strong>Items or alternative text are misaligned:</strong> Check that every
            list uses the right separator and that title entries follow their
            corresponding image URLs in the same order.
          </li>
          <li>
            <strong>A later import did not change media:</strong> Verify
            that WP All Import is set to update the existing records,
            their FIFU mappings are still present, and the source
            URLs actually changed. Do not map the same remote images
            through both FIFU and WP All Import's Images section.
          </li>
          <li>
            <strong>Only the slider appears:</strong> A populated{' '}
            <strong>Featured slider (URLs)</strong> mapping takes
            priority over regular image and video lists. Remove
            that mapping if you want the standard product gallery.
          </li>
          <li>
            <strong>An optional FIFU field is missing:</strong> Enable
            its related FIFU feature first. The panel shows
            different fields for posts, taxonomies, and products.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}
function WooCommerceImportGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="WooCommerce import"
      className="feature-guide-page"
    >
      <p className="lead">
        Import remote featured images, galleries, videos, and other FIFU media with
        WooCommerce's built-in product CSV importer.
      </p>
      <FeatureGuideHighlight id="wc-import-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingCart size={15} aria-hidden="true" /> WOOCOMMERCE PRODUCT IMPORT
          </span>
          <h2 id="wc-import-intro">Import product details and remote media together.</h2>
          <p>
            If your product spreadsheet already contains image or video URLs,
            you can bring them into FIFU during the normal WooCommerce CSV import.
            Products receive their remote media without manually editing each one
            or uploading the image files to WordPress.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/woocommerce-import-guide-1.png"
            alt="A product CSV maps FIFU image URL and alt-text columns, imports the product, and fills its media gallery."
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="wc-import-purpose">
        <FeatureGuideHeading
          id="wc-import-purpose"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Keep media work with your product data.
        </FeatureGuideHeading>
        <p>
          Use this workflow when creating products or updating an existing catalog.
          FIFU reads the custom metadata that WooCommerce imports for each product
          and saves the corresponding media information. The image and video URLs
          point to files hosted elsewhere; you do not have to upload those files
          to the WordPress Media Library first. If you normally edit your
          products one by one, you can continue using the FIFU product editor instead.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="wc-import-steps">
        <FeatureGuideHeading
          id="wc-import-steps"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PREPARE AND IMPORT
          </>}
          >
          Prepare the CSV and run the importer.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Prepare a WooCommerce product CSV with your usual product fields,
              such as <strong>Name</strong> and <strong>SKU</strong>. Add one
              column for each FIFU field you need. Prefix custom metadata
              headers with <code>meta:</code>, for example{' '}
              <code>meta:fifu_list_url</code>. Separate multiple media URLs
              within one cell with <code>|</code>, in the order you want them
              displayed.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              To find the supported field names, open{' '}
              <strong>FIFU → Settings → WooCommerce → Import → Custom fields</strong>.
              This tab is a <strong>reference list</strong>, not a place to
              configure the import. The adjacent{' '}
              <strong>Importing products...</strong> tab has a{' '}
              <strong>CSV example</strong>; check its headers against your
              WooCommerce import before using it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Go to <strong>Products → All Products → Import</strong> in
              WooCommerce, select your CSV, and choose{' '}
              <strong>Update existing products</strong> if you are updating
              products already in the store. Use their existing IDs or SKUs
              so WooCommerce can match the rows. Select{' '}
              <strong>Continue</strong>.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              On the <strong>Column mapping</strong> screen, check that each
              FIFU column is mapped to <strong>Import as meta data</strong>
              with the correct field name. Headers starting with{' '}
              <code>meta:</code> are normally recognized automatically.
              Correct any column mapped to <strong>Do not import</strong>,
              then select <strong>Run the importer</strong>.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              After the import finishes, open one imported product to check
              its featured image and other media. FIFU processes the imported
              fields and synchronizes the corresponding WooCommerce media
              information.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          For example, put{' '}
          <code>https://example.com/front.jpg|https://example.com/side.jpg</code>{' '}
          under <code>meta:fifu_list_url</code> and{' '}
          <code>Front view|Side view</code> under <code>meta:fifu_list_alt</code>.
          The first URL is the featured image; the second is a gallery image.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="wc-import-fields">
        <FeatureGuideHeading
          id="wc-import-fields"
          icon={<>
            <Tags size={19} aria-hidden="true" />
          </>}
          kicker={<>
            IMAGE, VIDEO AND SLIDER FIELDS
          </>}
          >
          Choose the media fields you need.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>
              <code>fifu_list_url</code>
            </dt>
            <dd>
              Remote image URLs. The first is the product's featured image;
              remaining URLs become its gallery images. Separate them with{' '}
              <code>|</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_alt</code>
            </dt>
            <dd>
              Alternative text matching the image URLs, in the same order.
              Use <code>|</code> between descriptions; preserve empty positions
              if an image has no alternative text.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_video_url</code>
            </dt>
            <dd>
              Featured video and additional video URLs, separated with{' '}
              <code>|</code>. Image and video items belong to the same
              product gallery, not separate WooCommerce gallery editors.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_slider_list_url</code>
            </dt>
            <dd>
              Image URLs for a FIFU Featured Slider, separated with{' '}
              <code>|</code>. This is distinct from adding extra images to
              the regular product gallery.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_slider_list_alt</code>
            </dt>
            <dd>
              Alternative text for the slider images, in the same order
              as <code>fifu_slider_list_url</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_iframe_url</code>
            </dt>
            <dd>
              Optional iframe URLs associated with product media items,
              separated with <code>|</code>. These can be used for
              embeddable content in the gallery's lightbox.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          For standard product images and videos, use the image and video
          list fields. Use the slider fields only when you want a{' '}
          <Link to="/features/featured-slider/">Featured Slider</Link>.
          A saved slider can take priority over the other featured media.
          See <Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link>{' '}
          for storefront display options.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="wc-import-other-fields">
        <FeatureGuideHeading
          id="wc-import-other-fields"
          icon={<>
            <Tags size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL AUTOMATION AND LINKS
          </>}
          >
          Other metadata you can import.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>
              <code>fifu_asin</code>
            </dt>
            <dd>
              The product's Amazon ASIN. Use it with{' '}
              <Link to="/features/auto-set-product-images-from-asin/">
                Auto set product images from ASIN
              </Link>{' '}
              when automatic Amazon image lookup is enabled.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_finder_url</code>
            </dt>
            <dd>
              A webpage address used by{' '}
              <Link to="/features/auto-set-featured-media-using-web-page-address/">
                Auto set featured media using web page address
              </Link>{' '}
              to find media.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_redirection_url</code>
            </dt>
            <dd>
              The destination for{' '}
              <Link to="/features/page-redirection/">Page redirection</Link>,
              which can redirect clicks on the featured image.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          These fields support other FIFU features. Importing a value
          does not automatically enable the feature that uses it.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="wc-import-notes" help>
        <FeatureGuideHeading
          id="wc-import-notes"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK THE RESULT
          </>}
          tone="help"
          >
          Avoid common import mistakes.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>A FIFU column was ignored:</strong> Check that its CSV
            header starts with <code>meta:</code> or that you selected{' '}
            <strong>Import as meta data</strong> on the mapping screen.
            The name after <code>meta:</code> must match the FIFU key.
          </li>
          <li>
            <strong>Images appear in the wrong order:</strong> Put the
            featured image first in <code>fifu_list_url</code>.
            Use <code>|</code> to separate URLs and align alternative
            text with those positions.
          </li>
          <li>
            <strong>Existing images disappeared after an update:</strong>{' '}
            An explicitly empty imported <code>fifu_list_url</code> or{' '}
            <code>fifu_slider_list_url</code> can clear that media
            list. When updating products, include only the media fields
            you intend to change. Check a small test import first.
          </li>
          <li>
            <strong>Unexpected featured media:</strong> A populated
            slider list can take priority over imported image and video
            lists. If importing both image and video lists, the
            selected featured-media type depends on the saved media
            priority.
          </li>
          <li>
            <strong>Product was not updated:</strong> Check its
            ID or SKU and make sure{' '}
            <strong>Update existing products</strong> was selected
            for an update import. Review WooCommerce's import report
            for skipped rows.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>
      <FeatureGuideCta />
    </Page>
  );
}

function QuickBuyGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Quick Buy"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Let customers preview WooCommerce products and purchase them directly
        from shop and category pages, without opening each product page.
      </p>

      <FeatureGuideHighlight id="quick-buy-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingCart size={15} aria-hidden="true" /> SHOP WITHOUT LEAVING THE GRID
          </span>
          <h2 id="quick-buy-intro">Preview a product and buy it sooner.</h2>
          <p>
            Quick Buy adds an expand icon to product images in WooCommerce shop and
            category grids. The preview opens over the current page and can show
            product images, descriptions, pricing, and purchase options. Customers
            can choose an item and head to checkout without visiting its full
            product page first.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/quick-buy-guide-1.png"
            alt="A shopper opens a product lightbox from a WooCommerce archive and proceeds to checkout."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="quick-buy-workflow-title">
        <FeatureGuideHeading
          id="quick-buy-workflow-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SETUP AND SHOPPER WORKFLOW
          </>}
          >
          Enable Quick Buy and test it.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → WooCommerce → Quick Buy</strong>. WooCommerce must
              be active for the feature to run.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Quick buy</strong>. The setting saves when you
              change it. You can leave the optional text fields unchanged
              to use their defaults.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Visit the storefront's <strong>Shop</strong> page or a
              product-category page. Click a product image or use its
              expand icon to open the Quick Buy preview. Where available,
              you can browse the item's images and videos, read its
              description, and check its price and availability.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              For a simple product, choose a quantity and use the purchase button
              to proceed to checkout. For a variable product, select its
              required options first. An external or affiliate product
              instead takes the customer to its configured purchase URL.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-buy-controls-title">
        <FeatureGuideHeading
          id="quick-buy-controls-title"
          icon={<>
            <ShoppingCart size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL SETTINGS
          </>}
          >
          Customize what shoppers see.
        </FeatureGuideHeading>
        <p>
          In <strong>FIFU → Settings → WooCommerce → Quick Buy</strong>, the
          following three fields are optional. They save when their values
          change and affect the information shown in the preview.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Text button</dt>
            <dd>
              Sets the default purchase-button label, such as “Buy now.”
              A product's own configured button text takes precedence.
              If neither is provided, FIFU uses “Buy now.”
            </dd>
          </div>
          <div>
            <dt>Disclaimer</dt>
            <dd>
              Shows a short message beneath the purchase button.
              Leave it empty if no extra message is needed.
            </dd>
          </div>
          <div>
            <dt>Custom field</dt>
            <dd>
              Enter a product custom-field key, for example one used
              to store a specification or note. FIFU shows the value
              saved for that product in the preview when present.
              Leave it empty to hide this extra information.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-buy-limits-title">
        <FeatureGuideHeading
          id="quick-buy-limits-title"
          icon={<>
            <ShoppingCart size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SUPPORTED PRODUCT TYPES
          </>}
          >
          How Quick Buy handles each product.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Simple products</dt>
            <dd>
              Show available pricing, stock information, and a quantity field
              when the product has a regular price. The purchase button
              sends the item and chosen quantity toward checkout.
            </dd>
          </div>
          <div>
            <dt>Variable products</dt>
            <dd>
              Shoppers select the required attributes, such as size or color,
              before the purchase button becomes available. The preview
              updates the displayed price and media when variation
              information is available. An out-of-stock variation cannot
              be purchased through Quick Buy.
            </dd>
          </div>
          <div>
            <dt>External or affiliate products</dt>
            <dd>
              The button opens the external purchase URL configured for
              that WooCommerce product instead of adding it to
              your store's checkout.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Quick Buy's built-in purchase controls cover simple, variable,
          and external products. Other product types may require the
          standard product page or a separate purchasing flow.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-buy-troubleshooting-title" help>
        <FeatureGuideHeading
          id="quick-buy-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the preview or purchase button is missing.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No expand icon:</strong> Confirm WooCommerce is active,
            <strong> Quick buy</strong> is enabled, and you are viewing
            the Shop page or a product-category page. Quick Buy is
            not intended for single-product or cart pages.
          </li>
          <li>
            <strong>No product preview:</strong> Make sure the product has
            a featured image that appears on the shop grid, then test
            clicking that image. Themes that replace the standard
            product-card markup may need compatibility adjustments.
          </li>
          <li>
            <strong>No purchase button for a variation:</strong> Select all
            required attributes and check that the combination is in stock.
          </li>
          <li>
            <strong>Need a different purchase label:</strong> Check both
            the optional <strong>Text button</strong> field and the
            product's own button text; the product-specific value wins.
          </li>
        </FeatureGuideHelpList>
        <p>
          Quick Buy's archive preview is separate from the{' '}
          <Link to="/features/lightbox-and-zoom/">Lightbox and Zoom</Link>{' '}
          controls for product galleries.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link> and <Link to="/features/remote-product-gallery-images/">Remote Product Gallery Images</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function FifuApiGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="FIFU API" className="feature-guide-page">
      <p className="lead">
        Use PHP helpers to set remote images, videos, lists, and sliders on posts or set
        image and video media on terms.
      </p>

      <FeatureGuideHighlight id="fifu-api-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Puzzle size={15} aria-hidden="true" />
            PHP DEVELOPER FUNCTIONS
          </span>
          <h2 id="fifu-api-intro">Set FIFU media as part of your workflow.</h2>
          <p>
            When your own PHP creates or updates content, these helpers apply FIFU media
            without a separate editor visit. They save FIFU media data and synchronize
            related WordPress media references, helping automated publishing keep media
            attached to the right content.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/fifu-api-guide-1.png"
            alt="A PHP helper assigns a remote featured image to a post, which then displays the image."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="fifu-api-use-title">
        <FeatureGuideHeading
          id="fifu-api-use-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Connect media to code-created content.
        </FeatureGuideHeading>
        <p>
              Use these functions in custom integrations that assign featured media automatically. You do not need them when using the FIFU editor.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="fifu-api-setup-title">
        <FeatureGuideHeading
          id="fifu-api-setup-title"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP YOUR CALL
          </>}
          >
          Add the helper where your integration runs.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Developers → FIFU API</strong>{' '}
              to find the function reference.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Put your integration in a small custom plugin or a child theme’s{' '}
              <code>functions.php</code>, so theme updates do not remove it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Call a helper after you have the target post ID or term ID. Check{' '}
              <code>function_exists()</code> before calling it so your code can handle
              FIFU being inactive.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="fifu-api-post-title">
        <FeatureGuideHeading
          id="fifu-api-post-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            POST MEDIA
          </>}
          >
          Choose the helper for the media you are saving.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>
              <code>fifu_dev_set_image( $post_id, $image_url )</code>
            </dt>
            <dd>
              Set a post’s remote featured image. Pass an empty string for{' '}
              <code>$image_url</code> to clear featured media.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_dev_set_video( $post_id, $video_url )</code>
            </dt>
            <dd>Set the post’s remote featured video.</dd>
          </div>
          <div>
            <dt>
              <code>fifu_dev_set_image_list( $post_id, $image_url_list )</code>
            </dt>
            <dd>
              Set an ordered image list. Separate URLs with vertical bars or line breaks.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_dev_set_video_list( $post_id, $video_url_list )</code>
            </dt>
            <dd>Set an ordered video list using the same separators.</dd>
          </div>
          <div>
            <dt>
              <code>fifu_dev_set_slider( $post_id, $url_list, $alt_list )</code>
            </dt>
            <dd>
              Set slider image URLs and corresponding alt text. Keep entries in matching
              order; extra alt-text entries are trimmed to the URL count.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
              Use complete image URLs. For image or video lists, separate entries as shown above.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="fifu-api-term-title">
        <FeatureGuideHeading
          id="fifu-api-term-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            TERM MEDIA
          </>}
          >
          Set an image or video on a term.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>
              <code>fifu_dev_set_category_image( $term_id, $image_url )</code>
            </dt>
            <dd>Set the image for a product category term.</dd>
          </div>
          <div>
            <dt>
              <code>fifu_dev_set_category_video( $term_id, $video_url )</code>
            </dt>
            <dd>Set video media for a term.</dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="fifu-api-results-title" help>
        <FeatureGuideHeading
          id="fifu-api-results-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK THE RESULT
          </>}
          tone="help"
          >
          Handle a failed call before continuing.
        </FeatureGuideHeading>
        <p>
          Each helper returns <code>true</code> when its operation succeeds and{' '}
          <code>false</code> when it fails. Test the return value in your integration
          before treating the media update as complete.
        </p>
        <p>
          If a call returns <code>false</code>, confirm that FIFU is active and the
          function exists, the ID identifies the intended post or term, and any single
          image URL uses HTTP or HTTPS. A blank image URL deliberately clears the post’s
          featured image; it is not a valid way to provide an image.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/wp-woocommerce-rest-api/">WP / WooCommerce REST API</Link>, <Link to="/features/wp-cli/">WP-CLI</Link> and <Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function WpWooCommerceRestApiGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="WP / WooCommerce REST API"
      className="feature-guide-page"
    >
      <p className="lead">
        Add FIFU media values to WordPress or WooCommerce REST create and update requests to manage remote media alongside content.
      </p>

      <FeatureGuideHighlight id="rest-api-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Code2 size={15} aria-hidden="true" />
            CONTENT WORKFLOWS · REST
          </span>
          <h2 id="rest-api-intro">Set FIFU media as you create or update content.</h2>
          <p>
            If another system manages your content, one API request can save its FIFU media values too. This keeps remote images, video, galleries, and sliders in the same repeatable publishing flow; use it when you need API-driven content updates, and skip it when you manage media only in the WordPress editor.
          </p>
        </div>
        <div
          className="feature-highlight-visual"
          aria-label="REST API workflow"
        >
          <img
            src="/images/wp-woocommerce-rest-api-guide-1.png"
            alt="A WordPress REST request sends fifu_image_url, saves the content, and shows the remote image on the site."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="rest-api-start-title">
        <FeatureGuideHeading
          id="rest-api-start-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            START WITH YOUR API CLIENT
          </>}
          >
          Choose the content endpoint, then add media fields.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Send the usual authenticated create or update request to the WordPress REST endpoint for a post type that supports featured images and REST. The integration registers automatically; there is no FIFU switch to enable.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For WordPress posts, send supported FIFU fields at the request’s top level or inside <code>meta</code>. A featured image request can look like this:
            </p>
            <pre><code>{`{
  "title": "Example article",
  "status": "draft",
  "fifu_image_url": "https://example.com/image.jpg",
  "fifu_image_alt": "A mountain lake"
}`}</code></pre>
          </li>
          <li>
            <span>3</span>
            <p>
              Read the returned content or request it again to confirm the saved values. The WordPress response adds nonempty <code>fifu_image_url</code>, <code>fifu_video_url</code>, indexed <code>fifu_slider_image_url_0</code> fields, <code>fifu_image_alt</code>, <code>fifu_asin</code>, <code>fifu_finder_url</code>, and <code>fifu_redirection_url</code> when present.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="rest-api-fields-title">
        <FeatureGuideHeading
          id="rest-api-fields-title"
          icon={<>
            <ShoppingCart size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SUPPORTED WORDPRESS FIELDS
          </>}
          >
          Choose the value for each media type.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div><dt>Featured image</dt><dd><code>fifu_image_url</code> sets the remote image URL; <code>fifu_image_alt</code> sets its alternative text.</dd></div>
          <div><dt>Featured video</dt><dd><code>fifu_video_url</code> sets the video URL. For slider images, use <code>fifu_slider_list_url</code> and optional parallel <code>fifu_slider_list_alt</code> values, separated by vertical bars.</dd></div>
          <div><dt>Other post values</dt><dd><code>fifu_asin</code>, <code>fifu_finder_url</code>, and <code>fifu_redirection_url</code> accept top-level values or entries inside <code>meta</code>.</dd></div>
          <div><dt>Slider image entries</dt><dd>You can also send indexed <code>fifu_slider_image_url_0</code>, <code>fifu_slider_image_alt_0</code> fields (continue the index for more images). Returned slider image URLs use the same indexed field pattern.</dd></div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="rest-api-woocommerce-title" help>
        <FeatureGuideHeading
          id="rest-api-woocommerce-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            WOOCOMMERCE REST
          </>}
          tone="help"
          >
          Use WooCommerce’s metadata format.
        </FeatureGuideHeading>
        <p>
          For products and variations, include FIFU entries in WooCommerce’s <code>meta_data</code> array. The REST integration handles the following five fields for both object types.
        </p>
        <FeatureGuideOptions>
          <div><dt>Product image gallery</dt><dd><code>fifu_list_url</code> holds image URLs and <code>fifu_list_alt</code> holds matching alternative text.</dd></div>
          <div><dt>Product video gallery</dt><dd><code>fifu_list_video_url</code> holds the video URL list.</dd></div>
          <div><dt>Product slider</dt><dd><code>fifu_slider_list_url</code> holds slider image URLs and <code>fifu_slider_list_alt</code> holds matching alternative text.</dd></div>
        </FeatureGuideOptions>
        <pre><code>{`"meta_data": [
  { "key": "fifu_list_url", "value": "https://example.com/one.jpg|https://example.com/two.jpg" },
  { "key": "fifu_list_alt", "value": "Front view|Side view" }
]`}</code></pre>
        <p>Put each alt value in the same position as its image URL. The same vertical-bar format applies to slider URL and alt lists. For product categories, use <code>meta_data</code> entries for <code>fifu_image_url</code>, optional <code>fifu_image_alt</code>, or <code>fifu_video_url</code>.</p>
        <p>For products and variations, the supported FIFU fields are limited to those five gallery and slider keys; other FIFU keys in <code>meta_data</code> are ignored by this integration.</p>
      </FeatureGuideSection>

      <FeatureGuideSection id="rest-api-troubleshoot-title" help>
        <FeatureGuideHeading
          id="rest-api-troubleshoot-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK A MISSING VALUE
          </>}
          tone="help"
          >
          Match the request format to its endpoint.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li><strong>WordPress post value is missing:</strong> confirm the content type exposes the REST API and supports featured images; send the field at top level or inside <code>meta</code>.</li>
          <li><strong>WooCommerce gallery or slider did not change:</strong> confirm the key is one of the five supported product/variation fields and is an item in <code>meta_data</code>. Separate list entries with <code>|</code>.</li>
          <li><strong>Wrong featured media appears:</strong> for WordPress posts, image, video, and slider fields compete for the featured-media slot. Send the intended type; a nonempty slider list takes priority over image/video values.</li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/fifu-api/">FIFU API</Link>, <Link to="/features/wp-cli/">WP-CLI</Link> and <Link to="/features/woocommerce-import/">WooCommerce Import</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function WpCliGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="WP-CLI" className="feature-guide-page">
      <p className="lead">
        Use your server terminal to change FIFU options, launch supported jobs, and create
        WordPress content with remote media.
      </p>
      <FeatureGuideHighlight id="wp-cli-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Terminal size={15} aria-hidden="true" /> SERVER WORKFLOW
          </span>
          <h2 id="wp-cli-intro">Run repeatable FIFU tasks from your site.</h2>
          <p>
            WP-CLI gives you a scriptable path to FIFU settings and maintenance. That
            helps when you manage content in bulk or automate repeat work without opening
            the dashboard; for occasional changes, the WordPress interface remains
            optional.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/wp-cli-guide-1.png"
            alt="A WP-CLI command changes a FIFU setting and the remote featured image appears on a post."
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="wp-cli-use-title">
        <FeatureGuideHeading
          id="wp-cli-use-title"
          icon={<>
            <Terminal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            REQUIREMENTS AND FIRST RUN
          </>}
          >
          Run commands from the WordPress installation.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Use a server with WP-CLI installed and change to the directory for the
              WordPress site you want to manage. FIFU registers its commands only when
              WordPress is running under WP-CLI.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Run one command for one setting or task. For example,{' '}
              <code>wp fifu content on</code> enables automatic media extraction from post
              content. Each invocation takes a single setting option; issue another
              command to change a different setting.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Run <code>wp help fifu</code> or <code>wp help fifu &lt;command&gt;</code>{' '}
              to inspect the registered command syntax on your installation.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="wp-cli-commands-title">
        <FeatureGuideHeading
          id="wp-cli-commands-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COMMAND FAMILIES
          </>}
          >
          Choose the setting or operation you need.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>
              <code>content</code>
            </dt>
            <dd>
              Toggle content media automation with <code>on|off</code>; adjust{' '}
              <code>--skip</code>, <code>--cpt</code>, <code>--overwrite=on|off</code>,
              and <code>--media=image|video|all</code>. <code>--all-run</code> launches
              the content job immediately.
            </dd>
          </div>
          <div>
            <dt>
              <code>search</code>
            </dt>
            <dd>
              Toggle automatic image search. Set <code>--min-width</code> and{' '}
              <code>--min-height</code> (non-negative integers), <code>--blocklist</code>{' '}
              (hosts separated by commas, pipes, or newlines), <code>--cpt</code>,{' '}
              <code>--source</code>, or <code>--layout=all|square|tall|wide</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>image</code>
            </dt>
            <dd>
              Configure featured image behavior: content insertion/removal and target post
              types; hide output and its post type/format scope; default image toggle,{' '}
              <code>--default-url</code>, and <code>--default-types</code>; valid
              replacement URL; URL validation; right-click blocking; missing-media popup
              and redirect; taxonomy updates. Boolean options accept <code>on|off</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>finder</code>, <code>screenshot</code>, <code>customfield</code>,{' '}
              <code>asin</code>
            </dt>
            <dd>
              Configure finder state, custom field, video lookup and Amazon gallery sync;
              screenshot state, normalized size and source field; custom-field extraction
              state/name; or ASIN lookup state, field, partner, access key, secret and
              locale.
            </dd>
          </div>
          <div>
            <dt>
              <code>video</code>, <code>audio</code>, <code>slider</code>
            </dt>
            <dd>
              Set video/audio behavior and slider configuration, including controls,
              autoplay, galleries, counter, crop, vertical mode, timing, and navigation
              URLs. Use each namespace’s options to select the individual setting.
            </dd>
          </div>
          <div>
            <dt>
              <code>upload</code>, <code>cdn</code>
            </dt>
            <dd>
              Set upload domain, button visibility, periodic job and proxy settings; or
              CDN state, content delivery, FIFU CDN, and site-domain usage. FIFU
              CDN/domain options call their service handlers.
            </dd>
          </div>
          <div>
            <dt>
              <code>woo</code>, <code>bbpress</code>, <code>square</code>,{' '}
              <code>sizes</code>
            </dt>
            <dd>
              Configure{' '}
              <Link to="/features/lightbox-and-zoom/">WooCommerce lightbox and zoom</Link>
              , automatic category images, order email images, gallery, adaptive heights,
              video placement, variation merging and quick-buy fields; the{' '}
              <Link to="/features/bbpress-and-buddyboss-platform/">
                bbPress and BuddyBoss integration
              </Link>
              ; square desktop/mobile values; or named custom sizes in{' '}
              <code>name=widthxheight</code> form, with optional crop flag.
            </dd>
          </div>
          <div>
            <dt>
              <code>key</code>, <code>metadata</code>, <code>schedule</code>,{' '}
              <code>clean</code>, <code>debug</code>, <code>reset</code>
            </dt>
            <dd>
              Store the license value; enable/disable metadata maintenance; toggle its
              schedule; launch cleanup; toggle debug mode; or restore FIFU settings to
              defaults. <code>clean</code> and <code>reset</code> are actions, not routine
              setup commands.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="wp-cli-create-title">
        <FeatureGuideHeading
          id="wp-cli-create-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CREATE A POST
          </>}
          >
          Store remote media in post metadata.
        </FeatureGuideHeading>
        <p>
          Use WordPress’s post creation command and pass FIFU fields in{' '}
          <code>--meta_input</code>. Replace the URL and title with your values:
        </p>
        <pre>
          <code>{`wp post create --post_type=post --post_status=publish --post_title="Example" --meta_input='{"fifu_image_url":"https://example.com/image.jpg","fifu_image_alt":"Example image"}'`}</code>
        </pre>
        <p>
          The remote image URL is stored as post metadata; include{' '}
          <code>fifu_image_alt</code> when you have alternative text to save. FIFU’s
          metadata maintenance can be enabled with <code>wp fifu metadata on</code>.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="wp-cli-limits-title" help>
        <FeatureGuideHeading
          id="wp-cli-limits-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            LIMITS AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check the runtime and accepted value.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>!</span>
            <p>
              Run WP-CLI from the correct WordPress installation with FIFU active.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              Use the documented option names and values. Run one setting at a time; changing several settings requires separate commands.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              <strong>Reset caution:</strong> <code>wp fifu reset</code> restores FIFU
              configuration defaults. Run it only when you intend to replace current
              settings.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/fifu-api/">FIFU API</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function QuickEditorGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Quick Editor"
      className="feature-guide-page"
    >
      <p className="lead">
        Update FIFU media from a WordPress content list when you need to revise items
        without opening each editor.
      </p>

      <FeatureGuideHighlight id="quick-editor-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MousePointerClick size={15} aria-hidden="true" /> EDIT FROM THE LIST
          </span>
          <h2 id="quick-editor-intro">Change media without leaving the content list.</h2>
          <p>
            Open a row’s FIFU thumbnail, preview the replacement, and save it in place.
            This is useful when you are updating several posts or products and want to
            avoid opening each full editor.
          </p>
        </div>
        <div
          className="feature-highlight-visual"
          aria-label="Quick Editor workflow illustration"
        >
          <img
            src="/images/quick-editor-guide-1.png"
            alt="Select a FIFU thumbnail, preview media in Quick Editor, and see the updated thumbnail in the content list."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="quick-editor-purpose-title">
        <FeatureGuideHeading
          id="quick-editor-purpose-title"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE QUICK EDITOR
          </>}
          >
          Edit the media attached to a row.
        </FeatureGuideHeading>
        <p>
          Without Quick Editor, changing a remote featured image or other FIFU media means
          opening an item’s editor. The list editor brings the media fields and preview to
          the row, then refreshes its thumbnail after a successful save. This can make
          batch catalog or content maintenance quicker and helps you verify a replacement
          before saving. Use it when the item is reachable in a supported WordPress list;
          use the full editor when you need controls that are not exposed here.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-editor-open-title">
        <FeatureGuideHeading
          id="quick-editor-open-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPEN THE EDITOR
          </>}
          >
          Find a FIFU thumbnail in a content list.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open Posts, Pages, Products, a supported custom post type list, or Products
              → Categories. The FIFU column contains the item’s current thumbnail or an
              empty tile.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select the thumbnail or empty tile. If the FIFU column is hidden, open
              Screen Options and turn on FIFU.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              For a variable WooCommerce product, select the parent product or a listed
              variation before editing. Save each selected item separately.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-editor-media-title">
        <FeatureGuideHeading
          id="quick-editor-media-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            EDIT · PREVIEW · SAVE
          </>}
          >
          Choose media and save the change.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Featured image</dt>
            <dd>
              Enter a direct image address or search keywords in{' '}
              <strong>Image URL or Keywords</strong>, choose <strong>Preview</strong>,
              then select a search result if you searched. Add{' '}
              <strong>Alternative text</strong> when needed; if empty, the post title is
              used.
            </dd>
          </div>
          <div>
            <dt>Featured video</dt>
            <dd>
              When{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> is
              enabled, enter a <strong>Video URL</strong> and preview it. The image type
              remains available in every editor.
            </dd>
          </div>
          <div>
            <dt>Featured audio</dt>
            <dd>
              When{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> is
              enabled, enter an <strong>Audio URL</strong> and its{' '}
              <strong>Thumbnail URL</strong>, then preview. Audio preview requires the
              artwork URL.
            </dd>
          </div>
          <div>
            <dt>Featured slider</dt>
            <dd>
              When <Link to="/features/featured-slider/">Featured Slider</Link> is
              enabled, or when the item already has slider data, manage its image and
              video slides and optional <strong>Ratio</strong>. Slider editing is
              unavailable for categories and product variations.
            </dd>
          </div>
          <div>
            <dt>Product galleries</dt>
            <dd>
              Products include an <strong>Image/video gallery</strong> where you can add,
              remove, and reorder gallery items. Product categories expose featured image
              and video fields.
            </dd>
          </div>
          <div>
            <dt>Save or clear</dt>
            <dd>
              <strong>Save</strong> commits the current changes and refreshes the list
              thumbnail. <strong>Clear</strong> removes the featured media and product
              gallery fields shown in this editor; save to commit the removal.
            </dd>
          </div>
          <div>
            <dt>Upload to media library</dt>
            <dd>
              This optional button appears only when an image URL or slider images are
              present and <strong>show save button on post editor</strong> is enabled
              under FIFU → Settings → Media → Main.
            </dd>
          </div>
          <div>
            <dt>Copy debug data</dt>
            <dd>
              When Debug mode is enabled, this action copies diagnostic data for the item;
              it does not change the media.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="quick-editor-access-title" help>
        <FeatureGuideHeading
          id="quick-editor-access-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            ACCESS · AVAILABILITY · TROUBLESHOOTING
          </>}
          tone="help"
          >
          Check access and optional media types.
        </FeatureGuideHeading>
        <FeatureGuideChecklist>
          <li>
            <span>
              <CircleAlert size={14} aria-hidden="true" />
            </span>
            <p>
              The FIFU column is available to logged-in accounts with the{' '}
              <code>publish_posts</code> capability and a FIFU key containing 20
              characters. If you cannot see or open it, check both access conditions.
            </p>
          </li>
          <li>
            <span>
              <Image size={14} aria-hidden="true" />
            </span>
            <p>
              Enable Featured video / audio in FIFU → Settings → Featured Video / Audio
              for video and audio fields. Enable Featured slider in FIFU → Settings →
              Featured Slider → Configuration for slider editing. The editor can still
              show existing slider data when the setting is off.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={14} aria-hidden="true" />
            </span>
            <p>
              If a row or variation fails to load, confirm the item still exists and that
              your account has access. If saving fails, retry and note whether the error
              concerns the featured image or product gallery. Clear only removes the
              fields shown in the editor after you save.
            </p>
          </li>
        </FeatureGuideChecklist>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function WidgetsGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Widgets" className="feature-guide-page">
      <p className="lead">
        Add current FIFU media to a theme widget area, or place a remote image or video in
        an Elementor layout.
      </p>

      <FeatureGuideHighlight id="widgets-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Puzzle size={15} aria-hidden="true" /> MEDIA IN YOUR SITE LAYOUT
          </span>
          <h2 id="widgets-intro">Place media where your visitors need it.</h2>
          <p>
            Use a WordPress widget when a theme area should follow the current content’s
            FIFU media automatically. Use Elementor when you want to place a specific
            remote image or video in a designed section. This keeps layout media close to
            the content it belongs to and avoids copying the same URL into separate page
            layouts.
          </p>
        </div>
        <div
          className="feature-highlight-visual"
          aria-label="WordPress widget workflow illustration"
        >
          <img
            src="/images/widgets-guide-1.png"
            alt="Add the FIFU Featured media widget to a widget area and see the current content image on the page."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="widgets-wordpress-title">
        <FeatureGuideHeading
          id="widgets-wordpress-title"
          icon={<>
            <Puzzle size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WORDPRESS · APPEARANCE → WIDGETS
          </>}
          >
          Choose a widget for the current content.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>Appearance → Widgets</strong> and select a widget area. You can
              also use <strong>Appearance → Customize → Widgets</strong> if your theme
              offers that screen.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Add one of these widgets. In a block based Widgets screen, insert it as a
              Legacy Widget.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the widget area, then open a matching post, page, or product on your
              site to confirm the result.
            </p>
          </li>
        </FeatureGuideSteps>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>(FIFU) Featured media</dt>
            <dd>
              Displays the current post, page, or custom post type’s resolved featured
              image or video/slider thumbnail. It has no widget settings and stays empty
              if there is no current content item or resolved image.
            </dd>
          </div>
          <div>
            <dt>(FIFU) Featured grid</dt>
            <dd>
              Set <strong>Rows</strong> and <strong>Columns</strong> to control the image grid. Both start at 1, and the grid stays empty until slider images are saved.
            </dd>
          </div>
          <div>
            <dt>(FIFU) Product gallery</dt>
            <dd>
              Renders the current product’s gallery. It has no widget settings. Use it
              with WooCommerce product content that has a{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link> to
              display.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="widgets-elementor-title">
        <FeatureGuideHeading
          id="widgets-elementor-title"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ELEMENTOR · BASIC
          </>}
          >
          Set the media in an Elementor section.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In Elementor’s panel, search for <strong>FIFU</strong> or open{' '}
              <strong>Basic</strong>. Add <strong>(FIFU) Featured Image</strong>, enter a
              valid remote URL in <strong>Image URL</strong>, and optionally set{' '}
              <strong>Alternative text</strong>. If you leave the alt text blank, the post
              title is used.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Save the Elementor design. The image appears in the layout and becomes the
              content item’s FIFU featured image; the supplied alternative text is saved
              with it.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          To place a video thumbnail, add <strong>(FIFU) Featured Video</strong> and enter
          its <strong>Video URL</strong>. This widget is available only when{' '}
          <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> is
          enabled. It displays a thumbnail derived from that URL.
        </p>
        <p>
              If an image fails to load, FIFU shows the fallback image. Remove the image URL and save to clear the featured image.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="widgets-help-title" help>
        <FeatureGuideHeading
          id="widgets-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            REQUIREMENTS AND TROUBLESHOOTING
          </>}
          tone="help"
          >
          If a widget area is empty.
        </FeatureGuideHeading>
        <p>
          WordPress widgets need a theme widget area. If none appears under{' '}
          <strong>Appearance → Widgets</strong>, your theme does not expose a widget area
          for this screen. Featured media needs a current content item with FIFU media;
          Featured grid needs saved slider images; Product gallery needs a product with
          gallery content. Elementor widgets require Elementor to be active, and its
          Featured Video widget also requires Featured Video / Audio to be enabled.
        </p>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function HotlinkProtectionGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Hotlink protection"
      className="feature-guide-page"
    >
      <p className="lead">
        Block other websites from displaying images delivered by FIFU Cloud, while keeping
        those images available in social posts.
      </p>

      <FeatureGuideHighlight id="hotlink-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShieldCheck size={15} aria-hidden="true" /> FIFU CLOUD ACCESS
          </span>
          <h2 id="hotlink-intro">Stop other sites reusing your cloud images.</h2>
          <p>
            When another site embeds a FIFU Cloud image URL, protection prevents that site
            from displaying the image; social networks are excluded. This can discourage
            copied pages from reusing your hosted images and help keep their previews
            available when you share posts. Use it when you want that restriction; it does
            not prevent copying the image itself or cover images still served by their
            original host.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/hotlink-protection-guide-1.png"
            alt="Enable Hotlink protection for a FIFU Cloud image, blocking display on another website while the image remains visible on your site and in a social post."
            loading="eager"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="hotlink-enable-title">
        <FeatureGuideHeading
          id="hotlink-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONFIGURE · FIFU CLOUD
          </>}
          >
          Turn on hotlink protection.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Cloud</strong> and select the <strong>Account</strong>{' '}
              tab.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find <strong>Hotlink protection</strong> and switch it on. You must have
              completed FIFU Cloud sign-up; the control is hidden until you are signed in.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Wait for the request to finish. The setting is sent to FIFU Cloud, which
              applies the restriction to its hosted images. Social networks remain exempt.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="hotlink-scope-title">
        <FeatureGuideHeading
          id="hotlink-scope-title"
          icon={<>
            <ShieldCheck size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SCOPE
          </>}
          >
          Know which images are covered.
        </FeatureGuideHeading>
        <p>
          This setting affects images served from FIFU Cloud only. FIFU Cloud is a
          separate paid hosting service; images whose URLs still point to their original
          host are outside this protection. If you need hosted copies first, follow the{' '}
          <Link to="/features/upload-to-cloud/">Upload to Cloud guide</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="hotlink-help-title" help>
        <FeatureGuideHeading
          id="hotlink-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN THE SWITCH DOES NOT APPLY
          </>}
          tone="help"
          >
          Check your Cloud connection.
        </FeatureGuideHeading>
        <p>
          If the control is missing, complete FIFU Cloud sign-up and sign in; the setting
          is shown only after sign-in.
        </p>
        <p>
          If the change does not complete, confirm the Cloud account connection and try
          again later. An incomplete sign-up cannot authorize the request, and a failed or
          unreadable Cloud response is treated as a retry-later condition.
        </p>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/delete-from-cloud/">Delete from Cloud</Link> and <Link to="/features/optimized-images/">Optimized Images</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function DefaultFeaturedImageGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Default Featured Image"
      className="feature-guide-page default-featured-image-guide"
    >
      <p className="lead">
        Choose one image to display on posts, pages, or products that do not have
        their own featured image.
      </p>

      <FeatureGuideHighlight id="default-image-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" />
            DEFAULT FEATURED IMAGE
          </span>
          <h2 id="default-image-intro">Keep your content cards from looking empty.</h2>
          <p>
            Set a single, reusable image URL for content without a featured image.
            FIFU fills eligible empty featured-image slots while leaving your
            individually selected images in place.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/default-featured-image-guide-1.png"
            alt="Set a default image URL and show the same image on content cards that have no featured image of their own."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="default-image-purpose">
        <FeatureGuideHeading
          id="default-image-purpose"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE IT
          </>}
          >
          Give image-less content a consistent look.
        </FeatureGuideHeading>
        <p>
          A post without a featured image can leave an empty space in blog listings,
          related-post cards, or product grids. A default image is useful for
          announcements, imported content, or older posts that do not have individual
          thumbnails. Choose a neutral brand image or placeholder that looks appropriate
          across all the post types you select. Your theme still decides where featured
          images appear.
        </p>
        <p>
          This is a fallback for <strong>missing featured images</strong>, not a way to
          replace broken image URLs. If a remote image has stopped loading, see{' '}
          <Link to="/features/replace-not-found-image/">Replace Not Found Image</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="default-image-requirement">
        <FeatureGuideHeading
          id="default-image-requirement"
          icon={<>
            <Database size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BEFORE YOU START
          </>}
          >
          Keep Image Metadata enabled.
        </FeatureGuideHeading>
        <p>
              Check that <strong>Image Metadata</strong> is enabled under <strong>FIFU → Settings → Metadata</strong>. The default image needs this setting, which is on by default.
            </p>
        <p>
          If you have disabled Image Metadata, turn it back on before configuring
          the default image. See the{' '}
          <Link to="/features/image-metadata/">Image Metadata guide</Link> for details.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="default-image-setup-title">
        <FeatureGuideHeading
          id="default-image-setup-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP THE DEFAULT
          </>}
          >
          Choose the image and eligible post types.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Image → Default Featured Image</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              On the <strong>Default featured image</strong> tab, enter a public,
              direct image address in <strong>Image URL</strong>. Use an HTTPS URL
              that loads without signing in. Wait for the setting to save.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Turn on the <strong>Default featured image</strong> toggle next to
              the URL field. FIFU can now assign the default to existing eligible
              posts without a featured image and to newly saved eligible posts.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Open <strong>Filter by post type</strong>. Enter the post-type slugs,
              separated by commas. The initial list is <code>post,page,product</code>;
              FIFU also lists the post types detected on your site below the field.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              If you changed the post-type list, save it and turn the feature
              <strong> off and back on</strong>. This reapplies the default to
              the updated selection, including eligible existing content.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="default-image-behavior">
        <FeatureGuideHeading
          id="default-image-behavior"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT HAPPENS NEXT
          </>}
          >
          The default applies only where it is needed.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Existing content without an image</dt>
            <dd>
              When you enable the feature, FIFU can assign a shared default attachment
              to eligible existing published posts and drafts with no featured image.
            </dd>
          </div>
          <div>
            <dt>New or updated content</dt>
            <dd>
              Eligible content saved without a featured image can receive the same
              default automatically.
            </dd>
          </div>
          <div>
            <dt>Posts with their own images</dt>
            <dd>
              A post's individually assigned WordPress or FIFU featured image takes
              priority. The fallback does not intentionally replace it.
            </dd>
          </div>
          <div>
            <dt>Changing the default URL</dt>
            <dd>
              FIFU updates the shared default-image association so posts using the
              previous default can display the new image. Posts with their own images
              are not affected.
            </dd>
          </div>
          <div>
            <dt>Turning the feature off</dt>
            <dd>
              FIFU removes its default thumbnail associations from the affected
              content. It does not delete independently assigned featured images
              or the original remote image file.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="default-image-sharing">
        <FeatureGuideHeading
          id="default-image-sharing"
          icon={<>
            <Globe size={19} aria-hidden="true" />
          </>}
          kicker={<>
            HOMEPAGE SHARING
          </>}
          >
          A possible image for social previews, too.
        </FeatureGuideHeading>
        <p>
          FIFU can also use the configured default-image URL for the homepage's
          Open Graph image when the page does not already provide one. This helps
          supply a sharing image, but an Open Graph image provided elsewhere takes
          precedence. Choose a default image that also represents your site well.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="default-image-checks" help>
        <FeatureGuideHeading
          id="default-image-checks"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          If the default image does not appear
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Check both switches:</strong> confirm <strong>Default featured image</strong>{' '}
            is enabled and <strong>Image Metadata</strong> is on.
          </li>
          <li>
            <strong>Check the URL:</strong> open the image in a private browser window.
            The host must serve the image publicly and permit it to appear on your site.
          </li>
          <li>
            <strong>Check the post type:</strong> use its actual slug in{' '}
            <strong>Filter by post type</strong>. After editing the list, turn the
            feature off and on again.
          </li>
          <li>
            <strong>Check for an existing featured image:</strong> FIFU does not
            overwrite an individually assigned image simply to use the default.
          </li>
          <li>
            <strong>Check your theme:</strong> the default fills the featured-image
            field; it does not force a theme to display thumbnails in layouts that
            do not render them.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced />
    </Page>
  );
}

function ActivationGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Activation"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Submit your license key to register this site’s domain and unlock the licensed
        FIFU features and updates.
      </p>
      <FeatureGuideHighlight id="activation-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <KeyRound size={15} aria-hidden="true" /> LICENSE ACTIVATION
          </span>
          <h2 id="activation-intro">Register your site with your license.</h2>
          <p>
            A valid key connects the site to FIFU’s license service. Activation can unlock
            licensed functionality and plugin updates; it is needed when your key is
            empty, invalid, or you are setting up a covered domain.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/activation-guide-1.png"
            alt="Enter a license key, submit it for validation, and return to FIFU settings after successful activation."
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="activation-why">
        <FeatureGuideHeading
          id="activation-why"
          icon={<>
            <ShieldCheck size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PURPOSE AND COVERAGE
          </>}
          >
          Use one key across covered sites.
        </FeatureGuideHeading>
        <p>
          License checks associate your key with a domain. This lets you use the same key
          on the main domain, its subdomains and paths, plus one additional test,
          development, or staging domain. It avoids registering each subdomain or path as
          a separate domain, while keeping a separate test site available for deployment
          checks. Technical support remains limited to one site per license.
        </p>
        <p>
          If you use FIFU without a license, or do not need licensed features and updates,
          activation may be unnecessary. A changed domain needs support assistance before
          the key can cover it.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="activation-steps-title">
        <FeatureGuideHeading
          id="activation-steps-title"
          icon={<>
            <KeyRound size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SUBMIT AND VALIDATE
          </>}
          >
          Activate the license key.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In your WordPress dashboard, open <strong>FIFU → License key</strong>. In a
              multisite network, open the network admin license page when you want the key
              and check to apply network-wide.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              On the <strong>Activation</strong> tab, enter the key in{' '}
              <strong>License key</strong>, then select <strong>Submit</strong>. The form
              trims surrounding spaces and checks the key with the current site address.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              When validation succeeds, FIFU saves the key and returns you to FIFU
              settings. If validation fails, the license page remains open so you can
              correct the key or resolve its status.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="activation-options-title">
        <FeatureGuideHeading
          id="activation-options-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            LICENSE PAGE
          </>}
          >
          Know what each control does.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Activation tab</dt>
            <dd>
              Contains the License key field and Submit action for remote validation.
            </dd>
          </div>
          <div>
            <dt>Documentation tab</dt>
            <dd>
              Explains domain coverage: the activated domain includes its subdomains and
              paths, plus one additional test, development, or staging domain. Support
              coverage is still one site per license.
            </dd>
          </div>
          <div>
            <dt>Renewal tab</dt>
            <dd>
              Opens renewal information in a new browser tab. Use it when the key has
              expired or you need renewal details.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="activation-troubleshooting-title" help>
        <FeatureGuideHeading
          id="activation-troubleshooting-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            STATUS AND RECOVERY
          </>}
          tone="help"
          >
          Resolve common activation results.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Invalid key</dt>
            <dd>
              Check the entered key and submit again. If it remains invalid, contact FIFU
              support.
            </dd>
          </div>
          <div>
            <dt>Expired key</dt>
            <dd>Renew or upgrade the license, then submit the key again.</dd>
          </div>
          <div>
            <dt>Domain changed</dt>
            <dd>
              Contact support to update the domain association before activating on the
              new domain.
            </dd>
          </div>
          <div>
            <dt>No response or page stays open</dt>
            <dd>
              The check requires a successful server response. Retry when your WordPress
              site can reach the FIFU license service; if the request continues to fail,
              contact support.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureRelatedGuides><Link to="/features/automatic-updates/">Automatic Updates</Link>, <Link to="/features/reset-settings/">Reset Settings</Link> and <Link to="/features/debug-mode/">Debug Mode</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced title="Find another FIFU feature." />
    </Page>
  );
}

function ResetSettingsGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Reset Settings"
      className="feature-guide-page"
    >
      <p className="lead">
        Reset FIFU’s configurable settings when a setup has become hard to untangle; your
        license details, default image, and content image URLs stay in place.
      </p>

      <FeatureGuideHighlight id="reset-settings-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <RotateCcw size={15} aria-hidden="true" /> SETTINGS RESET
          </span>
          <h2 id="reset-settings-intro">
            Start fresh without losing your image assignments.
          </h2>
          <p>
            Reset Settings clears FIFU’s configurable menu options so you can recover from
            a tangle of changed values without removing image URLs saved on your content.
            Your license and Default Featured Image configuration are preserved, which
            makes this useful when you need to reconfigure FIFU but want to keep those
            site-wide and account details.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/reset-settings-guide-1.png"
            alt="Turn on Reset Settings in the Metadata tab, wait for the page reload, and return to default options with license and default image settings retained."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="reset-settings-effects">
        <FeatureGuideHeading
          id="reset-settings-effects"
          icon={<>
            <ShieldCheck size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT CHANGES
          </>}
          >
          Know what stays before you reset.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Reset</dt>
            <dd>
              FIFU’s configurable menu options are deleted. When settings initialize
              again, missing options receive their registered defaults. Custom values such
              as filters, URLs, and feature switches may need to be entered again.
            </dd>
          </div>
          <div>
            <dt>Kept</dt>
            <dd>
              Your license key and account email remain. The{' '}
              <Link to="/features/default-featured-image/">Default Featured Image</Link>{' '}
              URL and its enabled setting remain. Image URLs and alternative text saved
              with posts, pages, products, and categories are also outside this settings
              reset.
            </dd>
          </div>
          <div>
            <dt>Not included</dt>
            <dd>
              The reset targets FIFU menu options. It does not remove your content’s image
              assignments or run a separate content cleanup.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Write down any custom option values you still need before resetting. Use this
          when you want to troubleshoot a configuration; it is unnecessary if you only
          need to change one setting.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="reset-settings-run">
        <FeatureGuideHeading
          id="reset-settings-run"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WORDPRESS DASHBOARD
          </>}
          >
          Reset from Settings.
        </FeatureGuideHeading>
        <p>
          You need permission to manage FIFU settings: <code>manage_options</code> in the
          site dashboard or <code>manage_network_options</code> in network administration.
        </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In your WordPress dashboard, open <strong>FIFU → Settings</strong> and
              select the <strong>Metadata</strong> tab.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find <strong>Reset Settings</strong> and switch on{' '}
              <strong>reset settings</strong>. FIFU processes the reset and reloads the
              page after about five seconds.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Reopen the settings you use and enter any custom values you want to keep.
              Your retained settings and content image assignments remain available.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

            <FeatureCliSection
        id="reset-settings-cli"
        commands={[
          {
            label: 'Reset FIFU settings',
            command: 'wp fifu reset',
          },
        ]}
        note="This immediately restores FIFU settings to their defaults. Back up your configuration before running it."
      />

      <FeatureRelatedGuides><Link to="/features/activation/">Activation</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta spaced title="Find another FIFU feature." />
    </Page>
  );
}

function DebugModeGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Debug Mode" className="feature-guide-page">
      <p className="lead">
        Enable this temporary switch to refresh FIFU scripts and styles and collect item
        or site diagnostics while you investigate a problem.
      </p>

      <FeatureGuideHighlight id="debug-feature-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Bug size={15} aria-hidden="true" />
            DEBUG MODE
          </span>
          <h2 id="debug-feature-intro">Get a clearer view during troubleshooting.</h2>
          <p>
              Debug Mode helps you test fixes and collect information for support. Enable it while troubleshooting, then turn it off when finished.
            </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/debug-mode-guide-1.png"
            alt="Enable Debug Mode, copy item diagnostics, and download available logs from Status"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="debug-enable-title">
        <FeatureGuideHeading
          id="debug-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            START A SESSION
          </>}
          >
          Enable it while you reproduce the issue.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In your WordPress dashboard, open <strong>FIFU → Settings</strong>, select
              <strong> Developers</strong>, and switch on <strong>Debug Mode</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Reproduce the problem and collect the item or site details that match it
              using the tools below.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              When you finish collecting details, return to <strong>Developers</strong>{' '}
              and switch Debug Mode off. While it is on, FIFU assets receive changing
              version values, which reduces browser cache reuse and can cause extra
              downloads.
            </p>
          </li>
        </FeatureGuideSteps>
        
      </FeatureGuideSection>

      <FeatureCliSection
        id="debug-mode-cli"
        commands={[
          {
            label: 'Enable Debug Mode',
            command: 'wp fifu debug on',
          },
          {
            label: 'Disable Debug Mode',
            command: 'wp fifu debug off',
          },
        ]}
        note="Disable Debug Mode after troubleshooting."
      />

      <FeatureGuideSection id="debug-tools-title">
        <FeatureGuideHeading
          id="debug-tools-title"
          icon={<>
            <ClipboardCopy size={19} aria-hidden="true" />
          </>}
          kicker={<>
            COLLECT DETAILS
          </>}
          >
          Choose the diagnostic that fits the issue.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Copy debug data</dt>
            <dd>
              Use <strong>Copy debug data</strong> in a post, product, or category editor to collect information about that item for FIFU support. Review the copied information before sharing it.
            </dd>
          </div>
          <div>
            <dt>Copy to clipboard</dt>
            <dd>
              <p>
                Open <strong>FIFU → Status</strong> and select this button for a
                site-level support snapshot. It includes site and environment information,
                installed plugins, FIFU settings and storage counts, the uploads
                directory, and recent FIFU media summaries. Some credentials are masked,
                but the snapshot can still contain site details and configuration values.
              </p>
            </dd>
          </div>
          <div>
            <dt>Download debug logs</dt>
            <dd>
              Use <strong>Download debug logs</strong> on the Status page to collect recent FIFU logs for troubleshooting. Review the file before sending it to support.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          Enabling Debug Mode also reveals the separate{' '}
          <Link to="/features/db-migration/">DB Migration</Link> submenu for
          administrators. Use it when you need to migrate FIFU media data; migration is a
          separate task from collecting a debug report.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="debug-sharing-title" help>
        <FeatureGuideHeading
          id="debug-sharing-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            REVIEW BEFORE SHARING
          </>}
          tone="help"
          >
          Check the copied data and download.
        </FeatureGuideHeading>
        <p>
          Item reports can include post or term content, media URLs, and metadata. Some
          credential-like metadata values are redacted or cropped, but this is not a
          guarantee that every private value is removed. Site snapshots contain settings
          and site details, and log redaction only covers recognized patterns. Review each
          export yourself before sending it to support.
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>No download action</dt>
            <dd>
              <p>
                The action is hidden unless you are an administrator, Debug Mode is
                enabled, and at least one non-empty FIFU log exists. Recheck Status after
                FIFU has written activity to a log.
              </p>
            </dd>
          </div>
          <div>
            <dt>Permission denied</dt>
            <dd>
              <p>
                Your account needs the <code>manage_options</code> capability to copy an
                item report or download logs. If an action fails under another role, use
                an account with that permission.
              </p>
            </dd>
          </div>
          <div>
            <dt>Copy failed</dt>
            <dd>
              <p>
                The item button reports “Copy failed” if its diagnostic request or browser
                clipboard operation fails. Confirm Debug Mode is still on, then try again
                from the item editor or content list.
              </p>
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function RemoteFeaturedImageGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Remote Featured Image"
      className="feature-guide-page"
    >
      <p className="lead">
        Set a featured image for a post, page, or product from a public image URL,
        without uploading a second copy to the WordPress Media Library.
      </p>

      <FeatureGuideHighlight id="remote-image-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Image size={15} aria-hidden="true" /> REMOTE FEATURED IMAGE
          </span>
          <h2 id="remote-image-intro">Use the hosted image as your featured image.</h2>
          <p>
            FIFU keeps the file on its original host and connects its address to your
            content. Your theme can display it through WordPress featured-image APIs
            without downloading the image into your Media Library.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/remote-featured-image-guide-1.png"
            alt="Add a remote image address and alternative text in the FIFU editor, save, and display the image as featured media."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="remote-image-purpose">
        <FeatureGuideHeading
          id="remote-image-purpose"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHY USE A REMOTE IMAGE
          </>}
          >
          Use images already hosted elsewhere.
        </FeatureGuideHeading>
        <p>
              FIFU lets you set a featured image using an address from another website instead of uploading the file to WordPress. The image stays on its original host and appears wherever your theme displays featured images.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-editor">
        <FeatureGuideHeading
          id="remote-image-editor"
          icon={<>
            <ImagePlus size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET IT IN THE EDITOR
          </>}
          >
          Save an image address with your content.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Edit a post, page, or product and open its <strong>FIFU</strong>{' '}
              featured-image panel. In the Block Editor, find FIFU in the editor sidebar.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Paste a publicly accessible image address into{' '}
              <strong>Image URL or Keywords</strong>. Prefer an <code>https://</code>{' '}
              address. FIFU recognizes URLs beginning with <code>http</code> or{' '}
              <code>//</code> and starts a preview. If you type keywords instead,
              choose <strong>Preview</strong> to search for a photo, then select a result.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enter meaningful <strong>Alternative text</strong> describing what the
              image shows. If you leave it blank, FIFU falls back to the content title
              when generating the image's alt text.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Publish or update the content. Its remote image address and alternative text
              are saved, and FIFU uses the image when WordPress requests that item’s
              featured image.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-native-panel">
        <FeatureGuideHeading
          id="remote-image-native-panel"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WORDPRESS EDITOR COMPATIBILITY
          </>}
          >
          Understand the regular Featured image field.
        </FeatureGuideHeading>
        <p>
          FIFU uses the remote URL for the post's featured image, while maintaining
          compatibility with WordPress featured-image APIs. It may create attachment
          metadata for compatibility, but this does not mean the remote image file has
          been downloaded into the Media Library.
        </p>
        <FeatureGuideOptions>
          <div>
            <dt>Block editor</dt>
            <dd>
              While a FIFU remote image is assigned, WordPress's regular{' '}
              <strong>Featured image</strong> control is hidden or shown as disabled,
              depending on the editor interface. Remove the FIFU image to use the
              native image picker again.
            </dd>
          </div>
          <div>
            <dt>Classic Editor</dt>
            <dd>
              FIFU hides the regular featured-image box while a remote image is
              assigned. Removing the FIFU image makes the native box available again.
            </dd>
          </div>
          <div>
            <dt>Rank Math SEO</dt>
            <dd>
              When Rank Math SEO is active, FIFU keeps the native featured-image
              control available for compatibility, even when a remote image is set.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-block">
        <FeatureGuideHeading
          id="remote-image-block"
          icon={<>
            <Puzzle size={19} aria-hidden="true" />
          </>}
          kicker={<>
            BLOCK EDITOR OPTION
          </>}
          >
          Set it with the Featured Image (URL) block.
        </FeatureGuideHeading>
        <p>
          Add the{' '}
          <Link to="/features/featured-image-url-block/">Featured Image (URL) block</Link>{' '}
          when you want to enter the image in the content canvas. In the block’s{' '}
          <strong>Settings</strong>, enter <strong>Image URL</strong> and, when you have
          one, <strong>Alternative text</strong>. The block syncs both values with the
          same FIFU featured-image data; save or update the content to keep the change.
          Removing the block restores its last image values to the FIFU editor panel.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-share-links">
        <FeatureGuideHeading
          id="remote-image-share-links"
          icon={<>
            <Globe size={19} aria-hidden="true" />
          </>}
          kicker={<>
            HOSTED LINKS
          </>}
          >
          Use a public image link that visitors can load.
        </FeatureGuideHeading>
        <p>
          A direct image URL is the most predictable option. FIFU also recognizes
          supported Google Drive share URLs and OneDrive <code>1drv.ms</code> links,
          converting them to image-content addresses. The source file must still be
          shared publicly, and the host must allow the image to be embedded on your site.
          Conversion cannot bypass a private file or the host's access restrictions.
        </p>
        <p>
          Before publishing, open the image address in a private browser window to
          check that visitors can load it without signing in. Prefer HTTPS images for
          HTTPS websites; a remote host can change its access rules or remove files later.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-bulk">
        <FeatureGuideHeading
          id="remote-image-bulk"
          icon={<>
            <ListFilter size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONTENT LISTS AND INTEGRATIONS
          </>}
          >
          Update image data outside the editor.
        </FeatureGuideHeading>
        <p>
          For one-off edits, open{' '}
          <Link to="/features/quick-editor/">Quick Editor</Link> from the WordPress
          content list, enter an image URL and alternative text, then save. For
          authenticated WordPress REST API requests that create or update posts, use
          the fields <code>fifu_image_url</code> and <code>fifu_image_alt</code>. See the{' '}
          <Link to="/features/wp-woocommerce-rest-api/">WP / WooCommerce REST API guide</Link>{' '}
          for request formats and product integrations. For your own PHP code, see
          the <Link to="/features/fifu-api/">FIFU API guide</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-fields">
        <FeatureGuideHeading
          id="remote-image-fields"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FIELDS AND ACTIONS
          </>}
          >
          Know what each control changes.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Image URL or Keywords</dt>
            <dd>
              Paste the remote image address, or enter search terms to find an image. For
              direct preview, use an address beginning with <code>http</code> or{' '}
              <code>//</code>.
            </dd>
          </div>
          <div>
            <dt>Preview</dt>
            <dd>
              Shows the image preview for a direct address. For search terms, opens image
              results; selecting a result fills the image address.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>
              Sets the image’s accessible text. When blank, FIFU uses the content title.
            </dd>
          </div>
          <div>
            <dt>Remove remote image</dt>
            <dd>
              Clears the remote URL and its alternative text. Save or update the
              content to apply the removal; the file on the external host is not deleted.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-image-checks" help>
        <FeatureGuideHeading
          id="remote-image-checks"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            AVAILABILITY AND CHECKS
          </>}
          tone="help"
          >
          Keep the remote address reachable.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>Preview shows an image-not-found placeholder:</strong> check the full
            URL and verify that it loads an image, not an HTML sharing page or a sign-in
            screen. The source must be publicly reachable.
          </li>
          <li>
            <strong>Preview works but the published image is missing:</strong> check
            whether the host blocks embedding or hotlinking, and whether the remote
            file still exists. FIFU does not control the external server.
          </li>
          <li>
            <strong>Search terms show no chosen image:</strong> select an image from the
            results so its address is placed in the image field, then save the content.
          </li>
          <li>
            <strong>You need a WordPress-hosted copy:</strong> use a local image, or see{' '}
            <Link to="/features/save-in-the-media-library/">
              Save in the Media Library
            </Link>{' '}
            for the separate workflow that downloads a remote file.
          </li>
          <li>
            <strong>You want to change or clear an image:</strong> replace the URL and
            preview the new image, or use the remove control and save. Clearing the FIFU
            value does not delete the original image from its host.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function FeaturedVideoAudioGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Video / Audio"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Set a hosted video or playable audio file as featured media for a post,
        page, or product, with an optional thumbnail or cover image.
      </p>

      <FeatureGuideHighlight id="video-audio-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> MEDIA URL WORKFLOW
          </span>
          <h2 id="video-audio-intro">Feature a video or an audio recording.</h2>
          <p>
            Share a clip, demonstration, podcast episode, or recording
            without uploading the original media to your WordPress
            Media Library. FIFU stores its URL and displays a suitable
            player when the source and your theme support it.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/featured-video-audio-guide-1.png"
            alt="Enter a featured video URL, preview its playback, and see the saved video on a page."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="video-audio-purpose">
        <FeatureGuideHeading
          id="video-audio-purpose"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Use playable media where a static image isn't enough.
        </FeatureGuideHeading>
        <p>
          A featured video can display an embed from a recognized
          provider or a playable video file. Featured Audio uses an
          audio player for a direct audio URL. Both can have a
          thumbnail or cover image for places where a still image is
          needed, such as content lists. They are alternatives to
          an image-only featured item, not replacements for
          everything in the post body.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-enable">
        <FeatureGuideHeading
          id="video-audio-enable"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE THE FEATURE
          </>}
          >
          Turn on Featured Video / Audio.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Video → Featured video / audio</strong>{' '}
              and enable the switch. The same setting makes both
              media types available in the FIFU editor.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit a post, page, or product and find the{' '}
              <strong>FIFU</strong> featured-media panel. Use
              its media-type selector to choose{' '}
              <strong>Featured video</strong> or{' '}
              <strong>Featured audio</strong>.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-services">
        <FeatureGuideHeading
          id="video-audio-services"
          icon={<>
            <Globe size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SUPPORTED VIDEO AND AUDIO SERVICES
          </>}
          >
          Which services does FIFU support?
        </FeatureGuideHeading>
        <p>
          FIFU recognizes the following services for featured
          media. Use a public, playable URL in the{' '}
          <strong>Featured video</strong> field for these
          hosted providers, including the music platforms.
          The list covers the services supported by FIFU
          rather than just a few popular examples.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Video and social platforms</dt>
            <dd>
              YouTube, Vimeo, X (Twitter), TikTok, 9GAG,
              Tumblr, Odysee, Rumble, Dailymotion,
              BitChute, and Brighteon.
            </dd>
          </div>
          <div>
            <dt>Video hosting, players, and cloud storage</dt>
            <dd>
              Cloudinary, Publitio, JW Player, VideoPress
              (WordPress.com), SproutVideo, Cloudflare Stream,
              Bunny Stream, Google Drive, MEGA, and
              Amazon-hosted video files.
            </dd>
          </div>
          <div>
            <dt>Music and audio services</dt>
            <dd>
              Spotify and SoundCloud are supported as embedded
              providers through <strong>Featured video</strong>.
              Spotify support is for track URLs; the
              service's other link types are not automatically
              interchangeable. SoundCloud uses its supported
              track/player links.
            </dd>
          </div>
          <div>
            <dt>Local and remote video files</dt>
            <dd>
              MP4, MOV, WebM, OGG, and HLS streams
              (<code>.m3u8</code>). You can use a video
              uploaded to the WordPress Media Library or
              a directly accessible file on another server.
              The visitor's browser, file codecs, hosting
              permissions, and streaming support still matter.
            </dd>
          </div>
          <div>
            <dt>Direct audio files</dt>
            <dd>
              Use <strong>Featured audio</strong> for a
              directly playable audio file, such as MP3,
              OGG, or WAV, when the browser supports its
              format. A Spotify or SoundCloud share page
              does not belong in the direct{' '}
              <strong>Audio URL</strong> field.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
              Use a public, supported video or audio address and preview it before saving. A service may block private or restricted videos from appearing on your site.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-video-workflow">
        <FeatureGuideHeading
          id="video-audio-video-workflow"
          icon={<>
            <Video size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FEATURED VIDEO
          </>}
          >
          Add and preview a video.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Choose <strong>Featured video</strong> in the FIFU
              media selector. Paste a link from a supported video
              service or a direct video-file URL into{' '}
              <strong>Video URL</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select <strong>Preview</strong>. FIFU opens recognized
              provider URLs in an embedded player and uses a video
              player for supported files. Check that the video
              plays before saving the post.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              For a video stored in your WordPress Media Library,
              seek to a useful frame and select{' '}
              <strong>Set frame as thumbnail</strong>. The chosen
              frame is saved as an image in the Media Library
              when you save or update the content.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Save or update the post, page, or product.
              To replace the video later, enter a different URL;
              to clear it, use <strong>Remove remote video</strong>{' '}
              and save again.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          For the complete list of recognized platforms, see
          <strong> Supported video and audio services</strong>{' '}
          above. The video preview can also work with
          compatible direct media files; the source must be
          playable by the browser.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-audio-workflow">
        <FeatureGuideHeading
          id="video-audio-audio-workflow"
          icon={<>
            <Music2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            FEATURED AUDIO
          </>}
          >
          Add an audio track or recording.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Select <strong>Featured audio</strong> in the FIFU
              media selector. Paste the URL of a directly playable
              audio file into <strong>Audio URL</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select <strong>Preview</strong> to load the
              browser's audio player. Confirm the file is
              accessible and plays correctly.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Optionally provide a <strong>Thumbnail URL</strong>{' '}
              for artwork or a cover image. Save or update the
              content. To remove the audio, select{' '}
              <strong>Remove audio</strong> and save again.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          The audio field uses a standard browser audio player.
          For Spotify tracks and SoundCloud links, use
          <strong> Featured video</strong> so FIFU can
          display the supported provider embed instead of
          treating the link as a raw audio file.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-options">
        <FeatureGuideHeading
          id="video-audio-options"
          icon={<>
            <FileImage size={19} aria-hidden="true" />
          </>}
          kicker={<>
            THUMBNAILS AND FILE OPTIONS
          </>}
          >
          Choose a thumbnail and playback range.
        </FeatureGuideHeading>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Embedded video providers</dt>
            <dd>
              FIFU can obtain thumbnails for many of
              the supported services listed above. Some
              embeds may not provide a usable thumbnail,
              so check the preview and published page.
            </dd>
          </div>
          <div>
            <dt>Direct or custom video files</dt>
            <dd>
              If FIFU cannot obtain a thumbnail from the source,
              provide an image URL in the optional{' '}
              <strong>Thumbnail URL</strong> field when shown.
              Direct remote video files generally need a separate
              remote thumbnail image.
            </dd>
          </div>
          <div>
            <dt>Video files in your Media Library</dt>
            <dd>
              Preview the video, move to the desired frame, and
              use <strong>Set frame as thumbnail</strong>.
              This creates a local image attachment when
              the content is saved.
            </dd>
          </div>
          <div>
            <dt>Audio cover image</dt>
            <dd>
              Add a remote <strong>Thumbnail URL</strong> when
              using Featured Audio to show artwork alongside
              or instead of the player where supported.
              Removing audio can also clear its matching
              FIFU featured-image URL, so check the image
              after changing audio.
            </dd>
          </div>
          <div>
            <dt>Start and end times for video files</dt>
            <dd>
              Add <code>#t=15</code> to start at 15 seconds,
              or <code>#t=15,45</code> to request playback
              from 15 to 45 seconds. This media-fragment
              syntax applies to compatible video-file URLs;
              provider embeds may handle timing differently.
            </dd>
          </div>
        </FeatureGuideOptions>
        <p>
          To show a still image first and load the player after
          a click, see <Link to="/features/video-thumbnail/">Video Thumbnail</Link>.
          For quick URL updates from content lists, see{' '}
          <Link to="/features/quick-editor/">Quick Editor</Link>.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="video-audio-checks" help>
        <FeatureGuideHeading
          id="video-audio-checks"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TROUBLESHOOTING
          </>}
          tone="help"
          >
          When the player or thumbnail is missing.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No video or audio choice:</strong> Confirm
            <strong> FIFU → Settings → Video → Featured video / audio</strong>{' '}
            is enabled, then reopen the editor.
          </li>
          <li>
            <strong>Video preview does not play:</strong> Check
            the provider link or test the direct video URL in
            a browser. A host may block embedding, and a file
            may use an unsupported codec or require authentication.
          </li>
          <li>
            <strong>Audio preview is empty:</strong> Use a
            direct audio-file URL rather than a webpage or
            streaming-service share link. Make sure the
            browser can play the file format.
          </li>
          <li>
            <strong>No video thumbnail:</strong> Check whether
            the provider supplies an image. For a custom
            remote video, supply a thumbnail URL; for a
            Media Library video, capture a frame.
          </li>
          <li>
            <strong>No audio cover:</strong> Add a valid{' '}
            <strong>Thumbnail URL</strong>. If you removed
            audio, check whether its associated featured
            image was cleared as well.
          </li>
          <li>
            <strong>Works in the editor but not the theme:</strong>{' '}
            Test the published page and its archive. Featured
            media display depends on theme and template support.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/play-button/">Play Button</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function FeaturedSliderGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Slider"
      className="feature-guide-page"
    >
      <p className="lead">
        Give a post or product an ordered sequence of image or video URLs, then choose how
        visitors move through it.
      </p>

      <FeatureGuideHighlight id="featured-slider-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" />
            ORDERED FEATURED MEDIA
          </span>
          <h2 id="featured-slider-intro">Use one media slot to tell a fuller story.</h2>
          <p>
            A single featured image cannot show several views at once. Add images or video
            URLs in the order you want; the first slide also supplies the post’s featured
            media, while visitors can browse the complete sequence on the page.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/featured-slider-guide-1.png"
            alt="Add ordered media tiles in the Featured slider editor and display them as a slider on the content page."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="featured-slider-purpose-title">
        <FeatureGuideHeading
          id="featured-slider-purpose-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN TO USE IT
          </>}
          >
          Show several views without replacing featured media.
        </FeatureGuideHeading>
        <p>
          Use the slider when a listing needs multiple angles, a product needs a visual
          sequence, or a post needs both still images and video in its featured-media
          area. The first slide remains the representative featured image used by
          WordPress integrations; the rest stay available as navigable slides. This can
          help you show more context without placing a separate gallery in the body. If
          one image already does the job, you can leave the slider disabled.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-slider-enable-title">
        <FeatureGuideHeading
          id="featured-slider-enable-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ENABLE AND SET DEFAULTS
          </>}
          >
          Choose how sliders behave across your site.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Slider → Configuration</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Turn on <strong>Featured slider</strong> to add the slider panel to
              supported content editors. Save the setting and wait for its confirmation.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Set the site-wide playback, navigation, gallery, sizing, and loading options
              below. These defaults apply to sliders wherever they render.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Set <strong>Time between each transition (in ms)</strong> and{' '}
              <strong>Transition duration (in ms)</strong>. Enter optional image URLs for
              <strong> Previous button</strong> and <strong>Next button</strong> if you
              want custom arrow artwork.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-slider-steps-title">
        <FeatureGuideHeading
          id="featured-slider-steps-title"
          icon={<>
            <span>1</span>
          </>}
          kicker={<>
            ADD YOUR MEDIA
          </>}
          >
          Build and save the sequence.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Edit a post or WooCommerce product. In the FIFU media panel, open{' '}
              <strong>Featured slider</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Select an existing tile or the add tile. Enter an image URL or a recognized
              video source, then close the preview editor. The tile order is the slide
              order; the first tile is the featured media image.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Drag tiles to reorder them. Add alternative text for image slides and, when
              needed, set the shared display ratio in the ratio field (for example,{' '}
              <code>16:9</code>).
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Review the tile previews and choose <strong>Publish</strong> or{' '}
              <strong>Update</strong>. The ordered URLs, image alt text, and ratio are
              saved with the content.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          On a WooCommerce product, an <strong>Upload</strong> control appears only when
          FIFU’s upload option is enabled and the slider already contains media.
          Otherwise, add remote media URLs in the tiles.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-slider-options-title">
        <FeatureGuideHeading
          id="featured-slider-options-title"
          icon={<>
            <Settings2 size={18} aria-hidden="true" />
          </>}
          kicker={<>
            DISPLAY OPTIONS
          </>}
          >
          Adjust navigation, timing, and layout.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Start autoplay automatically</dt>
            <dd>Begins advancing slides on its own.</dd>
          </div>
          <div>
            <dt>Pause autoplay on hover</dt>
            <dd>Pauses automatic playback while a visitor points at the slider.</dd>
          </div>
          <div>
            <dt>Time between each transition (in ms)</dt>
            <dd>
              Sets the wait between automatic changes; the input increments by 500 ms.
            </dd>
          </div>
          <div>
            <dt>Transition duration (in ms)</dt>
            <dd>
              Controls how long the transition animation takes.
            </dd>
          </div>
          <div>
            <dt>Show previous/next buttons</dt>
            <dd>
              Adds arrow controls. Optional Previous button and Next button image URLs
              replace the default arrow artwork.
            </dd>
          </div>
          <div>
            <dt>Show gallery on click</dt>
            <dd>Opens the larger lightbox gallery when a visitor clicks a slide.</dd>
          </div>
          <div>
            <dt>Show thumbnail gallery</dt>
            <dd>Shows slide thumbnails beneath the main media.</dd>
          </div>
          <div>
            <dt>Show counter</dt>
            <dd>Displays the current slide position and total count.</dd>
          </div>
          <div>
            <dt>Display images at the same height</dt>
            <dd>
              Uses the slider ratio to size images. For regular posts, the crop setting
              chooses cover (which may trim edges) or contain; WooCommerce products use
              their product gallery sizing rules.
            </dd>
          </div>
          <div>
            <dt>Load slider on singular post types only</dt>
            <dd>
              Restricts slider output to individual content pages instead of archive/list
              contexts.
            </dd>
          </div>
          <div>
            <dt>Vertical mode</dt>
            <dd>
              Stacks slides vertically. It disables looping and transition speed; on
              WooCommerce products, previous/next controls are also hidden.
            </dd>
          </div>
          <div>
            <dt>Video slide URLs</dt>
            <dd>
              Recognized hosted sources include YouTube, Vimeo, WordPress.com, TikTok,
              Cloudinary, Tumblr, Publitio, GAG, Google Drive, MEGA, Bunny, BitChute,
              Brighteon, Spotify, Amazon, JW Player, SproutVideo, Rumble, SoundCloud,
              Dailymotion, X/Twitter, Odysee, Cloudflare Stream, and SuVideo. Direct video
              URLs may use <code>.mp4</code>, <code>.mov</code>, <code>.webm</code>,{' '}
              <code>.ogg</code>, or <code>.m3u8</code>. FIFU uses the matching video
              player for recognized sources. For separate video and audio settings, see{' '}
              <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-slider-shortcode-title">
        <FeatureGuideHeading
          id="featured-slider-shortcode-title"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL · MANUAL PLACEMENT
          </>}
          >
          Place the slider where you need it.
        </FeatureGuideHeading>
        <p>
              You can set optional <code>width</code> and <code>height</code> values to control the displayed size. See <Link to="/features/fifu-shortcode/">FIFU Shortcode</Link> for more examples.
            </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="featured-slider-help-title" help>
        <FeatureGuideHeading
          id="featured-slider-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            DISPLAY CHECKS
          </>}
          tone="help"
          >
          If the slider is missing or looks different.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>A tile preview is empty:</strong> check that its URL begins with{' '}
            <code>http</code> and opens directly. The page uses the saved URL.
          </li>
          <li>
            <strong>The slider is absent:</strong> confirm the feature is enabled and the
            content has saved slide URLs. Sliders do not render on WooCommerce cart pages.
          </li>
          <li>
            <strong>It appears only on individual pages:</strong> turn off{' '}
            <strong>Load slider on singular post types only</strong> if you also need
            slider output in archive contexts.
          </li>
          
          
        </FeatureGuideHelpList>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/fifu-product-gallery/">FIFU Product Gallery</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}

function RemoteProductGalleryImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Remote Product Gallery Images"
      className="feature-guide-page"
    >
      <p className="lead">
        Add and arrange remote product gallery images in WooCommerce using their
        URLs, without uploading copies to the Media Library.
      </p>

      <FeatureGuideHighlight id="remote-product-gallery-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ImagePlus size={15} aria-hidden="true" /> PRODUCT MEDIA BY URL
          </span>
          <h2 id="remote-product-gallery-intro">
            Keep product views linked to their source.
          </h2>
          <p>
            Add alternate product views from a supplier, CDN, or another image host.
            Save their URLs with the WooCommerce product and arrange the images in your
            preferred order. The files remain on their original servers, reducing
            duplicate uploads and Media Library maintenance.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/remote-product-gallery-images-guide-1.png"
            alt="Add a remote image URL and alternative text in the WooCommerce product gallery, then view the saved image in the product gallery."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="remote-product-gallery-purpose-title">
        <FeatureGuideHeading
          id="remote-product-gallery-purpose-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN THIS HELPS
          </>}
          >
          Use it for externally hosted product photos.
        </FeatureGuideHeading>
        <p>
          Use this for alternate product views you already host elsewhere and want to keep
          out of WordPress uploads. Your product stores the URLs and FIFU uses those links
          for gallery media; the remote host must continue serving each image. If you want
          WordPress to own local copies, use the{' '}
          <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>{' '}
          workflow instead.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-product-gallery-steps-title">
        <FeatureGuideHeading
          id="remote-product-gallery-steps-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ADD AND SAVE
          </>}
          >
          Build the gallery on a product.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>Products</strong> and edit the product that needs
              more views.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find FIFU’s <strong>Image/video gallery</strong> in the featured-media
              area, then select an empty tile or the plus tile. The gallery is shown
              when the selected featured-media type is Image or Video. The product’s
              main featured image is configured separately.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Paste a publicly accessible image address into{' '}
              <strong>Image/Video URL</strong>, such as{' '}
              <code>https://example.com/product-side.jpg</code>. Review the preview
              and enter <strong>Alternative text</strong>. Close the popup to apply
              the tile’s changes in the editor.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Add more URLs as needed, drag the image tiles into your preferred order,
              then select <strong>Update</strong> or <strong>Publish</strong> to save
              the WooCommerce product.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          For a quick change, open{' '}
          <Link to="/features/quick-editor/">FIFU Quick Edit</Link> from the product image
          column on the Products list. Its gallery editor also lets you add, edit, remove,
          and reorder product images; select <strong>Save</strong> when you finish.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-product-gallery-controls-title">
        <FeatureGuideHeading
          id="remote-product-gallery-controls-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            GALLERY FIELDS
          </>}
          >
          What each image tile controls.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Image/Video URL</dt>
            <dd>
              Enter a direct image address. The popup previews the linked image when
              the host makes it accessible; it does not download the file to WordPress.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>
              Describe what is shown in this product view to help visitors using
              assistive technology. You can edit it again by opening the tile.
            </dd>
          </div>
          <div>
            <dt>iframe URL</dt>
            <dd>
              Leave this empty for an ordinary image. For FIFU’s product gallery
              lightbox, enter both an image URL and an iframe URL to display custom
              embeddable content instead, such as a 360° view, PDF, map, or web page.
              The image remains the gallery’s visual preview.
            </dd>
          </div>
          <div>
            <dt>Remove a remote image</dt>
            <dd>
              Use the <strong>Remove remote image</strong> control on its tile, then
              save the product. Removing the URL does not delete the original
              file from its external host.
            </dd>
          </div>
          <div>
            <dt>Order</dt>
            <dd>
              Drag image tiles into your preferred sequence, then save the product.
              When video support is enabled, the editor can display image and
              video gallery items together.
            </dd>
          </div>
          <div>
            <dt>Existing local WooCommerce images</dt>
            <dd>
              Local product gallery images may appear as previews alongside your
              remote images. They remain local WordPress attachments; seeing them
              in the FIFU editor does not convert them to remote URLs.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-product-gallery-display-title">
        <FeatureGuideHeading
          id="remote-product-gallery-display-title"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            STOREFRONT DISPLAY
          </>}
          >
          Choose the gallery renderer when needed.
        </FeatureGuideHeading>
        <p>
          Saved remote URLs become gallery media for the product. WooCommerce can use its
          normal product gallery, or you can enable <strong>FIFU product gallery</strong>{' '}
          under <strong>FIFU → Settings → WooCommerce</strong> to use FIFU’s product-page
          gallery. This is useful with themes whose gallery needs image dimensions stored
          locally: FIFU’s gallery works without those saved remote-image dimensions. See
          the <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
          for its display controls.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-product-gallery-help-title" help>
        <FeatureGuideHeading
          id="remote-product-gallery-help-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            WHEN A PREVIEW FAILS
          </>}
          tone="help"
          >
          Check the image URL.
        </FeatureGuideHeading>
        <p>
          If the preview is blank or shows a not-found image, open the image URL in a
          private browser window. It must point to a publicly accessible image, and its
          host must allow your store to display it. If the gallery editor is missing,
          confirm WooCommerce and FIFU Premium are active, Image or Video is selected
          as the featured-media type, and the Premium editor is not locked. Remember
          to save the product after closing an image popup; closing the popup alone
          does not publish your changes.
        </p>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function RemoteVariationImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Remote Variation Images"
      className="feature-guide-page"
    >
      <p className="lead">
        Give each WooCommerce product variation its own remote featured image and
        optional image gallery, without uploading the files to WordPress.
      </p>

      <FeatureGuideHighlight id="remote-variation-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" /> WOOCOMMERCE VARIATIONS
          </span>
          <h2 id="remote-variation-intro">Show the images that match each choice.</h2>
          <p>
            Products with different colors, styles, or finishes need photos that match
            the selected option. With FIFU Premium and WooCommerce, you can assign
            each variation a main image and extra views using remote URLs. Shoppers
            can see the matching image set when they select that variation, while
            the original files remain on their external hosts.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/remote-variation-images-guide-1.png"
            alt="Enter and save image URLs for a WooCommerce variation, then show that image set when a shopper selects the variation."
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="remote-variation-setup-title">
        <FeatureGuideHeading
          id="remote-variation-setup-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP EACH VARIATION
          </>}
          >
          Add its main image and gallery.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, open a WooCommerce variable product. Set up its product
              attributes and create the variations you want to photograph, such as
              different colors or sizes.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Go to <strong>Product data → Variations</strong> and expand the
              variation you want to edit.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              In the variation’s <strong>Images</strong> area, select the first
              tile and enter a direct <code>https://</code> or <code>http://</code>{' '}
              <strong>Image URL</strong>, such as{' '}
              <code>https://example.com/blue-front.jpg</code>. This is the variation’s
              main image; additional populated tiles become its gallery.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              After the image loads in the preview, enter{' '}
              <strong>Alternative text</strong> to describe it and select{' '}
              <strong>OK</strong>. Use an empty tile or <strong>+</strong> to add
              more views. Drag the tiles to arrange them; the first populated
              image in the saved order is the main image. Repeat for other variations.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              Select <strong>Save changes</strong> in the Variations panel, then{' '}
              <strong>Update</strong> the product. On a new product, use{' '}
              <strong>Publish</strong> instead. Check the product page after saving.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          To remove an image, open its tile, clear the URL, select{' '}
          <strong>OK</strong>, and save the changes. If you remove all remote images
          from a variation, the FIFU gallery falls back to the parent product’s media.
        </p>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-variation-display-title">
        <FeatureGuideHeading
          id="remote-variation-display-title"
          icon={<>
            <MousePointerClick size={19} aria-hidden="true" />
          </>}
          kicker={<>
            DISPLAY OPTIONS
          </>}
          >
          Choose how variation images appear.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>Selected variation</dt>
            <dd>
              To switch the entire gallery when a shopper selects a matching
              variation, enable <strong>FIFU product gallery</strong> under{' '}
              <strong>FIFU → Settings → WooCommerce → FIFU Product Gallery</strong>.
              If the chosen variation has no images of its own, the gallery uses the
              parent product’s media. This setting is optional if you only need
              WooCommerce’s usual single variation image.
            </dd>
          </div>
          <div>
            <dt>Variantions images in the main gallery</dt>
            <dd>
              This optional switch is also under{' '}
              <strong>FIFU → Settings → WooCommerce → FIFU Product Gallery</strong>.
              When enabled, the initial gallery includes the first image from each
              variation alongside the parent product images. After a shopper selects
              a matching variation, its image set takes over. Leave this switch off
              to keep the initial gallery limited to parent product media. See the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
              for its gallery setup and display controls.
            </dd>
          </div>
          <div>
            <dt>Upload to media library</dt>
            <dd>
              To turn remote variation images into local copies, enable the upload button under <strong>FIFU → Settings → Image → Save in the Media Library → Main</strong>. Use this only if you want WordPress to store the images; leave it off to keep remote URLs. See <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-variation-check-title">
        <FeatureGuideHeading
          id="remote-variation-check-title"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            CHECK THE RESULT
          </>}
          tone="help"
          >
          If an image is missing, check the URL and saves.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>No preview in the editor</dt>
            <dd>
              Use a complete, publicly accessible <code>http://</code> or{' '}
              <code>https://</code> image URL. Try opening it in a private
              browser window. If the remote host blocks access or the image
              does not load, the preview and its alternative-text field may
              not appear.
            </dd>
          </div>
          <div>
            <dt>Gallery does not switch</dt>
            <dd>
              Enable <strong>FIFU product gallery</strong> under{' '}
              <strong>FIFU → Settings → WooCommerce → FIFU Product Gallery</strong>,
              save the variations and update the product. On the storefront, choose
              all attributes needed to identify a variation. Before a variation
              is selected, the gallery shows parent product images and, when
              merging is enabled, the first image of each variation.
            </dd>
          </div>
          <div>
            <dt>Variation has no image set</dt>
            <dd>
              Add a URL to its first tile. An empty variation falls back to the parent
              product’s media.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="remote-variation-import-title">
        <FeatureGuideHeading
          id="remote-variation-import-title"
          icon={<>
            <Code2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            IMPORT OR API
          </>}
          >
          Keep the same image order in automated workflows.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div>
            <dt>WP All Import Add-On</dt>
            <dd>
              In the variable product’s imported variation data, provide a
              variation <strong>SKU</strong> and its <code>fifu_list_url</code>.
              Separate image addresses with <code>|</code> or a line break;
              for example, <code>https://example.com/front.jpg|https://example.com/back.jpg</code>.
              Add matching <code>fifu_list_alt</code> entries in the same order
              when needed. The first URL becomes the variation’s main image,
              and later URLs become gallery images. See the{' '}
              <Link to="/features/wp-all-import-add-on/">WP All Import Add-On guide</Link>{' '}
              for the import setup.
            </dd>
          </div>
          <div>
            <dt>WooCommerce REST API</dt>
            <dd>
              In a WooCommerce REST API request to create or update a product
              variation, include <code>fifu_list_url</code> and optionally{' '}
              <code>fifu_list_alt</code> as <code>meta_data</code> entries with{' '}
              <code>key</code> and <code>value</code>. Use the same{' '}
              <code>|</code>-separated order for URLs and alternative text;
              the first URL is the main image. See the{' '}
              <Link to="/features/wp-woocommerce-rest-api/">
                WooCommerce REST API guide
              </Link>{' '}
              for API access and request setup.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

            <FeatureCliSection
        id="remote-variation-cli-title"
        commands={[
          {
            label: 'Include variation images in the main gallery',
            command: 'wp fifu woo --variations-merge=on',
          },
          {
            label: 'Keep variation images separate',
            command: 'wp fifu woo --variations-merge=off',
          },
        ]}
      />

      <FeatureGuideSection id="remote-variation-related-title">
        <FeatureGuideHeading
          id="remote-variation-related-title"
          icon={<>
            <Images size={19} aria-hidden="true" />
          </>}
          kicker={<>
            RELATED WORKFLOW
          </>}
          >
          Keep parent and variation galleries separate.
        </FeatureGuideHeading>
        <p>
          Variation images belong to each variation. For images shared by the product
          regardless of selected options, use{' '}
          <Link to="/features/remote-product-gallery-images/">
            Remote Product Gallery Images
          </Link>
          .
        </p>
      </FeatureGuideSection>

      <FeatureGuideCta />
    </Page>
  );
}

function FifuProductGalleryGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="FIFU Product Gallery"
      className="feature-guide-page"
    >
      <p className="lead">
        Display remote images, optional videos, and variation-specific views in
        a WooCommerce product gallery without uploading media files.
      </p>
      <FeatureGuideHighlight id="fifu-gallery-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" /> PRODUCT MEDIA DISPLAY
          </span>
          <h2 id="fifu-gallery-intro">Use a gallery that works with remote media.</h2>
          <p>
              FIFU Product Gallery shows remote product images and videos without requiring local copies. You can also display variation-specific images.
            </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/fifu-product-gallery-guide-1.png"
            alt="Product gallery media is arranged in the editor, combined with variation media, and displayed on a product page."
          />
        </div>
      </FeatureGuideHighlight>
      <FeatureGuideSection id="fifu-gallery-enable">
        <FeatureGuideHeading
          id="fifu-gallery-enable"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SET UP
          </>}
          >
          Enable the gallery and add product media.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              In WordPress, go to <strong>FIFU → Settings → WooCommerce</strong>.
              Find <strong>FIFU Product Gallery</strong> and enable{' '}
              <strong>FIFU product gallery</strong>. This lets FIFU replace the
              usual WooCommerce image area on eligible single-product pages.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit a WooCommerce product. Set its main image or featured media
              in FIFU’s featured-media area. Then open{' '}
              <strong>Image/video gallery</strong> and select an empty or plus tile.
              Add remote image URLs and, when video support is enabled, supported
              video URLs in this same gallery. Close the tile editor after entering
              each URL, drag the tiles into your preferred order, then save or
              update the product.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open the product page and confirm that the main image and other
              gallery items appear in the expected order. For additional image
              URLs, see{' '}
              <Link to="/features/remote-product-gallery-images/">
                Remote Product Gallery Images
              </Link>. To give each color or size its own images, see{' '}
              <Link to="/features/remote-variation-images/">
                Remote Variation Images
              </Link>.
            </p>
          </li>
        </FeatureGuideSteps>
        <p>
          To place a gallery manually, use <code>[fifu_gallery]</code> in the
          current product’s content, or <code>[fifu_gallery post_id="123"]</code>{' '}
          to show the gallery for product ID <code>123</code>. Replace that ID with
          your own. On a normal product page, FIFU can already display the
          gallery automatically, so avoid inserting the shortcode there unless
          you intend an additional gallery.
        </p>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-gallery-options">
        <FeatureGuideHeading
          id="fifu-gallery-options"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            PRODUCT GALLERY SETTINGS
          </>}
          >
          Configure the product gallery.
        </FeatureGuideHeading>
        <p>
          Find these switches under{' '}
          <strong>FIFU → Settings → WooCommerce → FIFU Product Gallery</strong>.
          They control how the product gallery displays its media.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Adaptive height</dt>
            <dd>
              Adjust the gallery height to the current image. The slider’s vertical mode
              disables this behavior.
            </dd>
          </div>
          <div>
            <dt>Videos before images</dt>
            <dd>
              Place video gallery items before image gallery items when the
              featured-media type does not already determine that order.
              The main featured media still comes first.
            </dd>
          </div>
          <div>
            <dt>Variantions images in the main gallery</dt>
            <dd>
              Include the first image of each variation alongside the parent
              product’s images before a variation is chosen. When shoppers select
              the attributes for a matching variation, the gallery switches to
              its own image set; if that variation has no images, the parent
              product gallery is used.
            </dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-gallery-slider-options">
        <FeatureGuideHeading
          id="fifu-gallery-slider-options"
          icon={<>
            <SlidersHorizontal size={19} aria-hidden="true" />
          </>}
          kicker={<>
            SHARED SLIDER CONTROLS
          </>}
          >
          Set navigation and transitions.
        </FeatureGuideHeading>
        <p>
          Find these controls under{' '}
          <strong>
            FIFU → Settings → <Link to="/features/featured-slider/">Featured slider</Link>
          </strong>.
          They also affect other FIFU sliders, not only product galleries.
        </p>
        <FeatureGuideOptions variant="fields">
          <div>
            <dt>Start autoplay automatically</dt>
            <dd>Advance through gallery items automatically.</dd>
          </div>
          <div>
            <dt>Pause autoplay on hover</dt>
            <dd>Pause automatic advances while the pointer is over the gallery.</dd>
          </div>
          <div>
            <dt>Show previous/next buttons</dt>
            <dd>
              Display controls for moving between items. Vertical mode disables these
              buttons.
            </dd>
          </div>
          <div>
            <dt>Show thumbnail gallery</dt>
            <dd>Display selectable thumbnails below the main media.</dd>
          </div>
          <div>
            <dt>Show counter</dt>
            <dd>Display the current gallery position.</dd>
          </div>
          <div>
            <dt>Vertical mode</dt>
            <dd>
              Arrange the slider vertically; this disables adaptive height and
              previous/next buttons.
            </dd>
          </div>
          <div>
            <dt>Time between each transition (in ms)</dt>
            <dd>Set the delay between automatic advances.</dd>
          </div>
          <div>
            <dt>Transition duration (in ms)</dt>
            <dd>Set how long each transition animation takes.</dd>
          </div>
          <div>
            <dt>Previous button / Next button</dt>
            <dd>Optionally set image URLs for the navigation buttons.</dd>
          </div>
          <div>
            <dt>Display images at the same height</dt>
            <dd>Use a shared height for slider images.</dd>
          </div>
        </FeatureGuideOptions>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-gallery-other-display">
        <FeatureGuideHeading
          id="fifu-gallery-other-display"
          icon={<>
            <ExternalLink size={19} aria-hidden="true" />
          </>}
          kicker={<>
            MORE DISPLAY OPTIONS
          </>}
          >
          Open images or place a gallery elsewhere.
        </FeatureGuideHeading>
        <p>
          To open images in a lightbox, enable <strong>Lightbox</strong> under{' '}
          <strong>FIFU → Settings → WooCommerce → Lightbox and Zoom</strong>,
          or enable <strong>Show gallery on click</strong> under{' '}
          <strong>FIFU → Settings → Featured Slider</strong>. The WooCommerce{' '}
          <strong>Zoom</strong> setting can enable magnification on supported
          desktop image slides, not video slides. For details, see{' '}
          <Link to="/features/lightbox-and-zoom/">Lightbox and Zoom</Link>.
        </p>
        <p>
          To display a gallery in a widget area, add the{' '}
          <strong>(FIFU) Product gallery</strong> widget. It uses the current
          post’s gallery; see the{' '}
          <Link to="/features/widgets/">Widgets guide</Link>.
        </p>
      </FeatureGuideSection>
            <FeatureCliSection
        id="fifu-gallery-cli"
        commands={[
          {
            label: 'Enable FIFU Product Gallery',
            command: 'wp fifu woo --gallery=on',
          },
          {
            label: 'Enable adaptive height',
            command: 'wp fifu woo --adaptive=on',
          },
          {
            label: 'Display videos before images',
            command: 'wp fifu woo --videos-before=on',
          },
          {
            label: 'Merge variation images',
            command: 'wp fifu woo --variations-merge=on',
          },
        ]}
        note="Replace on with off to disable an option."
      />
      <FeatureGuideSection id="fifu-gallery-custom">
        <FeatureGuideHeading
          id="fifu-gallery-custom"
          icon={<>
            <ExternalLink size={19} aria-hidden="true" />
          </>}
          kicker={<>
            OPTIONAL CONTENT
          </>}
          >
          Open custom content from a gallery item.
        </FeatureGuideHeading>
        <p>
              Under <strong>FIFU → Settings → WooCommerce → FIFU Product Gallery → Custom content</strong>, you can show embedded content, such as a 360° product view, PDF, or map, when shoppers select a gallery image. The external page must allow embedding.
            </p>
        <FeatureGuideSteps>
          <li>
            <span>1</span>
            <p>
              Edit the product and select an image tile in{' '}
              <strong>Image/video gallery</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enter the gallery image address in{' '}
              <strong>Image/Video URL</strong> and the embeddable page
              address in <strong>iframe URL</strong>. Both fields are needed
              for this image-based custom lightbox item.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Close the tile editor, save the product, and enable{' '}
              <strong>Lightbox</strong> or <strong>Show gallery on click</strong>
              as described above. Open the product page and click the
              image to view the custom content.
            </p>
          </li>
        </FeatureGuideSteps>
      </FeatureGuideSection>
      <FeatureGuideSection id="fifu-gallery-conditions">
        <FeatureGuideHeading
          id="fifu-gallery-conditions"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            DISPLAY CONDITIONS
          </>}
          tone="help"
          >
          Check these conditions if it is missing.
        </FeatureGuideHeading>
        <FeatureGuideHelpList>
          <li>
            <strong>No automatic gallery:</strong> WooCommerce must be active,
            <strong> FIFU product gallery</strong> must be enabled, and the
            page must use WooCommerce’s normal single-product image template.
            </li>
          <li>
            <strong>Missing images:</strong> confirm the product has saved featured
            media or gallery items and that the remote URLs still load. The
            gallery cannot display images that their hosts no longer serve.
          </li>
          <li>
            <strong>Unexpected variation images:</strong> check whether{' '}
            <strong>Variantions images in the main gallery</strong> is enabled.
            It adds the variations’ first images before a specific variation
            has been selected.
          </li>
          <li>
            <strong>Theme uses a different image template:</strong> automatic
            replacement may not run. You can place{' '}
            <code>[fifu_gallery]</code> manually in suitable product content;
            avoid rendering it twice on the same page.
          </li>
        </FeatureGuideHelpList>
      </FeatureGuideSection>
      <FeatureGuideCta spaced />
    </Page>
  );
}

function AutoShareSocialGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto-share on social media"
      className="feature-guide-page auto-share-guide"
    >
      <p className="lead">
        Connect Facebook, Instagram, or X once, then queue eligible published WordPress posts to the accounts you enable.
      </p>
      <FeatureGuideHighlight id="auto-share-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Share2 size={15} aria-hidden="true" /> AUTOMATIC POST DISTRIBUTION
          </span>
          <h2 id="auto-share-intro">Publish in WordPress and share in one flow.</h2>
          <p>
            Auto-share handles repeat distribution after you publish: one save can queue an eligible post to each connected, enabled account. This can reduce manual copy-and-paste and keep routine cross-posting tied to the post you manage in WordPress. Use it when you publish regularly to these networks; it is optional if you prefer to post separately on each service.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-share-on-social-media-guide-1.png"
            alt="A published WordPress post is connected and shared to Facebook, Instagram, and X"
          />
        </div>
      </FeatureGuideHighlight>

      <FeatureGuideSection id="auto-share-connect">
        <FeatureGuideHeading
          id="auto-share-connect"
          icon={<>
            <Settings2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            CONNECT YOUR ACCOUNTS
          </>}
          >
          Turn on sharing for the networks you use.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li><span>1</span><p>In WordPress, open <strong>FIFU → Settings</strong> and find <strong>Auto-share on social media</strong>. Turn on the main <strong>Auto share</strong> switch to allow automatic sharing.</p></li>
          <li><span>2</span><p>Open the <strong>Social media</strong> tab, then choose <strong>Facebook</strong>, <strong>Instagram</strong>, or <strong>X</strong>. Turn on a network’s switch to connect its account; turn it off to disconnect that account. Only networks both enabled and connected are used automatically.</p></li>
          <li><span>3</span><p>For X, first enter your app’s <strong>OAuth 2.0 Client ID</strong> in the X panel and save it. Your X developer app must allow <strong>Read and write</strong>, use the <strong>Native App</strong> type, and include this callback URI: <code>https://auto-share.fifu.workers.dev/v2/oauth/x/callback</code>.</p></li>
          <li><span>4</span><p>Publish or update a standard WordPress post that has an image. WordPress schedules the sharing check for about five seconds after the save; WP-Cron must run for that check to execute.</p></li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureGuideSection id="auto-share-requirements">
        <FeatureGuideHeading
          id="auto-share-requirements"
          icon={<>
            <Share2 size={19} aria-hidden="true" />
          </>}
          kicker={<>
            ACCOUNT REQUIREMENTS
          </>}
          >
          Prepare each network before connecting.
        </FeatureGuideHeading>
        <FeatureGuideOptions>
          <div><dt>Facebook</dt><dd>Connect a Facebook Page, not a personal profile. The Page must be published and visible to everyone. Your site must use HTTPS.</dd></div>
          <div><dt>Instagram</dt><dd>Connect a public Professional account (Business or Creator); personal or private accounts are not supported. The site must use HTTPS, and the post needs an HTTPS image hosted on your own site for Instagram sharing.</dd></div>
          <div><dt>X</dt><dd>Create an app at <a href="https://developer.x.com" target="_blank" rel="noreferrer">X Developer</a>, set Read and write permissions, choose Native App, register the callback URI above, and paste the app’s Client ID into the X panel.</dd></div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="auto-share-eligibility">
        <FeatureGuideHeading
          id="auto-share-eligibility"
          icon={<>
            <Image size={19} aria-hidden="true" />
          </>}
          kicker={<>
            WHAT GETS SHARED
          </>}
          >
          Only published posts with shareable image media.
        </FeatureGuideHeading>
        <p>Automatic checks apply to the standard WordPress <strong>Posts</strong> type in <strong>Published</strong> status. A featured image or an image URL FIFU resolves for the post makes it eligible. Pages, other post types, drafts, autosaves, and revisions are skipped.</p>
        <FeatureGuideOptions>
          <div><dt>Daily limit</dt><dd>Sharing is limited to 16 posts per day for each connected platform.</dd></div>
          <div><dt>Repeat saves</dt><dd>Once a post is recorded as shared on a network, later saves do not automatically send it to that same network again. Other connected networks are tracked independently.</dd></div>
          <div><dt>Media differences</dt><dd>Facebook and X can share the post link and text. Instagram requires a suitable HTTPS image hosted on your site; an image hosted only on another domain may not work there.</dd></div>
        </FeatureGuideOptions>
      </FeatureGuideSection>

      <FeatureGuideSection id="auto-share-test" help>
        <FeatureGuideHeading
          id="auto-share-test"
          icon={<>
            <CircleAlert size={18} aria-hidden="true" />
          </>}
          kicker={<>
            TEST OR TROUBLESHOOT
          </>}
          tone="help"
          >
          Send a post manually and read the result.
        </FeatureGuideHeading>
        <FeatureGuideSteps>
          <li><span>1</span><p>Open the <strong>Test</strong> tab, enter the post’s numeric <strong>Post ID</strong>, and choose <strong>Share now</strong>. This action sends to every connected account even when the main <strong>Auto share</strong> switch is off; it does not require automatic sharing to be enabled.</p></li>
          <li><span>2</span><p>Watch the Facebook, Instagram, and X status icons and the result message. A network can succeed while another fails; the result reports each network separately. The test checks connections first and skips networks that are not connected.</p></li>
          <li><span>•</span><p>If no post is queued, confirm it is a published standard post with an image, then check the main switch, that network’s switch, and its connection. For Facebook, verify the public Page and HTTPS site; for Instagram, verify the public Professional account and a same-site HTTPS image; for X, verify the Client ID and app callback and permissions.</p></li>
          <li><span>•</span><p>A post already marked as shared to a network is not sent again by the test. The daily per-network limit is 16 posts. A failed result names the affected network and includes its returned error when available.</p></li>
        </FeatureGuideSteps>
      </FeatureGuideSection>

      <FeatureRelatedGuides><Link to="/features/remote-featured-image/">Remote Featured Image</Link>, <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> and <Link to="/features/image-seo/">Image SEO</Link>.</FeatureRelatedGuides>

      <FeatureGuideCta />
    </Page>
  );
}
