const getVueLoader = require('../loaders/vue-loader');

/**
 * Returns a flow for process vue files
 * @memberOf module:Presets
 * @return {Preset}
 */
function getVuePreset() {
  return {
    test: /\.vue$/,
    use: [getVueLoader()],
  };
}

module.exports = getVuePreset;
