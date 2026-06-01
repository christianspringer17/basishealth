import { EDITORIAL_IMAGES } from "@/lib/media";
import { learnIndexEntries } from "./learn-index";
import type { ArticlePageContent } from "./types";

export { getLearnEntry, learnIndexEntries } from "./learn-index";

const E = EDITORIAL_IMAGES;

export const learnPages: Record<string, ArticlePageContent> = {
  "protocol-areas": {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "4 min read",
    published: "March 20, 2026",
    lead:
      "Basis Health organizes care around the domains where metabolic health shows up in daily life—so your protocol stays coherent instead of fragmented.",
    heroImage: { src: E.coastalSky, alt: "Coastal horizon at dawn" },
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
          "Rest and repair are metabolic inputs. Sleep quality, training load, and stress shape how your protocol should evolve over a 1- or 3-month plan.",
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
    published: "March 20, 2026",
    lead:
      "Identical meals, training plans, and medications produce different metabolic responses in different people. Your protocol should reflect that variation—not ignore it.",
    heroImage: { src: E.wellnessField, alt: "Resting in a field of wildflowers" },
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
          "Metabolic change rarely follows a 30-day timeline. A 3-month commitment gives your clinician room to titrate, observe, and adjust without rushing toward the wrong outcome.",
          "You’re not buying a product—you’re investing in a relationship with measurable markers and clear checkpoints.",
        ],
      },
      {
        heading: "Calibration over perfection",
        paragraphs: [
          "The goal isn’t exhaustive self-tracking. It’s enough structured data—labs, symptoms, and lifestyle context—to know whether your protocol is working for your body.",
          "Basis Health integrates those signals so adjustments are informed, not guessed.",
        ],
      },
    ],
  },
  "what-we-measure": {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "5 min read",
    published: "March 20, 2026",
    lead:
      "We focus on five metabolic markers that predict long-term health—signals that tell us how well your systems are communicating.",
    heroImage: { src: E.clinicalBlue, alt: "Clinical science imagery" },
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
    published: "March 20, 2026",
    lead:
      "A clear timeline for your first months with Basis Health—from eligibility review through protocol adaptation on a 1- or 3-month plan.",
    heroImage: { src: E.wellnessField, alt: "Patient-centered clinical care" },
    sections: [
      {
        heading: "Week 1: Intake & eligibility",
        paragraphs: [
          "Complete your health intake during checkout. A licensed provider reviews whether Basis Health is medically appropriate for you before any treatment begins.",
        ],
      },
      {
        heading: "Weeks 2–4: Protocol initiation",
        paragraphs: [
          "If approved, you receive a personalized protocol with clear expectations for labs, check-ins, and lifestyle inputs. Your subscription term (1 or 3 months) starts here.",
        ],
      },
      {
        heading: "Months 2–3: Adaptation & renewal",
        paragraphs: [
          "Three-month plans include a full titration window and structured follow-ups. One-month plans establish a baseline you can renew or upgrade to 3 months for better value.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why subscribe upfront?",
        answer:
          "Metabolic care requires continuity. Upfront 3-month plans align your care team around sustained outcomes—not transactional visits.",
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
    published: "March 20, 2026",
    lead:
      "One adaptive program with clinician guidance from day one—structured subscription plans, transparent pricing, and protocols that evolve with you.",
    heroImage: { src: E.clinicalBlue, alt: "Basis Health Health clinical protocol" },
    sections: [
      {
        heading: "Clinical intake",
        paragraphs: [
          "Structured intake and eligibility review with licensed providers. We don’t prescribe first and ask questions later.",
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
        heading: "Microdose, weight loss & billing terms",
        paragraphs: [
          "Choose Microdose or Weight Loss based on your goals, then select monthly or 3-month billing. Three-month plans offer the best per-month value and are our recommendation for meaningful titration.",
          "Join the waitlist for launch updates, or complete checkout through our clinical partner when enrollment is open.",
        ],
      },
    ],
  },
  "why-insulin-sensitivity-matters": {
    slug: "why-insulin-sensitivity-matters",
    title: "Why insulin sensitivity matters before glucose goes wrong",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    lead:
      "Fasting glucose is a lagging indicator. Insulin sensitivity often shifts years before glucose crosses a diagnostic threshold.",
    heroImage: { src: E.clinicalBlue, alt: "Metabolic markers and insulin sensitivity" },
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
    published: "March 20, 2026",
    lead:
      "Five signals—insulin sensitivity, muscle mass, hormonal rhythm, aerobic reserve, and body composition—tell us how your metabolic systems communicate.",
    heroImage: { src: E.clinicalBlue, alt: "Five metabolic health pillars" },
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
    published: "March 20, 2026",
    lead:
      "Skeletal muscle is a primary site of glucose disposal. Preserving and building muscle supports metabolic health across the lifespan.",
    heroImage: { src: E.wellnessField, alt: "Muscle and metabolic reserve" },
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
    readTime: "14 min read",
    published: "October 2, 2025",
    lead:
      "Metabolism is often described as speed: fast or slow, efficient or sluggish. What metabolism actually does is coordinate—how the body partitions fuel, shifts between substrates, and adjusts to hormonal signals and time of day.",
    heroImage: { src: E.coastalSky, alt: "Coastal horizon at dawn" },
    sections: [
      {
        heading: "Beyond the calorie model",
        paragraphs: [
          "The calorie model has shaped public thinking for decades. There is truth in it, but it narrows what metabolism does. The body senses fuel availability, adjusts hormone output, and coordinates decisions across organs—not as a passive calorie ledger.",
          "If metabolism is coordination, the informative questions are about insulin sensitivity, tissue responsiveness, body composition, and timing. Calories still matter; they are not sufficient to explain most of what goes wrong.",
        ],
      },
      {
        heading: "Insulin as a coordination hormone",
        paragraphs: [
          "Insulin regulates blood sugar, but it also directs how the body partitions energy—storage, mobilization, and repair. After a meal, insulin rises and the body processes incoming nutrients. Between meals, insulin falls and stored fat is mobilized.",
          "When sensitivity erodes, muscle absorbs less glucose, the liver may release glucose despite adequate levels, and the pancreas compensates with more insulin. Blood glucose can remain normal for years while workload climbs—a pattern standard fasting glucose alone may miss.",
        ],
      },
      {
        heading: "Why muscle matters",
        paragraphs: [
          "Skeletal muscle is the largest insulin-responsive tissue and the primary destination for blood sugar after a meal in a metabolically healthy person. Less muscle means less disposal capacity and more insulin required for the same load.",
          "Resistance training improves insulin sensitivity in studies even when weight does not change—the tissue becomes a more effective glucose sink. Muscle loss from aging, inactivity, or illness has metabolic consequences beyond strength or appearance.",
        ],
      },
      {
        heading: "Metabolic flexibility",
        paragraphs: [
          "A well-coordinated metabolism shifts between fuel sources: glucose after carbohydrate, fat between meals. As insulin resistance progresses, that flexibility often degrades—difficulty fasting, afternoon crashes, fat stores that feel hard to access.",
          "Flexibility tends to improve when insulin sensitivity improves: regular training, meal timing that allows insulin to fall, adequate sleep, and therapeutics where clinically appropriate. The shift is usually gradual—felt in daily energy before it appears on every lab panel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is metabolism really about calories?",
        answer:
          "Calories contribute to energy balance. How the body partitions, stores, and mobilizes them depends on insulin sensitivity, muscle mass, hormonal timing, and substrate switching—the calorie framework is part of the picture, not the whole of it.",
      },
      {
        question: "Does exercise help without weight loss?",
        answer:
          "Resistance training improves insulin sensitivity and glucose disposal independently of scale weight. Muscle quality and mitochondrial function both influence how well you handle fuel.",
      },
    ],
  },
};

export function getRelatedLearnEntries(slug: string, limit = 2) {
  const current = learnIndexEntries.find((e) => e.slug === slug);
  if (!current) return [];
  return learnIndexEntries
    .filter((e) => e.slug !== slug && e.category === current.category)
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, limit);
}
