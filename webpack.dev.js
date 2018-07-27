const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map'
});
