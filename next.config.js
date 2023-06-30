/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cbea.ms', 'files.readme.io', 'images.ctfassets.net'],
  },
};

module.exports = nextConfig;
