import angular from 'angular';
import markdownit from 'markdown-it';
import Markdown from './markdown-provider';
import markdown from './markdown-directive';
import marked from './marked-directive';
import deflist from 'markdown-it-deflist';
import decorate from 'babel?presets[]=es2015!markdown-it-decorate';
import footnote from 'markdown-it-footnote';
import figure from './figure';

module.exports = angular.module('wbt.text',['ngSanitize'])
.constant('markdownit',markdownit)
.provider('markdown',Markdown)
.config(/*@ngInject*/function(markdownProvider){
  markdownProvider.plugins = [deflist,decorate,footnote,figure];
})
.directive('markdown',markdown)
.directive('marked',marked)
.name;
