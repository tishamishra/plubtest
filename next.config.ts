import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force the correct domain for sitemap generation
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://www.gdprofessionalplumbing.com',
  },
  // Ensure sitemap uses correct domain
  async rewrites() {
    return [];
  },
  // Override any environment variables that might be causing affinsight.com
  publicRuntimeConfig: {
    siteUrl: 'https://www.gdprofessionalplumbing.com',
  },
};

export default nextConfig;