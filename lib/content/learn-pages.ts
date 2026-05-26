import { NAV_IMAGES } from "@/lib/media";
import type { ArticlePageContent, LearnIndexEntry } from "./types";

export const learnIndexEntries: LearnIndexEntry[] = [
  {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "4 min read",
    published: "May 2026",
    description:
      "Energy, metabolism, recovery, sleep, and healthy aging—how Athene organizes care around the signals that matter.",
  },
  {
    slug: "as-unique-as-your-goals",
    title: "As unique as your goals",
    category: "Understand",
    readTime: "8 min read",
    published: "May 2026",
    description:
      "Why identical inputs produce different metabolic outcomes—and what that means for your protocol.",
  },
  {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "5 min read",
    published: "May 2026",
    description:
      "The five metabolic markers we use to read how your systems are communicating.",
  },
  {
    slug: "what-to-expect",
    title: "What to expect",
    category: "Understand",
    readTime: "6 min read",
    published: "May 2026",
    description:
      "From intake to ongoing adaptation—what your first 3 or 6 months with Athene look like.",
  },
  {
    slug: "our-program",
    title: "Our program",
    category: "Understand",
    readTime: "5 min read",
    published: "May 2026",
    description:
      "One guided program with clinical oversight, personalized protocols, and subscription plans built for commitment.",
  },
];

export const learnPages: Record<string, ArticlePageContent> = {
  "protocol-areas": {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "4 min read",
    published: "May 2026",
    lead:
      "Athene organizes care around the domains where metabolic health shows up in daily life—so your protocol stays coherent instead of fragmented.",
    heroImage: {
      src: NAV_IMAGES.learnProtocols,
      alt: "Personalized metabolic care",
    },
    sections: [
      {
        heading: "Energy",
        paragraphs: [
          "Stable daily energy reflects how effectively your body regulates glucose, hormones, and recovery. We track patterns—not just how you feel on your best day, but how consistently you perform across weeks.",
        ],
      },
      {
        heading: "Metabolism",
        paragraphs: [
          "Metabolic health is more than weight. We focus on insulin sensitivity, body composition, and inflammatory signals that predict long-term outcomes.",
        ],
      },
      {
        heading: "Recovery & sleep",
        paragraphs: [
          "Rest and repair are metabolic inputs. Sleep quality, training load, and stress shape how your protocol should evolve over a 3- or 6-month plan.",
        ],
      },
      {
        heading: "Healthy aging & performance",
        paragraphs: [
          "Whether your goal is healthspan or output, the principle is the same: align interventions to markers that predict sustainable vitality—not short-term spikes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to focus on every area at once?",
        answer:
          "No. Your provider prioritizes the domains most relevant to your goals and biomarkers, then expands the plan as you progress.",
      },
    ],
  },
  "as-unique-as-your-goals": {
    slug: "as-unique-as-your-goals",
    title: "As unique as your goals",
    category: "Understand",
    readTime: "8 min read",
    published: "May 2026",
    lead:
      "Identical meals, training plans, and medications produce different metabolic responses in different people. Your protocol should reflect that variation—not ignore it.",
    heroImage: {
      src: NAV_IMAGES.learnPersonalized,
      alt: "Individual metabolic health journey",
    },
    sections: [
      {
        heading: "The same input, different outcomes",
        paragraphs: [
          "Large studies using continuous glucose monitoring show substantial variation in post-meal responses—even among people with similar BMI and fasting labs.",
          "Genetics, sleep, meal timing, muscle mass, and gut ecology all modify how your body processes the same intervention. Population averages are a starting point, not a prescription.",
        ],
      },
      {
        heading: "Why upfront subscription plans help",
        paragraphs: [
          "Metabolic change rarely follows a 30-day timeline. Three- and six-month commitments give your clinician room to titrate, observe, and adjust without rushing toward the wrong outcome.",
          "You’re not buying a product—you’re investing in a relationship with measurable markers and clear checkpoints.",
        ],
      },
      {
        heading: "Calibration over perfection",
        paragraphs: [
          "The goal isn’t exhaustive self-tracking. It’s enough structured data—labs, symptoms, and lifestyle context—to know whether your protocol is working for your body.",
          "Athene integrates those signals so adjustments are informed, not guessed.",
        ],
      },
    ],
  },
  "what-we-measure": {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "5 min read",
    published: "May 2026",
    lead:
      "We focus on five metabolic markers that predict long-term health—signals that tell us how well your systems are communicating.",
    heroImage: {
      src: NAV_IMAGES.learnScience,
      alt: "Health markers and metabolic science",
    },
    sections: [
      {
        heading: "Insulin sensitivity",
        paragraphs: [
          "How effectively your cells respond to insulin affects energy stability, body composition, and long-term metabolic risk. We track it before glucose alone tells the full story.",
        ],
      },
      {
        heading: "Muscle mass",
        paragraphs: [
          "Muscle is metabolic reserve—it influences glucose disposal, hormonal signaling, and functional capacity as you age.",
        ],
      },
      {
        heading: "Hormonal rhythm",
        paragraphs: [
          "Cortisol, thyroid, and sex hormones interact with metabolism. Rhythm and proportion matter as much as single lab values.",
        ],
      },
      {
        heading: "Aerobic reserve (VO₂ max)",
        paragraphs: [
          "Cardiorespiratory fitness predicts mortality and metabolic flexibility better than many static labs. It’s a signal worth tracking over time.",
        ],
      },
      {
        heading: "Body composition",
        paragraphs: [
          "Where you store fat—and how much lean mass you retain—often matters more than scale weight for metabolic outcomes.",
        ],
      },
    ],
  },
  "what-to-expect": {
    slug: "what-to-expect",
    title: "What to expect",
    category: "Understand",
    readTime: "6 min read",
    published: "May 2026",
    lead:
      "A clear timeline for your first months with Athene—from eligibility review through protocol adaptation on a 3- or 6-month plan.",
    sections: [
      {
        heading: "Week 1: Intake & eligibility",
        paragraphs: [
          "Complete your health intake and goals assessment. A licensed provider reviews whether Athene is medically appropriate for you before any treatment begins.",
        ],
      },
      {
        heading: "Weeks 2–4: Protocol initiation",
        paragraphs: [
          "If approved, you receive a personalized protocol with clear expectations for labs, check-ins, and lifestyle inputs. Your subscription term (3 or 6 months) starts here.",
        ],
      },
      {
        heading: "Months 2–3: First adaptations",
        paragraphs: [
          "Most metabolic interventions need time to show measurable change. Expect structured follow-ups to review markers, symptoms, and adherence—not reactive chaos.",
        ],
      },
      {
        heading: "Months 4–6: Long-horizon tuning",
        paragraphs: [
          "Six-month subscribers benefit from deeper titration cycles and seasonal adjustments. Three-month plans focus on establishing a stable baseline you can extend or refine.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why subscribe upfront?",
        answer:
          "Metabolic care requires continuity. Upfront 3- and 6-month plans align your care team around sustained outcomes—not transactional visits.",
      },
      {
        question: "Can I cancel?",
        answer:
          "Terms depend on your plan and clinical status. See our Terms page for details; clinical safety always comes first.",
      },
    ],
  },
  "our-program": {
    slug: "our-program",
    title: "Our program",
    category: "Understand",
    readTime: "5 min read",
    published: "May 2026",
    lead:
      "One adaptive program with clinician guidance from day one—structured subscription plans, transparent pricing, and protocols that evolve with you.",
    heroImage: {
      src: NAV_IMAGES.protocolProduct,
      alt: "Athene Health clinical protocol",
    },
    sections: [
      {
        heading: "Clinical intake",
        paragraphs: [
          "Structured assessment and eligibility review with licensed providers. We don’t prescribe first and ask questions later.",
        ],
      },
      {
        heading: "Personalized protocol",
        paragraphs: [
          "Your plan reflects your goals, biomarkers, and context—therapeutics where appropriate, lifestyle guidance always, education throughout.",
        ],
      },
      {
        heading: "Ongoing adaptation",
        paragraphs: [
          "Check-ins and marker review at intervals matched to your subscription. Adjustments are deliberate, documented, and explained.",
        ],
      },
      {
        heading: "3- and 6-month subscriptions",
        paragraphs: [
          "Choose the horizon that fits your goals. Six months for deeper metabolic recalibration; three months to establish a strong foundation with option to renew.",
          "Join the waitlist for launch pricing and early access to assessment booking.",
        ],
      },
    ],
  },
};
