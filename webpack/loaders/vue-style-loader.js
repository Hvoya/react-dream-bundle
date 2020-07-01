/**
 * Returns a vue-style-loader. It extract styles from vue components
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/vue-style-loader
 */
function getVueStyleLoader() {
  return {
    loader: 'vue-style-loader',
    options: {},
  };
}

module.exports = getVueStyleLoader;
