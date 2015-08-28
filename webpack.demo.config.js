'use strict';
const html = require('html-webpack-plugin');
const jade = require('jade');
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
config.plugins.push(
  new html({
    templateContent: jade.compileFile(__dirname+'/demo/index.jade'),
    title: 'wbt-text Demo App',
    inject: 'head'
  })
);
module.exports = config;
