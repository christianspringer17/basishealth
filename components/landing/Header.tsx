"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavDropdown } from "./NavDropdown";
import { NAV_ITEMS } from "./nav-config";
import { cn } from "./ui";

export function Header() {
  const [overHero, setOverHero] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const variant = overHero ? "dark" : "light";
  const pill = `nav-pill-basal nav-pill-basal--${variant}`;

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "-72px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const openDropdown = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeMenu);

  return (
    <>
      <header
        className={cn(
          "site-container site-grid fixed top-0 right-0 left-0 z-50 py-5 transition-[background-color,box-shadow] duration-300",
          !overHero && "bg-white/92 shadow-[0_1px_0_var(--grey-3)] backdrop-blur-xl",
        )}
      >
        <div className="relative z-[2] col-span-full flex w-full items-center justify-between md:col-span-20 md:col-start-3">
          {/* Logo */}
          <div className="flex flex-1 justify-start">
            <Link href="/" className={cn(pill, "font-medium tracking-tight")}>
              Eonic Health
            </Link>
          </div>

          {/* Desktop center nav */}
          <nav
            ref={navRef}
            className="relative hidden items-center justify-center gap-3 md:flex"
            aria-label="Main"
            onMouseLeave={scheduleClose}
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.id)}
                >
                  <button
                    type="button"
                    className={pill}
                    aria-expanded={activeMenu === item.id}
                    aria-haspopup="menu"
                    onClick={() =>
                      setActiveMenu((cur) =>
                        cur === item.id ? null : item.id,
                      )
                    }
                  >
                    {item.label}
                  </button>
                </div>
              ) : (
                <Link key={item.id} href={item.href} className={pill}>
                  {item.label}
                </Link>
              ),
            )}

            {activeItem?.dropdown && (
              <div onMouseEnter={() => openDropdown(activeItem.id)}>
                <NavDropdown
                  items={activeItem.dropdown}
                  open={!!activeMenu}
                />
              </div>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <Link href="mailto:hello@eonichealth.com" className={pill}>
              Contact
            </Link>
            <Link
              href="#waitlist"
              className={cn(
                pill,
                "border-[var(--accent-button)]/30 bg-[var(--accent-button)]/10 !text-[var(--grey-1)] hover:!text-white",
                !overHero &&
                  "border-[var(--accent-button)] bg-[var(--accent-button)] !text-white",
              )}
            >
              Join waitlist
            </Link>
          </div>

          {/* Mobile menu button — Basal two-line */}
          <button
            type="button"
            className={cn(pill, "md:hidden")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="grid h-2 w-7 place-items-center">
              <span
                className={cn(
                  "block h-[1.5px] w-full rounded-full bg-current transition-transform duration-500",
                  mobileOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-[5px] rotate-0",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full rounded-full bg-current transition-transform duration-500",
                  mobileOpen
                    ? "-translate-y-[1.5px] -rotate-45"
                    : "translate-y-[5px] rotate-0",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Dropdown backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-200",
          activeMenu && !mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden
        onClick={closeAll}
      />

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-[60] bg-white transition-opacity duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto pt-[100px] pb-10">
          <div className="px-horz flex flex-col gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-[var(--grey-3)] pb-6"
              >
                <p className="text-h5 text-grey-9">{item.label}</p>
                {item.dropdown ? (
                  <ul className="mt-4 flex flex-col gap-3">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block text-h5 text-grey-7"
                          onClick={closeAll}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-4 block text-h5 text-grey-7"
                    onClick={closeAll}
                  >
                    View
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#waitlist"
              className="inline-flex h-11 items-center justify-center rounded-[14px] border border-[var(--accent-button)] bg-[var(--accent-button)] px-6 text-h5 text-white"
              onClick={closeAll}
            >
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
