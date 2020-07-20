const getEslintLoader = require('../loaders/eslint-loader');

/**
 * Returns a flow for linting messages
 * @memberOf module:Presets
 * @return {Preset}
 */
function getLintPreset() {
  return {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    use: [getEslintLoader()],
  };
}

module.exports = getLintPreset;
