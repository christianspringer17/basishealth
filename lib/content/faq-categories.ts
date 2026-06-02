import type { FaqItem } from "@/components/marketing/FaqAccordion";
import { max3MonthSavings } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/site";

const maxSavings = max3MonthSavings();

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "common",
    label: "Most common",
    items: [
      {
        question: "What is Basis?",
        answer:
          "Basis is a membership-based protocol clinic. We start with metabolic care and expand into hormone, longevity, recovery, and performance tracks — all under one connected membership and care team.",
      },
      {
        question: "Do I need a prescription?",
        answer:
          "Many therapies on Basis require a prescription and provider review. Membership gives you access to clinical oversight; medications and peptides are prescribed separately when clinically appropriate.",
      },
      {
        question: "How is Basis different from biomarker-only services?",
        answer:
          "Several popular longevity brands focus on testing — hundreds of labs, scores, and dashboards — but leave you to interpret results and find treatment on your own. Basis is built around protocol-based care: provider review, personalized recommendations, ongoing support, and recalibration. Labs are optional tools, not the product.",
      },
      {
        question: "Is Basis just another GLP-1 company?",
        answer:
          "No. GLP-1 therapy may be part of Basis Metabolic when appropriate, but Basis is a protocol clinic — membership, clinical oversight, and multiple therapy tracks over time.",
      },
      {
        question: "How do I get started?",
        answer:
          "Apply for membership on our homepage. When enrollment opens, intake runs through our clinical partner. Access to therapy is subject to provider review, eligibility, and applicable regulations.",
      },
    ],
  },
  {
    id: "membership",
    label: "Membership",
    items: [
      {
        question: "What's included in membership?",
        answer:
          "Membership includes portal access, provider review, personalized protocol recommendations, ongoing support, recalibration consults, and member pricing on therapies when eligible. Membership starts at $60/month.",
      },
      {
        question: "Does membership include therapies or medications?",
        answer:
          "No. Therapies, labs, medications, peptides, and supplements are purchased separately when clinically appropriate. Membership is your access layer — the clinical relationship and protocol guidance.",
      },
      {
        question: "Is there a long-term commitment?",
        answer:
          "Membership is billed monthly. You can pause or cancel according to the terms in your member agreement. We design for long-term protocol relationships, not lock-in.",
      },
      {
        question: "Can I access therapy without membership?",
        answer:
          "No. Basis is membership-based. Therapies are available only through the appropriate care pathway after intake and provider review.",
      },
      {
        question: "How much do therapies typically cost?",
        answer:
          "Pricing varies by protocol and tier. GLP-1 therapy on Basis Metabolic starts around $240/month for microdose and $340/month for weight-loss titration — separate from the $60 membership fee. Your clinician recommends what fits after review.",
      },
    ],
  },
  {
    id: "protocols",
    label: "Protocols",
    items: [
      {
        question: "What protocol tracks are available?",
        answer:
          "Basis Metabolic is live today. Hormone, Longevity, Recovery, and Performance tracks are coming soon. Members build on one connected care relationship as new tracks launch.",
      },
      {
        question: "What is Basis Metabolic?",
        answer:
          "Basis Metabolic is our live metabolic health protocol — weight management, appetite regulation, energy, and long-term metabolic support. GLP-1 therapy may be included when clinically appropriate.",
      },
      {
        question: "Are peptides part of Basis?",
        answer:
          "Peptides and other advanced therapies may be recommended within specific protocol tracks when clinically appropriate. They are prescribed and purchased separately — never bundled into membership by default.",
      },
      {
        question: "How often does my protocol change?",
        answer:
          "Protocols evolve with your response, labs (when used), and goals. Recalibration is built into membership — not a one-time prescription at checkout.",
      },
    ],
  },
  {
    id: "labs",
    label: "Labs & diagnostics",
    items: [
      {
        question: "Are labs required?",
        answer:
          "No. Labs are optional and recommended when they help refine your protocol. Unlike lab-first platforms that center the entire experience on testing, Basis treats diagnostics as one input among many.",
      },
      {
        question: "How is Basis different from Function, Superpower, and similar brands?",
        answer:
          "Those services excel at comprehensive biomarker testing and health scores. Basis is for people who want a clinician-guided protocol — not just data. We help you decide what to do with your results, adjust over time, and access therapies through a single care pathway when appropriate.",
      },
      {
        question: "Can I bring labs from another provider?",
        answer:
          "In many cases, yes. Share prior results during intake so your clinician can incorporate them into protocol planning. Your provider will note if additional testing would be useful.",
      },
      {
        question: "Do you offer HSA/FSA?",
        answer:
          "Many members use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
      },
    ],
  },
  {
    id: "glp-one",
    label: "GLP-One",
    items: [
      {
        question: "What is GLP-One?",
        answer:
          "GLP-One is Basis Metabolic's physician-supervised GLP-1 program — modern GLP-1 therapeutics, optional diagnostics, and ongoing clinical oversight. Your protocol adapts as your body responds.",
      },
      {
        question: "How does GLP-1 therapy relate to membership?",
        answer:
          "Membership is required and starts at $60/month. GLP-1 therapy tiers reflect medication and care pricing separate from membership. Eligible plans include clinician review, protocol design, check-ins, and dosing support.",
      },
      {
        question: "Microdose vs. weight loss — what's the difference?",
        answer:
          "Microdose ($240/mo) emphasizes metabolic optimization with lower starting doses. Weight Loss ($340/mo) uses a titration path focused on body-composition goals. Your clinician recommends the appropriate tier after eligibility review.",
      },
      {
        question: "Why offer 1- and 3-month options?",
        answer: `Monthly plans offer flexibility. Three-month plans bundle your care upfront — our recommended path for titration and the best per-month value (save up to $${maxSavings} vs. paying monthly).`,
      },
      {
        question: "Is GLP-One right for everyone?",
        answer:
          "No. Eligibility depends on medical history, goals, and clinician review. Apply for membership for launch updates or complete checkout when enrollment is live.",
      },
    ],
  },
  {
    id: "account",
    label: "Getting started",
    items: [
      {
        question: "Where is Basis available?",
        answer:
          "We are building toward nationwide availability. Apply for membership or contact us for the latest on your state.",
      },
      {
        question: "How do I contact Basis?",
        answer: `Email ${SITE_EMAIL} for general questions. Billing and clinical support lines will be listed on your member materials when you enroll.`,
      },
      {
        question: "What happens after I apply?",
        answer:
          "You'll receive updates as enrollment opens in your area. When live, intake and checkout run through our clinical partner — provider review happens before any therapy is prescribed.",
      },
    ],
  },
];

/** Flat list for pages that need all homepage FAQs */
export const HOME_FAQS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);
