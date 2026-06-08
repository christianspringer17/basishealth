import Link from "next/link";

import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";

import { glpOneAssessmentHref } from "@/lib/cta";
import { lowestEffectiveMonthly } from "@/lib/pricing";

export function EdenHero() {
  const { hero } = EDEN_HOMEPAGE;
  const ctaHref = glpOneAssessmentHref();
  const fromPrice = lowestEffectiveMonthly();

  return (
    <section id="hero" className="eden-hero-storefront">
      <div className="eden-hero-storefront__layout site-container">
        <div className="eden-hero-storefront__copy">
          <p className="eden-hero-storefront__chip eden-hero-enter eden-hero-enter--1">
            From <strong>${fromPrice}</strong>/mo on 3-month programs
          </p>
          <h1 className="eden-hero-storefront__headline eden-hero-enter eden-hero-enter--2">
            {hero.headline}
          </h1>
          <p className="eden-hero-storefront__subhead eden-hero-enter eden-hero-enter--3">
            {hero.subhead}
          </p>

          <div className="eden-hero-storefront__actions eden-hero-enter eden-hero-enter--4">
            <a
              href={ctaHref}
              className="eden-btn eden-btn--primary eden-btn--lg"
              data-analytics-event="hero_cta_click"
              data-analytics-label="start_glp_one_assessment"
              data-analytics-location="eden_hero_primary"
              data-analytics-href={ctaHref}
            >
              {hero.cta}
            </a>
            <Link
              href="#menu"
              className="eden-btn eden-btn--secondary eden-btn--lg"
              data-analytics-event="secondary_cta_click"
              data-analytics-label="view_treatments"
              data-analytics-location="eden_hero_secondary"
            >
              {hero.secondaryCta}
            </Link>
          </div>

          <p className="eden-hero-storefront__microcopy eden-hero-enter eden-hero-enter--5">
            {hero.microcopy}
          </p>

          <ul className="eden-hero-storefront__trust eden-hero-enter eden-hero-enter--6" aria-label="Trust highlights">
            {hero.trustStrip.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
