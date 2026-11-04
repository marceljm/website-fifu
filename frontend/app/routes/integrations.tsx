import { useState } from 'react';
import { Puzzle } from 'lucide-react';
import { Page } from '../components/layout/SiteLayout';

type Integration = {
  name: string;
  category: string;
  description: string;
  iconUrl?: string;
};

const integrations: Integration[] = [
  {
    name: 'WooCommerce',
    category: 'E-commerce',
    description:
      'Connect FIFU images with product galleries, variations, imports, and store displays.',
    iconUrl: 'https://ps.w.org/woocommerce/assets/icon.svg?rev=3640790',
  },
  {
    name: 'Elementor',
    category: 'Page Builder',
    description:
      'Use FIFU image and video widgets in Elementor layouts, including Elementor Pro.',
    iconUrl: 'https://ps.w.org/elementor/assets/icon-128x128.gif?rev=3444228',
  },
  {
    name: 'WPML',
    category: 'Multilingual',
    description:
      'Preserve FIFU media with WPML and WooCommerce Multilingual on translated content.',
  },
  {
    name: 'Yoast SEO',
    category: 'SEO',
    description: 'Use FIFU images in Yoast social previews and schema output.',
    iconUrl: 'https://ps.w.org/wordpress-seo/assets/icon-128x128.gif?rev=3419908',
  },
  {
    name: 'Rank Math SEO',
    category: 'SEO',
    description: 'Keep FIFU images available in Rank Math social metadata and sitemaps.',
    iconUrl: 'https://ps.w.org/seo-by-rank-math/assets/icon.svg?rev=3438330',
  },
  {
    name: 'Polylang',
    category: 'Multilingual',
    description: 'Keep FIFU-managed images intact across translated content.',
    iconUrl: 'https://ps.w.org/polylang/assets/icon-128x128.png?rev=3433336',
  },
  {
    name: 'WP All Import',
    category: 'Import',
    description: 'Map FIFU image, video, gallery, and slider fields during imports.',
    iconUrl: 'https://ps.w.org/wp-all-import/assets/icon-128x128.png?rev=2570179',
  },
  {
    name: 'WP Automatic',
    category: 'Automation',
    description: 'Use campaign images gathered by WP Automatic as FIFU featured images.',
  },
  {
    name: 'WPAuto Pro',
    category: 'Automation',
    description: 'Keep remote images from WPAuto Pro content imports in FIFU.',
  },
  {
    name: 'Dokan',
    category: 'Marketplace',
    description: 'Let vendors set FIFU image URLs when creating or editing products.',
    iconUrl: 'https://ps.w.org/dokan-lite/assets/icon-128x128.gif?rev=3239229',
  },
  {
    name: 'Gravity Forms',
    category: 'Forms',
    description: 'Add FIFU image, video, and slider fields to Gravity Forms workflows.',
  },
  {
    name: 'MultiVendorX (MVX)',
    category: 'Marketplace',
    description: 'Add FIFU image fields to the MultiVendorX product manager.',
    iconUrl:
      'https://ps.w.org/dc-woocommerce-multi-vendor/assets/icon-128x128.gif?rev=3314608',
  },
  {
    name: 'WP All Export',
    category: 'Export',
    description:
      'Include FIFU media fields when exporting WordPress content and products.',
    iconUrl: 'https://ps.w.org/wp-all-export/assets/icon-128x128.png?rev=2570162',
  },
  {
    name: 'Datafeedr',
    category: 'Product Feeds',
    description: 'Use a feed product’s primary image as its FIFU featured image.',
    iconUrl: 'https://ps.w.org/datafeedr-api/assets/icon-128x128.png?rev=1335107',
  },
  {
    name: 'Content Egg',
    category: 'Product Feeds',
    description: 'Carry Content Egg product images into FIFU’s featured-image workflow.',
    iconUrl: 'https://ps.w.org/content-egg/assets/icon.svg?rev=3580559',
  },
  {
    name: 'WOOBE',
    category: 'Bulk Editing',
    description: 'Edit FIFU featured-image URLs alongside products in bulk.',
    iconUrl: 'https://ps.w.org/woo-bulk-editor/assets/icon-128x128.png?rev=2436838',
  },
  {
    name: 'YITH WooCommerce Wishlist',
    category: 'Wishlists',
    description: 'Keep FIFU product images available in YITH wishlist displays.',
    iconUrl:
      'https://ps.w.org/yith-woocommerce-wishlist/assets/icon-128x128.gif?rev=3129302',
  },
  {
    name: 'WordPress Importer',
    category: 'Import',
    description: 'Clean up orphaned FIFU thumbnails after WordPress content imports.',
    iconUrl: 'https://ps.w.org/wordpress-importer/assets/icon.svg?rev=2791650',
  },
  {
    name: 'WebToffee Product Import Export',
    category: 'Import & Export',
    description:
      'Carry FIFU media fields through WooCommerce product imports and exports.',
    iconUrl:
      'https://ps.w.org/product-import-export-for-woo/assets/icon-128x128.gif?rev=3122891',
  },
  {
    name: 'Search & Filter Pro',
    category: 'Product Discovery',
    description: 'Support FIFU images in filtered content and product results.',
    iconUrl: 'https://ps.w.org/search-filter/assets/icon-128x128.png?rev=3096093',
  },
  {
    name: 'BuddyBoss Platform',
    category: 'Community',
    description: 'Use FIFU media with BuddyBoss community content and activity.',
  },
  {
    name: 'bbPress',
    category: 'Forums',
    description: 'Add FIFU remote images to forum, topic, and reply content.',
    iconUrl: 'https://ps.w.org/bbpress/assets/icon.svg?rev=978290',
  },
  {
    name: 'AMP',
    category: 'Publishing',
    description: 'Keep FIFU images available to AMP page output.',
    iconUrl: 'https://ps.w.org/amp/assets/icon.svg?rev=2527602',
  },
  {
    name: 'Web Stories',
    category: 'Publishing',
    description: 'Include FIFU images in Web Stories metadata and output.',
    iconUrl: 'https://ps.w.org/web-stories/assets/icon.svg?rev=2386543',
  },
  {
    name: 'VG Sheet Editor',
    category: 'Bulk Editing',
    description: 'Manage FIFU image URLs from spreadsheet-style product editing.',
  },
  {
    name: 'Yoast Duplicate Post',
    category: 'Content Editing',
    description: 'Preserve FIFU image metadata when duplicating posts and products.',
    iconUrl: 'https://ps.w.org/duplicate-post/assets/icon-128x128.png?rev=3581701',
  },
  {
    name: 'AAWP (Amazon Affiliate for WordPress)',
    category: 'Affiliate Marketing',
    description: 'Connect AAWP product data with FIFU-managed featured images.',
  },
  {
    name: 'Force Login',
    category: 'Access & REST API',
    description: 'Allow FIFU REST API routes through Force Login’s access check.',
  },
  {
    name: 'Woo Variation Swatches',
    category: 'Product Variations',
    description:
      'Sync FIFU category images with Woo Variation Swatches’ product attribute images.',
    iconUrl:
      'https://ps.w.org/woo-variation-swatches/assets/icon-128x128.gif?rev=3157951',
  },
  {
    name: 'All in One SEO (AIOSEO)',
    category: 'SEO',
    description:
      'Avoid duplicate structured data by limiting FIFU schema output when AIOSEO or another SEO plugin is active.',
    iconUrl: 'https://ps.w.org/all-in-one-seo-pack/assets/icon.svg?rev=2443290',
  },
  {
    name: 'WCFM (WooCommerce Frontend Manager)',
    category: 'Marketplace',
    description:
      'Read the FIFU image URL from WCFM’s vendor product form when it is saved.',
    iconUrl:
      'https://ps.w.org/wc-multivendor-marketplace/assets/icon-128x128.gif?rev=2628122',
  },
  {
    name: 'Content Views Pro',
    category: 'Content Display',
    description:
      'Adjust FIFU video thumbnail selection to avoid conflicting with Content Views Pro backgrounds.',
    iconUrl:
      'https://ps.w.org/content-views-query-and-display-post-page/assets/icon.svg?rev=2932226',
  },
  {
    name: 'Multisite Global Media',
    category: 'Multisite Media',
    description:
      'Protect globally shared thumbnail references when FIFU cleans up orphaned media.',
  },
  {
    name: 'Toolset Forms',
    category: 'Forms',
    description:
      'Save Toolset Forms’ fifu_image_url field to the post’s FIFU image data.',
  },
  {
    name: 'Sirv',
    category: 'Image Hosting',
    description:
      'Show the Sirv image picker in FIFU’s editor when the Sirv plugin is active.',
    iconUrl: 'https://ps.w.org/sirv/assets/icon.svg?rev=1786201',
  },
  {
    name: 'OL Scrapes',
    category: 'Content Import',
    description:
      'Run FIFU’s post-save handler during OL Scrapes saves so submitted FIFU image fields are processed.',
  },
  {
    name: 'AliPlugin',
    category: 'Affiliate Marketing',
    description:
      'Read AliPlugin’s submitted imageUrl value and save it as the FIFU image URL.',
  },
  {
    name: 'SlotsLaunch',
    category: 'Gaming Content',
    description: 'Use the image URL stored by SlotsLaunch as the post’s FIFU image.',
  },
];

const themes: Integration[] = [
  {
    name: 'Houzez',
    category: 'Real Estate Theme',
    description: 'Sync FIFU image URLs with Houzez property galleries.',
  },
  {
    name: 'WPResidence',
    category: 'Real Estate Theme',
    description: 'Sync FIFU images with WPResidence property gallery data.',
  },
  {
    name: 'Rey',
    category: 'WooCommerce Theme',
    description: 'Render FIFU product galleries through Rey’s WooCommerce gallery.',
  },
  {
    name: 'Blocksy',
    category: 'WooCommerce Theme',
    description: 'Render FIFU galleries in Blocksy product pages and quick views.',
  },
  {
    name: 'WoodMart',
    category: 'Theme Compatibility',
    description:
      'Prevent WoodMart thumbnail generation from processing FIFU remote images.',
  },
  {
    name: 'Flatsome',
    category: 'WooCommerce Theme',
    description:
      'Adjust the product gallery height so Flatsome’s slider fits the FIFU image.',
  },
  {
    name: 'Avada',
    category: 'Theme Compatibility',
    description:
      'Apply FIFU’s video overlay styling to product images in Avada shop and product listings.',
  },
  {
    name: 'Photolio',
    category: 'Theme Compatibility',
    description:
      'Adjust Photolio’s video gallery loading state for FIFU video thumbnails.',
  },
];

function IntegrationIcon({ name, iconUrl }: Integration) {
  const [failed, setFailed] = useState(!iconUrl);

  if (failed || !iconUrl) {
    return (
      <span className="integration-icon integration-icon-placeholder" aria-hidden="true">
        <Puzzle size={22} strokeWidth={1.7} />
      </span>
    );
  }

  return (
    <img
      className="integration-icon integration-icon-image"
      src={iconUrl}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      data-integration-icon={name}
    />
  );
}

export function meta() {
  return [
    { title: 'FIFU Integrations | Featured Image from URL' },
    {
      name: 'description',
      content:
        'Explore plugins and themes that integrate with FIFU for product images, imports, page building, SEO, and more.',
    },
  ];
}

export default function Integrations() {
  const cards = [...integrations, ...themes];

  return (
    <Page eyebrow="FIFU INTEGRATIONS" title="Extra support for plugins and themes.">
      <p>
        FIFU aims to work natively with as many WordPress plugins and themes as possible.
        For some, FIFU adds dedicated integrations or compatibility adjustments to handle
        specific behavior or avoid conflicts. The cards below highlight examples of that
        extra support.
      </p>
      <div className="cards integration-cards">
        {cards.map((item) => (
          <article
            className="simplecard catalog-card integration-catalog-card"
            key={item.name}
          >
            <div className="catalog-card-heading integration-card-heading">
              <IntegrationIcon {...item} />
              <span className="integration-card-title">
                <small>{item.category}</small>
                <strong>{item.name}</strong>
              </span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Page>
  );
}
