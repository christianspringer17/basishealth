import Image from "next/image";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PricingCards } from "@/components/marketing/PricingCards";
import { BasalButton } from "@/components/landing/ui";
import { MEDIA } from "@/lib/media";

const features = [
  {
    title: "Eligibility screening & clinician review",
    body: "Structured intake helps licensed providers determine whether GLP-1 therapy is medically appropriate—no rubber-stamp prescriptions.",
  },
  {
    title: "Personalized GLP-1 protocol",
    body: "Dosing, titration, and supportive care tailored to your goals and biology—not a one-size-fits-all template.",
  },
  {
    title: "Ongoing adaptive care",
    body: "Scheduled check-ins and thoughtful adjustments as your body responds over a 3- or 6-month subscription.",
  },
  {
    title: "Metabolic literacy",
    body: "Education and counseling so you understand the markers that predict long-term health—not just short-term scale change.",
  },
];

const faqs = [
  {
    q: "What is included in my subscription?",
    a: "Clinician review, personalized protocol design, scheduled check-ins, and dosing support. Medication is included where medically appropriate and prescribed.",
  },
  {
    q: "Why pay upfront for 3 or 6 months?",
    a: "Metabolic care requires continuity. Upfront plans align your care team around sustained outcomes and allow proper titration windows.",
  },
  {
    q: "Is GLP-One right for everyone?",
    a: "No. Eligibility depends on medical history, goals, and clinician review. Complete the assessment to find out if care is appropriate for you.",
  },
  {
    q: "Can I use HSA/FSA?",
    a: "Many members use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
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
      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-start gap-6 md:col-span-14 md:col-start-6">
            <p className="text-h5 text-grey-7">Athene Health Protocol</p>
            <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-9">
              GLP-One™ Tirzepatide
            </h1>
            <p className="text-h1-lg max-w-[760px] text-pretty text-grey-7">
              Clinician-guided treatment with personalized dosing support, built
              for long-term metabolic health.
            </p>
            <p className="text-h5 text-grey-7">
              Compounded tirzepatide from $199/month on 6-month plans · Includes
              medication, dosing support, and clinician consultations
            </p>
            <BasalButton href="/signup">Begin clinical assessment</BasalButton>
          </div>
        </div>

        <div className="site-container site-grid w-full">
          <div className="col-span-full md:col-span-18 md:col-start-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-basal-2xl bg-white md:aspect-[16/9]">
              <Image
                src={MEDIA.intro}
                alt="GLP-One clinical protocol supplies"
                fill
                className="object-contain p-8"
                sizes="(max-width: 860px) 100vw, 80vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-h5 text-grey-7">
              Imagery is illustrative. Actual medication appearance may vary by
              compounding pharmacy partner.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
        <div className="site-container site-grid w-full gap-y-12">
          <h2 className="col-span-full text-h1-lg text-grey-9 md:col-span-16 md:col-start-5">
            A clinician-supervised program with personalized dosing and ongoing
            care
          </h2>
          <div className="col-span-full grid gap-6 md:col-span-20 md:col-start-3 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-basal-lg border border-[var(--grey-3)] bg-white p-6"
              >
                <h3 className="text-h4 text-grey-9">{feature.title}</h3>
                <p className="mt-2 text-h5 text-pretty text-grey-7">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full gap-y-12">
          <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
            <h2 className="text-h1-lg text-grey-9">
              GLP-1 changes appetite. Care determines outcomes.
            </h2>
            <p className="text-h3 max-w-[620px] text-pretty text-grey-7">
              Choose the subscription term that fits your goals. Pay upfront for
              3 or 6 months of clinician-guided care.
            </p>
          </div>
          <div className="col-span-full md:col-span-18 md:col-start-4">
            <PricingCards ctaHref="/signup" />
          </div>
        </div>
      </section>

      <section className="section-shell w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full md:col-span-14 md:col-start-6">
            <h2 className="text-h1-lg mb-8 text-grey-9">Questions are good.</h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-[var(--grey-3)] pb-6">
                  <h3 className="text-h4 text-grey-9">{faq.q}</h3>
                  <p className="mt-2 text-body text-pretty text-grey-7">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <BasalButton href="/signup">Is GLP-One right for me?</BasalButton>
            </div>
          </div>
        </div>
      </section>

      <ConversionBand
        title="Begin with clarity."
        description="Complete a short clinical assessment to see if GLP-One is appropriate for your body and goals."
        primaryLabel="Begin clinical assessment"
        primaryHref="/signup"
        secondaryLabel="Learn more"
        secondaryHref="/learn/what-to-expect"
      />
    </MarketingShell>
  );
}
