"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/components/landing/ui";

type EdenRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for hero sequences */
  delay?: number;
  as?: "div" | "section" | "article";
};

export function EdenReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: EdenRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("eden-reveal", visible && "eden-reveal--visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
