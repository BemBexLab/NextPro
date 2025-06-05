/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "standalone",
  trailingSlash: true,
  images: {
    domains: ['localhost', 'olive-peafowl-546702.hostingersite.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
