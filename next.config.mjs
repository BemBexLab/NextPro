/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "standalone",
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@fortawesome/react-fontawesome",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "olive-peafowl-546702.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "projectdemolink.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home/:path*',
        destination: '/',
        permanent: true, // 301 redirect /home -> /
      },
      {
        source: '/service/seo-service/:path*',
        destination: '/service/seo-services/:path*',
        permanent: true, // 301 permanent redirect
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'SA' }],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'SD' }],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'MD' }],
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'MA' }],
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
