/******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  font-size: 14px;\\n  margin: 0;\\n  font-family: 'Raleway', sans-serif;\\n  background: #fffef5;\\n}\\n\\n/*  disable WebKit’s proprietary pseudoelements to\\n    get rid of superfluous padding\\n    https://css-tricks.com/webkit-html5-search-inputs/\\n */\\ninput[type='search']::-webkit-search-decoration,\\ninput[type='search']::-webkit-search-cancel-button,\\ninput[type='search']::-webkit-search-results-button,\\ninput[type='search']::-webkit-search-results-decoration {\\n  display: none;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  list-style-type: none;\\n  display: inline;\\n}\\n\\n#page {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  width: 100vw;\\n}\\n\\n.container,\\n.main-container {\\n  width: 100%;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.main-container {\\n  position: relative;\\n  margin-top: 320px;\\n  flex: 1;\\n}\\n\\n.hidden,\\n.closed-menu {\\n  display: none;\\n}\\n\\nh1,\\nh2,\\nh3 {\\n  font-family: 'Megrim', cursive;\\n}\\n\\nh1 {\\n  letter-spacing: 14px;\\n  font-size: 2em;\\n  padding: 10px 0 30px;\\n}\\n\\nh2,\\nh3 {\\n  letter-spacing: 1px;\\n}\\n\\nh1,\\nnav {\\n  margin: 0;\\n}\\n\\n#empty-library-msg {\\n  text-align: center;\\n  font-family: 'Raleway', sans-serif;\\n  grid-column: 1 / -1;\\n}\\n/* ============= Header ================================== */\\n#header {\\n  text-align: center;\\n  background: #70bf80;\\n  color: #fff;\\n  padding: 30px 0 0;\\n  top: 0;\\n  width: 100%;\\n  position: fixed;\\n  z-index: 1000;\\n\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: auto auto auto;\\n}\\n\\n/* ============= Nav ================================== */\\nnav .container {\\n  position: relative;\\n}\\n\\n#add-book-menu {\\n  background: #e2efd8;\\n}\\n\\n#add-book-menu .container,\\n#sort .container {\\n  display: flex;\\n  justify-content: center;\\n  padding: 5px 0;\\n  align-items: center;\\n  padding: 0 1%;\\n  font-size: 0.875em;\\n}\\n\\n#menu-btn {\\n  font-size: 2.2em;\\n  padding: 5px 0;\\n  margin: 0;\\n}\\n\\n#menu-btn-icon:hover {\\n  color: #3f6c4b;\\n}\\n\\n#menu-btn-icon {\\n  color: #fff;\\n}\\n\\nnav h1,\\nnav ul {\\n  margin: 0;\\n}\\n\\nnav h2,\\n#sort h2 {\\n  color: #222;\\n  margin-right: 10px;\\n}\\n\\n/* ============= Buttons ================================= */\\n#back-to-top-btn {\\n  display: none;\\n  position: fixed;\\n  bottom: 20px;\\n  right: 30px;\\n  z-index: 299;\\n  border: none;\\n  background-color: rgba(11, 77, 80, 0.3);\\n  color: #fff;\\n  padding: 10px;\\n  border-radius: 4px;\\n}\\n\\n#back-to-top-btn:hover {\\n  background-color: rgba(11, 77, 80, 0.6);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  outline: none;\\n  color: #fff;\\n  background: none;\\n  font-size: 1.2em;\\n  padding: 7px;\\n  border: none;\\n}\\n\\n#submit-btn {\\n  display: block;\\n  width: 100%;\\n  background: #127a7f;\\n}\\n\\n#submit-btn,\\n#search-btn {\\n  outline: initial;\\n}\\n\\n#submit-btn:hover,\\n#search-btn:hover {\\n  background: #0b4d50;\\n}\\n\\n.add-to-library-btn {\\n  color: #fff;\\n  background: #1dbdbf;\\n}\\n\\n.add-to-library-btn:hover {\\n  background: #117677;\\n}\\n\\n.add-to-library-btn,\\n.read-btn {\\n  grid-column: 1 / -1;\\n}\\n\\n.read-btn {\\n  width: 100%;\\n  font-size: 1.4em;\\n  background: #1abdbf;\\n  color: #fff;\\n}\\n\\n.read-btn:hover {\\n  background: #15a8ac;\\n}\\n\\n/* read must be after .read-btn */\\n.read {\\n  background: #70bf80;\\n}\\n\\n.read:hover {\\n  background: #6bae7c;\\n}\\n\\n#open-search-modal-btn,\\n#open-form-modal-btn {\\n  margin: 5px 10px;\\n  background: none;\\n  color: #808080;\\n}\\n\\n#close-search-modal-btn,\\n#close-add-own-modal-btn,\\n.del-btn {\\n  position: absolute;\\n  background-color: #b72d3b;\\n  right: 10px;\\n  top: 12px;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n}\\n\\n.del-btn {\\n  right: 5px;\\n  top: 5px;\\n  background-color: rgba(183, 45, 59, 0.6);\\n}\\n\\n#close-search-modal-btn:hover,\\n#close-add-own-modal-btn:hover,\\n.del-btn:hover {\\n  background: #6b1c25;\\n}\\n\\n#sort button,\\n#open-search-modal-btn,\\n#open-form-modal-btn {\\n  background: #eee;\\n  border: 1px solid #b5b9bd;\\n  color: #999ea5;\\n  margin: 5px 10px;\\n}\\n\\n#sort button:hover,\\n#open-search-modal-btn:hover,\\n#open-form-modal-btn:hover {\\n  color: #474c53;\\n}\\n\\n/* ============= Sort  ============================= */\\n#sort {\\n  background: #f7f7e7;\\n  border-bottom: 3px solid #e9e9b7;\\n}\\n\\n/* #sort:hover {\\n  background: #E1E2D7;\\n} */\\n\\n/* ============= Search Modal  ============================= */\\n#overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  z-index: 1001;\\n  background-color: #222;\\n  filter: opacity(0.9);\\n  -webkit-filter: opacity(0.9);\\n}\\n\\n#search-modal,\\n#add-own-book-modal {\\n  width: 96%;\\n  max-width: 1200px;\\n  margin: 100px auto 0;\\n  border: 3px solid #eee;\\n  position: relative;\\n  z-index: 9999;\\n  background: #fff;\\n}\\n\\n#search-modal header {\\n  display: flex;\\n  padding: 20px 0 40px;\\n}\\n\\n#search-modal {\\n}\\n\\n#add-own-book-modal {\\n  /* TODO */\\n}\\n\\n#search-input-container,\\n#add-own-book-form-container {\\n  width: 70%;\\n  max-width: 600px;\\n  margin: 0 auto;\\n  justify-content: center;\\n  align-content: center;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\ninput,\\ntextarea {\\n  /* enable you to style input in safari */\\n  -moz-appearance: none;\\n  -webkit-appearance: none;\\n  font-size: 1em;\\n  padding-left: 5px;\\n  width: 100%;\\n  height: 100%;\\n  border: 0;\\n  height: 30px;\\n  border: 1px solid #eee;\\n}\\n\\n#search-btn {\\n  width: 100%;\\n  background: #3f8dbf;\\n}\\n\\n/* ============= Library and Search Result Entries ========================= */\\n#book-list,\\n#search-results {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-gap: 10px;\\n  margin: 0 2%;\\n}\\n\\n#book-list {\\n  margin-top: 30px;\\n}\\n\\n.entry,\\n.search-result-item {\\n  position: relative;\\n  height: 400px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 3fr 30px;\\n  grid-template-rows: 60px auto auto auto 1fr auto;\\n  grid-row-gap: 10px;\\n  border: 3px solid #7a7f7f;\\n}\\n\\n.entry {\\n  background: #f6f6e4;\\n}\\n\\n.search-result-item {\\n  background: #eee;\\n}\\n\\n.entry:hover,\\n.search-result-item:hover {\\n  box-shadow: 2px 1px 3px #a2a2a2;\\n}\\n\\nh2.entry-title,\\nh2.search-result-title {\\n  background: #7a7f7f;\\n  color: #fff;\\n  text-align: center;\\n  margin: 0;\\n  padding-right: 20px;\\n  font-size: 1.25em;\\n  grid-column: 1 / -1;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nh3.entry-author,\\nh3.search-result-author {\\n  font-size: 1.14em;\\n  padding: 0 10px;\\n  margin: 5px 0;\\n  text-align: right;\\n  grid-column: 1 / -1;\\n}\\n\\nimg.entry-img,\\nimg.search-result-img {\\n  height: auto;\\n  width: 100px;\\n  /* margin: 0 auto; */\\n  grid-row: span 2;\\n  grid-column: 1 / span 2;\\n  justify-self: end;\\n}\\n\\n.entry p,\\n.search-result-item p {\\n  margin: 0;\\n  grid-column: 3 / span 2;\\n}\\n\\np.entry-publish-date,\\np.search-result-publish-date {\\n  align-self: end;\\n}\\n\\np.entry-publish-date,\\np.entry-page-count,\\np.search-result-publish-date,\\np.search-result-page-count {\\n  justify-self: center;\\n}\\n\\np.entry-description,\\np.search-result-description {\\n  padding: 0 10px;\\n  line-height: 1.4em;\\n  overflow-y: scroll;\\n  grid-column: 1 / -1;\\n}\\n\\nfooter {\\n  padding: 40px 0;\\n  margin-top: 100px;\\n  text-align: center;\\n  color: #fff;\\n  background: #1bbdbf;\\n  font-size: 14px;\\n  width: 100%;\\n}\\n\\nfooter a {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n\\nfooter a:hover {\\n  color: #2b4b81;\\n  font-weight: bold;\\n}\\n\\n/* ============================================================================\\n                                MEDIA QUERIES\\n ============================================================================ */\\n@media screen and (min-width: 578px) {\\n  nav .container {\\n    font-size: 1em;\\n  }\\n\\n  img.entry-img,\\n  img.search-result-img {\\n    width: 70px;\\n  }\\n\\n  #search-input-container {\\n    grid-template-columns: 1fr 17%;\\n    grid-template-rows: 1fr;\\n  }\\n\\n  #search-btn {\\n    height: 30px;\\n    padding: 0;\\n  }\\n\\n  #book-list,\\n  #search-results {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\\n@media screen and (min-width: 768px) {\\n  #book-list,\\n  #search-results {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n\\n@media screen and (min-width: 1000px) {\\n  #book-list,\\n  #search-results {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n    margin: 0;\\n  }\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Book/Book.js":
/*!**************************!*\
  !*** ./src/Book/Book.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Book {\n  constructor(\n    title,\n    authors,\n    publishedDate,\n    description,\n    imgUrl,\n    pageCount,\n    id,\n    hasRead\n  ) {\n    this.title = title;\n    this.authors = authors;\n    this.publishedDate = publishedDate;\n    this.description = description;\n    this.imgUrl = imgUrl;\n    this.pageCount = pageCount;\n    this.id = id;\n    this.hasRead = hasRead;\n    debugger;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n\n//# sourceURL=webpack:///./src/Book/Book.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book/Book */ \"./src/Book/Book.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst book = new _Book_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('The Hobbit', 'JRR Tolkien');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ })

/******/ });