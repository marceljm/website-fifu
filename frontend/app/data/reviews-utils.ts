/**
 * Helpers for the WordPress.org reviews exported by `manage.py import_reviews`.
 *
 * The export is already filtered to positive reviews and sorted by quality,
 * with the original listing order used for ties.
 */

export interface ExportedReview {
  name: string;
  title: string;
  comment: string;
  quality_score: number;
  /** Age in weeks at scrape time (1 month = 4 weeks, 1 year = 48 weeks). */
  weeks: number;
  /** When the review was scraped (ISO-8601, UTC). */
  timestamp: string;
  posted_at: string | null;
  /** Public path to the small portrait generated from avatar_traits. */
  avatar: string;
  avatar_traits: AvatarTraits;
}

export interface AvatarTraits {
  presentation: 'woman' | 'man';
  cultural_background: string;
  age_range: string;
  skin_tone: string;
  hair_style: string;
  hair_color: string;
  beard_style: string;
  eye_color: string;
  nose_shape: string;
  background: string;
  background_type: string;
  clothing: string;
  description: string;
}

export interface ReviewsExport {
  reviews: ExportedReview[];
  count?: number;
  scraped_at?: string | null;
  generated_at?: string;
  placeholder?: string;
}

export type DisplayReview = ExportedReview;

export function prepareReviews(data: ReviewsExport): DisplayReview[] {
  return [...data.reviews].sort((a, b) => b.quality_score - a.quality_score);
}

export function topReviews(data: ReviewsExport, count: number): DisplayReview[] {
  return prepareReviews(data).slice(0, count);
}
