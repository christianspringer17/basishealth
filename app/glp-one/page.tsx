import { GlpOneFinalCta } from "@/components/marketing/GlpOneFinalCta";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FeaturesList } from "@/components/marketing/FeaturesList";
import { GlpOneHero } from "@/components/marketing/GlpOneHero";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MarketingVisualBlock } from "@/components/marketing/MarketingVisualBlock";
import { MetabolicMarkersSection } from "@/components/marketing/MetabolicMarkersSection";
import { GlpOnePricingSection } from "@/components/marketing/GlpOnePricingSection";
import { GLP_FAQS } from "@/lib/content/faqs";

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
    <MarketingShell showFooterCta={false}>
      <div className="marketing-page glp-one-page">
        <GlpOneHero />

        <section className="glp-one-features section-shell w-full bg-[var(--grey-1)]">
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

        <GlpOnePricingSection className="glp-one-pricing" />

        <MetabolicMarkersSection showCta={false} />

        <section id="faq" className="section-shell w-full scroll-mt-28">
          <div className="site-container w-full">
            <div className="glp-one-faq">
              <FaqAccordion
                title="Questions are good. Let's dive in."
                items={GLP_FAQS}
              />
            </div>
          </div>
        </section>
      </div>

      <GlpOneFinalCta />
    </MarketingShell>
  );
}
