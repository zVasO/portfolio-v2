import type { Config } from "tailwindcss";

export default {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F4F1EA", 2: "#ECE8DF" },
        ink: { DEFAULT: "#151515", 2: "#4A4945" },
        muted: "#7C7A72",
        line: "#D6D2C6",
        mark: "#E3FF4F",
        accent: { DEFAULT: "#151515", hover: "#E3FF4F" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: { fadeIn: "fadeIn 0.3s ease-out both" },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
