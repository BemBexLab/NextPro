/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // <--- this disables image optimization for static export
  },
};

export default nextConfig;
