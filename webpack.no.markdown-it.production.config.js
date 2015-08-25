'use strict';
const config = require('./webpack.production.config.js');
config.output.filename = 'wbt-text-no-markdown-it.min.js';
config.externals['markdown-it'] = 'markdownit';
module.exports = config;
