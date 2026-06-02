import { BrandLockupSection } from "@/components/landing/BrandLockupSection";
import { ExpectSection } from "@/components/landing/ExpectSection";
import { ExplainerSection } from "@/components/landing/ExplainerSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HomeFaqSection } from "@/components/landing/HomeFaqSection";
import { MembershipPlanSection } from "@/components/landing/MembershipPlanSection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { StatementSection } from "@/components/landing/StatementSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { VitalitySection } from "@/components/landing/VitalitySection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <StatementSection />
        <ExplainerSection />
        <ProgramSection />
        <ExpectSection />
        <BrandLockupSection />
        <ScienceSection />
        <TestimonialsSection />
        <VitalitySection />
        <HomeFaqSection />
        <MembershipPlanSection />
        <WaitlistSection />
      </main>
      <Footer showPrimaryCta={false} />
    </div>
  );
}
