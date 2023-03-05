/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "www.blendersheik.com"],
  },
};

module.exports = nextConfig;
