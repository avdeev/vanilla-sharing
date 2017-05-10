(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VanillaSharing"] = factory();
	else
		root["VanillaSharing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeParams;
function encodeParams(obj) {
  return Object.keys(obj).filter(function (k) {
    return typeof obj[k] !== 'undefined';
  }).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WIN_PARAMS = exports.WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';
var VK_MAX_LENGTH = exports.VK_MAX_LENGTH = 80;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fb;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fb() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      description = options.description,
      title = options.title,
      url = options.url,
      image = options.image,
      redirectUri = options.redirectUri;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = (0, _encodeParams2.default)({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url,
    name: title,
    description: description,
    picture: image
  });

  return window.open('https://www.facebook.com/dialog/feed?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gp;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  var params = (0, _encodeParams2.default)({ url: url });

  return window.open('https://plus.google.com/share?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linkedin;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkedin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url,
      description = options.description;


  var params = (0, _encodeParams2.default)({
    title: title,
    summary: description,
    url: url
  });

  return window.open('https://www.linkedin.com/shareArticle?mini=true&' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mail;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mail() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      image = options.image;


  var params = (0, _encodeParams2.default)({
    share_url: url,
    title: title,
    description: description,
    imageurl: image
  });

  return window.open('http://connect.mail.ru/share?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messenger;

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function messenger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = (0, _encodeParams2.default)({
    app_id: fbAppId,
    link: url
  });

  return window.open('fb-messenger://share?' + params);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ok;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ok() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    'st.cmd': 'addShare',
    'st._surl': url,
    title: title
  });

  return window.open('https://ok.ru/dk?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = telegram;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function telegram() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    url: url,
    text: title
  });

  return window.open('https://t.me/share/url?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tw;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tw() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  var params = (0, _encodeParams2.default)({
    text: title,
    url: url
  });

  return window.open('https://twitter.com/intent/tweet?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viber;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function viber() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' '),
    fallback: 'https://viber.com'
  });

  return window.open('https://app.adjust.com/u783g1_kw9yml?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = vk;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function vk() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      image = options.image,
      isVkParse = options.isVkParse;
  var description = options.description,
      title = options.title;


  if (description && description.length > _config.VK_MAX_LENGTH) {
    description = description.substr(0, _config.VK_MAX_LENGTH) + '...';
  }

  if (title && title.length > _config.VK_MAX_LENGTH) {
    title = title.substr(0, _config.VK_MAX_LENGTH) + '...';
  }

  var params = void 0;
  if (isVkParse) {
    params = (0, _encodeParams2.default)({ url: url });
  } else {
    params = (0, _encodeParams2.default)({ url: url, title: title, description: description, image: image, noparse: true });
  }

  return window.open('https://vk.com/share.php?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whatsapp;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whatsapp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });

  // TODO: check for mobile ?
  return window.open('whatsapp://send?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messenger = exports.linkedin = exports.whatsapp = exports.vk = exports.viber = exports.tw = exports.telegram = exports.ok = exports.mail = exports.gp = exports.fb = undefined;

var _fb = __webpack_require__(2);

var _fb2 = _interopRequireDefault(_fb);

var _gp = __webpack_require__(3);

var _gp2 = _interopRequireDefault(_gp);

var _mail = __webpack_require__(5);

var _mail2 = _interopRequireDefault(_mail);

var _ok = __webpack_require__(7);

var _ok2 = _interopRequireDefault(_ok);

var _telegram = __webpack_require__(8);

var _telegram2 = _interopRequireDefault(_telegram);

var _tw = __webpack_require__(9);

var _tw2 = _interopRequireDefault(_tw);

var _viber = __webpack_require__(10);

var _viber2 = _interopRequireDefault(_viber);

var _vk = __webpack_require__(11);

var _vk2 = _interopRequireDefault(_vk);

var _whatsapp = __webpack_require__(12);

var _whatsapp2 = _interopRequireDefault(_whatsapp);

var _linkedin = __webpack_require__(4);

var _linkedin2 = _interopRequireDefault(_linkedin);

var _messenger = __webpack_require__(6);

var _messenger2 = _interopRequireDefault(_messenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fb = _fb2.default;
exports.gp = _gp2.default;
exports.mail = _mail2.default;
exports.ok = _ok2.default;
exports.telegram = _telegram2.default;
exports.tw = _tw2.default;
exports.viber = _viber2.default;
exports.vk = _vk2.default;
exports.whatsapp = _whatsapp2.default;
exports.linkedin = _linkedin2.default;
exports.messenger = _messenger2.default;

/***/ })
/******/ ]);
});