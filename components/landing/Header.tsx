"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "./ui";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Protocols", href: "#protocols" },
  { label: "Waitlist", href: "#waitlist" },
];

export function Header() {
  const [overHero, setOverHero] = useState(true);

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

  const pill = overHero ? "nav-pill nav-pill--dark" : "nav-pill nav-pill--light";

  return (
    <header
      className={cn(
        "site-container site-grid fixed top-0 right-0 left-0 z-50 py-5 transition-[background-color,box-shadow] duration-300",
        !overHero && "bg-white/92 shadow-[0_1px_0_var(--grey-3)] backdrop-blur-xl",
      )}
    >
      <div className="relative z-[2] col-span-full flex w-full items-center justify-between md:col-span-20 md:col-start-3">
        <Link href="/" className={cn(pill, "font-medium tracking-tight")}>
          Eonic Health
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 gap-1 md:flex"
          aria-label="Main"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pill}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="#waitlist" className={pill}>
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
