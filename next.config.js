/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  images: {
    domains: [
      'steamuserimages-a.akamaihd.net',
      'converse2k22.vercel.app',
      'i.pinimg.com',
      'converse2k23.s3.ap-south-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
