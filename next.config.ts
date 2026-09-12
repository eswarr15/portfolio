import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  assetPrefix: isGitHubPagesBuild ? "/portfolio/" : undefined,
  trailingSlash: isGitHubPagesBuild,
};

export default nextConfig;
