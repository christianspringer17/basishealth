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
      { threshold: 0.15, rootMargin: "-80px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const pillClass = cn(
    "inline-flex h-[34px] items-center rounded-[14px] px-3.5 text-h5 transition-colors duration-200",
    overHero
      ? "text-white hover:bg-white/10"
      : "text-grey-7 hover:bg-grey-1 hover:text-grey-9",
  );

  return (
    <header
      className={cn(
        "group/header site-container site-grid fixed top-0 right-0 left-0 z-50 py-5 transition-colors duration-300",
        !overHero && "bg-white/90 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="relative z-[2] col-span-full flex w-full items-center justify-between md:col-span-20 md:col-start-3">
        <Link href="/" className={pillClass}>
          <span className="font-medium tracking-tight">Eonic Health</span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          aria-label="Main"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pillClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#waitlist"
          className={cn(
            pillClass,
            overHero && "border border-white/10 bg-white/5 backdrop-blur-lg",
          )}
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
