import { cn } from "./ui";
import { SITE_NAME_SHORT } from "@/lib/site";

/** Compact header wordmark — matches basal.health top-left treatment */
export function EonicLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-display)] text-h5 leading-none font-semibold tracking-[-0.04em]",
        className,
      )}
    >
      {SITE_NAME_SHORT}
    </span>
  );
}
