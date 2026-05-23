"use client";

import { useState } from "react";
import { cn, Section, SectionHeading } from "./ui";

const faqs = [
  {
    question: "What is Eonic Health?",
    answer:
      "Eonic Health is a modern longevity and performance health platform that combines clinical oversight, diagnostics, and personalized protocol design. We are designed to help you move from fragmented advice toward a clearer, provider-guided plan.",
  },
  {
    question: "Is this medical care?",
    answer:
      "Eonic Health works with licensed medical providers. Services, where offered, involve clinical review and are only available when medically appropriate. Information on this site is for educational purposes and does not replace advice from your own healthcare provider.",
  },
  {
    question: "Are protocols personalized?",
    answer:
      "Yes. Protocols are personalized to your goals and health context, subject to eligibility review and provider guidance—not one-size-fits-all templates.",
  },
  {
    question: "When are you launching?",
    answer:
      "We are preparing for a phased launch. Join the waitlist to receive early access updates as availability expands.",
  },
  {
    question: "Do I need labs?",
    answer:
      "Lab work may be recommended based on your goals and health context, but requirements vary. Your provider will discuss what is appropriate during intake and review.",
  },
  {
    question: "Is this available in every state?",
    answer:
      "Availability will depend on licensure, regulations, and eligibility. We will share state-specific details with waitlist members as we launch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="site-container flex flex-col items-center gap-12 md:gap-16">
        <SectionHeading title="Frequently asked questions" />
        <div className="w-full max-w-2xl divide-y divide-[#e8e4df] rounded-3xl border border-[#e8e4df]/80 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f7f5f2]/50"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-[#171717]">{faq.question}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#e8e4df] text-[#66615c] transition-transform",
                      isOpen && "rotate-45 border-[#C75A2A]/30 text-[#C75A2A]",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-[#66615c]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
