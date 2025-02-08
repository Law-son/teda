const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:locale/assets/:path*',
          destination: '/assets/:path*',
        },
      ];
    },
  };

module.exports = withNextIntl(nextConfig);
