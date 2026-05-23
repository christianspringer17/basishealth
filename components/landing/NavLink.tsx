import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "./ui";

/** Basal.health nav pill — h-34, px-14, glass ::after, 220ms transitions */
export function NavLink({
  href,
  children,
  onHero,
  className,
  onClick,
  onMouseEnter,
  ariaExpanded,
  type = "link",
}: {
  href?: string;
  children: ReactNode;
  onHero: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseEnter?: () => void;
  ariaExpanded?: boolean;
  type?: "link" | "button";
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
        aria-expanded={ariaExpanded}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href ?? "/"}
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      aria-expanded={ariaExpanded}
    >
      {children}
    </Link>
  );
}
