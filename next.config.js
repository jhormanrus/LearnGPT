/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  eslint: {
    dirs: ['.']
  }
}

module.exports = nextConfig
