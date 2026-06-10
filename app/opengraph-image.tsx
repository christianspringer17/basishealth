import { ImageResponse } from "next/og";
import {
  BasisLetterB,
  getSofiaProFont,
  sofiaProFontDefinition,
} from "@/lib/og/basis-wordmark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Basis";

/** Link preview (iMessage rich card, social) — white Sofia Pro "b" on transparent */
export default async function OpenGraphImage() {
  const fontData = await getSofiaProFont();

  return new ImageResponse(
    <BasisLetterB fontSize={320} color="#ffffff" />,
    {
      ...size,
      fonts: [{ ...sofiaProFontDefinition, data: fontData }],
    },
  );
}
