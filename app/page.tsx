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
import { WaitlistSection } from "@/components/landing/WaitlistSection";

export default function Home() {
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
        <WaitlistSection />
      </main>
      <Footer showPrimaryCta={false} />
    </div>
  );
}
