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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/CustomForm/CustomForm.styles.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/CustomForm/CustomForm.styles.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".custom-form__section {\\n  margin: 10px 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/CustomForm/CustomForm.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Form/Form.styles.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Form/Form.styles.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".form__submit-btn {\\n  width: 100%;\\n  padding: 5px;\\n  background: #15a8ac;\\n  color: white;\\n  font-weight: bold;\\n  border: 1px solid #15a8ac;\\n  font-size: 1em;\\n  text-transform: uppercase;\\n  letter-spacing: 1px; }\\n  .form__submit-btn:hover {\\n    background: #108083; }\\n\\n.form__input {\\n  width: 100%;\\n  border: 1px solid #7a7f7f;\\n  padding: 5px;\\n  font-size: 1em; }\\n\\n.form__error-msg {\\n  color: red;\\n  text-align: center;\\n  margin: 10px 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/Form/Form.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Modal/Modal.styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Modal/Modal.styles.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".modal {\\n  position: absolute;\\n  top: 0;\\n  z-index: 1001;\\n  background: rgba(0, 0, 0, 0.8);\\n  border: none;\\n  min-height: 100vh;\\n  min-width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n  .modal * {\\n    transition: all 400ms ease; }\\n  .modal .modal__content-container {\\n    position: relative;\\n    background: white;\\n    padding: 40px;\\n    width: 90%;\\n    max-width: 600px; }\\n  .modal .js-modal__close-btn {\\n    background-color: #b72d3b; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/Modal/Modal.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SearchForm/SearchForm.styles.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SearchForm/SearchForm.styles.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".search-form input {\\n  margin: 10px 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/SearchForm/SearchForm.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/View/View.styles.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/View/View.styles.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".empty-msg {\\n  font-size: 1.6em;\\n  align-self: center; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/View/View.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewBook/ViewBook.styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewBook/ViewBook.styles.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".book {\\n  position: relative;\\n  border: 5px solid #1abdbf;\\n  background: #f6f6e4;\\n  max-width: 350px;\\n  height: 400px;\\n  margin: 3% 1%;\\n  overflow: hidden;\\n  display: grid;\\n  grid-template-columns: repeat(2, 50%);\\n  grid-template-rows: 60px auto 50px 60px auto;\\n  grid-template-areas: 'title title' 'author author' 'img published' 'img pages' 'description description'; }\\n  .book * {\\n    transition: all 400ms ease; }\\n  .book:hover {\\n    box-shadow: 2px 1px 3px #a2a2a2; }\\n  .book .js-book__delete-btn {\\n    opacity: 0;\\n    background-color: rgba(183, 54, 45, 0.7); }\\n  .book:hover .js-book__delete-btn {\\n    opacity: 1; }\\n  .book .js-book__has-read-btn {\\n    opacity: 0;\\n    position: absolute;\\n    bottom: 0;\\n    border: none;\\n    width: 100%;\\n    padding: 10px 0;\\n    height: 40px;\\n    font-size: 1.4em;\\n    background: #1abdbf;\\n    color: #fff;\\n    grid-area: read; }\\n  .book:hover .js-book__has-read-btn {\\n    opacity: 1;\\n    background-color: rgba(1, 181, 186, 0.7); }\\n    .book:hover .js-book__has-read-btn:hover {\\n      background: #15a8ac; }\\n  .book:hover .js-book__has-read-btn.read {\\n    background-color: rgba(112, 191, 128, 0.8); }\\n  .book .js-book__has-read-btn.read {\\n    background: #70bf80; }\\n    .book .js-book__has-read-btn.read:hover {\\n      background: #6bae7c; }\\n\\n.book__title {\\n  background: #7a7f7f;\\n  border: none;\\n  color: #fff;\\n  font-size: 1.25em;\\n  height: 60px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  grid-area: title; }\\n\\n.book__author {\\n  padding: 2%;\\n  font-size: 1.14em;\\n  text-align: right;\\n  grid-area: author; }\\n\\n.book__img {\\n  max-height: 100px;\\n  height: auto;\\n  width: auto;\\n  grid-area: img;\\n  justify-self: center;\\n  align-self: center; }\\n\\n.book__published-date {\\n  margin: 2% 0;\\n  grid-area: published;\\n  align-self: end; }\\n\\n.book__page-count {\\n  grid-area: pages; }\\n\\n.book__description {\\n  padding: 0 3% 10%;\\n  font-size: 1.2em;\\n  line-height: 1.4em;\\n  grid-area: description;\\n  overflow-y: scroll; }\\n\\n.scroll-Y {\\n  overflow-y: scroll; }\\n\\n.read-border {\\n  border: 5px solid #70bf80; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/ViewBook/ViewBook.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewSearchResults/ViewSearchResults.styles.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewSearchResults/ViewSearchResults.styles.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#modal__results-content {\\n  width: 100%;\\n  max-width: 1200px;\\n  min-height: 80vh;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center; }\\n\\n#modal__results-content .book {\\n  grid-template-rows: 60px auto 50px 60px auto 40px;\\n  grid-template-areas: 'title title' 'author author' 'img published' 'img pages' 'description description' 'addBtn addBtn';\\n  background: #eee;\\n  border: 2px solid #7a7f7f; }\\n\\n.js-book__add-to-library-btn {\\n  grid-area: addBtn;\\n  background: #1dbdbf;\\n  border: 0;\\n  color: white;\\n  font-size: 1.4em; }\\n  .js-book__add-to-library-btn:hover {\\n    background: #117677; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/ViewSearchResults/ViewSearchResults.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewUserLibrary/ViewUserLibrary.styles.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewUserLibrary/ViewUserLibrary.styles.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".book-list {\\n  margin-top: 160px;\\n  width: 100%;\\n  max-width: 1200px;\\n  flex: 1;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/ViewUserLibrary/ViewUserLibrary.styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  font-family: sans-serif;\\n  font-size: 14px;\\n  margin: 0;\\n  font-family: 'Raleway', sans-serif;\\n  background: #fffef5;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  min-height: 100vh;\\n  width: 100vw; }\\n\\nh1,\\nh2,\\nh3 {\\n  font-family: 'Megrim', cursive; }\\n\\nh1 {\\n  letter-spacing: 14px;\\n  font-size: 2em;\\n  padding: 10px 0 30px; }\\n\\nh2,\\nh3 {\\n  letter-spacing: 1px; }\\n\\nbutton {\\n  cursor: pointer;\\n  font-family: inherit; }\\n\\nheader {\\n  background: #70bf80;\\n  color: #fff;\\n  width: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 1000;\\n  text-align: center;\\n  padding-bottom: 10px; }\\n\\n.menu-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.menu-btns-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n  .menu-btns-container button {\\n    font-family: inherit;\\n    font-size: 0.9em;\\n    background: #eee;\\n    border: 1px solid #b5b9bd;\\n    color: #999ea5;\\n    margin: 5px;\\n    padding: 5px;\\n    transition: all 400ms ease; }\\n    .menu-btns-container button:hover {\\n      color: #474c53; }\\n\\n.close-btn {\\n  position: absolute;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  border: none;\\n  color: white;\\n  font-size: 1.2em;\\n  font-weight: bold;\\n  top: 10px;\\n  right: 10px; }\\n  .close-btn:hover {\\n    background-color: #7b1e28; }\\n\\nfooter {\\n  padding: 40px 0;\\n  background: #1bbdbf;\\n  color: white;\\n  width: 100%;\\n  text-align: center; }\\n  footer a {\\n    color: white;\\n    font-weight: bold; }\\n    footer a:hover {\\n      color: #0f6e6f; }\\n\\n@media screen and (min-width: 769px) {\\n  .book {\\n    width: 350px; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utils/spinner.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utils/spinner.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Credit: https://mdjunaidalam5.github.io/SpinBolt/ */\\n.sbl-circ {\\n  height: 48px;\\n  width: 48px;\\n  color: #5a5a5a;\\n  position: relative;\\n  display: inline-block;\\n  border: 5px solid;\\n  border-radius: 50%;\\n  border-top-color: transparent;\\n  animation: rotate 1s linear infinite; }\\n\\n@keyframes rotate {\\n  0% {\\n    transform: rotate(0); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/utils/spinner.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n\n\nclass Book {\n  constructor(\n    title,\n    authors,\n    publishedDate,\n    description,\n    imgUrl,\n    pages,\n    hasRead\n  ) {\n    let published = '';\n\n    if (publishedDate) {\n      published = String(publishedDate).includes('-')\n        ? new Date(publishedDate).getFullYear()\n        : publishedDate;\n    }\n\n    this.title = title || '[unavailable]';\n    this.authors = authors || '[unavailable]';\n    this.publishedDate = published || '[unavailable]';\n    this.description = description || '[unavailable]';\n    this.imgUrl = imgUrl || './img/none.jpg';\n    this.pages = pages || '[unavailable]';\n    this.id = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(title);\n    this.hasRead = hasRead || false;\n  }\n\n  toggleReadStatus(book) {\n    return !book.hasRead;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n\n//# sourceURL=webpack:///./src/Book/Book.js?");

/***/ }),

/***/ "./src/CustomForm/CustomForm.js":
/*!**************************************!*\
  !*** ./src/CustomForm/CustomForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/Form */ \"./src/Form/Form.js\");\n/* harmony import */ var _Book_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Book/Book */ \"./src/Book/Book.js\");\n/* harmony import */ var _CustomForm_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomForm.styles.scss */ \"./src/CustomForm/CustomForm.styles.scss\");\n/* harmony import */ var _CustomForm_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomForm_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass CustomForm extends _Form_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(parentId) {\n    super(parentId);\n    this.inputs = [];\n    this.init();\n    this.formClasses = ['custom-form'];\n  }\n\n  init() {\n    const sections = [\n      this.addInputEntry(\n        'title',\n        '',\n        'Title',\n        'text',\n        'custom-form__title',\n        'Add Title',\n        true,\n        true\n      ),\n      this.addInputEntry(\n        'authors',\n        '',\n        'Author(s)',\n        'text',\n        'custom-form__author',\n        'Separate multiple authors with comma',\n        true\n      ),\n      this.addInputEntry(\n        'pages',\n        '',\n        'Page Count',\n        'number',\n        'custom-form__pages',\n        'Add Page Count',\n        false\n      ),\n      this.addInputEntry(\n        'publishedDate',\n        '',\n        'Year Published',\n        'number',\n        'custom-form__publish-date',\n        'Add Year Published',\n        false\n      ),\n      this.addInputEntry(\n        'image',\n        '',\n        'Image URL',\n        'text',\n        'custom-form__image',\n        'Add Custom Image URL',\n        false\n      ),\n      this.addInputEntry(\n        'description',\n        '',\n        'Description',\n        'text',\n        'custom-form__description',\n        'Add Short Description',\n        false\n      )\n    ];\n    sections.map(section => this.createSection(section));\n    this.inputs = sections.map((section, i) => section[1]);\n\n    this.storeElement(\n      this.button(['form__submit-btn'], 'custom-submit-btn', 'Submit')\n    );\n  }\n\n  addInputEntry(\n    forName,\n    labelId,\n    labelText,\n    inputType,\n    inputId,\n    inputPlaceholder,\n    InputRequired,\n    InputAutofocus\n  ) {\n    return [\n      this.label(forName, ['custom-label'], labelId, labelText),\n      this.input(\n        inputType,\n        forName,\n        ['form__input', 'custom-form__field'],\n        inputId,\n        inputPlaceholder,\n        InputRequired,\n        InputAutofocus\n      )\n    ];\n  }\n\n  createSection(args) {\n    const div = this.createViewElement('div', ['custom-form__section']);\n    args.map(e => div.appendChild(e));\n    this.storeElement(div);\n  }\n\n  handleSubmit(books) {\n    const info = {};\n\n    // set up input values to match Book format\n    this.inputs.map(input => {\n      let { name, value } = input;\n      if (name === 'authors') {\n        value = value.split(',');\n      }\n      return (info[name] = value);\n    });\n\n    // destructure info\n    const {\n      title,\n      authors,\n      publishedDate,\n      description,\n      imgUrl,\n      pageCount\n    } = info;\n\n    // these fields are required\n    if (!title && authors.length === 0) return 'error';\n\n    let published = publishedDate ? '1-1-' + publishedDate : '';\n    return new _Book_Book__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      title,\n      authors,\n      publishedDate,\n      description,\n      imgUrl,\n      pageCount\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomForm);\n\n\n//# sourceURL=webpack:///./src/CustomForm/CustomForm.js?");

/***/ }),

/***/ "./src/CustomForm/CustomForm.styles.scss":
/*!***********************************************!*\
  !*** ./src/CustomForm/CustomForm.styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./CustomForm.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/CustomForm/CustomForm.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/CustomForm/CustomForm.styles.scss?");

/***/ }),

/***/ "./src/Form/Form.js":
/*!**************************!*\
  !*** ./src/Form/Form.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/View */ \"./src/View/View.js\");\n/* harmony import */ var _Form_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.styles.scss */ \"./src/Form/Form.styles.scss\");\n/* harmony import */ var _Form_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Form_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Form extends _View_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(containerId) {\n    super(containerId);\n    this.elements = [];\n    this.formClasses = [];\n  }\n\n  input(type, name, classes, id, placeholder, required, autofocus) {\n    const i = this.createViewElement('input', classes, id);\n    i.type = type;\n    i.name = name;\n    i.placeholder = placeholder;\n    i.required = required;\n    i.autofocus = autofocus;\n    return i;\n  }\n\n  button(classes, id, text) {\n    const b = this.createViewElement('button', classes, id, text);\n    return b;\n  }\n\n  label(forName, classes, id, text) {\n    const l = this.createViewElement('label', classes, id, text);\n    l.setAttribute('for', forName);\n    return l;\n  }\n\n  storeElement(element) {\n    this.elements = [...this.elements, element];\n  }\n\n  error(text) {\n    const e = this.createViewElement('p', ['form__error-msg'], '', text);\n    this.containerId.appendChild(e);\n    setTimeout(() => {\n      e.remove();\n    }, 2000);\n  }\n\n  render() {\n    const form = this.createViewElement('form', this.formClasses);\n\n    this.elements.map(element => form.appendChild(element));\n    this.containerId.appendChild(form);\n    // prevent query from showing in URL\n    form.addEventListener('submit', () => false);\n    // make sure input gets focus every time the form is rendered\n    form.getElementsByTagName('input')[0].focus();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n\n//# sourceURL=webpack:///./src/Form/Form.js?");

/***/ }),

/***/ "./src/Form/Form.styles.scss":
/*!***********************************!*\
  !*** ./src/Form/Form.styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Form.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Form/Form.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Form/Form.styles.scss?");

/***/ }),

/***/ "./src/Library/Library.js":
/*!********************************!*\
  !*** ./src/Library/Library.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Book/Book */ \"./src/Book/Book.js\");\n\n\nclass Library {\n  constructor(books = []) {\n    this.books = [...books];\n  }\n\n  add(book) {\n    this.books = [...this.books, book];\n  }\n\n  remove(bookToRemove) {\n    this.books = this.books.filter(book => book.id !== bookToRemove);\n  }\n\n  update(books) {\n    this.books = [...books];\n  }\n\n  createBooksFromObjects(books) {\n    return books.map(\n      b =>\n        new _Book_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n          b.title,\n          b.authors,\n          b.publishedDate,\n          b.description,\n          b.imgUrl,\n          b.pages,\n          b.hasRead\n        )\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Library);\n\n\n//# sourceURL=webpack:///./src/Library/Library.js?");

/***/ }),

/***/ "./src/Modal/Modal.js":
/*!****************************!*\
  !*** ./src/Modal/Modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/View */ \"./src/View/View.js\");\n/* harmony import */ var _Modal_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.styles.scss */ \"./src/Modal/Modal.styles.scss\");\n/* harmony import */ var _Modal_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modal_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Modal extends _View_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(modalType) {\n    super();\n    this.containerId = '';\n    this.modalId = `${modalType}-modal`;\n    this.contentContainer = this.createViewElement(\n      'div',\n      ['modal__content-container'],\n      `modal__${modalType}-content`\n    );\n    this.render();\n  }\n\n  // remove the modal from the DOM\n  remove() {\n    this.containerId.parentNode.removeChild(this.containerId);\n  }\n\n  hide() {\n    this.containerId.style.display = 'none';\n  }\n\n  createCloseBtn(parent) {\n    const closeBtn = this.createViewElement(\n      'button',\n      ['js-modal__close-btn', 'close-btn'],\n      '',\n      'X'\n    );\n    parent.appendChild(closeBtn);\n  }\n\n  render() {\n    const body = document.querySelector('body');\n\n    this.containerId = this.createViewElement('div', ['modal'], this.modalId);\n\n    body.appendChild(this.containerId);\n\n    this.containerId.appendChild(this.contentContainer);\n\n    this.createCloseBtn(this.contentContainer);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n\n//# sourceURL=webpack:///./src/Modal/Modal.js?");

/***/ }),

/***/ "./src/Modal/Modal.styles.scss":
/*!*************************************!*\
  !*** ./src/Modal/Modal.styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Modal.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Modal/Modal.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Modal/Modal.styles.scss?");

/***/ }),

/***/ "./src/Search/Search.js":
/*!******************************!*\
  !*** ./src/Search/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Book/Book */ \"./src/Book/Book.js\");\n/* harmony import */ var _Library_Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Library/Library */ \"./src/Library/Library.js\");\n/* harmony import */ var _ViewSearchResults_ViewSearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ViewSearchResults/ViewSearchResults */ \"./src/ViewSearchResults/ViewSearchResults.js\");\n\n\n\n\nclass Search {\n  constructor(containerId, searchValue) {\n    this.searchValue = searchValue;\n    this.results = new _Library_Library__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.view = new _ViewSearchResults_ViewSearchResults__WEBPACK_IMPORTED_MODULE_2__[\"default\"](containerId, this.results);\n  }\n\n  run() {\n    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';\n    let books = [];\n    this.view.toggleLoading();\n    fetch(`${API_URL}${this.searchValue}`)\n      .then(response => response.json())\n      .then(response => {\n        books = response.items.map(item => {\n          const book = new _Book_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n            item.volumeInfo.title,\n            item.volumeInfo.authors,\n            item.volumeInfo.publishedDate,\n            item.volumeInfo.description,\n            item.volumeInfo.imageLinks.thumbnail,\n            item.volumeInfo.pageCount\n          );\n          this.results.add(book);\n        });\n        this.view.toggleLoading();\n        this.view.render(this.results.books, true);\n      })\n      .catch(error => {\n        this.view.emptyMsg('Something went wrong');\n      });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n\n//# sourceURL=webpack:///./src/Search/Search.js?");

/***/ }),

/***/ "./src/SearchForm/SearchForm.js":
/*!**************************************!*\
  !*** ./src/SearchForm/SearchForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/Form */ \"./src/Form/Form.js\");\n/* harmony import */ var _SearchForm_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchForm.styles.scss */ \"./src/SearchForm/SearchForm.styles.scss\");\n/* harmony import */ var _SearchForm_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass SearchForm extends _Form_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(containerId) {\n    super(containerId);\n    this.init();\n    this.searchValue = '';\n    this.formClasses = ['search-form'];\n  }\n\n  init() {\n    // create an input\n    const input = this.input(\n      'search',\n      'search',\n      ['form__input'],\n      'book-search',\n      'Enter a book title or author',\n      true,\n      true\n    );\n\n    // create a search/submit button\n    const btn = this.button(['form__submit-btn'], 'search-btn', 'Search');\n\n    [input, btn].map(e => this.storeElement(e));\n  }\n\n  getSearchValue() {\n    return document.getElementById('book-search').value;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\n\n\n//# sourceURL=webpack:///./src/SearchForm/SearchForm.js?");

/***/ }),

/***/ "./src/SearchForm/SearchForm.styles.scss":
/*!***********************************************!*\
  !*** ./src/SearchForm/SearchForm.styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SearchForm.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SearchForm/SearchForm.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/SearchForm/SearchForm.styles.scss?");

/***/ }),

/***/ "./src/UserLibrary/UserLibrary.js":
/*!****************************************!*\
  !*** ./src/UserLibrary/UserLibrary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Library_Library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/Library */ \"./src/Library/Library.js\");\n/* harmony import */ var _ViewUserLibrary_ViewUserLibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewUserLibrary/ViewUserLibrary */ \"./src/ViewUserLibrary/ViewUserLibrary.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.js\");\n/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sort */ \"./src/utils/sort.js\");\n\n\n\n\n\nclass UserLibrary extends _Library_Library__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(books) {\n    super(books);\n    this.update(this.createBooksFromObjects(books));\n    this.view = new _ViewUserLibrary_ViewUserLibrary__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('js-user-library');\n    this.view.render(this.books, false);\n  }\n\n  createSortId() {}\n\n  updateReadView(target) {\n    const isRead = target.classList.contains('read');\n    target.innerText = isRead ? 'Not Read' : 'Read';\n    isRead ? target.classList.remove('read') : target.classList.add('read');\n    isRead\n      ? target.parentNode.classList.remove('read-border')\n      : target.parentNode.classList.add('read-border');\n  }\n\n  handleReadStatus(target, books) {\n    for (let book of books) {\n      if (book.id === target.parentNode.id) {\n        book.hasRead = book.toggleReadStatus(book);\n        this.updateReadView(target);\n        break;\n      }\n    }\n    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_2__[\"updateLocalStorage\"])(books);\n  }\n\n  handleSort(id) {\n    this.sort(id, this.books);\n    this.view.updateView(this.books);\n  }\n\n  handleRemove(id) {\n    this.remove(id);\n    this.view.updateView(this.books);\n  }\n\n  handleAddBookFromSearch(books, bookId) {\n    const book = this.findBook(books, bookId);\n    this.add(book[0]);\n    this.view.updateView(this.books);\n  }\n\n  addBookFromCustom(book) {\n    this.add(book);\n    this.view.updateView(this.books);\n  }\n\n  findBook(books, idToFind) {\n    return books.filter(book => book.id === idToFind);\n  }\n\n  sort(id, books) {\n    // ex: id = 'sort-by-authors', sortType = 'authors'\n    const type = id.slice(id.lastIndexOf('-') + 1);\n    if (type === 'title' || type === 'authors')\n      books = _utils_sort__WEBPACK_IMPORTED_MODULE_3__[\"default\"].strings(type, books);\n\n    if (type === 'pages') books = _utils_sort__WEBPACK_IMPORTED_MODULE_3__[\"default\"].byPages(type, books);\n\n    this.update(books);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserLibrary);\n\n\n//# sourceURL=webpack:///./src/UserLibrary/UserLibrary.js?");

/***/ }),

/***/ "./src/View/View.js":
/*!**************************!*\
  !*** ./src/View/View.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.styles.scss */ \"./src/View/View.styles.scss\");\n/* harmony import */ var _View_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_View_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass View {\n  constructor(containerId) {\n    this.containerId = document.getElementById(containerId);\n  }\n\n  createViewElement(type, classes, id, content) {\n    let elem = document.createElement(type);\n    if (classes) classes.map(className => elem.classList.add(className));\n    if (id) elem.id = id;\n    if (content) {\n      type === 'img' ? (elem.src = content) : (elem.innerText = content);\n    }\n    return elem;\n  }\n\n  getElement(id) {\n    return document.getElementById(id);\n  }\n\n  clearView(containerId) {\n    while (containerId.hasChildNodes()) {\n      containerId.removeChild(containerId.lastChild);\n    }\n  }\n\n  emptyMsg(content) {\n    const emptyMsg = this.createViewElement('p', ['empty-msg'], '', content);\n    this.containerId.appendChild(emptyMsg);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./src/View/View.js?");

/***/ }),

/***/ "./src/View/View.styles.scss":
/*!***********************************!*\
  !*** ./src/View/View.styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./View.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/View/View.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/View/View.styles.scss?");

/***/ }),

/***/ "./src/ViewBook/ViewBook.js":
/*!**********************************!*\
  !*** ./src/ViewBook/ViewBook.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/View */ \"./src/View/View.js\");\n/* harmony import */ var _ViewBook_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewBook.styles.scss */ \"./src/ViewBook/ViewBook.styles.scss\");\n/* harmony import */ var _ViewBook_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ViewBook_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass ViewBook extends _View_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(isSearchResult) {\n    super();\n\n    this.isSearchResult = isSearchResult;\n  }\n\n  createBookView(book) {\n    let bookClasses = ['book'];\n    if (book.hasOwnProperty('hasRead') && book.hasRead) {\n      bookClasses = [...bookClasses, 'read-border'];\n    }\n    const container = this.createViewElement('div', bookClasses, book.id);\n\n    const sub = book.title.substring(0, 32);\n    const isTruncated = sub.length < book.title.length;\n    const title = isTruncated ? sub + '...' : sub;\n    let values = [\n      this.createViewElement('h2', ['book__title'], '', title),\n      this.createViewElement(\n        'h3',\n        ['book__author'],\n        '',\n        `by ${book.authors.join(', ')}`\n      ),\n      this.createViewElement('img', ['book__img'], '', book.imgUrl),\n      this.createViewElement(\n        'p',\n        ['book__published-date'],\n        '',\n        `Published: ${book.publishedDate}`\n      ),\n      this.createViewElement(\n        'p',\n        ['book__page-count'],\n        '',\n        `${book.pages} pages`\n      ),\n      this.createViewElement('p', ['book__description'], '', book.description)\n    ];\n\n    /// add 'close' and 'read/not read' buttons for books in user's library only\n    if (!this.isSearchResult) {\n      let btnClasses = ['js-book__has-read-btn'];\n      if (book.hasRead) btnClasses = [...btnClasses, 'read'];\n      values = [\n        ...values,\n        this.createViewElement(\n          'button',\n          btnClasses,\n          '',\n          book.hasRead ? 'Read' : 'Not Read'\n        ),\n        this.createViewElement(\n          'button',\n          ['js-book__delete-btn', 'close-btn'],\n          '',\n          'X'\n        )\n      ];\n    } else {\n      values = [\n        ...values,\n        this.createViewElement(\n          'button',\n          ['js-book__add-to-library-btn'],\n          book.id,\n          'Add to Library'\n        )\n      ];\n    }\n\n    values.map(value => container.appendChild(value));\n    return container;\n  }\n\n  render() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewBook);\n\n\n//# sourceURL=webpack:///./src/ViewBook/ViewBook.js?");

/***/ }),

/***/ "./src/ViewBook/ViewBook.styles.scss":
/*!*******************************************!*\
  !*** ./src/ViewBook/ViewBook.styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ViewBook.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewBook/ViewBook.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/ViewBook/ViewBook.styles.scss?");

/***/ }),

/***/ "./src/ViewLibrary/ViewLibrary.js":
/*!****************************************!*\
  !*** ./src/ViewLibrary/ViewLibrary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/View */ \"./src/View/View.js\");\n/* harmony import */ var _ViewBook_ViewBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewBook/ViewBook */ \"./src/ViewBook/ViewBook.js\");\n\n\n\nclass ViewLibrary extends _View_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(containerId) {\n    super(containerId);\n    this.msg = 'Your library is empty!';\n  }\n\n  updateView(books) {\n    this.clearView(this.containerId);\n    this.render(books);\n  }\n\n  render(books, isSearchResult) {\n    if (books.length === 0) {\n      this.emptyMsg(this.msg);\n    } else {\n      books.map(book => {\n        const view = new _ViewBook_ViewBook__WEBPACK_IMPORTED_MODULE_1__[\"default\"](isSearchResult);\n        const b = view.createBookView(book);\n        this.containerId.appendChild(b);\n      });\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewLibrary);\n\n\n//# sourceURL=webpack:///./src/ViewLibrary/ViewLibrary.js?");

/***/ }),

/***/ "./src/ViewSearchResults/ViewSearchResults.js":
/*!****************************************************!*\
  !*** ./src/ViewSearchResults/ViewSearchResults.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewLibrary_ViewLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ViewLibrary/ViewLibrary */ \"./src/ViewLibrary/ViewLibrary.js\");\n/* harmony import */ var _ViewSearchResults_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewSearchResults.styles.scss */ \"./src/ViewSearchResults/ViewSearchResults.styles.scss\");\n/* harmony import */ var _ViewSearchResults_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ViewSearchResults_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_spinner_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/spinner.scss */ \"./src/utils/spinner.scss\");\n/* harmony import */ var _utils_spinner_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_spinner_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass ViewSearchResults extends _ViewLibrary_ViewLibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(containerId, results) {\n    super(containerId);\n    this.msg = 'No matches';\n    this.spinner = this.createViewElement('div', ['loader', 'sbl-circ']);\n  }\n\n  toggleLoading() {\n    this.containerId.contains(this.spinner)\n      ? this.spinner.remove()\n      : this.containerId.appendChild(this.spinner);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewSearchResults);\n\n\n//# sourceURL=webpack:///./src/ViewSearchResults/ViewSearchResults.js?");

/***/ }),

/***/ "./src/ViewSearchResults/ViewSearchResults.styles.scss":
/*!*************************************************************!*\
  !*** ./src/ViewSearchResults/ViewSearchResults.styles.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ViewSearchResults.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewSearchResults/ViewSearchResults.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/ViewSearchResults/ViewSearchResults.styles.scss?");

/***/ }),

/***/ "./src/ViewUserLibrary/ViewUserLibrary.js":
/*!************************************************!*\
  !*** ./src/ViewUserLibrary/ViewUserLibrary.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewLibrary_ViewLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ViewLibrary/ViewLibrary */ \"./src/ViewLibrary/ViewLibrary.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.js\");\n/* harmony import */ var _ViewUserLibrary_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewUserLibrary.styles.scss */ \"./src/ViewUserLibrary/ViewUserLibrary.styles.scss\");\n/* harmony import */ var _ViewUserLibrary_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ViewUserLibrary_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass ViewUserLibrary extends _ViewLibrary_ViewLibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(containerId) {\n    super(containerId);\n  }\n\n  updateView(books) {\n    _ViewLibrary_ViewLibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.updateView.call(this, books);\n    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"updateLocalStorage\"])(books);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewUserLibrary);\n\n\n//# sourceURL=webpack:///./src/ViewUserLibrary/ViewUserLibrary.js?");

/***/ }),

/***/ "./src/ViewUserLibrary/ViewUserLibrary.styles.scss":
/*!*********************************************************!*\
  !*** ./src/ViewUserLibrary/ViewUserLibrary.styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ViewUserLibrary.styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ViewUserLibrary/ViewUserLibrary.styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/ViewUserLibrary/ViewUserLibrary.styles.scss?");

/***/ }),

/***/ "./src/assets/sample_data.js":
/*!***********************************!*\
  !*** ./src/assets/sample_data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Book/Book */ \"./src/Book/Book.js\");\n\n\nconst sampleData = [\n  {\n    title: 'The Hobbit',\n    authors: ['J.R.R. Tolkien'],\n    publishedDate: '1982',\n    description: `\n      Chronicles the adventures of the inhabitants of Middle-earth and Bilbo Baggins, the hobbit who brought home to The Shire the One Ring of Power\n    `,\n    imgUrl:\n      'https://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',\n    pages: 300,\n    hasRead: true\n  },\n  {\n    title: 'The Fellowship of the Ring',\n    authors: ['J.R.R. Tolkien'],\n    publishedDate: '',\n    description: `\n      [unavailable]\n    `,\n    imgUrl: '',\n    pages: 492,\n    hasRead: false\n  },\n  {\n    title: 'A Game of Thrones 4-Book Bundle',\n    authors: ['George R. R. Martin'],\n    publishedDate: '2011-03-22',\n    description: `\n     George R. R. Martin's A Song of Ice and Fire series has become, in many ways, the gold standard for modern epic fantasy. Martin—dubbed the \\\"American Tolkien\\\" by Time magazine—has created a world that is as rich and vital as any piece of historical fiction, set in an age of knights and chivalry and filled with a plethora of fascinating, multidimensional characters that you love, hate to love, or love to hate as they struggle for control of a divided kingdom. It is this very vitality that has led it to be adapted as the HBO miniseries “Game of Thrones.” This bundle includes the following novels: A GAME OF THRONES A CLASH OF KINGS A STORM OF SWORDS A FEAST FOR CROWS\n    `,\n    imgUrl:\n      'https://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',\n    pages: 3264,\n    hasRead: false\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sampleData);\n\n\n//# sourceURL=webpack:///./src/assets/sample_data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserLibrary_UserLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLibrary/UserLibrary */ \"./src/UserLibrary/UserLibrary.js\");\n/* harmony import */ var _utils_handleClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/handleClick */ \"./src/utils/handleClick.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/storage */ \"./src/utils/storage.js\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n(function() {\n  let library = new _UserLibrary_UserLibrary__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Object(_utils_storage__WEBPACK_IMPORTED_MODULE_2__[\"checkStorage\"])());\n\n  let searchQuery = '';\n\n  document.addEventListener(\n    'click',\n    e => Object(_utils_handleClick__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, library, searchQuery),\n    false\n  );\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ "./src/utils/handleClick.js":
/*!**********************************!*\
  !*** ./src/utils/handleClick.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Search/Search */ \"./src/Search/Search.js\");\n/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal/Modal */ \"./src/Modal/Modal.js\");\n/* harmony import */ var _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchForm/SearchForm */ \"./src/SearchForm/SearchForm.js\");\n/* harmony import */ var _CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomForm/CustomForm */ \"./src/CustomForm/CustomForm.js\");\n\n\n\n\n\nlet modal;\nlet searchResults;\nlet form;\nfunction handleClick(e, library, searchQuery) {\n  const target = e.target;\n  let id = target.id;\n  // if (id == 'custom-submit-btn') debugger;\n  if (target.classList.contains('js-book__has-read-btn')) {\n    library.handleReadStatus(target, library.books);\n  } else if (target.classList.contains('js-open-modal-btn')) {\n    modal = new _Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id);\n\n    if (id === 'js-search') {\n      id = 'search';\n      form = new _SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"](modal.contentContainer.id);\n    }\n\n    if (id === 'js-custom') {\n      id = 'custom';\n      form = new _CustomForm_CustomForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"](modal.contentContainer.id);\n    }\n\n    form.render();\n  } else if (target.classList.contains('js-modal__close-btn')) {\n    modal.remove();\n    modal = undefined;\n  } else if (target.classList.contains('js-sort-btn')) {\n    library.handleSort(id);\n  } else if (target.classList.contains('js-book__delete-btn')) {\n    library.handleRemove(target.parentNode.id);\n  } else if (id === 'search-btn') {\n    searchQuery = form.getSearchValue();\n    if (!searchQuery.trim()) {\n      form.error('Cannot be blank');\n    } else {\n      modal.remove();\n      modal = new _Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('results');\n\n      searchResults = new _Search_Search__WEBPACK_IMPORTED_MODULE_0__[\"default\"](modal.contentContainer.id, searchQuery);\n\n      searchResults.run();\n    }\n  } else if (target.classList.contains('js-book__add-to-library-btn')) {\n    // add book to user's library by grabbing matching id from results and re-render\n    library.handleAddBookFromSearch(\n      searchResults.results.books,\n      target.parentNode.id\n    );\n    // close modal\n    modal.remove();\n    modal = undefined;\n  } else if (id === 'custom-submit-btn') {\n    let book = form.handleSubmit(library.books);\n    if (book === 'error') {\n      form.error('Title and Author are required');\n    } else {\n      modal.remove();\n      modal = undefined;\n      library.addBookFromCustom(book);\n    }\n  }\n\n  e.preventDefault();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleClick);\n\n\n//# sourceURL=webpack:///./src/utils/handleClick.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: lowerCase, generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lowerCase\", function() { return lowerCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateId\", function() { return generateId; });\nconst lowerCase = (...txt) => txt.map(t => t.toLowerCase());\n\nfunction generateId(title) {\n  let length = 20;\n  const id = [\n    title\n      .toLowerCase()\n      .split(' ')\n      .join('-'),\n    '_'\n  ];\n  for (let i = 0; i < length; i++) {\n    id.push(randomize());\n  }\n  return id.join('');\n}\n\nconst randomize = num => Math.floor(Math.random() * 10);\n\n\n\n\n//# sourceURL=webpack:///./src/utils/helpers.js?");

/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/utils/helpers.js\");\n\n\nconst sort = {};\n\nsort.asc = {\n  title: true,\n  pageCount: true,\n  authors: true,\n  id: true,\n  hasRead: true\n};\n\nsort.strings = (type, books) => {\n  const sorted = [...books].sort((a, b) => {\n    const values =\n      type === 'authors'\n        ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"lowerCase\"])(a[type][0], b[type][0])\n        : [a[type].toLowerCase(), b[type].toLowerCase()];\n\n    return compareValues(values[0], values[1], type);\n  });\n\n  sort.updateSortOrder(type);\n\n  return sorted;\n};\n\nsort.byPages = (type, books) => {\n  const sorted = [...books].sort((a, b) => {\n    const valueA = a[type] ? a[type] : 9999999;\n    const valueB = b[type] ? b[type] : 9999999;\n    return compareValues(valueA, valueB, type);\n  });\n\n  sort.updateSortOrder(type);\n  return sorted;\n};\n\nsort.updateSortOrder = type => (sort.asc[type] = !sort.asc[type]);\n\nconst compareValues = (a, b, type) => {\n  const sortFunc = typeof a === 'string' ? stringSort : numberSort;\n  return sort.asc[type] ? sortFunc(a, b) : sortFunc(b, a);\n};\n\nconst stringSort = (a, b) => (a < b ? -1 : a > b ? 1 : 0);\n\nconst numberSort = (a, b) => a - b;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sort);\n\n\n//# sourceURL=webpack:///./src/utils/sort.js?");

/***/ }),

/***/ "./src/utils/spinner.scss":
/*!********************************!*\
  !*** ./src/utils/spinner.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utils/spinner.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/utils/spinner.scss?");

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/*! exports provided: checkStorage, updateLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkStorage\", function() { return checkStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\n/* harmony import */ var _assets_sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sample_data */ \"./src/assets/sample_data.js\");\n\n\nfunction checkStorage() {\n  if (storageAvailable('localStorage')) {\n    if (!window.localStorage.library) {\n      // if the library is empty, add sample data\n      // this is so the user can see how the app is supposed to look\n      return _assets_sample_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    } else {\n      // get the stored data\n      return retrieveFromLocalStorage();\n    }\n  } else {\n    alert(\n      'Sorry, localStorage is not available with your browser. ' +\n        \"You won't be able to save your library. :(\"\n    );\n    return _assets_sample_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n}\n\nfunction saveToLocalStorage(books) {\n  let lib = JSON.stringify(books);\n  window.localStorage.setItem('library', lib);\n}\n\nfunction retrieveFromLocalStorage() {\n  let data = window.localStorage.getItem('library');\n  let localData = JSON.parse(data);\n\n  return localData;\n}\n\nfunction storageAvailable(type) {\n  try {\n    let storage = window[type],\n      x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException &&\n      // everything except Firefox\n      (e.code === 22 ||\n        // Firefox\n        e.code === 1014 ||\n        // test name field too, because code might not be present\n        // everything except Firefox\n        e.name === 'QuotaExceededError' ||\n        // Firefox\n        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n      // acknowledge QuotaExceededError only if there\"s something already stored\n      storage.length !== 0\n    );\n  }\n}\n\nfunction updateLocalStorage(books) {\n  // clear localStorage\n  window.localStorage.clear();\n  // repopulate if there's something in the library\n  if (books.length !== 0) {\n    saveToLocalStorage(books);\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/utils/storage.js?");

/***/ })

/******/ });