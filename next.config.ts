import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tech-blog",
  assetPrefix: "/tech-blog",
  trailingSlash: true,
};

export default nextConfig;
