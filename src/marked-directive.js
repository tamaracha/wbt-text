import templateUrl from './marked.jade';

export default /*@ngInject*/function markedDirective(){
  function controller(){
    this.mode = 'markdown';
  }
  return {
    restrict: 'E',
    scope: {
      markdown: '=text',
      label: '@'
    },
    templateUrl,
    controller,
    controllerAs: 'marked',
    bindToController: true
  };
}
