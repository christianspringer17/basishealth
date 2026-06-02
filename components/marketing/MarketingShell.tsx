import type { ReactNode } from "react";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export function MarketingShell({
  children,
  className,
  showFooterCta = true,
}: {
  children: ReactNode;
  className?: string;
  showFooterCta?: boolean;
}) {
  return (
    <>
      <Header />
      <main className={className ?? "flex flex-col"}>{children}</main>
      <Footer showPrimaryCta={showFooterCta} />
    </>
  );
}
