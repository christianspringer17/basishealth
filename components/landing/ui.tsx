import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function BasalButton({
  href,
  children,
  tone = "accent",
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "grey";
}) {
  const isAccent = tone === "accent";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-11 items-center gap-0 rounded-[14px] border pl-4 pr-1 text-h5 font-normal transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        isAccent
          ? "border-[var(--accent-button)] bg-[var(--accent-button)] text-white hover:border-[var(--accent-5)] hover:bg-[var(--accent-5)] focus-visible:outline-[var(--accent-button)]"
          : "border-[var(--grey-3)] bg-[var(--grey-1)] text-[var(--grey-9)] hover:bg-white focus-visible:outline-[var(--grey-9)]",
      )}
    >
      <span className="relative z-[2]">{children}</span>
      <span
        className={cn(
          "relative z-[1] -mr-2.5 flex h-7 min-w-7 items-center justify-center rounded-[12px] border text-h5 [&>svg]:size-3",
          isAccent
            ? "border-[var(--accent-5)] bg-[var(--accent-5)] text-white"
            : "border-[var(--grey-3)] bg-white text-[var(--grey-9)]",
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.172 12 8.222 7.05l1.415-1.415L16 12l-6.364 6.364-1.415-1.415z" />
        </svg>
      </span>
    </Link>
  );
}

export function TextBlock({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div className="text-h1-lg text-grey-9 text-pretty">{title}</div>
      {subtitle && (
        <div className="text-h1-lg text-grey-7 text-pretty">{subtitle}</div>
      )}
    </div>
  );
}

export function PlusButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Learn more"
      className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--grey-3)] bg-[var(--grey-1)] text-[var(--grey-9)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
}

export function MediaPanel({
  className,
  aspect = "video",
}: {
  className?: string;
  aspect?: "video" | "tall";
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a2420] via-[#1a1816] to-[#0f0e0d]",
        aspect === "video" ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[3/4] md:aspect-[16/9]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(199,90,42,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(168,58,36,0.15),transparent_50%)]" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
