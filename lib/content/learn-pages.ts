import { learnIndexEntries } from "./learn-index";
import { LEARN_ARTICLE_IMAGES } from "./learn-images";
import type { ArticlePageContent } from "./types";

export { getLearnEntry, learnIndexEntries } from "./learn-index";

const I = LEARN_ARTICLE_IMAGES;

export const learnPages: Record<string, ArticlePageContent> = {
  "protocol-areas": {
    slug: "protocol-areas",
    title: "Your protocol areas",
    category: "Understand",
    readTime: "6 min read",
    published: "March 20, 2026",
    lead:
      "Metabolic health shows up across your day—not in a single lab value. Basis organizes care around the domains where your body actually sends signals, so your protocol stays coherent instead of fragmented.",
    heroImage: I["protocol-areas"],
    sections: [
      {
        heading: "Energy",
        paragraphs: [
          "Stable daily energy is one of the first things people notice when metabolism is working—and one of the first things that slips when it is not. Afternoon crashes, reliance on caffeine, and difficulty recovering after ordinary stress often reflect how your body is regulating glucose, hormones, and sleep together.",
          "We do not treat energy as a mood problem in isolation. We look for patterns: how you feel across weeks, not only on your best day, and how energy tracks with meals, training, and rest.",
        ],
      },
      {
        heading: "Metabolism",
        paragraphs: [
          "Metabolic health is broader than weight. It includes how effectively you dispose of glucose after meals, how you partition fat and lean mass, and whether inflammatory signals are trending in the right direction over time.",
          "Your protocol may include therapeutics when clinically appropriate, but metabolism is never only a prescription. Nutrition timing, movement, and recovery all influence the same systems your clinician is trying to calibrate.",
        ],
      },
      {
        heading: "Recovery and sleep",
        paragraphs: [
          "Rest is a metabolic input, not a reward for finishing your to-do list. Poor sleep raises cortisol, blunts insulin sensitivity, and makes the same meal land differently the next day.",
          "We factor sleep quality, training load, and stress into how your plan should evolve—especially on longer plans where titration and follow-up have room to matter.",
        ],
      },
      {
        heading: "Healthy aging and performance",
        paragraphs: [
          "Some members come in focused on healthspan; others want reliable output for work, sport, or family life. The principle is the same: align interventions to markers that predict sustainable vitality, not short-term spikes that fade.",
          "Basis Metabolic is our first live track. Additional protocol areas are coming. What stays constant is one care relationship that compounds as new tracks launch.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to optimize every area at once?",
        answer:
          "No. Your licensed provider prioritizes the domains most relevant to your goals, history, and labs—then expands the plan as you progress. The aim is a coherent protocol, not a checklist you tackle alone.",
      },
      {
        question: "How do protocol areas connect to Basis Metabolic?",
        answer:
          "Basis Metabolic is physician-guided GLP-1 care when appropriate, wrapped in ongoing review and support. These areas describe where we look for signal—not separate products you have to assemble yourself.",
      },
    ],
  },
  "as-unique-as-your-goals": {
    slug: "as-unique-as-your-goals",
    title: "As unique as your goals",
    category: "Understand",
    readTime: "7 min read",
    published: "March 20, 2026",
    lead:
      "The same meal, training block, or medication produces different metabolic responses in different people. A protocol that ignores that variation will underperform—even when the underlying science is sound.",
    heroImage: I["as-unique-as-your-goals"],
    sections: [
      {
        heading: "The same input, different outcomes",
        paragraphs: [
          "Continuous glucose monitoring studies make the variation visible: two people with similar BMI and fasting labs can have meaningfully different post-meal curves. Genetics, sleep debt, meal timing, muscle mass, stress, and gut ecology all modify how you process the same intervention.",
          "Population averages are a starting point for research, not a prescription for your body. Basis is built around individual response—starting with eligibility review and continuing through titration and follow-up.",
        ],
      },
      {
        heading: "Goals shape the protocol—not the other way around",
        paragraphs: [
          "Weight change may be part of your story, but it is rarely the whole story. Some members prioritize energy stability, cardiometabolic risk reduction, or preserving lean mass while losing fat. Your clinician uses that context when deciding what to measure and what to adjust.",
          "That is why intake asks about more than a number on the scale. The protocol should reflect what you are trying to improve, not a generic path copied from a brochure.",
        ],
      },
      {
        heading: "Why continuity matters",
        paragraphs: [
          "Meaningful metabolic change rarely fits a 30-day window. Hormonal signaling, body composition, and insulin sensitivity shift over weeks and months. Longer plans give your care team room to titrate, observe, and adjust without forcing premature conclusions.",
          "You are not buying a one-time product. You are working with licensed providers who can reinterpret markers as your body responds—and explain what changed and why.",
        ],
      },
      {
        heading: "Calibration over perfection",
        paragraphs: [
          "The goal is not exhaustive self-tracking. It is enough structured signal—symptoms, lifestyle context, and labs when appropriate—to know whether your protocol is working for you.",
          "Basis integrates those inputs so adjustments are informed, not guessed. When something drifts, you have a team and a record—not a silent refill and a hope that this month feels different.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will my plan look like someone else's?",
        answer:
          "Only at the level of principles: physician review, transparency, and ongoing adaptation. Dosing, labs, and lifestyle guidance should differ based on your history, goals, and how you respond over time.",
      },
    ],
  },
  "what-we-measure": {
    slug: "what-we-measure",
    title: "What we measure",
    category: "Measure",
    readTime: "6 min read",
    published: "March 20, 2026",
    lead:
      "We read metabolic health through five pillars—signals that show how well your systems are coordinating, not whether you hit a single number on a lab printout.",
    heroImage: I["what-we-measure"],
    sections: [
      {
        heading: "Insulin sensitivity",
        paragraphs: [
          "How responsive your cells are to insulin affects energy stability, body composition, and long-term cardiometabolic risk. Fasting glucose can stay in range while insulin workload climbs—a pattern that matters before a diabetes diagnosis.",
          "When appropriate, we use labs and context together so treatment starts from where you actually are, not where a population chart says you should be.",
        ],
      },
      {
        heading: "Muscle mass",
        paragraphs: [
          "Skeletal muscle is a major site of glucose disposal and a buffer against metabolic decline with age. Losing muscle while losing weight can improve the scale and still weaken metabolic health.",
          "We pay attention to lean mass—not because everyone needs to look like an athlete, but because muscle is metabolic reserve you will want later.",
        ],
      },
      {
        heading: "Hormonal rhythm",
        paragraphs: [
          "Cortisol, thyroid, and sex hormones interact with metabolism in ways a single snapshot lab can miss. Rhythm and proportion matter: how levels relate to each other, time of day, sleep, and stress.",
          "Your protocol may include lifestyle and therapeutic levers that respect those interactions rather than chasing an isolated value.",
        ],
      },
      {
        heading: "Aerobic reserve",
        paragraphs: [
          "Cardiorespiratory fitness—often summarized as VO₂ max—predicts mortality and metabolic flexibility better than many static labs alone. It reflects how efficiently your body uses oxygen under load and recovers afterward.",
          "You do not need to become an endurance athlete for this to matter. Improving aerobic reserve is one of the most durable investments in metabolic health at any age.",
        ],
      },
      {
        heading: "Body composition",
        paragraphs: [
          "Where you store fat—and how much lean tissue you retain—often matters more than total weight for metabolic outcomes. Two people at the same weight can have very different risk profiles.",
          "We use composition thinking to keep protocols aimed at durable change, not short-term scale wins that reverse when the intervention stops.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need every test on day one?",
        answer:
          "Not always. Your provider orders what is clinically appropriate for your history and goals. The pillars guide what we care about over time—not a blanket panel you pay for regardless of relevance.",
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
      "A straightforward timeline for your first months with Basis—from online assessment through physician review, protocol start, and the follow-ups that keep your plan honest.",
    heroImage: I["what-to-expect"],
    sections: [
      {
        heading: "Step one: Assessment and review",
        paragraphs: [
          "You begin with a structured health assessment. A licensed provider reviews whether Basis care is medically appropriate for you before any treatment is prescribed.",
          "If you are not eligible, you should know clearly and early—not after payment for medication you cannot use. When care is appropriate, next steps are explained in plain language.",
        ],
      },
      {
        heading: "Weeks 1–4: Starting your protocol",
        paragraphs: [
          "If approved, you receive a personalized protocol: what to expect from any prescribed therapy, how dosing may evolve, and how to reach your care team with questions.",
          "Early weeks focus on tolerance, consistency, and baseline signals—how you feel, how you sleep, and whether side effects need clinical attention. This is not a set-and-forget prescription.",
        ],
      },
      {
        heading: "Months 2–3: Titration and adaptation",
        paragraphs: [
          "Most members need dose adjustments. That is normal. Follow-ups exist so changes are deliberate—based on response, not habit.",
          "Longer plans give the fullest window for titration and recalibration. Monthly plans can still work; they are best when you want to establish a baseline before committing to a longer term.",
        ],
      },
      {
        heading: "Ongoing: One relationship, not a series of transactions",
        paragraphs: [
          "Metabolic care is iterative. Markers move, goals shift, life happens. Basis is designed so you are not restarting from zero every time something changes.",
          "As additional protocol tracks launch, the same principle holds: one connected care relationship that grows with you—not a new app or storefront for every intervention.",
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly will I hear back after assessment?",
        answer:
          "Timing depends on clinical volume and completeness of your intake. You will receive clear status updates through the flow—not silence while wondering whether anyone read your answers.",
      },
      {
        question: "What if I need to pause or cancel?",
        answer:
          "Terms depend on your plan and clinical status. See our Terms page for billing details. Clinical safety always comes first; your provider may recommend changes before you change plans on your own.",
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
      "Basis Metabolic is physician-guided GLP-1 care when clinically appropriate—structured as a protocol with transparent pricing, ongoing support, and adjustments as your body responds.",
    heroImage: I["our-program"],
    sections: [
      {
        heading: "Clinical intake first",
        paragraphs: [
          "Care starts with review, not checkout. Licensed providers assess eligibility using your health history and goals before prescribing.",
          "That order matters. Premium care should feel cautious where medicine requires caution—and clear where you need a decision.",
        ],
      },
      {
        heading: "A protocol, not a one-off script",
        paragraphs: [
          "When appropriate, therapy is paired with dosing guidance, refill coordination through U.S. pharmacy partners, and follow-up so the plan can evolve.",
          "Education is part of the product. You should understand what you are taking, why, and what to report if something feels off.",
        ],
      },
      {
        heading: "Plans built for continuity",
        paragraphs: [
          "Choose monthly or multi-month billing based on your commitment and value preference. Longer plans are recommended when you want the full titration window most clinicians prefer for GLP-1 care.",
          "Pricing is stated upfront. You are only charged for prescribed care when a provider approves you—no surprise layers buried in fine print.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "Basis Metabolic is live today. Additional protocol tracks—for hormones, longevity, recovery, and performance—are coming with the same standard: physician review, personalized recommendations, and one relationship over time.",
          "Start with the online assessment when you are ready. If care is not appropriate, we would rather tell you than sell you something that does not fit.",
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
      "Fasting glucose is a lagging indicator. Insulin sensitivity often shifts years before glucose crosses a threshold your doctor flags—quietly, then all at once.",
    heroImage: I["why-insulin-sensitivity-matters"],
    sections: [
      {
        heading: "The hidden workload",
        paragraphs: [
          "When cells become less responsive to insulin, the pancreas compensates by secreting more. For a long time, fasting glucose can remain normal while pancreatic workload rises—a pattern sometimes visible on fasting insulin before glucose alone tells the full story.",
          "Many people discover insulin resistance only after years of compensation. Earlier signal gives clinicians a fairer starting point for intervention.",
        ],
      },
      {
        heading: "What you may feel before the lab moves",
        paragraphs: [
          "Energy crashes after meals, difficulty skipping snacks, waist gain despite stable weight elsewhere, and cravings that feel hormonal rather than habitual can all accompany declining sensitivity—though none of them alone is diagnostic.",
          "Symptoms are clues, not verdicts. They help your provider interpret labs and history together.",
        ],
      },
      {
        heading: "Why this matters for treatment",
        paragraphs: [
          "GLP-1 therapies and lifestyle changes work differently depending on where you sit on the insulin sensitivity spectrum. Starting point influences titration pace, side-effect profile, and what success should look like at 90 days.",
          "Basis calibrates to your context rather than applying a single template because the same drug is not the same experience in every body.",
        ],
      },
      {
        heading: "What improvement looks like",
        paragraphs: [
          "Better sensitivity often shows up as steadier energy, improved post-meal curves, and easier fat loss when that is a goal—sometimes before every lab normalizes.",
          "The aim is coordination: your body handling fuel without constant override from hunger, stress, or medication side effects you were never meant to ignore.",
        ],
      },
    ],
  },
  "five-metabolic-pillars": {
    slug: "five-metabolic-pillars",
    title: "The five pillars we use to read metabolic health",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    lead:
      "Five signals—insulin sensitivity, muscle mass, hormonal rhythm, aerobic reserve, and body composition—describe how your metabolic systems talk to each other. None of them alone is sufficient.",
    heroImage: I["five-metabolic-pillars"],
    sections: [
      {
        heading: "More than one marker",
        paragraphs: [
          "Scale weight and fasting glucose are easy to track and easy to misread. They summarize outcomes without explaining coordination—the way muscle, liver, fat tissue, and hormones negotiate fuel hour by hour.",
          "We use five pillars so care does not overfit to whichever number moved last. A drop on the scale means something different if lean mass fell with it.",
        ],
      },
      {
        heading: "How the pillars interact",
        paragraphs: [
          "Insulin sensitivity influences whether muscle acts as a glucose sink. Hormonal rhythm shapes sleep, appetite, and where fat is stored. Aerobic reserve reflects mitochondrial health and recovery capacity. Composition shows whether weight change helped or hurt your long-term profile.",
          "When one pillar drifts, others often follow. Protocols that address only the symptom—without the network—tend to rebound.",
        ],
      },
      {
        heading: "What we do with the picture",
        paragraphs: [
          "Your provider does not chase five dashboards for sport. They use the pillars to decide what to measure next, what to explain, and what to change when response plateaus.",
          "That is the difference between a lab list and a protocol: priorities that stay coherent month to month.",
        ],
      },
      {
        heading: "Where Basis Metabolic fits",
        paragraphs: [
          "GLP-1 care, when appropriate, acts on appetite and glycemic control—but it lands in a body with a specific composition, training history, and insulin profile. Pillars keep therapy grounded in that reality.",
          "As Basis adds tracks beyond metabolism, the same integrated read will apply. The pillars are how we keep care intelligent as the menu grows.",
        ],
      },
    ],
  },
  "why-muscle-is-metabolic-reserve": {
    slug: "why-muscle-is-metabolic-reserve",
    title: "Why muscle is metabolic reserve",
    category: "Understand",
    readTime: "5 min read",
    published: "March 20, 2026",
    lead:
      "Skeletal muscle is not only for strength and posture. It is one of your largest metabolic organs—and one of the first reserves you spend when weight loss goes wrong.",
    heroImage: I["why-muscle-is-metabolic-reserve"],
    sections: [
      {
        heading: "Muscle as an organ",
        paragraphs: [
          "Muscle tissue stores glycogen, disposes of blood glucose after meals, and influences resting energy expenditure. It also produces signaling molecules that affect insulin sensitivity elsewhere in the body.",
          "Protocols that chase scale weight without protecting lean mass often trade a short-term win for a harder metabolic problem later.",
        ],
      },
      {
        heading: "Aging and inactivity",
        paragraphs: [
          "Adults lose muscle gradually with age and disuse. The decline is easy to miss on a bathroom scale—especially when fat mass rises at the same time.",
          "Resistance training and adequate protein are not vanity choices here. They are metabolic hygiene, particularly during intentional weight loss.",
        ],
      },
      {
        heading: "GLP-1 care and lean mass",
        paragraphs: [
          "GLP-1 therapies can produce meaningful fat loss. They can also reduce lean mass if nutrition and training are ignored. Physician-guided protocols should name that tradeoff openly.",
          "Your plan may emphasize protein targets, strength work, and follow-up so loss comes from fat preferentially—not from the tissue you need to keep.",
        ],
      },
      {
        heading: "Practical takeaway",
        paragraphs: [
          "You do not need a perfect gym routine to benefit. Consistent resistance work, sufficient protein, and sleep that supports recovery move the needle even when weight change is modest.",
          "Muscle is metabolic reserve you earn slowly and spend quickly. Basis treats it that way.",
        ],
      },
    ],
  },
  "meet-your-metabolism": {
    slug: "meet-your-metabolism",
    title: "Meet Your Metabolism",
    category: "Improve",
    readTime: "12 min read",
    published: "October 2, 2025",
    lead:
      "Metabolism is often described as speed—fast or slow, efficient or sluggish. What metabolism actually does is coordinate: how your body partitions fuel, shifts between substrates, and responds to hormones across the day.",
    heroImage: I["meet-your-metabolism"],
    sections: [
      {
        heading: "Beyond the calorie model",
        paragraphs: [
          "The calorie model has shaped public thinking for decades. There is truth in it: energy balance matters. But it narrows metabolism to accounting—calories in, calories out—while the body is running a regulatory system.",
          "Your brain, liver, muscle, fat tissue, and gut communicate continuously about fuel availability. They adjust hormone output, appetite, and where energy is stored or released. That is coordination, not arithmetic.",
          "If metabolism is coordination, the useful questions are about insulin sensitivity, tissue responsiveness, body composition, and timing. Calories still count. They are rarely sufficient to explain why two people eating similarly diverge so sharply.",
        ],
      },
      {
        heading: "Insulin as a coordination hormone",
        paragraphs: [
          "Insulin regulates blood sugar, but it also directs partitioning—whether incoming nutrients are burned, stored as glycogen, or deposited as fat, and whether stored fat is released between meals.",
          "After you eat, insulin rises and the body prioritizes handling the meal. Hours later, insulin falls and fat mobilization becomes easier—when sensitivity is intact.",
          "When sensitivity erodes, muscle absorbs less glucose, the liver may release glucose despite adequate levels, and the pancreas compensates with more insulin. Fasting glucose can remain normal for years while workload climbs. That is why standard screening sometimes feels late.",
        ],
      },
      {
        heading: "Why muscle matters",
        paragraphs: [
          "Skeletal muscle is the largest insulin-responsive tissue and the primary destination for blood sugar after a meal in a metabolically healthy person. Less muscle means less disposal capacity and more insulin required for the same carbohydrate load.",
          "Resistance training improves insulin sensitivity in research even when scale weight does not change—the tissue becomes a more effective sink for glucose. Muscle loss from aging, inactivity, or illness has metabolic consequences beyond strength or appearance.",
          "This is why Basis pays attention to lean mass during weight loss, not only the number on the scale.",
        ],
      },
      {
        heading: "Fat tissue is active tissue",
        paragraphs: [
          "Fat is not inert storage. It secretes hormones and inflammatory signals that influence appetite, insulin action, and liver behavior. Visceral fat—around organs—tends to be more metabolically active and more harmful than subcutaneous fat under the skin.",
          "Where you gain or lose fat can matter as much as how much. Two people at the same weight can have different risk profiles based on composition and distribution.",
        ],
      },
      {
        heading: "Metabolic flexibility",
        paragraphs: [
          "A well-coordinated metabolism shifts between fuel sources: glucose after carbohydrate, fat between meals and overnight. As insulin resistance progresses, flexibility often degrades—afternoon crashes, difficulty fasting, fat stores that feel inaccessible even when calories are controlled.",
          "Flexibility usually improves when sensitivity improves: regular training, meal patterns that allow insulin to fall, adequate sleep, stress management, and therapeutics when clinically appropriate.",
          "The shift is usually gradual—felt in daily energy before it appears on every lab panel. That is normal. It is also why short-term fixes that never address sensitivity tend to rebound.",
        ],
      },
      {
        heading: "Circadian timing",
        paragraphs: [
          "Metabolism is not the same at 8 a.m. and 10 p.m. Cortisol, melatonin, and insulin sensitivity follow rhythms. Late heavy meals, irregular sleep, and shift work can all blunt the signals that keep partitioning clean.",
          "You do not need perfect schedules. You do need awareness that timing is a variable—not a moral test.",
        ],
      },
      {
        heading: "What physician-guided care adds",
        paragraphs: [
          "Self-experimentation has limits. Some interventions require clinical judgment, monitoring, and pharmacy-grade therapies. GLP-1 medicines, when appropriate, act on appetite and glycemic control—but they land in the coordinated system described above.",
          "Basis exists to make that landing deliberate: eligibility review, personalized dosing, follow-up, and a protocol that can change when your body responds. Metabolism is not a mystery you solve alone in a weekend. It is a relationship you manage with good data and good clinicians.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is metabolism really about calories?",
        answer:
          "Calories contribute to energy balance. How your body partitions, stores, and mobilizes fuel depends on insulin sensitivity, muscle mass, hormonal timing, and flexibility. The calorie framework is part of the picture—not the whole of it.",
      },
      {
        question: "Does exercise help without weight loss?",
        answer:
          "Yes. Resistance training improves insulin sensitivity and glucose disposal independent of scale weight. Aerobic work supports cardiorespiratory reserve. Both influence how you handle fuel day to day.",
      },
      {
        question: "Where should I start if this feels overwhelming?",
        answer:
          "Start with assessment and honest baselines: how you sleep, how you eat, how energy swings through the day, and what labs show when clinically appropriate. A protocol builds from signal—not from guilt.",
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
