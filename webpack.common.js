const path = require('path');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

//paths
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
const HTML_TEMPLATE_PATH = path.resolve(__dirname, 'src', 'index.html');

module.exports = {
  entry: [SRC_DIR + '/index.tsx'],
  output: {
    path: DIST_DIR,
    filename: '[name].js' //probably useful when chunking. Find out!
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      ['@components']: path.join(SRC_DIR, 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: NODE_MODULES_DIR
      },
      {
        //in case of external libraries that uses css
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: NODE_MODULES_DIR
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE_PATH
    })
  ],
  node: {
    // just to remove npm warning about fsevent optional dependency
    fs: 'empty'
  }
};
