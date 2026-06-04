"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EXPLAINER_ITEMS } from "@/lib/content/explainer-items";
import { CTA_LABELS } from "@/lib/cta";
import { cn } from "./ui";

export function ExplainerSection() {
  const [openId, setOpenId] = useState<string>(EXPLAINER_ITEMS[0]?.id ?? "");

  return (
    <section id="how-care-works" className="explainer-section section-shell section-gap-lg w-full scroll-mt-28">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-16 md:col-start-5">
          <div className="explainer-list">
            {EXPLAINER_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <article
                  key={item.id}
                  className={cn("explainer-item", isOpen && "explainer-item--open")}
                >
                  <button
                    type="button"
                    className="explainer-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className="explainer-thumb">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </span>
                    <span className="explainer-question">{item.question}</span>
                    <span className="explainer-icon" aria-hidden>
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "explainer-panel",
                      isOpen && "explainer-panel--open",
                    )}
                  >
                    <div className="explainer-panel-inner">
                      <p className="text-body text-pretty text-grey-7">{item.answer}</p>

                      {item.tags && item.tags.length > 0 ? (
                        <div className="explainer-tags" aria-label="Related topics">
                          {item.tags.map((tag, index) => (
                            <span key={tag} className="explainer-tags__group">
                              {index > 0 ? (
                                <span className="explainer-tags__sep" aria-hidden>
                                  —
                                </span>
                              ) : null}
                              <span className="explainer-tag">{tag}</span>
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {item.steps && item.steps.length > 0 ? (
                        <ol className="explainer-steps">
                          {item.steps.map((step, index) => (
                            <li key={step.label} className="explainer-step">
                              <span className="explainer-step__index">{index + 1}°</span>
                              <span className="explainer-step__label">{step.label}</span>
                            </li>
                          ))}
                        </ol>
                      ) : null}

                      {item.footnotes && item.footnotes.length > 0 ? (
                        <ul className="explainer-footnotes">
                          {item.footnotes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      ) : null}

                      {item.id === "start-glp-one" ? (
                        <Link href="#plans" className="explainer-plan-link">
                          {CTA_LABELS.seePlans}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
