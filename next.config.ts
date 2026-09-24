import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aurora-sound",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;