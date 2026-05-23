import { cn } from "./ui";

/** Text wordmark — Basal uses a compact SVG at ~40px; we match with display type */
export function EonicLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-display)] text-[14px] leading-none font-normal tracking-[-0.04em] md:text-[15px]",
        className,
      )}
    >
      Eonic
    </span>
  );
}
