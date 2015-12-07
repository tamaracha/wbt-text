export default /*@ngInject*/function markdownDirective($window,markdown, $compile){
  function link(scope,el,attrs){
    function render(){
      const text = scope.$eval(attrs.markdown) || el.text() || '';
      const html = markdown.render(text);
      el.html(html);
      $compile(el.contents())(scope);
      if($window.MathJax && attrs.hasOwnProperty('mathJax')){
        $window.MathJax.Hub.Queue(['Typeset', $window.MathJax.Hub, el[0]]);
      }
    }
    render();
    if(attrs.markdown){
      const clean = scope.$watch(attrs.markdown,() => {
        render();
      });
      scope.$on('$destroy',clean);
    }
  }
  return {
    restrict: 'AE',
    scope: false,
    link
  };
}
