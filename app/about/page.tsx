import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { AboutScrollReset } from "@/components/marketing/AboutScrollReset";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";
import { CTA_LABELS, primaryCtaHref } from "@/lib/cta";

export const metadata = {
  title: "About us",
  description:
    "Basis is physician-guided metabolic care—Basis Metabolic and GLP-1 protocols when clinically appropriate, with licensed provider review and U.S. pharmacy fulfillment.",
};

export default function AboutPage() {
  return (
    <MarketingShell className="about-page-shell flex flex-col" showFooterCta={false}>
      <AboutScrollReset />
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand
        className="conversion-band--about"
        title="Begin with clarity."
        description="Take a short online assessment (~10 minutes). A licensed provider reviews your answers—you are only charged if treatment is approved."
        primaryLabel={CTA_LABELS.startAssessment}
        primaryHref={primaryCtaHref()}
      />
    </MarketingShell>
  );
}
