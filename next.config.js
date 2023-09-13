/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  images: {
    domains: ['converse2k22.vercel.app'],
  },
};

module.exports = nextConfig;
