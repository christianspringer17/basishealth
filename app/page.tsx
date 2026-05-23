import { ExpectSection } from "@/components/landing/ExpectSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { IntroSection } from "@/components/landing/IntroSection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { StatementSection } from "@/components/landing/StatementSection";
import { VitalitySection } from "@/components/landing/VitalitySection";
import { VisualSection } from "@/components/landing/VisualSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-0">
        <Hero />
        <StatementSection />
        <IntroSection />
        <VisualSection />
        <ProgramSection />
        <ExpectSection />
        <ScienceSection />
        <VitalitySection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
