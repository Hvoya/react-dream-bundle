/**
 * Returns a vue-loader. It load vue single file components
 * @memberOf module:Loaders
 * @see https://www.npmjs.com/package/vue-loader
 * @return {Loader}
 */
function getVueLoader() {
  return {
    loader: 'vue-loader',
    options: {},
  };
}

module.exports = getVueLoader;
