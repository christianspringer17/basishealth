import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "default",
  children,
  className,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C75A2A]";
  const sizes = {
    default: "h-11 px-5 text-sm",
    large: "h-12 px-6 text-[0.9375rem]",
  };
  const variants = {
    primary:
      "bg-[#C75A2A] text-white hover:bg-[#A83A24] border border-[#C75A2A] hover:border-[#A83A24]",
    secondary:
      "bg-white text-[#171717] border border-[#e8e4df] hover:border-[#C75A2A]/40 hover:bg-[#FFF7F0]",
    ghost:
      "bg-transparent text-[#171717] border border-transparent hover:bg-[#f7f5f2]",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function ArrowPill() {
  return (
    <span
      className="flex h-7 min-w-7 items-center justify-center rounded-xl bg-[#A83A24] text-white"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.172 12L8.222 7.05l1.415-1.415L16 12l-6.364 6.364-1.415-1.415z" />
      </svg>
    </span>
  );
}

export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex h-12 items-center gap-1 rounded-2xl border border-[#C75A2A] bg-[#C75A2A] pl-5 pr-1.5 text-[0.9375rem] font-medium text-white transition-colors hover:border-[#A83A24] hover:bg-[#A83A24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C75A2A]"
    >
      <span className="relative z-[1]">{children}</span>
      <ArrowPill />
    </Link>
  );
}

export function Section({
  id,
  children,
  className,
  padding = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col items-center",
        padding && "py-20 md:py-28 lg:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  accent?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", alignClass)}>
      {accent && (
        <p className="text-sm font-medium tracking-wide text-[#C75A2A] uppercase">
          {accent}
        </p>
      )}
      <h2 className="text-section text-[#171717] text-pretty">{title}</h2>
      {subtitle && (
        <p className="text-lead text-[#66615c] text-pretty max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[#e8e4df]/80 bg-white shadow-[0_1px_2px_rgba(23,23,23,0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
