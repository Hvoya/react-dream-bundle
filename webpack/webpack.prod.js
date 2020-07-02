const getOptimization = require('./parts/optimization');

const getCssPreset = require('./presets/css-preset');

const getImageminPlugin = require('./plugins/imagemin-webpack-plugin');
const getBrotliPlugin = require('./plugins/brotli-plugin');
const getMiniCssExtractPlugin = require('./plugins/mini-css-extract-plugin');
const getCleanPlugin = require('./plugins/clean-plugin');
const getHashedModulesIdsPlugin = require('./plugins/hashed-modules-ids-plugin');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
  module: {
    rules: [getCssPreset(true)],
  },
  plugins: [
    getImageminPlugin(),
    getBrotliPlugin(),
    getMiniCssExtractPlugin(),
    getCleanPlugin(),
    getHashedModulesIdsPlugin(),
  ],
};
