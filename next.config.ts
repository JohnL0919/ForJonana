import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Firebase App Hosting - use standalone, not export
  output: "standalone",

  // Image optimization for Firebase hosting
  images: {
    unoptimized: false,
    domains: [],
  },

  // Environment variables will be injected at build time by Firebase
};

export default nextConfig;
