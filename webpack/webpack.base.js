const entryOutput = require('./parts/entry-output');

const getVuePreset = require('./presets/vue-preset');
const getJsPreset = require('./presets/js-preset');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getPugPreset = require('./presets/pug-preset');
const getLintPreset = require('./presets/lint-preset');

const getBasePlugins = require('./parts/plugins');
const getDevServer = require('./parts/dev-server');
const getResolve = require('./parts/resolve');

const analyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  module: {
    rules: [getVuePreset(), getPugPreset(), getLintPreset(), getJsPreset(), getCssPreset(false), getFilePreset()],
  },
  plugins: getBasePlugins(analyzeMode),
  devServer: getDevServer(),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
