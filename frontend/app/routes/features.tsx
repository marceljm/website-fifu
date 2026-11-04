import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
import { featureCards } from '../data/fifu-features';
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
  return (
    <Page eyebrow="THE WORDPRESS PLUGIN TOOLKIT" title="Features for a clearer workflow.">
      <p>Explore the plugin tools and choose what fits the way you work in WordPress.</p>
      <div className="cards">
        {featureCards.map(({ title, description, Icon }) => (
          <Link
            className="simplecard catalog-card feature-catalog-card"
            to="/features/smart-workflows/"
            key={title}
          >
            <span className="catalog-card-heading">
              <span className="catalog-icon" aria-hidden="true">
                <Icon size={23} strokeWidth={1.8} />
              </span>
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>Learn More</b>
          </Link>
        ))}
      </div>
    </Page>
  );
}
