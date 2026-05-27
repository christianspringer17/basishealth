import { BrandLockupSection } from "@/components/landing/BrandLockupSection";
import { ExpectSection } from "@/components/landing/ExpectSection";
import { AssessmentSection } from "@/components/landing/AssessmentSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { IntroSection } from "@/components/landing/IntroSection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { StatementSection } from "@/components/landing/StatementSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { VitalitySection } from "@/components/landing/VitalitySection";
import { VisualSection } from "@/components/landing/VisualSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <StatementSection />
        <IntroSection />
        <ProgramSection />
        <ExpectSection />
        <BrandLockupSection />
        <ScienceSection />
        <TestimonialsSection />
        <VitalitySection />
        <VisualSection />
        <AssessmentSection />
      </main>
      <Footer />
    </>
  );
}
