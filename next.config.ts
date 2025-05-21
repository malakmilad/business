// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No domains needed for local images
    unoptimized: true, // OPTIONAL: disables Image Optimization if you want to use raw local files
  },
};

module.exports = nextConfig;
