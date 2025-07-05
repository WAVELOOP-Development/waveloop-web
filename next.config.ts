import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/waveloop-web" : "";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath,
  basePath: basePath,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
