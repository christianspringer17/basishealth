import Image from "next/image";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { FeaturesList } from "@/components/marketing/FeaturesList";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MarketingVisualBlock } from "@/components/marketing/MarketingVisualBlock";
import { MetabolicMarkersSection } from "@/components/marketing/MetabolicMarkersSection";
import { PricingCards } from "@/components/marketing/PricingCards";
import { BasalButton } from "@/components/landing/ui";
import { SIGNUP_HREF, SIGNUP_LABELS } from "@/lib/cta";
import { MEDIA } from "@/lib/media";

const GLP_FEATURES = [
  "Eligibility screening and clinician review",
  "Personalized GLP-1 protocol",
  "Ongoing adaptive care",
  "Metabolic literacy",
];

const GLP_FAQS = [
  {
    question: "What is tirzepatide?",
    answer:
      "Tirzepatide is a GLP-1/GIP receptor agonist used under clinician supervision for metabolic health. Your provider determines whether it is appropriate based on your history and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary. Many patients notice appetite and energy shifts within weeks; meaningful metabolic change often requires months of consistent protocol and follow-up.",
  },
  {
    question: "What is included in my protocol?",
    answer:
      "Clinician review, personalized protocol design, scheduled check-ins, and dosing support. Medication is included where medically appropriate and prescribed.",
  },
  {
    question: "Why offer 3- and 6-month plans?",
    answer:
      "Metabolic care requires continuity. Longer plans align your care team around sustained outcomes and allow proper titration windows.",
  },
  {
    question: "Is GLP-One right for everyone?",
    answer:
      "No. Eligibility depends on medical history, goals, and clinician review. Complete the assessment to find out if care is appropriate for you.",
  },
  {
    question: "Do you take FSA/HSA?",
    answer:
      "Many members use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
  },
];

export const metadata = {
  title: "GLP-One",
  description:
    "Clinician-guided GLP-1 metabolic care with 3- and 6-month subscription plans from Athene Health.",
};

export default function GlpOnePage() {
  return (
    <MarketingShell>
      <div className="marketing-page">
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full">
            <header className="editorial-page-hero col-span-full md:col-span-18 md:col-start-4">
              <h1 className="text-h1-xl text-pretty text-grey-9">GLP-One™ Tirzepatide</h1>
              <p className="text-h1-lg max-w-[760px] text-pretty text-grey-7">
                Clinician-guided treatment with personalized dosing support, built for
                long-term metabolic health.
              </p>
              <p className="text-h5 text-grey-7">
                Compounded tirzepatide from $199/month on 6-month plans
              </p>
              <p className="text-h5 text-grey-7">
                Includes medication, personalized dosing support, and clinician
                consultations. Imagery is illustrative; actual medication appearance may
                vary by compounding pharmacy partner.
              </p>
              <div className="pt-2">
                <BasalButton href={SIGNUP_HREF}>{SIGNUP_LABELS.assessment}</BasalButton>
              </div>
            </header>
          </div>

          <div className="site-container site-grid w-full">
            <div className="col-span-full flex justify-center md:col-span-12 md:col-start-7">
              <div className="editorial-figure editorial-figure--product bg-white">
                <Image
                  src={MEDIA.intro}
                  alt="GLP-One product — tirzepatide protocol supplies"
                  fill
                  className="object-contain p-4 md:p-6"
                  sizes="(max-width: 860px) 320px, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell w-full bg-[var(--grey-1)]">
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-16 md:col-start-5">
              <FeaturesList
                intro="A clinician-supervised GLP-1 program with personalized dosing, ongoing adjustments, and continuous care."
                items={GLP_FEATURES}
              />
            </div>
          </div>
        </section>

        <MarketingVisualBlock />

        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full gap-y-12">
            <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
              <h2 className="text-h1-lg text-grey-9">Find out what&apos;s right for you</h2>
              <p className="text-h3 max-w-[620px] text-pretty text-grey-7">
                Choose a care term that fits your goals. Pricing and eligibility are
                confirmed during your clinical assessment—no payment required to begin.
              </p>
            </div>
            <div className="col-span-full md:col-span-18 md:col-start-4">
              <PricingCards ctaHref={SIGNUP_HREF} />
            </div>
          </div>
        </section>

        <MetabolicMarkersSection showCta={false} />

        <section className="section-shell w-full">
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-14 md:col-start-6">
              <FaqAccordion items={GLP_FAQS} />
              <div className="mt-10">
                <BasalButton href={SIGNUP_HREF}>Is GLP-One right for me?</BasalButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ConversionBand
        primaryLabel={SIGNUP_LABELS.assessment}
        primaryHref={SIGNUP_HREF}
        secondaryLabel="How it works"
        secondaryHref="/about/how-it-works"
      />
    </MarketingShell>
  );
}
