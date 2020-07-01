const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * @description Returns uglify-js plugin which minimize js properly
 * @memberOf module: {Plugins}
 * @return {Plugin}
 * @see https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
 */
function getUglifyJsPlugin() {
  return new UglifyJsPlugin();
}

module.exports = getUglifyJsPlugin;
