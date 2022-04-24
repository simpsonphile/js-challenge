/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: prod ? '/js-challenge' : '',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
