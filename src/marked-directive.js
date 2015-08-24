//import MathJax from 'MathJax';
import template from './marked.jade';

export default /*@ngInject*/function(markdown){
  function controller(){
    this.mode = 'markdown';
  }
  function link(scope,el){
    function render(val){
      scope.marked.output = markdown.render(val);
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, el[0]]); // eslint-disable-line
    }
    render(scope.marked.input);
    const clean = scope.$watch('marked.input',render);
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'E',
    scope: {
      input: '=',
      label: '@'
    },
    template,
    controller,
    controllerAs: 'marked',
    bindToController: true,
    link
  };
}
