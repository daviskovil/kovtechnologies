import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Critical for the WordPress-parity URLs: every old URL had a trailing slash.
  // e.g. /platform-services/sap-fiori/ and /cost-optimization-.../ (blog at root).
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
