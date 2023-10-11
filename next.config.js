/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: {
    emotion: true,
    styledComponents: true,
  },
}

module.exports = nextConfig
