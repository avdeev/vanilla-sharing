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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';

var encodeParams = function encodeParams(obj) {
  return Object.keys(obj).filter(function (k) {
    return typeof obj[k] !== 'undefined';
  }).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};

var vk = exports.vk = function vk() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      image = options.image,
      isVkParse = options.isVkParse;
  var description = options.description,
      title = options.title;


  if (description && description.length > 80) {
    description = description.substr(0, 80) + '...';
  }

  if (title && title.length > 80) {
    title = title.substr(0, 80) + '...';
  }

  var params = void 0;
  if (isVkParse) {
    params = encodeParams({ url: url });
  } else {
    params = encodeParams({ url: url, title: title, description: description, image: image, noparse: true });
  }

  return window.open('https://vk.com/share.php?' + params, '_blank', WIN_PARAMS);
};

var ok = exports.ok = function ok() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    'st.cmd': 'addShare',
    'st._surl': url,
    title: title
  });

  return window.open('https://ok.ru/dk?' + params, '_blank', WIN_PARAMS);
};

var fb = exports.fb = function fb() {
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

  var params = encodeParams({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url,
    name: title,
    description: description,
    picture: image
  });

  return window.open('https://www.facebook.com/dialog/feed?' + params, '_blank', WIN_PARAMS);
};

var gp = exports.gp = function gp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  var params = encodeParams({ url: url });

  return window.open('https://plus.google.com/share?' + params, '_blank', WIN_PARAMS);
};

var tw = exports.tw = function tw() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  var params = encodeParams({
    text: title,
    url: url
  });

  return window.open('https://twitter.com/intent/tweet?' + params, '_blank', WIN_PARAMS);
};

var mail = exports.mail = function mail() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      image = options.image;


  var params = encodeParams({
    share_url: url,
    title: title,
    description: description,
    imageurl: image
  });

  return window.open('http://connect.mail.ru/share?' + params, '_blank', WIN_PARAMS);
};

var telegram = exports.telegram = function telegram() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    url: url,
    text: title
  });

  return window.open('https://t.me/share/url?' + params, '_blank', WIN_PARAMS);
};

var viber = exports.viber = function viber() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    text: title + ' ' + url
  });

  // TODO: check for mobile ?
  return window.open('viber://forward?' + params, '_blank', WIN_PARAMS);
};

var whatsapp = exports.whatsapp = function whatsapp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = encodeParams({
    href: url,
    text: title
  });

  // TODO: check for mobile ?
  return window.open('whatsapp://send?' + params, '_blank', WIN_PARAMS);
};

/***/ })
/******/ ]);
});