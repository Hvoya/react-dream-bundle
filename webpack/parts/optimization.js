const getUglifyJsPlugin = require('../plugins/uglify-js-plugin');
const getCssNanoPlugin = require('../plugins/css-nano-plugin');

/**
 * @description Returns optimization webpack object
 * @memberOf module:Parts
 * @return {Part}}
 */
function getOptimization() {
  return {
    minimizer: [getUglifyJsPlugin(), getCssNanoPlugin()],
  };
}

module.exports = getOptimization;
