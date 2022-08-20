/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/images1.png */ \"./src/img/images1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  border: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1em;\\r\\n  font-family: 'Work Sans', sans-serif;\\r\\n}\\r\\n\\r\\n/* Home Page CSS */\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  height: 80px;\\r\\n  background-color: green;\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\n#logo img {\\r\\n  height: 80px;\\r\\n  background-color: green;\\r\\n  margin-left: 40%;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 4em;\\r\\n  margin-right: 4em;\\r\\n  text-decoration: none;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.links a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  padding-top: 20px;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  background-color: green;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  margin-top: 100px;\\r\\n  margin-top: 24px;\\r\\n}\\r\\n\\r\\n/* Body CSS */\\r\\n\\r\\n.poke-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, auto);\\r\\n  margin: 1em;\\r\\n  gap: 4em;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin: 4em;\\r\\n}\\r\\n\\r\\n#pokeimg {\\r\\n  width: 14em;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n.reservations {\\r\\n  cursor: pointer;\\r\\n  width: fit-content;\\r\\n  border: 2px solid black;\\r\\n  padding: 3px;\\r\\n  box-shadow: 2px 2px 2px black;\\r\\n  margin: 5px auto;\\r\\n  background-color: green;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n/* PopUp CSS */\\r\\n\\r\\n#commentPopup,\\r\\n.poke_reservation {\\r\\n  position: fixed;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgba(0, 0, 0, 0.9);\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  background-color: greenyellow;\\r\\n  gap: 1em;\\r\\n  padding: 2em;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  font-size: 30px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n#closePopup {\\r\\n  grid-column: 1/4;\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n#closePopup:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.pokemonInfo {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popup-container > #pokeimg {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: contain;\\r\\n  background-position: center;\\r\\n  border-radius: 100px;\\r\\n}\\r\\n\\r\\n/* Reservation form */\\r\\n\\r\\n#reservation-form,\\r\\n#comment,\\r\\n#commentform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  grid-column: 1/4;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#reservation-form > input,\\r\\n#username,\\r\\n#commentinput {\\r\\n  padding: 5px;\\r\\n  margin: 0;\\r\\n  width: 300px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n#reservation-form > button,\\r\\n.commentsubmit {\\r\\n  width: 100px;\\r\\n  height: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_pokemonlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pokemonlogo.png */ \"./src/img/pokemonlogo.png\");\n/* harmony import */ var _module_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/homepage.js */ \"./src/module/homepage.js\");\n/* harmony import */ var _module_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/comment.js */ \"./src/module/comment.js\");\n/* harmony import */ var _module_reservations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/reservations.js */ \"./src/module/reservations.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst headLogo = document.getElementById('logo');\r\nconst myLogo = new Image();\r\nmyLogo.src = _img_pokemonlogo_png__WEBPACK_IMPORTED_MODULE_1__;\r\nheadLogo.appendChild(myLogo);\r\n\r\nconst popUp = async () => {\r\n  await (0,_module_homepage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const commetBtn = document.querySelectorAll('.comments');\r\n  commetBtn.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const commentPopup = document.getElementById('commentPopup');\r\n      commentPopup.style.display = 'flex';\r\n      (0,_module_comment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\r\n    });\r\n  });\r\n  const reservationBtn = document.querySelectorAll('.reservations');\r\n  reservationBtn.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const reservationPopup = document.getElementById('poke_reservation');\r\n      reservationPopup.style.display = 'flex';\r\n      (0,_module_reservations_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e);\r\n    });\r\n  });\r\n};\r\n\r\n(0,_module_homepage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\npopUp();\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-use-before-define */\r\n\r\nconst convertData = async () => {\r\n  const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';\r\n  const datos = await fetch(pokeList);\r\n  return datos.json();\r\n};\r\n\r\nconst getId = async (id) => {\r\n  const datos = await convertData();\r\n  const dataId = datos.results[id - 1].url;\r\n  const pokeId = await fetch(dataId);\r\n  return pokeId.json();\r\n};\r\n\r\nconst commentData = async (e) => {\r\n  const commentList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/comments?item_id=item${e.target.id}`;\r\n  const datos = await fetch(commentList);\r\n  return datos.json();\r\n};\r\n\r\nconst counter = async (e) => {\r\n  const comment = await commentData(e);\r\n  const commentQuantity = comment.length;\r\n  return commentQuantity;\r\n};\r\n\r\nconst hideComment = () => {\r\n  const commentPopup = document.getElementById('commentPopup');\r\n  const closePopup = document.getElementById('closePopup');\r\n  closePopup.addEventListener('click', () => {\r\n    commentPopup.style.display = 'none';\r\n    window.location.reload();\r\n  });\r\n};\r\n\r\nconst printComments = async (e) => {\r\n  const comment = await commentData(e);\r\n  const container = document.getElementById('allcomment');\r\n  container.innerHTML = null;\r\n  comment.forEach((cmt) => {\r\n    const name = cmt.username;\r\n    const date = cmt.creation_date;\r\n    const comentario = cmt.comment;\r\n    container.insertAdjacentHTML('afterbegin', `\r\n    <p class=\"comment\"><strong>${date}</strong> ${name}: ${comentario}</p>\r\n    `);\r\n  });\r\n};\r\n\r\nconst showComment = async (e) => {\r\n  const commentPopup = document.getElementById('commentPopup');\r\n  const pokemons = await getId(e.target.id);\r\n  const { name } = pokemons;\r\n  const img = pokemons.sprites.other.home.front_default;\r\n  const type = pokemons.types[0].type.name;\r\n  const { abilities } = pokemons;\r\n  const abilityOne = abilities[0].ability.name;\r\n  const abilityTwo = abilities[1].ability.name;\r\n  const { moves } = pokemons;\r\n  const moveOne = moves[0].move.name;\r\n  const moveTwo = moves[1].move.name;\r\n  const moveThree = moves[2].move.name;\r\n  const moveFour = moves[3].move.name;\r\n  const counterComment = await counter(e);\r\n  commentPopup.innerHTML = null;\r\n  commentPopup.insertAdjacentHTML('afterbegin', `\r\n  <div class=\"popup-container\">\r\n      <span id=\"closePopup\">&#x274c;</span>\r\n      <img id=\"pokeimg\" src=\"${img}\" alt=\"${name}\"/>\r\n      <div class=\"pokemonInfo\">\r\n        <h3 class=\"name\">${name[0].toUpperCase() + name.slice(1)}</h3>\r\n        <div class=\"pokemon-description\">\r\n          <div class=\"type\">\r\n            <h4 class=\"title\">Type</h4>\r\n            <ul>\r\n              <li>${type[0].toUpperCase() + type.slice(1)}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"abilities\">\r\n            <h4 class=\"title\">Abilities</h4>\r\n            <ul>\r\n              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>\r\n              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"moves\">\r\n            <h4 class=\"title\">Moves</h4>\r\n            <ul>\r\n              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>\r\n              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>\r\n              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>\r\n              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"comment\">\r\n        <h3 class=\"title\">Comments (${counterComment || 0})</h3><br>\r\n        <div id=\"allcomment\"></div>\r\n        <div id=\"formcontainer\"><br>\r\n          <h3 class=\"title\">Add a comment</h3><br>\r\n          <form id=\"commentform\">\r\n            <input id=\"username\" type=\"text\" placeholder=\"Your name\" requiered><br>\r\n            <textarea id=\"commentinput\" placeholder=\"Your comment\" requiered></textarea><br>\r\n            <button type=\"submit\" class=\"commentsubmit\" id=\"${e.target.id}\">Comment</button><br>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `);\r\n  hideComment();\r\n  printComments(e);\r\n  submitComment(e);\r\n};\r\n\r\nconst submitComment = async () => {\r\n  const commentForm = document.getElementById('commentform');\r\n  const commentSubmit = document.querySelector('.commentsubmit');\r\n  const commentList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/comments';\r\n  commentSubmit.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const name = document.getElementById('username');\r\n    const comment = document.getElementById('commentinput');\r\n    const id = `item${e.target.id}`;\r\n    await fetch(commentList, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n        username: name.value,\r\n        comment: comment.value,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    printComments(e);\r\n    commentForm.reset();\r\n    showComment(e);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComment);\n\n//# sourceURL=webpack://js-capstone/./src/module/comment.js?");

/***/ }),

/***/ "./src/module/homepage.js":
/*!********************************!*\
  !*** ./src/module/homepage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"pokemonInfo\": () => (/* binding */ pokemonInfo)\n/* harmony export */ });\n/* eslint-disable no-await-in-loop */\r\n\r\nconst pokeContainer = document.getElementById('poke_container');\r\nconst pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';\r\nconst likeList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/likes/';\r\nlet pokemons = [];\r\n\r\nconst convertData = async (API) => {\r\n  const store = await fetch(API);\r\n  const data = store.json();\r\n  return data;\r\n};\r\n\r\nconst pokemonInfo = async () => {\r\n  const data = await convertData(pokeList);\r\n  pokemons = data.results;\r\n  for (let i = 0; i < pokemons.length; i += 1) {\r\n    const pokeUrl = pokemons[i].url;\r\n    const pokeDetail = await convertData(pokeUrl);\r\n    pokemons[i].id = pokeDetail.id;\r\n    pokemons[i].img = pokeDetail.sprites.other.home.front_default;\r\n  }\r\n  return pokemons;\r\n};\r\n\r\nconst convertLikes = async () => {\r\n  const likes = await convertData(likeList);\r\n  const pokemons = await pokemonInfo();\r\n  for (let i = 0; i < likes.length; i += 1) {\r\n    for (let x = 0; x < pokemons.length; x += 1) {\r\n      if (Number(likes[i].item_id) === pokemons[x].id) {\r\n        pokemons[x].likes = likes[i].likes;\r\n      }\r\n    }\r\n  }\r\n  return pokemons;\r\n};\r\n\r\nconst addLikes = async (btn) => {\r\n  await fetch(likeList, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: btn.id }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  btn.classList.remove('fa-regular');\r\n  btn.classList.add('fa');\r\n  btn.setAttribute('disabled', '');\r\n  const counter = document.getElementById(`${btn.id}counter`);\r\n  const likes = counter.innerHTML.split(' ');\r\n  likes[0] = Number(likes[0]) + 1;\r\n  counter.innerHTML = likes.join(' ');\r\n};\r\n\r\nconst likeBtn = () => {\r\n  const btnLike = document.querySelectorAll('.likesbtn');\r\n  btnLike.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      addLikes(btn);\r\n    });\r\n  });\r\n};\r\n\r\nconst printPokemons = async () => {\r\n  const pokemons = await convertLikes();\r\n  pokeContainer.innerHTML = '';\r\n  for (let i = 0; i < pokemons.length; i += 1) {\r\n    pokeContainer.innerHTML += `\r\n    <div class=\"container\">\r\n      <img id=\"pokeimg\" src=\"${pokemons[i].img}\" alt=\"${pokemons[i].name}\"/>\r\n      <h3 class=\"name\">${pokemons[i].name[0].toUpperCase() + pokemons[i].name.slice(1)}</h3>\r\n      <button class=\"fa-regular fa-heart likesbtn\" id=\"${pokemons[i].id}\"></button>\r\n      <p class=\"likes\" id=\"${pokemons[i].id}counter\">${pokemons[i].likes || 0} likes</p>\r\n      <a href=\"#\" class=\"comments\" id=\"${pokemons[i].id}\">Comments</a>\r\n      <a href=\"#\" class=\"reservations\" id=\"${pokemons[i].id}\">Reservations</a>\r\n    </div>`;\r\n  }\r\n  likeBtn();\r\n};\r\n\r\nconst pokeCounter = async () => {\r\n  const pokemon = await pokemonInfo();\r\n  const pokemonCounter = document.getElementById('home-counter');\r\n  pokemonCounter.innerHTML = `[ ${pokemon.length} ] Pokemons`;\r\n};\r\n\r\npokeCounter();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printPokemons);\n\n//# sourceURL=webpack://js-capstone/./src/module/homepage.js?");

/***/ }),

/***/ "./src/module/reservations.js":
/*!************************************!*\
  !*** ./src/module/reservations.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-use-before-define */\r\n\r\n// Display reservations pop up with selected item's details\r\n\r\nconst convertData = async () => {\r\n  const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';\r\n  const datos = await fetch(pokeList);\r\n  return datos.json();\r\n};\r\n\r\nconst getId = async (id) => {\r\n  const datos = await convertData();\r\n  const dataId = datos.results[id - 1].url;\r\n  const pokeId = await fetch(dataId);\r\n  return pokeId.json();\r\n};\r\n\r\nconst reservationData = async (e) => {\r\n  const reservationList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/reservations?item_id=item${e.target.id}`;\r\n  const datos = await fetch(reservationList);\r\n  return datos.json();\r\n};\r\n\r\n// Add reservations counter.\r\n\r\nconst counter = async (e) => {\r\n  const reservation = await reservationData(e);\r\n  const reservationQuantity = reservation.length;\r\n  return reservationQuantity;\r\n};\r\n\r\nconst hideReservation = () => {\r\n  const reservationPopup = document.getElementById('poke_reservation');\r\n  const closePopup = document.getElementById('closePopup');\r\n  closePopup.addEventListener('click', () => {\r\n    reservationPopup.style.display = 'none';\r\n    window.location.reload();\r\n  });\r\n};\r\n\r\n// Display reservations for a given item on the Reservations pop - up\r\n\r\nconst printReservations = async (e) => {\r\n  const reservation = await reservationData(e);\r\n  const containerReservations = document.getElementById('allreservations');\r\n  containerReservations.innerHTML = null;\r\n  reservation.forEach((rsv) => {\r\n    const name = rsv.username;\r\n    const dateStart = rsv.date_start;\r\n    const dateEnd = rsv.date_end;\r\n    containerReservations.insertAdjacentHTML('afterbegin', `\r\n    <p class=\"reservation\">${dateStart} - ${dateEnd} by: ${name}</p>\r\n    `);\r\n  });\r\n};\r\n\r\nconst showReservation = async (e) => {\r\n  const reservationPopup = document.getElementById('poke_reservation');\r\n  const pokemons = await getId(e.target.id);\r\n  const { name } = pokemons;\r\n  const img = pokemons.sprites.other.home.front_default;\r\n  const type = pokemons.types[0].type.name;\r\n  const { abilities } = pokemons;\r\n  const abilityOne = abilities[0].ability.name;\r\n  const abilityTwo = abilities[1].ability.name;\r\n  const { moves } = pokemons;\r\n  const moveOne = moves[0].move.name;\r\n  const moveTwo = moves[1].move.name;\r\n  const moveThree = moves[2].move.name;\r\n  const moveFour = moves[3].move.name;\r\n  const counterReservation = await counter(e);\r\n  reservationPopup.innerHTML = null;\r\n  reservationPopup.insertAdjacentHTML('afterbegin', `\r\n  <div class=\"popup-container\">\r\n      <span id=\"closePopup\">&#x274c;</span>\r\n      <img id=\"pokeimg\" src=\"${img}\" alt=\"${name}\"/>\r\n      <div class=\"pokemonInfo\">\r\n        <h3 class=\"name\">${name[0].toUpperCase() + name.slice(1)}</h3><br>\r\n        <div class=\"pokemon-description\">\r\n          <div class=\"type\">\r\n            <h4 class=\"title\">Type</h4>\r\n            <ul>\r\n              <li>${type[0].toUpperCase() + type.slice(1)}</li>\r\n            </ul>\r\n            <br>\r\n          </div>\r\n          <div class=\"abilities\">\r\n            <h4 class=\"title\">Abilities</h4>\r\n            <ul>\r\n              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>\r\n              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>\r\n            </ul>\r\n            <br>\r\n          </div>\r\n          <div class=\"moves\">\r\n            <h4 class=\"title\">Moves</h4>\r\n            <ul>\r\n              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>\r\n              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>\r\n              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>\r\n              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>\r\n            </ul>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"reservation\">\r\n        <h3 class=\"title\">Reservations (${counterReservation || 0})</h3><br>\r\n        <div id=\"allreservations\"></div>\r\n      </div>\r\n       <form id=\"reservation-form\">\r\n        <h3 class=\"title\">Add a reservation</h3><br>\r\n        <input id=\"user_name\" type:\"text\" placeholder=\"Your name\"><br>\r\n        <input id=\"date_start\" type:\"date\" placeholder=\"Start date\"><br>\r\n        <input id=\"date_end\" type:\"date\" placeholder=\"End date\"><br>\r\n        <button type=\"submit\" class=\"addReservation id=\"${e.target.id}\">Reserve</button>\r\n      </form>\r\n    </div>\r\n  `);\r\n  hideReservation();\r\n  printReservations(e);\r\n  submitReservation(e);\r\n};\r\n\r\n// Create feature: add new reservation\r\n\r\nconst submitReservation = async () => {\r\n  const reservationForm = document.getElementById('reservation-form');\r\n  const reservationSubmit = document.querySelector('.addReservation');\r\n  const reservationList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/reservations';\r\n  reservationSubmit.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const name = document.getElementById('user_name');\r\n    const dateStart = document.getElementById('date_start');\r\n    const dateEnd = document.getElementById('date_end');\r\n    const id = `item${e.target.id}`;\r\n    await fetch(reservationList, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n        username: name.value,\r\n        date_start: dateStart.value,\r\n        date_end: dateEnd.value,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    printReservations(e);\r\n    reservationForm.reset();\r\n    showReservation(e);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showReservation);\n\n//# sourceURL=webpack://js-capstone/./src/module/reservations.js?");

/***/ }),

/***/ "./src/img/images1.png":
/*!*****************************!*\
  !*** ./src/img/images1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0842814968cae7348f18.png\";\n\n//# sourceURL=webpack://js-capstone/./src/img/images1.png?");

/***/ }),

/***/ "./src/img/pokemonlogo.png":
/*!*********************************!*\
  !*** ./src/img/pokemonlogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"556c7d59f67c60aeeecc.png\";\n\n//# sourceURL=webpack://js-capstone/./src/img/pokemonlogo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;