import Link from "next/link";
import type { LearnIndexEntry } from "@/lib/content/types";

export function LearnArticleCard({
  entry,
  variant = "default",
}: {
  entry: LearnIndexEntry;
  variant?: "default" | "compact" | "featured";
}) {
  if (variant === "featured") {
    return (
      <Link href={`/learn/${entry.slug}`} className="learn-card learn-card--featured group">
        <p className="learn-card-label">Essential reading</p>
        <p className="learn-card-meta">{entry.readTime}</p>
        <h2 className="learn-card-title learn-card-title--lg">{entry.title}</h2>
        <p className="learn-card-lead">{entry.description}</p>
        <p className="learn-card-date">{entry.published}</p>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/learn/${entry.slug}`} className="learn-card learn-card--compact group">
        <div className="learn-card-meta-row">
          <span>{entry.category}</span>
          <span aria-hidden>·</span>
          <span>{entry.readTime}</span>
        </div>
        <h3 className="learn-card-title">{entry.title}</h3>
        <p className="learn-card-date">{entry.published}</p>
      </Link>
    );
  }

  return (
    <Link href={`/learn/${entry.slug}`} className="learn-card group">
      <div className="learn-card-meta-row">
        <span>{entry.category}</span>
        <span aria-hidden>·</span>
        <span>{entry.readTime}</span>
      </div>
      <h3 className="learn-card-title">{entry.title}</h3>
      <p className="learn-card-lead">{entry.description}</p>
      <p className="learn-card-date">{entry.published}</p>
    </Link>
  );
}
