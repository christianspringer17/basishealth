import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";
import { glpOneAssessmentHref, glpOneAssessmentLabel } from "@/lib/cta";
import { lowestEffectiveMonthly } from "@/lib/pricing";

export function HomepageHero() {
  const { hero } = HOMEPAGE_CONTENT;
  const primaryHref = glpOneAssessmentHref();
  const primaryLabel = glpOneAssessmentLabel();
  const fromPrice = lowestEffectiveMonthly();

  return (
    <section className="homepage-hero">
      <div className="homepage-hero__center site-container">
        <p className="homepage-hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="homepage-hero__display-headline">{hero.headline}</h1>
        <p className="homepage-hero__subhead">{hero.subhead}</p>
        <p className="homepage-hero__price-line">
          From ${fromPrice}/mo on 3-month programs
        </p>
        <div className="homepage-hero__actions">
          <BasalButton
            href={primaryHref}
            data-analytics-event="hero_cta_click"
            data-analytics-label="start_glp_one_assessment"
            data-analytics-location="homepage_hero_primary"
            data-analytics-href={primaryHref}
          >
            {primaryLabel}
          </BasalButton>
        </div>
        <p className="homepage-hero__microcopy">{hero.microcopy}</p>
      </div>

      <Link href="#best-sellers" className="homepage-hero__scroll">
        <span>Scroll Down</span>
        <span className="homepage-hero__scroll-icon" aria-hidden>
          ↓
        </span>
      </Link>
    </section>
  );
}
