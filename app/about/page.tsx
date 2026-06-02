import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "About us",
  description:
    "Basis is a protocol-based approach to metabolic care—built on physician review, ongoing support, and therapies when clinically appropriate.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand
        className="conversion-band--about"
        title="Apply for membership."
        description="Physician-guided metabolic protocols with ongoing support and therapies when clinically appropriate."
        primaryLabel={CTA_LABELS.applyMembership}
        primaryHref={ROUTES.membership}
        showSecondary={false}
      />
    </MarketingShell>
  );
}
