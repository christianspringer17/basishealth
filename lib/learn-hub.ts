import { learnIndexEntries } from "@/lib/content/learn-index";
import type { LearnIndexEntry } from "@/lib/content/types";

export const LEARN_FEATURED_SLUG = "meet-your-metabolism";

export const LEARN_RECENT_SLUGS = [
  "as-unique-as-your-goals",
  "what-we-measure",
  "what-to-expect",
  "our-program",
] as const;

export const LEARN_UNDERSTAND_SLUGS = [
  "why-insulin-sensitivity-matters",
  "five-metabolic-pillars",
  "protocol-areas",
] as const;

export const LEARN_MEASURE_SLUGS = ["what-we-measure"] as const;

export const LEARN_IMPROVE_SLUGS = [
  "why-muscle-is-metabolic-reserve",
  "our-program",
] as const;

export function pickLearnEntries(slugs: readonly string[]): LearnIndexEntry[] {
  const bySlug = new Map(learnIndexEntries.map((e) => [e.slug, e]));
  return slugs
    .map((slug) => bySlug.get(slug))
    .filter((e): e is LearnIndexEntry => Boolean(e));
}
