const VueLoaderPlugin = require('vue-loader/lib/plugin');

/**
 * Returns a VueLoaderPlugin. It extracts from .vue files style as .css, script as .js
 * @memberOf module:Plugins
 * @return {Object}
 * @see https://www.npmjs.com/package/vue-loader
 */
function getVueLoaderPlugin() {
  return new VueLoaderPlugin();
}

module.exports = getVueLoaderPlugin;
