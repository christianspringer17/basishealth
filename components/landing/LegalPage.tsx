import type { ReactNode } from "react";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <MarketingShell>
      <div className="marketing-page">
        <div className="site-container site-container--page site-grid legal-page-grid">
          <header className="legal-page-hero col-span-full md:col-span-16 md:col-start-5">
            <h1 className="text-h1-lg text-grey-7">{title}</h1>
            {lastUpdated ? (
              <p className="text-h4 leading-100 text-grey-7">
                Last Updated: {lastUpdated}
              </p>
            ) : null}
          </header>
          <div className="col-span-full md:col-span-16 md:col-start-5">
            {children}
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
