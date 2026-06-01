import type { Metadata } from "next";
import { LegalMarkdown } from "@/components/legal/LegalMarkdown";
import { LegalPage } from "@/components/landing/LegalPage";
import { loadLegalMarkdown } from "@/lib/content/legal/load-legal";
import { parseLegalFrontmatter } from "@/lib/content/legal/parse-legal";

export const metadata: Metadata = {
  title: "Terms + Conditions — Basis Health",
  description: "Terms governing use of the Basis Health website and services.",
};

export default function TermsPage() {
  const raw = loadLegalMarkdown(
    "terms-01.md",
    "terms-02.md",
    "terms-03.md",
    "terms-04.md",
    "terms-05.md",
  );
  const { body } = parseLegalFrontmatter(raw);

  return (
    <LegalPage title="Terms + Conditions" lastUpdated="May 13, 2026">
      <LegalMarkdown source={body} />
    </LegalPage>
  );
}
