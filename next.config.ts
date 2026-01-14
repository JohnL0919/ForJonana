import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Firebase App Hosting
  output: "export",
  trailingSlash: true,
  distDir: "out",

  // Note: Headers don't work with static export
  // YouTube embedding will work via CSP meta tags instead

  // Image optimization config for Firebase hosting
  images: {
    unoptimized: false,
    domains: [],
  },

  // Environment variables will be injected at build time by Firebase
};

export default nextConfig;
