const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * @memberOf module:Parts
 * @return {Part}
 */
function getResolve() {
  return {
    extensions: ['.js', '.vue'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      '@': path.resolve(__dirname, 'src/'),
    },
  };
}

module.exports = getResolve;
