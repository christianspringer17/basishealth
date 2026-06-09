"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { EDEN_PRICING } from "@/lib/content/eden-pricing";
import { glpOneAssessmentHref, glpOneAssessmentLabel } from "@/lib/cta";
import {
  COMMITMENT_TERMS,
  type CommitmentTermId,
  commitmentMonthly,
  commitmentTotal,
  commitmentYearlySavings,
  termById,
} from "@/lib/pricing";
import { EdenReveal } from "./EdenReveal";

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

export function EdenPricingPlans() {
  const [term, setTerm] = useState<CommitmentTermId>("annual");
  const activeTerm = termById(term);
  const ctaHref = glpOneAssessmentHref();
  const ctaLabel = glpOneAssessmentLabel();

  return (
    <section className="eden-pricing" aria-labelledby="eden-pricing-plans-title">
      <div className="site-container">
        <h2 id="eden-pricing-plans-title" className="sr-only">
          Plans and pricing
        </h2>

        <EdenReveal>
          <div className="eden-pricing__toggle-wrap">
            <p className="eden-pricing__toggle-label">{EDEN_PRICING.toggleLabel}</p>
            <div
              className="eden-pricing__toggle"
              role="tablist"
              aria-label="Billing commitment"
            >
              {COMMITMENT_TERMS.map((t) => {
                const isActive = t.id === term;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`eden-pricing__toggle-btn${isActive ? " eden-pricing__toggle-btn--active" : ""}`}
                    onClick={() => {
                      setTerm(t.id);
                      trackEvent("pricing_term_select", {
                        label: t.id,
                        location: "pricing_page",
                      });
                    }}
                  >
                    {t.label}
                    {t.badge ? (
                      <span className="eden-pricing__toggle-badge">{t.badge}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </EdenReveal>

        <EdenReveal delay={60}>
          <div className="eden-pricing__grid">
            {EDEN_PRICING.cards.map((card) => {
              const monthly = commitmentMonthly(card.tier, term);
              const total = commitmentTotal(card.tier, term);
              const savings = commitmentYearlySavings(card.tier, term);
              const isMonthly = term === "monthly";

              return (
                <article
                  key={card.tier}
                  className="eden-pricing-card eden-dash-card"
                  aria-label={`${card.name}, ${activeTerm.label} plan`}
                >
                  <span
                    className={`eden-pricing-card__badge${
                      "badgeTone" in card && card.badgeTone === "dark"
                        ? " eden-pricing-card__badge--dark"
                        : ""
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="eden-pricing-card__name">{card.name}</h3>
                  <p className="eden-pricing-card__subtitle">{card.subtitle}</p>

                  <div className="eden-pricing-card__price-row" aria-live="polite">
                    {!isMonthly ? (
                      <span className="eden-pricing-card__from">From</span>
                    ) : null}
                    <span className="eden-pricing-card__price">${monthly}</span>
                    <span className="eden-pricing-card__per">/month</span>
                  </div>

                  <p className="eden-pricing-card__billed" aria-live="polite">
                    {isMonthly
                      ? "No long-term commitment"
                      : `$${total.toLocaleString()} ${activeTerm.billedNote}`}
                  </p>

                  {savings > 0 ? (
                    <p className="eden-pricing-card__savings" aria-live="polite">
                      Save ${savings.toLocaleString()}/year
                      <span> compared to monthly</span>
                    </p>
                  ) : (
                    <p className="eden-pricing-card__savings eden-pricing-card__savings--placeholder">
                      Switch to a longer plan to save
                    </p>
                  )}

                  <ul className="eden-pricing-card__features">
                    {card.features.map((feature) => (
                      <li key={feature}>
                        <span className="eden-pricing-card__check" aria-hidden>
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ctaHref}
                    className="eden-btn eden-btn--primary eden-btn--lg eden-pricing-card__cta"
                    data-analytics-event="pricing_card_cta"
                    data-analytics-label={`${card.tier}_${term}`}
                    data-analytics-location="pricing_page"
                    data-analytics-href={ctaHref}
                  >
                    {ctaLabel}
                  </a>

                  <p className="eden-pricing-card__footnote">{EDEN_PRICING.cardFootnote}</p>
                </article>
              );
            })}
          </div>
        </EdenReveal>

        <EdenReveal delay={100}>
          <p className="eden-pricing__cancel-note">{EDEN_PRICING.cancelNote}</p>
        </EdenReveal>
      </div>
    </section>
  );
}
