const getOptimization = require('./parts/optimization');
const getImageminPlugin = require('./plugins/imagemin-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
  plugins: [getImageminPlugin()],
};
