'use strict';
const config = require('./webpack.config.js');
config.output.filename = 'wbt-text-no-markdown-it.js';
config.externals['markdown-it'] = 'markdownit';
module.exports = config;
