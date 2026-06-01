"use client";

import { BasalButton, cn } from "@/components/landing/ui";
import {
  CHECKOUT_HREF,
  CTA_LABELS,
  checkoutCtaLabel,
  checkoutUrlForPlan,
  isCheckoutLive,
  WAITLIST_HREF,
} from "@/lib/cta";
import {
  BILLING_TERMS,
  GLP_PRODUCTS,
  max3MonthSavings,
  planId,
  priceDisplay,
  type BillingTerm,
  type ProductTier,
} from "@/lib/pricing";

export type { BillingTerm, ProductTier, PlanId } from "@/lib/pricing";
export { planId } from "@/lib/pricing";

export function BillingTermToggle({
  term,
  onChange,
}: {
  term: BillingTerm;
  onChange: (term: BillingTerm) => void;
}) {
  const maxSavings = max3MonthSavings();

  return (
    <div
      className="mx-auto flex w-full max-w-md flex-col items-center gap-3"
      role="tablist"
      aria-label="Billing term"
    >
      <div className="flex w-full rounded-[18px] border border-[var(--grey-3)] bg-[var(--grey-2)] p-1">
        {BILLING_TERMS.map((option) => {
          const selected = term === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center rounded-[14px] px-3 py-2.5 text-center transition-colors",
                selected
                  ? "bg-white text-grey-9 shadow-sm"
                  : "text-grey-7 hover:text-grey-9",
              )}
            >
              <span className="text-body font-medium">{option.label}</span>
              {option.id === "3-month" && (
                <span className="text-h5 text-[var(--accent-5)]">
                  Save up to ${maxSavings}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {term === "3-month" && (
        <p className="text-body text-center text-grey-7">
          3-month plans are our recommendation — one upfront commitment, full titration
          window, and the best per-month value.
        </p>
      )}
    </div>
  );
}

export function PricingCards({
  term,
  selectedProduct,
  onSelectProduct,
  ctaHref = isCheckoutLive() ? CHECKOUT_HREF : WAITLIST_HREF,
}: {
  term: BillingTerm;
  selectedProduct?: ProductTier;
  onSelectProduct?: (tier: ProductTier) => void;
  ctaHref?: string;
}) {
  const checkoutIsExternal = ctaHref.startsWith("http");
  const interactive = Boolean(onSelectProduct);

  return (
    <div className="grid w-full gap-6 md:grid-cols-2">
      {GLP_PRODUCTS.map((product) => {
        const isSelected = selectedProduct === product.id;
        const display = priceDisplay(product, term);
        const showRecommended =
          term === "3-month" && product.recommendedOn3Month;
        const showPopular = term === "3-month" && product.popularOn3Month;

        return (
          <div
            key={product.id}
            className={cn(
              "relative flex flex-col gap-6 rounded-basal-2xl border p-8 transition-colors",
              isSelected
                ? "border-[var(--grey-7)] bg-[var(--grey-1)]"
                : "border-[var(--grey-3)] bg-[var(--grey-1)]",
              interactive ? "cursor-pointer hover:border-[var(--grey-7)]" : "",
            )}
            onClick={interactive ? () => onSelectProduct?.(product.id) : undefined}
            onKeyDown={
              interactive
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") onSelectProduct?.(product.id);
                  }
                : undefined
            }
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-pressed={interactive ? isSelected : undefined}
          >
            {showPopular && (
              <span className="absolute top-6 right-6 rounded-full border border-[var(--grey-3)] bg-white px-3 py-1 text-h5 text-grey-9">
                Most popular
              </span>
            )}
            {showRecommended && (
              <span
                className={cn(
                  "absolute top-6 rounded-full border border-[var(--grey-3)] bg-white px-3 py-1 text-h5 text-grey-9",
                  showPopular ? "right-36" : "right-6",
                )}
              >
                Best value
              </span>
            )}
            {term === "3-month" && display.savings && display.savings > 0 && (
              <span className="absolute top-6 left-6 rounded-full bg-[var(--accent-1)] px-3 py-1 text-h5 text-[var(--accent-5)]">
                Save ${display.savings}
              </span>
            )}

            <div className={term === "3-month" ? "pt-6" : undefined}>
              <p className="text-h5 text-grey-7">{product.subtitle}</p>
              <h3 className="text-h1-lg text-grey-9">{product.name}</h3>
              <p className="mt-2 text-body text-pretty text-grey-7">{product.description}</p>
            </div>

            <div>
              <p className="text-h1-xl text-grey-9">
                {display.primary}
                {term === "1-month" && (
                  <span className="text-h5 text-grey-7">{display.secondary}</span>
                )}
              </p>
              {term === "3-month" && display.secondary && (
                <p className="mt-1 text-body text-grey-7">{display.secondary}</p>
              )}
              <p className="mt-2 text-h5 text-grey-7">
                Pricing confirmed after clinical review
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-body text-grey-7">
                  <span className="mt-1 text-grey-9" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {!interactive && (
              <BasalButton
                href={
                  checkoutIsExternal
                    ? checkoutUrlForPlan(planId(product.id, term), ctaHref)
                    : ctaHref
                }
                data-analytics-event="cta_click"
                data-analytics-label={`pricing_${product.id}_${term}`}
                data-analytics-location="pricing_cards"
              >
                {checkoutIsExternal ? checkoutCtaLabel() : CTA_LABELS.waitlist}
              </BasalButton>
            )}
          </div>
        );
      })}
    </div>
  );
}
