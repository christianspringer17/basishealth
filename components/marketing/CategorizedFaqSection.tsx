"use client";

import { useState } from "react";
import { FAQ_CATEGORIES } from "@/lib/content/faq-categories";
import { cn } from "@/components/landing/ui";

export function CategorizedFaqSection({ title = "FAQ" }: { title?: string }) {
  const [activeCategoryId, setActiveCategoryId] = useState(FAQ_CATEGORIES[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory =
    FAQ_CATEGORIES.find((c) => c.id === activeCategoryId) ?? FAQ_CATEGORIES[0];

  const selectCategory = (id: string) => {
    setActiveCategoryId(id);
    setOpenIndex(0);
  };

  return (
    <div className="faq-categorized">
      <div className="faq-categorized__layout">
        <aside className="faq-categorized__nav">
          <h2 className="faq-categorized__title">{title}</h2>
          <p className="faq-categorized__topic-label">Topic</p>
          <ul className="faq-categorized__topics" role="tablist" aria-label="FAQ topics">
            {FAQ_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={cn(
                      "faq-categorized__topic",
                      isActive && "faq-categorized__topic--active",
                    )}
                    onClick={() => selectCategory(category.id)}
                  >
                    {category.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div
          className="faq-categorized__panel"
          role="tabpanel"
          aria-label={`${activeCategory.label} questions`}
        >
          <ul className="faq-categorized__list">
            {activeCategory.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question} className="faq-categorized__item">
                  <button
                    type="button"
                    className="faq-categorized__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="faq-categorized__question">{item.question}</span>
                    <span className="faq-categorized__icon" aria-hidden>
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "faq-categorized__answer-panel",
                      isOpen && "faq-categorized__answer-panel--open",
                    )}
                  >
                    <p className="faq-categorized__answer">{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
