import { BrandLockupSection } from "@/components/landing/BrandLockupSection";
import { ExpectSection } from "@/components/landing/ExpectSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { StatementSection } from "@/components/landing/StatementSection";
import { VitalitySection } from "@/components/landing/VitalitySection";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { ROUTES } from "@/lib/routes";
import { CTA_LABELS } from "@/lib/cta";

export const metadata = {
  title: "Our approach",
  description:
    "Basis is a physician-guided longevity care platform—personalized metabolic protocols, licensed provider review, and ongoing care built around your biology.",
};

export default function OurApproachPage() {
  return (
    <div className="home-page">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <StatementSection />
        <IntroSection />
        <ProgramSection />
        <ExpectSection />
        <BrandLockupSection />
        <ScienceSection />
        <VitalitySection />
        <ConversionBand
          title="Explore GLP-One care."
          description="See clinician-guided tirzepatide paths, transparent pricing, and what ongoing care includes."
          primaryLabel={CTA_LABELS.getStarted}
          primaryHref={ROUTES.glpOne}
        />
      </main>
      <Footer showPrimaryCta={false} />
    </div>
  );
}
