import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";

export const metadata = {
  title: "How it works",
  description:
    "From intake to evolving protocol—how Athene Health delivers clinician-guided metabolic care on 3- and 6-month plans.",
};

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES["how-it-works"]} />
      <ConversionBand />
    </MarketingShell>
  );
}
