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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: \"Inter\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 30px;\n    background: linear-gradient(0deg, #A8D8FF 0%, #C7B4FF 100%);\n    min-height: 100vh;\n}\n\n#logo-img {\n    width: 40px;\n}\n\nheader {\n    display: flex;\n    flex-direction: row;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 18px;\n}\n\n#search-box {\n  height: 50px;\n  width: 80%;\n  font-size: 24px;\n  border-radius: 25px;\n  background-color: rgba(218, 219, 228, 0.3);\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 2px solid #dadbe4;\n  outline: none;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n#search-box:focus {\n  border: 2px solid #555;\n  width: 90%;\n}\n\n\n#content {\n  /* Semi-transparent background */\n  background: rgba(255, 255, 255, 0.2); \n  \n  /* The \"frosted glass\" blur effect */\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px); /* For Safari support */\n  \n  /* Glass edges and depth */\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  \n  /* Card sizing (adjust as needed) */\n  padding: 20px;\n  width: 600px;\n\n  color: #1A3C6D\n}\n\n/*\n#loading-screen {\n  color: #8C95A3; /* Soft Slate Blue *\n  font-size: 30px;\n  font-weight: 400; /* Use a thinner weight to make it look \"lighter\" *\n  letter-spacing: 0.2px;\n}*/\n\n#loading-screen {\n  color: #2D3436;\n  font-weight: 400;\n  letter-spacing: -0.5px; /* Tighter spacing makes it look more \"premium\" */\n}\n\n\nbutton {\n  background: #D7C2FF;          /* soft pastel purple */\n  color: #2D3436;        /* deep contrast text */\n  \n  padding: 14px 24px;\n  border-radius: 25px;         /* makes it perfectly round/oval */\n  \n  border: none;\n  font-weight: 300;\n  font-size: 20px;\n  \n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 13%;\n  height: 55px;\n}\n\nbutton:hover {\n  transform: scale(1.05); /* Soft zoom on hover */\n}\n\nbutton:active {\n  transform: scale(0.95); /* Shrinks slightly when clicked */\n  background: #c0a5f5;    /* Darkens the purple slightly for feedback */\n  transition: transform 0.1s ease; /* Makes the \"pop\" feel snappy */\n}\n\nform {\n    display: flex;\n    gap: 6px;\n    width: 600px;\n    align-items: center;\n}\n\nheader {\n    display: flex;\n    color: white;\n    align-items: center;\n}\n\n#settings {\n  display: flex;\n  gap: 3px;\n  font-size: 26px;\n  color: #2D3436\n}\n\n#degF {\n  margin-left: 16px;\n}\n\ninput[type=\"radio\"] {\n  width: 30px;\n  accent-color: #1A3C6D;\n}\n\n#result-img {\n  width: 200px;\n}\n\n#result-temp {\n  font-weight: 700;\n  font-size: 100px;\n}\n\n#location {\n  font-size: 44px;\n}\n\n#result-summary {\n  text-align: center;\n}\n\n.spinner {\n  display: none;\n  width: 30px;\n  height: 30px;\n  border: 4px solid #ccc;\n  border-top-color: #333;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n#err-message {\n  color: red;\n  font-size: 26px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/fetch-weather-data.js"
/*!***********************************!*\
  !*** ./src/fetch-weather-data.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)\n/* harmony export */ });\nasync function fetchWeatherData(locationVal, unitX) {\n    const location = locationVal; // Specify your location here\n    const apiKey = \"5AEDH9XLUNHJSBVWDHVGENLUK\"; // Use your API Key\n    const unitg = unitX;\n    const loadingScreen = document.querySelector(\"#loading-screen\");\n    \n    if (location == \"\") {\n        console.log(\"Location is empty!\");\n        return [900, {}]\n    };\n\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unitg}&key=${apiKey}&contentType=json`;\n    loadingScreen.style.display = \"block\";\n\n    try {\n        const response = await fetch(url);\n        if (!response.ok) {\n            //console.log(response);\n            //throw new Error('Network response was not ok: ' + response.statusText);\n            console.error(`Network response was not ok! status: ${response.status}`);\n            loadingScreen.style.display = \"none\";\n            return [response.status, {}];\n        }\n\n        const weatherData = await response.json();\n        //console.log(\"Weather Data:\", weatherData);\n        loadingScreen.style.display = \"none\";\n        return [response.status, weatherData];\n\n    } catch (error) {\n        console.error(\"Fetching weather data failed:\", error);\n        loadingScreen.style.display = \"none\";\n        return [response.status, {}];\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetch-weather-data.js?\n}");

/***/ },

/***/ "./src/get-location.js"
/*!*****************************!*\
  !*** ./src/get-location.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocation: () => (/* binding */ getLocation)\n/* harmony export */ });\n\n//get location from form\nfunction getLocation() {\n    const searchBox = document.querySelector(\"#search-box\");\n\n    if (searchBox.value === \"\") {\n        //alert(\"No location has been entered. Please enter a valid location.\");\n        console.log(\"No location has been entered. Please enter a valid location.\");\n        return \"\";\n    }\n    return searchBox.value;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/get-location.js?\n}");

/***/ },

/***/ "./src/get-unit.js"
/*!*************************!*\
  !*** ./src/get-unit.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUnit: () => (/* binding */ getUnit)\n/* harmony export */ });\nfunction getUnit() {\n    const unitRadio = document.querySelectorAll(\"#settings input\");\n    let unitX;\n    unitRadio.forEach(radio => {\n        if (radio.checked) unitX = radio.value;\n    });\n    return unitX;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/get-unit.js?\n}");

/***/ },

/***/ "./src/get-weather-icon-url.js"
/*!*************************************!*\
  !*** ./src/get-weather-icon-url.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherIconUrl: () => (/* binding */ getWeatherIconUrl)\n/* harmony export */ });\nfunction getWeatherIconUrl(vcIconName) {\n/**\n * Maps Visual Crossing icon names to OpenWeatherMap icon codes.\n * Visual Crossing provides descriptive names (e.g., 'rain', 'partly-cloudy-day').\n * OpenWeatherMap requires codes (e.g., '10d', '02d').\n */\n    const iconMapping = {\n        'clear-day': '01d',\n        'clear-night': '01n',\n        'partly-cloudy-day': '02d',\n        'partly-cloudy-night': '02n',\n        'cloudy': '03d',\n        'fog': '50d',\n        'wind': '50d', // OWM doesn't have a specific 'wind' icon; 'mist' is a common fallback\n        'rain': '10d',\n        'showers-day': '09d',\n        'showers-night': '09n',\n        'thunder-rain': '11d',\n        'thunder-showers-day': '11d',\n        'thunder-showers-night': '11d',\n        'snow': '13d',\n        'snow-showers-day': '13d',\n        'snow-showers-night': '13d',\n        'sleet': '13d',\n        'hail': '13d'\n    };\n\n    // Default to '01d' (clear day) if the icon name isn't found\n    const owmCode = iconMapping[vcIconName] || '01d';\n\n    // Construct the OWM URL (using @2x for high resolution)\n    return 'https://openweathermap.org/img/wn/' + owmCode + '@2x.png';\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/get-weather-icon-url.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _fetch_weather_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-weather-data.js */ \"./src/fetch-weather-data.js\");\n/* harmony import */ var _get_location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-location.js */ \"./src/get-location.js\");\n/* harmony import */ var _get_unit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-unit.js */ \"./src/get-unit.js\");\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n\n\n\n\n\n\n//self executable async function for display initial view for default location and default unit when website is first opened\n(async () => {\n    const [status, weatherData] = await (0,_fetch_weather_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(\"London\", (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)());\n    (0,_load_page_js__WEBPACK_IMPORTED_MODULE_4__.loadPage)(status, weatherData, (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)());\n\n})(); \n\n//when new location is submitted page should load the new data for new location\nconst searchBtn = document.querySelector(\"#search-btn\");\n\nsearchBtn.onclick = (event) => {\n    event.preventDefault();\n    (async () => {\n        const [status, weatherData] = await (0,_fetch_weather_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)((0,_get_location_js__WEBPACK_IMPORTED_MODULE_2__.getLocation)(), (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)());\n        (0,_load_page_js__WEBPACK_IMPORTED_MODULE_4__.loadPage)(status, weatherData, (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)()); \n    })();\n};\n\n//when unit is changed page should reload with correct unit\nconst unitRadio = document.querySelectorAll(\"#settings input\");\nconst location = document.querySelector(\"#location\");\n\nunitRadio.forEach(radio => {\n    radio.addEventListener('change', (event) => {\n    (async () => {\n        //using the currently displayed location\n        const [status, weatherData] = await (0,_fetch_weather_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(location.textContent, (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)());\n        (0,_load_page_js__WEBPACK_IMPORTED_MODULE_4__.loadPage)(status, weatherData, (0,_get_unit_js__WEBPACK_IMPORTED_MODULE_3__.getUnit)()); \n    })();\n  });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ },

/***/ "./src/load-page.js"
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _get_weather_icon_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather-icon-url.js */ \"./src/get-weather-icon-url.js\");\n\n\nfunction loadPage(status, weatherData, unit) {\n    const resultImg = document.querySelector(\"#result-img\");\n    const location = document.querySelector(\"#location\");\n    const resultTemp = document.querySelector(\"#result-temp\");\n    const resultsmry = document.querySelector(\"#result-summary\");\n    const errMessage = document.querySelector(\"#err-message\");\n\n    let unitx;\n    if (unit == \"metric\") unitx = \"°C\";\n    else if (unit == \"us\") unitx = \"F\";\n    errMessage.textContent = \"\";\n\n    if (status === 200) {\n        resultImg.src = (0,_get_weather_icon_url_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherIconUrl)(weatherData.currentConditions.icon);\n        location.textContent = weatherData.resolvedAddress;\n        resultTemp.textContent = weatherData.currentConditions.temp.toString() + unitx;\n        resultsmry.textContent = weatherData.currentConditions.conditions + \". \" + weatherData.description;\n    } else if (status >= 400 && status < 500) {\n        //alert(\"Location not found! Please check your spelling and try again!\");\n        errMessage.textContent = \"Location not found! Please check your spelling and try again!\";\n    } else if (status == 900) {\n        errMessage.textContent = \"Location is empty! Please enter a location!\";\n    } else {\n        //alert(\"Apologies, something went wrong. Please try again later!\");\n        errMessage.textContent = \"Apologies, something went wrong. Please try again later!\";\n    }\n\n    //clear search field\n    const searchBox = document.querySelector(\"#search-box\");\n    searchBox.value = \"\"; \n\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/load-page.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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