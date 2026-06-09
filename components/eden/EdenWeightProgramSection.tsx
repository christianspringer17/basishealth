import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { glpOneAssessmentHref } from "@/lib/cta";
import {
  EdenIconMedication,
  EdenIconPricing,
  EdenIconProvider,
  EdenIconTrendDown,
} from "./eden-icons";
import { EdenReveal } from "./EdenReveal";

const BULLET_ICONS = {
  provider: EdenIconProvider,
  medication: EdenIconMedication,
  pricing: EdenIconPricing,
} as const;

export function EdenWeightProgramSection() {
  const { weightProgram } = EDEN_HOMEPAGE;
  const ctaHref = glpOneAssessmentHref();

  return (
    <section className="eden-wl-program" aria-labelledby="eden-wl-program-title">
      <div className="site-container">
        <EdenReveal>
          <div className="eden-wl-program__layout">
            <div className="eden-wl-program__copy">
              <h2 id="eden-wl-program-title" className="eden-wl-program__headline">
                {weightProgram.headline}{" "}
                <span className="eden-wl-program__headline-accent">{weightProgram.headlineAccent}</span>
              </h2>

              <ul className="eden-wl-program__bullets">
                {weightProgram.bullets.map((item) => {
                  const Icon = BULLET_ICONS[item.icon];
                  return (
                    <li key={item.text}>
                      <span className="eden-wl-program__bullet-icon" aria-hidden>
                        <Icon />
                      </span>
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="eden-wl-program__actions">
                <a
                  href={ctaHref}
                  className="eden-btn eden-btn--primary eden-btn--lg"
                  data-analytics-event="eden_weight_program_cta"
                  data-analytics-label="start_assessment"
                  data-analytics-location="eden_weight_program"
                  data-analytics-href={ctaHref}
                >
                  {weightProgram.primaryCta}
                </a>
                <a
                  href={ctaHref}
                  className="eden-btn eden-btn--secondary eden-btn--lg"
                  data-analytics-event="eden_weight_program_cta"
                  data-analytics-label="check_eligibility"
                  data-analytics-location="eden_weight_program"
                  data-analytics-href={ctaHref}
                >
                  {weightProgram.secondaryCta}
                </a>
              </div>

              <p className="eden-wl-program__disclaimer">{weightProgram.disclaimer}</p>
            </div>

            <div className="eden-wl-program__visual">
              <img
                src={weightProgram.image}
                alt={weightProgram.imageAlt}
                className="eden-wl-program__photo"
                width={520}
                height={640}
                loading="lazy"
              />
              <div className="eden-wl-program__stat" aria-hidden>
                <span className="eden-wl-program__stat-icon">
                  <EdenIconTrendDown />
                </span>
                <span className="eden-wl-program__stat-label">{weightProgram.statBadge.label}</span>
                <span className="eden-wl-program__stat-value">
                  {weightProgram.statBadge.value}
                  <span className="eden-wl-program__stat-unit"> {weightProgram.statBadge.unit}</span>
                </span>
              </div>
            </div>
          </div>
        </EdenReveal>
      </div>
    </section>
  );
}
