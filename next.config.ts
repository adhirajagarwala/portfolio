import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer information
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser feature access
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Enable DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Force HTTPS for 2 years (only active on production HTTPS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Content Security Policy — tightened for a static Next.js portfolio
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for styles; tighten once stable
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Scripts: self + Vercel analytics/insights
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      // Images: self + data URIs (used by Next.js image optimiser)
      "img-src 'self' data: blob:",
      // Connections: self + Vercel telemetry endpoints
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
