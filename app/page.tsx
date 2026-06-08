import {
  EdenBmiCalculator,
  EdenGlpOneStatement,
  EdenExperienceSection,
  EdenFaqSection,
  EdenFooter,
  EdenGuideSection,
  EdenHeader,
  EdenHero,
  EdenHowItWorks,
  EdenOnlineSection,
  EdenProductMenu,
  EdenPromoBanner,
  EdenStickyCta,
  EdenValuesSection,
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
        <EdenBmiCalculator />
        <EdenHowItWorks />
        <EdenOnlineSection />
        <EdenGlpOneStatement />
        <EdenValuesSection />
        <EdenFaqSection />
        <EdenGuideSection />
      </main>
      <EdenFooter />
      <EdenStickyCta />
    </div>
  );
}
