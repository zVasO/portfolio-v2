import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Ajoute SVGR pour convertir SVG en composants React
    });
    return config;
  },
};

export default nextConfig;
