import { Card, Section, SectionHeading } from "./ui";

const points = [
  {
    title: "Not a generic supplement storefront",
    description:
      "Eonic Health is a guided health layer—not a catalog of products without clinical context or oversight.",
  },
  {
    title: "Not a one-size-fits-all clinic",
    description:
      "Protocols are personalized to your goals and health context, with adjustments over time where medically appropriate.",
  },
  {
    title: "A guided health layer built around you",
    description:
      "Your goals, biomarkers, and provider oversight inform one coherent plan—designed to reduce fragmentation in longevity care.",
  },
];

export function Differentiation() {
  return (
    <Section>
      <div className="site-container flex flex-col items-center gap-12 md:gap-16">
        <SectionHeading
          title="Built for clarity—not noise."
          subtitle="We focus on medically credible, prevention-oriented guidance without hype or guaranteed outcomes."
        />
        <div className="grid w-full max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {points.map((point) => (
            <Card key={point.title} className="p-6 md:p-8">
              <h3 className="mb-3 text-lg font-medium leading-snug text-[#171717]">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#66615c]">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
