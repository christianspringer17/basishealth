import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import { LearnCarouselSection } from "@/components/marketing/LearnCarouselSection";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { learnIndexEntries } from "@/lib/content/learn-index";
import {
  LEARN_FEATURED_SLUG,
  LEARN_IMPROVE_SLUGS,
  LEARN_MEASURE_SLUGS,
  LEARN_RECENT_SLUGS,
  LEARN_UNDERSTAND_SLUGS,
  pickLearnEntries,
} from "@/lib/learn-hub";
import { PROTOCOL_NOTES_LABEL } from "@/lib/positioning";

export const metadata = {
  title: PROTOCOL_NOTES_LABEL,
  description:
    "Editorial notes on metabolic health, protocols, therapies, and long-term care from Basis Health.",
};

export default function LearnPage() {
  const featured =
    learnIndexEntries.find((e) => e.slug === LEARN_FEATURED_SLUG) ??
    learnIndexEntries[0];
  if (!featured) return null;

  const recent = pickLearnEntries(LEARN_RECENT_SLUGS);
  const understand = pickLearnEntries(LEARN_UNDERSTAND_SLUGS);
  const measure = pickLearnEntries(LEARN_MEASURE_SLUGS);
  const improve = pickLearnEntries(LEARN_IMPROVE_SLUGS);

  return (
    <MarketingShell>
      <div className="marketing-page learn-page">
        <section className="learn-page-main section-shell w-full">
          <div className="site-container site-grid w-full learn-page-grid">
            <div className="learn-page-column">
              <LearnArticleCard entry={featured} variant="featured" />
            </div>

            <LearnCarouselSection
              title="Recent"
              headingId="learn-recent-heading"
              entries={recent}
            />

            <LearnCarouselSection
              title="Understand"
              headingId="learn-understand-heading"
              entries={understand}
            />

            <LearnCarouselSection
              title="Measure"
              headingId="learn-measure-heading"
              entries={measure}
            />

            <LearnCarouselSection
              title="Improve"
              headingId="learn-improve-heading"
              entries={improve}
            />
          </div>
        </section>
      </div>
    </MarketingShell>
  );
}
