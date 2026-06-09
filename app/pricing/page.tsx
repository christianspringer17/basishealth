import { EdenPageShell } from "@/components/eden/EdenPageShell";
import { EdenFaqSection } from "@/components/eden/EdenFaqSection";
import { EdenGlpOneStatement } from "@/components/eden/EdenGlpOneStatement";
import { EdenPricingCompare } from "@/components/eden/EdenPricingCompare";
import { EdenPricingPlans } from "@/components/eden/EdenPricingPlans";
import { EDEN_PRICING } from "@/lib/content/eden-pricing";
import { lowestCommitmentMonthly } from "@/lib/pricing";

export const metadata = {
  title: "Pricing",
  description: `Transparent GLP-One pricing from $${lowestCommitmentMonthly()}/month. Medication, provider review, and ongoing care included — save more with longer commitments.`,
};

export default function PricingPage() {
  const { hero, disclaimer } = EDEN_PRICING;

  return (
    <EdenPageShell>
      <section className="eden-pricing-hero site-container">
        <p className="eden-pricing-hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="eden-pricing-hero__title">{hero.title}</h1>
        <p className="eden-pricing-hero__lead">{hero.lead}</p>
        <p className="eden-pricing-hero__trust">{hero.trustLine}</p>
      </section>

      <EdenPricingPlans />
      <EdenPricingCompare />
      <EdenFaqSection
        id="pricing-faq"
        content={EDEN_PRICING.faq}
        analyticsLocation="pricing_faq"
      />

      <div className="site-container">
        <p className="eden-pricing__disclaimer">{disclaimer}</p>
      </div>

      <EdenGlpOneStatement />
    </EdenPageShell>
  );
}
