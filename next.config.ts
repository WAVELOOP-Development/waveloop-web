import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/waveloop_web" : "";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath,
  basePath: basePath,
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

export default nextConfig;
