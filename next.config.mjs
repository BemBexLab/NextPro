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
  async redirects() {
    return [
      {
        source: '/service/seo-service/:path*',
        destination: '/service/seo-services/:path*',
        permanent: true, // 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
