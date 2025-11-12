/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Ignore build-time ESLint or TypeScript errors (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Allow Next.js Image Optimization for Cloudinary
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
