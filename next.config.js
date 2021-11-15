const basePath = process.env.NODE_ENV === 'production' ? '/Diablo-Guitars' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
