const path = require('path');
const webpack = require('webpack');

const basePath = process.env.NODE_ENV === 'production' ? '' : '';

module.exports = {
  webpack: (config) => {
      config.resolve.modules.push(path.resolve('./'));
      return config;
  },
  basePath,
  assetPrefix: `${basePath}/`
};
