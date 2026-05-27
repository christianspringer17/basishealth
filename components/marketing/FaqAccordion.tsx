"use client";

import { useState } from "react";
import { cn } from "@/components/landing/ui";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  title = "Questions are good. Let's dive in.",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      <h2 className="text-h1-lg text-grey-9">{title}</h2>
      <div className="faq-accordion-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="faq-accordion-item">
              <button
                type="button"
                className="faq-accordion-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-h4 text-grey-9">{item.question}</span>
                <span className="faq-accordion-icon" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={cn(
                  "faq-accordion-panel",
                  isOpen ? "faq-accordion-panel--open" : "",
                )}
              >
                <p className="text-body text-pretty text-grey-7">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
