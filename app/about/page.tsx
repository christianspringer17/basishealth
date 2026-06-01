import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "About",
  description:
    "Basis Health is a metabolism-first approach to longevity care—built on partnership, science, and transparent subscription plans.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand
        className="conversion-band--about"
        title="Begin with clarity."
        description="See if GLP–One is right for your body and your goals."
        primaryLabel={CTA_LABELS.viewPricing}
        primaryHref={ROUTES.glpOne}
        showSecondary={false}
      />
    </MarketingShell>
  );
}
