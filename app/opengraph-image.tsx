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
          background: "#F4F1EA",
          color: "#151515",
          fontFamily: "sans-serif",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#7C7A72", textTransform: "uppercase", letterSpacing: 2 }}>
          Développeur web full stack · Freelance
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: 1, letterSpacing: -3 }}>
          <span>{SITE_NAME} fabrique</span>
          <span>des sites et des apps web</span>
          <span style={{ display: "flex" }}>
            <span style={{ background: "#E3FF4F", padding: "0 12px" }}>qui tiennent la route.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4A4945" }}>
          PHP · Laravel · Symfony · TypeScript · React · Vue.js · Next.js
        </div>
      </div>
    ),
    size,
  );
}
