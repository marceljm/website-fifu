import { useState } from 'react';
import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import {
  featureCards,
  featureCategories,
  featureRelevanceOrder,
  fifuFeatureSlug,
} from '../data/fifu-features';

const featureRelevanceRank = new Map<string, number>(
  featureRelevanceOrder.map((title, index) => [title, index] as const),
);
const featureCategoryRank = new Map<string, number>(
  featureCategories.map((category, index) => [category, index] as const),
);
const compareCardsByRelevance = (
  left: (typeof featureCards)[number],
  right: (typeof featureCards)[number],
) =>
  (featureRelevanceRank.get(left.title) ?? Number.MAX_SAFE_INTEGER) -
  (featureRelevanceRank.get(right.title) ?? Number.MAX_SAFE_INTEGER);
const compareCardsByCategoryThenRelevance = (
  left: (typeof featureCards)[number],
  right: (typeof featureCards)[number],
) =>
  (featureCategoryRank.get(left.category) ?? Number.MAX_SAFE_INTEGER) -
    (featureCategoryRank.get(right.category) ?? Number.MAX_SAFE_INTEGER) ||
  compareCardsByRelevance(left, right);
const allFeatureCardsByCategory = [...featureCards].sort(
  compareCardsByCategoryThenRelevance,
);
const cardsByCategory = (category: string) =>
  featureCards.filter((card) => card.category === category);
export function meta() {
  return [
    { title: 'WordPress Plugin Features | DemoSuite' },
    {
      name: 'description',
      content:
        'Explore the DemoSuite WordPress plugin features and find the tools that fit your site workflow.',
    },
  ];
}
export default function Features() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const renderCard = (
    { title, category, description, Icon }: (typeof featureCards)[number],
    showCategoryBadge = false,
  ) => {
    const to = `/features/${fifuFeatureSlug(title)}/`;
    return (
      <article
        className={`simplecard catalog-card feature-catalog-card${showCategoryBadge ? ' has-category-badge' : ''}`}
        key={title}
      >
        <div className="feature-card-icon-link" aria-hidden="true">
          <span className="catalog-card-heading">
            <span className="catalog-icon" aria-hidden="true">
              <Icon size={23} strokeWidth={1.8} />
            </span>
          </span>
        </div>
        {showCategoryBadge && (
          <button
            className="feature-category-badge"
            type="button"
            aria-label={`Show ${category} features`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        )}
        <Link className="feature-card-body" to={to}>
          <h2>{title}</h2>
          <p>{description}</p>
          <b>Learn More</b>
        </Link>
      </article>
    );
  };

  return (
    <Page eyebrow="THE WORDPRESS PLUGIN TOOLKIT" title="Features for a clearer workflow.">
      <p>Explore the plugin tools and choose what fits the way you work in WordPress.</p>
      <div
        className="feature-category-filters"
        role="group"
        aria-label="Filter features by category"
      >
        <button
          type="button"
          className="feature-category-filter"
          aria-pressed={activeCategory === 'All'}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {featureCategories.map((category) => (
          <button
            type="button"
            className="feature-category-filter"
            aria-pressed={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="cards">
        {activeCategory === 'All'
          ? allFeatureCardsByCategory.map((card) => renderCard(card, true))
          : cardsByCategory(activeCategory).map((card) => renderCard(card))}
      </div>
    </Page>
  );
}
