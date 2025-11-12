import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.worldcovers.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
