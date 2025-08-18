import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["a3.espncdn.com", "i.cbc.ca"], // add more allowed domains here
  }
};

export default nextConfig;
