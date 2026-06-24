import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yce-us.s3-accelerate.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
