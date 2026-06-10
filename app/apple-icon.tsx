import { ImageResponse } from "next/og";
import {
  BasisWordmark,
  getSofiaProFont,
  sofiaProFontDefinition,
} from "@/lib/og/basis-wordmark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS / iMessage compact link preview — white wordmark on transparent */
export default async function AppleIcon() {
  const fontData = await getSofiaProFont();

  return new ImageResponse(
    <BasisWordmark fontSize={52} color="#ffffff" />,
    {
      ...size,
      fonts: [{ ...sofiaProFontDefinition, data: fontData }],
    },
  );
}
