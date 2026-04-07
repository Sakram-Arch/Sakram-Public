import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Sakram-Public",
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
