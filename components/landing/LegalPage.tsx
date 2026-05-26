import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-svh bg-white">
      <header className="border-b border-[#e8e4df]/80 py-6">
        <div className="site-container flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[#171717]"
          >
            Athene Health
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#66615c] hover:text-[#4A6FA5]"
          >
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="site-container py-16 md:py-24">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-section mb-10 text-[#171717]">{title}</h1>
          <div className="prose-legal space-y-6 text-[#66615c]">{children}</div>
        </article>
      </main>
    </div>
  );
}
