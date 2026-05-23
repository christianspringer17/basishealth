import { Section, SectionHeading } from "./ui";

const categories = [
  {
    name: "Energy",
    description:
      "Protocols designed to support sustainable daily energy, informed by your goals and health context.",
  },
  {
    name: "Metabolism",
    description:
      "A structured approach to metabolic health markers and habits, with provider oversight where appropriate.",
  },
  {
    name: "Recovery",
    description:
      "Guidance focused on rest, repair, and resilience—personalized rather than one-size-fits-all.",
  },
  {
    name: "Sleep",
    description:
      "Support for sleep quality and rhythm as part of a broader longevity-oriented plan.",
  },
  {
    name: "Healthy aging",
    description:
      "Long-horizon protocols designed to support vitality over time, not quick fixes.",
  },
  {
    name: "Performance",
    description:
      "For those balancing output and recovery—with protocols aligned to your baseline and goals.",
  },
];

export function ProtocolCategories() {
  return (
    <Section id="protocols">
      <div className="site-container flex flex-col items-center gap-12 md:gap-20">
        <SectionHeading
          accent="Protocol areas"
          title="Care organized around what matters to you."
          subtitle="Each area is a starting point for conversation—not a product shelf. Your protocol reflects eligibility, goals, and provider guidance."
        />

        <div className="w-full overflow-hidden rounded-3xl border border-[#e8e4df]/60 bg-[#FFF7F0] py-10 md:py-14 md:px-8">
          <div className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 md:px-0">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col gap-3 rounded-2xl border border-[#e8e4df]/50 bg-white/70 p-6 transition-colors hover:border-[#C75A2A]/20 hover:bg-white"
              >
                <h3 className="text-lg font-medium text-[#171717]">
                  {category.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#66615c]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
