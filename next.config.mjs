/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['http://localhost:3000', 'https://pandacss-theme-generator.vercel.app'],
    },
  },
}

export default nextConfig
