import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "a3.espncdn.com",
      "i.cbc.ca",
      "www.hotelnewsresource.com", // ✅ add this
    ],
  },
};

export default nextConfig;
