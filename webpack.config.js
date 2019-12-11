const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return merge(baseConfig(env, argv), prodConfig);
  } else if (argv.mode === 'development') {
    return merge(baseConfig(env, argv), devConfig);
  }
};
