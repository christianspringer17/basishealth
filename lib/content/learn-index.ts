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
    readTime: "14 min read",
    published: "October 2, 2025",
    sortDate: "2025-10-02",
    description:
      "Metabolism is better understood as coordination than speed. Insulin, muscle, fat tissue, and circadian timing determine how the body uses fuel.",
    cardImage: card("meet-your-metabolism"),
  },
  {
    slug: "as-unique-as-your-goals",
    title: "As unique as your goals",
    category: "Understand",
    readTime: "8 min read",
    published: "March 25, 2026",
    sortDate: "2026-03-25",
    description:
      "Why identical inputs produce different metabolic outcomes—and what that means for your protocol.",
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
      "Fasting glucose can look normal while insulin resistance is already progressing. Here is what to watch for.",
    cardImage: card("why-insulin-sensitivity-matters"),
  },
  {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "5 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "The five metabolic markers we use to read how your systems are communicating.",
    cardImage: card("what-we-measure"),
  },
  {
    slug: "five-metabolic-pillars",
    title: "The five pillars we use to read metabolic health",
    category: "Understand",
    readTime: "3 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "How insulin sensitivity, muscle, hormones, aerobic reserve, and body composition form a complete picture.",
    cardImage: card("five-metabolic-pillars"),
  },
  {
    slug: "why-muscle-is-metabolic-reserve",
    title: "Why muscle is metabolic reserve",
    category: "Understand",
    readTime: "3 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Muscle tissue is not just for strength—it is one of your largest metabolic organs.",
    cardImage: card("why-muscle-is-metabolic-reserve"),
  },
  {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "4 min read",
    published: "March 20, 2026",
    sortDate: "2026-03-20",
    description:
      "Energy, metabolism, recovery, sleep, and healthy aging—how Basis Health organizes care around the signals that matter.",
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
      "From intake to ongoing adaptation—what your first 3 or 6 months with Basis Health look like.",
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
      "One guided program with clinical oversight, personalized protocols, and subscription plans built for commitment.",
    cardImage: card("our-program"),
  },
];

export function getLearnEntry(slug: string) {
  return learnIndexEntries.find((e) => e.slug === slug);
}
