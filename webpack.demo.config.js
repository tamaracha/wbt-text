'use strict';
const config = require('./webpack.config.js');
config.entry = {
  library: './src',
  app: './demo'
};
config.output = {
  filename: 'demo.[name].js',
  path: './demo',
  library: ['demo','[name]'],
  libraryTarget: 'umd'
};
module.exports = config;
