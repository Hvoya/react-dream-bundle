const getPugLoader = require('../loaders/pug-loader');

/**
 * Returns a flow for process pug input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getPugPreset() {
  return {
    test: /\.pug$/,
    use: [getPugLoader()],
  };
}

module.exports = getPugPreset;
