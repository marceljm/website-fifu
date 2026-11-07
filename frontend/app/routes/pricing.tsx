import { Link } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'FIFU Pricing | License Keys' },
    {
      name: 'description',
      content:
        'Compare FIFU yearly and one-time license plans, volume discounts, and license activation terms.',
    },
  ];
}
export default function Pricing() {
  return (
    <Page eyebrow="SIMPLE, HONEST PRICING" title="Choose the right plan for your site.">
      <p>
        Buy one or more license keys now. The free plan supports unlimited sites across
        unlimited domains; each paid license supports unlimited sites across two different
        domains.
      </p>
      <div className="cards">
        <article className="plan">
          <small>FREE PLUGIN</small>
          <h2>Get started</h2>
          <strong>
            $0 <small>/ free</small>
          </strong>
          <p>Use FIFU on unlimited WordPress sites across unlimited domains.</p>
          <p>
            ✓ Unlimited WordPress sites
            <br />
            ✓ Unlimited domains
            <br />✓ No support
            <br />✓ Core workflows
            <br />✓ Essential insights
          </p>
          <Link className="button" to="/checkout/?plan=free">
            Try free
          </Link>
        </article>
        <article className="plan featured">
          <small>PRO · ANNUAL SITE LICENSE</small>
          <h2>Make more possible</h2>
          <strong>
            €29.90 <small>/ year</small>
          </strong>
          <p>Support and updates for one year. Renewal is optional.</p>
          <p>
            ✓ Unlimited WordPress sites across 2 different domains
            <br />
            ✓ Support and updates for 1 year
            <br />✓ Support for 1 site
            <br />✓ Use FIFU after the year without updates or support
          </p>
          <Link className="button" to="/checkout/?plan=annual">
            Get yearly license
          </Link>
        </article>
        <article className="plan">
          <small>PRO · LIFETIME</small>
          <h2>One-time purchase</h2>
          <strong>
            €89.90 <small>/ one-time</small>
          </strong>
          <p>One payment for ongoing FIFU support and updates.</p>
          <p>
            ✓ Unlimited WordPress sites across 2 different domains
            <br />
            ✓ Support and updates forever
            <br />✓ Support for 1 site
            <br />✓ No renewal required
          </p>
          <Link className="button" to="/checkout/?plan=lifetime">
            Choose one-time plan
          </Link>
        </article>
      </div>
      <section className="section" style={{ padding: '56px 0' }}>
        <h2>License key volume discounts</h2>
        <p>
          Discounts apply to yearly and one-time plans. Before the discount, each license
          costs €29.90 per year or €89.90 one-time.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Number of keys</th>
              <th scope="col">Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>—</td>
            </tr>
            <tr>
              <td>5</td>
              <td>20% off</td>
            </tr>
            <tr>
              <td>10</td>
              <td>30% off</td>
            </tr>
            <tr>
              <td>50</td>
              <td>40% off</td>
            </tr>
            <tr>
              <td>100</td>
              <td>50% off</td>
            </tr>
          </tbody>
        </table>
        <h2>License activation</h2>
        <p>
          Paid plans let you activate FIFU on unlimited WordPress sites across two
          different domains: one production domain and one development or debugging
          domain. The production domain includes its subdomains and subdirectories (for
          example, example.com, www.example.com, shop.example.com, and example.com/shop).
          The development domain is for development or debugging only and is expected to
          use the same theme and plugins as the production site. Technical support is
          limited to one site per license key.
        </p>
      </section>
      <p>Checkout preview only; payment information is not collected.</p>
      <Link className="text-link" to="/compare/">
        Compare plans →
      </Link>
    </Page>
  );
}
