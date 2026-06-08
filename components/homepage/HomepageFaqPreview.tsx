"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/components/landing/ui";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";
import { trackEvent } from "@/lib/analytics";

export function HomepageFaqPreview() {
  const { faqPreview } = HOMEPAGE_CONTENT;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="homepage-section homepage-articles">
      <div className="site-container">
        <h2 className="homepage-section__title">Recent Articles</h2>
      </div>

      <div className="homepage-rail-wrap">
        <div className="homepage-rail">
          {faqPreview.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="homepage-article-tile">
                <button
                  type="button"
                  className="homepage-article-tile__trigger"
                  aria-expanded={isOpen}
                  onClick={() => {
                    const next = isOpen ? null : index;
                    setOpenIndex(next);
                    if (!isOpen) {
                      trackEvent("faq_expand", {
                        label: item.question,
                        location: "homepage_faq",
                      });
                    }
                  }}
                >
                  <span className="homepage-article-tile__read">Read More</span>
                  <h3 className="homepage-article-tile__title">{item.question}</h3>
                  <time className="homepage-article-tile__date" dateTime="2025-01-02">
                    01.02.2025
                  </time>
                </button>
                <div
                  className={cn(
                    "homepage-article-tile__panel",
                    isOpen && "homepage-article-tile__panel--open",
                  )}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="site-container homepage-articles__footer">
        <Link
          href={faqPreview.linkHref}
          className="homepage-articles__all"
          data-analytics-event="homepage_to_glp_one_click"
          data-analytics-label="see_all_faq"
          data-analytics-location="homepage_faq"
          data-analytics-href={faqPreview.linkHref}
        >
          {faqPreview.linkLabel}
        </Link>
      </div>
    </section>
  );
}
