const getOptimization = require('./parts/optimization');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
};
