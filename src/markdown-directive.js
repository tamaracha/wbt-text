export default /*@ngInject*/function markdownDirective($window,$sanitize,markdown){
  function link(scope,el,attrs){
    function render(val){
      const html = scope.renderer.render(val);
      const saneHtml = $sanitize(html);
      el.html(saneHtml);
      if($window.MathJax && attrs.hasOwnProperty('mathJax')){
        $window.MathJax.Hub.Queue(['Typeset', $window.MathJax.Hub, el[0]]);
      }
    }
    if(!scope.renderer){
      scope.renderer = markdown;
    }
    render(scope.markdown || el.text());
    if(scope.markdown){
      const clean = scope.$watch('markdown',render);
      scope.$on('$destroy',clean);
    }
  }
  return {
    restrict: 'AE',
    scope: {
      'markdown': '=?',
      renderer: '&?'
    },
    link
  };
}
