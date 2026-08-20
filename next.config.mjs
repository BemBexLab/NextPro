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
    const legacyPortfolioProjectSlugs = [
      "bonsai-spirit-logo",
      "precision-pharma-logo",
      "james-laura-wedding-website-development",
      "anemone-wordpress-quick-website-development",
      "adelie-pebbles-logo",
      "partake-foods-shopify-store-development",
      "david-coffey-wordpress-website",
      "nyc-valet-parking-logo",
      "infinity-logistics-logo",
      "jk-crowe-logo",
      "green-thumb-logo",
      "cafe-34-logo",
      "cowboy-shopify-store-development",
      "anybotics-wordpress-store-development",
      "dropps-shopify-store-development",
      "firefly-logo",
      "gc-remedial-logo",
      "visual-soldiers-wordpress-website",
      "debra-smalley-wordpress-website-for-real-estate",
      "oskar-gydells-wordpress-woocommerce-website",
      "3d-mania-wordpress-woocommerce-website",
      "brew-house-logo",
      "saie-shopify-store-development",
    ];

    const legacyPortfolioRedirects = [
      ...legacyPortfolioProjectSlugs.map((slug) => ({
        source: `/projects/${slug}`,
        destination: "/portfolio/",
        permanent: true,
      })),
      ...[
        "/images/slider/clients08.webp-31",
        "/images/slider/clients06.webp-5",
        "/blog-dynamic/4",
        "/blog-dynamic/5",
        "/blog-dynamic/6",
        "/blog-dynamic/8",
      ].map((source) => ({
        source,
        destination: "/portfolio/",
        permanent: true,
      })),
    ];

    return [
      ...legacyPortfolioRedirects,
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
