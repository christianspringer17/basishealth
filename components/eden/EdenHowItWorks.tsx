"use client";

import { useState } from "react";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { trackEvent } from "@/lib/analytics";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

export function EdenHowItWorks() {
  const { howItWorks } = EDEN_HOMEPAGE;
  const [activeStep, setActiveStep] = useState(0);
  const step = howItWorks.steps[activeStep];

  return (
    <section id="how-it-works" className="eden-how" aria-labelledby="eden-how-title">
      <div className="site-container">
        <EdenSectionHeader
          id="eden-how-title"
          title={howItWorks.headline}
          subhead={howItWorks.subhead}
          align="center"
        />

        <EdenReveal className="eden-how__panel eden-dash-card">
          <ol className="eden-how__steps" role="tablist" aria-label="Care journey steps">
            {howItWorks.steps.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <li key={item.id} className="eden-how__step">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`eden-how__tab${isActive ? " eden-how__tab--active" : ""}`}
                    onClick={() => {
                      setActiveStep(index);
                      trackEvent("eden_how_step", {
                        label: item.id,
                        location: "eden_how",
                      });
                    }}
                  >
                    <span className="eden-how__tab-num">{index + 1}</span>
                    <span className="eden-how__tab-label">{item.label}</span>
                  </button>
                  {index < howItWorks.steps.length - 1 ? (
                    <span className="eden-how__connector" aria-hidden />
                  ) : null}
                </li>
              );
            })}
          </ol>

          <div className="eden-how__detail" aria-live="polite">
            <div key={step.id} className="eden-how__detail-inner">
              <div className="eden-how__detail-head">
                <p className="eden-how__detail-title">{step.label}</p>
                <span className="eden-how__detail-badge">{howItWorks.timeBadge}</span>
              </div>
              <p className="eden-how__detail-body">{step.detail}</p>
            </div>
          </div>
        </EdenReveal>

        <EdenReveal delay={80}>
          <div className="eden-how__grid" role="tablist" aria-label="Clinical standards by step">
          {howItWorks.steps.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <article key={item.id} className="eden-how-card">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    "eden-how-card__button eden-dash-card",
                    isActive ? "eden-how-card__button--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    setActiveStep(index);
                    trackEvent("eden_how_step", {
                      label: item.id,
                      location: "eden_how_card",
                    });
                  }}
                >
                  <div className={`eden-how-card__media eden-grad--${item.gradient}`}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={400}
                      height={500}
                      loading="lazy"
                    />
                    <div className="eden-how-card__overlay">
                      <div className="eden-how-card__badges">
                        <span className="eden-how-card__step">Step {String(index + 1).padStart(2, "0")}</span>
                        <span className="eden-how-card__stat">{item.stat}</span>
                      </div>
                      <h3 className="eden-how-card__name">{item.name}</h3>
                      <p className="eden-how-card__role">{item.role}</p>
                      <p className="eden-how-card__bio">{item.credentials}</p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
          </div>
        </EdenReveal>

        <p className="eden-how__trust">{howItWorks.trustNote}</p>
      </div>
    </section>
  );
}
