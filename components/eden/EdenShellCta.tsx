import Link from "next/link";
import type { ReactNode } from "react";

type EdenShellCtaProps = {
  label: string;
  href?: string;
  className?: string;
  variant?: "button" | "text";
  analyticsLocation: string;
  analyticsLabel: string;
  children?: ReactNode;
  onNavigate?: () => void;
};

/** Shell CTA — link when href is configured, otherwise inactive until wired */
export function EdenShellCta({
  label,
  href,
  className = "",
  variant = "button",
  analyticsLocation,
  analyticsLabel,
  children,
  onNavigate,
}: EdenShellCtaProps) {
  const isText = variant === "text";
  const classes = isText ? className.trim() : `eden-btn ${className}`.trim();

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        onClick={onNavigate}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-analytics-event="nav_cta_click"
        data-analytics-label={analyticsLabel}
        data-analytics-location={analyticsLocation}
        data-analytics-href={href}
      >
        {children ?? label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={
        isText
          ? `${classes} eden-shell-cta--text-inactive`.trim()
          : `${classes} eden-btn--inactive`.trim()
      }
      disabled
      aria-disabled="true"
      title="Coming soon"
    >
      {children ?? label}
    </button>
  );
}
