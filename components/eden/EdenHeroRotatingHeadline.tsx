"use client";

import { useEffect, useMemo, useState } from "react";

const TYPE_MS = 58;
const DELETE_MS = 36;
const HOLD_MS = 2000;

type EdenHeroRotatingHeadlineProps = {
  words: readonly string[];
  suffix: string;
};

export function EdenHeroRotatingHeadline({ words, suffix }: EdenHeroRotatingHeadlineProps) {
  const [displayText, setDisplayText] = useState(words[0] ?? "");
  const [motionEnabled, setMotionEnabled] = useState(true);

  const longestWord = useMemo(
    () => words.reduce((longest, word) => (word.length > longest.length ? word : longest), ""),
    [words],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionEnabled(!media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (!motionEnabled || words.length < 2) {
      setDisplayText(words[0] ?? "");
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let phase: "typing" | "holding" | "deleting" = "typing";
    let timeout: ReturnType<typeof setTimeout>;

    const schedule = (delay: number, fn: () => void) => {
      timeout = setTimeout(fn, delay);
    };

    const tick = () => {
      const word = words[wordIndex] ?? "";

      if (phase === "typing") {
        charIndex += 1;
        setDisplayText(word.slice(0, charIndex));

        if (charIndex >= word.length) {
          phase = "holding";
          schedule(HOLD_MS, tick);
        } else {
          schedule(TYPE_MS, tick);
        }
        return;
      }

      if (phase === "holding") {
        phase = "deleting";
        schedule(DELETE_MS, tick);
        return;
      }

      charIndex -= 1;
      setDisplayText(word.slice(0, charIndex));

      if (charIndex <= 0) {
        wordIndex = (wordIndex + 1) % words.length;
        phase = "typing";
        schedule(TYPE_MS, tick);
      } else {
        schedule(DELETE_MS, tick);
      }
    };

    setDisplayText("");
    charIndex = 0;
    schedule(TYPE_MS, tick);

    return () => clearTimeout(timeout);
  }, [motionEnabled, words]);

  return (
    <h1 className="eden-hero-storefront__headline eden-hero-enter eden-hero-enter--1">
      <span className="eden-hero-storefront__rotate-wrap" aria-live="polite">
        <span className="eden-hero-storefront__rotate-sizer" aria-hidden>
          {longestWord}
        </span>
        <span className="eden-hero-storefront__rotate-line">
          <span className="eden-hero-storefront__rotate-word">{displayText}</span>
        </span>
      </span>
      <span className="eden-hero-storefront__headline-suffix">{suffix}</span>
    </h1>
  );
}
