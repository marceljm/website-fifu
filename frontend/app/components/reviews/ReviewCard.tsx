import type { DisplayReview } from '../../data/reviews-utils';

export function ReviewCard({
  review,
  headingLevel = 'h3',
  className = '',
}: {
  review: DisplayReview;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}) {
  const Heading = headingLevel;
  return (
    <article className={`${className}testimonial-card`}>
      <img className="testimonial-avatar" src={review.avatar} alt="" width="100" height="100" loading="lazy" />
      <div className="testimonial-copy">
        <Heading>{review.title}</Heading>
        <blockquote>“{review.comment}”</blockquote>
        <p className="testimonial-byline">{review.name}</p>
      </div>
    </article>
  );
}
