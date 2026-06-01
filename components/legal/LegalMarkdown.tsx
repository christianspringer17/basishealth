import type { ReactNode } from "react";
import { LEGAL_BRAND } from "@/lib/content/legal/branding";

type RawBlock =
  | { kind: "h3"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] };

type LegalSection = {
  title: string;
  id: string;
  blocks: RawBlock[];
};

function parseH2Line(line: string): { title: string; id?: string } {
  const body = line.slice(3);
  const match = body.match(/^(.+?)(?:\s+\{#([a-z0-9-]+)\})?$/i);
  if (!match) return { title: body.trim() };
  return {
    title: match[1].trim(),
    id: match[2]?.toLowerCase(),
  };
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function linkify(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern =
    /(\bhttps?:\/\/[^\s]+|\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b|\(\d{3}\)\s*\d{3}-\d{4}|\d{3}-\d{3}-\d{4})/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const [token] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (token.includes("@")) {
      parts.push(
        <a
          key={`${match.index}-mail`}
          className="prose__link"
          href={`mailto:${token}`}
        >
          {token}
        </a>,
      );
    } else if (token.startsWith("http")) {
      parts.push(
        <a
          key={`${match.index}-url`}
          className="prose__link"
          href={token}
          rel="noopener noreferrer"
        >
          {token}
        </a>,
      );
    } else if (/^\d/.test(token) || token.startsWith("(")) {
      const tel = token.replace(/\D/g, "");
      parts.push(
        <a
          key={`${match.index}-tel`}
          className="prose__link"
          href={`tel:+1${tel}`}
        >
          {token}
        </a>,
      );
    } else {
      parts.push(token);
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : [text];
}

function inlineFormat(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(...linkify(text.slice(lastIndex, match.index)));
    }
    parts.push(<strong key={`b-${key++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(...linkify(text.slice(lastIndex)));
  }

  return parts.length ? parts : linkify(text);
}

function parseRawBlocks(source: string): Array<
  { kind: "h2"; text: string; id?: string } | RawBlock
> {
  const blocks = source.trim().split(/\n\n+/);
  const parsed: Array<{ kind: "h2"; text: string; id?: string } | RawBlock> = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      const { title, id } = parseH2Line(trimmed);
      parsed.push({ kind: "h2", text: title, id });
      continue;
    }

    if (trimmed.startsWith("### ")) {
      parsed.push({ kind: "h3", text: trimmed.slice(4) });
      continue;
    }

    if (trimmed.split("\n").every((line) => line.startsWith("- "))) {
      parsed.push({
        kind: "list",
        items: trimmed.split("\n").map((line) => line.slice(2)),
      });
      continue;
    }

    parsed.push({ kind: "paragraph", text: trimmed });
  }

  return parsed;
}

function parseLegalSections(source: string): {
  intro: RawBlock[];
  sections: LegalSection[];
} {
  const raw = parseRawBlocks(source);
  const intro: RawBlock[] = [];
  const sections: LegalSection[] = [];
  let current: LegalSection | null = null;

  for (const block of raw) {
    if (block.kind === "h2") {
      if (current) sections.push(current);
      current = {
        title: block.text,
        id: block.id ?? slugifyHeading(block.text),
        blocks: [],
      };
      continue;
    }

    if (!current) {
      intro.push(block);
    } else {
      current.blocks.push(block);
    }
  }

  if (current) sections.push(current);

  return { intro, sections };
}

function renderBlock(block: RawBlock, key: string): ReactNode {
  if (block.kind === "h3") {
    return (
      <h3 key={key} className="prose__heading prose__heading--h3">
        {block.text}
      </h3>
    );
  }

  if (block.kind === "list") {
    return (
      <ul key={key} className="prose__list prose__list--bullet">
        {block.items.map((item, index) => (
          <li key={index} className="prose__list-item">
            {inlineFormat(item)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={key} className="prose__paragraph">
      {inlineFormat(block.text)}
    </p>
  );
}

export function LegalMarkdown({ source }: { source: string }) {
  const { intro, sections } = parseLegalSections(source);

  return (
    <div className="prose">
      {intro.length > 0 ? (
        <div className="prose__intro">
          {intro.map((block, index) => renderBlock(block, `intro-${index}`))}
        </div>
      ) : null}

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="prose__section"
          aria-labelledby={`${section.id}-heading`}
        >
          <h2
            id={`${section.id}-heading`}
            className="prose__heading prose__heading--h2"
          >
            {section.title}
          </h2>
          <div className="prose__section-body">
            {section.blocks.map((block, index) =>
              renderBlock(block, `${section.id}-${index}`),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export function legalContactBlock(): string {
  return `## Contact Information

You may contact ${LEGAL_BRAND.companyLegal} online at ${LEGAL_BRAND.siteUrl} or by email at ${LEGAL_BRAND.supportEmail}. For phone support, call ${LEGAL_BRAND.phoneDisplay}.`;
}
