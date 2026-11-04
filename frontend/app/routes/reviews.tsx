import { Link, useLoaderData } from 'react-router';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { Page } from '../components/layout/SiteLayout';
import { getReviews, reviewsData } from '../data/reviews';

export function meta() {
  return [
    { title: 'FIFU WordPress Plugin Reviews | Top-Rated Reviews on WordPress.org' },
    {
      name: 'description',
      content: `Read ${reviewsData.count ?? reviewsData.reviews.length} five-star reviews of the FIFU WordPress plugin from WordPress.org users, ranked by comment quality.`,
    },
  ];
}

export async function loader() {
  return { reviews: getReviews() };
}

export default function Reviews() {
  const { reviews } = useLoaderData<typeof loader>();
  return (
    <Page eyebrow="CUSTOMER REVIEWS" title="What WordPress users say about FIFU.">
      <p className="review-attribution">
        Genuine five-star reviews from WordPress.org, ranked by comment quality. Reviewer
        names and portraits are changed for privacy; the words are theirs.
      </p>
      <div className="cards testimonial-grid">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            review={review}
            headingLevel="h2"
            className="simplecard "
          />
        ))}
      </div>
      <div className="reviews-cta">
        <p>Want a clearer view of what’s included?</p>
        <Link className="button" to="/pricing/">
          Compare plans
        </Link>
      </div>
    </Page>
  );
}
