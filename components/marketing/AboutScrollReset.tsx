"use client";

import { useEffect } from "react";

/** Clears accidental horizontal scroll (e.g. after removed story carousel). */
export function AboutScrollReset() {
  useEffect(() => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }, []);

  return null;
}
