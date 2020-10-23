/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n  background: url('https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');\\r\\n}\\r\\n.wrapper__main {\\r\\n display: flex;\\r\\n justify-content: center;\\r\\n flex-direction: column;\\r\\n}\\r\\n.app {\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  max-height: 650px;\\r\\n  justify-content: space-around;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.restart-btn {\\r\\n display: flex;\\r\\n justify-content: center;\\r\\n}\\r\\n.restart-btn__button {\\r\\n  padding: 10px;\\r\\n  font-size: 24px;\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  outline: none;\\r\\n  color: #fff;\\r\\n  background-color: #313131;\\r\\n  border: none;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n.restart-btn__button:active {\\r\\n  background-color: #585858;\\r\\n}\\r\\n\\r\\n.scoreboard {\\r\\n  display: inline-flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n.scoreboard__title {\\r\\n  width: 45%;\\r\\n  padding: 20px 10px;\\r\\n  padding-top: 20px;\\r\\n  padding-bottom: 20px;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  background-color: rgb(32, 32, 32);\\r\\n  font-size: 25px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.playground {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width: 470px;\\r\\n}\\r\\n.playground__cell {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 1px;\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  border-radius: 15px;\\r\\n  background-color: black;\\r\\n}\\r\\n.playground__cell {\\r\\n  cursor: pointer;\\r\\n}\\r\\n.playground__cell_selected{\\r\\n  background: gray;\\r\\n}\\r\\n.playground__ball_aqua {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: aqua;\\r\\n}\\r\\n.playground__ball_blue {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: blue;\\r\\n}\\r\\n.playground__ball_green {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: green;\\r\\n}\\r\\n.playground__ball_pink {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: pink;\\r\\n}\\r\\n.playground__ball_red {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: red;\\r\\n}\\r\\n.playground__ball_violet {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: violet;\\r\\n}\\r\\n.playground__ball_yellow {\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 25px;\\r\\n  background-color: yellow;\\r\\n}\\r\\n\\r\\n.balls-predictor {\\r\\n  display: inline-flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n.balls-predictor__cell {\\r\\n  margin: 1px;\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  border-radius: 15px;\\r\\n  background-color: black;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lines_js/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://lines_js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://lines_js/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lines_js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_Playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Playground */ \"./src/js/Playground.js\");\n/* harmony import */ var _js_Scoreboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Scoreboard */ \"./src/js/Scoreboard.js\");\n/**\r\n * IMPORTS\r\n */\r\n\r\n\r\n\r\n/**\r\n * CONSTANTS\r\n */\r\nconst playgroundColumns = 9;\r\nconst playgroundRows = 9;\r\nconst howManyBallsToGenerate = 3;\r\n/**\r\n * SCRIPT\r\n */\r\nlet playground = new _js_Playground__WEBPACK_IMPORTED_MODULE_1__.Playground(\r\n  playgroundRows,\r\n  playgroundColumns,\r\n  howManyBallsToGenerate\r\n);\r\nnew _js_Scoreboard__WEBPACK_IMPORTED_MODULE_2__.Scoreboard('.scoreboard').bindWithElement('.playground', playground);\r\n// refresh\r\nlet button = document.querySelector('.restart-btn__button');\r\nbutton.addEventListener('click', playground.clear.bind(playground));\r\n\n\n//# sourceURL=webpack://lines_js/./src/index.js?");

/***/ }),

/***/ "./src/js/Playground.js":
/*!******************************!*\
  !*** ./src/js/Playground.js ***!
  \******************************/
/*! namespace exports */
/*! export Playground [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Playground\": () => /* binding */ Playground\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/js/Utils.js\");\n\r\n\r\nconst ZERO = 0;\r\nconst colors = [\r\n  \"aqua\",\r\n  \"blue\",\r\n  \"green\",\r\n  \"pink\",\r\n  \"red\",\r\n  \"violet\",\r\n  \"yellow\"\r\n]\r\nclass Playground{\r\n  constructor(rows, columns, ballsCount) {\r\n    this.rows = rows;\r\n    this.columns = columns;\r\n    this.ballsCount = ballsCount;\r\n    this.colors = colors;\r\n    \r\n    this.score = 0;\r\n    if (localStorage.getItem('recored')) {\r\n      this.recored = JSON.parse(localStorage.getItem('recored'));\r\n    } else {\r\n      this.recored = 0;\r\n    }\r\n    \r\n    this._drawCells();\r\n    this._generateBalls();\r\n  }\r\n\r\n  clear() {\r\n    for (let i = 0; i < this.columns; i++) {\r\n      for (let j = 0; j < this.rows; j++) {\r\n        if (this.playgroundCells[i][j].firstChild) {\r\n          this.playgroundCells[i][j].firstChild.remove();\r\n        }\r\n      }\r\n    }\r\n    this._generateBalls();\r\n  }\r\n\r\n  _drawCells() {\r\n    this.playground = document.querySelector('.playground');\r\n    this.playgroundCells = [];\r\n    for (let i = 0; i < this.columns; i++) {\r\n      this.playgroundCells[i] = [];\r\n      for (let j = 0; j < this.rows; j++) {\r\n        let newCell = document.createElement('div');\r\n        newCell.classList.add('playground__cell');\r\n        this.playground.insertAdjacentElement('beforeend', newCell);\r\n        this.playgroundCells[i].push(newCell);\r\n      }\r\n    }\r\n    this.playground.addEventListener('click', this._playgroundInteraction.bind(this));\r\n  }\r\n\r\n  _findWave(element) {\r\n    let matrix = [];\r\n\r\n    let fromX = null;\r\n    let fromY = null;\r\n    let toX = null;\r\n    let toY = null;\r\n    for (let i = 0; i < this.rows; i++) {\r\n      matrix[i] = [];\r\n      for (let j = 0; j < this.columns; j++) {\r\n        if (this.playgroundCells[i][j].firstElementChild) {\r\n          matrix[i][j] = -2;\r\n        } else {\r\n          matrix[i][j] = -1;\r\n        }\r\n        if (this.playgroundCells[i][j] == this._selectedCell) {\r\n          fromX = i;\r\n          fromY = j;\r\n        }\r\n        if (this.playgroundCells[i][j] == element) {\r\n          toX = i;\r\n          toY = j;\r\n        }\r\n      }\r\n    }\r\n\r\n    let next = true;\r\n    let step = 0;\r\n    matrix[fromX][fromY] = step;\r\n    while (next == true) {\r\n      for (let x = 0; x < this.rows; x++) {\r\n        for (let y = 0; y < this.columns; y++) {\r\n          if (matrix[x][y] == step) {\r\n            // right\r\n            if (x + 1 < this.rows && matrix[x + 1][y] == -1) {\r\n              matrix[x + 1][y] = step + 1;\r\n            }\r\n            // left\r\n            if (x - 1 >= 0 && matrix[x - 1][y] == -1) {\r\n              matrix[x - 1][y] = step + 1;\r\n            }\r\n            // up\r\n            if (y + 1 < this.columns && matrix[x][y + 1] == -1) {\r\n              matrix[x][y + 1] = step + 1;\r\n            }\r\n            // down\r\n            if (y - 1 >= 0 && matrix[x][y - 1] == -1) {\r\n              matrix[x][y - 1] = step + 1;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      if (matrix[toX][toY] == step || step > this.rows * this.columns) {\r\n        next = false;\r\n      } else {\r\n        step++;\r\n      }\r\n    }\r\n\r\n    if (matrix[toX][toY] == step) {\r\n      let result = [];\r\n      while (step != 0) {\r\n        if (toX + 1 < this.rows && matrix[toX][toY] - matrix[toX + 1][toY] == 1) {\r\n          // right\r\n          toX = toX + 1;\r\n          result.unshift([toX, toY]);\r\n        } else if (toX - 1 >= 0 && matrix[toX][toY] - matrix[toX - 1][toY] == 1) {\r\n          // left\r\n          toX = toX - 1;\r\n          result.unshift([toX, toY]);\r\n        } else if (toY + 1 < this.columns && matrix[toX][toY] - matrix[toX][toY + 1] == 1) {\r\n          // up\r\n          toY = toY + 1;\r\n          result.unshift([toX, toY]);\r\n        } else if (toY - 1 >= 0 && matrix[toX][toY] - matrix[toX][toY - 1] == 1) {\r\n          // down\r\n          toY = toY - 1;\r\n          result.unshift([toX, toY]);\r\n        }\r\n        step--;\r\n      }\r\n      return result;\r\n    } else {\r\n      return [];\r\n    }    \r\n  }\r\n\r\n  _generateBalls() {\r\n    let emptyCells = document.querySelectorAll('.playground__cell:empty');\r\n    let cellsForFilling = _Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.generateUniqueNumbers(this.ballsCount, ZERO, emptyCells.length);\r\n    if (cellsForFilling !== undefined) {\r\n      cellsForFilling.forEach((item) => {\r\n        let ball = document.createElement('div');\r\n        ball.classList.add(`playground__ball_${this.colors[_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.randomInteger(0, this.colors.length)]}`);\r\n        emptyCells[item].insertAdjacentElement('beforeend', ball);\r\n      })\r\n    }\r\n  }\r\n\r\n  _deleteShapes() {\r\n    let resultRow = [];\r\n    for (let y = 0; y < this.rows; y++) {\r\n      let matchesInRow = [];\r\n      let previous = this.playgroundCells[y][0].firstElementChild?.classList[0];\r\n      for (let x = 0; x < this.columns; x++) {\r\n        let current  = this.playgroundCells[y][x].firstElementChild?.classList[0];\r\n        if (current != previous) {\r\n          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {\r\n            resultRow.push(matchesInRow);\r\n          }\r\n          matchesInRow = [];\r\n        }\r\n        matchesInRow.push(this.playgroundCells[y][x]);\r\n        previous = current;\r\n      }\r\n      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {\r\n        resultRow.push(matchesInRow);\r\n      }\r\n    }\r\n\r\n    let resultColumn = [];\r\n    for (let x = 0; x < this.columns; x++) {\r\n      let matchesInRow = [];\r\n      let previous = this.playgroundCells[0][x].firstElementChild?.classList[0];\r\n      for (let y = 0; y < this.rows; y++) {\r\n        let current  = this.playgroundCells[y][x].firstElementChild?.classList[0];\r\n        if (current != previous) {\r\n          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {\r\n            resultColumn.push(matchesInRow);\r\n          }\r\n          matchesInRow = [];\r\n        }\r\n        matchesInRow.push(this.playgroundCells[y][x]);\r\n        previous = current;\r\n      }\r\n      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {\r\n        resultColumn.push(matchesInRow);\r\n      }\r\n    }\r\n\r\n    let isDeleted = false;\r\n    resultColumn.forEach(row => {\r\n      row.forEach(item => {\r\n        if (item.firstElementChild) {\r\n          this.score += 2;\r\n          item.firstElementChild.remove();\r\n          isDeleted = true;\r\n        }\r\n      })\r\n    })\r\n    resultRow.forEach(row => {\r\n      row.forEach(item => {\r\n        if (item.firstElementChild) {\r\n          this.score += 2;\r\n          item.firstElementChild.remove();\r\n          isDeleted = true;\r\n        }\r\n      })\r\n    })\r\n    if (this.score > this.recored) {\r\n      this.recored = this.score;\r\n      localStorage.setItem('recored', JSON.stringify(this.recored));\r\n    }\r\n\r\n    return isDeleted;\r\n  }\r\n\r\n  _playgroundInteraction(event) {\r\n    let element = event.target;\r\n    if (!element.classList.contains('playground')) {\r\n      if (!element.classList.contains('playground__cell')) {\r\n        element = element.parentElement;\r\n      }\r\n      if (element.firstElementChild) {\r\n        if (this._selectedCell) {\r\n          this._selectedCell.classList.remove('playground__cell_selected');\r\n        }\r\n        element.classList.add('playground__cell_selected');\r\n        this._selectedCell = element;\r\n      } else if (this._selectedCell) {\r\n        let way = this._findWave(element);\r\n        if (way.length) {\r\n          element.insertAdjacentElement('beforeend', this._selectedCell.firstElementChild);\r\n          this._selectedCell.classList.remove('playground__cell_selected')\r\n          this._selectedCell = element.firstElementChild;\r\n          if (!this._deleteShapes()) {\r\n            this._generateBalls();\r\n            this._deleteShapes()\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://lines_js/./src/js/Playground.js?");

/***/ }),

/***/ "./src/js/Scoreboard.js":
/*!******************************!*\
  !*** ./src/js/Scoreboard.js ***!
  \******************************/
/*! namespace exports */
/*! export Scoreboard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scoreboard\": () => /* binding */ Scoreboard\n/* harmony export */ });\nclass Scoreboard {\r\n  constructor(selector) {\r\n    this.board = document.querySelector(selector);\r\n  }\r\n  \r\n  bindWithElement(selector, context) {\r\n    let app = document.querySelector(selector);\r\n    app.addEventListener('click', this._updateBoard.bind(this))\r\n    this.context = context;\r\n    this._updateBoard();\r\n  }\r\n\r\n  _updateBoard() {    \r\n    let recored = document.createElement('div');\r\n    recored.classList.add('scoreboard__title');\r\n    recored.innerText = `Recored: ${this.context.recored}`;\r\n  \r\n    let score = document.createElement('div');\r\n    score.classList.add('scoreboard__title');\r\n    score.innerText = `Score: ${this.context.score}`;\r\n    \r\n    this.board.children[0].replaceWith(score);\r\n    this.board.children[1].replaceWith(recored);\r\n  }\r\n}\n\n//# sourceURL=webpack://lines_js/./src/js/Scoreboard.js?");

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/*! namespace exports */
/*! export Utils [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": () => /* binding */ Utils\n/* harmony export */ });\nclass Utils{\r\n  constructor(){\r\n\r\n  }\r\n\r\n  static randomInteger(min, max) {\r\n    let rand = min + Math.random() * (max - min);\r\n    return Math.floor(rand);\r\n  }\r\n\r\n  static generateUniqueNumbers(count, min, max) {\r\n    let result = [];\r\n    /**\r\n     * if you need to generate more than we have\r\n     * in the range from min to max - return\r\n     * numbers of range\r\n     * \r\n     * else generate unique numbers\r\n     */\r\n    if (count > max - min) {\r\n      for (let i = min; i < max; i++) {\r\n        result.push(i);\r\n      }\r\n    } else {\r\n      for (let i = 0; i < count; i++) {\r\n        let tepmNumber = this.randomInteger(min, max);\r\n        if (!result.includes(tepmNumber)) {\r\n          result.push(tepmNumber);\r\n        } else {\r\n          i--;\r\n        }\r\n      }\r\n    }\r\n    return result;\r\n  }\r\n}\n\n//# sourceURL=webpack://lines_js/./src/js/Utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;