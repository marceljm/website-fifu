/**
 * One illustration per guide, composed only from primitives.tsx so every scene
 * shares the same look. Text inside the scenes uses FIFU's exact labels.
 */
import {
  Blocks,
  Camera,
  CircleCheck,
  Clipboard,
  Cloud,
  Code,
  Copy,
  Crop,
  Database,
  Download,
  Eraser,
  FileSpreadsheet,
  Gift,
  Globe,
  Languages,
  LayoutTemplate,
  Link2,
  Lock,
  Mail,
  Maximize2,
  Plug,
  Puzzle,
  RotateCcw,
  Rss,
  Search,
  Send,
  Shirt,
  ShoppingBag,
  Sparkles,
  TriangleAlert,
  X,
  Zap,
  ZoomIn,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import {
  Browser,
  Btn,
  Card,
  Chip,
  Comparison,
  Cursor,
  Email,
  Field,
  Heading,
  Lines,
  Mark,
  Overview,
  Panel,
  Pic,
  Pin,
  Sheet,
  Spot,
  Stack,
  Terminal,
  Tile,
  Toggle,
  Workflow,
} from './primitives';
import type { IllustrationKey } from './registry';

const URL = 'https://…/beach.jpg';

/* Save in the Media Library ------------------------------------------- */

function SaveInMediaLibrary() {
  return (
    <Workflow
      steps={[
        {
          title: 'Show the editor save button',
          visual: (
            <Panel title="FIFU Settings · Image">
              <Tile icon={Download} label="Save in the Media Library" />
              <Toggle label="show save button on post editor" on />
            </Panel>
          ),
        },
        {
          title: 'Save the remote image',
          visual: (
            <Panel>
              <Pic tone="sky" />
              <Btn icon={Download}>Upload to media library</Btn>
            </Panel>
          ),
        },
        {
          title: 'Use the local attachment',
          visual: (
            <Stack>
              <Tile icon={FileSpreadsheet} label="WordPress Media Library" tone="green" />
              <Chip tone="green" icon={CircleCheck}>Featured image</Chip>
            </Stack>
          ),
        },
      ]}
    />
  );
}

/* Getting started ---------------------------------------------------- */

function GettingStarted() {
  return (
    <Workflow
      steps={[
        {
          title: 'Install and activate',
          visual: (
            <Panel title="Plugins" icon={Plug}>
              <Heading text="Featured Image from URL (FIFU)" />
              <Lines count={1} short />
              <Btn>Activate</Btn>
            </Panel>
          ),
        },
        {
          title: 'Paste the image URL',
          visual: (
            <Panel>
              <Field value={URL} focus />
              <Btn variant="secondary">Preview</Btn>
            </Panel>
          ),
        },
        {
          title: 'Check the preview',
          visual: (
            <Panel>
              <Pic tone="sunset" />
              <Field placeholder="Alternative text" />
            </Panel>
          ),
        },
        {
          title: 'Publish and view',
          visual: (
            <Browser>
              <Heading text="My first post" />
              <Pic tone="sunset" ratio="banner" />
              <Lines count={2} />
            </Browser>
          ),
        },
      ]}
    />
  );
}

function FeaturedImageFromUrl() {
  return (
    <Comparison
      left={{
        label: 'In the editor',
        visual: (
          <Panel>
            <Field value="Featured image" />
            <Spot
              overlay={
                <span className="ill-remove-dot">
                  <X size={10} strokeWidth={3} />
                </span>
              }
            >
              <Pic tone="sunset" />
            </Spot>
            <Field value="Sunset over a calm beach" />
            <Field value={URL} />
          </Panel>
        ),
        note: 'Paste the URL, click Preview, and add alternative text.',
      }}
      right={{
        label: 'On your site',
        tone: 'good',
        visual: (
          <Browser>
            <Pic tone="sunset" ratio="banner" />
            <Heading text="Summer on the coast" />
            <Lines count={3} />
          </Browser>
        ),
        note: 'The image is shown from its original address.',
      }}
    />
  );
}

function UnsplashImageSearch() {
  return (
    <Workflow
      steps={[
        {
          title: 'Type keywords',
          visual: (
            <Panel>
              <Field value="sun,sea" focus icon={Search} />
              <Spot inline overlay={<Cursor />}>
                <Btn variant="secondary">Preview</Btn>
              </Spot>
            </Panel>
          ),
        },
        {
          title: 'Pick a photo',
          visual: (
            <span className="ill-photo-grid">
              <Pic tone="sky" ratio="square" />
              <Spot overlay={<Cursor />}>
                <Pic tone="sunset" ratio="square" highlight />
              </Spot>
              <Pic tone="forest" ratio="square" />
              <Pic tone="violet" ratio="square" />
              <Pic tone="sand" ratio="square" />
              <Pic tone="sky" ratio="square" />
            </span>
          ),
        },
        {
          title: 'It becomes the featured image',
          visual: (
            <Panel>
              <Pic tone="sunset" />
              <Field value="https://images.unsplash.com/…" />
            </Panel>
          ),
        },
      ]}
    />
  );
}

function QuickEditor() {
  const row = (title: string, pic: ReactNode) => (
    <span className="ill-list-row">
      <span className="ill-list-title">{title}</span>
      {pic}
    </span>
  );
  return (
    <Overview
      notes={[
        'Click a thumbnail in the FIFU column.',
        'Paste a URL or keywords, then click Save.',
        'Filter the list by image status.',
      ]}
    >
      <Stack row gap="lg" className="ill-wrap">
        <Panel title="All Posts" icon={LayoutTemplate} className="ill-list">
          <Stack row gap="sm">
            <Chip tone="gray">All featured media statuses ▾</Chip>
            <Pin n={3} />
          </Stack>
          <span className="ill-list-row ill-list-row--head">
            <span className="ill-list-title">Title</span>
            <Camera size={13} />
          </span>
          {row('Summer on the coast', <Pic tone="sunset" ratio="square" />)}
          <span className="ill-list-row">
            <span className="ill-list-title">
              Mountain weekend <Pin n={1} />
            </span>
            <Spot overlay={<Cursor />}>
              <Pic tone="forest" ratio="square" highlight />
            </Spot>
          </span>
          {row('Recipe ideas', <Pic state="empty" ratio="square" />)}
        </Panel>
        <Panel title="Quick edit" icon={Camera} className="ill-dialog">
          <Pic tone="forest" />
          <Field value="https://…/mountain.jpg" />
          <Field placeholder="Alternative text" />
          <Stack row gap="sm">
            <Btn variant="secondary">Clear</Btn>
            <Btn>Save</Btn>
            <Pin n={2} />
          </Stack>
        </Panel>
      </Stack>
    </Overview>
  );
}

/* Image settings ----------------------------------------------------- */

function OptimizedImages() {
  return (
    <Comparison
      left={{
        label: 'Original image',
        tone: 'bad',
        visual: (
          <Stack>
            <Pic tone="sky" badge="2.4 MB" badgeTone="red" />
            <Chip tone="gray" icon={Globe}>
              example.com/photo.jpg
            </Chip>
          </Stack>
        ),
        note: 'The same large file for every screen.',
      }}
      right={{
        label: 'Optimized Images',
        tone: 'good',
        visual: (
          <Stack>
            <Stack row gap="sm" className="ill-sizes">
              <Pic tone="sky" badge="120 KB" badgeTone="green" />
              <Pic tone="sky" ratio="square" />
            </Stack>
            <Chip tone="green" icon={Zap}>
              i0.wp.com · resized · lazy loaded
            </Chip>
          </Stack>
        ),
        note: 'A resized copy from a fast CDN.',
      }}
    />
  );
}

function HideFeaturedMedia() {
  return (
    <Comparison
      join="vs"
      left={{
        label: 'Homepage and lists',
        tone: 'good',
        visual: (
          <Browser>
            <Stack row gap="sm">
              <Card pic={<Pic tone="sunset" />} lines={1} />
              <Card pic={<Pic tone="forest" />} lines={1} />
            </Stack>
          </Browser>
        ),
        note: 'Featured images stay visible.',
      }}
      right={{
        label: 'The post’s own page',
        visual: (
          <Browser>
            <Heading text="Summer on the coast" />
            <Pic state="hidden" ratio="banner" label="Hidden" />
            <Lines count={3} />
          </Browser>
        ),
        note: 'The featured image is hidden.',
      }}
    />
  );
}

function DefaultFeaturedImage() {
  return (
    <Comparison
      left={{
        label: 'Without a default image',
        tone: 'bad',
        visual: (
          <Browser>
            <Stack row gap="sm">
              <Card pic={<Pic tone="sunset" />} lines={1} />
              <Card pic={<Pic state="empty" label="No image" />} lines={1} />
              <Card pic={<Pic tone="forest" />} lines={1} />
            </Stack>
          </Browser>
        ),
        note: 'Posts without an image leave a gap.',
      }}
      right={{
        label: 'With Default Featured Image',
        tone: 'good',
        visual: (
          <Browser>
            <Stack row gap="sm">
              <Card pic={<Pic tone="sunset" />} lines={1} />
              <Card pic={<Pic tone="slate" badge="Default" />} lines={1} />
              <Card pic={<Pic tone="forest" />} lines={1} />
            </Stack>
          </Browser>
        ),
        note: 'Every post shows an image.',
      }}
    />
  );
}

function ModifyPostContent() {
  return (
    <Comparison
      join="vs"
      left={{
        label: 'add missing media',
        visual: (
          <Browser>
            <Heading text="Summer on the coast" />
            <Pic tone="sunset" ratio="banner" badge="+ Added" badgeTone="green" />
            <Lines count={3} />
          </Browser>
        ),
        note: 'The featured image appears at the top of the content.',
      }}
      right={{
        label: 'remove duplicated media',
        visual: (
          <Browser>
            <Pic tone="sunset" ratio="banner" />
            <Lines count={2} />
            <Pic tone="sunset" ratio="banner" faded badge="Removed" badgeTone="red" />
          </Browser>
        ),
        note: 'The extra copy inside the content is removed.',
      }}
    />
  );
}

function ReplaceNotFoundImage() {
  return (
    <Comparison
      left={{
        label: 'Without a backup',
        tone: 'bad',
        visual: (
          <Browser>
            <Pic state="broken" ratio="banner" label="Image not found" />
            <Heading text="Summer on the coast" />
            <Lines count={2} />
          </Browser>
        ),
        note: 'Visitors see a broken image.',
      }}
      right={{
        label: 'Replace Not Found Image',
        tone: 'good',
        visual: (
          <Browser>
            <Pic tone="slate" ratio="banner" icon={Camera} badge="Backup image" />
            <Heading text="Summer on the coast" />
            <Lines count={2} />
          </Browser>
        ),
        note: 'Your backup image is shown. The saved URL doesn’t change.',
      }}
    />
  );
}

function DisableRightClick() {
  return (
    <Comparison
      left={{
        label: 'Switched off',
        visual: (
          <Spot
            overlay={
              <span className="ill-context-menu">
                <span>Open image in new tab</span>
                <span className="ill-context-menu-hot">Save image as…</span>
                <span>Copy image</span>
              </span>
            }
          >
            <Pic tone="violet" />
          </Spot>
        ),
        note: 'Right-click opens the browser’s image menu.',
      }}
      right={{
        label: 'Switched on',
        tone: 'good',
        visual: (
          <Spot overlay={<Cursor blocked />}>
            <Pic tone="violet" />
          </Spot>
        ),
        note: 'Right-click does nothing on images.',
      }}
    />
  );
}

/* Automatic ---------------------------------------------------------- */

function AutoSetFeaturedMedia() {
  return (
    <Workflow
      steps={[
        {
          title: 'Your post contains images',
          visual: (
            <Panel title="Post content" icon={LayoutTemplate}>
              <Lines count={2} />
              <Pic tone="forest" badge="1st image" badgeTone="green" highlight />
              <Lines count={1} />
              <Pic tone="sky" ratio="banner" faded />
            </Panel>
          ),
        },
        {
          title: 'Save the post',
          visual: (
            <Panel title="Automatic" icon={Sparkles}>
              <Toggle label="auto set featured media from post content" on />
              <Btn>Save</Btn>
            </Panel>
          ),
        },
        {
          title: 'The first image is the featured image',
          visual: (
            <Panel>
              <Pic tone="forest" badge="Auto" badgeTone="green" />
            </Panel>
          ),
        },
      ]}
    />
  );
}

/* WooCommerce -------------------------------------------------------- */

function ProductAndCategoryImages() {
  const categories: [string, 'sunset' | 'violet' | 'forest'][] = [
    ['Shoes', 'sunset'],
    ['Bags', 'violet'],
    ['Shirts', 'forest'],
  ];
  return (
    <Overview notes={['Product category images', 'Product images']}>
      <Browser url="yoursite.com/shop" className="ill-wide ill-shop">
        <span className="ill-shop-row">
          <Pin n={1} />
          {categories.map(([name, tone]) => (
            <span className="ill-category" key={name}>
              <Pic tone={tone} ratio="banner" />
              <b>{name}</b>
            </span>
          ))}
        </span>
        <span className="ill-shop-row">
          <Pin n={2} />
          <Card
            pic={<Pic tone="sand" icon={ShoppingBag} />}
            title="Tote bag"
            lines={0}
            footer={<Btn>Add to cart</Btn>}
          />
          <Card
            pic={<Pic tone="sky" icon={Shirt} />}
            title="Linen shirt"
            lines={0}
            footer={<Btn>Add to cart</Btn>}
          />
          <Card
            pic={<Pic tone="violet" icon={Gift} />}
            title="Gift box"
            lines={0}
            footer={<Btn>Add to cart</Btn>}
          />
        </span>
      </Browser>
    </Overview>
  );
}

function LightboxAndZoom() {
  return (
    <Comparison
      join="vs"
      left={{
        label: 'lightbox',
        visual: (
          <span className="ill-lightbox">
            <span className="ill-lightbox-close">
              <X size={12} strokeWidth={3} />
            </span>
            <Pic tone="sand" icon={ShoppingBag} />
            <span className="ill-lightbox-dots">
              <i />
              <i />
              <i />
            </span>
          </span>
        ),
        note: 'Click the image to see it full screen.',
      }}
      right={{
        label: 'zoom',
        visual: (
          <Spot
            overlay={
              <span className="ill-zoom-lens">
                <ZoomIn size={16} strokeWidth={2} />
              </span>
            }
          >
            <Pic tone="sand" icon={ShoppingBag} />
          </Spot>
        ),
        note: 'Hover over the image to see details up close.',
      }}
    />
  );
}

function AddImageToOrderEmail() {
  const item = (pic: boolean, name: string, price: string) => (
    <span className="ill-order-row">
      {pic && (
        <Pic
          tone="sand"
          ratio="square"
          icon={name === 'Tote bag' ? ShoppingBag : Shirt}
        />
      )}
      <span className="ill-order-name">{name} × 1</span>
      <b>{price}</b>
    </span>
  );
  return (
    <Comparison
      left={{
        label: 'Switched off',
        visual: (
          <Email subject="Your order is confirmed">
            {item(false, 'Tote bag', '$29')}
            {item(false, 'Linen shirt', '$45')}
          </Email>
        ),
        note: 'Items are listed as text only.',
      }}
      right={{
        label: 'Add image to order email',
        tone: 'good',
        visual: (
          <Email subject="Your order is confirmed">
            {item(true, 'Tote bag', '$29')}
            {item(true, 'Linen shirt', '$45')}
          </Email>
        ),
        note: 'Each item shows a 100 × 100 image.',
      }}
    />
  );
}

/* Metadata and maintenance ------------------------------------------- */

function ImageMetadata() {
  return (
    <Workflow
      steps={[
        {
          title: 'A remote image URL',
          visual: (
            <Stack>
              <Chip tone="gray" icon={Link2}>
                https://…/photo.jpg
              </Chip>
              <Pic tone="sky" />
            </Stack>
          ),
        },
        {
          title: 'FIFU creates a small record',
          visual: (
            <Stack>
              <Tile icon={Database} label="Image Metadata" />
              <Chip tone="green" icon={CircleCheck}>
                No file downloaded
              </Chip>
            </Stack>
          ),
        },
        {
          title: 'Themes and plugins can show it',
          visual: (
            <Browser>
              <Pic tone="sky" ratio="banner" />
              <Lines count={2} />
            </Browser>
          ),
        },
      ]}
    />
  );
}

function ClearMetadata() {
  const record = (name: string) => (
    <span className="ill-record">
      <Database size={12} />
      {name}
    </span>
  );
  return (
    <Comparison
      join="vs"
      left={{
        label: 'Removed',
        tone: 'bad',
        visual: (
          <Panel title="Clear Metadata" icon={Eraser}>
            <span className="ill-struck">
              {record('Image record · post 12')}
              {record('Image record · post 15')}
              {record('Image record · post 21')}
            </span>
          </Panel>
        ),
        note: 'The records FIFU created.',
      }}
      right={{
        label: 'Kept',
        tone: 'good',
        visual: (
          <Stack gap="sm" className="ill-fit">
            <Chip tone="gray" icon={Link2}>
              https://…/beach.jpg
            </Chip>
            <Chip tone="gray" icon={Link2}>
              https://…/mountain.jpg
            </Chip>
            <Chip tone="gray" icon={Link2}>
              https://…/recipe.jpg
            </Chip>
          </Stack>
        ),
        note: 'Your image URLs, ready to generate the records again.',
      }}
    />
  );
}

function ResetSettings() {
  return (
    <Comparison
      left={{
        label: 'Your changes',
        visual: (
          <Panel title="Settings" icon={RotateCcw}>
            <Toggle label="optimize featured images" on />
            <Toggle label="Hide Featured Media" on />
            <Toggle label="lightbox" on={false} />
            <Toggle label="zoom" on={false} />
          </Panel>
        ),
      }}
      right={{
        label: 'After Reset Settings',
        tone: 'good',
        visual: (
          <Panel title="Settings" icon={RotateCcw}>
            <Toggle label="optimize featured images" on={false} />
            <Toggle label="Hide Featured Media" on={false} />
            <Toggle label="lightbox" on />
            <Toggle label="zoom" on />
          </Panel>
        ),
        note: 'Kept: your image URLs and the Default Featured Image.',
      }}
    />
  );
}

function DeleteAllUrls() {
  return (
    <Workflow
      steps={[
        {
          title: 'Turn on the safety switch',
          visual: (
            <Terminal
              title="wp-config.php"
              lines={[{ kind: 'code', text: "define( 'FIFU_DELETE_ALL_URLS', true );" }]}
            />
          ),
        },
        {
          title: 'Delete the URLs',
          visual: (
            <Panel title="Delete All URLs" icon={TriangleAlert}>
              <Toggle label="delete all your URLs now" on />
              <Chip tone="red" icon={TriangleAlert}>
                Can’t be undone
              </Chip>
            </Panel>
          ),
        },
        {
          title: 'Remote images are gone',
          visual: (
            <Browser>
              <Stack row gap="sm">
                <Card pic={<Pic state="empty" />} lines={1} />
                <Card pic={<Pic state="empty" />} lines={1} />
              </Stack>
            </Browser>
          ),
        },
      ]}
    />
  );
}

/* Developers --------------------------------------------------------- */

function FifuApi() {
  return (
    <Workflow
      steps={[
        {
          title: 'Call the function',
          visual: (
            <Terminal
              title="functions.php"
              lines={[
                { kind: 'code', text: 'fifu_dev_set_image(' },
                { kind: 'code', text: "  42, 'https://…/hello.jpg'" },
                { kind: 'code', text: ');' },
              ]}
            />
          ),
        },
        {
          title: 'FIFU saves the image',
          visual: (
            <Stack>
              <Tile icon={Camera} label="FIFU" />
              <Chip tone="green" icon={CircleCheck}>
                returns true
              </Chip>
            </Stack>
          ),
        },
        {
          title: 'Post 42 has its featured image',
          visual: <Card pic={<Pic tone="violet" />} title="Post 42" lines={2} />,
        },
      ]}
    />
  );
}

function WpCli() {
  return (
    <Comparison
      left={{
        label: 'Run a command',
        visual: (
          <Terminal
            lines={[
              { text: 'wp fifu content on' },
              { text: 'wp fifu woo --zoom=off' },
              { text: 'wp fifu metadata on' },
            ]}
          />
        ),
        note: 'One option per command.',
      }}
      right={{
        label: 'FIFU’s settings change',
        tone: 'good',
        visual: (
          <Panel title="Settings" icon={Code}>
            <Toggle label="auto set featured media from post content" on />
            <Toggle label="zoom" on={false} />
            <Toggle label="generate the missing metadata now" on />
          </Panel>
        ),
      }}
    />
  );
}

function DebugMode() {
  return (
    <Comparison
      left={{
        label: 'Switch it on',
        visual: (
          <Panel title="Debug Mode" icon={Code}>
            <Toggle label="Debug Mode" on />
            <Lines count={2} short />
          </Panel>
        ),
      }}
      right={{
        label: 'Troubleshooting tools appear',
        tone: 'good',
        visual: (
          <Stack gap="sm" className="ill-fit">
            <Chip tone="blue" icon={Clipboard}>
              Copy debug data
            </Chip>
            <Chip tone="blue" icon={Download}>
              Download debug logs
            </Chip>
            <Chip tone="blue" icon={Database}>
              DB Migration
            </Chip>
            <Chip tone="gray" icon={Zap}>
              No cached files
            </Chip>
          </Stack>
        ),
        note: 'Switch it off when you’re done.',
      }}
    />
  );
}

function StatusPage() {
  return (
    <Workflow
      steps={[
        {
          title: 'Open FIFU › Status',
          visual: (
            <Panel title="Status" icon={FileSpreadsheet}>
              <span className="ill-status-text">
                <span>FIFU: …</span>
                <span>WordPress: …</span>
                <span>PHP: …</span>
                <span>Active plugins: …</span>
              </span>
            </Panel>
          ),
        },
        {
          title: 'Copy the summary',
          visual: (
            <Spot inline overlay={<Cursor />}>
              <Btn variant="secondary" icon={Copy}>
                Copy to clipboard
              </Btn>
            </Spot>
          ),
        },
        {
          title: 'Send it to support',
          visual: (
            <Email subject="Help with my images" to="support@fifu.app">
              <Lines count={2} />
              <span className="ill-status-text ill-status-text--pasted">
                <span>FIFU: …</span>
                <span>WordPress: …</span>
              </span>
              <Btn icon={Send}>Send</Btn>
            </Email>
          ),
        },
      ]}
    />
  );
}

/* Blocks and widgets ------------------------------------------------- */

function FeaturedImageBlock() {
  return (
    <Overview
      notes={[
        'The Featured Image (URL) block in the content area',
        'Its Settings panel: Image URL and Alternative text',
      ]}
    >
      <span className="ill-editor">
        <span className="ill-editor-canvas">
          <Heading text="Summer on the coast" />
          <span className="ill-block">
            <span className="ill-block-label">
              <Blocks size={11} /> Featured Image (URL) <Pin n={1} />
            </span>
            <Pic tone="sunset" />
          </span>
          <Lines count={3} />
        </span>
        <span className="ill-editor-sidebar">
          <Panel title="Settings" icon={Blocks}>
            <Field value={URL} />
            <Field value="Sunset over a calm beach" />
            <Pin n={2} />
          </Panel>
        </span>
      </span>
    </Overview>
  );
}

function FeaturedMediaWidget() {
  return (
    <Overview
      notes={['The (FIFU) Featured media widget shows the current post’s image.']}
    >
      <Browser className="ill-wide">
        <span className="ill-page-with-sidebar">
          <span className="ill-page-main">
            <Heading text="Summer on the coast" />
            <Lines count={4} />
            <Lines count={3} />
          </span>
          <span className="ill-page-sidebar">
            <span className="ill-widget">
              <span className="ill-widget-title">
                (FIFU) Featured media <Pin n={1} />
              </span>
              <Pic tone="sunset" />
            </span>
            <Lines count={3} short />
          </span>
        </span>
      </Browser>
    </Overview>
  );
}

function ElementorWidget() {
  return (
    <Workflow
      steps={[
        {
          title: 'Drag the widget',
          visual: (
            <Panel title="Basic" icon={LayoutTemplate}>
              <span className="ill-widget-grid">
                <span>Heading</span>
                <span>Text</span>
                <Spot overlay={<Cursor />}>
                  <span className="ill-widget-grid-hot">
                    <Camera size={12} /> (FIFU) Featured Image
                  </span>
                </Spot>
                <span>Button</span>
              </span>
            </Panel>
          ),
        },
        {
          title: 'Paste the Image URL',
          visual: (
            <Panel title="Content" icon={LayoutTemplate}>
              <Field value={URL} focus />
              <Field placeholder="Alternative text" />
              <Pic tone="sunset" />
            </Panel>
          ),
        },
        {
          title: 'Publish: it’s the featured image',
          visual: (
            <Card
              pic={<Pic tone="sunset" badge="Featured image" />}
              title="Summer on the coast"
              lines={1}
            />
          ),
        },
      ]}
    />
  );
}

/* Integrations ------------------------------------------------------- */

function SeoAndSocialSharing() {
  return (
    <Comparison
      left={{
        label: 'Your post',
        visual: (
          <Card pic={<Pic tone="sunset" />} title="Summer on the coast" lines={2} />
        ),
      }}
      right={{
        label: 'Where the image appears',
        tone: 'good',
        visual: (
          <Stack gap="sm">
            <span className="ill-share">
              <Pic tone="sunset" ratio="banner" />
              <span className="ill-share-text">
                <small>YOURSITE.COM</small>
                <b>Summer on the coast</b>
              </span>
            </span>
            <span className="ill-result">
              <Search size={13} />
              <span>
                <b>Summer on the coast</b>
                <small>yoursite.com › summer</small>
              </span>
              <Pic tone="sunset" ratio="square" />
            </span>
            <span className="ill-result">
              <Rss size={13} />
              <span>
                <b>RSS feed item</b>
                <small>with the featured image</small>
              </span>
              <Pic tone="sunset" ratio="square" />
            </span>
          </Stack>
        ),
        note: 'Link previews, search results, and feed readers.',
      }}
    />
  );
}

function FormsAndMarketplaces() {
  return (
    <Workflow
      steps={[
        {
          title: 'A visitor fills in the form',
          visual: (
            <Panel title="Submit a post" icon={LayoutTemplate}>
              <Field value="Mountain weekend" />
              <Field value="https://…/mountain.jpg" icon={Camera} focus />
              <Btn>Submit</Btn>
            </Panel>
          ),
        },
        {
          title: 'A new post is created',
          visual: <Tile icon={CircleCheck} label="Featured Image (FIFU)" tone="green" />,
        },
        {
          title: 'The URL is its featured image',
          visual: <Card pic={<Pic tone="forest" />} title="Mountain weekend" lines={2} />,
        },
      ]}
    />
  );
}

function MultilingualAndDuplicatedContent() {
  return (
    <Workflow
      steps={[
        {
          title: 'The original post',
          visual: (
            <Card
              pic={<Pic tone="sunset" badge="EN" badgeTone="dark" />}
              title="Summer on the coast"
              lines={1}
            />
          ),
        },
        {
          title: 'Translate or duplicate it',
          visual: (
            <Stack gap="sm" className="ill-fit">
              <Chip tone="blue" icon={Languages}>
                WPML · Polylang
              </Chip>
              <Chip tone="blue" icon={Copy}>
                Duplicate
              </Chip>
            </Stack>
          ),
        },
        {
          title: 'Each version keeps the image',
          visual: (
            <Stack row gap="sm">
              <Card
                pic={<Pic tone="sunset" badge="ES" badgeTone="dark" />}
                title="Verano"
                lines={0}
              />
              <Card
                pic={<Pic tone="sunset" badge="Copy" badgeTone="dark" />}
                title="Summer…"
                lines={0}
              />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function BulkEditors() {
  return (
    <Workflow
      steps={[
        {
          title: 'Edit many rows at once',
          visual: (
            <Sheet
              columns={['Title', 'fifu_image_url', 'fifu_image_alt']}
              rows={[
                ['Tote bag', 'https://…/tote.jpg', 'Canvas tote'],
                ['Linen shirt', 'https://…/shirt.jpg', 'Blue shirt'],
                ['Sneakers', 'https://…/shoes.jpg', ''],
              ]}
            />
          ),
        },
        {
          title: 'Every item gets its image',
          visual: (
            <Stack row gap="sm">
              <Pic tone="sand" ratio="square" icon={ShoppingBag} />
              <Pic tone="sky" ratio="square" icon={Shirt} />
              <Pic tone="sunset" ratio="square" />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function ImportAndAutomationPlugins() {
  return (
    <Workflow
      steps={[
        {
          title: 'Import content with image URLs',
          visual: (
            <Sheet
              columns={['Product', 'Image']}
              rows={[
                ['Tote bag', 'https://…/tote.jpg'],
                ['Linen shirt', 'https://…/shirt.jpg'],
              ]}
            />
          ),
        },
        {
          title: 'FIFU keeps the images remote',
          visual: (
            <Stack>
              <Tile icon={Camera} label="FIFU" />
              <Chip tone="green" icon={CircleCheck}>
                0 files downloaded
              </Chip>
            </Stack>
          ),
        },
        {
          title: 'Products show their images',
          visual: (
            <Stack row gap="sm">
              <Card
                pic={<Pic tone="sand" ratio="square" icon={ShoppingBag} />}
                title="Tote bag"
                lines={0}
              />
              <Card
                pic={<Pic tone="sky" ratio="square" icon={Shirt} />}
                title="Linen shirt"
                lines={0}
              />
            </Stack>
          ),
        },
      ]}
    />
  );
}

function ThemeAndPluginCompatibility() {
  const names = {
    Themes: ['WoodMart', 'Flatsome', 'Houzez', 'WPResidence'],
    Plugins: [
      'AMP',
      'Web Stories',
      'Search & Filter Pro',
      'Force Login',
      'YITH Wishlist',
      'Sirv',
    ],
  };
  return (
    <Comparison
      left={{
        label: 'FIFU detects them',
        visual: <Tile icon={Puzzle} label="FIFU" />,
      }}
      right={{
        label: 'And adjusts itself',
        tone: 'good',
        visual: (
          <Stack gap="sm" className="ill-fit">
            {Object.entries(names).map(([group, list]) => (
              <span className="ill-compat-group" key={group}>
                <small>{group}</small>
                <span className="ill-compat-list">
                  {list.map((name) => (
                    <Chip tone="gray" key={name}>
                      <Mark /> {name}
                    </Chip>
                  ))}
                </span>
              </span>
            ))}
          </Stack>
        ),
        note: 'Nothing to set up.',
      }}
    />
  );
}

/* Optional services -------------------------------------------------- */

function FifuCloud() {
  return (
    <Workflow
      steps={[
        {
          title: 'Upload your remote images',
          visual: (
            <Stack>
              <Pic tone="sky" />
              <Chip tone="amber" icon={TriangleAlert}>
                The source may change
              </Chip>
            </Stack>
          ),
        },
        {
          title: 'FIFU Cloud stores and optimizes them',
          visual: (
            <Stack>
              <Tile icon={Cloud} label="FIFU Cloud" />
              <Stack row gap="sm">
                <Chip tone="blue">WebP</Chip>
                <Chip tone="blue" icon={Crop}>
                  Smart crop
                </Chip>
              </Stack>
            </Stack>
          ),
        },
        {
          title: 'Visitors get fast thumbnails',
          visual: (
            <Stack>
              <Stack row gap="sm" className="ill-sizes">
                <Pic tone="sky" />
                <Pic tone="sky" ratio="square" />
              </Stack>
              <Chip tone="green" icon={Lock}>
                Hotlink protection
              </Chip>
            </Stack>
          ),
        },
      ]}
    />
  );
}

/** One component per registry key. `satisfies` keeps both lists in sync. */
export const SCENES = {
  'save-in-media-library': SaveInMediaLibrary,
  'getting-started': GettingStarted,
  'featured-image-from-url': FeaturedImageFromUrl,
  'unsplash-image-search': UnsplashImageSearch,
  'quick-editor': QuickEditor,
  'optimized-images': OptimizedImages,
  'hide-featured-media': HideFeaturedMedia,
  'default-featured-image': DefaultFeaturedImage,
  'modify-post-content': ModifyPostContent,
  'replace-not-found-image': ReplaceNotFoundImage,
  'disable-right-click': DisableRightClick,
  'auto-set-featured-media': AutoSetFeaturedMedia,
  'product-and-category-images': ProductAndCategoryImages,
  'lightbox-and-zoom': LightboxAndZoom,
  'add-image-to-order-email': AddImageToOrderEmail,
  'image-metadata': ImageMetadata,
  'clear-metadata': ClearMetadata,
  'reset-settings': ResetSettings,
  'delete-all-urls': DeleteAllUrls,
  'fifu-api': FifuApi,
  'wp-cli': WpCli,
  'debug-mode': DebugMode,
  'status-page': StatusPage,
  'featured-image-block': FeaturedImageBlock,
  'featured-media-widget': FeaturedMediaWidget,
  'elementor-widget': ElementorWidget,
  'seo-and-social-sharing': SeoAndSocialSharing,
  'forms-and-marketplaces': FormsAndMarketplaces,
  'multilingual-and-duplicated-content': MultilingualAndDuplicatedContent,
  'bulk-editors': BulkEditors,
  'import-and-automation-plugins': ImportAndAutomationPlugins,
  'theme-and-plugin-compatibility': ThemeAndPluginCompatibility,
  'fifu-cloud': FifuCloud,
} satisfies Record<IllustrationKey, ComponentType>;
