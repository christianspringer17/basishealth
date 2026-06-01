import Image from "next/image";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FeaturesList } from "@/components/marketing/FeaturesList";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MarketingVisualBlock } from "@/components/marketing/MarketingVisualBlock";
import { MetabolicMarkersSection } from "@/components/marketing/MetabolicMarkersSection";
import { GlpOnePricingSection } from "@/components/marketing/GlpOnePricingSection";
import { BasalButton } from "@/components/landing/ui";
import { GLP_FAQS } from "@/lib/content/faqs";
import {
  CHECKOUT_HREF,
  checkoutCtaLabel,
  isCheckoutLive,
  primaryCtaLabel,
} from "@/lib/cta";
import { MEDIA } from "@/lib/media";
import { lowestEffectiveMonthly } from "@/lib/pricing";
import { ROUTES } from "@/lib/routes";

const GLP_FEATURES = [
  "Eligibility screening and clinician review",
  "Personalized GLP-1 protocol within Basis Metabolic",
  "Ongoing adaptive care",
  "Metabolic literacy and support",
];

export const metadata = {
  title: "GLP-One",
  description:
    "GLP-1 therapy through Basis Metabolic — Microdose and Weight Loss tiers with 1- and 3-month plans from Basis.",
};

export default function GlpOnePage() {
  return (
    <MarketingShell>
      <div className="marketing-page">
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full">
            <header className="editorial-page-hero col-span-full md:col-span-18 md:col-start-4">
              <p className="text-h5 text-grey-7">Basis Metabolic</p>
              <h1 className="text-h1-xl text-pretty text-grey-9">GLP-One™ Tirzepatide</h1>
              <p className="text-subtitle max-w-[760px] text-pretty text-grey-7">
                GLP-1 therapy may be included as part of a Basis Metabolic protocol when
                clinically appropriate. Clinician-guided care with personalized dosing
                support, built for long-term metabolic health.
              </p>
              <p className="text-body text-grey-7">
                Compounded tirzepatide from ${lowestEffectiveMonthly()}/month on 3-month
                therapy plans
              </p>
              <p className="text-body text-pretty text-grey-7">
                GLP-1 therapy is available through Basis Metabolic for eligible members
                after provider review. Membership is required and starts at $60/month.
                Access to therapy is subject to provider review, eligibility, pharmacy
                availability, and applicable regulations.
              </p>
              <div className="pt-2">
                <BasalButton
                  href={CHECKOUT_HREF}
                  data-analytics-event="cta_click"
                  data-analytics-label="glp_one_hero_checkout"
                  data-analytics-location="glp_one_hero"
                  data-analytics-href={CHECKOUT_HREF}
                >
                  {isCheckoutLive() ? checkoutCtaLabel() : primaryCtaLabel()}
                </BasalButton>
              </div>
            </header>
          </div>

          <div className="site-container site-grid w-full">
            <div className="col-span-full flex justify-center md:col-span-12 md:col-start-7">
              <div className="editorial-figure editorial-figure--product bg-white">
                <Image
                  src={MEDIA.intro}
                  alt="GLP-One product — tirzepatide protocol supplies"
                  fill
                  className="object-contain p-4 md:p-6"
                  sizes="(max-width: 860px) 320px, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell w-full bg-[var(--grey-1)]">
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-16 md:col-start-5">
              <FeaturesList
                intro="A clinician-supervised GLP-1 protocol within Basis Metabolic—personalized dosing, ongoing adjustments, and continuous care when clinically appropriate."
                items={GLP_FEATURES}
              />
            </div>
          </div>
        </section>

        <MarketingVisualBlock ctaHref="#faq" ctaLabel="See common questions" />

        <GlpOnePricingSection />

        <MetabolicMarkersSection showCta={false} />

        <section id="faq" className="section-shell w-full scroll-mt-28">
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-14 md:col-start-6">
              <FaqAccordion
                title="Questions are good. Let's dive in."
                items={GLP_FAQS}
              />
            </div>
          </div>
        </section>
      </div>

      <ConversionBand
        secondaryLabel="How it works"
        secondaryHref={ROUTES.aboutHowItWorks}
      />
    </MarketingShell>
  );
}
