"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import { trackEvent } from "@/lib/analytics";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { glpOneAssessmentHref } from "@/lib/cta";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

const WEIGHT_MIN = 140;
const WEIGHT_MAX = 400;
const DEFAULT_WEIGHT = 200;
const MAX_LOSS_RATE = 0.15;
const TICK_COUNT = 40;
const DIAL_TRAVEL = 96;
function bmiFromImperial(ft: number, inches: number, lbs: number): number | null {
  if (ft < 0 || inches < 0 || lbs <= 0) return null;
  const totalInches = ft * 12 + inches;
  if (totalInches <= 0) return null;
  return (lbs / (totalInches * totalInches)) * 703;
}

function bmiCategory(bmi: number): string {
  if (bmi < 18.5) return "Below typical range";
  if (bmi < 25) return "Within typical range";
  if (bmi < 30) return "Above typical range";
  return "Elevated range";
}

function dialOffset(weight: number): number {
  const percent = (weight - WEIGHT_MIN) / (WEIGHT_MAX - WEIGHT_MIN);
  return -percent * DIAL_TRAVEL;
}

export function EdenBmiCalculator() {
  const { weightLoss } = EDEN_HOMEPAGE;
  const { planner } = weightLoss;
  const ctaHref = glpOneAssessmentHref();

  const [projectionWeight, setProjectionWeight] = useState(DEFAULT_WEIGHT);
  const [bmiWeight, setBmiWeight] = useState(String(DEFAULT_WEIGHT));
  const [ft, setFt] = useState("5");
  const [inches, setInches] = useState("6");

  const projectionTracked = useRef(false);
  const bmiTracked = useRef(false);

  const ftN = Number(ft) || 0;
  const inN = Number(inches) || 0;
  const bmiLbs = Number(bmiWeight) || 0;
  const bmi = useMemo(() => bmiFromImperial(ftN, inN, bmiLbs), [ftN, inN, bmiLbs]);
  const projectedLoss = Math.max(1, Math.round(projectionWeight * MAX_LOSS_RATE));
  const hasHeight = ft !== "" && inches !== "";
  const hasBmiWeight = bmiWeight !== "" && bmiLbs > 0;
  const dialShift = dialOffset(projectionWeight);
  const lossPercent = Math.round(MAX_LOSS_RATE * 100);

  const projectionSummary = `At ${projectionWeight} pounds, you could lose up to ${projectedLoss} pounds — ${lossPercent}% of your starting body weight.`;
  const bmiSummary =
    hasHeight && bmi !== null && hasBmiWeight
      ? `At ${bmiLbs} pounds and ${ftN} feet ${inN} inches, your BMI is ${bmi.toFixed(1)}.`
      : "Add height and weight to calculate your BMI.";

  return (
    <section className="eden-weight" aria-labelledby="eden-weight-title">
      <div className="eden-weight__inner site-container">
        <EdenSectionHeader
          id="eden-weight-title"
          title={weightLoss.headline}
          subhead={weightLoss.subhead}
          align="center"
          className="eden-weight__head"
        />

        <EdenReveal>
          <div className="eden-weight__calculators">
            <article className="eden-wl-projection eden-dash-card">
              <p className="eden-wl-projection__kicker">{planner.title}</p>

              <div className="eden-wl-projection__hero">
                <p className="eden-wl-projection__label">{planner.lossLabel}</p>
                <p className="eden-wl-projection__result" aria-live="polite">
                  <span className="eden-wl-projection__result-num">{projectedLoss}</span>
                  <span className="eden-wl-projection__result-unit">lbs</span>
                </p>
                <p className="eden-wl-projection__caption">
                  {lossPercent}% of your starting body weight
                </p>
              </div>

              <div className="eden-wl-projection__dial" aria-hidden="true">
                <div className="eden-wl-projection__needle">
                  <svg width="24" height="22" viewBox="0 0 26 23" fill="none">
                    <path d="M15.84 21.23C14.5 23.59 11.16 23.59 9.83 21.23L0.8 5.31C-0.53 2.95 1.14 0 3.81 0h18.05c2.67 0 4.34 2.95 3.01 5.31L15.84 21.23Z" />
                  </svg>
                </div>
                <div className="eden-wl-projection__track">
                  <div
                    className="eden-wl-projection__ticks"
                    style={{ "--eden-dial-shift": `${dialShift}px` } as CSSProperties}
                  >
                    {Array.from({ length: TICK_COUNT }, (_, i) => (
                      <span
                        key={i}
                        className={`eden-wl-projection__tick${(i + 1) % 4 === 0 ? " eden-wl-projection__tick--major" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="eden-wl-projection__input-block">
                <p className="eden-wl-projection__input-label">{planner.currentLabel}</p>
                <div className="eden-wl-projection__weight-pill" aria-live="polite">
                  <span className="eden-wl-projection__weight-num">{projectionWeight}</span>
                  <span className="eden-wl-projection__weight-unit">lbs</span>
                </div>
              </div>

              <label className="eden-wl-projection__slider-wrap">
                <input
                  type="range"
                  className="eden-wl-projection__slider"
                  min={WEIGHT_MIN}
                  max={WEIGHT_MAX}
                  value={projectionWeight}
                  onChange={(e) => {
                    setProjectionWeight(Number(e.target.value));
                    if (!projectionTracked.current) {
                      projectionTracked.current = true;
                      trackEvent("eden_weight_interact", {
                        label: "projection_slider",
                        location: "eden_weight",
                      });
                    }
                  }}
                  aria-valuemin={WEIGHT_MIN}
                  aria-valuemax={WEIGHT_MAX}
                  aria-valuenow={projectionWeight}
                  aria-label="Starting weight in pounds"
                />
                <span className="eden-wl-projection__slider-bounds">
                  <span>{WEIGHT_MIN} lbs</span>
                  <span>{WEIGHT_MAX} lbs</span>
                </span>
              </label>

              <p className="eden-wl-projection__meta">{planner.projectionNote}</p>
              <p className="sr-only-visually" aria-live="polite">
                {projectionSummary}
              </p>
            </article>

            <article className="eden-bmi-panel eden-dash-card">
              <p className="eden-bmi-panel__kicker">{planner.bmiTitle}</p>

              <p className="eden-bmi-panel__hint">
                {hasHeight && bmi !== null && hasBmiWeight ? bmiCategory(bmi) : planner.bmiHint}
              </p>

              <div className="eden-bmi-panel__score" aria-live="polite">
                {bmi !== null && hasHeight && hasBmiWeight ? bmi.toFixed(1) : "—"}
              </div>

              <div className="eden-bmi-panel__form">
                <div className="eden-bmi-panel__field">
                  <span className="eden-bmi-panel__field-label">Height</span>
                  <div className="eden-bmi-panel__height-row">
                    <label className="eden-bmi-panel__input-wrap">
                      <input
                        type="number"
                        min={3}
                        max={8}
                        placeholder="ft"
                        value={ft}
                        onChange={(e) => {
                          setFt(e.target.value);
                          if (!bmiTracked.current) {
                            bmiTracked.current = true;
                            trackEvent("eden_weight_interact", {
                              label: "bmi_height",
                              location: "eden_weight",
                            });
                          }
                        }}
                        aria-label="Height in feet"
                      />
                      <span className="eden-bmi-panel__unit">ft</span>
                    </label>
                    <label className="eden-bmi-panel__input-wrap">
                      <input
                        type="number"
                        min={0}
                        max={11}
                        placeholder="in"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        aria-label="Height in inches"
                      />
                      <span className="eden-bmi-panel__unit">in</span>
                    </label>
                  </div>
                </div>

                <div className="eden-bmi-panel__field">
                  <label className="eden-bmi-panel__field-label" htmlFor="eden-bmi-weight">
                    Weight
                  </label>
                  <label className="eden-bmi-panel__input-wrap eden-bmi-panel__input-wrap--weight">
                    <input
                      id="eden-bmi-weight"
                      type="number"
                      min={WEIGHT_MIN}
                      max={WEIGHT_MAX}
                      value={bmiWeight}
                      onChange={(e) => {
                        setBmiWeight(e.target.value);
                        if (!bmiTracked.current) {
                          bmiTracked.current = true;
                          trackEvent("eden_weight_interact", {
                            label: "bmi_weight",
                            location: "eden_weight",
                          });
                        }
                      }}
                      aria-label="Weight in pounds"
                    />
                    <span className="eden-bmi-panel__unit">lbs</span>
                  </label>
                </div>
              </div>

              <p className="eden-bmi-panel__meta">{planner.bmiNote}</p>
              <p className="sr-only-visually" aria-live="polite">
                {bmiSummary}
              </p>
            </article>
          </div>
        </EdenReveal>

        <div className="eden-weight__footer">
          <ul className="eden-weight__bullets">
            {weightLoss.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="eden-btn eden-btn--primary eden-weight__cta"
            data-analytics-event="eden_weight_cta"
            data-analytics-label="see_if_eligible"
            data-analytics-location="eden_weight"
            data-analytics-href={ctaHref}
          >
            {weightLoss.cta}
          </a>
          <p className="eden-weight__note">{weightLoss.statNote}</p>
        </div>
      </div>
    </section>
  );
}
