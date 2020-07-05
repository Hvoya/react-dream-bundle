/**
 * @description Returns a loader, which enforces codestyle
 * @memberOf module:Loaders
 * @see https://webpack.js.org/loaders/eslint-loader/
 * @return {Loader}
 */
function getEslintLoader() {
  return {
    loader: 'eslint-loader',
    options: {
      failOnError: true,
    },
  };
}

module.exports = getEslintLoader;
