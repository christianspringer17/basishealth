import { CredibilityStrip } from "@/components/landing/CredibilityStrip";
import { Differentiation } from "@/components/landing/Differentiation";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProtocolCategories } from "@/components/landing/ProtocolCategories";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <CredibilityStrip />
        <ProblemSection />
        <HowItWorks />
        <ProtocolCategories />
        <Differentiation />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
