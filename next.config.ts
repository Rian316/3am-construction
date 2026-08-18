import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.33", "localhost"],
  images: {
    qualities: [75, 80],
  },
};

export default nextConfig;
