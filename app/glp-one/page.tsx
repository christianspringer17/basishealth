import Image from "next/image";
import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FeaturesList } from "@/components/marketing/FeaturesList";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MarketingVisualBlock } from "@/components/marketing/MarketingVisualBlock";
import { MetabolicMarkersSection } from "@/components/marketing/MetabolicMarkersSection";
import { GlpOnePricingSection } from "@/components/marketing/GlpOnePricingSection";
import { BasalButton } from "@/components/landing/ui";
import { GLP_FAQS } from "@/lib/content/faqs";
import { metabolicProtocol } from "@/lib/content/protocols";
import {
  CHECKOUT_HREF,
  checkoutCtaLabel,
  isCheckoutLive,
  primaryCtaHref,
  primaryCtaLabel,
} from "@/lib/cta";
import { THERAPY_DISCLAIMER } from "@/lib/positioning";
import { MEDIA } from "@/lib/media";
import { lowestEffectiveMonthly } from "@/lib/pricing";
import { ROUTES } from "@/lib/routes";

const GLP_FEATURES = [
  "Eligibility screening and clinician review",
  "Personalized GLP-1 protocol within Basis Metabolic",
  "Ongoing adaptive care and quarterly recalibration",
  "Progress tracking through your member portal",
];

export const metadata = {
  title: "GLP-One — Basis Metabolic",
  description:
    "GLP-1 therapy may be part of a Basis Metabolic protocol when clinically appropriate. Membership required; therapy tiers from Basis Health.",
};

export default function GlpOnePage() {
  const protocol = metabolicProtocol();

  return (
    <MarketingShell>
      <div className="marketing-page">
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full">
            <header className="editorial-page-hero col-span-full md:col-span-18 md:col-start-4">
              <p className="text-h5 tracking-wide text-grey-7 uppercase">
                {protocol.name} · Therapy detail
              </p>
              <h1 className="text-h1-xl text-pretty text-grey-9">GLP-One™ Tirzepatide</h1>
              <p className="text-subtitle max-w-[760px] text-pretty text-grey-7">
                GLP-1 therapy may be included as part of a Basis Metabolic protocol when
                clinically appropriate. Membership is required; therapy pricing is separate
                from the $60/month care platform.
              </p>
              <p className="text-body text-grey-7">
                Compounded tirzepatide from ${lowestEffectiveMonthly()}/month on 3-month
                therapy plans when prescribed
              </p>
              <p className="text-h5 text-grey-7">{THERAPY_DISCLAIMER}</p>
              <p className="text-body text-grey-7">
                Imagery is illustrative; actual medication appearance may vary by compounding
                pharmacy partner.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <BasalButton
                  href={primaryCtaHref()}
                  data-analytics-event="cta_click"
                  data-analytics-label="glp_one_apply"
                  data-analytics-location="glp_one_hero"
                  data-analytics-href={primaryCtaHref()}
                >
                  {primaryCtaLabel()}
                </BasalButton>
                <Link
                  href={ROUTES.homeProtocols}
                  className="inline-flex items-center text-h5 text-grey-7 underline underline-offset-2"
                >
                  View all protocols
                </Link>
              </div>
            </header>
          </div>

          <div className="site-container site-grid w-full">
            <div className="col-span-full flex justify-center md:col-span-12 md:col-start-7">
              <div className="editorial-figure editorial-figure--product bg-white">
                <Image
                  src={MEDIA.intro}
                  alt="GLP-One therapy supplies within a Basis Metabolic protocol"
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
                intro="When clinically appropriate, GLP-1 therapy supports metabolic goals inside a structured Basis Metabolic protocol — not as a standalone purchase."
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
                title="Questions about GLP-1 therapy"
                items={GLP_FAQS}
              />
            </div>
          </div>
        </section>
      </div>

      <ConversionBand
        title="Start with membership."
        description="Apply for Basis membership first. GLP-1 therapy may be recommended within a Basis Metabolic protocol when clinically appropriate."
        primaryLabel={primaryCtaLabel()}
        primaryHref={primaryCtaHref()}
        secondaryLabel={isCheckoutLive() ? checkoutCtaLabel() : undefined}
        secondaryHref={isCheckoutLive() ? CHECKOUT_HREF : undefined}
        showSecondary={isCheckoutLive()}
      />
    </MarketingShell>
  );
}
