import { Section, SectionHeading } from "./ui";

export function ProblemSection() {
  return (
    <Section>
      <div className="site-container flex flex-col items-center gap-12 md:gap-16">
        <SectionHeading
          accent="The gap"
          title="Longevity care is often fragmented."
          subtitle="Most people are piecing together supplements, labs, telehealth, and online advice without a coherent plan."
        />
        <div className="w-full max-w-4xl rounded-3xl border border-[#e8e4df]/80 bg-[#f7f5f2]/30 p-8 md:p-12">
          <p className="text-lead text-center text-[#66615c] text-pretty">
            Eonic Health is designed to support a more connected approach—where
            your goals, health context, and provider guidance inform one evolving
            protocol, rather than disconnected recommendations.
          </p>
        </div>
      </div>
    </Section>
  );
}
