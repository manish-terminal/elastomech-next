/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you need here
    unoptimized: true, // This allows using local images without optimization
  },
}

module.exports = nextConfig 