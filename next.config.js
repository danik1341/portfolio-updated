/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
