import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} – Développeur Web Freelance`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#fafafa",
          color: "#111827",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#4f46e5", fontWeight: 600 }}>
          Développeur Web Freelance
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#374151" }}>
            Laravel · Symfony · Next.js · React · Vue.js
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b7280" }}>
          Sites et applications web sur mesure
        </div>
      </div>
    ),
    size,
  );
}
