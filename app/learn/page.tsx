import { EdenPageShell } from "@/components/eden/EdenPageShell";
import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import { LearnCarouselSection } from "@/components/marketing/LearnCarouselSection";
import { learnIndexEntries } from "@/lib/content/learn-index";
import {
  LEARN_FEATURED_SLUG,
  LEARN_IMPROVE_SLUGS,
  LEARN_MEASURE_SLUGS,
  LEARN_RECENT_SLUGS,
  LEARN_UNDERSTAND_SLUGS,
  pickLearnEntries,
} from "@/lib/learn-hub";

export const metadata = {
  title: "Learn",
  description:
    "Evidence-informed guides on metabolic health—from insulin sensitivity to body composition and personalized protocols.",
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
    <EdenPageShell>
      <div className="marketing-page learn-page eden-subpage-offset">
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
    </EdenPageShell>
  );
}
