"use client";

import { useState } from "react";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { cn } from "@/components/landing/ui";
import { glpOneAssessmentHref } from "@/lib/cta";
import { trackEvent } from "@/lib/analytics";
import { EdenSectionHeader } from "./EdenSectionHeader";

export function EdenFaqSection() {
  const { faq } = EDEN_HOMEPAGE;
  const ctaHref = glpOneAssessmentHref();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="eden-faq">
      <div className="site-container">
        <EdenSectionHeader
          title={faq.headline}
          subhead={faq.subhead}
          align="center"
          className="eden-faq__head"
        />

        <div className="eden-faq__panel-wrap eden-dash-card">
          <div className="eden-faq__list">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="eden-faq__item">
                  <button
                    type="button"
                    className="eden-faq__trigger"
                    aria-expanded={isOpen}
                    onClick={() => {
                      const next = isOpen ? null : index;
                      setOpenIndex(next);
                      if (next !== null) {
                        trackEvent("faq_expand", {
                          label: item.question,
                          location: "eden_faq",
                        });
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <span className="eden-faq__icon" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div className={cn("eden-faq__panel", isOpen && "eden-faq__panel--open")}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="eden-faq__cta">
          <a href={ctaHref} className="eden-btn eden-btn--primary eden-btn--lg">
            {faq.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
