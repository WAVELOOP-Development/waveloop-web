import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath =
	process.env.PAGES_BASE_PATH || (isProduction ? "/waveloop_web_main" : "");

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
		basePath: basePath,
	},
};

export default nextConfig;
