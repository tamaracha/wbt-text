var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate?add!babel!eslint'
      },
      {
        loader: 'style!css',
        test: /\.css$/,
      },
      {
        loader: `jade-html?doctype=html&basedir=${__dirname}/src`,
        test: /\.jade$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        loader: 'json',
        test: /\.json$/
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  externals: {
    angular: 'angular',
    MathJax: 'MathJax',
  }
};
