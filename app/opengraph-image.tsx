import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — Personalized health protocols`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #eef2f8 0%, #ffffff 50%, #c5d4e8 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#4A6FA5",
            marginBottom: 24,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#171717",
            lineHeight: 1.1,
            maxWidth: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Personalized health protocols for long-term vitality
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#66615C",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Provider-guided longevity and performance care — where medically
          appropriate.
        </div>
      </div>
    ),
    { ...size },
  );
}
