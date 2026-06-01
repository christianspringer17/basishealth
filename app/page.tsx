import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { DiagnosticsSection } from "@/components/landing/v2/DiagnosticsSection";
import { HeroV2 } from "@/components/landing/v2/HeroV2";
import { HowItWorksSection } from "@/components/landing/v2/HowItWorksSection";
import { MembershipSection } from "@/components/landing/v2/MembershipSection";
import { ModelSection } from "@/components/landing/v2/ModelSection";
import { PhilosophySection } from "@/components/landing/v2/PhilosophySection";
import { ProblemSection } from "@/components/landing/v2/ProblemSection";
import { ProtocolNotesSection } from "@/components/landing/v2/ProtocolNotesSection";
import { ProtocolsSection } from "@/components/landing/v2/ProtocolsSection";
import { QuarterlySection } from "@/components/landing/v2/QuarterlySection";
import { TherapiesSection } from "@/components/landing/v2/TherapiesSection";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="flex flex-col">
        <HeroV2 />
        <ProblemSection />
        <ModelSection />
        <HowItWorksSection />
        <MembershipSection />
        <ProtocolsSection />
        <TherapiesSection />
        <DiagnosticsSection />
        <QuarterlySection />
        <PhilosophySection />
        <ProtocolNotesSection />
        <WaitlistSection />
      </main>
      <Footer showPrimaryCta={false} />
    </div>
  );
}
