import {
  EdenBmiCalculator,
  EdenWeightProgramSection,
  EdenGlpOneStatement,
  EdenExperienceSection,
  EdenFaqSection,
  EdenFooter,
  EdenGuideSection,
  EdenHeader,
  EdenHero,
  EdenHowItWorks,
  EdenProductMenu,
  EdenPromoBanner,
  EdenStickyCta,
} from "@/components/eden";

export default function Home() {
  return (
    <div className="homepage-page homepage-page--eden">
      <div className="eden-sticky-nav">
        <EdenPromoBanner />
        <EdenHeader />
      </div>
      <main>
        <EdenHero />
        <EdenProductMenu />
        <EdenExperienceSection />
        <EdenWeightProgramSection />
        <EdenBmiCalculator />
        <EdenHowItWorks />
        <EdenFaqSection />
        <EdenGuideSection />
        <EdenGlpOneStatement />
      </main>
      <EdenFooter />
      <EdenStickyCta />
    </div>
  );
}
