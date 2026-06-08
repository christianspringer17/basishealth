"use client";

import { useState } from "react";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { trackEvent } from "@/lib/analytics";

import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

type GoalId = keyof typeof EDEN_HOMEPAGE.experience.metricsByGoal;

function IconFlame() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14c2.2-1.4 3.5-3.2 3.5-5.5 0-1.8-.8-3.2-2-4.2.3 1.1.1 2.2-.7 3.1-.6-1.5-.1-3.2 1.1-4.2C8.8 4.6 7.5 6.8 7 8.2 6.4 6.4 5 5 3.2 5.5 2 6.8 1.5 8.5 2 10.2 2.8 12.2 4.8 13.6 8 14Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCycle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M13 8a5 5 0 0 1-8.3 3.7M3 8a5 5 0 0 1 8.3-3.7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M3 5V8H6M13 11V8H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 13.5C4.5 11 3 7.5 3 4.5 6 4.5 8.5 6 8 8.5c.5-2.5 3-4 5-4 0 3-1.5 6.5-5 9Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M8 8.5V13.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

const GOAL_ICONS = {
  weight: IconFlame,
  metabolic: IconCycle,
  hormone: IconLeaf,
} as const;

export function EdenExperienceSection() {
  const { experience } = EDEN_HOMEPAGE;
  const [activeGoal, setActiveGoal] = useState<GoalId>("weight");
  const metrics = experience.metricsByGoal[activeGoal];

  return (
    <section className="eden-xp" aria-labelledby="eden-xp-title">
      <div className="eden-xp__head site-container">
        <EdenSectionHeader
          id="eden-xp-title"
          title={experience.headline}
          subhead={experience.subhead}
          align="center"
        />
      </div>

      <EdenReveal>
      <div className="eden-xp__grid site-container">
        <article className="eden-xp-card eden-xp-card--goals eden-dash-card">
          <img
            src={experience.goalsCard.image}
            alt={experience.goalsCard.imageAlt}
            className="eden-xp-card__photo"
            width={640}
            height={800}
            loading="lazy"
          />
          <div className="eden-xp-card__badge" aria-hidden>
            B
          </div>
          <div className="eden-xp-card__pills" role="listbox" aria-label="Care focus areas">
            {experience.goalsCard.goals.map((goal) => {
              const Icon = GOAL_ICONS[goal.id as GoalId];
              const isActive = activeGoal === goal.id;
              return (
                <button
                  key={goal.id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`eden-xp-pill${isActive ? " eden-xp-pill--active" : ""}`}
                  onClick={() => {
                    setActiveGoal(goal.id as GoalId);
                    trackEvent("eden_experience_goal", {
                      label: goal.id,
                      location: "eden_xp",
                    });
                  }}
                >
                  <span className="eden-xp-pill__icon">
                    <Icon />
                  </span>
                  <span className="eden-xp-pill__label">{goal.label}</span>
                  <span className={`eden-xp-pill__check${isActive ? " eden-xp-pill__check--on" : ""}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        <article className="eden-xp-card eden-xp-card--metrics eden-dash-card" aria-live="polite">
          <h3 className="eden-xp-card__title">{metrics.title}</h3>
          <p className="eden-xp-card__metric">{metrics.value}</p>
          <div className="eden-xp-bars">
            {metrics.bars.map((bar) => (
              <div key={bar.label} className="eden-xp-bar">
                <span className="eden-xp-bar__value">{bar.value}</span>
                <div className="eden-xp-bar__track">
                  <div
                    className={`eden-xp-bar__fill${"active" in bar && bar.active ? " eden-xp-bar__fill--active" : ""}`}
                    style={{ height: `${bar.height}%` }}
                  />
                </div>
                <span className="eden-xp-bar__label">{bar.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="eden-xp-card eden-xp-card--progress eden-dash-card">
          <h3 className="eden-xp-card__title">{experience.progress.title}</h3>
          <div className="eden-xp-progress__head">
            <p className="eden-xp-card__metric eden-xp-card__metric--sm">
              {experience.progress.daysLabel}
            </p>
            <div className="eden-xp-progress__badge">
              <span className="eden-xp-progress__badge-num">{experience.progress.completed}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7.2 5.5 9.7 11 4.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{experience.progress.completedLabel}</span>
            </div>
          </div>
          <div className="eden-xp-cal">
            <div className="eden-xp-cal__weekdays">
              {experience.progress.weekdays.map((day, i) => (
                <span key={`${day}-${i}`}>{day}</span>
              ))}
            </div>
            <div className="eden-xp-cal__grid">
              {experience.progress.days.map((state, i) => (
                <span
                  key={i}
                  className={`eden-xp-cal__day eden-xp-cal__day--${state}`}
                  aria-hidden
                >
                  {state.startsWith("done-") ? state.replace("done-", "") : ""}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
      </EdenReveal>
    </section>
  );
}
