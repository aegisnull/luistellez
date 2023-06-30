/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'camo.githubusercontent.com',
      'github.com',
      'private-user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
