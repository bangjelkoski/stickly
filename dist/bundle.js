(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Stickly"] = factory();
	else
		root["Stickly"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"[data-stickly-menu-container] {\\n  position: relative;\\n}\\n\\n[data-stickly-menu-container][data-stickly-menu].is-stickly {\\n  position: fixed;\\n  top: 0;\\n}\\n\\n[data-stickly-menu-container][data-stickly-menu].is-stickly-abs {\\n  position: absolute;\\n  bottom: 0;\\n  top: auto;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Stickly/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Stickly/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Stickly/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes/ScrollTo.js":
/*!*********************************!*\
  !*** ./src/classes/ScrollTo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ScrollTo =\n/*#__PURE__*/\nfunction () {\n  function ScrollTo(_ref) {\n    var links = _ref.links,\n        options = _objectWithoutProperties(_ref, [\"links\"]);\n\n    _classCallCheck(this, ScrollTo);\n\n    var config = {\n      scrollClass: 'is-scrolling',\n      callback: function callback() {}\n    };\n    this.links = links;\n    this.options = _objectSpread({}, config, {}, options);\n\n    if (this.links.length) {\n      this.init();\n    }\n  }\n\n  _createClass(ScrollTo, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.links.forEach(function (link) {\n        link.addEventListener('click', function (event) {\n          _this.onClick(event);\n        });\n      });\n    } // eslint-disable-next-line consistent-return\n\n  }, {\n    key: \"onClick\",\n    value: function onClick(event) {\n      var link = event.currentTarget;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isLinkToCurrentPage\"])(link)) {\n        event.preventDefault();\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"updateHistory\"])(link.hash);\n\n        if (link.hash) {\n          return this.scrollToTarget(link);\n        }\n      }\n    }\n  }, {\n    key: \"scrollToTarget\",\n    value: function scrollToTarget(link) {\n      var _this2 = this;\n\n      var target = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getDomNodeFromHash\"])(link.hash);\n\n      if (target) {\n        var rect = target.getBoundingClientRect();\n        var targetTop = rect.top + window.scrollY;\n        var offsetTop = this.options.offset ? targetTop + this.options.offset : targetTop;\n        this.scroll(offsetTop).then(function () {\n          return _this2.onScrollComplete(link, target);\n        });\n      }\n    }\n  }, {\n    key: \"getScrollContainer\",\n    value: function getScrollContainer() {\n      if (!this.scrollContainer) {\n        this.scrollContainer = document.body;\n      }\n\n      return this.scrollContainer;\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll(offsetTop) {\n      var container = this.getScrollContainer();\n      container.classList.add(this.options.scrollClass);\n      return new Promise( // eslint-disable-next-line no-unused-vars\n      function (resolve, reject) {\n        return (// eslint-disable-next-line implicit-arrow-linebreak\n          resolve(window.scrollTo({\n            behavior: 'smooth',\n            left: 0,\n            top: offsetTop\n          }))\n        );\n      } // eslint-disable-next-line function-paren-newline\n      );\n    }\n  }, {\n    key: \"onScrollComplete\",\n    value: function onScrollComplete(link, target) {\n      var container = this.getScrollContainer();\n      container.classList.remove(this.options.scrollClass);\n\n      if (typeof this.callback === 'function') {\n        this.callback(link, target);\n      }\n    }\n  }]);\n\n  return ScrollTo;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTo);\n\n//# sourceURL=webpack://Stickly/./src/classes/ScrollTo.js?");

/***/ }),

/***/ "./src/classes/Stickly.js":
/*!********************************!*\
  !*** ./src/classes/Stickly.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _ScrollTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollTo */ \"./src/classes/ScrollTo.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Stickly =\n/*#__PURE__*/\nfunction () {\n  function Stickly(options) {\n    _classCallCheck(this, Stickly);\n\n    var config = {\n      mainContainer: '[data-stickly-container]',\n      menuContainer: '[data-stickly-menu]',\n      linkContainer: '[data-stickly-menu-link]',\n      waypointContainer: '[data-stickly-waypoint]',\n      classFixed: 'is-stickly',\n      classAbs: 'is-stickly-abs',\n      classLinkActive: 'is-stickly-active',\n      scrollLinkClass: 'is-scrolling',\n      pageTopMargin: 0,\n      scrollOffset: 0\n    };\n    this.options = _objectSpread({}, config, {}, options);\n\n    if (this.options.mainContainer) {\n      this.options.container = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(this.options.mainContainer);\n    }\n\n    if (this.options.container) {\n      var _this$options = this.options,\n          container = _this$options.container,\n          linkContainer = _this$options.linkContainer,\n          menuContainer = _this$options.menuContainer,\n          waypointContainer = _this$options.waypointContainer;\n      this.menu = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(menuContainer, container);\n      this.links = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$$\"])(linkContainer, container);\n      this.waypoints = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$$\"])(waypointContainer, container);\n      this.init();\n    }\n  }\n\n  _createClass(Stickly, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var links = this.links,\n          menu = this.menu,\n          waypoints = this.waypoints;\n      var scrollOffset = this.options.scrollOffset;\n      var domElementsExist = menu && links.length > 0 && waypoints.length > 0;\n\n      if (domElementsExist) {\n        this.getScrollLimits();\n        this.scrollTo = new _ScrollTo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          links: links,\n          offset: scrollOffset,\n          scrollClass: this.options.scrollLinkClass,\n          callback: function callback(link) {\n            _this.updateActiveLink(link);\n          }\n        });\n\n        if (this.doesMenuFit()) {\n          this.bindSticky();\n          this.bindWaypoints();\n        }\n      }\n    }\n  }, {\n    key: \"updateActiveLink\",\n    value: function updateActiveLink(targetId) {\n      var links = this.links;\n      var _this$options2 = this.options,\n          container = _this$options2.container,\n          classLinkActive = _this$options2.classLinkActive;\n      var element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"a[href=\\\"#\".concat(targetId, \"\\\"]\"), container);\n      links.forEach(function (elm) {\n        return elm.classList.remove(classLinkActive);\n      });\n\n      if (element) {\n        element.classList.add(classLinkActive);\n      }\n    }\n  }, {\n    key: \"getScrollLimits\",\n    value: function getScrollLimits() {\n      var menu = this.menu;\n      var _this$options3 = this.options,\n          container = _this$options3.container,\n          pageTopMargin = _this$options3.pageTopMargin;\n      var rect = container.getBoundingClientRect();\n      var targetTop = rect.top + window.scrollY;\n      this.scrollLimits = {\n        menuTop: targetTop - pageTopMargin,\n        menuHeight: Math.round(menu.offsetHeight),\n        viewHeight: document.body.scrollHeight\n      };\n      return this.scrollLimits;\n    }\n  }, {\n    key: \"doesMenuFit\",\n    value: function doesMenuFit() {\n      var _this$scrollLimits = this.scrollLimits,\n          menuHeight = _this$scrollLimits.menuHeight,\n          viewHeight = _this$scrollLimits.viewHeight;\n      return menuHeight <= viewHeight;\n    }\n  }, {\n    key: \"getContainerHeight\",\n    value: function getContainerHeight() {\n      return Math.round(this.options.container.offsetHeight);\n    }\n  }, {\n    key: \"getPageOffsetTop\",\n    value: function getPageOffsetTop() {\n      return this.scrollLimits.menuTop;\n    }\n  }, {\n    key: \"getPageOffsetBottom\",\n    value: function getPageOffsetBottom() {\n      var _this$scrollLimits2 = this.scrollLimits,\n          menuTop = _this$scrollLimits2.menuTop,\n          menuHeight = _this$scrollLimits2.menuHeight;\n      var containerHeight = this.getContainerHeight();\n      return containerHeight + menuTop - menuHeight;\n    } // eslint-disable-next-line consistent-return\n\n  }, {\n    key: \"updateStickyNav\",\n    value: function updateStickyNav() {\n      var menu = this.menu;\n      var _this$options4 = this.options,\n          classFixed = _this$options4.classFixed,\n          classAbs = _this$options4.classAbs;\n      var scrollTop = window.scrollY;\n\n      if (scrollTop > this.getPageOffsetBottom()) {\n        return menu.classList.add(classAbs);\n      }\n\n      if (scrollTop > this.getPageOffsetTop()) {\n        menu.classList.add(classFixed);\n        return menu.classList.remove(classAbs);\n      }\n\n      menu.classList.remove(classFixed);\n      menu.classList.remove(classAbs);\n    }\n  }, {\n    key: \"bindSticky\",\n    value: function bindSticky() {\n      var _this2 = this;\n\n      var throttledUpdateNav = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(function () {\n        _this2.getScrollLimits();\n\n        _this2.updateStickyNav();\n      }, 500);\n      window.addEventListener('scroll', this.updateStickyNav.bind(this));\n      window.addEventListener('resize', throttledUpdateNav);\n      window.addEventListener('load', throttledUpdateNav);\n    }\n  }, {\n    key: \"bindWaypoints\",\n    value: function bindWaypoints() {\n      var _this3 = this;\n\n      var intersectionObserverIsEnabled = 'IntersectionObserver' in window;\n\n      if (intersectionObserverIsEnabled) {\n        var handler = function handler(entries) {\n          // eslint-disable-next-line no-restricted-syntax\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var entry = _step.value;\n\n              if (entry.isIntersecting) {\n                _this3.updateActiveLink(entry.target.id);\n\n                break;\n              }\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n        };\n\n        var observer = new IntersectionObserver(handler, {\n          threshold: 0.8\n        });\n        this.waypoints.forEach(function (waypoint) {\n          return observer.observe(waypoint);\n        });\n      }\n    }\n  }]);\n\n  return Stickly;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stickly);\n\n//# sourceURL=webpack://Stickly/./src/classes/Stickly.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://Stickly/./src/css/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Stickly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Stickly */ \"./src/classes/Stickly.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_classes_Stickly__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Stickly/./src/index.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: isLinkToCurrentPage, throttle, getDomNodeFromHash, updateHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLinkToCurrentPage\", function() { return isLinkToCurrentPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDomNodeFromHash\", function() { return getDomNodeFromHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateHistory\", function() { return updateHistory; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/utils/selectors.js\");\n\nfunction isLinkToCurrentPage(link) {\n  var path = link.pathname.replace(/(^\\/?)/, '/');\n  return link.host === window.location.host && path === window.location.pathname;\n}\nfunction throttle(callback, delay) {\n  var shouldCall = true;\n  return function () {\n    if (shouldCall) {\n      callback();\n      shouldCall = false;\n      setTimeout(function () {\n        shouldCall = true;\n      }, delay);\n    }\n  };\n}\nfunction getDomNodeFromHash(hash) {\n  var decodedHash = decodeURIComponent(hash);\n  var id = decodedHash && decodedHash.slice(1);\n  return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"$id\"])(id);\n}\nfunction updateHistory(hash) {\n  window.history.replaceState({}, document.title, hash);\n}\n\n//# sourceURL=webpack://Stickly/./src/utils/helpers.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: $, $id, $$, isLinkToCurrentPage, throttle, getDomNodeFromHash, updateHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/utils/selectors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__[\"$\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"$id\", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__[\"$id\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__[\"$$\"]; });\n\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/utils/helpers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isLinkToCurrentPage\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"isLinkToCurrentPage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"throttle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getDomNodeFromHash\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"getDomNodeFromHash\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateHistory\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"updateHistory\"]; });\n\n\n\n\n//# sourceURL=webpack://Stickly/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/selectors.js":
/*!********************************!*\
  !*** ./src/utils/selectors.js ***!
  \********************************/
/*! exports provided: $, $id, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$id\", function() { return $id; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\nfunction $(selector) {\n  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return scope.querySelector(selector);\n}\nfunction $id(selector) {\n  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return scope.getElementById(selector);\n}\nfunction $$(selector) {\n  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return Array.from(scope.querySelectorAll(selector));\n}\n\n//# sourceURL=webpack://Stickly/./src/utils/selectors.js?");

/***/ })

/******/ })["default"];
});