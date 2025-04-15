/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during build as requested
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
