import {
  ArrowRightLeft,
  Braces,
  Bug,
  CalendarClock,
  Camera,
  Clapperboard,
  CloudOff,
  CloudUpload,
  Code,
  Code2,
  Database,
  Eraser,
  EyeOff,
  FileImage,
  FileSearch,
  FileText,
  Film,
  GalleryHorizontal,
  Gauge,
  Globe,
  Image,
  ImageOff,
  ImagePlus,
  Images,
  KeyRound,
  Link2,
  MailPlus,
  MessageSquare,
  MousePointer2,
  MousePointerClick,
  PanelsTopLeft,
  Play,
  Puzzle,
  RefreshCw,
  Repeat2,
  Rss,
  Ruler,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Tags,
  Terminal,
  Trash2,
  Video,
  VolumeX,
  Watch,
  Youtube,
  Zap,
  ZoomIn,
} from 'lucide-react';

export const featureCards = [
  {
    title: 'Reset Settings',
    description:
      'Restore FIFU settings to their default values when you need a fresh start.',
    Icon: RotateCcw,
  },
  {
    title: 'Activation',
    description: 'Activate FIFU to unlock the features included with your license.',
    Icon: KeyRound,
  },
  {
    title: 'Save in the Media Library',
    description: 'Save remote images to your WordPress Media Library.',
    Icon: Images,
  },
  {
    title: 'Remote Featured Image',
    description:
      'Set a post’s featured image from its URL without uploading it to your WordPress Media Library.',
    Icon: Image,
  },
  {
    title: 'Remote Product Gallery Images',
    description:
      'Add product gallery images to WooCommerce from their URLs without uploading them to your Media Library.',
    Icon: GalleryHorizontal,
  },
  {
    title: 'Remote Variation Images',
    description:
      'Set a remote image and gallery for each WooCommerce product variation.',
    Icon: Images,
  },
  {
    title: 'Auto set featured image using post title and search engine',
    description:
      'Find an image from a post title and automatically set it as the featured image.',
    Icon: Search,
  },
  {
    title: 'Auto set product images from ASIN',
    description: 'Use an Amazon ASIN to find and set a WooCommerce product image.',
    Icon: ShoppingBag,
  },
  {
    title: 'Auto set featured media from custom field',
    description: 'Set featured media automatically from a URL stored in a custom field.',
    Icon: Braces,
  },
  {
    title: 'Auto set screenshot as featured image',
    description: 'Create a screenshot of a web page and use it as the featured image.',
    Icon: Camera,
  },
  {
    title: 'Auto set featured media using web page address',
    description: 'Find featured media from a saved web page address.',
    Icon: Globe,
  },
  {
    title: 'Auto-share on social media',
    description: 'Automatically share new posts on connected social media accounts.',
    Icon: Share2,
  },
  {
    title: 'Disable right-click',
    description:
      'Prevent visitors from opening the browser context menu on protected media.',
    Icon: MousePointer2,
  },
  {
    title: 'Replace Not Found Image',
    description: 'Show a fallback image when a remote image cannot be found.',
    Icon: ImageOff,
  },
  {
    title: 'Broken Link Checker',
    description: 'Check featured image URLs and identify broken links.',
    Icon: Link2,
  },
  {
    title: 'Default Featured Image',
    description: 'Choose a default featured image for posts that do not have one.',
    Icon: Image,
  },
  {
    title: 'Modify Post Content',
    description: 'Add or remove media in post content according to your settings.',
    Icon: FileText,
  },
  {
    title: 'Hide Featured Media',
    description: 'Hide featured media on selected pages, post types, or formats.',
    Icon: EyeOff,
  },
  {
    title: 'Custom Popup',
    description: 'Display a custom popup with media on your site.',
    Icon: MessageSquare,
  },
  {
    title: 'Page Redirection',
    description: 'Redirect visitors from a page to a destination you choose.',
    Icon: ArrowRightLeft,
  },
  {
    title: 'Auto set featured media from post content',
    description:
      'Use media found in post content to set the featured media automatically.',
    Icon: FileImage,
  },
  {
    title: 'Image Metadata',
    description: 'Generate WordPress metadata records for remote images.',
    Icon: Database,
  },
  {
    title: 'Clear Metadata',
    description: 'Remove FIFU image metadata records from your site.',
    Icon: Eraser,
  },
  {
    title: 'Schedule Metadata Generation',
    description: 'Schedule metadata generation to run across your content.',
    Icon: CalendarClock,
  },
  {
    title: 'Delete All URLs',
    description: 'Remove remote media URLs stored by FIFU from your content.',
    Icon: ImagePlus,
  },
  {
    title: 'Debug Mode',
    description: 'Collect diagnostic details to help investigate FIFU issues.',
    Icon: Bug,
  },
  {
    title: 'Optimized Images',
    description:
      'Use optional CDN delivery, responsive sizes, and lazy loading for eligible post content.',
    Icon: Gauge,
  },
  {
    title: 'Square Image Options',
    description:
      'Choose square cropping or added space for desktop and mobile images served through FIFU CDN or FIFU Cloud.',
    Icon: Image,
  },
  {
    title: 'Image SEO',
    description:
      'Uses post titles as fallback alt text, adds image structured data, and supports Yoast and Rank Math.',
    Icon: FileSearch,
  },
  {
    title: 'Featured Images in RSS Feeds',
    description:
      'Include remote featured images in RSS feeds as media:content for feed readers and connected services.',
    Icon: Rss,
  },
  {
    title: 'WP / WooCommerce REST API',
    description: 'Manage FIFU media through the WordPress and WooCommerce REST APIs.',
    Icon: Code2,
  },
  {
    title: 'FIFU Shortcode',
    description: 'Display FIFU media in your site content with a shortcode.',
    Icon: Code,
  },
  {
    title: 'Featured Slider',
    description: 'Create a featured slider using image and video URLs.',
    Icon: GalleryHorizontal,
  },
  {
    title: 'bbPress and BuddyBoss Platform',
    description: 'Add featured media support to bbPress and BuddyBoss content.',
    Icon: MessageSquare,
  },
  {
    title: 'Taxonomy Image',
    description: 'Set remote featured images for taxonomy terms and categories.',
    Icon: Tags,
  },
  {
    title: 'Featured Video / Audio',
    description: 'Set featured videos and audio tracks using their media URLs.',
    Icon: Video,
  },
  {
    title: 'Video Thumbnail',
    description: 'Show a video thumbnail as the featured image.',
    Icon: Film,
  },
  {
    title: 'Play Button',
    description: 'Add a play button overlay to featured videos.',
    Icon: Play,
  },
  {
    title: 'Minimum Width',
    description: 'Set a minimum width requirement for featured videos.',
    Icon: Ruler,
  },
  {
    title: 'Video Controls',
    description: 'Choose whether video controls are displayed to visitors.',
    Icon: SlidersHorizontal,
  },
  {
    title: 'Autoplay on Mouseover',
    description: 'Start video playback when a visitor moves the pointer over it.',
    Icon: MousePointerClick,
  },
  {
    title: 'Autoplay',
    description: 'Automatically start featured video playback.',
    Icon: Play,
  },
  {
    title: 'Playback Loop',
    description: 'Replay featured videos continuously.',
    Icon: Repeat2,
  },
  {
    title: 'Mute',
    description: 'Control whether featured videos start with audio muted.',
    Icon: VolumeX,
  },
  {
    title: 'Background Video',
    description: 'Display a featured video as a background.',
    Icon: Clapperboard,
  },
  {
    title: 'Vimeo options',
    description: 'Configure Vimeo playback and video file options.',
    Icon: Video,
  },
  {
    title: 'YouTube options',
    description: 'Configure YouTube playback and privacy options.',
    Icon: Youtube,
  },
  {
    title: 'Privacy Enhanced Mode',
    description: 'Use YouTube’s privacy-enhanced video embedding mode.',
    Icon: ShieldCheck,
  },
  {
    title: 'Watch Later',
    description: 'Offer visitors a Watch Later option for featured videos.',
    Icon: Watch,
  },
  {
    title: 'Lightbox and Zoom',
    description: 'Let shoppers view product images in a lightbox and zoom in.',
    Icon: ZoomIn,
  },
  {
    title: 'Auto set category images',
    description: 'Automatically assign images to product categories.',
    Icon: Tags,
  },
  {
    title: 'Add image to order email',
    description: 'Include product images in WooCommerce order emails.',
    Icon: MailPlus,
  },
  {
    title: 'WooCommerce import',
    description: 'Use FIFU media when importing products with WooCommerce tools.',
    Icon: ShoppingCart,
  },
  {
    title: 'WP All Import add-on',
    description: 'Import FIFU media with the WP All Import add-on.',
    Icon: Puzzle,
  },
  {
    title: 'FIFU Product Gallery',
    description: 'Build a WooCommerce product gallery from remote images and videos.',
    Icon: PanelsTopLeft,
  },
  {
    title: 'Quick Buy',
    description: 'Add a quick-buy option to your WooCommerce product pages.',
    Icon: Zap,
  },
  {
    title: 'FIFU API',
    description: 'Use FIFU developer functions to manage featured media.',
    Icon: Braces,
  },
  {
    title: 'WP-CLI',
    description: 'Manage FIFU media and settings from the WordPress command line.',
    Icon: Terminal,
  },
  {
    title: 'Quick Editor',
    description:
      'Update featured media directly from WordPress content lists without opening each item.',
    Icon: MousePointerClick,
  },
  {
    title: 'Featured Media Filter',
    description:
      'Filter content lists by featured media status, including images, videos, sliders, and audio.',
    Icon: SlidersHorizontal,
  },
  {
    title: 'Featured Image (URL) Block',
    description:
      'Set a post’s featured image URL and alternative text from a block in the WordPress editor.',
    Icon: PanelsTopLeft,
  },
  {
    title: 'Widgets',
    description:
      'Add FIFU Featured media, Featured grid, and Product gallery widgets in WordPress, plus image and video widgets in Elementor.',
    Icon: Puzzle,
  },
  {
    title: 'FIFU Fields',
    description:
      'Add FIFU media fields to WordPress and WooCommerce editors, Gravity Forms, and vendor product forms in Dokan and MultiVendorX.',
    Icon: FileImage,
  },
  {
    title: 'Unsplash Image Search',
    description:
      'Search Unsplash with keywords in the FIFU image field, preview results, and use a selected photo URL as the featured image.',
    Icon: Search,
  },
  {
    title: 'Hotlink protection',
    description:
      'Prevent other websites from embedding your cloud-hosted images while allowing social media platforms.',
    Icon: ShieldCheck,
  },
  {
    title: 'Upload to Cloud',
    description:
      'Upload images to FIFU Cloud and optionally upload remote images automatically.',
    Icon: CloudUpload,
  },
  {
    title: 'Delete from Cloud',
    description:
      'Remove selected images from FIFU Cloud or delete them automatically when they are no longer used on your site.',
    Icon: CloudOff,
  },
  {
    title: 'Link local image URLs to FIFU plugin',
    description:
      'Copy selected Media Library image URLs into FIFU fields so FIFU can display them and upload them to the cloud.',
    Icon: Link2,
  },
  {
    title: 'DB Migration',
    description:
      'Migrate legacy FIFU metadata to optimized database storage in the background, removing old data only after the new records are confirmed.',
    Icon: Database,
  },
  {
    title: 'Automatic Updates',
    description: 'Receive FIFU Premium updates through WordPress using your license key.',
    Icon: RefreshCw,
  },
] as const;
