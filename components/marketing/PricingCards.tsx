"use client";

import { cn } from "@/components/landing/ui";
import { MEDIA } from "@/lib/media";
import {
  BILLING_TERMS,
  GLP_PRODUCTS,
  max3MonthSavings,
  monthlyPillPrice,
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
}: {
  term: BillingTerm;
  selectedProduct?: ProductTier;
  onSelectProduct?: (tier: ProductTier) => void;
}) {
  const interactive = Boolean(onSelectProduct);

  return (
    <div className="pricing-cards-product">
      {GLP_PRODUCTS.map((product) => {
        const isSelected = selectedProduct === product.id;

        return (
          <div key={product.id} className="pricing-card-product-wrap">
            <article
              className={cn(
                "pricing-card-product",
                isSelected && "pricing-card-product--selected",
                interactive && "pricing-card-product--interactive",
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
              <p className="pricing-card-product-label">{product.cardLabel}</p>
              <div className="pricing-card-product__media">
                {/* Native img — preserves PNG transparency; file: public/images/glp-one-pricing-vial.png */}
                <img
                  src={MEDIA.glpOnePricingVial}
                  alt=""
                  decoding="async"
                  draggable={false}
                  className="pricing-card-product__vial"
                />
              </div>

              <div className="pricing-card-product__headings">
                <h3 className="pricing-card-product__headline">{product.cardHeadline}</h3>
                <p className="pricing-card-product__subtitle">{product.cardSubtitle}</p>
              </div>

              <p className="pricing-card-product__desc">
                <span>{product.description}</span>
                <button
                  type="button"
                  className="pricing-card-product__hint"
                  aria-label={`More about ${product.cardHeadline}`}
                  title={product.tooltip}
                  onClick={(e) => e.stopPropagation()}
                >
                  ?
                </button>
              </p>

              <p className="pricing-card-product__price">
                {monthlyPillPrice(product, term)}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
}
