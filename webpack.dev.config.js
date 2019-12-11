const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: '4000',
      openAnalyzer: false,
    }),
  ],
  devServer: {
    hot: false,
    inline: true,
    port: 3000,
    host: '0.0.0.0',
    // disableHostCheck: true,
    historyApiFallback: true,
    publicPath: '/',
  },
  devtool: 'source-map',
};
