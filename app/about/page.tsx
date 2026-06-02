import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "About us",
  description:
    "Basis is a membership-based protocol clinic—built on long-term clinical relationships, personalized protocols, and therapies when clinically appropriate.",
};

export default function AboutPage() {
  return (
    <MarketingShell showFooterCta={false}>
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand
        className="conversion-band--about"
        title="Apply for membership."
        description="One membership. Provider-guided protocols. A care relationship designed to last—not a product catalog to shop."
        primaryLabel={CTA_LABELS.applyMembership}
        primaryHref={ROUTES.membership}
        showSecondary={false}
      />
    </MarketingShell>
  );
}
