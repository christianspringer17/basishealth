import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import type { LearnIndexEntry } from "@/lib/content/types";

export function LearnCarouselSection({
  title,
  description,
  headingId,
  entries,
}: {
  title: string;
  description?: string;
  headingId: string;
  entries: LearnIndexEntry[];
}) {
  if (entries.length === 0) return null;

  return (
    <section className="learn-carousel-section" aria-labelledby={headingId}>
      <div className="learn-carousel-section-head">
        <h2 id={headingId} className="learn-section-title learn-section-title--grid">
          {title}
        </h2>
        {description ? (
          <p className="learn-section-deck learn-section-deck--grid">{description}</p>
        ) : null}
      </div>
      <div className="learn-carousel-strip">
        <div className="learn-carousel-track">
          {entries.map((entry) => (
            <LearnArticleCard key={entry.slug} entry={entry} variant="carousel" />
          ))}
        </div>
      </div>
    </section>
  );
}
