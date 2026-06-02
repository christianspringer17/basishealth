import type { LifeUnlockedReviewItem } from "@/lib/content/life-unlocked-carousel";

export function ReviewCard({ item }: { item: LifeUnlockedReviewItem }) {
  return (
    <article className="life-unlocked-card life-unlocked-card--review">
      <p className="life-unlocked-review__label">{item.label}</p>
      <blockquote className="life-unlocked-review__quote">
        <p>&ldquo;{item.quote}&rdquo;</p>
      </blockquote>
      <footer className="life-unlocked-review__footer">
        <p className="life-unlocked-review__name">{item.name}</p>
        <p className="life-unlocked-review__type">{item.memberType}</p>
      </footer>
    </article>
  );
}
