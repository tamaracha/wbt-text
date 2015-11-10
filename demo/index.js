import angular from 'angular';
import templateUrl from './demo.jade';
import uiBootstrap from 'angular-ui-bootstrap';
import wbtText from '../src';

export default angular.module('demoApp',[wbtText, uiBootstrap])
.config(function(markdownProvider){
  markdownProvider.preset = 'commonmark';
})
.controller('DemoController',function($interval){
  this.text = '# hello markdown {{demo.text2}}';
  this.text2 = 0;
  $interval(() => {
    this.text2++;
  },1000,10);
})
.directive('demo',function(){
  return {
    controller: 'DemoController as demo',
    templateUrl
  };
})
.name;
