/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  images: {
    domains:['i.gifer.com', '64.media.tumblr.com']
  }
};

module.exports = nextConfig;
