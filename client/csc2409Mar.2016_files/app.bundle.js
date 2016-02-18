webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(13);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _commonCommon = __webpack_require__(14);
	
	var _commonCommon2 = _interopRequireDefault(_commonCommon);
	
	var _componentsComponents = __webpack_require__(32);
	
	var _componentsComponents2 = _interopRequireDefault(_componentsComponents);
	
	var _appComponent = __webpack_require__(45);
	
	var _appComponent2 = _interopRequireDefault(_appComponent);
	
	__webpack_require__(49);
	
	_angular2['default'].module('app', [_angularUiRouter2['default'], _commonCommon2['default'].name, _componentsComponents2['default'].name]).config(["$locationProvider", function ($locationProvider) {
	  "ngInject";
	  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
	  // #how-to-configure-your-server-to-work-with-html5mode
	  $locationProvider.html5Mode(true).hashPrefix('!');
	}]).component('app', _appComponent2['default']);

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _navbarNavbar = __webpack_require__(15);
	
	var _navbarNavbar2 = _interopRequireDefault(_navbarNavbar);
	
	var _dashboardDashboard = __webpack_require__(23);
	
	var _dashboardDashboard2 = _interopRequireDefault(_dashboardDashboard);
	
	var _userUser = __webpack_require__(30);
	
	var _userUser2 = _interopRequireDefault(_userUser);
	
	var commonModule = _angular2['default'].module('app.common', [_navbarNavbar2['default'].name, _dashboardDashboard2['default'].name, _userUser2['default'].name]);
	
	exports['default'] = commonModule;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(13);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _navbarComponent = __webpack_require__(16);
	
	var _navbarComponent2 = _interopRequireDefault(_navbarComponent);
	
	var navbarModule = _angular2['default'].module('navbar', [_angularUiRouter2['default']]).component('navbar', _navbarComponent2['default']);
	
	exports['default'] = navbarModule;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _navbarHtml = __webpack_require__(17);
	
	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);
	
	var _navbarController = __webpack_require__(18);
	
	var _navbarController2 = _interopRequireDefault(_navbarController);
	
	__webpack_require__(19);
	
	var navbarComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _navbarHtml2['default'],
	  controller: _navbarController2['default'],
	  controllerAs: 'vm'
	};
	
	exports['default'] = navbarComponent;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Monitoring site</title>\r\n  <!--meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\r\n  <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script-->\r\n</head>\r\n<body>\r\n\r\n<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">Monitoring site</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a href=\"#\">Dashboard</a></li>\r\n      <!--li><a href=\"#\">Page 1</a></li>\r\n      <li><a href=\"#\">Page 2</a></li>\r\n      <li><a href=\"#\">Page 3</a></li-->\r\n    </ul>\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var NavbarController = function NavbarController() {
	  _classCallCheck(this, NavbarController);
	
	  this.name = 'navbar';
	};
	
	exports['default'] = NavbarController;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(20, function() {
				var newContent = __webpack_require__(20);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto);", ""]);
	exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css);", ""]);
	
	// module
	exports.push([module.id, "body {\n  height: 100%;\n  font: 62.5% 'Roboto', sans-serif;\n}\n.navbar {\n  height: 1.5rem;\n  background-color: #263238;\n}\n.navbar .navbar-brand {\n  color: #f5f5f5;\n}\n.navbar .nav {\n  color: #f5f5f5;\n  font-size: 1.5rem;\n}\n", ""]);
	
	// exports


/***/ },
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(13);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _dashboardComponent = __webpack_require__(24);
	
	var _dashboardComponent2 = _interopRequireDefault(_dashboardComponent);
	
	var dashboardModule = _angular2['default'].module('dashboard', [_angularUiRouter2['default']]).component('dashboard', _dashboardComponent2['default']);
	
	exports['default'] = dashboardModule;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dashboardHtml = __webpack_require__(25);
	
	var _dashboardHtml2 = _interopRequireDefault(_dashboardHtml);
	
	var _dashboardController = __webpack_require__(26);
	
	var _dashboardController2 = _interopRequireDefault(_dashboardController);
	
	__webpack_require__(28);
	
	var dashboardComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _dashboardHtml2['default'],
	  controller: _dashboardController2['default'],
	  controllerAs: 'vm'
	};
	
	exports['default'] = dashboardComponent;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<!--head>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js\" charset=\"utf-8\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js\"></script>\r\n    <script src=\"https://rawgit.com/krispo/angular-nvd3/v1.0.4/dist/angular-nvd3.js\"></script>\r\n</head-->\r\n<!--section class=\"dashboard\">\r\n  <h1>This is the NG6 starter</h1>\r\n  <h3>You can find me inside {{ vm.name }}.html</h3>\r\n</section-->\r\n\t<div class=\"gridster\">\r\n\t\t<ul>\r\n\t\t\t<li data-row=\"1\" data-col=\"1\" data-sizex=\"7\" data-sizey=\"7\"><h1>Grid One</h1></li>\r\n\t\t\t<li data-row=\"1\" data-col=\"2\" data-sizex=\"3\" data-sizey=\"3\"><h1>Grid Two</h1></li>\r\n\t\t\t<li data-row=\"=1\" data-col=\"3\" data-sizex=\"2\" data-sizey=\"3\"><h1>Grid Three</h1></li>\r\n\t\t\t<li data-row=\"1\" data-col=\"2\" data-sizex=\"2\" data-sizey=\"1\"><h1>Grid Four</h1></li>\r\n\t\t\t<li data-row=\"2\" data-col=\"2\" data-sizex=\"2\" data-sizey=\"2\"><h1>Grid Five</h1></li>\r\n\t\t\t<li data-row=\"1\" data-col=\"4\" data-sizex=\"1\" data-sizey=\"1\"><h1>Grid Six</h1></li>\r\n\t\t\t<li data-row=\"2\" data-col=\"4\" data-sizex=\"2\" data-sizey=\"1\"><h1>Grid Seven</h1></li>\r\n\t\t\t<li data-row=\"3\" data-col=\"4\" data-sizex=\"1\" data-sizey=\"1\"><h1>Grid Eight</h1></li>\r\n\t\t\t<li data-row=\"1\" data-col=\"5\" data-sizex=\"1\" data-sizey=\"1\"><h1>Grid Nine</h1></li>\r\n\t\t\t<li data-row=\"3\" data-col=\"5\" data-sizex=\"1\" data-sizey=\"1\"><h1>Grid Ten</h1></li>\r\n\t\t\t<li data-row=\"1\" data-col=\"6\" data-sizex=\"1\" data-sizey=\"1\"><h1>Grid Eleven</h1></li>\r\n\t\t\t<li data-row=\"2\" data-col=\"6\" data-sizex=\"1\" data-sizey=\"2\"><h1>Grid Twelve</h1></li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _d3 = __webpack_require__(27);
	
	var d3 = _interopRequireWildcard(_d3);
	
	var dashboardController = function dashboardController($scope) {
	  _classCallCheck(this, dashboardController);
	
	  this.name = 'dashboard';
	  console.log($scope);
	};
	
	exports['default'] = dashboardController;
	
	dashboardController.$inject = ['$scope'];
	module.exports = exports['default'];

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(29, function() {
				var newContent = __webpack_require__(29);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, "body {\n  height: 100%;\n  font: 62.5% 'Roboto', sans-serif;\n}\n.dashboard {\n  background-color: $37474f;\n  height: 50rem;\n  padding: 3rem;\n}\n.dashboard * {\n  color: #212121;\n}\n", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _userFactory = __webpack_require__(31);
	
	var _userFactory2 = _interopRequireDefault(_userFactory);
	
	var userModule = _angular2['default'].module('user', []).factory('User', _userFactory2['default']);
	
	exports['default'] = userModule;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UserFactory = function UserFactory() {
	  var user = {};
	
	  var getUser = function getUser() {
	    return user;
	  };
	
	  var isSignedIn = function isSignedIn() {
	    return user.isSignedIn;
	  };
	
	  return { getUser: getUser, isSignedIn: isSignedIn };
	};
	
	exports["default"] = UserFactory;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _homeHome = __webpack_require__(33);
	
	var _homeHome2 = _interopRequireDefault(_homeHome);
	
	var _aboutAbout = __webpack_require__(39);
	
	var _aboutAbout2 = _interopRequireDefault(_aboutAbout);
	
	var componentModule = _angular2['default'].module('app.components', [_homeHome2['default'].name, _aboutAbout2['default'].name]);
	
	exports['default'] = componentModule;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(13);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _homeComponent = __webpack_require__(34);
	
	var _homeComponent2 = _interopRequireDefault(_homeComponent);
	
	var homeModule = _angular2['default'].module('home', [_angularUiRouter2['default']]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	  "ngInject";
	
	  $urlRouterProvider.otherwise('/');
	
	  $stateProvider.state('home', {
	    url: '/',
	    template: '<home></home>'
	  });
	}]).component('home', _homeComponent2['default']);
	
	exports['default'] = homeModule;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _homeHtml = __webpack_require__(35);
	
	var _homeHtml2 = _interopRequireDefault(_homeHtml);
	
	var _homeController = __webpack_require__(36);
	
	var _homeController2 = _interopRequireDefault(_homeController);
	
	__webpack_require__(37);
	
	var homeComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _homeHtml2['default'],
	  controller: _homeController2['default'],
	  controllerAs: 'vm'
	};
	
	exports['default'] = homeComponent;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\r\n<dashboard></dashboard>\r\n\r\n<main>\r\n  \r\n</main>\r\n"

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HomeController = function HomeController() {
	  _classCallCheck(this, HomeController);
	
	  this.name = 'home';
	};
	
	exports['default'] = HomeController;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(38, function() {
				var newContent = __webpack_require__(38);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".home {\n  color: #f00;\n}\n", ""]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(11);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(13);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _aboutComponent = __webpack_require__(40);
	
	var _aboutComponent2 = _interopRequireDefault(_aboutComponent);
	
	var aboutModule = _angular2['default'].module('about', [_angularUiRouter2['default']]).config(["$stateProvider", function ($stateProvider) {
	  "ngInject";
	  $stateProvider.state('about', {
	    url: '/about',
	    template: '<about></about>'
	  });
	}]).component('about', _aboutComponent2['default']);
	
	exports['default'] = aboutModule;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _aboutHtml = __webpack_require__(41);
	
	var _aboutHtml2 = _interopRequireDefault(_aboutHtml);
	
	var _aboutController = __webpack_require__(42);
	
	var _aboutController2 = _interopRequireDefault(_aboutController);
	
	__webpack_require__(43);
	
	var aboutComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _aboutHtml2['default'],
	  controller: _aboutController2['default'],
	  controllerAs: 'vm'
	};
	
	exports['default'] = aboutComponent;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\r\n<h1>{{ vm.name }}</h1>\r\n<section>\r\n  About us.\r\n</section>\r\n"

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var AboutController = function AboutController() {
	  _classCallCheck(this, AboutController);
	
	  this.name = 'about';
	};
	
	exports['default'] = AboutController;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(44, function() {
				var newContent = __webpack_require__(44);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".about {\n  color: #f00;\n}\n", ""]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _appHtml = __webpack_require__(46);
	
	var _appHtml2 = _interopRequireDefault(_appHtml);
	
	__webpack_require__(47);
	
	var appComponent = {
	  template: _appHtml2['default'],
	  restrict: 'E'
	};
	
	exports['default'] = appComponent;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<!-- Place all UI elements intended to be present across all routes in this file -->\r\n<div class=\"app\">\r\n  <div ui-view></div>\r\n</div>\r\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(48, function() {
				var newContent = __webpack_require__(48);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".app {\n  height: 100%;\n  background-color: $lightBgColor;\n}\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map