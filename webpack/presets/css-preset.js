const getVueStyleLoader = require('../loaders/vue-style-loader');
const getCssLoader = require('../loaders/css-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  return {
    test: /\.css$/,
    use: [getVueStyleLoader(), getCssLoader()],
  };
}

module.exports = getCssPreset;
