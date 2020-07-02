const getVueStyleLoader = require('../loaders/vue-style-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');

/**
 * Returns a flow for process css input
 * @param {boolean} enableChunks - split css into multiple chunks or not
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset(enableChunks) {
  const loaders = [];
  loaders.push(getVueStyleLoader());
  if (enableChunks) loaders.push(MiniCssExtractPlugin.loader);
  loaders.push(getCssLoader());

  return {
    test: /\.css$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
