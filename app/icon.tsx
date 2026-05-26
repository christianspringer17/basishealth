import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef2f8",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "linear-gradient(135deg, #c5d4e8, #4A6FA5)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
