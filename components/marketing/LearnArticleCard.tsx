import Link from "next/link";
import type { LearnIndexEntry } from "@/lib/content/types";
import { formatReadMinutes, formatReadTimeLabel } from "@/lib/learn-format";

function LearnCardImage({
  image,
  className,
  priority,
}: {
  image: { src: string; alt: string };
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      {/* Static /public assets — native img avoids fragile dev webpack image chunks */}
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}

function ReadTimePill({ readTime }: { readTime: string }) {
  return (
    <span className="learn-read-pill">{formatReadTimeLabel(readTime)}</span>
  );
}

/** Featured hero uses full-width asset when index only stores a thumb. */
function featuredImageFromCard(image: { src: string; alt: string }) {
  if (image.src.includes("-thumb.")) {
    return { ...image, src: image.src.replace("-thumb.", ".") };
  }
  return image;
}

export function LearnArticleCard({
  entry,
  variant = "default",
}: {
  entry: LearnIndexEntry;
  variant?: "default" | "carousel" | "featured" | "list";
}) {
  if (variant === "featured") {
    return (
      <Link href={`/learn/${entry.slug}`} className="learn-card learn-card--featured group">
        {entry.cardImage ? (
          <LearnCardImage
            image={featuredImageFromCard(entry.cardImage)}
            className="learn-card-media learn-card-media--featured"
            priority
          />
        ) : null}
        <div className="learn-card-featured-body">
          <div className="learn-card-meta-row">
            <p className="learn-card-eyebrow">Essential reading</p>
            <ReadTimePill readTime={entry.readTime} />
          </div>
          <div className="learn-card-featured-copy">
            <div className="learn-card-featured-text">
              <h2 className="learn-card-title learn-card-title--featured">{entry.title}</h2>
              <p className="learn-card-lead">{entry.description}</p>
            </div>
            <p className="learn-card-date learn-card-date--featured">{entry.published}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "list") {
    return (
      <Link href={`/learn/${entry.slug}`} className="learn-card learn-card--list group">
        <div className="learn-card-list-main">
          <p className="learn-card-category">{entry.category}</p>
          <h3 className="learn-card-title">{entry.title}</h3>
          <p className="learn-card-date">{entry.published}</p>
        </div>
        <p className="learn-card-list-minutes">{formatReadMinutes(entry.readTime)}</p>
      </Link>
    );
  }

  if (variant === "carousel") {
    return (
      <Link href={`/learn/${entry.slug}`} className="learn-card learn-card--carousel group">
        {entry.cardImage ? (
          <LearnCardImage
            image={entry.cardImage}
            className="learn-card-media learn-card-media--carousel"
          />
        ) : null}
        <div className="learn-card-carousel-body">
          <div className="learn-card-meta-row">
            <p className="learn-card-category">{entry.category}</p>
            <ReadTimePill readTime={entry.readTime} />
          </div>
          <h3 className="learn-card-title">{entry.title}</h3>
          <p className="learn-card-date">{entry.published}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/learn/${entry.slug}`} className="learn-card group">
      <p className="learn-card-category">{entry.category}</p>
      <ReadTimePill readTime={entry.readTime} />
      <h3 className="learn-card-title">{entry.title}</h3>
      <p className="learn-card-lead">{entry.description}</p>
      <p className="learn-card-date">{entry.published}</p>
    </Link>
  );
}
