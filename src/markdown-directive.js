export default /*@ngInject*/function markdownDirective($sanitize,markdown){
  function link(scope,el,attrs){
    function render(val){
      const html = scope.renderer.render(val);
      const saneHtml = $sanitize(html);
      el.html(saneHtml);
      if(attrs.hasOwnProperty('mathJax')){
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, el[0]]); // eslint-disable-line
      }
    }
    if(!scope.renderer){
      scope.renderer = markdown;
    }
    render(scope.markdown || el.text());
    const clean = scope.$watch('markdown',render);
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'AE',
    scope: {
      'markdown': '?=',
      renderer: '?&'
    },
    link
  };
}
