import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";

export const metadata = {
  title: "Built for vitality",
  description:
    "Long-horizon metabolic care for energy, recovery, and sustainable vitality—not quick fixes.",
};

export default function VitalityPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES.vitality} />
      <ConversionBand />
    </MarketingShell>
  );
}
