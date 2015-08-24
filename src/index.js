import angular from 'angular';
import markdownit from 'markdown-it';
import Markdown from './markdown-provider';
import markdown from './markdown-directive';
import marked from './marked-directive';

export default angular.module('markdown',['ngSanitize'])
.constant('markdownit',markdownit)
.provider('markdown',Markdown)
.directive('markdown',markdown)
.directive('marked',marked)
.name;
