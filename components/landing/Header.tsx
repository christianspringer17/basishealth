"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { EonicLogo } from "./EonicLogo";
import { NavDropdown } from "./NavDropdown";
import { NavLink } from "./NavLink";
import { NAV_ITEMS } from "./nav-config";
import { cn } from "./ui";

export function Header() {
  const [onHero, setOnHero] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "-60px 0px 0px 0px" },
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

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeMenu);

  return (
    <>
      <header className="group/header site-container site-grid fixed top-0 right-0 left-0 z-50 py-10">
        <div className="relative z-[2] col-span-full flex w-full items-center justify-between md:col-span-20 md:col-start-3">
          <div className="flex w-full items-center justify-between text-[length:var(--body-font-size)]">
            {/* Left — wordmark (Basal: compact mark, flush to top) */}
            <div className="flex flex-1 justify-start">
              <Link
                href="/"
                className={cn(
                  "focus relative z-[2] inline-flex h-[34px] items-center py-0 pr-2 pl-0",
                  onHero ? "text-grey-1 hover:text-grey-8" : "text-grey-9 hover:text-grey-9",
                )}
              >
                <span className="sr-only">Eonic Health</span>
                <EonicLogo />
              </Link>
            </div>

            {/* Center — nav */}
            <nav
              className="relative hidden items-center justify-center gap-x-12 text-h5 md:flex"
              aria-label="Main"
              onMouseLeave={scheduleClose}
              onMouseEnter={cancelClose}
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.id}>
                  <NavLink
                    href={item.href}
                    onHero={onHero}
                    ariaExpanded={item.dropdown ? activeMenu === item.id : undefined}
                    onMouseEnter={() =>
                      item.dropdown ? openMenu(item.id) : setActiveMenu(null)
                    }
                    onClick={
                      item.dropdown
                        ? (e) => {
                            e.preventDefault();
                            setActiveMenu((cur) =>
                              cur === item.id ? null : item.id,
                            );
                          }
                        : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}

              {/* Shared dropdown — Basal: absolute, z-0, min-w-320, rounded-dropdown */}
              <NavDropdown
                items={activeItem?.dropdown ?? []}
                open={!!activeItem?.dropdown && !!activeMenu}
              />

              <div
                className={cn(
                  "fixed inset-0 -z-[1] bg-transparent transition-opacity duration-200",
                  activeMenu ? "pointer-events-auto" : "pointer-events-none",
                )}
                aria-hidden
                onClick={closeAll}
              />
            </nav>

            {/* Right — single link like Basal Account */}
            <div className="hidden flex-1 items-center justify-end gap-x-12 text-h5 md:flex">
              <NavLink
                href="#waitlist"
                onHero={onHero}
                onMouseEnter={() => setActiveMenu(null)}
              >
                Join waitlist
              </NavLink>
            </div>

            {/* Mobile menu toggle — Basal dimensions */}
            <div className="md:hidden">
              <button
                type="button"
                className={cn(
                  "nav-link-basal focus flex-center",
                  onHero ? "nav-link-basal--hero" : "nav-link-basal--light",
                )}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((o) => !o)}
              >
                <span className="sr-only">
                  {mobileOpen ? "Close menu" : "Open menu"}
                </span>
                <span className="grid h-8 w-7 place-items-center">
                  <span
                    className={cn(
                      "block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-[550ms] ease-[var(--ease-out-expo)] will-change-transform",
                      mobileOpen
                        ? "translate-y-0 rotate-45"
                        : "-translate-y-3 rotate-0",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-[550ms] ease-[var(--ease-out-expo)] will-change-transform",
                      mobileOpen
                        ? "-translate-y-[1.5px] -rotate-45"
                        : "translate-y-3 rotate-0",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
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
        <div className="flex h-full flex-col overflow-y-auto pt-24 pb-12">
          <div className="px-horz flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-[var(--grey-3)] pb-5"
              >
                <p className="text-h5 font-medium text-grey-9">{item.label}</p>
                {item.dropdown && (
                  <ul className="mt-3 flex flex-col gap-2 pl-1">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="nav-dropdown-link"
                          onClick={closeAll}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="mailto:hello@eonichealth.com"
                className="nav-dropdown-link"
                onClick={closeAll}
              >
                Contact
              </Link>
              <Link
                href="#waitlist"
                className="inline-flex h-[44px] items-center justify-center rounded-[14px] border border-[var(--accent-button)] bg-[var(--accent-button)] px-6 text-h5 text-white transition-colors hover:border-[var(--accent-button-hover)] hover:bg-[var(--accent-button-hover)]"
                onClick={closeAll}
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
