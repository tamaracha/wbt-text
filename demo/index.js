import angular from 'angular';
export default angular.module('demoApp',[window.demo.library])
.config(function(markdownProvider){
  markdownProvider.preset = 'commonmark';
})
.controller('DemoController',function(){
  this.text = '# hello markdown';
})
.directive('demo',function(){
  return {
    controller: 'DemoController as demo',
    template: require('./demo.jade')
  };
})
.name;
