const entryOutput = require('./parts/entry-output');

const getVuePreset = require('./presets/vue-preset');
const getJsPreset = require('./presets/js-preset');
const getCssPreset = require('./presets/css-preset');

const getAllPlugins = require('./parts/plugins');
const getDevServer = require('./parts/dev-server');

const analyzeMode = process.env.analyze;

module.exports = {
  ...entryOutput(),
  module: {
    rules: [getVuePreset(), getJsPreset(), getCssPreset()],
  },
  plugins: getAllPlugins(analyzeMode),
  devServer: getDevServer(),
};
