const getBabelLoader = require('../loaders/babel-loader');

/**
 * Returns a flow for process js input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getJsPreset() {
  return {
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    use: [getBabelLoader()],
  };
}
module.exports = getJsPreset;
