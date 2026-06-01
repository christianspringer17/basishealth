import type { Metadata } from "next";
import { LegalMarkdown } from "@/components/legal/LegalMarkdown";
import { LegalPage } from "@/components/landing/LegalPage";
import { loadLegalMarkdown } from "@/lib/content/legal/load-legal";
import { parseLegalFrontmatter } from "@/lib/content/legal/parse-legal";

export const metadata: Metadata = {
  title: "Privacy — Basis Health",
  description: "How Basis Health LLC collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  const raw = loadLegalMarkdown(
    "privacy-01.md",
    "privacy-02.md",
    "privacy-03.md",
    "privacy-04.md",
  );
  const { lastUpdated, body } = parseLegalFrontmatter(raw);

  return (
    <LegalPage title="Privacy" lastUpdated={lastUpdated ?? undefined}>
      <LegalMarkdown source={body} />
    </LegalPage>
  );
}
