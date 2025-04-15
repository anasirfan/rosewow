/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during build as requested
    ignoreDuringBuilds: true,
  },
  // Ensure compatibility with dependencies
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
