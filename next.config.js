/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kerala-mural-paintings',
  assetPrefix: '/kerala-mural-paintings/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

