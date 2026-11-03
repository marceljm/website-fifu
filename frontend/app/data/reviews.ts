import reviewsJson from './reviews.json';
import {
  prepareReviews,
  topReviews,
  type DisplayReview,
  type ReviewsExport,
} from './reviews-utils';

export const reviewsData: ReviewsExport = reviewsJson;

/** All positive reviews, highest quality score first. */
export function getReviews(): DisplayReview[] {
  return prepareReviews(reviewsData);
}

export function getTopReviews(count = 3): DisplayReview[] {
  return topReviews(reviewsData, count);
}
