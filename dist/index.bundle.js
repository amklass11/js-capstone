"use strict";
(self["webpackChunkjs_capstone"] = self["webpackChunkjs_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  column-gap: 100px;\r\n}\r\n\r\nheader img {\r\n  width: 300px;\r\n  height: 100px;\r\n  animation-name: showlogo;\r\n  animation-duration: 4s;\r\n}\r\n\r\n@keyframes showlogo {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 300px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n#categories {\r\n  display: flex;\r\n  column-gap: 50px;\r\n  padding-left: 0;\r\n}\r\n\r\n#categories li {\r\n  list-style: none;\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10%;\r\n  border: 1px solid black;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  animation-name: showitems;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes showitems {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.like {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like:active {\r\n  filter:\r\n    invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg)\r\n    brightness(95%) contrast(118%);\r\n}\r\n\r\n.like-text {\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n}\r\n\r\n.reservations {\r\n  border: solid black 1px;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n}\r\n\r\n/* comments pop-up section starts here */\r\n\r\n.moviediv {\r\n  display: grid;\r\n  grid-template-columns: 33% 33% 33%;\r\n  grid-template-rows: auto auto auto auto;\r\n  gap: 10px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.comments {\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.cont-pop-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgb(206, 209, 202);\r\n  width: 75%;\r\n  height: 100%;\r\n  bottom: 0;\r\n  margin-left: 41px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.modal.active {\r\n  display: block;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n  width: 90%;\r\n}\r\n\r\n.close-button {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: -0.5rem 1rem -0.5rem auto;\r\n}\r\n\r\n.modal img {\r\n  width: 64%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.movie-title {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 0;\r\n  gap: 25px;\r\n}\r\n\r\n.comment-list {\r\n  width: 80%;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  min-height: 50px;\r\n  max-height: 80px;\r\n  overflow-y: auto;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comments-li {\r\n  list-style: none;\r\n}\r\n\r\n.addcom {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.username {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.insight {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  height: 50px;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.addnew-btn {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  background-color: rgba(216, 210, 210, 0.822);\r\n  border: 1px solid;\r\n  width: 65px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.addnew-btn:hover {\r\n  background-color: rgb(86, 192, 206);\r\n}\r\n\r\n.message {\r\n  display: none;\r\n  color: red;\r\n}\r\n\r\n.message.active {\r\n  display: block;\r\n}\r\n\r\n/* Comments-popup section finish */\r\nfooter {\r\n  border: solid black 2px;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  background-color: rgb(203, 203, 203);\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    column-gap: 10px;\r\n  }\r\n\r\n  header img {\r\n    width: 150px;\r\n    height: 60px;\r\n    animation-name: showlogo;\r\n    animation-duration: 4s;\r\n  }\r\n\r\n  @keyframes showlogo {\r\n    from {\r\n      width: 1px;\r\n      height: 1px;\r\n    }\r\n\r\n    to {\r\n      width: 150px;\r\n      height: 60px;\r\n    }\r\n  }\r\n\r\n  #categories {\r\n    column-gap: 10px;\r\n  }\r\n\r\n  #categories li {\r\n    list-style: none;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .title {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .like {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .like-text {\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n  }\r\n\r\n  .comments {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .reservations {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .moviediv {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: auto;\r\n    gap: 10px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    background-color: rgb(206, 209, 202);\r\n    width: 100%;\r\n    height: 100%;\r\n    bottom: 0;\r\n    left: -160px;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .comment-form {\r\n    margin-bottom: 100px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  column-gap: 100px;\r\n}\r\n\r\nheader img {\r\n  width: 300px;\r\n  height: 100px;\r\n  animation-name: showlogo;\r\n  animation-duration: 4s;\r\n}\r\n\r\n@keyframes showlogo {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 300px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n#categories {\r\n  display: flex;\r\n  column-gap: 50px;\r\n  padding-left: 0;\r\n}\r\n\r\n#categories li {\r\n  list-style: none;\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10%;\r\n  border: 1px solid black;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  animation-name: showitems;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes showitems {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.like {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like:active {\r\n  filter:\r\n    invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg)\r\n    brightness(95%) contrast(118%);\r\n}\r\n\r\n.like-text {\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n}\r\n\r\n.reservations {\r\n  border: solid black 1px;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n}\r\n\r\n/* comments pop-up section starts here */\r\n\r\n.moviediv {\r\n  display: grid;\r\n  grid-template-columns: 33% 33% 33%;\r\n  grid-template-rows: auto auto auto auto;\r\n  gap: 10px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.comments {\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.cont-pop-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgb(206, 209, 202);\r\n  width: 75%;\r\n  height: 100%;\r\n  bottom: 0;\r\n  margin-left: 41px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.modal.active {\r\n  display: block;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n  width: 90%;\r\n}\r\n\r\n.close-button {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: -0.5rem 1rem -0.5rem auto;\r\n}\r\n\r\n.modal img {\r\n  width: 64%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.movie-title {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 0;\r\n  gap: 25px;\r\n}\r\n\r\n.comment-list {\r\n  width: 80%;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  min-height: 50px;\r\n  max-height: 80px;\r\n  overflow-y: auto;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comments-li {\r\n  list-style: none;\r\n}\r\n\r\n.addcom {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.username {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.insight {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  height: 50px;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.addnew-btn {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  background-color: rgba(216, 210, 210, 0.822);\r\n  border: 1px solid;\r\n  width: 65px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.addnew-btn:hover {\r\n  background-color: rgb(86, 192, 206);\r\n}\r\n\r\n.message {\r\n  display: none;\r\n  color: red;\r\n}\r\n\r\n.message.active {\r\n  display: block;\r\n}\r\n\r\n/* Comments-popup section finish */\r\nfooter {\r\n  border: solid black 2px;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  background-color: rgb(203, 203, 203);\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    column-gap: 10px;\r\n  }\r\n\r\n  header img {\r\n    width: 150px;\r\n    height: 60px;\r\n    animation-name: showlogo;\r\n    animation-duration: 4s;\r\n  }\r\n\r\n  @keyframes showlogo {\r\n    from {\r\n      width: 1px;\r\n      height: 1px;\r\n    }\r\n\r\n    to {\r\n      width: 150px;\r\n      height: 60px;\r\n    }\r\n  }\r\n\r\n  #categories {\r\n    column-gap: 10px;\r\n  }\r\n\r\n  #categories li {\r\n    list-style: none;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .title {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .like {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .like-text {\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n  }\r\n\r\n  .comments {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .reservations {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .moviediv {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: auto;\r\n    gap: 10px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    background-color: rgb(206, 209, 202);\r\n    width: 100%;\r\n    height: 100%;\r\n    bottom: 0;\r\n    left: -160px;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .comment-form {\r\n    margin-bottom: 100px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home_page/display.js":
/*!**********************************!*\
  !*** ./src/home_page/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getdata": () => (/* binding */ getdata),
/* harmony export */   "getimg": () => (/* binding */ getimg),
/* harmony export */   "getlikes": () => (/* binding */ getlikes),
/* harmony export */   "likes": () => (/* binding */ likes),
/* harmony export */   "postlike": () => (/* binding */ postlike),
/* harmony export */   "totalitems": () => (/* binding */ totalitems)
/* harmony export */ });
const getdata = async (apiurl) => {
  let response = await fetch(apiurl);
  response = await response.json();
  response = response.map((a) => a.show);
  return response;
};

const getimg = (imgurl) => {
  imgurl = imgurl.map((a) => a.image.original);
  return imgurl;
};

const getlikes = async (likesurl) => {
  let response = await fetch(likesurl);
  response = await response.json();
  return response;
};

const likes = (likesum) => {
  likesum = likesum.map((a) => a.likes);
  return likesum;
};

const postlike = async (newlikeurl, index) => {
  await fetch(newlikeurl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${index + 1}`,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
};

const totalitems = (result) => result.length;



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_page/display.js */ "./src/home_page/display.js");
/* harmony import */ var _like_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like_img.png */ "./src/like_img.png");
/* harmony import */ var _movies_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies_img.png */ "./src/movies_img.png");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");






// Create variables for storing data
const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const popup = document.querySelector('.modal');
const movies = document.querySelector('#movietotal');
const likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';
const commenturl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments/';
const comments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments?item_id=';

let likesnum;
let imgurl;
let likescounter;
let itemscounter;
let commentCounter;
logo.src = _movies_img_png__WEBPACK_IMPORTED_MODULE_3__;

const hide = (msg) => {
  msg.classList.remove('active');
};

// Getting data from Api if promise status resolve
const myPromise = new Promise((resolve) => {
  resolve(_home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getdata(apiurl));
});

const mypromiseb = new Promise((resolve) => {
  resolve(_home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getlikes(likesurl));
});

myPromise.then((result) => {
  imgurl = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getimg(result);
  itemscounter = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.totalitems(result);
  movies.textContent = `Movies(${itemscounter})`;
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${_like_img_png__WEBPACK_IMPORTED_MODULE_2__}">
        <p class="like-text"> </p>
        </div>
        </div>
       <button><p class="comments" id="commentid" >Comments</p></button>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
  const commentbutton = document.querySelectorAll('.comments');
  commentbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      const mypromisec = new Promise((resolve) => {
        resolve((0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.getcomments)(comments, index));
      });
      const popupinfo = (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.getmovie)(result, popup, index);
      section.append(popupinfo);
      popupinfo.classList.add('active');
      const close = document.querySelector('.close-button');
      close.addEventListener('click', () => {
        popupinfo.remove();
      });
      const commentdiv = document.querySelector('.comment-list');
      const count = document.querySelector('.commentsp');
      mypromisec.then((commentarr) => {
        count.textContent = `Comments(${commentarr.length})`;
        commentarr.forEach((element) => {
          commentdiv.innerHTML += `<li class="comments-li">${element.creation_date}  ${element.username}:  ${element.comment}</li>`;
        });
      });
      const inputname = document.querySelector('.username');
      const inputtext = document.querySelector('.insight');
      const commenttext = document.querySelector('.addnew-btn');
      const message = document.querySelector('.message');
      commenttext.addEventListener('click', () => {
        if (inputname.value !== '' && inputtext.value !== '') {
          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.postComments)(commenturl, index, inputname.value, inputtext.value);
          const [date] = new Date().toISOString().split('T');
          commentdiv.innerHTML += `<li class="comments-li">${date}  ${inputname.value}:  ${inputtext.value}</li>`;
          const commentdivlist = document.querySelectorAll('.comment-list li');
          const commentstotal = (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.totalcomments)(commentdivlist);
          count.textContent = `Comments(${commentstotal})`;
          inputname.value = '';
          inputtext.value = '';
        } else {
          message.textContent = 'Inputs should not be empty';
          message.classList.add('active');
          setTimeout(() => {
            hide(message);
          }, 2000);
          const list = document.querySelectorAll('.list-item');
          const counts = document.querySelector('.comment');
          commentCounter[index] += +1;
          commenttext.forEach((comments, index) => {
            if (list[index] <= 1) {
              counts.textContent = `Comments (${list.length})`;
            } else {
              counts.textContent = 'Comments (0)';
            }
            commentCounter.classList.add('active');
          });
        }
      });
    });
  });

  const liketext = document.querySelectorAll('.like-text');
  const likebutton = document.querySelectorAll('.like');
  mypromiseb.then((result) => {
    likesnum = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.likes(result);
    likescounter = likesnum;
    liketext.forEach((element, index) => {
      if (likesnum[index] <= 1) {
        element.textContent = `${likesnum[index]} like`;
      } else {
        element.textContent = `${likesnum[index]} likes`;
      }
    });
    likebutton.forEach((element, index) => {
      element.addEventListener('click', () => {
        _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.postlike(likesurl, index);
        likescounter[index] += +1;
        liketext.forEach((element, index) => {
          if (likesnum[index] <= 1) {
            element.textContent = `${likescounter[index]} like`;
          } else {
            element.textContent = `${likescounter[index]} likes`;
          }
        });
      });
    });
  });
});


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getcomments": () => (/* binding */ getcomments),
/* harmony export */   "getmovie": () => (/* binding */ getmovie),
/* harmony export */   "postComments": () => (/* binding */ postComments),
/* harmony export */   "totalcomments": () => (/* binding */ totalcomments)
/* harmony export */ });
const getmovie = (result, popup, index) => {
  result = result[index];
  popup.innerHTML = `<div id="modal-pop-up-${result.id}" class="modal-pop-up">
        <div class="cont-pop-up">
          <div class="modal-header">  <button data-id='${result.id}' class="close-button">&times;</button> </div>
            <img class="modal-pop-img" src="${result.image.original}">
            <h2 class="movie-title">${result.name}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Premiered: ${result.premiered}</p>
                    <p>Type: ${result.type}</p> 
                </div>
                <div class="movie-info2">
                    <p>Runtime: ${result.runtime}</p>
                    <p>Language: ${result.language}</p>
                </div>
            </div>
            <h3 class="commentsp">comments(</h3>
            <ul class="comment-list"></ul>
            <p class=message></p>
            <form class="comment-form">
                <h4 class="addcom">Add comment</h4>
                <input type="text" id="username" class="username" placeholder="Your name" required><br>
                <textarea type="text" id="insight" class="insight" placeholder="Your insight" required></textarea><br>
                <p id="addnew" class="addnew-btn">Comment</p>
            </form>
        </div>
    </div>`;
  return popup;
};

const postComments = async (commenturl, id, username, comment) => {
  await fetch(commenturl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${username}`,
      comment: `${comment}`,
    }),
  });
};

const getcomments = async (comments, index) => {
  let response = await fetch(`${comments}${index}`);
  response = await response.json();
  return response;
};

const totalcomments = (comments) => {
  comments = comments.length;
  return comments;
};



/***/ }),

/***/ "./src/like_img.png":
/*!**************************!*\
  !*** ./src/like_img.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54a2b2ce3eb18e031d59.png";

/***/ }),

/***/ "./src/movies_img.png":
/*!****************************!*\
  !*** ./src/movies_img.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10addc24131edbb84b83.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xELFFBQVE7QUFDUixpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQsWUFBWTtBQUNaLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlEO0FBQ0E7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RDtBQUNBLHlEQUF5RCxVQUFVLDhCQUE4QjtBQUNqRyw4Q0FBOEMsc0JBQXNCO0FBQ3BFLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRCxtQ0FBbUMsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixHQUFHO0FBQ3JCLG1CQUFtQixTQUFTO0FBQzVCLGtCQUFrQixRQUFRO0FBQzFCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMsRUFBRSxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2hvbWVfcGFnZS9kaXNwbGF5LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dsb2dvO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93bG9nbyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yaWVzIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93aXRlbXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3dpdGVtcyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZTphY3RpdmUge1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMTYlKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDc0MDQlKSBodWUtcm90YXRlKDRkZWcpXFxyXFxuICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMTglKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zIHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDhweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudHMgcG9wLXVwIHNlY3Rpb24gc3RhcnRzIGhlcmUgKi9cXHJcXG5cXHJcXG4ubW92aWVkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3AtdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwOSwgMjAyKTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogNDFweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IC0wLjVyZW0gMXJlbSAtMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbWcge1xcclxcbiAgd2lkdGg6IDY0JTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogODBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb20ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcm5hbWUge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIG1hcmdpbjogNCUgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc2lnaHQge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIG1hcmdpbjogNCUgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG5ldy1idG4ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTAsIDIxMCwgMC44MjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRuZXctYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTkyLCAyMDYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50cy1wb3B1cCBzZWN0aW9uIGZpbmlzaCAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dsb2dvO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBzaG93bG9nbyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXRlZ29yaWVzIHtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXRlZ29yaWVzIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzZXJ2YXRpb25zIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA5LCAyMDIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IC0xNjBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtF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LFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dsb2dvO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93bG9nbyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yaWVzIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93aXRlbXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3dpdGVtcyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZTphY3RpdmUge1xcclxcbiAgZmlsdGVyOlxcclxcbiAgICBpbnZlcnQoMTYlKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDc0MDQlKSBodWUtcm90YXRlKDRkZWcpXFxyXFxuICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMTglKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zIHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDhweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudHMgcG9wLXVwIHNlY3Rpb24gc3RhcnRzIGhlcmUgKi9cXHJcXG5cXHJcXG4ubW92aWVkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udC1wb3AtdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwOSwgMjAyKTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogNDFweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IC0wLjVyZW0gMXJlbSAtMC41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbWcge1xcclxcbiAgd2lkdGg6IDY0JTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogODBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb20ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcm5hbWUge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIG1hcmdpbjogNCUgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc2lnaHQge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIG1hcmdpbjogNCUgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG5ldy1idG4ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTAsIDIxMCwgMC44MjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRuZXctYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTkyLCAyMDYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50cy1wb3B1cCBzZWN0aW9uIGZpbmlzaCAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dsb2dvO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBzaG93bG9nbyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXRlZ29yaWVzIHtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXRlZ29yaWVzIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzZXJ2YXRpb25zIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA5LCAyMDIpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IC0xNjBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldGRhdGEgPSBhc3luYyAoYXBpdXJsKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpdXJsKTtcclxuICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXNwb25zZSA9IHJlc3BvbnNlLm1hcCgoYSkgPT4gYS5zaG93KTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5jb25zdCBnZXRpbWcgPSAoaW1ndXJsKSA9PiB7XHJcbiAgaW1ndXJsID0gaW1ndXJsLm1hcCgoYSkgPT4gYS5pbWFnZS5vcmlnaW5hbCk7XHJcbiAgcmV0dXJuIGltZ3VybDtcclxufTtcclxuXHJcbmNvbnN0IGdldGxpa2VzID0gYXN5bmMgKGxpa2VzdXJsKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGlrZXN1cmwpO1xyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IGxpa2VzID0gKGxpa2VzdW0pID0+IHtcclxuICBsaWtlc3VtID0gbGlrZXN1bS5tYXAoKGEpID0+IGEubGlrZXMpO1xyXG4gIHJldHVybiBsaWtlc3VtO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdGxpa2UgPSBhc3luYyAobmV3bGlrZXVybCwgaW5kZXgpID0+IHtcclxuICBhd2FpdCBmZXRjaChuZXdsaWtldXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogYGl0ZW0ke2luZGV4ICsgMX1gLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdG90YWxpdGVtcyA9IChyZXN1bHQpID0+IHJlc3VsdC5sZW5ndGg7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldGRhdGEsIGdldGltZywgZ2V0bGlrZXMsIGxpa2VzLCBwb3N0bGlrZSwgdG90YWxpdGVtcyxcclxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vaG9tZV9wYWdlL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgbGlrZWltZyBmcm9tICcuL2xpa2VfaW1nLnBuZyc7XHJcbmltcG9ydCBtb3ZpZXNpbWcgZnJvbSAnLi9tb3ZpZXNfaW1nLnBuZyc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdENvbW1lbnRzLCBnZXRtb3ZpZSwgZ2V0Y29tbWVudHMsIHRvdGFsY29tbWVudHMsXHJcbn0gZnJvbSAnLi9tb2R1bGVzL3BvcHVwLmpzJztcclxuXHJcbi8vIENyZWF0ZSB2YXJpYWJsZXMgZm9yIHN0b3JpbmcgZGF0YVxyXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllZGl2Jyk7XHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaW1nJyk7XHJcbmNvbnN0IGFwaXVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWNvbWVkeSc7XHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IG1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZXRvdGFsJyk7XHJcbmNvbnN0IGxpa2VzdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0tuRExtcmloN2FpWWZkMGlodjlIL2xpa2VzLyc7XHJcbmNvbnN0IGNvbW1lbnR1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvS25ETG1yaWg3YWlZZmQwaWh2OUgvY29tbWVudHMvJztcclxuY29uc3QgY29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvS25ETG1yaWg3YWlZZmQwaWh2OUgvY29tbWVudHM/aXRlbV9pZD0nO1xyXG5cclxubGV0IGxpa2VzbnVtO1xyXG5sZXQgaW1ndXJsO1xyXG5sZXQgbGlrZXNjb3VudGVyO1xyXG5sZXQgaXRlbXNjb3VudGVyO1xyXG5sZXQgY29tbWVudENvdW50ZXI7XHJcbmxvZ28uc3JjID0gbW92aWVzaW1nO1xyXG5cclxuY29uc3QgaGlkZSA9IChtc2cpID0+IHtcclxuICBtc2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG4vLyBHZXR0aW5nIGRhdGEgZnJvbSBBcGkgaWYgcHJvbWlzZSBzdGF0dXMgcmVzb2x2ZVxyXG5jb25zdCBteVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIHJlc29sdmUoYXBpLmdldGRhdGEoYXBpdXJsKSk7XHJcbn0pO1xyXG5cclxuY29uc3QgbXlwcm9taXNlYiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgcmVzb2x2ZShhcGkuZ2V0bGlrZXMobGlrZXN1cmwpKTtcclxufSk7XHJcblxyXG5teVByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgaW1ndXJsID0gYXBpLmdldGltZyhyZXN1bHQpO1xyXG4gIGl0ZW1zY291bnRlciA9IGFwaS50b3RhbGl0ZW1zKHJlc3VsdCk7XHJcbiAgbW92aWVzLnRleHRDb250ZW50ID0gYE1vdmllcygke2l0ZW1zY291bnRlcn0pYDtcclxuICBpbWd1cmwuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIHNlY3Rpb24uaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJwb3N0ZXJcIiBzcmM9XCIke2VsZW1lbnR9XCIgYWx0PVwiSXRhbGlhbiBUcnVsbGlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48cD4ke3Jlc3VsdFtpbmRleF0ubmFtZX08L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibGlrZVwiIHNyYz1cIiR7bGlrZWltZ31cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxpa2UtdGV4dFwiPiA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8YnV0dG9uPjxwIGNsYXNzPVwiY29tbWVudHNcIiBpZD1cImNvbW1lbnRpZFwiID5Db21tZW50czwvcD48L2J1dHRvbj5cclxuICAgICAgICA8cCBjbGFzcz1cInJlc2VydmF0aW9uc1wiPlJlc2VydmF0aW9uczwvcD4gIFxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgfSk7XHJcbiAgY29uc3QgY29tbWVudGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xyXG4gIGNvbW1lbnRidXR0b24uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG15cHJvbWlzZWMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZ2V0Y29tbWVudHMoY29tbWVudHMsIGluZGV4KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBwb3B1cGluZm8gPSBnZXRtb3ZpZShyZXN1bHQsIHBvcHVwLCBpbmRleCk7XHJcbiAgICAgIHNlY3Rpb24uYXBwZW5kKHBvcHVwaW5mbyk7XHJcbiAgICAgIHBvcHVwaW5mby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XHJcbiAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwaW5mby5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzcCcpO1xyXG4gICAgICBteXByb21pc2VjLnRoZW4oKGNvbW1lbnRhcnIpID0+IHtcclxuICAgICAgICBjb3VudC50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2NvbW1lbnRhcnIubGVuZ3RofSlgO1xyXG4gICAgICAgIGNvbW1lbnRhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgY29tbWVudGRpdi5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImNvbW1lbnRzLWxpXCI+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICAke2VsZW1lbnQudXNlcm5hbWV9OiAgJHtlbGVtZW50LmNvbW1lbnR9PC9saT5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgaW5wdXRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJyk7XHJcbiAgICAgIGNvbnN0IGlucHV0dGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnR0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZG5ldy1idG4nKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICAgIGNvbW1lbnR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dG5hbWUudmFsdWUgIT09ICcnICYmIGlucHV0dGV4dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgIHBvc3RDb21tZW50cyhjb21tZW50dXJsLCBpbmRleCwgaW5wdXRuYW1lLnZhbHVlLCBpbnB1dHRleHQudmFsdWUpO1xyXG4gICAgICAgICAgY29uc3QgW2RhdGVdID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJyk7XHJcbiAgICAgICAgICBjb21tZW50ZGl2LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiY29tbWVudHMtbGlcIj4ke2RhdGV9ICAke2lucHV0bmFtZS52YWx1ZX06ICAke2lucHV0dGV4dC52YWx1ZX08L2xpPmA7XHJcbiAgICAgICAgICBjb25zdCBjb21tZW50ZGl2bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWxpc3QgbGknKTtcclxuICAgICAgICAgIGNvbnN0IGNvbW1lbnRzdG90YWwgPSB0b3RhbGNvbW1lbnRzKGNvbW1lbnRkaXZsaXN0KTtcclxuICAgICAgICAgIGNvdW50LnRleHRDb250ZW50ID0gYENvbW1lbnRzKCR7Y29tbWVudHN0b3RhbH0pYDtcclxuICAgICAgICAgIGlucHV0bmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgaW5wdXR0ZXh0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSW5wdXRzIHNob3VsZCBub3QgYmUgZW1wdHknO1xyXG4gICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpO1xyXG4gICAgICAgICAgY29uc3QgY291bnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcclxuICAgICAgICAgIGNvbW1lbnRDb3VudGVyW2luZGV4XSArPSArMTtcclxuICAgICAgICAgIGNvbW1lbnR0ZXh0LmZvckVhY2goKGNvbW1lbnRzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGlzdFtpbmRleF0gPD0gMSkge1xyXG4gICAgICAgICAgICAgIGNvdW50cy50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtsaXN0Lmxlbmd0aH0pYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb3VudHMudGV4dENvbnRlbnQgPSAnQ29tbWVudHMgKDApJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21tZW50Q291bnRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlrZXRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS10ZXh0Jyk7XHJcbiAgY29uc3QgbGlrZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XHJcbiAgbXlwcm9taXNlYi50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGxpa2VzbnVtID0gYXBpLmxpa2VzKHJlc3VsdCk7XHJcbiAgICBsaWtlc2NvdW50ZXIgPSBsaWtlc251bTtcclxuICAgIGxpa2V0ZXh0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChsaWtlc251bVtpbmRleF0gPD0gMSkge1xyXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc251bVtpbmRleF19IGxpa2VgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc251bVtpbmRleF19IGxpa2VzYDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsaWtlYnV0dG9uLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYXBpLnBvc3RsaWtlKGxpa2VzdXJsLCBpbmRleCk7XHJcbiAgICAgICAgbGlrZXNjb3VudGVyW2luZGV4XSArPSArMTtcclxuICAgICAgICBsaWtldGV4dC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxpa2VzbnVtW2luZGV4XSA8PSAxKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc2NvdW50ZXJbaW5kZXhdfSBsaWtlYDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc2NvdW50ZXJbaW5kZXhdfSBsaWtlc2A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCBnZXRtb3ZpZSA9IChyZXN1bHQsIHBvcHVwLCBpbmRleCkgPT4ge1xyXG4gIHJlc3VsdCA9IHJlc3VsdFtpbmRleF07XHJcbiAgcG9wdXAuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJtb2RhbC1wb3AtdXAtJHtyZXN1bHQuaWR9XCIgY2xhc3M9XCJtb2RhbC1wb3AtdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udC1wb3AtdXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gIDxidXR0b24gZGF0YS1pZD0nJHtyZXN1bHQuaWR9JyBjbGFzcz1cImNsb3NlLWJ1dHRvblwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtb2RhbC1wb3AtaW1nXCIgc3JjPVwiJHtyZXN1bHQuaW1hZ2Uub3JpZ2luYWx9XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+JHtyZXN1bHQubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UHJlbWllcmVkOiAke3Jlc3VsdC5wcmVtaWVyZWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlR5cGU6ICR7cmVzdWx0LnR5cGV9PC9wPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UnVudGltZTogJHtyZXN1bHQucnVudGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TGFuZ3VhZ2U6ICR7cmVzdWx0Lmxhbmd1YWdlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29tbWVudHNwXCI+Y29tbWVudHMoPC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudC1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9bWVzc2FnZT48L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJhZGRjb21cIj5BZGQgY29tbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgY2xhc3M9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnNpZ2h0XCIgY2xhc3M9XCJpbnNpZ2h0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIiByZXF1aXJlZD48L3RleHRhcmVhPjxicj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiYWRkbmV3XCIgY2xhc3M9XCJhZGRuZXctYnRuXCI+Q29tbWVudDwvcD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICByZXR1cm4gcG9wdXA7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAoY29tbWVudHVybCwgaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goY29tbWVudHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBgJHtpZH1gLFxyXG4gICAgICB1c2VybmFtZTogYCR7dXNlcm5hbWV9YCxcclxuICAgICAgY29tbWVudDogYCR7Y29tbWVudH1gLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRjb21tZW50cyA9IGFzeW5jIChjb21tZW50cywgaW5kZXgpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c30ke2luZGV4fWApO1xyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IHRvdGFsY29tbWVudHMgPSAoY29tbWVudHMpID0+IHtcclxuICBjb21tZW50cyA9IGNvbW1lbnRzLmxlbmd0aDtcclxuICByZXR1cm4gY29tbWVudHM7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldG1vdmllLCBwb3N0Q29tbWVudHMsIGdldGNvbW1lbnRzLCB0b3RhbGNvbW1lbnRzLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==