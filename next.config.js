/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings in development
  reactStrictMode: true,
  // Disable image optimization warnings
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
