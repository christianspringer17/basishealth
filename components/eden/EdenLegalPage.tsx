import type { ReactNode } from "react";
import { EdenPageShell } from "./EdenPageShell";

/** Eden shell for legal / info documents (terms, privacy, accessibility) */
export function EdenLegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <EdenPageShell>
      <div className="eden-legal site-container">
        <header className="eden-legal__hero">
          <h1 className="eden-legal__title">{title}</h1>
          {lastUpdated ? (
            <p className="eden-legal__updated">Last updated: {lastUpdated}</p>
          ) : null}
        </header>
        <div className="eden-legal__body eden-dash-card">{children}</div>
      </div>
    </EdenPageShell>
  );
}
