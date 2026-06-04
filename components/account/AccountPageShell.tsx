import type { ReactNode } from "react";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

/**
 * Login chrome — Tailwind utilities on <main> so layout CSS is always emitted
 * (custom .account-page-main was missing from the dev CSS bundle).
 */
export function AccountPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="box-border flex min-h-svh w-full flex-col items-center justify-center px-[var(--margin-horizontal)] pb-20 pt-[calc(5rem+34px+2.5rem)]">
        {children}
      </main>
      <Footer showPrimaryCta={false} />
    </>
  );
}
