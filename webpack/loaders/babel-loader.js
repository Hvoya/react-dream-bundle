/**
 * Returns a babel-loader. It process all js files and script inside vue component
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/babel-loader
 */
function getBabelLoader() {
  return {
    loader: 'babel-loader',
    options: {},
  };
}

module.exports = getBabelLoader;
