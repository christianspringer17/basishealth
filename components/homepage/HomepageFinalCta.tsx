import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";
import { glpOneAssessmentHref, glpOneAssessmentLabel } from "@/lib/cta";

export function HomepageFinalCta() {
  const { questions, finalCta } = HOMEPAGE_CONTENT;
  const href = glpOneAssessmentHref();
  const label = glpOneAssessmentLabel();

  return (
    <section className="homepage-section homepage-questions">
      <div className="site-container homepage-questions__inner">
        <h2 className="homepage-questions__title">{questions.sectionTitle}</h2>
        <p className="homepage-questions__body">{questions.body}</p>
        <div className="homepage-questions__actions">
          <BasalButton
            href={href}
            variant="accent"
            data-analytics-event="assessment_start"
            data-analytics-label="start_glp_one_assessment"
            data-analytics-location="homepage_final_cta"
            data-analytics-href={href}
          >
            {label}
          </BasalButton>
          <Link href={questions.contactHref} className="homepage-questions__contact">
            {questions.contactCta}
          </Link>
        </div>
        <p className="homepage-questions__microcopy">{finalCta.microcopy}</p>
      </div>
    </section>
  );
}
