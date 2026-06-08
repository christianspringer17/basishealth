import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { glpOneAssessmentHref } from "@/lib/cta";
import { EdenReveal } from "./EdenReveal";

export function EdenValuesSection() {
  const { values } = EDEN_HOMEPAGE;
  const ctaHref = glpOneAssessmentHref();

  return (
    <section className="eden-values-banner" aria-labelledby="eden-values-title">
      <div className="site-container">
        <EdenReveal>
          <div className="eden-values-banner__card eden-dash-card">
            <div className="eden-values-banner__content">
              <h2 id="eden-values-title" className="eden-values-banner__title">
                {values.headline}
              </h2>
              <p className="eden-values-banner__subhead">{values.subhead}</p>

              <ul className="eden-values-banner__chips" aria-label="Care principles">
                {values.badges.map((chip, index) => (
                  <li
                    key={chip}
                    className={`eden-values-banner__chip${index === 0 ? " eden-values-banner__chip--lead" : ""}`}
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <a
                href={ctaHref}
                className="eden-btn eden-btn--primary eden-values-banner__cta"
                data-analytics-event="eden_values_cta"
                data-analytics-label="start_assessment"
                data-analytics-location="eden_values_banner"
                data-analytics-href={ctaHref}
              >
                {values.cta}
              </a>
            </div>
          </div>
        </EdenReveal>
      </div>
    </section>
  );
}
