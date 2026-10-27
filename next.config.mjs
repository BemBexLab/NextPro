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
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
    async redirects() {
    return [
      {
        source: '/blog/how-local-seo-helps-small-businesses-in-alexandria-va',
        destination: '/locations/alexandria-search-engine-optimization',
        permanent: true, // 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
