import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sweta Kumari — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
          background: "linear-gradient(135deg, #3f0f14 0%, #141414 55%, #0a1628 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#f40612",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          Sweta Kumari
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "rgba(255,255,255,0.85)" }}>
          Senior Frontend Engineer · React · Vue · Next.js
        </div>
        <div style={{ fontSize: 22, marginTop: 12, color: "rgba(255,255,255,0.55)" }}>
          Almere, Netherlands
        </div>
      </div>
    ),
    { ...size },
  );
}
