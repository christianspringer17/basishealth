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
  {
    slug: "why-insulin-sensitivity-matters",
    title: "Why insulin sensitivity matters before glucose goes wrong",
    category: "Understand",
    readTime: "5 min read",
    published: "May 2026",
    description:
      "Fasting glucose can look normal while insulin resistance is already progressing. Here is what to watch for.",
  },
  {
    slug: "five-metabolic-pillars",
    title: "The five pillars we use to read metabolic health",
    category: "Understand",
    readTime: "3 min read",
    published: "May 2026",
    description:
      "How insulin sensitivity, muscle, hormones, aerobic reserve, and body composition form a complete picture.",
  },
  {
    slug: "why-muscle-is-metabolic-reserve",
    title: "Why muscle is metabolic reserve",
    category: "Understand",
    readTime: "3 min read",
    published: "May 2026",
    description:
      "Muscle tissue is not just for strength—it is one of your largest metabolic organs.",
  },
  {
    slug: "meet-your-metabolism",
    title: "Meet Your Metabolism",
    category: "Improve",
    readTime: "6 min read",
    published: "May 2026",
    description:
      "Metabolism is coordination between systems—not a single dial to turn up or down.",
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
          "Complete the clinical assessment to begin with launch pricing.",
        ],
      },
    ],
  },
  "why-insulin-sensitivity-matters": {
    slug: "why-insulin-sensitivity-matters",
    title: "Why insulin sensitivity matters before glucose goes wrong",
    category: "Understand",
    readTime: "5 min read",
    published: "May 2026",
    lead:
      "Fasting glucose is a lagging indicator. Insulin sensitivity often shifts years before glucose crosses a diagnostic threshold.",
    sections: [
      {
        heading: "The hidden workload",
        paragraphs: [
          "When cells become less responsive to insulin, the pancreas compensates by producing more. Fasting glucose can remain normal while pancreatic workload increases—a pattern fasting insulin may reveal earlier.",
        ],
      },
      {
        heading: "Why this matters for treatment",
        paragraphs: [
          "GLP-1 therapies and lifestyle interventions work differently depending on where you sit on the insulin sensitivity spectrum. Calibrating to your starting point improves outcomes.",
        ],
      },
    ],
  },
  "five-metabolic-pillars": {
    slug: "five-metabolic-pillars",
    title: "The five pillars we use to read metabolic health",
    category: "Understand",
    readTime: "3 min read",
    published: "May 2026",
    lead:
      "Five signals—insulin sensitivity, muscle mass, hormonal rhythm, aerobic reserve, and body composition—tell us how your metabolic systems communicate.",
    sections: [
      {
        heading: "More than one marker",
        paragraphs: [
          "Single metrics like scale weight or fasting glucose miss the coordination between systems. Our protocol integrates multiple pillars so care stays coherent.",
        ],
      },
    ],
  },
  "why-muscle-is-metabolic-reserve": {
    slug: "why-muscle-is-metabolic-reserve",
    title: "Why muscle is metabolic reserve",
    category: "Understand",
    readTime: "3 min read",
    published: "May 2026",
    lead:
      "Skeletal muscle is a primary site of glucose disposal. Preserving and building muscle supports metabolic health across the lifespan.",
    sections: [
      {
        heading: "Muscle as an organ",
        paragraphs: [
          "Muscle tissue influences insulin sensitivity, resting metabolic rate, and functional capacity. Protocols that ignore muscle often underperform long-term.",
        ],
      },
    ],
  },
  "meet-your-metabolism": {
    slug: "meet-your-metabolism",
    title: "Meet Your Metabolism",
    category: "Improve",
    readTime: "6 min read",
    published: "May 2026",
    lead:
      "Metabolism is the coordination of fuel use, hormone signaling, and recovery—not a single speed setting on a dial.",
    sections: [
      {
        heading: "Coordination, not speed",
        paragraphs: [
          "Popular culture treats metabolism as fast vs. slow. Clinically, it is more useful to ask whether your systems are communicating well—insulin, cortisol, thyroid, and cellular energy pathways working in concert.",
        ],
      },
      {
        heading: "What you can influence",
        paragraphs: [
          "Sleep, resistance training, protein intake, meal timing, and therapeutics where appropriate all modify metabolic coordination. The right combination depends on your baseline.",
        ],
      },
    ],
  },
};
