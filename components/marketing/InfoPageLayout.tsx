import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingShell } from "./MarketingShell";

export function InfoPageLayout({
  title,
  subtitle,
  children,
  backHref,
  backLabel = "Back",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <MarketingShell>
      <div className="marketing-page">
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full">
            <header className="editorial-page-hero col-span-full md:col-span-16 md:col-start-5">
              {backHref && (
                <Link href={backHref} className="editorial-back">
                  ← {backLabel}
                </Link>
              )}
              <h1 className="text-h1-xl text-pretty text-grey-9">{title}</h1>
              {subtitle && (
                <p className="text-subtitle text-pretty text-grey-7">{subtitle}</p>
              )}
            </header>
            <div className="info-page-body col-span-full md:col-span-14 md:col-start-6">
              {children}
            </div>
          </div>
        </section>
      </div>
    </MarketingShell>
  );
}
