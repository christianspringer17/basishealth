import { readFile } from "node:fs/promises";
import { join } from "node:path";

const SOFIA_PRO_PATH = join(
  process.cwd(),
  "public/fonts/webfonts/static/Sofia Pro Medium Az.otf",
);

let fontData: Buffer | null = null;

export async function getSofiaProFont() {
  if (!fontData) {
    fontData = await readFile(SOFIA_PRO_PATH);
  }
  return fontData;
}

export const sofiaProFontDefinition = {
  name: "Sofia Pro",
  style: "normal" as const,
  weight: 500 as const,
};

type BasisMarkProps = {
  fontSize: number;
  color: string;
};

/** Full wordmark — "basis" in Sofia Pro Medium */
export function BasisWordmark({ fontSize, color }: BasisMarkProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <span
        style={{
          fontFamily: "Sofia Pro",
          fontSize,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color,
          textTransform: "lowercase",
          lineHeight: 1,
        }}
      >
        basis
      </span>
    </div>
  );
}

/** Letter mark — lowercase "b" cutout for link preview icons */
export function BasisLetterB({ fontSize, color }: BasisMarkProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <span
        style={{
          fontFamily: "Sofia Pro",
          fontSize,
          fontWeight: 500,
          color,
          lineHeight: 1,
          marginTop: fontSize * 0.04,
        }}
      >
        b
      </span>
    </div>
  );
}
