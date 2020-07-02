/**
 * @description Returns loader, which parses pug after extracting it from .vue files
 * @memberOf module.Loaders
 * @see https://vue-loader.vuejs.org/ru/guide/pre-processors.html#typescript
 * @return {Loader}
 */
function getPugLoader() {
  return {
    loader: 'pug-plain-loader',
    options: {},
  };
}

module.exports = getPugLoader;
