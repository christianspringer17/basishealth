import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MEDIA } from "@/lib/media";

export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const IMAGES = MEDIA;

export function BasalButton({
  href,
  children,
  tone = "accent",
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "grey";
}) {
  const accent =
    "inline-flex h-[44px] items-center rounded-[14px] border border-[var(--accent-button)] bg-[var(--accent-button)] pl-[18px] pr-[6px] text-h5 text-white transition-[background-color,border-color] duration-200 hover:border-[var(--accent-button-hover)] hover:bg-[var(--accent-button-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-button)]";
  const grey =
    "inline-flex h-[44px] items-center rounded-[14px] border border-[var(--grey-3)] bg-[var(--grey-1)] pl-[18px] pr-[6px] text-h5 text-[var(--grey-9)] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <Link href={href} className={cn("group/button focus", tone === "accent" ? accent : grey)}>
      <span className="relative z-[2]">{children}</span>
      <span
        className={cn(
          "relative z-[1] -mr-[10px] ml-1 flex h-7 min-w-7 items-center justify-center rounded-[12px] border [&>svg]:size-3",
          tone === "accent"
            ? "border-[var(--accent-button-hover)] bg-[var(--accent-button-hover)] text-white"
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
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-h1-lg text-grey-9 text-pretty">{title}</div>
      {subtitle && (
        <div className="text-h1-lg text-grey-7 text-pretty">{subtitle}</div>
      )}
    </div>
  );
}

export function PlusButton() {
  return (
    <button
      type="button"
      aria-label="Learn more"
      className="flex h-[44px] w-[44px] items-center justify-center rounded-[14px] border border-[var(--grey-3)] bg-[var(--grey-1)] text-[var(--grey-9)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z" />
      </svg>
    </button>
  );
}

export function MediaFrame({
  src,
  alt,
  aspect = "cinema",
  rounded = "2xl",
  className,
}: {
  src: string;
  alt: string;
  aspect?: "cinema" | "card" | "portrait";
  rounded?: "lg" | "2xl";
  className?: string;
}) {
  const aspectClass =
    aspect === "cinema"
      ? "aspect-[0.75] md:aspect-[16/9]"
      : aspect === "portrait"
        ? "aspect-[0.75] md:aspect-[1.78]"
        : "aspect-[0.85] md:aspect-video";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[var(--grey-2)]",
        aspectClass,
        rounded === "2xl" ? "rounded-basal-2xl" : "rounded-basal-lg",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 860px) 90vw, 70vw"
      />
    </div>
  );
}
