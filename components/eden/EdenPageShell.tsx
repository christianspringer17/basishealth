import type { ReactNode } from "react";
import { EdenFooter } from "./EdenFooter";
import { EdenHeader } from "./EdenHeader";
import { EdenPromoBanner } from "./EdenPromoBanner";
import { EdenStickyCta } from "./EdenStickyCta";

export function EdenPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="homepage-page homepage-page--eden">
      <div className="eden-sticky-nav">
        <EdenPromoBanner />
        <EdenHeader />
      </div>
      <main>{children}</main>
      <EdenFooter />
      <EdenStickyCta />
    </div>
  );
}
