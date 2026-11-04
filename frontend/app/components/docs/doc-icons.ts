import {
  Activity,
  BookOpen,
  Blocks,
  Bug,
  ClipboardList,
  Cloud,
  CodeXml,
  Database,
  Eraser,
  EyeOff,
  FileImage,
  Gauge,
  ImageOff,
  ImagePlus,
  Import,
  Languages,
  LayoutTemplate,
  Link2,
  Mail,
  MousePointerBan,
  PanelRight,
  Puzzle,
  Rocket,
  RotateCcw,
  ScanSearch,
  Share2,
  Sheet,
  ShoppingBag,
  SquarePen,
  Terminal,
  Trash2,
  WandSparkles,
  ZoomIn,
  type LucideIcon,
} from 'lucide-react';

/**
 * Icons available to docs.json. Each guide references one of these keys in its
 * `icon` field. Import icons explicitly (never the whole set) to keep the bundle small.
 */
export const docIcons = {
  activity: Activity,
  blocks: Blocks,
  bug: Bug,
  'clipboard-list': ClipboardList,
  cloud: Cloud,
  'code-xml': CodeXml,
  database: Database,
  eraser: Eraser,
  'eye-off': EyeOff,
  'file-image': FileImage,
  gauge: Gauge,
  'image-off': ImageOff,
  'image-plus': ImagePlus,
  import: Import,
  languages: Languages,
  'layout-template': LayoutTemplate,
  link: Link2,
  mail: Mail,
  'mouse-pointer-ban': MousePointerBan,
  'panel-right': PanelRight,
  puzzle: Puzzle,
  rocket: Rocket,
  'rotate-ccw': RotateCcw,
  'scan-search': ScanSearch,
  share: Share2,
  sheet: Sheet,
  'shopping-bag': ShoppingBag,
  'square-pen': SquarePen,
  terminal: Terminal,
  trash: Trash2,
  'wand-sparkles': WandSparkles,
  'zoom-in': ZoomIn,
} satisfies Record<string, LucideIcon>;

export type DocIconName = keyof typeof docIcons;

/** Falls back to a book icon so a typo in docs.json never breaks the page. */
export function getDocIcon(name: string): LucideIcon {
  return (docIcons as Record<string, LucideIcon>)[name] ?? BookOpen;
}
