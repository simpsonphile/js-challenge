/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  // reactStrictMode: true,
  assetPrefix: prod ? 'https://simpsonphile.github.io/js-challenge/' : '',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
