import { MediaFrame, BasalButton } from "@/components/landing/ui";
import {
  CHECKOUT_HREF,
  checkoutCtaLabel,
  isCheckoutLive,
  primaryCtaLabel,
} from "@/lib/cta";
import { MEDIA } from "@/lib/media";
import { lowestEffectiveMonthly } from "@/lib/pricing";

export function GlpOneHero() {
  const ctaLabel = isCheckoutLive() ? checkoutCtaLabel() : primaryCtaLabel();

  return (
    <section className="glp-one-hero section-shell w-full">
      <div className="site-container site-grid w-full">
        <div className="glp-one-hero__stack col-span-full md:col-span-16 md:col-start-5">
          <h1 className="glp-one-hero__title text-grey-9">GLP-One™ Tirzepatide</h1>

          <p className="glp-one-hero__lead text-grey-7">
            Clinician-guided care with personalized dosing support, built for long-term
            metabolic health.
          </p>

          <p className="glp-one-hero__price">
            Compounded tirzepatide from ${lowestEffectiveMonthly()}/month on 3-month
            therapy plans
          </p>

          <div className="glp-one-hero__cta">
            <BasalButton
              href={CHECKOUT_HREF}
              data-analytics-event="cta_click"
              data-analytics-label="glp_one_hero_checkout"
              data-analytics-location="glp_one_hero"
              data-analytics-href={CHECKOUT_HREF}
            >
              {ctaLabel}
            </BasalButton>
          </div>

          <p className="glp-one-hero__note">
            GLP-1 therapy through Basis Metabolic after provider review. You&apos;re only
            charged if a provider approves treatment.
          </p>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="intro-product glp-one-hero__product col-span-full md:col-span-16 md:col-start-5">
          <MediaFrame
            src={MEDIA.glpOneProductMockup}
            alt="GLP-One prescription kit with packaging, vial, and syringe"
            aspect="product"
            objectFit="contain"
            surface="transparent"
            rounded="none"
            priority
          />
          <p className="intro-product__disclaimer">
            Includes medication and personalized dosing support when clinically
            appropriate. Images are renderings; actual product may vary by pharmacy
            partner.
          </p>
        </div>
      </div>
    </section>
  );
}
