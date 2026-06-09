import type { Metadata } from "next";
import { EdenLegalPage } from "@/components/eden/EdenLegalPage";
import { LegalMarkdown } from "@/components/legal/LegalMarkdown";
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
    <EdenLegalPage title="Privacy" lastUpdated={lastUpdated ?? undefined}>
      <LegalMarkdown source={body} />
    </EdenLegalPage>
  );
}
