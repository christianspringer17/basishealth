import Link from "next/link";
import type { FocusEventHandler, MouseEventHandler, ReactNode } from "react";
import { cn } from "./ui";

/** Basal.health nav pill — h-34 px-14, liquid glass always visible */
export function NavLink({
  href,
  children,
  onHero,
  className,
  onClick,
  onMouseEnter,
  onFocus,
  ariaExpanded,
  type = "link",
  prefetch,
}: {
  href?: string;
  children: ReactNode;
  onHero: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseEnter?: () => void;
  onFocus?: FocusEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  ariaExpanded?: boolean;
  type?: "link" | "button";
  /** Set false on /learn to avoid stale webpack prefetch chunks in dev */
  prefetch?: boolean;
}) {
  const classes = cn(
    "nav-link-basal focus flex-center",
    onHero ? "nav-link-basal--hero" : "nav-link-basal--light",
    className,
  );

  if (type === "button") {
    return (
      <button
        type="button"
        className={classes}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onFocus={onFocus}
        aria-expanded={ariaExpanded}
      >
        <span className="nav-link-basal__label">{children}</span>
      </button>
    );
  }

  return (
    <Link
      href={href ?? "/"}
      prefetch={prefetch}
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      aria-expanded={ariaExpanded}
    >
      <span className="nav-link-basal__label">{children}</span>
    </Link>
  );
}
