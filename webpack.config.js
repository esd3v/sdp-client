const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const DIR_SRC = path.resolve(__dirname, './src');
const DIR_BUILD = path.resolve(__dirname, './dist');

module.exports = {
  context: DIR_SRC,
  entry: {
    main: './index.tsx',
  },
  target: 'web',
  output: {
    path: DIR_BUILD,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.svg',
      '.scss',
    ],
    modules: [
      DIR_SRC,
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        sideEffects: false,
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'tslint-loader',
            query: {
              failOnHint: false,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
          },
        }],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeViewBox: true},
                {removeTitle: true},
                {cleanupEnableBackground: true},
                {cleanupAttrs: true},
                {removeEmptyAttrs: true},
                {removeDimensions: true},
                {removeStyleElement: true},
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${DIR_SRC}/index.html`,
    }),
    new ProgressBarPlugin({
      format: '[:bar]',
    }),
  ],
};
