"use client";

import { useState } from "react";
import {
  BillingTermToggle,
  PricingCards,
  type BillingTerm,
  type ProductTier,
} from "@/components/marketing/PricingCards";
import { trackEvent } from "@/lib/analytics";
import { max3MonthSavings } from "@/lib/pricing";

export function GlpOnePricingSection({ className }: { className?: string }) {
  const [term, setTerm] = useState<BillingTerm>("3-month");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("weightloss");
  const maxSavings = max3MonthSavings();

  function handleTermChange(next: BillingTerm) {
    setTerm(next);
    trackEvent("pricing_plan_click", { term: next });
  }

  function handleProductSelect(tier: ProductTier) {
    setSelectedProduct(tier);
    trackEvent("pricing_plan_click", { product: tier, term });
  }

  return (
    <section
      className={["section-shell section-gap-lg w-full", className].filter(Boolean).join(" ")}
    >
      <div className="site-container site-grid w-full gap-y-8">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">Find out what&apos;s right for you</h2>
          <p className="text-lead max-w-[620px] text-pretty text-grey-7">
            Choose Microdose or Weight Loss, then commit to 3 months for the strongest
            outcomes and lowest effective monthly rate. GLP-1 therapy is available through
            Basis Metabolic for eligible patients after provider review. You&apos;re only
            charged if a provider approves treatment.
          </p>
        </div>

        <div className="col-span-full md:col-span-16 md:col-start-5">
          <BillingTermToggle term={term} onChange={handleTermChange} />

          <div className="glp-one-pricing__cards">
            <PricingCards
              term={term}
              selectedProduct={selectedProduct}
              onSelectProduct={handleProductSelect}
            />
          </div>

          {term === "1-month" ? (
            <p className="mt-8 text-center text-body text-grey-7">
              Most people choose 3 months — save up to ${maxSavings} vs. paying monthly.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
