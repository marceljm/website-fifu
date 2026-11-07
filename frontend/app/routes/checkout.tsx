import { Link } from 'react-router';
import { useSearchParams } from 'react-router';
import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'WordPress Plugin Order Preview | DemoSuite' },
    {
      name: 'description',
      content:
        'Review a simulated DemoSuite WordPress plugin order. No payment details are collected.',
    },
  ];
}
export default function Checkout() {
  let [q, setQ] = useSearchParams();
  let plan = q.get('plan') || 'annual',
    n =
      plan === 'free'
        ? 1
        : Math.min(500, Math.max(1, Math.floor(Number(q.get('quantity') || 1)))),
    unit = plan === 'lifetime' ? 89.9 : plan === 'free' ? 0 : 29.9,
    discount = n >= 100 ? 0.5 : n >= 50 ? 0.4 : n >= 10 ? 0.3 : n >= 5 ? 0.2 : 0,
    total = Math.round(unit * n * (1 - discount) * 100) / 100;
  return (
    <Page eyebrow="PLUGIN ORDER PREVIEW" title="Review your plugin plan.">
      <p>
        This is a sample checkout flow. No payment details are collected and no charge
        will be made.
      </p>
      <div className="cards">
        <div className="plan">
          <h2>Order summary</h2>
          <label>
            Plan
            <select
              value={plan}
              onChange={(e) => setQ({ plan: e.target.value, quantity: String(n) })}
            >
              <option value="annual">Yearly · €29.90/license/year</option>
              <option value="lifetime">One-Time · €89.90/license</option>
              <option value="free">Free plugin · €0</option>
            </select>
          </label>
          {plan !== 'free' && (
            <label>
              License keys
              <input
                type="number"
                min="1"
                max="500"
                value={n}
                onChange={(e) =>
                  setQ({
                    plan,
                    quantity: String(
                      Math.min(500, Math.max(1, Math.floor(Number(e.target.value) || 1))),
                    ),
                  })
                }
              />
            </label>
          )}
          <p>
            {n} × €{unit.toFixed(2)}{' '}
            {discount > 0 && `− ${discount * 100}% volume discount`}
          </p>
          <h2>
            Total: €{total.toFixed(2)} {plan === 'annual' && '/ year'}
          </h2>
          <p>Payment collection is disabled in this sample flow.</p>
          <p>Example checkout only. Connect your payment provider before selling.</p>
          <Link className="button" to="/checkout/demo-confirmation/">
            Complete sample order
          </Link>
        </div>
      </div>
    </Page>
  );
}
