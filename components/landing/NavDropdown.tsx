"use client";

import Link from "next/link";
import type { NavDropdownItem } from "./nav-config";
import { cn } from "./ui";

export function NavDropdown({
  items,
  open,
}: {
  items: NavDropdownItem[];
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "nav-dropdown absolute top-[calc(100%+20px)] left-1/2 z-50 w-full min-w-[320px] -translate-x-1/2 px-6 py-6",
        open
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-[0.95] opacity-0",
      )}
      role="menu"
      aria-hidden={!open}
    >
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.label} role="none">
            <Link
              href={item.href}
              role="menuitem"
              className="group block rounded-lg px-1 py-1 transition-colors hover:bg-[var(--grey-1)]"
            >
              <span className="nav-dropdown-link block font-medium text-[var(--grey-9)] group-hover:text-[var(--grey-9)]">
                {item.label}
              </span>
              {item.description && (
                <span className="mt-0.5 block text-[11px] leading-snug text-[var(--grey-7)]">
                  {item.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
