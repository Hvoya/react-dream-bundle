const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * @description Returns uglify-js plugin which minimize js properly
 * @memberOf module: {Plugins}
 * @param {boolean} parallel - If true uses multi-process parallel running to improve the build speed
 * @return {Plugin}
 * @see https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
 */
function getUglifyJsPlugin(parallel) {
  return new UglifyJsPlugin({
    parallel,
  });
}

module.exports = getUglifyJsPlugin;
