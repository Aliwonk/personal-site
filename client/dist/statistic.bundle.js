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

/***/ "./js/modules/ajax.jsx":
/*!*****************************!*\
  !*** ./js/modules/ajax.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendDataXHR\": () => (/* binding */ sendDataXHR),\n/* harmony export */   \"getDataFetch\": () => (/* binding */ getDataFetch),\n/* harmony export */   \"sendDataFetch\": () => (/* binding */ sendDataFetch),\n/* harmony export */   \"deleteDataFetch\": () => (/* binding */ deleteDataFetch)\n/* harmony export */ });\n// XHR\nfunction sendDataXHR(URL, data) {\n  var setReqHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    name: 'Content-Type',\n    value: 'application/json'\n  };\n  var callback = arguments.length > 3 ? arguments[3] : undefined;\n  var xhr = new XMLHttpRequest();\n\n  xhr.upload.onload = function () {\n    return callback(null);\n  };\n\n  xhr.upload.onerror = function () {\n    return callback(new Error('XHR post fail'));\n  };\n\n  xhr.open('POST', URL, true);\n  xhr.setRequestHeader(setReqHeader.name, setReqHeader.value);\n  xhr.send(data);\n}\n; // END XHR\n// FETCH\n\nfunction getDataFetch(URL) {\n  return fetch(URL);\n}\n;\nfunction sendDataFetch(URL, headers, data) {\n  fetch(URL, {\n    method: 'POST',\n    headers: headers,\n    body: data\n  });\n}\n;\nfunction deleteDataFetch(URL, headers) {\n  return fetch(URL, {\n    method: 'DELETE',\n    headers: headers\n  });\n}\n; // END FETCH\n\n//# sourceURL=webpack:///./js/modules/ajax.jsx?");

/***/ }),

/***/ "./js/modules/statistic.js":
/*!*********************************!*\
  !*** ./js/modules/statistic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.jsx */ \"./js/modules/ajax.jsx\");\n\n\nuserInfo();\n\n// INFORMATION ABOUT USER\nfunction userInfo() {\n    // GET IP USER\n    fetch('https://api.db-ip.com/v2/free/self').then(function (res) {\n        return res.json();\n    }).then(function (result) {\n        var date = new Date();\n        var data = {\n            statistic: {\n                date: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(),\n                time: date.getHours() + ':' + date.getMinutes(),\n                timezone: date.getTimezoneOffset() / -60,\n                pathname: window.location.pathname,\n                referrer: document.referrer,\n                fullInfo: result\n            }\n        };\n\n        // SEND DATA ON SERVER\n        (0,_ajax_jsx__WEBPACK_IMPORTED_MODULE_0__.sendDataFetch)('/', { 'Content-Type': 'application/json' }, JSON.stringify(data));\n    });\n\n    // SEND DATA ON SERVE\n};\n\n//# sourceURL=webpack:///./js/modules/statistic.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/modules/statistic.js");
/******/ 	
/******/ })()
;