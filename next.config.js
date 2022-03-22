/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  // reactStrictMode: true,
  assetPrefix: prod ? '/js-challenge/' : '',
  env: {
    BACKEND_URL: prod ? '/js-challenge' : '',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
