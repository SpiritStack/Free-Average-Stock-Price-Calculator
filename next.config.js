const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProduction ? '/Free-Average-Stock-Price-Calculator' : '',
  basePath: isProduction ? '/Free-Average-Stock-Price-Calculator' : '',
};
