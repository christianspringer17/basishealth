import { AboutPageLayout } from "@/components/marketing/AboutPageLayout";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ABOUT_PAGES } from "@/lib/content/about-pages";

export const metadata = {
  title: "About",
  description:
    "Athene Health is a metabolism-first approach to longevity care—built on partnership, science, and transparent subscription plans.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <AboutPageLayout content={ABOUT_PAGES.main} />
      <ConversionBand />
    </MarketingShell>
  );
}
