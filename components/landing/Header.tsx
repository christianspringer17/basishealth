"use client";

import Link from "next/link";
import { useState } from "react";
import { cn, PrimaryCta } from "./ui";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Protocols", href: "#protocols" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="site-container">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[#171717] md:text-xl"
          >
            Eonic Health
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-[#66615c] transition-colors hover:bg-[#f7f5f2] hover:text-[#171717]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <PrimaryCta href="#waitlist">Join waitlist</PrimaryCta>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#e8e4df] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[#171717] transition-transform",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[#171717] transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[#171717] transition-transform",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#e8e4df] bg-white p-4 shadow-lg md:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#171717]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryCta href="#waitlist">Join waitlist</PrimaryCta>
          </nav>
        )}
      </div>
    </header>
  );
}
