/**
 * Returns a babel-loader. It process all js and jsx files
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
