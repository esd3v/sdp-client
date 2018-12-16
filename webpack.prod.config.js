const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const baseConfig = require('./webpack.config.js');
const DIR_BUILD = path.resolve(__dirname, './dist');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  },
  plugins: [
    new TerserPlugin(),
    new CleanWebpackPlugin([DIR_BUILD]),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
});
