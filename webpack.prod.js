const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

module.exports = merge(common, {});
