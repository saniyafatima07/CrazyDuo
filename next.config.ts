import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com'], // allow this host
  },
};


module.exports = nextConfig;


export default nextConfig;
