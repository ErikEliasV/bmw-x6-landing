import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "bmw.scene7.com" },
      { hostname: "prod.cosy.bmw.cloud" },
    ],
  },
};

export default nextConfig;
