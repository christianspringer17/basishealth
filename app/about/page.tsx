import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/cta";

export const metadata = {
  title: "About",
  description:
    "Basis Health is a membership-based protocol platform for metabolic health, longevity, and performance.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand
        className="conversion-band--about"
        title="Healthcare should be continuous."
        description="Apply for membership and begin with a structured assessment. Protocols evolve with you — not as one-time medication sales."
        primaryLabel={primaryCtaLabel()}
        primaryHref={primaryCtaHref()}
        showSecondary={false}
      />
    </MarketingShell>
  );
}
