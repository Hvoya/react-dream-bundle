const getHtmlWebpackPlugin = require('../plugins/html-webpack-plugin');
const getBundleAnalyzerPlugin = require('../plugins/bundle-analyzer-plugin');
const getDuplicatesCheckerWebpackPlugin = require('../plugins/duplicates-checker-webpack-plugin');

/**
 @description Returns a list of all connected plugins
 @memberOf module:Parts
 @param {boolean} analyzeMode flag for start bundle-analyzer or not
 @return {Array}
 */
function getBasePlugins(analyzeMode) {
  const plugins = [];
  plugins.push(getHtmlWebpackPlugin());
  plugins.push(getDuplicatesCheckerWebpackPlugin());
  if (analyzeMode) plugins.push(getBundleAnalyzerPlugin());

  return plugins;
}

module.exports = getBasePlugins;
