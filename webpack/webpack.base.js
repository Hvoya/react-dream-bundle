const entryOutput = require('./parts/entry-output');

const getJsPreset = require('./presets/js-preset');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getLintPreset = require('./presets/lint-preset');

const getBasePlugins = require('./parts/plugins');
const getDevServer = require('./parts/dev-server');
const getResolve = require('./parts/resolve');

const analyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  module: {
    rules: [getLintPreset(), getJsPreset(), getCssPreset(false), getFilePreset()],
  },
  plugins: getBasePlugins(analyzeMode),
  devServer: getDevServer(),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
