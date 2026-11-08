import {
  ArrowUpRight,
  Ban,
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
  VolumeX,
  UsersRound,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
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
          'Check featured image URLs in the background and review links that fail three checks in FIFU settings.',
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
          'Migrate older FIFU post metadata into current database tables, then monitor background progress, retry errors, and rescan for legacy values.',
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

      <section className="feature-highlight" aria-labelledby="custom-popup-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-popup-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETUP</span>
            <h2 id="custom-popup-setup-title">Turn it on and add each embed.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          To change the same site-wide switch with WP-CLI, run{' '}
          <code>wp fifu image --popup=on</code> to enable it or{' '}
          <code>wp fifu image --popup=off</code> to disable it. Run one command at a time.
          Read the <Link to="/features/wp-cli/">WP-CLI guide</Link> for how to use FIFU’s
          command interface.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-popup-behavior-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT CHANGES</span>
            <h2 id="custom-popup-behavior-title">Each post opens its own saved embed.</h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-popup-controls-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONTROLS AND AVAILABILITY</span>
            <h2 id="custom-popup-controls-title">Where the controls apply</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              The panel is added to supported non-product post types. It is not added to
              WooCommerce product editors. FIFU also skips its editor panels in Web
              Stories and Search Filter Pro contexts, and when its editor panels are
              locked.
            </dd>
          </div>
          <div>
            <dt>Popup trigger</dt>
            <dd>
              The visitor must click that item’s FIFU featured-image output, or a link
              containing it, while saved embed code exists for the item. The click handler
              also checks a background-image element carrying that item’s{' '}
              <code>post-id</code>. A regular image without FIFU’s featured-image marker
              does not trigger this popup.
            </dd>
          </div>
          <div>
            <dt>Frontend dependency</dt>
            <dd>
              When the feature is enabled, the page loads the popup script and styles. If
              Fancybox is not already enqueued, FIFU loads Fancybox 3.5.7 from cdnjs;
              allow that CDN if your site’s network or content security policy blocks
              external scripts.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-popup-check-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="custom-popup-check-title">If the popup does not open</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Editor field is missing</dt>
            <dd>
              Enable <strong>Custom Popup</strong> in{' '}
              <strong>FIFU → Settings → Image</strong>. Confirm you are editing a
              supported non-product post type and that FIFU editor panels are not locked
              or suppressed by the current editor context.
            </dd>
          </div>
          <div>
            <dt>Click has no effect</dt>
            <dd>
              Save non-empty embed code on the same post as the featured image. Then click
              that post’s FIFU featured image or a link containing it; a different image
              on the page does not use the post’s saved embed. If the trigger is correct,
              check whether cdnjs is blocked.
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
      <section className="feature-highlight" aria-labelledby="fifu-shortcode-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-shortcode-use"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ADD · RENDER</span>
            <h2 id="fifu-shortcode-use">Insert a shortcode</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Paste it into the post, page, or supported content area where you want the
              output. Add <code>post_id</code> when you need a specific post; without it,
              the shortcode uses the current global post. A missing, invalid, or
              unavailable post ID produces no output.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save and view the content. FIFU returns the corresponding image markup,
              slider, or product gallery at the shortcode location.
            </p>
          </li>
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-shortcode-outputs"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OUTPUTS · PARAMETERS</span>
            <h2 id="fifu-shortcode-outputs">Choose the output and parameters</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="fifu-shortcode-limits"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              REQUIREMENTS · TROUBLESHOOTING
            </span>
            <h2 id="fifu-shortcode-limits">When output is empty</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
            <strong>Dimensions:</strong> <code>width</code> and <code>height</code> are
            optional HTML dimensions. For taxonomy images, CDN resizing by width occurs
            only when Photon is enabled and a width is supplied.
          </li>
        </ul>
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

function WatchLaterGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Watch Later" className="feature-guide-page">
      <p className="lead">
        Enable Watch Later for featured videos so visitors can save a personal queue in
        their browser and play it as a gallery.
      </p>
      <section className="feature-highlight" aria-labelledby="watch-later-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="watch-later-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Play size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE IT</span>
            <h2 id="watch-later-purpose-title">
              Give visitors a simple way to collect videos.
            </h2>
          </div>
        </div>
        <p>
          A video normally appears where your featured media is rendered. Watch Later adds
          a browser-local queue, so visitors can mark several featured videos and return
          to them together without keeping a separate list. This helps when a page or
          catalog contains videos someone wants to watch in sequence. The queue belongs to
          the current browser, so it does not follow a visitor to another browser or
          device; skip it if visitors do not need a saved video list.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="watch-later-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE · POSITION</span>
            <h2 id="watch-later-setup-title">Choose whether to show the controls.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="watch-later-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SAVE · PLAY · REMOVE</span>
            <h2 id="watch-later-workflow-title">
              Use the queue on a page with featured videos.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="watch-later-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">STORAGE · AVAILABILITY</span>
            <h2 id="watch-later-limits-title">Understand what the queue keeps.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>i</span>
            <p>
              <strong>Browser-specific:</strong> the queue stores video thumbnail and
              playback URLs in cookies in the visitor’s current browser. Clearing those
              cookies removes the saved list.
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
              <strong>Featured media only:</strong> the controls depend on FIFU rendering
              a featured video thumbnail or supported player embed on the page.
            </p>
          </li>
        </ul>
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

      <section
        className="feature-highlight"
        aria-labelledby="unsplash-image-search-intro"
      >
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="unsplash-image-search-editor-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IN THE CONTENT EDITOR</span>
            <h2 id="unsplash-image-search-editor-title">
              Search and save a featured image.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="unsplash-image-search-quick-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">FROM A CONTENT LIST</span>
            <h2 id="unsplash-image-search-quick-title">Search with Quick Edit.</h2>
          </div>
        </div>
        <p>
          Open <Link to="/features/quick-editor/">Quick Editor</Link> from a WordPress
          content list, enter keywords in its <strong>Image URL or Keywords</strong>{' '}
          field, and select <strong>Preview</strong>. Choose a result, then save the Quick
          Edit form to set that item’s featured image.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="unsplash-image-search-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ACCESS · RESULTS · LIMITS</span>
            <h2 id="unsplash-image-search-help-title">
              What to check when search is empty.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <Check size={15} aria-hidden="true" />
            </span>
            <p>
              <strong>Access:</strong> your WordPress account needs the{' '}
              <code>upload_files</code> capability. Search requests also use a WordPress
              REST nonce.
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
              <strong>Search service unavailable:</strong> a failed request or
              unsuccessful response produces an empty results list. Retry later; the
              search request waits up to 30 seconds for the service.
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="delete-cloud-purpose">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="delete-cloud-manual-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Search size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">MANUAL CLEANUP</span>
            <h2 id="delete-cloud-manual-title">Find and remove selected images.</h2>
          </div>
        </div>
        <p>
          Complete FIFU Cloud account setup and connect your site first. Open{' '}
          <strong>FIFU → Cloud → Delete</strong>. The inventory shows a thumbnail, post
          title, upload date, Post ID, and image location. Locations include featured
          images, gallery images, sliders, and category images. Images added through{' '}
          <Link to="/features/upload-to-cloud/">Upload to Cloud</Link> appear in this same
          inventory.
        </p>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Deletion is permanent and cannot be undone. When deletion succeeds, FIFU removes
          the Cloud URL from the associated media record and returns supported featured,
          gallery, or category media to its local version when an intact local backup is
          available. This does not restore a missing local file, so check each row’s title
          and location before confirming.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="delete-cloud-auto-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL AUTOMATION</span>
            <h2 id="delete-cloud-auto-title">Automatically clear unused cloud images.</h2>
          </div>
        </div>
        <p>
          On <strong>FIFU → Cloud → Delete</strong>, switch on{' '}
          <strong>Automatic delete</strong> to remove cloud images when they are no longer
          used on the site, such as after a post is deleted. Before removal, FIFU checks
          candidate image IDs against stored FIFU media references and retains IDs it
          finds in use. This is useful for ongoing cleanup; keep the toggle off if you
          want to choose every deletion yourself. The automatic option requires a
          completed, connected Cloud account.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="delete-cloud-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ACCESS AND RESULTS</span>
            <h2 id="delete-cloud-troubleshooting-title">
              When the inventory or action is unavailable.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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

      <section className="feature-highlight" aria-labelledby="upload-cloud-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="upload-cloud-connection-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REQUIRED · ACCOUNT</span>
            <h2 id="upload-cloud-connection-title">Connect the site before uploading.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="upload-cloud-manual-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CloudUpload size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">MANUAL UPLOAD</span>
            <h2 id="upload-cloud-manual-title">Find and upload selected images.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="upload-cloud-automatic-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <RefreshCw size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · AUTOMATIC UPLOAD</span>
            <h2 id="upload-cloud-automatic-title">
              Let scheduled jobs process remote URLs.
            </h2>
          </div>
        </div>
        <p>
          On <strong>FIFU → Cloud → Upload</strong>, enable{' '}
          <strong>Automatic upload</strong> to let scheduled Cloud jobs upload remote
          image URLs already used by FIFU. Each job processes up to 100 URLs, and the
          uploaded URLs are replaced with Cloud URLs. Turn the option off to revoke
          automatic-upload authorization. Use this when you want ongoing remote images
          handled without selecting each one manually; manual upload remains available
          when you want control over each batch.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="upload-cloud-costs-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CloudUpload size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COST AND COVERAGE</span>
            <h2 id="upload-cloud-costs-title">
              Know what changes when an image is stored.
            </h2>
          </div>
        </div>
        <p>
          Charges start on the upload date. Pricing is €0.001 per image, based on the
          daily average number of stored images over each 30-day billing period; generated
          thumbnails are excluded from the image count. Cloud processing and thumbnail
          delivery can reduce image-processing work on your WordPress server and deliver
          smaller image variants to visitors.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="upload-cloud-recovery-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BEFORE RETRYING</span>
            <h2 id="upload-cloud-recovery-title">
              Resolve missing rows and connection errors.
            </h2>
          </div>
        </div>
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

      <section className="feature-highlight" aria-labelledby="local-image-link-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="local-images-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SELECT AND LINK</span>
            <h2 id="local-images-workflow-title">
              Copy selected local image URLs into FIFU.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="local-images-effects-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CloudUpload size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AFTER LINKING</span>
            <h2 id="local-images-effects-title">
              Upload to Cloud only when you need hosted copies.
            </h2>
          </div>
        </div>
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

function DbMigrationGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="DB Migration"
      className="db-migration-guide"
    >
      <p className="lead">
        Backfill older FIFU values into current database tables when your site still has
        legacy media metadata.
      </p>
      <section className="feature-highlight" aria-labelledby="db-migration-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">LEGACY DATA BACKFILL</span>
          <h2 id="db-migration-purpose">Move old FIFU records into dedicated tables.</h2>
          <p>
            Older FIFU media values may still live in WordPress’s shared post metadata
            table. Migration transfers supported legacy records into FIFU’s current URL,
            mapping, and related tables in resumable batches. This can reduce FIFU’s
            dependence on repeated lookups in a large shared table and helps avoid one
            long migration request. Use it after upgrading a site with legacy FIFU data;
            if no legacy records remain, you do not need a backfill.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/db-migration-guide-1.png"
            alt="Three-step illustration of opening DB Migration, transferring legacy rows in batches, and seeing completed progress."
            loading="eager"
          />
        </div>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="db-migration-start-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Database size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPEN THE TOOL</span>
            <h2 id="db-migration-start-title">Start the background migration.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Choose <strong>Start migration</strong>. The background runner advances
              through registered tasks in batches and saves progress between requests.
            </p>
          </li>
        </ol>
        <p className="db-migration-callout">
          <strong>Safety:</strong> Each task removes a legacy value only after the
          corresponding new database record is confirmed.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="db-migration-monitor-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <RefreshCw size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">MONITOR AND CONTROL</span>
            <h2 id="db-migration-monitor-title">Use the summary and task rows.</h2>
          </div>
        </div>
        <dl className="db-migration-options">
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
              Shows the current task, completed-task progress, records migrated in this
              pass, historical processed records, remaining records, total errors, last
              run, and last error.
            </dd>
          </div>
          <div>
            <dt>Task rows</dt>
            <dd>
              Show each task’s status, saved cursor, migrated and remaining counts,
              errors, and last update. A task with errors remains eligible for retry even
              if its scan reached the end.
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
        </dl>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="db-migration-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT IT BACKFILLS</span>
            <h2 id="db-migration-coverage-title">
              Coverage depends on registered tasks.
            </h2>
          </div>
        </div>
        <p>
          Registered tasks cover featured, gallery, slider, video, video-gallery, and
          category media; associated alternative text; custom video and its terms; iframe
          values; finder and post-list records; and FIFU metadata flags for sent,
          uploaded, asynchronous, and imported work. The task rows on your site show the
          tasks registered by your installed version.
        </p>
        <p>
          Values are normalized into FIFU URL, key, mapping, alternative-text, and related
          tables. This moves the supported FIFU records out of the legacy post metadata
          path; unrelated WordPress post metadata continues to use its normal storage.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="db-migration-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              OPTIONAL · <Link to="/features/wp-cli/">WP-CLI</Link>
            </span>
            <h2 id="db-migration-cli-title">Run batches from a terminal.</h2>
          </div>
        </div>
        <p>
          From your WordPress installation, run one batch for a task or one batch for
          every registered task. Each command invocation advances a batch; repeat commands
          to continue processing. Task names are internal identifiers, such as{' '}
          <code>featured</code>.
        </p>
        <pre>
          <code>{`wp fifu-migrate run_task featured
wp fifu-migrate run-all --limit=1000 --time=30`}</code>
        </pre>
        <dl className="db-migration-options">
          <div>
            <dt>
              <code>run_task &lt;task&gt;</code>
            </dt>
            <dd>
              Runs one batch for the named registered task. An unknown name returns an
              error.
            </dd>
          </div>
          <div>
            <dt>
              <code>run-all</code>
            </dt>
            <dd>Runs one batch for every registered task.</dd>
          </div>
          <div>
            <dt>
              <code>--limit=&lt;number&gt;</code>
            </dt>
            <dd>
              Maximum records per batch; default <code>500</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>--time=&lt;seconds&gt;</code>
            </dt>
            <dd>
              Approximate time limit per batch; default <code>20</code> seconds. With{' '}
              <code>run-all</code>, the limit applies to each task.
            </dd>
          </div>
        </dl>
        <p className="db-migration-callout">
          <strong>Restart a task only when needed.</strong> Resetting clears its saved
          cursor and counters, so its next batch scans from the beginning.
        </p>
        <pre>
          <code>{`wp fifu-migrate reset_task featured`}</code>
        </pre>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="db-migration-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF A RUN STOPS</span>
            <h2 id="db-migration-help-title">Check access, runtime, and task errors.</h2>
          </div>
        </div>
        <dl className="db-migration-options">
          <div>
            <dt>The menu is missing</dt>
            <dd>
              Enable Debug Mode under FIFU → Settings → Developers, use the site admin
              rather than Network Admin, and sign in with <code>manage_options</code>.
            </dd>
          </div>
          <div>
            <dt>Automatic runtime unavailable</dt>
            <dd>
              The page displays this status if the background runner is unavailable. The{' '}
              <code>FIFU_DISABLE_AUTO_MIGRATION</code> constant disables that runtime;
              when WP-CLI is available, use the batch commands above.
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
          <div>
            <dt>WP-CLI reports an unknown task</dt>
            <dd>
              Use a registered internal task name exactly. The task row uses a display
              label, which can differ from that name.
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
function FifuFieldsGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="FIFU Fields" className="feature-guide-page">
      <p className="lead">
        Enter a remote media URL where you create content; FIFU applies it to the saved
        post or product.
      </p>
      <section className="feature-highlight" aria-labelledby="fifu-fields-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-fields-editor-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WORDPRESS EDITOR</span>
            <h2 id="fifu-fields-editor-title">Save a featured media URL.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-fields-gravity-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ClipboardCopy size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">GRAVITY FORMS</span>
            <h2 id="fifu-fields-gravity-title">Collect media with a submission.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Additional <strong>Featured Slider (FIFU)</strong> and{' '}
          <strong>Featured Video (FIFU)</strong> fields are available only when the
          matching FIFU feature is enabled. These collect their respective media URLs. For
          their display and configuration options, read{' '}
          <Link to="/features/featured-slider/">Featured Slider</Link> and{' '}
          <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-fields-vendors-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <UsersRound size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">VENDOR PRODUCT FORMS</span>
            <h2 id="fifu-fields-vendors-title">
              Let marketplace vendors set product images.
            </h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
        <p>
          These fields appear when the matching vendor integration is active. For Dokan
          saves, FIFU checks that the current account is a seller. Existing product URLs
          are populated in edit forms.
        </p>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="fifu-fields-availability-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              AVAILABILITY AND TROUBLESHOOTING
            </span>
            <h2 id="fifu-fields-availability-title">
              Check the integration and media type.
            </h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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

      <section
        className="feature-highlight"
        aria-labelledby="featured-media-filter-intro"
      >
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-media-filter-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="featured-media-filter-purpose-title">
              Review media coverage in place.
            </h2>
          </div>
        </div>
        <p>
          Use this when you are auditing content, locating records that still need media,
          or checking how featured media is stored. It narrows the existing admin list, so
          you can inspect matching items without opening them one by one. It is optional
          when your list is already manageable or you do not need to sort content by media
          state.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-media-filter-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">FILTER THE LIST</span>
            <h2 id="featured-media-filter-workflow-title">
              Choose a status and apply it.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-media-filter-options-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AVAILABLE MATCHES</span>
            <h2 id="featured-media-filter-options-title">
              Match the state you want to review.
            </h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="featured-media-filter-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF THE FILTER IS MISSING</span>
            <h2 id="featured-media-filter-help-title">Check the list and your access.</h2>
          </div>
        </div>
        <p>
          The dropdown appears only in the top controls of WordPress admin content lists
          for post types with featured-image support. You must be signed in with the{' '}
          <code>publish_posts</code> capability. If it is missing, check that you are on
          the content list (not an editor screen), your account has that capability, and
          the post type supports thumbnails. The filter applies to the main list query.
        </p>
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

function OrderEmailImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Add image to order email"
      className="feature-guide-page"
    >
      <p className="lead">
        Add a 100 × 100 product image beside each item in WooCommerce order emails with
        one setting.
      </p>

      <section className="feature-highlight" aria-labelledby="order-email-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <MailPlus size={15} aria-hidden="true" />
            WOOCOMMERCE ORDER EMAILS
          </span>
          <h2 id="order-email-intro">Make ordered products easier to recognize.</h2>
          <p>
            Turn on image display for the order items table. WooCommerce renders each item
            with its product image at 100 × 100 pixels.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/add-image-to-order-email-guide-1.png"
            alt="Enable Add image to order email, then see product thumbnails beside item names in the order email."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="order-email-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="order-email-purpose-title">Give order emails a visual reference.</h2>
          </div>
        </div>
        <p>
          WooCommerce’s order item table can list products without pictures. When you
          enable this option, images appear alongside item details in emails that contain
          that table. The visual cue can help you and your customers identify products
          more quickly, especially when names or variations look similar.
        </p>
        <p>
          Use it when you want product imagery in order emails. It is optional if
          text-only item details already work for your store. WooCommerce must be active
          for its order email table to be available.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="order-email-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE THE SETTING</span>
            <h2 id="order-email-setup-title">Turn on product images.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → WooCommerce</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Switch on <strong>Add image to order email</strong>.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Review an order email that includes the order items table. Each item is
              rendered with an image size of <strong>100 × 100 pixels</strong>.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="order-email-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE AND CONTROL</span>
            <h2 id="order-email-coverage-title">Know what changes.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Emails affected</dt>
            <dd>
              Emails that render WooCommerce’s ordered-items table. Other email content is
              not replaced by this setting.
            </dd>
          </div>
          <div>
            <dt>Product image source</dt>
            <dd>
              The product image can come from a FIFU image URL or the WordPress Media
              Library.
            </dd>
          </div>
          <div>
            <dt>Image size</dt>
            <dd>
              Fixed at 100 × 100 pixels; this feature has no separate size or placement
              controls.
            </dd>
          </div>
          <div>
            <dt>Setting off</dt>
            <dd>The original WooCommerce order items table is returned unchanged.</dd>
          </div>
          <div>
            <dt>Optional WP-CLI control</dt>
            <dd>
              Run <code>wp fifu woo --order-email=on</code> to enable it or use{' '}
              <code>--order-email=off</code> to disable it. See the{' '}
              <Link to="/features/wp-cli/">WP-CLI guide</Link> for terminal prerequisites.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="order-email-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF IMAGES ARE MISSING</span>
            <h2 id="order-email-troubleshooting-title">
              Check the switch and the email content.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <Check size={15} aria-hidden="true" />
            </span>
            <p>
              Confirm <strong>Add image to order email</strong> is on under FIFU →
              Settings → WooCommerce.
            </p>
          </li>
          <li>
            <span>
              <Check size={15} aria-hidden="true" />
            </span>
            <p>
              Check that the message includes WooCommerce’s order items table; this
              integration filters that table only.
            </p>
          </li>
          <li>
            <span>
              <Check size={15} aria-hidden="true" />
            </span>
            <p>
              Email applications may hide remote images until the recipient allows them.
              If the email’s item text appears but pictures do not, check the recipient’s
              email image-display settings.
            </p>
          </li>
        </ul>
      </section>

      <section className="feature-detail-cta activation-feature-cta">
        <div>
          <h2>Explore more FIFU features.</h2>
          <p>Browse the feature list to find another workflow for your store.</p>
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

function AutoSetCategoryImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set category images"
      className="feature-guide-page"
    >
      <p className="lead">
        Fill WooCommerce product categories with an image from a product’s FIFU featured
        image, then edit any category image yourself.
      </p>

      <section className="feature-highlight" aria-labelledby="category-images-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Tags size={15} aria-hidden="true" /> WOOCOMMERCE CATEGORIES
          </span>
          <h2 id="category-images-intro">
            Give product categories a relevant thumbnail.
          </h2>
          <p>
            Enable one automatic fill to use product images for categories that have
            products but no FIFU image. This helps you cover a large catalog without
            choosing every category image by hand.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-category-images-guide-1.png"
            alt="An enabled category image setting selects a product’s FIFU image for a category thumbnail"
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="category-images-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="category-images-purpose-title">
              Fill category imagery from your catalog.
            </h2>
          </div>
        </div>
        <p>
          A product category can lack a FIFU image even when its products already have
          FIFU featured images. Turn this on when you want product imagery to give
          category listings a visual starting point and reduce manual image assignment
          across many categories. Each eligible category receives one image selected from
          a non-trashed product assigned to it that has a FIFU image URL.
        </p>
        <p>
          The setting is optional. Leave it off if you prefer to curate every category
          image yourself or do not use FIFU featured images on products.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="category-images-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE AUTOMATIC ASSIGNMENT</span>
            <h2 id="category-images-enable-title">Turn on the single setting.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings</strong> and go to{' '}
              <strong>Auto set category images</strong> under WooCommerce.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Switch the setting on. FIFU fills eligible categories that do not yet have a
              FIFU image; each category gets one image chosen from its products’ saved
              FIFU image URLs.
            </p>
          </li>
        </ol>
        <dl className="fifu-fields-options">
          <div>
            <dt>Auto set category images</dt>
            <dd>
              On enables automatic assignment and updates. Off stops those runs. This is
              the only control in this settings panel.
            </dd>
          </div>
        </dl>
        <p>
          If you manage WordPress from a terminal, enable or disable the same setting with{' '}
          <code>wp fifu woo --category-auto=on</code> or{' '}
          <code>wp fifu woo --category-auto=off</code>. Run either command from your
          WordPress installation with WP-CLI available. The{' '}
          <Link to="/features/wp-cli/">WP-CLI guide</Link> covers the command-line
          workflow.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="category-images-edit-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET OR CLEAR AN IMAGE</span>
            <h2 id="category-images-edit-title">
              Manage a category’s image in its editor.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              In the <strong>FIFU</strong> area, enter an absolute image URL or search
              keywords in <strong>Image URL or Keywords</strong>, then choose{' '}
              <strong>Preview</strong>. For keyword searches, choose a result. Add
              alternative text when the image needs it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the category. The image URL and ALT text are saved for that product
              category, and its WordPress category thumbnail is synchronized for themes
              that display category images.
            </p>
          </li>
        </ol>
        <dl className="fifu-fields-options">
          <div>
            <dt>Image URL or Keywords</dt>
            <dd>
              Use an absolute URL that includes <code>http://</code> or{' '}
              <code>https://</code> and the domain, or enter search keywords and choose an
              image result. Preview the image before saving. Use the remove control to
              clear the current image. If you save an empty field while automatic
              assignment is on, FIFU tries to assign a product image; with the setting
              off, the image is cleared.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>
              Enter text describing the category image. Leaving it blank removes the saved
              alternative text.
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
              This button appears when the upload control is enabled. Use it to upload the
              current remote image as a WordPress media attachment; see the{' '}
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="category-images-updates-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SELECTION AND UPDATES</span>
            <h2 id="category-images-updates-title">Know which images can be assigned.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              A category needs at least one product and a product with a saved FIFU image
              URL. Products in the trash are excluded.
            </p>
          </li>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              The initial fill skips categories that already have a FIFU image. While the
              setting is on, FIFU checks again during content saves and category
              metadata-generation runs. Later runs can choose a different product image
              for a category, so treat automatic mode as ongoing rather than a one-time
              import.
            </p>
          </li>
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              If no image appears, confirm the category has products and at least one has
              a FIFU featured image URL. You can enter a category image URL manually in
              the category editor instead.
            </p>
          </li>
        </ul>
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

function LightboxAndZoomGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Lightbox and Zoom"
      className="feature-guide-page"
    >
      <p className="lead">
        Let shoppers open a larger product gallery or inspect image details with desktop
        hover zoom.
      </p>

      <section className="feature-highlight" aria-labelledby="lightbox-zoom-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Search size={15} aria-hidden="true" /> PRODUCT IMAGE DETAILS
          </span>
          <h2 id="lightbox-zoom-intro">Give product photos room to be inspected.</h2>
          <p>
            Product-page images are otherwise limited to their displayed size. Enable a
            lightbox for an enlarged gallery, Zoom for hover magnification, or both. This
            helps shoppers check details that are hard to see in the page layout; leave
            both off if your theme already gives you the viewing behavior you want.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/lightbox-and-zoom-guide-1.png"
            alt="A product image opens in a larger lightbox gallery and a desktop hover zoom reveals image detail."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="lightbox-zoom-settings-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS · WOOCOMMERCE</span>
            <h2 id="lightbox-zoom-settings-title">Turn on the behavior you need.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → WooCommerce</strong>, then find
              the <strong>Zoom</strong> panel.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Enable <strong>Lightbox</strong> to let shoppers open the product media
              gallery. On product pages, this also enables the slider gallery behavior.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enable <strong>Zoom</strong> to magnify image slides when shoppers hover.
              The two switches are independent, so you can use either one or both.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Save the switches you changed, open a WooCommerce product page, and try the
              enabled interaction.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="lightbox-zoom-conditions-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE AND CONDITIONS</span>
            <h2 id="lightbox-zoom-conditions-title">Know when zoom is available.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Page type</dt>
            <dd>These Lightbox and Zoom controls target WooCommerce product pages.</dd>
          </div>
          <div>
            <dt>Mobile</dt>
            <dd>Hover zoom is not initialized on mobile devices.</dd>
          </div>
          <div>
            <dt>Display width</dt>
            <dd>
              If the slider or its image is under 175 pixels wide, the slider is replaced
              by the first image and zoom is skipped.
            </dd>
          </div>
          <div>
            <dt>Video slides</dt>
            <dd>
              Zoom is omitted for video slides and recognized video thumbnails; it applies
              to eligible image slides.
            </dd>
          </div>
          <div>
            <dt>Theme display</dt>
            <dd>
              A theme’s own WooCommerce gallery templates can change how product media
              appears. If the lightbox or zoom is missing, first confirm you are testing a
              product page and the relevant switch is enabled, then check whether the
              theme supplies its own gallery.
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

      <section className="feature-highlight" aria-labelledby="vimeo-options-intro">
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
      </section>

      <section className="activation-feature-section" aria-labelledby="vimeo-setup-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS LOCATION</span>
            <h2 id="vimeo-setup-title">Open Vimeo options.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="vimeo-background-options-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BACKGROUND VIDEO TAB</span>
            <h2 id="vimeo-background-options-title">
              Choose where background mode applies.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
        <p>
          Each toggle saves when you change it. If you turn on the single-content
          restriction, make sure the page’s featured video is the Vimeo video you expect
          to play.
        </p>
        <p>
          The <Link to="/features/background-video/">Background Video guide</Link> also
          explains this playback mode in the broader video settings workflow.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="vimeo-token-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">MP4 TAB · OPTIONAL</span>
            <h2 id="vimeo-token-title">Add a token and choose a rendition.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              When metadata is next retrieved, the Vimeo API is asked for the video’s MP4
              files and pictures. The selected rendition is used when available; otherwise
              the closest lower rendition is chosen, or the closest higher one if no lower
              file exists.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="vimeo-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              WHEN MP4 LOOKUP DOES NOT COMPLETE
            </span>
            <h2 id="vimeo-limits-title">Check scopes and file availability.</h2>
          </div>
        </div>
        <p>
          If the status icon is red, verify the token includes all three scopes. If
          Vimeo’s token check cannot complete, the icon cannot confirm the scopes. A
          failed token check, failed API request, or missing MP4 file or thumbnail returns
          the video to Vimeo streaming through the regular lookup path. Saving a new token
          or resolution clears cached Vimeo metadata so the next lookup can use the new
          choice.
        </p>
        <p>
          Background mode applies to Vimeo embeds. A direct MP4 file does not receive
          Vimeo’s embed background parameter, so use the MP4 option when you specifically
          need Vimeo’s available MP4 file and quality selection.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="vimeo-cli-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="vimeo-cli-title">Change settings from the command line.</h2>
          </div>
        </div>
        <p>
          If you already use <Link to="/features/wp-cli/">WP-CLI</Link>, the video command
          accepts these Vimeo-related options. Use one option per command; replace the
          example token and resolution with your own values.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Background playback</dt>
            <dd>
              <code>wp fifu video --background=on</code> · use{' '}
              <code>--background=off</code> to turn it off.
            </dd>
          </div>
          <div>
            <dt>Single content pages only</dt>
            <dd>
              <code>wp fifu video --background-single=on</code> · use{' '}
              <code>--background-single=off</code> to turn it off.
            </dd>
          </div>
          <div>
            <dt>Access token</dt>
            <dd>
              <code>wp fifu video --vimeo-access-token=&lt;token&gt;</code> · replace{' '}
              <code>&lt;token&gt;</code> with your Vimeo personal access token.
            </dd>
          </div>
          <div>
            <dt>MP4 rendition</dt>
            <dd>
              <code>wp fifu video --vimeo-mp4-rendition=720p</code> · replace{' '}
              <code>720p</code> with a supported rendition.
            </dd>
          </div>
        </dl>
        <p>
          Run each command separately. Valid rendition values are <code>1080p</code>,{' '}
          <code>720p</code>, <code>540p</code>, <code>360p</code>, and <code>240p</code>.
          Saving the token or rendition clears the Vimeo metadata cache.
        </p>
        <p>
          The token command does not run the settings page’s scope check. If you need the
          scope indicator updated, save the token through <strong>Access token</strong> in
          Vimeo settings after using WP-CLI.
        </p>
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
      <section className="feature-highlight" aria-labelledby="background-video-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="background-video-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP AND APPLY</span>
            <h2 id="background-video-workflow-title">
              Enable the Vimeo background option.
            </h2>
          </div>
        </div>
        <p>
          A normal embedded player includes playback controls and can play sound.
          Background mode adds Vimeo’s background playback parameter, which starts muted
          and hides the controls. This can keep a hero or other decorative video moving
          without covering the design with player chrome. It is optional when you want a
          standard, visitor-controlled video player.
        </p>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="background-video-scope-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL SCOPE CONTROL</span>
            <h2 id="background-video-scope-title">
              Restrict background mode to the matching content page.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>background video</dt>
            <dd>
              Enables Vimeo background playback. When it is off, FIFU does not add Vimeo’s
              background parameter for this mode.
            </dd>
          </div>
          <div>
            <dt>on single post types only</dt>
            <dd>
              When enabled, background mode applies only if the displayed Vimeo URL
              matches that content item’s featured Vimeo URL. When disabled, the Vimeo
              background option can apply wherever that eligible video is displayed. This
              restriction is independent of the main background switch.
            </dd>
          </div>
        </dl>
        <p>
          Use the restriction when the video should behave as a background only on its own
          single-content page. Keep it off when the same Vimeo video should retain
          background behavior wherever it appears.
        </p>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="background-video-conditions-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE AND CHECKS</span>
            <h2 id="background-video-conditions-title">
              Check the video type and URL match.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Provider coverage</dt>
            <dd>
              Background mode is for Vimeo embeds only. YouTube and other provider embeds
              do not get Vimeo’s background parameter, and direct video-file URLs bypass
              embed parameter handling.
            </dd>
          </div>
          <div>
            <dt>Restriction is on, but playback is not backgrounded</dt>
            <dd>
              Check that the Vimeo URL currently displayed is the same as the content
              item’s featured Vimeo URL. The single-content option compares those URLs.
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
        </dl>
        <p>
          For the other Vimeo playback and file settings, continue with the{' '}
          <Link to="/features/vimeo-options/">Vimeo options guide</Link>.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="background-video-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="background-video-cli-title">
              Change either setting from the command line.
            </h2>
          </div>
        </div>
        <p>
          If you manage WordPress with <Link to="/features/wp-cli/">WP-CLI</Link>, set
          either option independently:
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Background playback</dt>
            <dd>
              <code>wp fifu video --background=on</code> enables it; use{' '}
              <code>--background=off</code> to disable it.
            </dd>
          </div>
          <div>
            <dt>Single-content restriction</dt>
            <dd>
              <code>wp fifu video --background-single=on</code> enables the URL-match
              restriction; use <code>--background-single=off</code> to disable it.
            </dd>
          </div>
        </dl>
        <p>
          Each flag accepts <code>on</code> or <code>off</code>.
        </p>
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

      <section className="feature-highlight" aria-labelledby="mouseover-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="mouseover-when-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN IT FITS</span>
            <h2 id="mouseover-when-title">
              Use hover previews where a pointer is expected.
            </h2>
          </div>
        </div>
        <p>
          Use this on product or content grids where visitors benefit from quick motion
          previews. Because playback follows the pointer and pauses when it leaves, keep
          it off if you prefer click-to-play or pointer hover is not a natural part of
          browsing.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="mouseover-config-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP PLAYBACK</span>
            <h2 id="mouseover-config-title">Enable the setting and its prerequisites.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="mouseover-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE · TROUBLESHOOTING</span>
            <h2 id="mouseover-coverage-title">Check the player and required settings.</h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="mouseover-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="mouseover-cli-title">Set the same toggle from the command line.</h2>
          </div>
        </div>
        <p>
          If you manage WordPress with <Link to="/features/wp-cli/">WP-CLI</Link>, run
          this from your WordPress installation to enable hover playback. Use{' '}
          <code>off</code> to disable it. This changes only the hover toggle; Mute and
          Video Controls remain separate prerequisites.
        </p>
        <pre>
          <code>{'wp fifu video --mouse=on'}</code>
        </pre>
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

function AutoplayGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Autoplay" className="feature-guide-page">
      <p className="lead">
        Choose where featured videos start by themselves, and enable Mute for the devices
        where you want playback.
      </p>

      <section className="feature-highlight" aria-labelledby="autoplay-intro">
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
      </section>

      <section className="activation-feature-section" aria-labelledby="autoplay-purpose">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE AUTOPLAY</span>
            <h2 id="autoplay-purpose">Make a featured video visible in motion.</h2>
          </div>
        </div>
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
      </section>

      <section className="activation-feature-section" aria-labelledby="autoplay-setup">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP · FIFU SETTINGS</span>
            <h2 id="autoplay-setup">Choose the pages that should start playback.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          The simultaneous homepage option is optional. Use it only when you want every
          homepage video to begin together; loading several videos at once can use more
          network and device resources than starting only the video in view.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="autoplay-controls">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="autoplay-controls">
              Change the location switches from the command line.
            </h2>
          </div>
        </div>
        <p>
          If you manage WordPress with <Link to="/features/wp-cli/">WP-CLI</Link>, run a
          command from your WordPress installation and replace <code>&lt;on|off&gt;</code>{' '}
          with <code>on</code> or <code>off</code>. The first four commands match the
          location switches above; the last two set Mute by device. The homepage
          all-videos option takes effect only while{' '}
          <strong>Autoplay · on homepage</strong> is also on.
        </p>
        <pre>
          <code>{`wp fifu video --autoplay=<on|off>\nwp fifu video --autoplay-front=<on|off>\nwp fifu video --autoplay-front-all=<on|off>\nwp fifu video --autoplay-else=<on|off>\nwp fifu video --mute-desktop=<on|off>\nwp fifu video --mute-mobile=<on|off>`}</code>
        </pre>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="autoplay-check"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK PLAYBACK</span>
            <h2 id="autoplay-check">Verify the device, page, and video type.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="minimum-width-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="minimum-width-config-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONFIGURE</span>
            <h2 id="minimum-width-config-title">Choose a minimum width</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              ; <strong>300</strong> is the example placeholder shown in the field. The
              value saves when you change it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              View a page with a featured video at narrow and wide sizes. FIFU checks the
              rendered thumbnail width; when that is zero, it checks the parent container
              width. At or above your value, the video can replace the thumbnail; below
              it, the thumbnail remains.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="minimum-width-rules-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">VALUE RULES AND TUNING</span>
            <h2 id="minimum-width-rules-title">Use a positive whole number</h2>
          </div>
        </div>
        <p>
          The setting accepts digits from <code>1</code> upward. Blank input, zero,
          negative values, decimals, or other characters are not saved; the previous value
          stays active. The width is measured in pixels.
        </p>
        <p>
          If the thumbnail remains where you expect a player, compare its rendered width
          with your threshold and lower the value if needed. Raise the value when players
          appear too small in your layout.
        </p>
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

      <section className="feature-highlight" aria-labelledby="video-controls-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-controls-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE THIS SETTING</span>
            <h2 id="video-controls-purpose-title">
              Match the player to the viewing experience.
            </h2>
          </div>
        </div>
        <p>
          A video without usable controls can leave visitors unable to pause, seek, or
          adjust playback from your page. Turn controls on when the video is content
          visitors should operate; the player can then expose its supported controls
          without sending viewers elsewhere. Turn them off for a presentation where you
          want fewer player interactions. This is one site-wide preference for FIFU
          featured video players, so it is optional if you do not display those players or
          want to keep their controls available.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-controls-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETUP · WORDPRESS ADMIN</span>
            <h2 id="video-controls-setup-title">Choose the site-wide behavior.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Find <strong>Video Controls</strong>. Turn the switch on to enable the
              behavior described below, or off to suppress controls or interaction where
              the player supports it. The switch saves the setting when you submit it.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Check a page that displays a FIFU featured video. The visible result depends
              on whether it is a native video file or an embedded player.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-controls-effects-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Play size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PLAYER BEHAVIOR</span>
            <h2 id="video-controls-effects-title">What on and off mean</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Native video files</dt>
            <dd>
              On adds the browser’s <code>controls</code> attribute to the video element,
              showing its native control bar. Off removes the bar.
            </dd>
          </div>
          <div>
            <dt>YouTube embeds</dt>
            <dd>
              Off adds <code>controls=0</code> to the player URL. On removes that
              suppression parameter; YouTube determines the resulting control display.
            </dd>
          </div>
          <div>
            <dt>Vimeo embeds</dt>
            <dd>
              This toggle does not change Vimeo’s player URL. Its controls follow Vimeo’s
              player behavior;{' '}
              <Link to="/features/background-video/">Background Video</Link> hides the
              controls and mutes Vimeo playback when enabled.
            </dd>
          </div>
          <div>
            <dt>Other embedded players</dt>
            <dd>
              Off disables pointer interaction with FIFU’s generated iframe, but does not
              add a universal “hide controls” parameter. A provider may still show its
              control bar. On restores pointer interaction; it cannot add controls that
              the provider does not expose.
            </dd>
          </div>
        </dl>
        <p>
          This applies to FIFU-generated featured video players, not separate embeds that
          you add directly with another block or player. Featured video and audio
          providers include YouTube, Vimeo, Twitter, 9GAG, Cloudinary, Tumblr, Publitio,
          JW Player, VideoPress, Sprout, Odysee, Rumble, Dailymotion, Cloudflare Stream,
          Bunny Stream, Amazon, BitChute, Brighteon, Google Drive, Spotify, SoundCloud,
          and local or remote video files. The control effect varies by provider as listed
          above.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-controls-related-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RELATED PLAYBACK BEHAVIOR</span>
            <h2 id="video-controls-related-title">Use it with hover playback</h2>
          </div>
        </div>
        <p>
          If you enable{' '}
          <Link to="/features/autoplay-on-mouseover/">Autoplay on Mouseover</Link>,
          embedded players require Video Controls and{' '}
          <Link to="/features/mute/">Mute</Link>. Native video files do not require Video
          Controls for hover playback. Keep this switch on when viewers need to pause or
          take over an embedded hover preview. If controls are off and the featured item
          has a post permalink, selecting the embedded player can send the visitor to that
          post.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-controls-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="video-controls-cli-title">Set the same toggle from your shell</h2>
          </div>
        </div>
        <p>
          If you administer WordPress with <Link to="/features/wp-cli/">WP-CLI</Link>, run
          the command you need from your WordPress installation. Each value updates the
          same site-wide preference as the settings switch.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Enable controls</dt>
            <dd>
              <code>wp fifu video --controls=on</code>
            </dd>
          </div>
          <div>
            <dt>Disable controls</dt>
            <dd>
              <code>wp fifu video --controls=off</code>
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="video-controls-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">LIMITS · TROUBLESHOOTING</span>
            <h2 id="video-controls-help-title">When the player still shows controls</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <p>
              If controls remain visible after you turn the switch off, identify the
              provider: only YouTube receives <code>controls=0</code>; Vimeo’s URL is
              unchanged, and other embeds may keep their own visible bar even though
              pointer interaction is disabled.
            </p>
          </li>
          <li>
            <p>
              If you added an embed directly with another block or player, this FIFU
              preference does not configure it. Check that embed’s own player options.
            </p>
          </li>
        </ul>
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

function PlayButtonGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Play Button" className="feature-guide-page">
      <p className="lead">
        Give visitors an on-demand way to play a featured video from its thumbnail.
      </p>

      <section className="feature-highlight" aria-labelledby="play-button-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="play-button-requirements-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BEFORE YOU TURN IT ON</span>
            <h2 id="play-button-requirements-title">
              Prepare a supported featured video and thumbnail.
            </h2>
          </div>
        </div>
        <p>
          Turn on <Link to="/features/featured-video-audio/">Featured Video / Audio</Link>{' '}
          first. The play control is added to a recognized video thumbnail, so configure
          the <Link to="/features/video-thumbnail/">Video Thumbnail</Link> display for the
          page types where you want it. Remote videos need a remote featured image; a
          local video needs a thumbnail saved in your Media Library. You can create one by
          choosing a frame in the featured video field and selecting “set this frame as
          thumbnail.”
        </p>
        <dl className="feature-guide-options">
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
        </dl>
        <p>
          Supported sources include YouTube, Vimeo, X/Twitter, TikTok, 9GAG, Cloudinary,
          Tumblr, Publitio, JW Player, VideoPress, Sprout, Odysee, Rumble, Dailymotion,
          Cloudflare Stream, Bunny Stream, Amazon, BitChute, Brighteon, Google Drive,
          MEGA, Spotify, SoundCloud, and remote or local video files.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="play-button-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP PLAYBACK</span>
            <h2 id="play-button-setup-title">Choose how the overlay behaves.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Each toggle or changed value saves separately; wait for the{' '}
          <strong>Success</strong> message before leaving the settings screen.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>color</dt>
            <dd>Sets the play control’s hover background color.</dd>
          </div>
          <div>
            <dt>size</dt>
            <dd>
              Sets the control’s font size in pixels; its padding is adjusted from this
              value.
            </dd>
          </div>
          <div>
            <dt>z-index</dt>
            <dd>
              Sets the thumbnail wrapper’s stacking level when another page element
              overlaps it.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="play-button-grid-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · GRID DISPLAY</span>
            <h2 id="play-button-grid-title">Choose where the overlay is hidden.</h2>
          </div>
        </div>
        <p>
          Under <strong>Hide from grid</strong>, enable <strong>WordPress</strong> to hide
          the overlay on the blog home, archives, and search results. Enable{' '}
          <strong>WooCommerce</strong> to hide it on shop and product category pages.
          These switches hide the play button, not the featured video thumbnail itself.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="play-button-availability-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              IF THE BUTTON DOES NOT APPEAR
            </span>
            <h2 id="play-button-availability-title">Check these display conditions.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
            <strong>Unsupported thumbnail paths:</strong> thumbnail lookup URLs on{' '}
            <code>cdn.fifu.app</code> that contain <code>video-thumb=</code>, plus
            on-the-fly video or audio URLs, are skipped.
          </li>
          <li>
            <strong>Lightbox dependencies:</strong> lightbox mode loads Fancybox 3.5.7
            from <code>cdnjs.cloudflare.com</code>. If your site blocks those assets, use
            inline mode or allow the required files.
          </li>
          <li>
            <strong>Grid switches:</strong> confirm that WordPress or WooCommerce hiding
            is not enabled for the page you are checking.
          </li>
        </ul>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="play-button-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="play-button-cli-title">
              Set the same options from the command line.
            </h2>
          </div>
        </div>
        <p>
          Run an individual command from your WordPress installation. For example, this
          selects lightbox playback:
        </p>
        <pre>
          <code>wp fifu video --play-mode=lightbox</code>
        </pre>
        <dl className="feature-guide-options">
          <div>
            <dt>
              <code>--play=on|off</code>
            </dt>
            <dd>Enable or disable the overlay.</dd>
          </div>
          <div>
            <dt>
              <code>--play-mode=inline|lightbox</code>
            </dt>
            <dd>Choose the playback mode.</dd>
          </div>
          <div>
            <dt>
              <code>--play-color=&lt;color&gt;</code>
            </dt>
            <dd>Set the hover background color as a text value.</dd>
          </div>
          <div>
            <dt>
              <code>--play-size=&lt;integer&gt;</code>
            </dt>
            <dd>Set the size in pixels; use a positive integer.</dd>
          </div>
          <div>
            <dt>
              <code>--play-zindex=&lt;integer&gt;</code>
            </dt>
            <dd>Set stacking order; use a positive integer.</dd>
          </div>
          <div>
            <dt>
              <code>--play-hide=on|off</code>
            </dt>
            <dd>Toggle hiding on WordPress home, archive, and search contexts.</dd>
          </div>
          <div>
            <dt>
              <code>--play-hide-wc=on|off</code>
            </dt>
            <dd>Toggle hiding on WooCommerce shop and product category pages.</dd>
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

function VideoThumbnailGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Video Thumbnail"
      className="feature-guide-page"
    >
      <p className="lead">
        Keep a still image in place of an embedded video on the page types you choose;
        visitors can load the video when they select it.
      </p>

      <section className="feature-highlight" aria-labelledby="video-thumbnail-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> VIDEO PREVIEW
          </span>
          <h2 id="video-thumbnail-intro">Show a still before playback.</h2>
          <p>
            Embedded players can add loading work to pages with video media. A thumbnail
            keeps an image visible until playback is requested, which can reduce initial
            player loading and gives you consistent previews on listings and content
            pages. Use it wherever videos appear alongside regular featured images; leave
            it off where you want players embedded immediately.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/video-thumbnail-guide-1.png"
            alt="Create a video still, choose where thumbnails remain visible, and let visitors select the preview to load playback"
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-thumbnail-source-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PREPARE YOUR VIDEO</span>
            <h2 id="video-thumbnail-source-title">Add a video and its still image.</h2>
          </div>
        </div>
        <p>
          First enable{' '}
          <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> and add
          a supported video to the content. FIFU supports local and remote video files
          plus YouTube, Vimeo, Twitter, 9GAG, Cloudinary, Tumblr, Publitio, JW Player,
          VideoPress, Sprout, Odysee, Rumble, Dailymotion, Cloudflare Stream, Bunny
          Stream, Amazon, BitChute, Brighteon, Google Drive, Spotify, and SoundCloud.
        </p>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              For a video in your Media Library, seek to the frame you want in the
              featured video field and select <strong>Set frame as thumbnail</strong>. The
              captured still is saved in your Media Library.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For a remote video, provide a remote featured image as its thumbnail. If you
              import media through an import plugin, its supported format places the
              thumbnail URL after the video URL, separated by a backslash:{' '}
              <code>video_url\image_url</code>.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-thumbnail-contexts-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHOOSE DISPLAY CONTEXTS</span>
            <h2 id="video-thumbnail-contexts-title">Keep the still on selected pages.</h2>
          </div>
        </div>
        <p>
          Open <strong>FIFU → Settings → Video → Featured video / audio</strong>. Under{' '}
          <strong>Video Thumbnail</strong>, turn on any contexts where the image should
          remain instead of being replaced by the video player:
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>on homepage</dt>
            <dd>The front page and, when WooCommerce is active, the shop page.</dd>
          </div>
          <div>
            <dt>on other pages</dt>
            <dd>
              Pages, the posts index, archives, and search results, excluding the front
              page.
            </dd>
          </div>
          <div>
            <dt>on posts</dt>
            <dd>Individual standard posts.</dd>
          </div>
          <div>
            <dt>on custom post types</dt>
            <dd>Singular custom post type content.</dd>
          </div>
        </dl>
        <p>
          Save each switch, then check a page in that context. These switches determine
          where the video remains an image; outside enabled contexts, supported videos can
          display as players.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="video-thumbnail-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN A PREVIEW IS MISSING</span>
            <h2 id="video-thumbnail-help-title">Check the media and page context.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>No image appears:</strong> confirm the video has a thumbnail image.
            Remote video thumbnails depend on the provider being recognized and its
            thumbnail being available; check the video URL if retrieval fails.
          </li>
          <li>
            <strong>A player appears instead:</strong> enable the switch matching that
            page type. The front page is handled by <strong>on homepage</strong>, not{' '}
            <strong>on other pages</strong>.
          </li>
          <li>
            <strong>Local video:</strong> capture a frame and save the post so the still
            is stored in the Media Library.
          </li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="taxonomy-image-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="taxonomy-image-enable"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE THE TERM FIELDS</span>
            <h2 id="taxonomy-image-enable">Turn on Taxonomy Image.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="taxonomy-image-assign"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ASSIGN AN IMAGE</span>
            <h2 id="taxonomy-image-assign">Save a URL with each term.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="taxonomy-image-display"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">DISPLAY THE IMAGE</span>
            <h2 id="taxonomy-image-display">Choose an archive or shortcode output.</h2>
          </div>
        </div>
        <p>
          For non-product taxonomy archives, FIFU prepends the term image to the archive
          description when the current term has an image. WooCommerce product-category
          archives are excluded from this automatic archive-description output. The image
          uses an empty alt attribute in that archive placement.
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
        <dl className="feature-guide-options">
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
              Optional HTML image dimensions. If <strong>optimize featured images</strong>{' '}
              with FIFU CDN is enabled, specifying a width also requests a resized image
              URL; height is optional for that resize. See{' '}
              <Link to="/features/optimized-images/">Optimized Images</Link> for that
              delivery feature.
            </dd>
          </div>
          <div>
            <dt>
              <code>style</code>
            </dt>
            <dd>Optional inline style attribute for the rendered image.</dd>
          </div>
        </dl>
        <p>
          The shortcode requires the feature to be enabled and to run inside the WordPress
          post loop. If <code>slug</code> is missing, it returns “Taxonomy slug not
          specified.” If the post has no terms in that taxonomy, it returns “No terms
          found for this taxonomy.”
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="taxonomy-image-coverage"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE AND CHECKS</span>
            <h2 id="taxonomy-image-coverage">
              Check the taxonomy, saved URL, and output location.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

function ImageSeoGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Image SEO" className="feature-guide-page">
      <p className="lead">
        Add useful alternative text to a FIFU featured image; FIFU carries image URLs into
        page markup, social metadata, and supported structured data.
      </p>

      <section className="feature-highlight" aria-labelledby="image-seo-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-seo-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <FileImage size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE IT</span>
            <h2 id="image-seo-purpose-title">
              Describe remote images and make their URLs discoverable.
            </h2>
          </div>
        </div>
        <p>
          A remote featured image may have no locally uploaded attachment record
          containing descriptive alt text, and SEO or social previews may otherwise omit
          its URL. FIFU associates the image description with your content and includes
          its image URL in supported output. Useful alt text gives assistive technology a
          text alternative; image URLs in page and structured metadata can help search
          engines and social services associate the image with the content.
        </p>
        <p>
          Use this when you set featured media through FIFU and want descriptive image
          markup or image metadata on singular content pages. It is optional if your theme
          or SEO setup already supplies the right description and image data, or if your
          content has no FIFU image.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-seo-alt-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONTENT EDITOR</span>
            <h2 id="image-seo-alt-title">Set alternative text for the featured image.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          The saved value is read for the FIFU featured attachment’s image attributes. If
          the featured image URL matches the first slider image, that image’s own
          alternative text is used.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-seo-output-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">FRONTEND OUTPUT</span>
            <h2 id="image-seo-output-title">Know which metadata FIFU supplies.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Image alt text</dt>
            <dd>
              FIFU supplies the saved description for its featured attachment. When that
              value is unavailable, the post title is the fallback.
            </dd>
          </div>
          <div>
            <dt>Structured data</dt>
            <dd>
              On singular pages, FIFU uses available slider image URLs, then other FIFU
              image URLs, then the main image URL. Yoast’s schema graph is updated when
              matching image fields exist. With a supported SEO plugin active, FIFU emits
              image graph data; otherwise it outputs its own image data, including Article
              or Product data where applicable.
            </dd>
          </div>
          <div>
            <dt>Yoast social previews</dt>
            <dd>
              For singular content other than the front page and posts page, FIFU can
              supply its main image to Yoast Open Graph and Twitter image fields. A custom
              Yoast Open Graph or Twitter image set for the content takes precedence.
            </dd>
          </div>
          <div>
            <dt>Rank Math</dt>
            <dd>
              FIFU integrates with Rank Math social image output and can rewrite its
              sitemap image URLs to the FIFU CDN when <strong>Optimize Thumbnails</strong>{' '}
              is enabled. Query-dependent remote URLs are preserved.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="image-seo-check-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK OUTPUT</span>
            <h2 id="image-seo-check-title">If image data is missing</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
          <li>
            <strong>Unexpected Yoast social image:</strong> a content-specific Yoast Open
            Graph or Twitter image overrides FIFU’s fallback. Update or remove that custom
            value if you want FIFU’s main image used.
          </li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="schedule-metadata-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="schedule-metadata-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Database size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="schedule-metadata-purpose-title">
              Use it when another process saves FIFU URLs.
            </h2>
          </div>
        </div>
        <p>
          Without the metadata records, a remote image URL added outside FIFU’s normal
          path may not display to visitors or work with WordPress components that expect
          an image record. A recurring scan can find these gaps across posts and terms,
          reducing the need to run a manual repair after each external update. Use the
          separate <Link to="/features/image-metadata/">Image Metadata</Link> action when
          you want to start a generation pass yourself. If your URLs always enter through
          FIFU’s normal editor or import workflow, this schedule is optional.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="schedule-metadata-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TURN ON THE SCHEDULE</span>
            <h2 id="schedule-metadata-setup-title">Enable the recurring check.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Metadata</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Find <strong>Schedule Metadata Generation</strong> and turn on its toggle.
              FIFU registers the recurring job.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Leave the toggle on while external workflows may add FIFU URLs. The job
              checks every minute for missing metadata on post and term records.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="schedule-metadata-controls-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONTROL AND SCOPE</span>
            <h2 id="schedule-metadata-controls-title">
              One toggle controls the recurring job.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              FIFU media gaps on posts and terms. Post checks cover image and video URLs
              plus supported gallery and slider records; term checks cover image and video
              records.
            </dd>
          </div>
          <div>
            <dt>Import overlap</dt>
            <dd>
              The metadata job skips a run while a FIFU import is marked as running.
            </dd>
          </div>
        </dl>
        <p>
          You can also manage the same toggle from the command line with the{' '}
          <Link to="/features/wp-cli/">WP-CLI integration</Link>:
        </p>
        <pre>
          <code>{'wp fifu schedule on\nwp fifu schedule off'}</code>
        </pre>
        <p>
          Run one command at a time. Use <code>on</code> to register the schedule and{' '}
          <code>off</code> to stop it.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="schedule-metadata-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              IF AN IMAGE STILL DOES NOT DISPLAY
            </span>
            <h2 id="schedule-metadata-troubleshooting-title">
              Check the saved URL and job conditions.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>The expected image is not picked up:</strong> confirm the FIFU URL is
            saved on the intended post or term. The scan only finds FIFU media records
            with missing metadata.
          </li>
          <li>
            <strong>The schedule appears idle during an import:</strong> it intentionally
            skips metadata processing while an import is running; the recurring schedule
            can check again later.
          </li>
          <li>
            <strong>The record exists but the image is still broken:</strong> this job
            creates missing metadata; it does not correct an invalid URL or make an
            unreachable image host available.
          </li>
        </ul>
      </section>

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

      <section className="feature-highlight" aria-labelledby="image-metadata-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-metadata-use-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <FileImage size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY RUN A PASS</span>
            <h2 id="image-metadata-use-title">
              Use it when remote media lacks WordPress records.
            </h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-metadata-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ONE-TIME GENERATION</span>
            <h2 id="image-metadata-workflow-title">Start the missing-records queue.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Starting this manual run turns off{' '}
          <Link to="/features/schedule-metadata-generation/">
            Schedule Metadata Generation
          </Link>{' '}
          if it is active. Re-enable that schedule afterward if you still need recurring
          checks for URLs added outside the usual FIFU workflow.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-metadata-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Database size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT IT CHECKS</span>
            <h2 id="image-metadata-coverage-title">
              The queue covers FIFU media on posts, products, and terms.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Posts and post types</dt>
            <dd>
              FIFU featured images, video URLs, custom video URLs, and first slider images
              or lists that still need metadata.
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
        </dl>
        <p>
          Empty URLs are skipped. Existing featured thumbnails and completed metadata
          records are treated as present, so generation fills gaps instead of replacing
          media already assigned.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="image-metadata-controls-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="image-metadata-controls-title">
              Control the same pass from your shell.
            </h2>
          </div>
        </div>
        <p>
          If <Link to="/features/wp-cli/">WP-CLI</Link> is available in your WordPress
          installation, use these commands to start or stop Image Metadata generation.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Start or resume</dt>
            <dd>
              <code>wp fifu metadata on</code>
            </dd>
          </div>
          <div>
            <dt>Pause</dt>
            <dd>
              <code>wp fifu metadata off</code>
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="image-metadata-recovery-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF THE IMAGE STILL FAILS</span>
            <h2 id="image-metadata-recovery-title">
              Check the saved address and queue state.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="auto-content-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="auto-content-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE THE AUTOMATION</span>
            <h2 id="auto-content-enable-title">Turn it on for new or edited posts.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="auto-content-filters-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONTROL WHAT QUALIFIES</span>
            <h2 id="auto-content-filters-title">Set filters for the content scan.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="auto-content-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF NOTHING CHANGES</span>
            <h2 id="auto-content-limits-title">Check the candidate and save path.</h2>
          </div>
        </div>
        <p>
          The scan reads saved post content. It recognizes image tags and video iframes;
          supported iframe sources include YouTube, Vimeo, Cloudinary, Tumblr, Publitio,
          9cache, and Odysee. It also detects raw YouTube, Vimeo, and 9cache video URLs.
          Relative image URLs are resolved against the post, while inline base64 images
          are skipped. The source filter checks for a case-sensitive substring in the
          media tag, so a later eligible item may be selected. If no eligible item
          remains, no content media is assigned. Video candidates are ignored while
          featured video is off. Posts saved through Elementor are not handled by this
          workflow.
        </p>
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

      <section className="feature-highlight" aria-labelledby="screenshot-feature-purpose">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="screenshot-feature-setup"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP</span>
            <h2 id="screenshot-feature-setup">Connect the page URL field.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              When a configured field contains a web address beginning with{' '}
              <code>http</code>, a scheduled check builds its screenshot URL and assigns
              it as FIFU media if the post has no existing featured media.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="screenshot-feature-coverage"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RESULTS AND TROUBLESHOOTING</span>
            <h2 id="screenshot-feature-coverage">Know which posts are eligible.</h2>
          </div>
        </div>
        <p>
          A post is skipped if it already has a WordPress featured thumbnail, FIFU image,
          video, custom video, or first slider image. The generated URL is stored as FIFU
          media; this workflow does not create a Media Library attachment. If you need to
          save an image to the local library, see{' '}
          <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>
          .
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Size</dt>
            <dd>
              Use <code>widthxheight</code>, with one to four digits for each dimension.
              Blank or invalid input omits the size segment from the screenshot URL.
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
              In the post editor, the <strong>Use screenshot</strong> checkbox prefixes
              <code>https://screenshot.fifu.app/</code> to the image URL you enter. This
              is a manual editor action, separate from the scheduled custom-field
              workflow.
            </dd>
          </div>
        </dl>
        <p>
          You can also set the automatic options with{' '}
          <Link to="/features/wp-cli/">WP-CLI</Link>: <code>wp fifu screenshot on</code>{' '}
          enables it; <code>wp fifu screenshot off</code> disables it; enables the
          feature, <code>wp fifu screenshot --field=meta_key</code> sets a custom-field
          key, and <code>wp fifu screenshot --size=1280x960</code> sets the screenshot
          dimensions. Replace <code>meta_key</code> with your field key; the size option
          accepts the same format as the setting.
        </p>
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

      <section className="feature-highlight" aria-labelledby="page-redirection-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-redirection-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE THE FIELD</span>
            <h2 id="page-redirection-enable-title">Turn on Page redirection.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-redirection-destination-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ExternalLink size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET AND SAVE</span>
            <h2 id="page-redirection-destination-title">
              Add the destination to your content.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-redirection-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE</span>
            <h2 id="page-redirection-coverage-title">Where the field appears</h2>
          </div>
        </div>
        <p>
          The panel is registered for WordPress post types that support featured images,
          except WooCommerce products. When bbPress is active, it is also registered for
          forums, topics, and replies; see the{' '}
          <Link to="/features/bbpress-and-buddyboss-platform/">
            bbPress and BuddyBoss Platform guide
          </Link>{' '}
          for its bbPress media fields. The panel is not registered when FIFU is locked,
          or in the Web Stories editor and Search &amp; Filter Pro screens.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="page-redirection-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK THE RESULT</span>
            <h2 id="page-redirection-troubleshooting-title">
              If the image does not open the destination
            </h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="disable-right-click-intro">
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
      </section>

      <section className="activation-feature-section" aria-labelledby="disable-right-click-setup">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP</span>
            <h2 id="disable-right-click-setup">Turn on the site-wide setting.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section className="activation-feature-section" aria-labelledby="disable-right-click-cli">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="disable-right-click-cli">Change the same setting from a terminal.</h2>
          </div>
        </div>
        <p>
          If WP-CLI is installed and available for your site, run one command from your WordPress installation directory. The <Link to="/features/wp-cli/">WP-CLI guide</Link> covers FIFU’s other command-line options.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Enable</dt>
            <dd><code>wp fifu image --block=on</code></dd>
          </div>
          <div>
            <dt>Disable</dt>
            <dd><code>wp fifu image --block=off</code></dd>
          </div>
        </dl>
      </section>

      <section className="activation-feature-section activation-feature-help" aria-labelledby="disable-right-click-scope">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SCOPE AND TROUBLESHOOTING</span>
            <h2 id="disable-right-click-scope">Know what the setting affects.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li><strong>Only image menus are suppressed.</strong> The handler targets frontend <code>&lt;img&gt;</code> elements; right-clicking page text or a background is outside its scope.</li>
          <li><strong>This is a deterrent, not access control.</strong> Visitors may still obtain an image through other browser or network tools.</li>
          <li><strong>If the menu still appears,</strong> confirm the setting is on and test the image itself on a public page rather than in the admin editor.</li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="page-finder-purpose">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-finder-enable"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE THE SCHEDULED SEARCH</span>
            <h2 id="page-finder-enable">Turn on page-based media lookup.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li><span>1</span><p>In WordPress admin, open <strong>FIFU → Settings → Automatic</strong>, then find <strong>Auto set featured media using web page address</strong>.</p></li>
          <li><span>2</span><p>On <strong>Auto set</strong>, enable <strong>auto set featured media using web page address</strong>. The scheduled finder checks about once a minute for eligible content without FIFU featured media.</p></li>
          <li><span>3</span><p>Leave <strong>look for embedded videos</strong> off to search for an image only. Turn it on if you also want the first embedded video found to be assigned as featured video; the <Link to="/features/featured-video-audio/">Featured Video / Audio guide</Link> explains how FIFU displays that media.</p></li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-finder-source"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <FileImage size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ADD A SOURCE PAGE</span>
            <h2 id="page-finder-source">Save the page address with each item.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>These custom fields must contain a web page address. If your field already contains the image or video URL itself, use the <Link to="/features/auto-set-featured-media-from-custom-field/">Auto set featured media from custom field guide</Link> for that workflow.</p>
      </section>

      <section className="activation-feature-section" aria-labelledby="page-finder-integrations">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon"><Code2 size={19} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">IMPORTS AND AUTOMATION</span>
            <h2 id="page-finder-integrations">Set the source during import or through an API.</h2>
          </div>
        </div>
        <p>If you create content in bulk, map the source page to <code>Media finder (webpage URL)</code> in the <Link to="/features/wp-all-import-add-on/">WP All Import add-on</Link>. The WordPress REST integration also accepts the post field <code>fifu_finder_url</code>, so your publishing process can set the same source address. See the <Link to="/features/wp-woocommerce-rest-api/">WordPress and WooCommerce REST API guide</Link> for the integration's broader setup.</p>
        <p>You can configure the finder from a WordPress installation with <Link to="/features/wp-cli/">WP-CLI</Link>:</p>
        <pre><code>{"wp fifu finder on\nwp fifu finder --field=_product_url\nwp fifu finder --video=on\nwp fifu finder --amazon=on"}</code></pre>
        <p>These commands enable the finder, select a custom field, include embedded-video lookups, and enable Amazon gallery syncing. Use <code>--video=off</code> or <code>--amazon=off</code> to disable those optional behaviors; use <code>wp fifu finder off</code> to stop the scheduled search.</p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="page-finder-amazon"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · AMAZON SOURCES</span>
            <h2 id="page-finder-amazon">Choose how Amazon pages are handled.</h2>
          </div>
        </div>
        <p>Open the <strong>Amazon</strong> tab in the same settings panel and enable <strong>set images and videos to the product gallery</strong> if you want Amazon page results added to a product's gallery. Amazon pages, including <code>amzn.to</code> short links, use this branch only while that option is on. With it off, they use the regular single-media lookup.</p>
        <p>For regular page lookups, FIFU prefers the page's Open Graph image; if that is unavailable, it selects the largest image it can measure. When video search is on, the finder can instead assign the first embedded video it finds. Amazon results may include multiple images and videos for the product gallery.</p>
        <p>For a separate workflow that sets a product gallery from image URLs you already have, read <Link to="/features/remote-product-gallery-images/">Remote Product Gallery Images</Link>.</p>
      </section>

      <section className="activation-feature-section activation-feature-help" aria-labelledby="page-finder-results">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help"><CircleAlert size={18} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">RESULTS AND TROUBLESHOOTING</span>
            <h2 id="page-finder-results">Know when the finder can act.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li><strong>Existing featured media stays in place.</strong> The scheduled scan selects items without FIFU image, video, custom-video, or slider-image values.</li>
          <li><strong>If nothing is assigned,</strong> confirm the page address is saved and the source page returns a usable image or embedded video. Failed, non-success, or empty remote lookup responses do not produce media.</li>
          <li><strong>This feature stores media URLs.</strong> It does not copy the found image into the WordPress Media Library. To save remote images locally instead, read <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>.</li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="custom-field-auto-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-field-setup"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP THE SOURCE</span>
            <h2 id="custom-field-setup">Choose the metadata key and enable the check.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-field-coverage"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <RefreshCw size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT THE CHECK CHANGES</span>
            <h2 id="custom-field-coverage">It fills empty featured-media slots.</h2>
          </div>
        </div>
        <p>
          A scheduled check runs every minute. It looks at posts and terms that do not
          already have a featured image, video, custom video, or slider image. Blank
          fields and values that do not resolve to an HTTP or HTTPS URL are skipped.
          Recognized video URLs are assigned as videos; other accepted URLs are assigned
          as images. Existing featured media is left in place.
        </p>
        <p>
          The setting accepts comma-separated keys and URL templates. It does not extract
          media from a web-page address or construct a URL from unrelated text: the field
          must contain the media URL, or an identifier used by a template. This can reduce
          duplicate data entry when an importer, theme, or other workflow already saves
          the media URL in metadata; if you assign featured media by hand or another
          method, enabling it is optional.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="custom-field-troubleshooting"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <CircleAlert size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN NOTHING IS ASSIGNED</span>
            <h2 id="custom-field-troubleshooting">Check the saved key and URL value.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section className="activation-feature-section" aria-labelledby="custom-field-cli">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="custom-field-cli">Set the key or toggle from WordPress CLI.</h2>
          </div>
        </div>
        <p>
          Run a command from your WordPress installation. Replace <code>image_url</code>{' '}
          with your metadata key.
        </p>
        <pre>
          <code>wp fifu customfield --field=image_url</code>
        </pre>
        <p>To enable scheduled assignment, run:</p>
        <pre>
          <code>wp fifu customfield on</code>
        </pre>
        <p>To disable it later, run this separate command:</p>
        <pre>
          <code>wp fifu customfield off</code>
        </pre>
        <p>
          The <Link to="/features/wp-cli/">WP-CLI guide</Link> covers other FIFU commands.
        </p>
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

function AutoSetProductImagesFromAsinGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Auto set product images from ASIN"
      className="feature-guide-page asin-feature-page"
    >
      <p className="lead">
        Add Amazon product imagery to eligible content from its ASIN, without looking up
        and pasting image URLs by hand.
      </p>

      <section className="feature-highlight" aria-labelledby="asin-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingBag size={15} aria-hidden="true" /> ASIN IMAGE LOOKUP
          </span>
          <h2 id="asin-intro">Fill image gaps from a product identifier.</h2>
          <p>
            When you have Amazon identifiers but no featured media, scheduled lookups can
            save the returned images to your content. This helps you populate catalogs
            with less manual image searching; use it for eligible items that have an ASIN
            and no existing image. Items already using a featured image or FIFU media are
            left alone.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/auto-set-product-images-from-asin-guide-1.png"
            alt="An ASIN is looked up and the returned product images appear as a product image and gallery."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="asin-connect-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP THE LOOKUP</span>
            <h2 id="asin-connect-title">Add your Amazon credentials.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → Auto</strong> and find the{' '}
              <strong>Auto set product images from ASIN</strong> panel. In its{' '}
              <strong>Credentials</strong> tab, enter your Amazon{' '}
              <strong>Partner tag</strong>, <strong>Access key</strong>, and{' '}
              <strong>Secret key</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Choose the <strong>Locale</strong> that matches your Amazon marketplace. The
              available choices are Australia, Belgium, Brazil, Canada, Egypt, France,
              Germany, India, Italy, Japan, Mexico, Netherlands, Poland, Saudi Arabia,
              Singapore, Spain, Sweden, Turkey, United Arab Emirates, United Kingdom, and
              United States.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              In <strong>Auto set</strong>, turn on the feature to schedule lookups.
              Checks run every minute, and items are queued only when all four credential
              values are present.
            </p>
          </li>
        </ol>
      </section>

      <section className="activation-feature-section" aria-labelledby="asin-input-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <FileImage size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PROVIDE AN IDENTIFIER</span>
            <h2 id="asin-input-title">Choose where each ASIN comes from.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Enter it on the item</dt>
            <dd>
              Edit a product or other supported content and enter the value in its{' '}
              <strong>ASIN</strong> side panel, then save. The panel appears while the
              feature is enabled.
            </dd>
          </div>
          <div>
            <dt>Read an existing field</dt>
            <dd>
              In the feature’s <strong>Custom field</strong> tab, enter the metadata key
              that already stores your ASIN. Use <code>_sku</code> for WooCommerce’s SKU
              field, or separate multiple keys with commas. A directly saved ASIN takes
              priority; the configured field is used when the direct value is empty.
            </dd>
          </div>
        </dl>
      </section>

      <section className="activation-feature-section" aria-labelledby="asin-result-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT THE CHECK DOES</span>
            <h2 id="asin-result-title">Images go to the matching content type.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list asin-results">
          <li>
            <p>
              For a WooCommerce product, returned image URLs become its FIFU product image
              and gallery. Read the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
              for gallery display options.
            </p>
          </li>
          <li>
            <p>
              For other supported content types, returned URLs become a FIFU{' '}
              <Link to="/features/featured-slider/">Featured Slider</Link>. A valid
              product URL returned with the lookup is also saved as the content’s redirect
              URL.
            </p>
          </li>
        </ul>
        <p>
          When the lookup returns no image URLs but does return video URLs, the workflow
          uses the video URLs instead.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="asin-eligibility-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ELIGIBILITY AND CHECKS</span>
            <h2 id="asin-eligibility-title">Know which items are checked.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>Existing media:</strong> items with a WordPress featured image or FIFU
            image, video, custom video, or slider media are skipped. The check targets
            missing featured media.
          </li>
          <li>
            <strong>No result:</strong> when Amazon returns no images or videos, the
            identifier is marked as not found and is not repeatedly looked up as a fresh
            item.
          </li>
          <li>
            <strong>Lookup failure:</strong> missing credentials prevent items from being
            queued. Transport or unreadable-response failures are recorded as failed
            attempts and handled by worker retry logic.
          </li>
          <li>
            <strong>Already have an image:</strong> this is optional. Keep it off when you
            already assign media yourself or your content does not have Amazon ASINs.
          </li>
        </ul>
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
      <section className="feature-highlight" aria-labelledby="automatic-updates-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="automatic-updates-license-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <KeyRound size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REGISTER YOUR SITE</span>
            <h2 id="automatic-updates-license-title">Submit your license key.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="automatic-updates-install-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK AND INSTALL</span>
            <h2 id="automatic-updates-install-title">
              Choose how releases are installed.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="automatic-updates-troubleshoot-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN A CHECK DOES NOT WORK</span>
            <h2 id="automatic-updates-troubleshoot-title">
              Read the result and correct its cause.
            </h2>
          </div>
        </div>
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
      </section>
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
      <section className="feature-highlight" aria-labelledby="title-search-purpose">
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
      </section>
      <section className="activation-feature-section" aria-labelledby="title-search-use">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Search size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE TITLE SEARCH</span>
            <h2 id="title-search-use">Choose how much review you want.</h2>
          </div>
        </div>
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="title-search-manual"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">MANUAL SEARCH</span>
            <h2 id="title-search-manual">Preview a match before you save.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          You can also search from <Link to="/features/quick-editor/">Quick Editor</Link>:
          enter keywords in <strong>Image URL or Keywords</strong>, select{' '}
          <strong>Preview</strong>, choose a result, then select <strong>Save</strong>.
          Leave keywords empty to search from the post title.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="title-search-filters"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SEARCH FILTERS</span>
            <h2 id="title-search-filters">Narrow or broaden the candidates.</h2>
          </div>
        </div>
        <p>
          Open{' '}
          <strong>
            FIFU → Settings → Automatic → Auto set featured image using post title and
            search engine → Search filters
          </strong>{' '}
          to adjust these independent filters:
        </p>
        <dl className="feature-guide-options">
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
        </dl>
        <p>
          Broader filters are more likely to return candidates. A vague title or
          restrictive combination can produce irrelevant results or none at all.
        </p>
      </section>
      <section className="activation-feature-section" aria-labelledby="title-search-auto">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              OPTIONAL SCHEDULED ASSIGNMENT
            </span>
            <h2 id="title-search-auto">Fill missing featured images gradually.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Scheduled assignment is optional. Search results can be a poor fit for some
          titles and filter combinations, so use manual review if every image must be
          approved before assignment.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="title-search-credit"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ExternalLink size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SOURCE CREDIT</span>
            <h2 id="title-search-credit">Optionally link visitors to the source page.</h2>
          </div>
        </div>
        <p>
          Search results include the address of the remote post that owns the image. To
          make the featured image link to that page on singular content pages, enable{' '}
          <Link to="/features/page-redirection/">Page Redirection</Link> under{' '}
          <strong>FIFU → Settings → Image</strong>. The link destination is the returned
          remote post address.
        </p>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="title-search-troubleshoot"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="title-search-troubleshoot">When results are empty or off-topic.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="replace-not-found-purpose">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-why"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="replace-not-found-why">Keep your layouts readable when a host fails.</h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-setup"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP YOUR BACKUP</span>
            <h2 id="replace-not-found-setup">Choose one reliable replacement image.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          To stop using your custom replacement, clear <strong>Image URL</strong>
          and let the setting save. Some integrations may still have their own
          built-in placeholder.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-how"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <RefreshCw size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">HOW IT WORKS</span>
            <h2 id="replace-not-found-how">The browser swaps the displayed image after an error.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          This works when an image load fails; it is not a scheduled link
          scan or a guarantee that every image on the site will be replaced.
          The result depends on how your theme or integration renders the image.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-coverage"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHERE IT APPLIES</span>
            <h2 id="replace-not-found-coverage">Know which FIFU displays use the backup.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-related"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RELATED FEATURES</span>
            <h2 id="replace-not-found-related">A fallback is different from an empty-image default.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="replace-not-found-cli"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="replace-not-found-cli">Configure the URL from your server.</h2>
          </div>
        </div>
        <p>
          If you manage WordPress from the command line, run this from
          your WordPress installation and replace the example with your URL:
        </p>
        <pre><code>wp fifu image --replace="https://example.com/backup.jpg"</code></pre>
        <p>To clear your custom replacement:</p>
        <pre><code>wp fifu image --replace=""</code></pre>
        <p>
          Invalid non-empty URLs are not saved, so the previous value
          remains in place.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="replace-not-found-troubleshooting"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="replace-not-found-troubleshooting">If the backup does not appear</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

function BrokenLinkCheckerGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Broken Link Checker"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Automatically check remote featured-image URLs as your site serves content,
        then review links that fail repeatedly.
      </p>

      <section className="feature-highlight" aria-labelledby="broken-link-purpose">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Bug size={15} aria-hidden="true" /> REMOTE IMAGE MONITORING
          </span>
          <h2 id="broken-link-purpose">
            Find broken featured images without scanning your entire website.
          </h2>
          <p>
            Remote images can disappear when hosting changes, access is restricted, or
            a file is removed. FIFU checks image URLs encountered while WordPress
            renders featured images, and lists an affected post only after the URL
            fails multiple checks. Monitoring is designed to spread the work over
            normal site activity instead of trying to validate every image at once.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/broken-link-checker-guide-1.webp"
            alt="Four-step Broken Link Checker workflow: enable the feature, let visitors load pages, check URLs one at a time with 24-hour spacing, and review URLs after three failures."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-use-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Globe size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="broken-link-use-title">
              Keep track of images hosted outside WordPress.
            </h2>
          </div>
        </div>
        <p>
          This is useful for sites with many posts, pages, or products using{' '}
          <Link to="/features/remote-featured-image/">Remote Featured Image</Link>.
          You can review persistent image-link failures without opening every post
          manually. FIFU monitors the primary remote featured-image URL, not every
          image inside the post body or product gallery.
        </p>
        <p>
          <strong>Checking depends on site activity.</strong> A visitor or search bot
          can trigger a check when WordPress actually renders the featured image.
          Older posts that are never requested may not be checked. When a page is
          served entirely from a cache, that visit may not run WordPress or queue
          a new check.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP THE CHECKER</span>
            <h2 id="broken-link-enable-title">
              Enable monitoring and let your site collect results.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Turn on <strong>Link Checker</strong>. No API key, URL list,
              or separate scan schedule is required.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Visit a page that uses a FIFU remote featured image, or let your
              normal site traffic load it. Eligible URLs are queued in the
              background when WordPress generates the image output.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Return to <strong>Broken Link Checker → Broken Links</strong> after
              your site has had time to check images. A new failure does not
              appear in the list immediately.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-rules-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShieldCheck size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">HOW CHECKING WORKS</span>
            <h2 id="broken-link-rules-title">
              One queued check at a time, with daily retries.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Traffic-driven checks</dt>
            <dd>
              When a supported FIFU featured image is requested during page
              rendering, its direct HTTP or HTTPS URL can enter the queue.
              The checker does not independently crawl every post on your site.
            </dd>
          </div>
          <div>
            <dt>Lightweight processing</dt>
            <dd>
              A background worker checks one queued URL at a time. It first
              makes a lightweight request instead of downloading the full image,
              which helps avoid overloading the website.
            </dd>
          </div>
          <div>
            <dt>Once per day, per URL</dt>
            <dd>
              The same URL becomes eligible for another check after 24 hours.
              Multiple posts using the same image URL share its check history.
            </dd>
          </div>
          <div>
            <dt>Three consecutive failures</dt>
            <dd>
              A URL is considered broken after three failed checks. A successful
              response resets its failure count to zero, so a temporary outage
              does not immediately put an image on the list.
            </dd>
          </div>
          <div>
            <dt>What counts as a response</dt>
            <dd>
              The checker considers HTTP status codes from 200 through 399
              successful. Other statuses or request errors count as failures.
              It checks HTTP availability, not whether every successful
              response contains a visually correct image.
            </dd>
          </div>
        </dl>
        <p>
          Because repeat attempts are separated by at least a day and require
          the URL to be encountered again, it may take several days and several
          page requests before a broken link appears.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-results-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REVIEW AND REPAIR</span>
            <h2 id="broken-link-results-title">
              Open the affected post and replace its image URL.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Open <strong>FIFU → Settings → Image → Broken Link Checker → Broken Links</strong>.
              The table shows <strong>Post</strong> and <strong>Broken Image URL</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Click the post title to open its editor. The broken image URL is
              also linked, so you can inspect the original source.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Replace the URL with a working, publicly accessible image and
              save the post. The list reflects current image associations
              and recorded failures; it is not a record of repairs you made.
            </p>
          </li>
        </ol>
        <p>
          You need an administrator-level account with the WordPress{' '}
          <code>manage_options</code> capability to load this results table.
          The table excludes trashed posts, auto-drafts, and attachments.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-related-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RELATED FEATURES</span>
            <h2 id="broken-link-related-title">
              Monitoring a link is different from displaying a fallback.
            </h2>
          </div>
        </div>
        <p>
          Broken Link Checker identifies repeatedly failing URLs so you can
          repair them. <Link to="/features/replace-not-found-image/">Replace Not Found Image</Link>{' '}
          instead shows a backup image when a supported image fails to load
          in a visitor's browser. You can use the two features together:
          one improves the visitor's experience, and the other helps you
          find the original URLs that need attention.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="broken-link-troubleshoot-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="broken-link-troubleshoot-title">
              Why a visibly broken image might not be listed yet.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>The post was not visited:</strong> the checker only queues
            direct featured-image URLs encountered during WordPress image rendering.
            It does not automatically work through every old post.
          </li>
          <li>
            <strong>The page came from cache:</strong> serving cached HTML
            without running WordPress may not trigger a new check.
          </li>
          <li>
            <strong>Not enough attempts:</strong> the same URL must fail three
            times, with new attempts eligible after 24 hours. A successful
            check resets the failure counter.
          </li>
          <li>
            <strong>The URL responds successfully:</strong> a host can send an
            HTTP success status while returning an unexpected file or page.
            The checker measures request availability, not image content.
          </li>
          <li>
            <strong>The results table is unavailable:</strong> verify that the
            feature is enabled and your account has permission to manage
            WordPress settings.
          </li>
        </ul>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="broken-link-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="broken-link-cli-title">
              Enable or disable checking from a terminal.
            </h2>
          </div>
        </div>
        <p>From your WordPress installation, enable monitoring with:</p>
        <pre><code>wp fifu image --validate-featured-image-urls=on</code></pre>
        <p>To disable it:</p>
        <pre><code>wp fifu image --validate-featured-image-urls=off</code></pre>
        <p>
          This changes the same toggle as the admin settings. It does not start
          a bulk scan. See the <Link to="/features/wp-cli/">WP-CLI guide</Link>.
        </p>
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

      <section className="feature-highlight" aria-labelledby="modify-content-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="modify-content-setup"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS WORKFLOW</span>
            <h2 id="modify-content-setup">Choose one display change.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="modify-content-options"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AVAILABLE CHANGES</span>
            <h2 id="modify-content-options">What each toggle changes</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              Removes a matching image or supported featured video from displayed content.
              It needs a featured-image attachment URL to begin matching. Image URL
              matching ignores surrounding whitespace and HTML entity encoding, but
              different URL variants do not count as a match.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="modify-content-scope"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL SCOPE</span>
            <h2 id="modify-content-scope">Apply the changes to selected post types.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Clear the field to remove the post-type restriction. With slugs entered,
              either change applies only on singular pages whose post type is in your
              list. With the field empty, it can apply wherever WordPress displays post
              content.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="modify-content-matching"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              MATCHING AND TROUBLESHOOTING
            </span>
            <h2 id="modify-content-matching">If repeated media remains</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <p>
              Confirm the post has a featured image attachment URL. If the image in the
              body uses a different URL variant, FIFU leaves it in place. The matcher
              removes the first matching image element per render pass. For a{' '}
              <Link to="/features/featured-slider/">Featured Slider</Link>, it can remove
              a FIFU slider fragment containing the first slider image URL.
            </p>
          </li>
          <li>
            <p>
              A matching embedded <code>iframe</code> or <code>video</code> can be removed
              when
              <Link to="/features/featured-video-audio/"> Featured Video / Audio</Link> is
              enabled and the embed source contains that post’s featured video ID. For a
              custom video, the video URL must match, or its poster must match the
              featured image URL. Video removal also depends on the featured-image
              attachment URL being available.
            </p>
          </li>
          <li>
            <p>
              The add filter runs before removal. If both toggles are on, removal may
              match and remove the image just added. Leave one off if you want to add an
              image without also removing a matching copy.
            </p>
          </li>
          <li>
            <p>
              If you turn a toggle off, FIFU stops transforming the displayed content. Any
              image or text already saved in the post body remains there because these
              controls do not edit stored content.
            </p>
          </li>
        </ul>
      </section>

      <section className="feature-detail-cta activation-feature-cta">
        <div>
          <h2>Explore more FIFU features.</h2>
          <p>Browse the feature list for other ways to manage featured media.</p>
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

      <section
        className="feature-highlight"
        aria-labelledby="hide-featured-media-purpose"
      >
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hide-featured-media-setup"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET THE DISPLAY RULE</span>
            <h2 id="hide-featured-media-setup">Choose where the media disappears.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hide-featured-media-filters"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL FILTERS</span>
            <h2 id="hide-featured-media-filters">Limit the rule by content type.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hide-featured-media-coverage"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT TO EXPECT</span>
            <h2 id="hide-featured-media-coverage">Understand the display boundary.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hide-featured-media-cli"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="hide-featured-media-cli">
              Set the same options from the command line.
            </h2>
          </div>
        </div>
        <p>
          If you manage WordPress with <Link to="/features/wp-cli/">WP-CLI</Link>, run the
          relevant command from the site’s WordPress directory. Each command updates only
          its named option.
        </p>
        <dl className="feature-guide-options">
          <div>
            <dt>Enable or disable</dt>
            <dd>
              <code>wp fifu image --hide=on</code> enables the rule; use{' '}
              <code>--hide=off</code> to disable it.
            </dd>
          </div>
          <div>
            <dt>Post types</dt>
            <dd>
              <code>wp fifu image --hide-types=post,page</code> replaces the post type
              filter. Pass an empty value, <code>wp fifu image --hide-types=</code>, to
              clear it.
            </dd>
          </div>
          <div>
            <dt>Post formats</dt>
            <dd>
              <code>wp fifu image --hide-formats=video,audio</code> replaces the post
              format filter. Pass an empty value,{' '}
              <code>wp fifu image --hide-formats=</code>, to clear it.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="hide-featured-media-troubleshooting"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="hide-featured-media-troubleshooting">
              If the result does not match.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="clear-metadata-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Database size={15} aria-hidden="true" /> METADATA MAINTENANCE
          </span>
          <h2 id="clear-metadata-intro">
            Clear image records in batches; keep your URLs.
          </h2>
          <p>
            Use this cleanup when you are switching to local images or need to rebuild
            FIFU’s generated records. It removes obsolete generated data without
            discarding the remote addresses you may still need. Batch processing shows
            progress and avoids holding one long cleanup request open, which can make
            large libraries easier to process. WordPress components that depend on the
            removed records may stop displaying remote images until you generate metadata
            again.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/clear-metadata-guide-1.png"
            alt="Enable Clear Metadata, follow batch progress, and retain a remote image URL after cleanup"
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="clear-metadata-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RUN THE CLEANUP</span>
            <h2 id="clear-metadata-workflow-title">Start it from Metadata settings.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="clear-metadata-effects-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Database size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT CHANGES</span>
            <h2 id="clear-metadata-effects-title">
              Metadata is removed; saved image URLs stay.
            </h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="clear-metadata-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">LIMITS AND RECOVERY</span>
            <h2 id="clear-metadata-limits-title">
              Wait for active metadata work to finish.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>Another metadata task is running:</strong> a cleanup request is
            reported as busy. Wait until that operation completes, then start cleanup
            again.
          </li>
          <li>
            <strong>Use WP-CLI:</strong> run <code>wp fifu clean</code> from your
            WordPress installation. It starts cleanup without additional arguments. See
            the <Link to="/features/wp-cli/">WP-CLI guide</Link> for the command
            interface.
          </li>
          <li>
            <strong>Remove URLs too:</strong> use{' '}
            <Link to="/features/delete-all-urls/">Delete All URLs</Link> for the broader
            removal of saved FIFU addresses. That operation runs metadata cleanup first.
          </li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="delete-all-urls-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <CircleAlert size={15} aria-hidden="true" />
            SITE-WIDE CLEANUP
          </span>
          <h2 id="delete-all-urls-intro">
            Clear remote media references across your site.
          </h2>
          <p>
            FIFU stores remote image addresses and related media data in content metadata
            and its URL tables. This irreversible action removes that FIFU data so you can
            retire remote images and continue with local media without old FIFU
            references.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/delete-all-urls-guide-1.png"
            alt="Enable the deletion prerequisite, run Delete All URLs, and remove FIFU image and media references"
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="delete-all-urls-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="delete-all-urls-purpose-title">
              Use this when you are removing FIFU media.
            </h2>
          </div>
        </div>
        <p>
          This cleanup is for a site-wide switch away from remote FIFU images, or another
          deliberate removal of all FIFU media references. It can prevent old remote URLs
          and media metadata from continuing to affect content after that change. If you
          only want to remove generated image metadata while keeping your FIFU URLs, use{' '}
          <Link to="/features/clear-metadata/">Clear Metadata</Link> instead.
        </p>
        <p>
          The run first performs Clear Metadata. Only after that operation reports
          completion does it delete FIFU-prefixed post and term metadata and clear the
          FIFU URL and mapping tables. This broad removal affects{' '}
          <Link to="/features/remote-featured-image/">remote featured images</Link>,{' '}
          <Link to="/features/fifu-product-gallery/">FIFU galleries</Link>,{' '}
          <Link to="/features/featured-video-audio/">featured video and audio</Link>, and{' '}
          <Link to="/features/featured-slider/">featured sliders</Link>; it does not
          target only featured image URLs.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="delete-all-urls-prereq-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REQUIRED ACCESS</span>
            <h2 id="delete-all-urls-prereq-title">Enable the deletion safeguard.</h2>
          </div>
        </div>
        <p>
          Before the control can delete data, set <code>FIFU_DELETE_ALL_URLS</code> to{' '}
          <code>true</code> in the FIFU plugin file. The constant defaults to{' '}
          <code>false</code>, so the deletion handler exits unless you explicitly enable
          it.
        </p>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="delete-all-urls-use-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RUN THE CLEANUP</span>
            <h2 id="delete-all-urls-use-title">Start the site-wide deletion.</h2>
          </div>
        </div>
        <p>
          The action is in <strong>FIFU → Settings → Metadata → Delete All URLs</strong>,
          below the metadata and cleanup controls.
        </p>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="delete-all-urls-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">LIMITS AND RECOVERY</span>
            <h2 id="delete-all-urls-help-title">Understand what can stop the run.</h2>
          </div>
        </div>
        <p>
          Deletion also requires the action’s run flag and timestamp. If the preliminary
          metadata cleanup is already busy, fails, or does not report completion, URL
          deletion does not proceed. Wait for that operation to finish, confirm{' '}
          <code>FIFU_DELETE_ALL_URLS</code> is <code>true</code>, and start the action
          again.
        </p>
        <p>
          The database deletion runs in a transaction and rolls back when a delete query
          fails. After a successful request, the run flag is turned off. Because the
          removed FIFU references cannot be restored by this control, make sure you intend
          to remove the remote media data before starting.
        </p>
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

      <section className="feature-highlight" aria-labelledby="optimized-images-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="optimized-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="optimized-purpose-title">
              Reduce oversized downloads on image-heavy pages.
            </h2>
          </div>
        </div>
        <p>
          Without resizing, a remote featured image may be delivered at a larger size than
          a card, archive, or phone layout needs. The attachment optimizer intercepts
          WordPress image-size requests and asks a CDN for the requested dimensions and
          crop. That can reduce transfer size because visitors receive a copy closer to
          the displayed dimensions. The original remote URL remains the source.
        </p>
        <p>
          Turn it on when your site uses remote FIFU images and needs smaller displayed
          copies. The separate content option is useful when post bodies contain large
          inline images below the fold. If your pages already serve appropriately sized
          files, these options are optional.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="optimized-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP · OPTIMIZE</span>
            <h2 id="optimized-enable-title">Enable the delivery paths you need.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="optimized-providers-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PROVIDER · SIZES</span>
            <h2 id="optimized-providers-title">
              Choose a CDN and optional square output.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>
              <strong>FIFU CDN</strong> tab
            </dt>
            <dd>
              Enable <strong>optimize images with FIFU CDN</strong> to use the FIFU
              on-the-fly CDN instead of the public CDN. This option is unavailable in the
              free version and on PRO staging sites. PRO use is initially limited to the
              production site unless the license key has expired. The provider can serve
              images through your site domain after you create the <code>img</code> CNAME
              record pointing to <code>i0.fifu.app</code>.
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="optimized-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE · TROUBLESHOOTING</span>
            <h2 id="optimized-limits-title">Check what the optimizer can process.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Featured-image resizing</dt>
            <dd>
              Requires the featured-image switch, a main domain, a remote FIFU attachment,
              a usable HTTP(S) source URL, and a requested size with known dimensions.
              Resizing is skipped for empty or local sources, blocked hosts while the
              public CDN is selected, SVG files while the public CDN is selected, existing
              speedup URLs, and requests without dimensions. A full-size request also
              needs stored dimensions or the FIFU CDN path to resolve dimensions.
            </dd>
          </div>
          <div>
            <dt>Post-content optimization</dt>
            <dd>
              Works on content when a post context is available. It skips image tags
              without a <code>src</code>, data images, empty URLs, and hosts blocked by
              the selected provider rules. Rewriting replaces each eligible source with a
              transparent placeholder while the lazy loader handles its CDN URL, and the
              optimizer removes <code>&lt;source&gt;</code> elements from that content.
              Review responsive or picture-based markup if a content image changes
              unexpectedly.
            </dd>
          </div>
          <div>
            <dt>If an image does not change</dt>
            <dd>
              For a featured image, confirm the toggle, configured main domain, remote
              FIFU attachment, source-host eligibility, and the requested WordPress size.
              For a post-body image, confirm the separate secondary-image toggle, a normal
              image <code>src</code>, and that the page has a post context. With the
              public CDN selected, FIFU skips blocked hosts: <code>localhost</code>,{' '}
              <code>amazon-adsystem.com</code>, <code>sapo.io</code>,{' '}
              <code>image.influenster.com</code>, <code>api.screenshotmachine.com</code>,{' '}
              <code>img.brownsfashion.com</code>, <code>fbcdn.net</code>,{' '}
              <code>nitrocdn.com</code>, <code>brightspotcdn.com</code>,{' '}
              <code>realtysouth.com</code>, <code>tiktokcdn.com</code>,{' '}
              <code>fdcdn.akamaized.net</code>, <code>blockchainstock.azureedge.net</code>
              , <code>aa.com.tr</code>, <code>cdn.discordapp.com</code>,{' '}
              <code>download.schneider-electric.com</code>, <code>cdn.fbsbx.com</code>,{' '}
              <code>canva.com</code>, <code>cdn.fifu.app</code>,{' '}
              <code>cloud.fifu.app</code>, and <code>images.placeholders.dev</code>.
              Existing public-CDN URLs are also skipped. The FIFU CDN does not apply this
              blocklist.
            </dd>
          </div>
        </dl>
      </section>

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

      <section className="feature-highlight" aria-labelledby="square-images-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="square-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE SQUARE OUTPUT</span>
            <h2 id="square-purpose-title">
              Match square placements without changing the source image.
            </h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="square-settings-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONFIGURE · IMAGE SIZES</span>
            <h2 id="square-settings-title">Set desktop and mobile separately.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="square-options-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AVAILABLE CHOICES</span>
            <h2 id="square-options-title">Choose how each square is made.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="square-scope-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SCOPE AND TROUBLESHOOTING</span>
            <h2 id="square-scope-title">Check the delivery path and device selection.</h2>
          </div>
        </div>
        <p>
          Square options apply to images served by FIFU CDN or FIFU Cloud. The delivery
          code selects the desktop or mobile value using the request device and sets
          square dimensions with crop or fit behavior. Images served through other paths
          are not covered by these settings.
        </p>
        <p>
          If an image remains rectangular, confirm that its delivery uses FIFU CDN or FIFU
          Cloud and that the matching device selection is not empty. If the entire image
          remains visible with added space, the device is set to extend; if edges
          disappear, it is set to crop.
        </p>
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

      <section className="feature-highlight" aria-labelledby="rss-feature-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="rss-feature-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Rss size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY INCLUDE IMAGES</span>
            <h2 id="rss-feature-purpose-title">
              Make feed items useful beyond your site.
            </h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="rss-feature-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AUTOMATIC WORKFLOW</span>
            <h2 id="rss-feature-workflow-title">Add an image to a feed item.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="rss-feature-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IMAGE SELECTION AND LIMITS</span>
            <h2 id="rss-feature-coverage-title">Know which image URL is included.</h2>
          </div>
        </div>
        <p>
          The resolved FIFU main image is used first; if that does not resolve, the
          WordPress featured attachment URL is used. If neither produces a URL, the item
          has no <code>media:content</code> image entry.
        </p>
        <p>
          If the selected URL comes from{' '}
          <Link to="/features/optimized-images/">Optimized Images</Link>, the feed uses a
          signed 1280 × 853 URL instead. This avoids sending an optimized URL format that
          some RSS and email consumers reject. The generated dimensions are fixed; there
          is no RSS width control.
        </p>
        <p>
          If the image is missing in a feed consumer, first confirm the post has a
          featured image URL that resolves, then check the corresponding RSS 2 item for
          its <code>media:content</code> entry. The entry allows compatible consumers to
          display the image; it cannot make a consumer that ignores Media RSS show it.
        </p>
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
      <section className="feature-highlight" aria-labelledby="community-media-intro">
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="community-context-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <UsersRound size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="community-context-title">
              Give forum and activity posts a place for remote images.
            </h2>
          </div>
        </div>
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="community-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE</span>
            <h2 id="community-setup-title">Turn on the shared community option.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          Keep bbPress active to use the forum field and display hooks. Keep BuddyBoss
          Platform active for activity conversion. Its Activity component must be active
          for the front-end paste helper and styles to load.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="bbpress-flow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BBPRESS</span>
            <h2 id="bbpress-flow-title">Add an image URL to a topic or reply.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In a topic or reply form, enter a remote image URL in the{' '}
              <strong>Image</strong> field, then save the topic or reply. When editing
              one, the field is filled with its saved FIFU URL when one exists.
            </p>
          </li>
        </ol>
        <dl className="feature-guide-options">
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
              Images beside titles render at 100 × 100 pixels with cover cropping. Images
              after content use the available width, preserve their contents, and are
              limited to <code>90vh</code> high.
            </dd>
          </div>
        </dl>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="buddyboss-flow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MessageSquare size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BUDDYBOSS ACTIVITY</span>
            <h2 id="buddyboss-flow-title">Paste direct image links into activity.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <dl className="feature-guide-options">
          <div>
            <dt>Paste helper suffixes</dt>
            <dd>
              The paste helper recognizes URLs ending in <code>.png</code>,{' '}
              <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>, <code>.webp</code>
              , <code>.bmp</code>, <code>.svg</code>, <code>.avif</code>,{' '}
              <code>.heic</code>, or <code>.ico</code>. Each paste handles up to 12 image
              URLs. The helper skips images that fail to load within 7 seconds.
            </dd>
          </div>
          <div>
            <dt>Typed links and saved content</dt>
            <dd>
              Typed or previously saved links are converted automatically when their path
              ends in <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>,{' '}
              <code>.gif</code>, <code>.webp</code>, or <code>.avif</code>. A query string
              after the image extension is allowed. Converted images load lazily. The
              paste helper accepts additional suffixes listed above, but automatic
              conversion does not.
            </dd>
          </div>
        </dl>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="community-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="community-troubleshooting-title">
              Check the matching platform and image path.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              Confirm BuddyBoss Platform and its Activity component are active. Paste a
              direct URL with a helper-supported suffix and make sure the image loads
              within 7 seconds. A page URL or inaccessible image will fail the load check.
            </dd>
          </div>
          <div>
            <dt>A typed image URL stays as text</dt>
            <dd>
              Automatic conversion of typed or saved activity links accepts only{' '}
              <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>,{' '}
              <code>.webp</code>, and <code>.avif</code> paths. For other helper-supported
              suffixes, paste through the activity editor helper.
            </dd>
          </div>
        </dl>
      </section>

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

      <section className="feature-highlight" aria-labelledby="playback-loop-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="playback-loop-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WORDPRESS DASHBOARD</span>
            <h2 id="playback-loop-enable-title">Turn on the site-wide switch.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="playback-loop-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE</span>
            <h2 id="playback-loop-coverage-title">Where the switch applies.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              Video embeds receive looping playback behavior. HTML video players receive
              the loop setting; YouTube embeds also receive the current video as their
              playlist so it can repeat.
            </dd>
          </div>
        </dl>
        <p>
          If you also need to adjust provider-specific embed behavior, read the{' '}
          <Link to="/features/youtube-options/">YouTube options</Link> or{' '}
          <Link to="/features/vimeo-options/">Vimeo options</Link> guide. The loop switch
          itself remains global.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="playback-loop-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="playback-loop-cli-title">Set the toggle from the command line.</h2>
          </div>
        </div>
        <p>Use either command to set the same global option from WP-CLI:</p>
        <dl className="feature-guide-options">
          <div>
            <dt>Enable</dt>
            <dd>
              <code>wp fifu video --loop=on</code>
            </dd>
          </div>
          <div>
            <dt>Disable</dt>
            <dd>
              <code>wp fifu video --loop=off</code>
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="playback-loop-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="playback-loop-help-title">If a video stops at the end.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="mute-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="mute-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <VolumeX size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE MUTE</span>
            <h2 id="mute-purpose-title">Control unexpected sound.</h2>
          </div>
        </div>
        <p>
          A featured video can play with sound unless its player starts muted. Turning on
          Mute adds a muted state to supported video playback; for YouTube and Vimeo, FIFU
          adds the provider’s mute parameter, and for local or direct video files it sets
          the video element’s muted attribute. This helps avoid surprising visitors and
          supports silent playback when you use{' '}
          <Link to="/features/autoplay/">Autoplay</Link> or{' '}
          <Link to="/features/autoplay-on-mouseover/">Autoplay on Mouseover</Link>. Use it
          when you want silent starts, especially for automatically started video. Leave
          it off for a device type when you want its videos to start with sound.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="mute-setup-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS · VIDEO / AUDIO</span>
            <h2 id="mute-setup-title">Set each device control.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Open a page that displays a featured video on each device type you changed.
              FIFU selects the matching switch using WordPress’s mobile-device check.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="mute-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COVERAGE AND LIMITS</span>
            <h2 id="mute-coverage-title">Where the setting applies.</h2>
          </div>
        </div>
        <p>
          Mute is a video setting. The player uses the selected device value for supported
          video players, including YouTube, Vimeo, local videos, and direct video files.
          The local media-element branch also applies the selected state to recognized
          audio-file sources. A WordPress.com MP4 player branch is created with sound
          muted regardless of these switches, so changing Mute does not change that
          branch’s initial audio state. FIFU’s control determines the starting state; it
          does not prevent a visitor from changing audio with the player’s controls.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="mute-cli-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="mute-cli-title">Change a switch from the command line.</h2>
          </div>
        </div>
        <p>
          Run <code>wp fifu video --mute-desktop=on</code> or{' '}
          <code>wp fifu video --mute-desktop=off</code> to set desktop playback. Use{' '}
          <code>wp fifu video --mute-mobile=on</code> or{' '}
          <code>wp fifu video --mute-mobile=off</code> for mobile. Run the command from
          your WordPress installation with WP-CLI available; each command changes only the
          named device option.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="mute-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="mute-help-title">If playback starts with sound.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Check the switch for the device you are testing. Desktop and mobile use
              separate values selected through WordPress’s mobile-device check.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Confirm the player is a supported video. Recognized audio-file sources
              handled by the local media element also receive the selected mute state;
              behavior for other audio providers is not established here. WordPress.com
              MP4 playback starts muted independently of these switches.
            </p>
          </li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="youtube-options-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="youtube-options-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS · YOUTUBE ONLY</span>
            <h2 id="youtube-options-setup-title">Enable the setting.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Load a page with a supported FIFU YouTube video. Its rendered embed uses{' '}
              <code>youtube-nocookie.com/embed/…</code> while the setting is on.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="youtube-options-coverage-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">EFFECT AND SCOPE</span>
            <h2 id="youtube-options-coverage-title">What changes when it is on.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
              This changes the rendered embed host only. It does not rewrite the YouTube
              URL saved for your media, and it does not change other video providers.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="youtube-options-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · COMMAND LINE</span>
            <h2 id="youtube-options-cli-title">Set it with WP-CLI.</h2>
          </div>
        </div>
        <p>
          If you use <Link to="/features/wp-cli/">WP-CLI</Link>, run{' '}
          <code>wp fifu video --privacy=on</code> to enable the option or{' '}
          <code>wp fifu video --privacy=off</code> to disable it. The accepted values are
          <code>on</code> and <code>off</code>.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="youtube-options-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="youtube-options-help-title">If the embed still uses youtube.com.</h2>
          </div>
        </div>
        <p>
          Check that{' '}
          <strong>FIFU → Video → YouTube options → Privacy Enhanced Mode</strong>
          is on. The host changes only for generated embed URLs that match YouTube’s
          supported embed pattern; the saved source URL remains as entered. For a focused
          explanation of this setting, read the{' '}
          <Link to="/features/privacy-enhanced-mode/">Privacy Enhanced Mode guide</Link>.
        </p>
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
      <section className="feature-highlight" aria-labelledby="privacy-enhanced-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="privacy-enhanced-settings-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SETTINGS · YOUTUBE ONLY</span>
            <h2 id="privacy-enhanced-settings-title">Enable the setting.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Load a page with a supported FIFU YouTube video. Its rendered embed uses{' '}
              <code>youtube-nocookie.com/embed/…</code> while the setting is on.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="privacy-enhanced-scope-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SCOPE AND OPTIONS</span>
            <h2 id="privacy-enhanced-scope-title">What changes</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Privacy Enhanced Mode</dt>
            <dd>
              On changes supported YouTube embed hosts from <code>youtube.com</code> to{' '}
              <code>youtube-nocookie.com</code>. Off keeps the regular host. The saved
              YouTube source URL is not rewritten.
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
          <div>
            <dt>Optional command line</dt>
            <dd>
              If you manage WordPress with WP-CLI, set the same toggle with{' '}
              <code>wp fifu video --privacy=on</code> or{' '}
              <code>wp fifu video --privacy=off</code>. The only accepted values are{' '}
              <code>on</code> and <code>off</code>.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="privacy-enhanced-check-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK THE RESULT</span>
            <h2 id="privacy-enhanced-check-title">If the regular host still appears</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <Check size={14} aria-hidden="true" />
            </span>
            <p>
              Confirm the toggle is on, then reload the page that renders the FIFU video.
              The stored source URL can still show <code>youtube.com</code>; the setting
              changes the generated embed URL.
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
        </ul>
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

function WpAllImportAddonGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="WP All Import add-on"
      className="feature-guide-page"
    >
      <p className="lead">
        Map media values from your import file into FIFU fields so each imported record
        receives its image, video, gallery, or redirect data.
      </p>

      <section className="feature-highlight" aria-labelledby="wai-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Puzzle size={15} aria-hidden="true" /> IMPORT MEDIA DATA
          </span>
          <h2 id="wai-intro">Map once, apply media as records import.</h2>
          <p>
            Connect source columns to FIFU fields in WP All Import. Each imported record
            then gets the matching FIFU values without requiring you to edit media record
            by record.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/wp-all-import-add-on-guide-1.png"
            alt="A source image URL mapped to a FIFU field, imported, and displayed on the resulting content."
          />
        </div>
      </section>

      <section className="activation-feature-section" aria-labelledby="wai-purpose-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="wai-purpose-title">Keep imported media in FIFU’s data path.</h2>
          </div>
        </div>
        <p>
          An import can create many posts or products at once; entering FIFU media
          afterward turns that batch into repeated manual work and can leave records
          without matching media. Field mapping stores the source values with each
          imported record, so later updates can refresh the same fields from the source
          file. When you use remote image URLs, FIFU can display them through its media
          fields without first importing a separate copy into the Media Library.
        </p>
        <p>
          Use this add-on when your import file already contains media URLs or related
          values. It is optional if you do not import with WP All Import or do not need
          FIFU media fields populated from the import.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="wai-setup-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP YOUR IMPORT</span>
            <h2 id="wai-setup-title">Map FIFU fields in the import template.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Activate FIFU and either WP All Import or WP All Import Pro. In the import
              template’s record mapping, open the <strong>FIFU</strong> add-on section and
              map each source column or fixed value to the matching FIFU field.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              For a list, set <strong>List delimiter</strong> to the separator used in
              that source value. The default is <code>|</code>; FIFU normalizes mapped
              lists to its pipe-separated format.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the template and run the import. The mapped values are applied as each
              record is imported; use the normal WP All Import update settings when
              rerunning an import to control which existing records are updated.
            </p>
          </li>
        </ol>
        <p>
          Keep image titles in the same order as their image URLs. If a title field is
          empty, FIFU uses the post title for a featured image or the product title for
          product images as alternative text.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="wai-fields-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AVAILABLE MAPPING FIELDS</span>
            <h2 id="wai-fields-title">Choose fields for the record type.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Featured image (URL)</dt>
            <dd>
              Sets the FIFU featured image for regular content and category records.
            </dd>
          </div>
          <div>
            <dt>Featured image title</dt>
            <dd>
              Sets alternative text for the featured image. If empty, the post title is
              used.
            </dd>
          </div>
          <div>
            <dt>Featured video (URL)</dt>
            <dd>
              Sets featured video data for regular content. Product records use the
              product video list field instead.
            </dd>
          </div>
          <div>
            <dt>Product image URL + gallery URLs</dt>
            <dd>
              Maps the product image and gallery URL list. Separate multiple values with
              the selected list delimiter.
            </dd>
          </div>
          <div>
            <dt>Product image title + gallery titles</dt>
            <dd>
              This displayed label appears for both list types: map product image/gallery
              alternative text in matching order, and map slider alternative text in
              matching order.
            </dd>
          </div>
          <div>
            <dt>Product video URL + gallery URLs</dt>
            <dd>
              Maps a product video list. Use the same list delimiter as the source data.
            </dd>
          </div>
          <div>
            <dt>Featured slider (URLs)</dt>
            <dd>
              Maps slider image URLs. Pair the list with title values in the same order
              when you need slider alternative text; see the{' '}
              <Link to="/features/featured-slider/">Featured Slider guide</Link> for the
              display feature.
            </dd>
          </div>
          <div>
            <dt>List delimiter</dt>
            <dd>
              Sets the separator for list values. Its default is <code>|</code>; the
              imported lists are normalized to FIFU’s internal pipe-separated format.
            </dd>
          </div>
          <div>
            <dt>ASIN</dt>
            <dd>
              Imports the record’s Amazon Standard Identification Number value. For
              scheduled image lookup from an ASIN, see{' '}
              <Link to="/features/auto-set-product-images-from-asin/">
                Auto set product images from ASIN
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt>Media finder (webpage URL)</dt>
            <dd>
              Maps the source webpage address FIFU uses to find featured media when{' '}
              <Link to="/features/auto-set-featured-media-using-web-page-address/">
                Auto set featured media using web page address
              </Link>{' '}
              is enabled.
            </dd>
          </div>
          <div>
            <dt>Page redirection (forwarding URL)</dt>
            <dd>
              Maps the destination URL used to forward visitors when{' '}
              <Link to="/features/page-redirection/">Page redirection</Link> is enabled.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="wai-products-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PRODUCT IMPORTS</span>
            <h2 id="wai-products-title">Use product-specific media fields.</h2>
          </div>
        </div>
        <p>
          Product imports use the product image, video, and slider list fields instead of{' '}
          <strong>Featured image (URL)</strong> and <strong>Featured video (URL)</strong>.
          Activate WooCommerce for product and variation follow-up handling. If you also
          use the separate{' '}
          <Link to="/features/woocommerce-import/">WooCommerce import feature</Link>, its
          importer maps product metadata directly; this add-on is for imports run through
          WP All Import.
        </p>
        <p>
          For variable products, a variation row can provide <code>sku</code> and{' '}
          <code>fifu_list_url</code> values so its image list can be matched to the
          variation. When a same-row variation has no image of its own, the integration
          can use the parent product image as a fallback.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="wai-check-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IF MEDIA IS MISSING</span>
            <h2 id="wai-check-title">Check the mapped field and import type.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>!</span>
            <p>
              If the <strong>FIFU</strong> section is missing from record mapping, confirm
              that WP All Import or WP All Import Pro is active and that the import is
              running through WP All Import.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              If a product has no image list, map{' '}
              <strong>Product image URL + gallery URLs</strong> rather than{' '}
              <strong>Featured image (URL)</strong>. For any list that imports
              incorrectly, confirm that <strong>List delimiter</strong> matches the
              separator in your source value.
            </p>
          </li>
        </ul>
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

function WooCommerceImportGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="WooCommerce import"
      className="feature-guide-page"
    >
      <p className="lead">
        Add FIFU media metadata to your WooCommerce product CSV and import images, video,
        sliders, and iframe content with each product.
      </p>
      <section className="feature-highlight" aria-labelledby="wc-import-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingCart size={15} aria-hidden="true" /> WOOCOMMERCE PRODUCT IMPORT
          </span>
          <h2 id="wc-import-intro">Import product media in the same catalog pass.</h2>
          <p>
            Product CSVs often contain catalog details but leave image and gallery work
            for later. Map FIFU media columns once, and each inserted product carries its
            remote media into FIFU without a separate editor pass.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/woocommerce-import-guide-1.png"
            alt="A product CSV maps FIFU image URL and alt-text columns, imports the product, and fills its media gallery."
          />
        </div>
      </section>
      <section className="activation-feature-section" aria-labelledby="wc-import-purpose">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <FileImage size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="wc-import-purpose">Keep media work with your product data.</h2>
          </div>
        </div>
        <p>
          Use this when you create or update a catalog through WooCommerce’s product CSV
          importer and your source already has remote media URLs. FIFU reads the mapped
          product metadata after WooCommerce inserts each product, then synchronizes those
          lists into its media records. That lets you maintain product details and media
          in one repeatable import, reduces manual edits, and avoids uploading those
          remote images into the WordPress Media Library just to attach them. If you do
          not import products with WooCommerce CSVs, this workflow is optional.
        </p>
      </section>
      <section className="activation-feature-section" aria-labelledby="wc-import-steps">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PREPARE AND IMPORT</span>
            <h2 id="wc-import-steps">Map each CSV column to product metadata.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Prepare a WooCommerce product CSV with one column for each FIFU value you
              need. Put multiple items in a list column in display order, separated by a
              vertical bar (<code>|</code>).
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → WooCommerce → Import → Custom fields</strong> to
              match your columns to the keys below. The{' '}
              <strong>Importing products...</strong> tab includes a{' '}
              <strong>CSV example</strong> you can use as a starting layout. In the
              WooCommerce product importer, map each CSV column to the same product
              metadata key.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Run the product import. When WooCommerce inserts each product, FIFU saves
              the supported media lists and queues local metadata synchronization.
              Products are handled in groups of up to 50 during the import request.
            </p>
          </li>
        </ol>
      </section>
      <section className="activation-feature-section" aria-labelledby="wc-import-fields">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Tags size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SUPPORTED MEDIA FIELDS</span>
            <h2 id="wc-import-fields">Use the key that matches each value.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>
              <code>fifu_list_url</code>
            </dt>
            <dd>
              Product featured image and gallery image URLs. Separate URLs with{' '}
              <code>|</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_alt</code>
            </dt>
            <dd>
              Alternative text for those images, in the same order as{' '}
              <code>fifu_list_url</code>. Keep empty positions when an image has no alt
              text.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_video_url</code>
            </dt>
            <dd>
              Product featured video and video gallery URLs, separated with <code>|</code>
              .
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_slider_list_url</code>
            </dt>
            <dd>
              URLs for the product’s featured slider, separated with <code>|</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_slider_list_alt</code>
            </dt>
            <dd>Slider image alternative text, in the same order as the slider URLs.</dd>
          </div>
          <div>
            <dt>
              <code>fifu_list_iframe_url</code>
            </dt>
            <dd>
              Iframe content URLs for product media slots, separated with <code>|</code>.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_asin</code>
            </dt>
            <dd>
              The product’s Amazon identifier. Use it with{' '}
              <Link to="/features/auto-set-product-images-from-asin/">
                Auto set product images from ASIN
              </Link>{' '}
              when you use Amazon image lookup.
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_finder_url</code>
            </dt>
            <dd>
              The source webpage address FIFU checks for featured media when you use{' '}
              <Link to="/features/auto-set-featured-media-using-web-page-address/">
                Auto set featured media using web page address
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt>
              <code>fifu_redirection_url</code>
            </dt>
            <dd>
              The destination address for{' '}
              <Link to="/features/page-redirection/">Page redirection</Link>, which
              forwards visitors when they click the featured image.
            </dd>
          </div>
        </dl>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="wc-import-notes"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK THE IMPORT</span>
            <h2 id="wc-import-notes">If media is missing, check the mapping.</h2>
          </div>
        </div>
        <p>
          The integration runs when WooCommerce inserts a product. Check that the CSV
          column is mapped to the exact key, list values use <code>|</code>, and each
          alt-text item lines up with its image URL. An explicitly empty image or slider
          URL list clears that list for the imported product.
        </p>
        <p>
          When imported slider URLs synchronize successfully, FIFU treats the slider as
          the active list for that product and clears competing image and video list
          metadata. If you import both image and video lists, FIFU follows the priority it
          detects in the product metadata.
        </p>
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

function QuickBuyGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Quick Buy"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Let shoppers open FIFU product media in a lightbox on WooCommerce shop and
        category archives, then continue to checkout.
      </p>

      <section className="feature-highlight" aria-labelledby="quick-buy-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ShoppingCart size={15} aria-hidden="true" /> SHORTEN THE PRODUCT PATH
          </span>
          <h2 id="quick-buy-intro">Move from the archive to purchase sooner.</h2>
          <p>
            Quick Buy puts a product preview and purchase controls over the archive, so
            shoppers can review a product and start checkout without first opening its
            full product page. Use it when your shop or product-category grid needs a
            shorter route to purchase; leave it off if you want every shopper to use the
            standard product page.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/quick-buy-guide-1.png"
            alt="A shopper opens a product lightbox from a WooCommerce archive and proceeds to checkout."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="quick-buy-workflow-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE · PREVIEW · BUY</span>
            <h2 id="quick-buy-workflow-title">Enable the archive shortcut.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              Switch on <strong>Quick buy</strong>; the toggle saves when you change it.
              The three text fields below it save automatically when you change a value.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              On a shop or product-category archive, select the lightbox/expand icon on a
              product’s FIFU featured media. The lightbox shows product details and media,
              price and availability, plus purchase controls.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Choose any required variation and quantity, then select the purchase button.
              A simple product or selected variation opens checkout with that item and
              quantity; an external product opens its configured product URL.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="quick-buy-controls-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShoppingCart size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL LIGHTBOX CONTENT</span>
            <h2 id="quick-buy-controls-title">
              Customize the button and product details.
            </h2>
          </div>
        </div>
        <p>
          These three fields are optional. Enter your values under{' '}
          <strong>FIFU → Settings → WooCommerce → Quick Buy</strong>; each field saves
          automatically when changed.
        </p>
        <dl className="fifu-fields-options">
          <div>
            <dt>Text button</dt>
            <dd>
              Sets the button label. If blank, the product’s own button text is used when
              present; otherwise the label is “Buy now.”
            </dd>
          </div>
          <div>
            <dt>Disclaimer</dt>
            <dd>
              Adds a short disclaimer beneath the purchase button in the lightbox. Leave
              blank to omit it.
            </dd>
          </div>
          <div>
            <dt>Custom field</dt>
            <dd>
              Enter a product metadata key to show that product’s saved value in the
              lightbox. Leave blank when you do not need extra metadata.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="quick-buy-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              COVERAGE · AVAILABILITY · TROUBLESHOOTING
            </span>
            <h2 id="quick-buy-limits-title">Know when the shortcut appears.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>Where it runs:</strong> WooCommerce shop and product-category
              archives when Quick Buy is on. Its scripts and styles are not loaded on
              product pages or the cart.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>Simple products:</strong> show price, stock status, and quantity
              when a regular price exists. The quantity is passed to checkout.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>Variable products:</strong> shoppers choose from available attribute
              values; the purchase button becomes available after a valid variation is
              selected. Unavailable/out-of-stock variations cannot be purchased.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>External products:</strong> the button follows the product’s
              configured URL rather than adding the item to checkout.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>Other product types:</strong> the Quick Buy purchase form is built
              for simple, variable, and external products. Other WooCommerce product types
              do not get one of these purchase forms.
            </p>
          </li>
          <li>
            <span>
              <CircleAlert size={16} aria-hidden="true" />
            </span>
            <p>
              <strong>No icon or lightbox:</strong> confirm WooCommerce is active, Quick
              buy is enabled, you are on a shop/category archive, and the product has FIFU
              featured media.
            </p>
          </li>
        </ul>
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

function FifuApiGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="FIFU API" className="feature-guide-page">
      <p className="lead">
        Use PHP helpers to set remote images, videos, lists, and sliders on posts or set
        image and video media on terms.
      </p>

      <section className="feature-highlight" aria-labelledby="fifu-api-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="fifu-api-use-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="fifu-api-use-title">Connect media to code-created content.</h2>
          </div>
        </div>
        <p>
          Use the API when a custom integration, import, or publishing routine already has
          a WordPress post or term ID and needs to assign FIFU media programmatically. The
          helpers centralize FIFU storage and attachment synchronization, so your code
          does not need to reproduce those media updates itself. If you assign media
          manually in the editor, these PHP functions are optional.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="fifu-api-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP YOUR CALL</span>
            <h2 id="fifu-api-setup-title">Add the helper where your integration runs.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="fifu-api-post-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">POST MEDIA</span>
            <h2 id="fifu-api-post-title">
              Choose the helper for the media you are saving.
            </h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
        <p>
          Single image URLs must be valid HTTP or HTTPS addresses. List entries are
          trimmed and empty entries are skipped.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="fifu-api-term-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TERM MEDIA</span>
            <h2 id="fifu-api-term-title">Set an image or video on a term.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="fifu-api-results-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK THE RESULT</span>
            <h2 id="fifu-api-results-title">Handle a failed call before continuing.</h2>
          </div>
        </div>
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

      <section className="feature-highlight" aria-labelledby="rest-api-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="rest-api-start-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">START WITH YOUR API CLIENT</span>
            <h2 id="rest-api-start-title">Choose the content endpoint, then add media fields.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="rest-api-fields-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShoppingCart size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SUPPORTED WORDPRESS FIELDS</span>
            <h2 id="rest-api-fields-title">Choose the value for each media type.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div><dt>Featured image</dt><dd><code>fifu_image_url</code> sets the remote image URL; <code>fifu_image_alt</code> sets its alternative text.</dd></div>
          <div><dt>Featured video</dt><dd><code>fifu_video_url</code> sets the video URL. For slider images, use <code>fifu_slider_list_url</code> and optional parallel <code>fifu_slider_list_alt</code> values, separated by vertical bars.</dd></div>
          <div><dt>Other post values</dt><dd><code>fifu_asin</code>, <code>fifu_finder_url</code>, and <code>fifu_redirection_url</code> accept top-level values or entries inside <code>meta</code>.</dd></div>
          <div><dt>Slider image entries</dt><dd>You can also send indexed <code>fifu_slider_image_url_0</code>, <code>fifu_slider_image_alt_0</code> fields (continue the index for more images). Returned slider image URLs use the same indexed field pattern.</dd></div>
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="rest-api-woocommerce-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WOOCOMMERCE REST</span>
            <h2 id="rest-api-woocommerce-title">Use WooCommerce’s metadata format.</h2>
          </div>
        </div>
        <p>
          For products and variations, include FIFU entries in WooCommerce’s <code>meta_data</code> array. The REST integration handles the following five fields for both object types.
        </p>
        <dl className="feature-guide-options">
          <div><dt>Product image gallery</dt><dd><code>fifu_list_url</code> holds image URLs and <code>fifu_list_alt</code> holds matching alternative text.</dd></div>
          <div><dt>Product video gallery</dt><dd><code>fifu_list_video_url</code> holds the video URL list.</dd></div>
          <div><dt>Product slider</dt><dd><code>fifu_slider_list_url</code> holds slider image URLs and <code>fifu_slider_list_alt</code> holds matching alternative text.</dd></div>
        </dl>
        <pre><code>{`"meta_data": [
  { "key": "fifu_list_url", "value": "https://example.com/one.jpg|https://example.com/two.jpg" },
  { "key": "fifu_list_alt", "value": "Front view|Side view" }
]`}</code></pre>
        <p>Put each alt value in the same position as its image URL. The same vertical-bar format applies to slider URL and alt lists. For product categories, use <code>meta_data</code> entries for <code>fifu_image_url</code>, optional <code>fifu_image_alt</code>, or <code>fifu_video_url</code>.</p>
        <p>For products and variations, the supported FIFU fields are limited to those five gallery and slider keys; other FIFU keys in <code>meta_data</code> are ignored by this integration.</p>
      </section>

      <section className="activation-feature-section activation-feature-help" aria-labelledby="rest-api-troubleshoot-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help"><CircleAlert size={18} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">CHECK A MISSING VALUE</span>
            <h2 id="rest-api-troubleshoot-title">Match the request format to its endpoint.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li><strong>WordPress post value is missing:</strong> confirm the content type exposes the REST API and supports featured images; send the field at top level or inside <code>meta</code>.</li>
          <li><strong>WooCommerce gallery or slider did not change:</strong> confirm the key is one of the five supported product/variation fields and is an item in <code>meta_data</code>. Separate list entries with <code>|</code>.</li>
          <li><strong>Wrong featured media appears:</strong> for WordPress posts, image, video, and slider fields compete for the featured-media slot. Send the intended type; a nonempty slider list takes priority over image/video values.</li>
        </ul>
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

function WpCliGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="WP-CLI" className="feature-guide-page">
      <p className="lead">
        Use your server terminal to change FIFU options, launch supported jobs, and create
        WordPress content with remote media.
      </p>
      <section className="feature-highlight" aria-labelledby="wp-cli-intro">
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
      </section>
      <section className="activation-feature-section" aria-labelledby="wp-cli-use-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REQUIREMENTS AND FIRST RUN</span>
            <h2 id="wp-cli-use-title">Run commands from the WordPress installation.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="wp-cli-commands-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COMMAND FAMILIES</span>
            <h2 id="wp-cli-commands-title">Choose the setting or operation you need.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="wp-cli-create-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CREATE A POST</span>
            <h2 id="wp-cli-create-title">Store remote media in post metadata.</h2>
          </div>
        </div>
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
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="wp-cli-limits-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">LIMITS AND TROUBLESHOOTING</span>
            <h2 id="wp-cli-limits-title">Check the runtime and accepted value.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>!</span>
            <p>
              <strong>Command unavailable:</strong> run WP-CLI in the intended WordPress
              installation, with FIFU active. The plugin registers <code>fifu</code> only
              when the <code>WP_CLI</code> runtime constant is enabled.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              <strong>No setting change:</strong> toggles recognize literal{' '}
              <code>on</code> or <code>off</code>. Search layout accepts only{' '}
              <code>all</code>, <code>square</code>, <code>tall</code>, or{' '}
              <code>wide</code>; invalid values are ignored. Search dimensions accept
              non-negative whole numbers. A command with several option arguments applies
              only the first matching option, so run each option separately.
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
        </ul>
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

      <section className="feature-highlight" aria-labelledby="quick-editor-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="quick-editor-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE QUICK EDITOR</span>
            <h2 id="quick-editor-purpose-title">Edit the media attached to a row.</h2>
          </div>
        </div>
        <p>
          Without Quick Editor, changing a remote featured image or other FIFU media means
          opening an item’s editor. The list editor brings the media fields and preview to
          the row, then refreshes its thumbnail after a successful save. This can make
          batch catalog or content maintenance quicker and helps you verify a replacement
          before saving. Use it when the item is reachable in a supported WordPress list;
          use the full editor when you need controls that are not exposed here.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="quick-editor-open-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPEN THE EDITOR</span>
            <h2 id="quick-editor-open-title">Find a FIFU thumbnail in a content list.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="quick-editor-media-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">EDIT · PREVIEW · SAVE</span>
            <h2 id="quick-editor-media-title">Choose media and save the change.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="quick-editor-access-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              ACCESS · AVAILABILITY · TROUBLESHOOTING
            </span>
            <h2 id="quick-editor-access-title">Check access and optional media types.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
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
        </ul>
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

function WidgetsGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Widgets" className="feature-guide-page">
      <p className="lead">
        Add current FIFU media to a theme widget area, or place a remote image or video in
        an Elementor layout.
      </p>

      <section className="feature-highlight" aria-labelledby="widgets-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="widgets-wordpress-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Puzzle size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              WORDPRESS · APPEARANCE → WIDGETS
            </span>
            <h2 id="widgets-wordpress-title">Choose a widget for the current content.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <dl className="fifu-fields-options">
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
              Displays images from the content item’s{' '}
              <Link to="/features/featured-slider/">Featured Slider</Link>. Set{' '}
              <strong>Rows</strong> and <strong>Columns</strong> to positive whole
              numbers. Each defaults to <code>1</code>; blank, invalid, or less than one
              values are reset to <code>1</code>. The grid shows up to Rows × Columns
              images and stays empty when no slider images are saved.
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="widgets-elementor-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ELEMENTOR · BASIC</span>
            <h2 id="widgets-elementor-title">Set the media in an Elementor section.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          To place a video thumbnail, add <strong>(FIFU) Featured Video</strong> and enter
          its <strong>Video URL</strong>. This widget is available only when{' '}
          <Link to="/features/featured-video-audio/">Featured Video / Audio</Link> is
          enabled. It displays a thumbnail derived from that URL.
        </p>
        <p>
          If an image URL cannot load, the widget switches to the configured error image
          URL when it is valid, or to FIFU’s built in fallback image. An invalid URL is
          not saved as the featured image. Clearing the image URL and saving clears that
          FIFU featured image. If you place multiple FIFU media widgets in one Elementor
          design, the last effective media widget in the saved layout determines the
          content item’s FIFU featured media.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="widgets-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              REQUIREMENTS AND TROUBLESHOOTING
            </span>
            <h2 id="widgets-help-title">If a widget area is empty.</h2>
          </div>
        </div>
        <p>
          WordPress widgets need a theme widget area. If none appears under{' '}
          <strong>Appearance → Widgets</strong>, your theme does not expose a widget area
          for this screen. Featured media needs a current content item with FIFU media;
          Featured grid needs saved slider images; Product gallery needs a product with
          gallery content. Elementor widgets require Elementor to be active, and its
          Featured Video widget also requires Featured Video / Audio to be enabled.
        </p>
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

      <section className="feature-highlight" aria-labelledby="hotlink-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hotlink-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CONFIGURE · FIFU CLOUD</span>
            <h2 id="hotlink-enable-title">Turn on hotlink protection.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="hotlink-scope-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShieldCheck size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SCOPE</span>
            <h2 id="hotlink-scope-title">Know which images are covered.</h2>
          </div>
        </div>
        <p>
          This setting affects images served from FIFU Cloud only. FIFU Cloud is a
          separate paid hosting service; images whose URLs still point to their original
          host are outside this protection. If you need hosted copies first, follow the{' '}
          <Link to="/features/upload-to-cloud/">Upload to Cloud guide</Link>.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="hotlink-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              WHEN THE SWITCH DOES NOT APPLY
            </span>
            <h2 id="hotlink-help-title">Check your Cloud connection.</h2>
          </div>
        </div>
        <p>
          If the control is missing, complete FIFU Cloud sign-up and sign in; the setting
          is shown only after sign-in.
        </p>
        <p>
          If the change does not complete, confirm the Cloud account connection and try
          again later. An incomplete sign-up cannot authorize the request, and a failed or
          unreadable Cloud response is treated as a retry-later condition.
        </p>
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

      <section className="feature-highlight" aria-labelledby="default-image-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="default-image-purpose"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE IT</span>
            <h2 id="default-image-purpose">Give image-less content a consistent look.</h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="default-image-requirement"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Database size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BEFORE YOU START</span>
            <h2 id="default-image-requirement">Keep Image Metadata enabled.</h2>
          </div>
        </div>
        <p>
          Check <strong>FIFU → Settings → Metadata → Image Metadata</strong>.
          This setting is on by default and allows FIFU to maintain the
          WordPress-compatible attachment records used by Default Featured Image.
          The attachment represents the remote image URL; it does not mean FIFU
          downloads another image file into your Media Library.
        </p>
        <p>
          If you have disabled Image Metadata, turn it back on before configuring
          the default image. See the{' '}
          <Link to="/features/image-metadata/">Image Metadata guide</Link> for details.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="default-image-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP THE DEFAULT</span>
            <h2 id="default-image-setup-title">Choose the image and eligible post types.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="default-image-behavior"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT HAPPENS NEXT</span>
            <h2 id="default-image-behavior">The default applies only where it is needed.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="default-image-sharing"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Globe size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">HOMEPAGE SHARING</span>
            <h2 id="default-image-sharing">A possible image for social previews, too.</h2>
          </div>
        </div>
        <p>
          FIFU can also use the configured default-image URL for the homepage's
          Open Graph image when the page does not already provide one. This helps
          supply a sharing image, but an Open Graph image provided elsewhere takes
          precedence. Choose a default image that also represents your site well.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="default-image-checks"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="default-image-checks">If the default image does not appear</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
      </section>

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
      <section className="feature-highlight" aria-labelledby="activation-intro">
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
      </section>
      <section className="activation-feature-section" aria-labelledby="activation-why">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShieldCheck size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PURPOSE AND COVERAGE</span>
            <h2 id="activation-why">Use one key across covered sites.</h2>
          </div>
        </div>
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
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="activation-steps-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <KeyRound size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SUBMIT AND VALIDATE</span>
            <h2 id="activation-steps-title">Activate the license key.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="activation-options-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">LICENSE PAGE</span>
            <h2 id="activation-options-title">Know what each control does.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>
      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="activation-troubleshooting-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">STATUS AND RECOVERY</span>
            <h2 id="activation-troubleshooting-title">
              Resolve common activation results.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>
      <section className="feature-detail-cta activation-feature-cta">
        <div>
          <h2>Find another FIFU feature.</h2>
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

      <section className="feature-highlight" aria-labelledby="reset-settings-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="reset-settings-effects"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ShieldCheck size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHAT CHANGES</span>
            <h2 id="reset-settings-effects">Know what stays before you reset.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
        <p>
          Write down any custom option values you still need before resetting. Use this
          when you want to troubleshoot a configuration; it is unnecessary if you only
          need to change one setting.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="reset-settings-run"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WORDPRESS DASHBOARD</span>
            <h2 id="reset-settings-run">Reset from Settings.</h2>
          </div>
        </div>
        <p>
          You need permission to manage FIFU settings: <code>manage_options</code> in the
          site dashboard or <code>manage_network_options</code> in network administration.
        </p>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="reset-settings-cli"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL COMMAND LINE</span>
            <h2 id="reset-settings-cli">Run the same reset with WP-CLI.</h2>
          </div>
        </div>
        <p>
          If you administer WordPress with WP-CLI, run this from your site’s WordPress
          installation. It immediately resets FIFU’s configurable settings using the same
          reset routine as the dashboard switch.
        </p>
        <pre>
          <code>wp fifu reset</code>
        </pre>
        <p>
          This command has no extra reset mode or confirmation option. Use it only when
          you intend to clear those settings. For command access and other FIFU commands,
          see the <Link to="/features/wp-cli/">WP-CLI guide</Link>.
        </p>
      </section>

      <section className="feature-detail-cta activation-feature-cta">
        <div>
          <h2>Find another FIFU feature.</h2>
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

function DebugModeGuide() {
  return (
    <Page eyebrow="FIFU FEATURE GUIDE" title="Debug Mode" className="feature-guide-page">
      <p className="lead">
        Enable this temporary switch to refresh FIFU scripts and styles and collect item
        or site diagnostics while you investigate a problem.
      </p>

      <section className="feature-highlight" aria-labelledby="debug-feature-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Bug size={15} aria-hidden="true" />
            DEBUG MODE
          </span>
          <h2 id="debug-feature-intro">Get a clearer view during troubleshooting.</h2>
          <p>
            Debug Mode changes the version on FIFU JavaScript and CSS files so your
            browser is less likely to reuse a stale copy. It also reveals item and site
            diagnostic tools. That can help you separate a front-end asset issue from a
            problem in an item’s saved media data. Turn it on for an investigation, then
            switch it off to restore normal browser caching of FIFU files.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/debug-mode-guide-1.png"
            alt="Enable Debug Mode, copy item diagnostics, and download available logs from Status"
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="debug-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">START A SESSION</span>
            <h2 id="debug-enable-title">Enable it while you reproduce the issue.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          If you manage the site with WP-CLI, use <code>wp fifu debug on</code> to enable
          the switch and <code>wp fifu debug off</code> to disable it. WP-CLI must be
          available for your WordPress installation. Read the{' '}
          <Link to="/features/wp-cli/">WP-CLI guide</Link> for the separate command-line
          workflow.
        </p>
      </section>

      <section className="activation-feature-section" aria-labelledby="debug-tools-title">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ClipboardCopy size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">COLLECT DETAILS</span>
            <h2 id="debug-tools-title">Choose the diagnostic that fits the issue.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Copy debug data</dt>
            <dd>
              <p>
                In the FIFU box on a post editor, or from a content list’s{' '}
                <Link to="/features/quick-editor/">Quick Editor</Link>, select this button
                to copy a JSON report for the current item. It includes the item record,
                WordPress metadata, FIFU storage mappings, thumbnail reference, and
                resolved featured media. For a parent product, the report also includes
                its product variations when present. Category edit and quick-edit screens
                can copy a term report with its FIFU media details. The report also
                captures quick-editor runtime state, including the selected media type and
                slider controls.
              </p>
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
              <p>
                On <strong>Status</strong>, administrators see this action while Debug
                Mode is enabled and non-empty logs are available. The ZIP can include the
                last 1 MiB of each <code>fifu-plugin.log</code> and{' '}
                <code>fifu-cloud.log</code>
                from the WordPress uploads directory’s <code>fifu/logs/</code> folder. The
                download redacts common password, token, cookie, license-key, and bearer
                authorization patterns before packaging the logs.
              </p>
            </dd>
          </div>
        </dl>
        <p>
          Enabling Debug Mode also reveals the separate{' '}
          <Link to="/features/db-migration/">DB Migration</Link> submenu for
          administrators. Use it when you need to migrate FIFU media data; migration is a
          separate task from collecting a debug report.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="debug-sharing-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">REVIEW BEFORE SHARING</span>
            <h2 id="debug-sharing-title">Check the copied data and download.</h2>
          </div>
        </div>
        <p>
          Item reports can include post or term content, media URLs, and metadata. Some
          credential-like metadata values are redacted or cropped, but this is not a
          guarantee that every private value is removed. Site snapshots contain settings
          and site details, and log redaction only covers recognized patterns. Review each
          export yourself before sending it to support.
        </p>
        <dl className="feature-guide-options">
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

      <section className="feature-highlight" aria-labelledby="remote-image-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-purpose"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Image size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHY USE A REMOTE IMAGE</span>
            <h2 id="remote-image-purpose">Use images already hosted elsewhere.</h2>
          </div>
        </div>
        <p>
          WordPress’s standard featured-image picker uses a Media Library attachment. A
          remote featured image stores an image address with the content instead, so the
          file stays on its existing host and FIFU supplies it where the featured image is
          requested. This avoids uploading and maintaining another copy in WordPress and
          can reduce local media storage; it also suits image libraries or CDNs that
          already manage your files. Use it when you control a stable, publicly reachable
          image URL. Choose a local image when WordPress must host the file or you need a
          local copy. If the remote host removes or blocks the image, your site can no
          longer load it.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-editor"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ImagePlus size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET IT IN THE EDITOR</span>
            <h2 id="remote-image-editor">Save an image address with your content.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-native-panel"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WORDPRESS EDITOR COMPATIBILITY</span>
            <h2 id="remote-image-native-panel">Understand the regular Featured image field.</h2>
          </div>
        </div>
        <p>
          FIFU uses the remote URL for the post's featured image, while maintaining
          compatibility with WordPress featured-image APIs. It may create attachment
          metadata for compatibility, but this does not mean the remote image file has
          been downloaded into the Media Library.
        </p>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-block"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Puzzle size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">BLOCK EDITOR OPTION</span>
            <h2 id="remote-image-block">Set it with the Featured Image (URL) block.</h2>
          </div>
        </div>
        <p>
          Add the{' '}
          <Link to="/features/featured-image-url-block/">Featured Image (URL) block</Link>{' '}
          when you want to enter the image in the content canvas. In the block’s{' '}
          <strong>Settings</strong>, enter <strong>Image URL</strong> and, when you have
          one, <strong>Alternative text</strong>. The block syncs both values with the
          same FIFU featured-image data; save or update the content to keep the change.
          Removing the block restores its last image values to the FIFU editor panel.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-share-links"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Globe size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">HOSTED LINKS</span>
            <h2 id="remote-image-share-links">Use a public image link that visitors can load.</h2>
          </div>
        </div>
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
      </section>

      <section className="activation-feature-section" aria-labelledby="remote-image-bulk">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ListFilter size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">
              CONTENT LISTS AND INTEGRATIONS
            </span>
            <h2 id="remote-image-bulk">Update image data outside the editor.</h2>
          </div>
        </div>
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-image-fields"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">FIELDS AND ACTIONS</span>
            <h2 id="remote-image-fields">Know what each control changes.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
        </dl>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="remote-image-checks"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">AVAILABILITY AND CHECKS</span>
            <h2 id="remote-image-checks">Keep the remote address reachable.</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
        </ul>
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

function FeaturedVideoAudioGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Featured Video / Audio"
      className="feature-guide-page activation-feature-page"
    >
      <p className="lead">
        Add a supported video or audio address to a content item, preview playback in the
        editor, and save it as that item’s featured media.
      </p>

      <section className="feature-highlight" aria-labelledby="video-audio-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Video size={15} aria-hidden="true" /> MEDIA URL WORKFLOW
          </span>
          <h2 id="video-audio-intro">Make a media link playable content.</h2>
          <p>
            FIFU associates a provider or file URL with the post, page, or product, then
            renders it through the matching video or audio player.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/featured-video-audio-guide-1.png"
            alt="Enter a featured video URL, preview its playback, and see the saved video on a page."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-audio-purpose"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Video size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="video-audio-purpose">
              Use a media URL instead of an image-only featured item.
            </h2>
          </div>
        </div>
        <p>
          A featured image stores an image address; a featured video or audio URL lets
          supported content render playable media instead. Use it when a post, page, or
          product should lead with a clip or track hosted by a supported service or video
          file. This keeps the media source attached to the content and lets FIFU create a
          player from that source. It is optional when a static image is enough or another
          workflow already handles your media.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-audio-enable"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">PREREQUISITE</span>
            <h2 id="video-audio-enable">Enable the media fields once.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open{' '}
              <strong>FIFU → Settings → Video → Featured video / audio</strong> and enable
              it. This switch enables the video and audio choices in the FIFU editor.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              The supported provider URLs include YouTube, Vimeo, Twitter, 9GAG,
              Cloudinary, Tumblr, Publitio, JW Player, VideoPress, Sprout, Odysee, Rumble,
              Dailymotion, Cloudflare Stream, Bunny Stream, Amazon, BitChute, Brighteon,
              Google Drive, Spotify, and SoundCloud. You can also use local or remote
              video files.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-audio-workflow"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ADD · PREVIEW · SAVE</span>
            <h2 id="video-audio-workflow">Set a video or audio URL.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Edit the post, page, or product and open the <strong>FIFU</strong> media
              panel. Choose <strong>Featured video</strong> or{' '}
              <strong>Featured audio</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Paste the playable address into <strong>Video URL</strong> or{' '}
              <strong>Audio URL</strong>, then select <strong>Preview</strong>. For video,
              FIFU previews recognized services in an embedded player and local or remote
              video files in a video player. Audio preview uses an audio player.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              For a local video, play or seek to the frame you want and choose{' '}
              <strong>Set frame as thumbnail</strong>. Save or update the content; the
              captured thumbnail is added to your Media Library. Remote videos require a
              featured image thumbnail as well.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              To replace media, enter another URL and save. To clear it, use{' '}
              <strong>Remove remote video</strong> or <strong>Remove audio</strong>, then
              save the content.
            </p>
          </li>
        </ol>
        <p>
          For an existing item, the <Link to="/features/quick-editor/">Quick Editor</Link>{' '}
          also exposes featured video and audio URL fields from the content list.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="video-audio-options"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">VIDEO FILE DETAILS</span>
            <h2 id="video-audio-options">Use optional file timing.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
          <div>
            <dt>Video timing</dt>
            <dd>
              Add <code>#t=N</code> to a local or remote video URL to start at N seconds.
              Use <code>#t=N,M</code> to set a start and end time.
            </dd>
          </div>
          <div>
            <dt>Thumbnail requirement</dt>
            <dd>
              A remote featured video needs a featured image to represent it as a
              thumbnail. For a video in your Media Library, save a frame with{' '}
              <strong>Set frame as thumbnail</strong>; this creates the thumbnail image in
              your Media Library.
            </dd>
          </div>
        </dl>
        <p>
          When you want visitors to see a still image first and load the video after
          selecting it, see the{' '}
          <Link to="/features/video-thumbnail/">Video Thumbnail guide</Link>.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="video-audio-checks"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">TROUBLESHOOTING</span>
            <h2 id="video-audio-checks">If preview or display fails</h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
          <li>
            <strong>No editor field:</strong> enable{' '}
            <strong>Featured video / audio</strong> in the Video settings.
          </li>
          <li>
            <strong>Video does not preview:</strong> check that the address belongs to one
            of the supported services or points directly to a playable local/remote video
            file.
          </li>
          <li>
            <strong>Remote video has no thumbnail:</strong> set a featured image for the
            content; remote video thumbnails are not generated from the remote video URL
            in this workflow.
          </li>
          <li>
            <strong>Local video has no thumbnail:</strong> select a frame in the editor
            and save it with <strong>Set frame as thumbnail</strong>.
          </li>
        </ul>
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

      <section className="feature-highlight" aria-labelledby="featured-slider-intro">
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
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-slider-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN TO USE IT</span>
            <h2 id="featured-slider-purpose-title">
              Show several views without replacing featured media.
            </h2>
          </div>
        </div>
        <p>
          Use the slider when a listing needs multiple angles, a product needs a visual
          sequence, or a post needs both still images and video in its featured-media
          area. The first slide remains the representative featured image used by
          WordPress integrations; the rest stay available as navigable slides. This can
          help you show more context without placing a separate gallery in the body. If
          one image already does the job, you can leave the slider disabled.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-slider-enable-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ENABLE AND SET DEFAULTS</span>
            <h2 id="featured-slider-enable-title">
              Choose how sliders behave across your site.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-slider-steps-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <span>1</span>
          </span>
          <div>
            <span className="activation-feature-kicker">ADD YOUR MEDIA</span>
            <h2 id="featured-slider-steps-title">Build and save the sequence.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
        </ol>
        <p>
          On a WooCommerce product, an <strong>Upload</strong> control appears only when
          FIFU’s upload option is enabled and the slider already contains media.
          Otherwise, add remote media URLs in the tiles.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-slider-options-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">DISPLAY OPTIONS</span>
            <h2 id="featured-slider-options-title">
              Adjust navigation, timing, and layout.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
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
              Sets the transition time; the input increments by 500 ms and is capped at
              2,000 ms.
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
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="featured-slider-shortcode-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · MANUAL PLACEMENT</span>
            <h2 id="featured-slider-shortcode-title">
              Place the slider where you need it.
            </h2>
          </div>
        </div>
        <p>
          If your theme does not show featured media in the location you want, add{' '}
          <code>[fifu_slider]</code> where the current post is available. To target a
          specific post outside that context, use <code>[fifu_slider post_id="123"]</code>{' '}
          and replace <code>123</code> with its post ID. Without a current post or a valid
          ID, the shortcode returns no output. It also loads the slider assets for that
          placement. Add optional numeric <code>width</code> and <code>height</code>{' '}
          attributes to set the rendered dimensions. The{' '}
          <Link to="/features/fifu-shortcode/">FIFU Shortcode guide</Link> covers the
          other FIFU shortcode outputs.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="featured-slider-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">DISPLAY CHECKS</span>
            <h2 id="featured-slider-help-title">
              If the slider is missing or looks different.
            </h2>
          </div>
        </div>
        <ul className="activation-feature-help-list">
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
          <li>
            <strong>A narrow layout shows one image:</strong> when the slider or its image
            is under 175 pixels wide, the display falls back to the first image rather
            than the slider interface.
          </li>
          <li>
            <strong>Only one slide is shown for a video:</strong> a video-containing
            slider may display the video directly instead of initializing the slider
            controls.
          </li>
        </ul>
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

function RemoteProductGalleryImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Remote Product Gallery Images"
      className="feature-guide-page"
    >
      <p className="lead">
        Add image URLs to a WooCommerce product gallery, arrange the product views, and
        save them without uploading copies to your Media Library.
      </p>

      <section
        className="feature-highlight"
        aria-labelledby="remote-product-gallery-intro"
      >
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <ImagePlus size={15} aria-hidden="true" /> PRODUCT MEDIA BY URL
          </span>
          <h2 id="remote-product-gallery-intro">
            Keep product views linked to their source.
          </h2>
          <p>
            Store remote image links on the product instead of creating local media
            copies. This can reduce duplicate uploads and Media Library upkeep when your
            product images already live on a supplier or image host.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/remote-product-gallery-images-guide-1.png"
            alt="Add a remote image URL and alternative text in the WooCommerce product gallery, then view the saved image in the product gallery."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-product-gallery-purpose-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN THIS HELPS</span>
            <h2 id="remote-product-gallery-purpose-title">
              Use it for externally hosted product photos.
            </h2>
          </div>
        </div>
        <p>
          Use this for alternate product views you already host elsewhere and want to keep
          out of WordPress uploads. Your product stores the URLs and FIFU uses those links
          for gallery media; the remote host must continue serving each image. If you want
          WordPress to own local copies, use the{' '}
          <Link to="/features/save-in-the-media-library/">Save in the Media Library</Link>{' '}
          workflow instead.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-product-gallery-steps-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">ADD AND SAVE</span>
            <h2 id="remote-product-gallery-steps-title">
              Build the gallery on a product.
            </h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
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
              In FIFU’s <strong>Image/video gallery</strong>, select an empty image tile.
              The product’s main image is set separately.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Enter a direct image link in <strong>Image/Video URL</strong>. Review the
              preview, add <strong>Alternative text</strong>, then select{' '}
              <strong>OK</strong>.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              Select the plus tile for each additional image. Drag tiles into the order
              you want, then select <strong>Update</strong> to save the product.
            </p>
          </li>
        </ol>
        <p>
          For a quick change, open{' '}
          <Link to="/features/quick-editor/">FIFU Quick Edit</Link> from the product image
          column on the Products list. Its gallery editor also lets you add, edit, remove,
          and reorder product images; select <strong>Save</strong> when you finish.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-product-gallery-controls-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">GALLERY FIELDS</span>
            <h2 id="remote-product-gallery-controls-title">
              What each image tile controls.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Image/Video URL</dt>
            <dd>
              Enter the remote image address. The tile previews the linked image when it
              loads.
            </dd>
          </div>
          <div>
            <dt>Alternative text</dt>
            <dd>Add a short description for the image’s text alternative.</dd>
          </div>
          <div>
            <dt>Iframe URL</dt>
            <dd>
              Leave this empty for an ordinary image. When you use the FIFU product
              gallery lightbox, this optional field can show iframe content instead of the
              image, such as a 360° view, PDF, map, or web page. Enter both the image URL
              and iframe URL for that custom content.
            </dd>
          </div>
          <div>
            <dt>Remove a remote image</dt>
            <dd>
              Open its tile, clear the URL, select <strong>OK</strong>, and save the
              product.
            </dd>
          </div>
          <div>
            <dt>Order</dt>
            <dd>Drag tiles into the display order before saving.</dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-product-gallery-display-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">STOREFRONT DISPLAY</span>
            <h2 id="remote-product-gallery-display-title">
              Choose the gallery renderer when needed.
            </h2>
          </div>
        </div>
        <p>
          Saved remote URLs become gallery media for the product. WooCommerce can use its
          normal product gallery, or you can enable <strong>FIFU product gallery</strong>{' '}
          under <strong>FIFU → Settings → WooCommerce</strong> to use FIFU’s product-page
          gallery. This is useful with themes whose gallery needs image dimensions stored
          locally: FIFU’s gallery works without those saved remote-image dimensions. See
          the <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
          for its display controls.
        </p>
      </section>

      <section
        className="activation-feature-section activation-feature-help"
        aria-labelledby="remote-product-gallery-help-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">WHEN A PREVIEW FAILS</span>
            <h2 id="remote-product-gallery-help-title">Check the image URL.</h2>
          </div>
        </div>
        <p>
          If the preview fails or shows a not-found image, verify that the address points
          directly to an image and loads successfully. The editor fields are hidden while
          FIFU’s editor lock is enabled; turn off that lock to edit the gallery.
        </p>
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

function RemoteVariationImagesGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="Remote Variation Images"
      className="feature-guide-page"
    >
      <p className="lead">
        Give each WooCommerce variation its own remote image and gallery, then save the
        variation and product.
      </p>

      <section className="feature-highlight" aria-labelledby="remote-variation-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" /> WOOCOMMERCE VARIATIONS
          </span>
          <h2 id="remote-variation-intro">Show the images that match each choice.</h2>
          <p>
            Each variation can have its own main view, but one image may not show every
            detail. Add remote gallery URLs so shoppers can inspect each option from
            several views after selecting it. This keeps images specific to each variation
            without adding copies to WordPress; use it when your options look different.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/remote-variation-images-guide-1.png"
            alt="Enter and save image URLs for a WooCommerce variation, then show that image set when a shopper selects the variation."
          />
        </div>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-setup-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP EACH VARIATION</span>
            <h2 id="remote-variation-setup-title">Add its main image and gallery.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              To switch the full remote image set when shoppers choose a variation, enable{' '}
              <strong>FIFU product gallery</strong> under{' '}
              <strong>FIFU → FIFU Settings → FIFU Product Gallery</strong>. This replaces
              WooCommerce’s single product image area with FIFU’s gallery. If you only
              need each variation’s main image, this gallery switch is optional.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit a WooCommerce variable product. Create its attributes and variations
              first if they do not exist yet.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open <strong>Product data → Variations</strong> and expand a variation. In
              its <strong>Images</strong> area, select the first tile to enter an absolute{' '}
              <code>http://</code> or <code>https://</code> image URL. The first tile is
              the variation’s main image.
            </p>
          </li>
          <li>
            <span>4</span>
            <p>
              In the image editor, add <strong>Alternative text</strong> if useful, then
              confirm. Use the <strong>+</strong> tile to add more image URLs. Drag tiles
              to set their order; the first stays the main image and the rest become the
              gallery. Repeat for other variations.
            </p>
          </li>
          <li>
            <span>5</span>
            <p>
              Select <strong>Save changes</strong> in the Variations panel, then select{' '}
              <strong>Update</strong> on the product. Both saves are needed to persist
              your edits.
            </p>
          </li>
        </ol>
        <p>
          To remove an image, clear its URL in that tile and confirm. If you clear every
          tile, the variation has no FIFU image set and uses the parent product media
          instead.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-display-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <MousePointerClick size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">DISPLAY OPTIONS</span>
            <h2 id="remote-variation-display-title">
              Choose how variation images appear.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>Selected variation</dt>
            <dd>
              With <strong>FIFU product gallery</strong> enabled, choosing variation
              attributes switches the gallery to that variation’s saved image set. If the
              matching variation has no image set, the gallery falls back to the parent
              product’s images.
            </dd>
          </div>
          <div>
            <dt>Variantions images in the main gallery</dt>
            <dd>
              This optional switch is in{' '}
              <strong>FIFU → FIFU Settings → FIFU Product Gallery</strong>. When enabled,
              the unselected product gallery also includes the first image from each
              variation. Once a shopper selects attributes, the gallery switches to the
              matching variation. Leave it off if you want the initial gallery to show
              only parent product media. See the{' '}
              <Link to="/features/fifu-product-gallery/">FIFU Product Gallery guide</Link>{' '}
              for its gallery setup and display controls.
            </dd>
          </div>
          <div>
            <dt>Upload to media library</dt>
            <dd>
              If the <strong>Upload to media library</strong> checkbox appears below the
              variation images, selecting it copies the remote main image and gallery
              images into your Media Library when you save. The copied files become
              variation attachments and the remote URL state is cleared for that
              variation. To show this checkbox, enable{' '}
              <strong>show save button on post editor</strong> under{' '}
              <strong>FIFU → FIFU Settings → Media → Main</strong>. Leave it unchecked to
              keep using remote URLs. The{' '}
              <Link to="/features/save-in-the-media-library/">
                Save in the Media Library guide
              </Link>{' '}
              explains this local-copy workflow.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-check-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">CHECK THE RESULT</span>
            <h2 id="remote-variation-check-title">
              If an image is missing, check the URL and saves.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>No preview in the editor</dt>
            <dd>
              Use a complete <code>http://</code> or <code>https://</code> image URL that
              loads publicly. An invalid or unreachable URL cannot show a tile preview.
            </dd>
          </div>
          <div>
            <dt>Gallery does not switch</dt>
            <dd>
              Enable <strong>FIFU product gallery</strong> under{' '}
              <strong>FIFU → FIFU Settings → FIFU Product Gallery</strong>. Save changes
              in the Variations panel and update the product, then choose the variation on
              the storefront. With no variation selected, the gallery may show parent
              images and, if the merge setting is on, each variation’s first image.
            </dd>
          </div>
          <div>
            <dt>Variation has no image set</dt>
            <dd>
              Add a URL to its first tile. An empty variation falls back to the parent
              product’s media.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-import-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Code2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">IMPORT OR API</span>
            <h2 id="remote-variation-import-title">
              Keep the same image order in automated workflows.
            </h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div>
            <dt>WP All Import Add-On</dt>
            <dd>
              For variable-product imports, map <code>fifu_list_url</code> on each
              variation record and identify that variation with its SKU. Separate image
              URLs with a vertical bar or line break. Add matching{' '}
              <code>fifu_list_alt</code> values in the same order when needed. The first
              URL becomes the variation image and later URLs its gallery. See the{' '}
              <Link to="/features/wp-all-import-add-on/">WP All Import Add-On guide</Link>{' '}
              for the import setup.
            </dd>
          </div>
          <div>
            <dt>WooCommerce REST API</dt>
            <dd>
              On a <code>product_variation</code> request, send <code>fifu_list_url</code>{' '}
              and optional <code>fifu_list_alt</code> in <code>meta_data</code>. Keep URL
              and alt lists in the same order; the first URL is the variation image. See
              the{' '}
              <Link to="/features/wp-woocommerce-rest-api/">
                WooCommerce REST API guide
              </Link>{' '}
              for API access and request setup.
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-cli-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="remote-variation-cli-title">
              Set the gallery merge switch from a terminal.
            </h2>
          </div>
        </div>
        <p>
          From your WordPress installation, run one command to control the same optional
          setting:
        </p>
        <pre>
          <code>wp fifu woo --variations-merge=on</code>
        </pre>
        <p>
          Use <code>off</code> instead of <code>on</code> to disable it. This controls
          whether variation images join the unselected main gallery; it does not add or
          change a variation’s saved URLs. See the{' '}
          <Link to="/features/wp-cli/">WP-CLI guide</Link> for command prerequisites.
        </p>
      </section>

      <section
        className="activation-feature-section"
        aria-labelledby="remote-variation-related-title"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Images size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">RELATED WORKFLOW</span>
            <h2 id="remote-variation-related-title">
              Keep parent and variation galleries separate.
            </h2>
          </div>
        </div>
        <p>
          Variation images belong to each variation. For images shared by the product
          regardless of selected options, use{' '}
          <Link to="/features/remote-product-gallery-images/">
            Remote Product Gallery Images
          </Link>
          .
        </p>
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

function FifuProductGalleryGuide() {
  return (
    <Page
      eyebrow="FIFU FEATURE GUIDE"
      title="FIFU Product Gallery"
      className="feature-guide-page"
    >
      <p className="lead">
        Replace WooCommerce’s product image area with one gallery for featured media,
        product gallery items, and optional variation media.
      </p>
      <section className="feature-highlight" aria-labelledby="fifu-gallery-intro">
        <div className="feature-highlight-copy">
          <span className="feature-highlight-kicker">
            <Images size={15} aria-hidden="true" /> PRODUCT MEDIA DISPLAY
          </span>
          <h2 id="fifu-gallery-intro">Use a gallery that works with remote media.</h2>
          <p>
            Some theme galleries depend on image dimensions saved in the database. FIFU’s
            gallery renders its remote image and video items without that dimension-saving
            step, so you can present product media together without first processing every
            remote image for dimensions. Use it when a product needs multiple views,
            video, or variation-specific media; keep WooCommerce’s gallery if its current
            display already meets your needs.
          </p>
        </div>
        <div className="feature-highlight-visual">
          <img
            src="/images/fifu-product-gallery-guide-1.png"
            alt="Product gallery media is arranged in the editor, combined with variation media, and displayed on a product page."
          />
        </div>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-gallery-enable"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Settings2 size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">SET UP</span>
            <h2 id="fifu-gallery-enable">Enable the gallery and add product media.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              In WordPress, open <strong>FIFU → Settings → WooCommerce</strong>. In the{' '}
              <strong>FIFU product gallery</strong> box, turn on the gallery switch.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Edit a product. Add image URLs in <strong>Image/video gallery</strong> and
              video URLs in <strong>Video gallery</strong>. Drag items to set their order,
              then save or update the product.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Open the product page to view its featured media and gallery items together.
              For remote image URLs, follow the{' '}
              <Link to="/features/remote-product-gallery-images/">
                remote product gallery image guide
              </Link>
              ; for variation-level media, follow the{' '}
              <Link to="/features/remote-variation-images/">
                remote variation images guide
              </Link>
              .
            </p>
          </li>
        </ol>
        <p>
          To place the gallery at a specific point in product content, add{' '}
          <code>[fifu_gallery]</code>. It uses the current post. For a different product,
          replace <code>123</code> with that product’s ID in{' '}
          <code>[fifu_gallery post_id="123"]</code>.
        </p>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-gallery-options"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <SlidersHorizontal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">GALLERY OPTIONS</span>
            <h2 id="fifu-gallery-options">Choose how media appears.</h2>
          </div>
        </div>
        <dl className="fifu-fields-options">
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
              Place gallery video items before gallery images when the featured media type
              does not already determine their order.
            </dd>
          </div>
          <div>
            <dt>Variantions images in the main gallery</dt>
            <dd>
              Include variable product variation media in the main gallery. Selecting a
              variation filters the displayed variation media to that selection.
            </dd>
          </div>
        </dl>
        <p>
          These switches are in{' '}
          <strong>FIFU → Settings → WooCommerce → FIFU product gallery</strong>. The
          adjacent <strong>Custom content</strong> tab opens the iframe workflow below.
        </p>
        <p>
          Gallery navigation uses the shared controls in{' '}
          <strong>
            FIFU → Settings → <Link to="/features/featured-slider/">Featured slider</Link>
          </strong>
          . These settings also affect other FIFU sliders.
        </p>
        <dl className="fifu-fields-options">
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
        </dl>
        <p>
          WooCommerce’s <Link to="/features/lightbox-and-zoom/">Lightbox and Zoom</Link>{' '}
          settings control opening product media in a lightbox and zooming images. For a
          widget area, add the <strong>(FIFU) Product gallery</strong> widget; it renders
          the current product’s gallery and uses these slider settings. See the practical{' '}
          <Link to="/features/widgets/">Widgets guide</Link> for placing a FIFU widget in
          a widget area.
        </p>
      </section>
      <section className="activation-feature-section" aria-labelledby="fifu-gallery-cli">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <Terminal size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL · WP-CLI</span>
            <h2 id="fifu-gallery-cli">Set the gallery switches from a terminal.</h2>
          </div>
        </div>
        <p>
          Run one command at a time from your WordPress installation. Replace{' '}
          <code>on</code> with <code>off</code> to disable that switch.
        </p>
        <dl className="fifu-fields-options">
          <div>
            <dt>Gallery mode</dt>
            <dd>
              <code>wp fifu woo --gallery=on</code>
            </dd>
          </div>
          <div>
            <dt>Adaptive height</dt>
            <dd>
              <code>wp fifu woo --adaptive=on</code>
            </dd>
          </div>
          <div>
            <dt>Videos before images</dt>
            <dd>
              <code>wp fifu woo --videos-before=on</code>
            </dd>
          </div>
          <div>
            <dt>Merge variation images</dt>
            <dd>
              <code>wp fifu woo --variations-merge=on</code>
            </dd>
          </div>
        </dl>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-gallery-custom"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon">
            <ExternalLink size={19} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">OPTIONAL CONTENT</span>
            <h2 id="fifu-gallery-custom">Open custom content from a gallery item.</h2>
          </div>
        </div>
        <p>
          Use an item as a lightbox link to a 360-degree view, PDF, map, web page, or
          other content that can render in an iframe. This replaces that item’s image or
          video in the lightbox; the gallery still needs an image thumbnail to select it.
        </p>
        <ol className="activation-feature-steps">
          <li>
            <span>1</span>
            <p>
              Edit the product and choose a slot in <strong>Image/video gallery</strong>.
            </p>
          </li>
          <li>
            <span>2</span>
            <p>
              Fill in both <strong>Image URL</strong> for its thumbnail and{' '}
              <strong>iframe URL</strong> for the content.
            </p>
          </li>
          <li>
            <span>3</span>
            <p>
              Save the product and open that gallery item in the lightbox. Turn on
              WooCommerce <strong>Lightbox</strong> or the slider’s{' '}
              <strong>Show gallery on click</strong> option to open it.
            </p>
          </li>
        </ol>
      </section>
      <section
        className="activation-feature-section"
        aria-labelledby="fifu-gallery-conditions"
      >
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help">
            <CircleAlert size={18} aria-hidden="true" />
          </span>
          <div>
            <span className="activation-feature-kicker">DISPLAY CONDITIONS</span>
            <h2 id="fifu-gallery-conditions">Check these conditions if it is missing.</h2>
          </div>
        </div>
        <ul className="activation-feature-steps">
          <li>
            <span>!</span>
            <p>
              Automatic replacement requires WooCommerce to be active, gallery mode
              enabled, and a single product page outside the Elementor editor.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              A product with no featured media or gallery items has nothing to show.
              Confirm the product’s featured media and saved gallery items.
            </p>
          </li>
          <li>
            <span>!</span>
            <p>
              A theme that replaces WooCommerce’s single-product image template may change
              how automatic replacement works. Use <code>[fifu_gallery]</code> in product
              content when you need to place the gallery manually.
            </p>
          </li>
        </ul>
      </section>
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
      <section className="feature-highlight" aria-labelledby="auto-share-intro">
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
      </section>

      <section className="activation-feature-section" aria-labelledby="auto-share-connect">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon"><Settings2 size={19} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">CONNECT YOUR ACCOUNTS</span>
            <h2 id="auto-share-connect">Turn on sharing for the networks you use.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li><span>1</span><p>In WordPress, open <strong>FIFU → Settings</strong> and find <strong>Auto-share on social media</strong>. Turn on the main <strong>Auto share</strong> switch to allow automatic sharing.</p></li>
          <li><span>2</span><p>Open the <strong>Social media</strong> tab, then choose <strong>Facebook</strong>, <strong>Instagram</strong>, or <strong>X</strong>. Turn on a network’s switch to connect its account; turn it off to disconnect that account. Only networks both enabled and connected are used automatically.</p></li>
          <li><span>3</span><p>For X, first enter your app’s <strong>OAuth 2.0 Client ID</strong> in the X panel and save it. Your X developer app must allow <strong>Read and write</strong>, use the <strong>Native App</strong> type, and include this callback URI: <code>https://auto-share.fifu.workers.dev/v2/oauth/x/callback</code>.</p></li>
          <li><span>4</span><p>Publish or update a standard WordPress post that has an image. WordPress schedules the sharing check for about five seconds after the save; WP-Cron must run for that check to execute.</p></li>
        </ol>
      </section>

      <section className="activation-feature-section" aria-labelledby="auto-share-requirements">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon"><Share2 size={19} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">ACCOUNT REQUIREMENTS</span>
            <h2 id="auto-share-requirements">Prepare each network before connecting.</h2>
          </div>
        </div>
        <dl className="feature-guide-options">
          <div><dt>Facebook</dt><dd>Connect a Facebook Page, not a personal profile. The Page must be published and visible to everyone. Your site must use HTTPS.</dd></div>
          <div><dt>Instagram</dt><dd>Connect a public Professional account (Business or Creator); personal or private accounts are not supported. The site must use HTTPS, and the post needs an HTTPS image hosted on your own site for Instagram sharing.</dd></div>
          <div><dt>X</dt><dd>Create an app at <a href="https://developer.x.com" target="_blank" rel="noreferrer">X Developer</a>, set Read and write permissions, choose Native App, register the callback URI above, and paste the app’s Client ID into the X panel.</dd></div>
        </dl>
      </section>

      <section className="activation-feature-section" aria-labelledby="auto-share-eligibility">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon"><Image size={19} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">WHAT GETS SHARED</span>
            <h2 id="auto-share-eligibility">Only published posts with shareable image media.</h2>
          </div>
        </div>
        <p>Automatic checks apply to the standard WordPress <strong>Posts</strong> type in <strong>Published</strong> status. A featured image or an image URL FIFU resolves for the post makes it eligible. Pages, other post types, drafts, autosaves, and revisions are skipped.</p>
        <dl className="feature-guide-options">
          <div><dt>Daily limit</dt><dd>Sharing is limited to 16 posts per day for each connected platform.</dd></div>
          <div><dt>Repeat saves</dt><dd>Once a post is recorded as shared on a network, later saves do not automatically send it to that same network again. Other connected networks are tracked independently.</dd></div>
          <div><dt>Media differences</dt><dd>Facebook and X can share the post link and text. Instagram requires a suitable HTTPS image hosted on your site; an image hosted only on another domain may not work there.</dd></div>
        </dl>
      </section>

      <section className="activation-feature-section activation-feature-help" aria-labelledby="auto-share-test">
        <div className="activation-feature-section-heading">
          <span className="activation-feature-icon help"><CircleAlert size={18} aria-hidden="true" /></span>
          <div>
            <span className="activation-feature-kicker">TEST OR TROUBLESHOOT</span>
            <h2 id="auto-share-test">Send a post manually and read the result.</h2>
          </div>
        </div>
        <ol className="activation-feature-steps">
          <li><span>1</span><p>Open the <strong>Test</strong> tab, enter the post’s numeric <strong>Post ID</strong>, and choose <strong>Share now</strong>. This action sends to every connected account even when the main <strong>Auto share</strong> switch is off; it does not require automatic sharing to be enabled.</p></li>
          <li><span>2</span><p>Watch the Facebook, Instagram, and X status icons and the result message. A network can succeed while another fails; the result reports each network separately. The test checks connections first and skips networks that are not connected.</p></li>
          <li><span>•</span><p>If no post is queued, confirm it is a published standard post with an image, then check the main switch, that network’s switch, and its connection. For Facebook, verify the public Page and HTTPS site; for Instagram, verify the public Professional account and a same-site HTTPS image; for X, verify the Client ID and app callback and permissions.</p></li>
          <li><span>•</span><p>A post already marked as shared to a network is not sent again by the test. The daily per-network limit is 16 posts. A failed result names the affected network and includes its returned error when available.</p></li>
        </ol>
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
