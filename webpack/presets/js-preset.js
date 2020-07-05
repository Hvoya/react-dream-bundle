const getBabelLoader = require('../loaders/babel-loader');

/**
 * Returns a flow for process js input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getJsPreset() {
  return {
    test: /\.js$/,
    use: [getBabelLoader()],
  };
}
module.exports = getJsPreset;
