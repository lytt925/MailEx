// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }

// module.exports = nextConfig

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack(config, { isServer }) {
    // Conditionally apply the bundle analyzer plugin
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
