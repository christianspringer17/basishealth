"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { EonicLogo } from "@/components/landing/EonicLogo";
import { cn } from "@/components/landing/ui";
import { EDEN_HEADER_MENUS } from "@/lib/eden-nav";
import { navAccountHref, navAccountLabel } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { SITE_NAME } from "@/lib/site";
import { EdenMobileNavGroup, EdenNavDropdown } from "./EdenNavDropdown";
import { EdenShellCta } from "./EdenShellCta";

export function EdenHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = useCallback(() => setMobileOpen(false), []);
  const accountHref = navAccountHref();
  const accountLabel = navAccountLabel();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const stickyNav = document.querySelector(".eden-sticky-nav");
    const onScroll = () => {
      stickyNav?.classList.toggle("eden-sticky-nav--scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="eden-header eden-header--stacked">
        <div className="eden-header__inner">
          <Link href={ROUTES.home} className="eden-header__logo" onClick={close}>
            <span className="sr-only">{SITE_NAME}</span>
            <EonicLogo />
          </Link>

          <nav className="eden-header__nav" aria-label="Main">
            {EDEN_HEADER_MENUS.map((menu) => (
              <EdenNavDropdown key={menu.id} label={menu.label} items={menu.items} />
            ))}
          </nav>

          <div className="eden-header__actions">
            <EdenShellCta
              label={accountLabel}
              href={accountHref}
              variant="text"
              className="eden-header__link eden-header__account"
              analyticsLocation="eden_header"
              analyticsLabel="account"
            />
            <button
              type="button"
              className="eden-header__menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("eden-mobile-nav", mobileOpen && "eden-mobile-nav--open")}>
        <nav aria-label="Mobile">
          {EDEN_HEADER_MENUS.map((menu) => (
            <EdenMobileNavGroup
              key={menu.id}
              label={menu.label}
              items={menu.items}
              onNavigate={close}
            />
          ))}
          <EdenShellCta
            label={accountLabel}
            href={accountHref}
            variant="text"
            className="eden-mobile-nav__link eden-mobile-nav__account"
            analyticsLocation="eden_mobile_nav"
            analyticsLabel="account"
            onNavigate={close}
          />
        </nav>
      </div>
    </>
  );
}
