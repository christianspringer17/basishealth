import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { glpOneAssessmentHref } from "@/lib/cta";
import { MEDIA } from "@/lib/media";
import { EdenReveal } from "./EdenReveal";

const plusIcon = (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
    <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z" />
  </svg>
);

export function EdenGlpOneStatement() {
  const { glpOneStatement } = EDEN_HOMEPAGE;
  const ctaHref = glpOneAssessmentHref();

  return (
    <section id="eden-glp-statement" className="eden-glp-statement" aria-labelledby="eden-glp-statement-heading">
      <EdenReveal className="eden-glp-statement__reveal">
        <div className="eden-glp-statement__content site-container">
          <div className="eden-glp-statement__headline">
            <h2 id="eden-glp-statement-heading" className="eden-glp-statement__title">
              {glpOneStatement.title}
            </h2>
          </div>

          <p className="eden-glp-statement__body">{glpOneStatement.body}</p>

          <div className="eden-glp-statement__cta">
            <a
              href={ctaHref}
              className="eden-btn eden-btn--pill"
              data-analytics-event="cta_click"
              data-analytics-label="glp_one_final_primary"
              data-analytics-location="eden_glp_statement"
              data-analytics-href={ctaHref}
            >
              <span className="eden-btn__label">{glpOneStatement.ctaLabel}</span>
              <span className="eden-btn__pill" aria-hidden>
                {plusIcon}
              </span>
            </a>
          </div>
        </div>

        <figure className="eden-glp-statement__figure">
          <img
            src={MEDIA.glpOneHandVialWhite}
            alt="Hand holding a GLP-One tirzepatide injection vial"
            className="eden-glp-statement__hand"
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </EdenReveal>
    </section>
  );
}
