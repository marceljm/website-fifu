import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import reviewsJson from '../app/data/reviews.json' with { type: 'json' };
import { prepareReviews, topReviews } from '../app/data/reviews-utils.ts';
const sample = {
  name: 'Aiko Nakamura',
  title: 'Good plugin, very useful',
  comment: 'Good plugin, very useful.',
  quality_score: 5,
  weeks: 14,
  timestamp: '2026-11-01T18:34:28Z',
  posted_at: '2026-07-20T09:02:00Z',
  avatar: '/images/reviews/placeholder.webp',
};
test('prepareReviews sorts by quality and preserves input order for ties', () => {
  const data = {
    reviews: [
      { ...sample, name: 'Aiko Nakamura', quality_score: 7 },
      { ...sample, name: 'Owen Morgan', quality_score: 9 },
      { ...sample, name: 'Léa Moreau', quality_score: 9 },
    ],
  };
  const prepared = prepareReviews(data);
  assert.deepEqual(prepared.map((review) => review.name), [
    'Owen Morgan',
    'Léa Moreau',
    'Aiko Nakamura',
  ]);
});

test('topReviews returns the highest scores first', () => {
  const data = {
    reviews: [1, 2, 3, 4, 5].map((n) => ({
      ...sample,
      name: `R${n}`,
      quality_score: n,
    })),
  };
  assert.deepEqual(
    topReviews(data, 3).map((r) => r.name),
    ['R5', 'R4', 'R3'],
  );
  assert.equal(topReviews({ reviews: [] }, 3).length, 0);
});

test('exported reviews.json is consistent with what the pages need', () => {
  const { reviews } = reviewsJson;
  assert.equal(reviewsJson.count, reviews.length);
  assert.ok(reviews.length >= 200, 'expected the full set of positive reviews');
  const scores = reviews.map((r) => r.quality_score);
  assert.deepEqual(scores, [...scores].sort((a, b) => b - a), 'sorted by quality descending');
  for (const review of reviews) {
    assert.deepEqual(Object.keys(review).sort(), [
      'avatar',
      'comment',
      'name',
      'posted_at',
      'quality_score',
      'timestamp',
      'title',
      'weeks',
    ]);
    assert.ok(review.name && review.title && review.comment);
    assert.doesNotMatch(review.comment, /\n|<[a-z]|@\w/);
    assert.ok(
      existsSync(resolve('public', '.' + review.avatar)),
      `avatar file missing: ${review.avatar}`,
    );
  }
  const names = new Set(reviews.map((r) => r.name));
  assert.equal(names.size, reviews.length, 'fictional names are unique');
});
