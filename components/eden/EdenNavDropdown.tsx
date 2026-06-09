"use client";

import Link from "next/link";
import type { EdenNavItem } from "@/lib/eden-nav";

function Chevron() {
  return (
    <svg
      className="eden-header__chevron"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden
    >
      <path
        d="M2 3.5 5 6.5 8 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EdenNavDropdownItem({
  item,
  onNavigate,
  className,
}: {
  item: EdenNavItem;
  onNavigate?: () => void;
  className: string;
}) {
  if (item.href) {
    return (
      <Link href={item.href} role="menuitem" className={className} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <span role="menuitem" className={`${className} eden-nav-item--pending`} aria-disabled="true">
      {item.label}
    </span>
  );
}

export function EdenNavDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: EdenNavItem[];
  onNavigate?: () => void;
}) {
  return (
    <div className="eden-header__nav-item">
      <button
        type="button"
        className="eden-header__trigger"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
        <Chevron />
      </button>
      <div className="eden-header__dropdown" role="menu" aria-label={label}>
        {items.map((item) => (
          <EdenNavDropdownItem
            key={item.label}
            item={item}
            onNavigate={onNavigate}
            className="eden-header__dropdown-link"
          />
        ))}
      </div>
    </div>
  );
}

export function EdenMobileNavGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: EdenNavItem[];
  onNavigate?: () => void;
}) {
  return (
    <div className="eden-mobile-nav__group">
      <p className="eden-mobile-nav__group-label">{label}</p>
      <div className="eden-mobile-nav__group-links">
        {items.map((item) => (
          <EdenNavDropdownItem
            key={item.label}
            item={item}
            onNavigate={onNavigate}
            className="eden-mobile-nav__sublink"
          />
        ))}
      </div>
    </div>
  );
}
