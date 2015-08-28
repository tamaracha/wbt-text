'use strict';
const compression = require('compression-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';
const config = {
  entry: './src/index.js',
  output: {
    filename: 'wbt-text.js',
    path: './dist',
    library: 'wbtText',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        loader: 'ng-annotate?add!babel!eslint',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'style!css',
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: `template-html?engine=jade&doctype=html&basedir=${__dirname}/src`,
        test: /\.jade$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'json',
        test: /\.json$/
      }
    ]
  },
  externals: {
    angular: 'angular',
    MathJax: 'MathJax'
  },
  plugins: [
    new compression()
  ]
};
if(prod){
  config.output.filename = 'wbt-text.min.js';
}
module.exports = config;
