const getEslintLoader = require('../loaders/eslint-loader');

/**
 * Returns a flow for linting messages
 * @memberOf module:Presets
 * @return {Preset}
 */
function getLintPreset() {
  return {
    enforce: 'pre',
    test: /\.(js|vue)$/,
    use: [getEslintLoader()],
  };
}

module.exports = getLintPreset;
