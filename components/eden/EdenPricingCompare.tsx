import { EDEN_PRICING } from "@/lib/content/eden-pricing";
import { SITE_NAME } from "@/lib/site";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7.4 5.4 10.3 11.5 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EdenPricingCompare() {
  const { compare } = EDEN_PRICING;

  return (
    <section className="eden-pricing-compare" aria-labelledby="eden-pricing-compare-title">
      <div className="site-container">
        <EdenSectionHeader
          id="eden-pricing-compare-title"
          title={compare.title}
          subhead={compare.eyebrow}
          align="center"
          className="eden-pricing-compare__head"
        />

        <EdenReveal>
          <div className="eden-pricing-compare__panel eden-dash-card">
            <table className="eden-pricing-compare__table">
              <thead>
                <tr>
                  <th scope="col">{compare.columns.feature}</th>
                  <th scope="col">{compare.columns.typical}</th>
                  <th scope="col" className="eden-pricing-compare__basis-col">
                    {SITE_NAME}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.typical}</td>
                    <td className="eden-pricing-compare__basis-col">
                      <span className="eden-pricing-compare__check" aria-hidden>
                        <CheckIcon />
                      </span>
                      {row.basis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </EdenReveal>
      </div>
    </section>
  );
}
