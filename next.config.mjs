/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nextConfig = {
  // output: "standalone",
  trailingSlash: true,
  images: {
    domains: ['localhost', 'olive-peafowl-546702.hostingersite.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!config.plugins) {
        config.plugins = [];
      }
      // Add MiniCssExtractPlugin if not already present
      const hasMiniCssExtractPlugin = config.plugins.some(
        (plugin) => plugin?.constructor?.name === 'MiniCssExtractPlugin'
      );
      if (!hasMiniCssExtractPlugin) {
        config.plugins.push(new MiniCssExtractPlugin());
      }
    }
    return config;
  },
};

export default nextConfig;
