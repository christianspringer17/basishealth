import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import type { LearnIndexEntry } from "@/lib/content/types";

export function RelatedLearnArticles({
  entries,
  category,
}: {
  entries: LearnIndexEntry[];
  category: string;
}) {
  if (entries.length === 0) return null;

  return (
    <aside className="article-related" aria-label="Related articles">
      <p className="article-related__label">{category}</p>
      <div className="article-related__grid learn-card-grid learn-card-grid--recent">
        {entries.map((entry) => (
          <LearnArticleCard key={entry.slug} entry={entry} variant="carousel" />
        ))}
      </div>
    </aside>
  );
}
