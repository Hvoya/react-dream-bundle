const getFileLoader = require('../loaders/file-loader');

/**
 * @description Return a file flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getFilePreset() {
  return {
    test: /\.(jpe?g|png|svg)$/i,
    use: [getFileLoader()],
  };
}

module.exports = getFilePreset;
