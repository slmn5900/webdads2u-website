/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // ✅ Enables next/image to load images from Cloudinary
  },
}

module.exports = nextConfig
