import type { LearnIndexEntry } from "./types";
import { learnCardImage, type LearnArticleSlug } from "./learn-images";

function card(slug: LearnArticleSlug) {
  return learnCardImage(slug);
}

/** Card metadata for /learn hub only — keep separate from full article bodies */
export const learnIndexEntries: LearnIndexEntry[] = [
  {
    slug: "meet-your-metabolism",
    title: "Meet Your Metabolism",
    category: "Improve",
    readTime: "12 min read",
    published: "October 2, 2025",
    sortDate: "2025-10-02",
    description:
      "Metabolism is coordination—not speed. How insulin, muscle, fat tissue, and daily rhythm determine the way your body uses fuel.",
    cardImage: card("meet-your-metabolism"),
  },
  {
    slug: "as-unique-as-your-goals",
    title: "As unique as your goals",
    category: "Understand",
    readTime: "7 min read",
    published: "March 25, 2026",
    sortDate: "2026-03-25",
    description:
      "Why the same inputs produce different outcomes—and how Basis personalizes your protocol from day one.",
    cardImage: card("as-unique-as-your-goals"),
  },
  {
    slug: "why-insulin-sensitivity-matters",
    title: "Why insulin sensitivity matters before glucose goes wrong",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Fasting glucose can look fine while insulin resistance builds. What to watch for—and why starting point matters for care.",
    cardImage: card("why-insulin-sensitivity-matters"),
  },
  {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "6 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Five pillars—insulin sensitivity, muscle, hormones, aerobic reserve, and composition—that read how your systems coordinate.",
    cardImage: card("what-we-measure"),
  },
  {
    slug: "five-metabolic-pillars",
    title: "The five pillars we use to read metabolic health",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Why no single lab tells the whole story—and how we keep your protocol coherent as markers shift.",
    cardImage: card("five-metabolic-pillars"),
  },
  {
    slug: "why-muscle-is-metabolic-reserve",
    title: "Why muscle is metabolic reserve",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Muscle is glucose disposal, signaling, and insurance during weight loss—not just strength for the gym.",
    cardImage: card("why-muscle-is-metabolic-reserve"),
  },
  {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "6 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Energy, metabolism, recovery, sleep, and healthy aging—how Basis organizes care around the signals that matter.",
    cardImage: card("protocol-areas"),
  },
  {
    slug: "what-to-expect",
    title: "What to expect",
    category: "Understand",
    readTime: "6 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "From online assessment through physician review, protocol start, and follow-up—your first months with Basis.",
    cardImage: card("what-to-expect"),
  },
  {
    slug: "our-program",
    title: "Our program",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Basis Metabolic: physician-guided GLP-1 care when appropriate, with transparent plans and ongoing adaptation.",
    cardImage: card("our-program"),
  },
];

export function getLearnEntry(slug: string) {
  return learnIndexEntries.find((e) => e.slug === slug);
}
