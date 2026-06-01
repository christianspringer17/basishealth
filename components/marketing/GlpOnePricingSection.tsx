"use client";

import { useState } from "react";
import { BasalButton } from "@/components/landing/ui";
import {
  BillingTermToggle,
  planId,
  PricingCards,
  type BillingTerm,
  type ProductTier,
} from "@/components/marketing/PricingCards";
import { trackEvent } from "@/lib/analytics";
import {
  CHECKOUT_HREF,
  checkoutCtaLabel,
  checkoutUrlForPlan,
  isCheckoutLive,
  primaryCtaLabel,
  WAITLIST_HREF,
} from "@/lib/cta";
import { max3MonthSavings, productByTier } from "@/lib/pricing";

export function GlpOnePricingSection() {
  const [term, setTerm] = useState<BillingTerm>("3-month");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("weightloss");
  const checkoutIsExternal = isCheckoutLive();
  const activePlanId = planId(selectedProduct, term);
  const primaryHref = checkoutIsExternal
    ? checkoutUrlForPlan(activePlanId, CHECKOUT_HREF)
    : WAITLIST_HREF;
  const product = productByTier(selectedProduct);
  const maxSavings = max3MonthSavings();

  function handleTermChange(next: BillingTerm) {
    setTerm(next);
    trackEvent("pricing_plan_click", { term: next });
  }

  function handleProductSelect(tier: ProductTier) {
    setSelectedProduct(tier);
    trackEvent("pricing_plan_click", { product: tier, term });
  }

  function handleCheckoutClick() {
    if (checkoutIsExternal) {
      trackEvent("checkout_start", {
        plan: activePlanId,
        location: "glp_one_pricing",
      });
    }
  }

  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full gap-y-12">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">Therapy tiers within Basis Metabolic</h2>
          <p className="text-lead max-w-[620px] text-pretty text-grey-7">
            Membership is required. When clinically appropriate, choose a GLP-1 therapy tier
            — pricing and availability may vary based on eligibility, provider review,
            pharmacy, and applicable regulations.
          </p>
        </div>

        <div className="col-span-full md:col-span-18 md:col-start-4">
          <BillingTermToggle term={term} onChange={handleTermChange} />

          <div className="mt-10">
            <PricingCards
              term={term}
              selectedProduct={selectedProduct}
              onSelectProduct={handleProductSelect}
              ctaHref={checkoutIsExternal ? CHECKOUT_HREF : WAITLIST_HREF}
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <BasalButton
              href={primaryHref}
              onClick={handleCheckoutClick}
              data-analytics-event="cta_click"
              data-analytics-label={
                checkoutIsExternal ? "glp_one_checkout" : "glp_one_waitlist"
              }
              data-analytics-location="glp_one_pricing"
              data-analytics-href={primaryHref}
            >
              {checkoutIsExternal ? checkoutCtaLabel() : primaryCtaLabel()}
              {checkoutIsExternal
                ? ` — ${product.name.replace("GLP-One ", "")}, ${term}`
                : ""}
            </BasalButton>
            {term === "1-month" && (
              <p className="text-body text-center text-grey-7">
                Most members choose 3 months — save up to ${maxSavings} vs. paying monthly.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
