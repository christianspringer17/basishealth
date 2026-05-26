import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { learnIndexEntries } from "@/lib/content/learn-pages";

export const metadata = {
  title: "Learn",
  description:
    "Expert guides on metabolic health, personalized protocols, and what to expect from Athene Health care.",
};

export default function LearnPage() {
  const categories = ["Understand", "Measure"] as const;

  return (
    <MarketingShell>
      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5">
            <h1 className="text-h1-xl text-grey-9">Learn</h1>
            <p className="text-h3 max-w-[680px] text-pretty text-grey-7">
              Evidence-informed guides on metabolic health—written for patients who
              want clarity, not noise.
            </p>
          </div>
        </div>

        {categories.map((category) => {
          const entries = learnIndexEntries.filter((e) => e.category === category);
          if (entries.length === 0) return null;
          return (
            <div key={category} className="site-container site-grid w-full gap-y-8">
              <h2 className="col-span-full text-h1-lg text-grey-9 md:col-span-16 md:col-start-5">
                {category}
              </h2>
              <div className="col-span-full flex flex-col gap-4 md:col-span-16 md:col-start-5">
                {entries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/learn/${entry.slug}`}
                    className="group flex flex-col gap-2 rounded-basal-lg border border-[var(--grey-3)] bg-[var(--grey-1)] p-6 transition-colors hover:bg-white"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 text-h5 text-grey-7">
                      <span>{entry.category}</span>
                      <span aria-hidden>·</span>
                      <span>{entry.readTime}</span>
                    </div>
                    <h3 className="text-h4 text-grey-9 group-hover:text-[var(--accent-5)]">
                      {entry.title}
                    </h3>
                    <p className="text-h5 text-pretty text-grey-7">{entry.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <ConversionBand />
    </MarketingShell>
  );
}
