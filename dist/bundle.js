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

/***/ "./src/colorSchemeCollection.js":
/*!**************************************!*\
  !*** ./src/colorSchemeCollection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorSchemeCollection)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar ColorSchemeCollection = /*#__PURE__*/function () {\n  function ColorSchemeCollection() {\n    _classCallCheck(this, ColorSchemeCollection);\n    this.colorSchemes = [[\"Halloween\", \"orange\", \"black\"], [\"Christmas\", \"red\", \"green\"], [\"Valentines\", \"pink\", \"red\"], [\"St. Patricks Day\", \"#099441\", \"#60A830\"]];\n  }\n  _createClass(ColorSchemeCollection, [{\n    key: \"getColorSchemes\",\n    value: function getColorSchemes() {\n      return this.colorSchemes;\n    }\n  }, {\n    key: \"getColorScheme\",\n    value: function getColorScheme(index) {\n      return this.colorSchemes[index];\n    }\n  }]);\n  return ColorSchemeCollection;\n}(); // Create an instance of the ColorSchemeCollection class\n\nvar colorSchemesCollection = new ColorSchemeCollection();\n\n// Accessing the color schemes\nconsole.log(colorSchemesCollection.getColorSchemes()); // Entire color schemes array\nconsole.log(colorSchemesCollection.getColorScheme(0)); // [\"Halloween\", \"orange\", \"black\"]\nconsole.log(colorSchemesCollection.getColorScheme(1)); // [\"Christmas\", \"red\", \"green\"]\nconsole.log(colorSchemesCollection.getColorScheme(2)); // [\"Valentines\", \"pink\", \"red\"]\nconsole.log(colorSchemesCollection.getColorScheme(3)); // [\"St. Patricks Day\", \"#099441\", \"#60A830\"]\n\n//# sourceURL=webpack://portfolio-project-colorify-app/./src/colorSchemeCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colorSchemeCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSchemeCollection.js */ \"./src/colorSchemeCollection.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar colorSchemesCollection = new _colorSchemeCollection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log('sd', colorSchemesCollection);\nvar alternateSteps = anime({\n  targets: '.demo-wrapper',\n  translateX: 250,\n  direction: 'alternate',\n  loop: true,\n  easing: 'steps(5)',\n  autoplay: false\n});\n// document.querySelector('.circle').onclick = alternateSteps.play;\n// document.querySelector('.circle').onclick = alternateSteps.pause;\n\nanime({\n  targets: '.animation-keyframes-demo',\n  // autoplay: false,\n  keyframes: [{\n    translateY: -40\n  }, {\n    translateX: 50\n  }, {\n    translateY: 40\n  }, {\n    translateX: 0\n  }, {\n    translateY: 0\n  }],\n  duration: 4000,\n  easing: 'easeOutElastic(1, .8)',\n  loop: true\n});\n\n//===================================================LIGHTBULB SECTION================================================//\n//====================================================================================================================//\n\n//Creating lightbulbs\nvar lightBulb;\nfunction createLightbulbs() {\n  lightBulb = document.createElement('div');\n  lightBulb.className = \"container__lightbulb\";\n}\n\n//Appends the lightbulbs dynamically\nfunction appendLightbulbs() {\n  var lightsContainer = document.getElementsByClassName(\"container--lightbulbs\")[0];\n  for (var i = 0; i < 100; i++) {\n    createLightbulbs();\n    lightsContainer.append(lightBulb);\n  }\n}\nappendLightbulbs();\n\n//==============================================CONTROL PANEL BTNS SECTION=============================================//\n//=====================================================================================================================//\n\n//Adding event listeners for color buttons\nfunction changeLightColors(_ref) {\n  var _ref2 = _toArray(_ref),\n    colors = _ref2.slice(0);\n  var lightBulbs = Array.from(document.getElementsByClassName(\"container__lightbulb\"));\n  for (var i = 0; i < lightBulbs.length; i++) {\n    lightBulbs[i].style.borderTopColor = colors[i % colors.length];\n  }\n}\n\n//Creating buttons for control panel\nfunction createColorBtns(array, onClick) {\n  var button = document.createElement('button');\n  button.innerText = array[0];\n  button.className = \"button button-color\";\n  button.value = array;\n  button.addEventListener('click', onClick);\n  return button;\n}\nvar colorChangeEvent = function colorChangeEvent() {\n  var array = event.target.value;\n  var newArray = array.split(\",\");\n  //Use the spread operator to copy the array\n  var itemInstance = _toConsumableArray(newArray);\n  itemInstance.shift();\n  changeLightColors(itemInstance);\n};\nvar colorSchemes = [[\"Halloween\", \"orange\", \"black\"], [\"Christmas\", \"red\", \"green\"], [\"Valentines\", \"pink\", \"red\"], [\"St. Patricks Day\", \"#099441\", \"#60A830\"]];\ncolorSchemes.forEach(function (scheme) {\n  var colorSection = document.getElementsByClassName(\"container--colors\")[0];\n  var button = createColorBtns(scheme, colorChangeEvent);\n  colorSection.append(button);\n});\nvar motionSection = document.getElementsByClassName(\"container--motions\")[0];\n\n//# sourceURL=webpack://portfolio-project-colorify-app/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;