(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("markdownit"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "markdownit"], factory);
	else if(typeof exports === 'object')
		exports["wbtText"] = factory(require("angular"), require("markdownit"));
	else
		root["wbtText"] = factory(root["angular"], root["markdownit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _markdownIt = __webpack_require__(2);

	var _markdownIt2 = _interopRequireDefault(_markdownIt);

	var _markdownProvider = __webpack_require__(3);

	var _markdownProvider2 = _interopRequireDefault(_markdownProvider);

	var _markdownDirective = __webpack_require__(4);

	var _markdownDirective2 = _interopRequireDefault(_markdownDirective);

	var _markedDirective = __webpack_require__(5);

	var _markedDirective2 = _interopRequireDefault(_markedDirective);

	exports['default'] = _angular2['default'].module('wbt.text', ['ngSanitize']).constant('markdownit', _markdownIt2['default']).provider('markdown', _markdownProvider2['default']).directive('markdown', _markdownDirective2['default']).directive('marked', _markedDirective2['default']).name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	/*@ngInject*/
	var MarkdownProvider = (function () {
	  function MarkdownProvider(markdownit) {
	    _classCallCheck(this, MarkdownProvider);

	    this.config = {
	      preset: 'default',
	      options: {
	        html: true,
	        typographer: true,
	        quotes: '„“‚‘',
	        breaks: true
	      }
	    };
	    this.markdownit = markdownit;
	  }
	  MarkdownProvider.$inject = ["markdownit"];

	  _createClass(MarkdownProvider, [{
	    key: '$get',
	    value: function $get() {
	      return this.markdownit(this.config.preset, this.config.options);
	    }
	  }, {
	    key: 'preset',
	    get: function get() {
	      return this.config.preset;
	    },
	    set: function set(val) {
	      this.config.preset = val;
	      return this;
	    }
	  }, {
	    key: 'options',
	    get: function get() {
	      return this.config.options;
	    },
	    set: function set(val) {
	      _angular2['default'].extend(this.config.options, val);
	      return this;
	    }
	  }]);

	  return MarkdownProvider;
	})();

	exports['default'] = MarkdownProvider;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = markdownDirective;
	/*@ngInject*/
	function markdownDirective($window, $sanitize, markdown) {
	  function link(scope, el, attrs) {
	    function render(val) {
	      var html = scope.renderer.render(val);
	      var saneHtml = $sanitize(html);
	      el.html(saneHtml);
	      if ($window.MathJax && attrs.hasOwnProperty('mathJax')) {
	        $window.MathJax.Hub.Queue(['Typeset', $window.MathJax.Hub, el[0]]);
	      }
	    }
	    if (!scope.renderer) {
	      scope.renderer = markdown;
	    }
	    render(scope.markdown || el.text());
	    if (scope.markdown) {
	      var clean = scope.$watch('markdown', render);
	      scope.$on('$destroy', clean);
	    }
	  }
	  return {
	    restrict: 'AE',
	    scope: {
	      'markdown': '=?',
	      renderer: '&?'
	    },
	    link: link
	  };
	}
	markdownDirective.$inject = ["$window", "$sanitize", "markdown"];

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	//import MathJax from 'MathJax';
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _markedJade = __webpack_require__(6);

	var _markedJade2 = _interopRequireDefault(_markedJade);

	exports['default'] = /*@ngInject*/["markdown", function (markdown) {
	  function controller() {
	    this.mode = 'markdown';
	  }
	  function link(scope, el) {
	    function render(val) {
	      scope.marked.output = markdown.render(val);
	      MathJax.Hub.Queue(['Typeset', MathJax.Hub, el[0]]); // eslint-disable-line
	    }
	    render(scope.marked.input);
	    var clean = scope.$watch('marked.input', render);
	    scope.$on('$destroy', clean);
	  }
	  return {
	    restrict: 'E',
	    scope: {
	      input: '=',
	      label: '@'
	    },
	    template: _markedJade2['default'],
	    controller: controller,
	    controllerAs: 'marked',
	    bindToController: true,
	    link: link
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-sm-12"><h3 ng-bind="marked.label"></h3><ul class="nav nav-tabs"><li ng-class="{\'active\': \'markdown\'}[marked.mode]"><button type="button" ng-click="marked.mode=\'write\'" class="btn btn-default">Markdown</button></li><li ng-class="{\'active\': \'preview\'}[marked.mode]"><button type="button" ng-click="marked.mode=\'preview\'" class="btn btn-default">Vorschau</button></li><li ng-class="{\'active\': \'both\'}[marked.mode]"><button type="button" ng-click="marked.mode=\'both\'" class="btn btn-default">nebeneinander</button></li></ul></div></div><div ng-switch="marked.mode" class="row"><div ng-switch-when="markdown" class="col-sm-12"><textarea ng-model="marked.input" ng-model-options="{updateOn: \'default blur\', debounce: {default: 500, blur: 0}}" class="form-control"></textarea></div><div ng-switch-when="preview" ng-bind-html="marked.output" class="col-sm-12"></div><div ng-switch-when="both" class="col-sm-6"><textarea ng-model="marked.input" ng-model-options="{updateOn: \'default blur\', debounce: {default: 500, blur: 0}}" class="form-control"></textarea></div><div ng-switch-when="both" ng-bind-html="marked.output" class="col-sm-6"></div></div>'

/***/ }
/******/ ])
});
;