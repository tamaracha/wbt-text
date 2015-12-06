import angular from 'angular';
import markdownit from 'markdown-it';
import Markdown from './markdown-provider';
import markdown from './markdown-directive';
import marked from './marked-directive';
import deflist from 'markdown-it-deflist';
import attrs from 'markdown-it-attrs';
import footnote from 'markdown-it-footnote';
import figure from './figure';

module.exports = angular.module('wbt.text',['ngSanitize'])
.constant('markdownit',markdownit)
.provider('markdown',Markdown)
.config(/*@ngInject*/function(markdownProvider){
  markdownProvider.plugins = [deflist,attrs,footnote,figure];
})
.directive('markdown',markdown)
.directive('marked',marked)
.name;
