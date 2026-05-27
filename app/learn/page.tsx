import { ConversionBand } from "@/components/marketing/ConversionBand";
import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { learnIndexEntries } from "@/lib/content/learn-pages";

export const metadata = {
  title: "Learn",
  description:
    "Evidence-informed guides on metabolic health—from insulin sensitivity to body composition and personalized protocols.",
};

const FEATURED_SLUG = "meet-your-metabolism";
const CATEGORIES = ["Understand", "Measure", "Improve"] as const;

export default function LearnPage() {
  const featured =
    learnIndexEntries.find((e) => e.slug === FEATURED_SLUG) ?? learnIndexEntries[0];
  const recent = learnIndexEntries
    .filter((e) => e.slug !== featured.slug)
    .slice(0, 4);

  return (
    <MarketingShell>
      <div className="marketing-page">
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full section-stack-loose">
            {featured && (
              <div className="col-span-full md:col-span-18 md:col-start-4">
                <LearnArticleCard entry={featured} variant="featured" />
              </div>
            )}

            {recent.length > 0 && (
              <div className="col-span-full md:col-span-18 md:col-start-4">
                <h2 className="learn-section-title">Recent</h2>
                <div className="learn-card-grid learn-card-grid--recent">
                  {recent.map((entry) => (
                    <LearnArticleCard key={entry.slug} entry={entry} variant="compact" />
                  ))}
                </div>
              </div>
            )}

            {CATEGORIES.map((category) => {
              const entries = learnIndexEntries.filter((e) => e.category === category);
              if (entries.length === 0) return null;
              return (
                <div key={category} className="col-span-full md:col-span-18 md:col-start-4">
                  <h2 className="learn-section-title">{category}</h2>
                  <div className="learn-card-grid">
                    {entries.map((entry) => (
                      <LearnArticleCard key={entry.slug} entry={entry} variant="compact" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <ConversionBand secondaryLabel="Explore GLP–One" secondaryHref="/glp-one" />
    </MarketingShell>
  );
}
