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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorSchemeCollection)\n/* harmony export */ });\n\n\nclass ColorSchemeCollection {\n    constructor() {\n      this.colorSchemes = [\n        [\"Halloween\", \"orange\", \"black\"],\n        [\"Christmas\", \"red\", \"green\"],\n        [\"Valentines\", \"pink\", \"red\"],\n        [\"St. Patricks Day\", \"#099441\", \"#60A830\"]\n      ];\n    }\n  \n    getColorSchemes() {\n      return this.colorSchemes;\n    }\n  \n    getColorScheme(index) {\n      return this.colorSchemes[index];\n    }\n  }\n  \n\n\n\n\n//# sourceURL=webpack:///./src/colorSchemeCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colorSchemeCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSchemeCollection.js */ \"./src/colorSchemeCollection.js\");\n\n\n\nconst colorSchemesCollection = new _colorSchemeCollection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log('sd',colorSchemesCollection);\n\n  var alternateSteps = anime({\n    targets:'.demo-wrapper',\n    translateX: 250,\n    direction: 'alternate',\n    loop: true,\n    easing: 'steps(5)',\n    autoplay: false,\n  })\n  // document.querySelector('.circle').onclick = alternateSteps.play;\n  // document.querySelector('.circle').onclick = alternateSteps.pause;\n\n\n\n anime({\n    targets: '.animation-keyframes-demo',\n    // autoplay: false,\n    keyframes: [\n      {translateY: -40},\n      {translateX: 50},\n      {translateY: 40},\n      {translateX: 0},\n      {translateY: 0}\n    ],\n    duration: 4000,\n    easing: 'easeOutElastic(1, .8)',\n    loop: true\n  })\n\n\n\n\n//===================================================LIGHTBULB SECTION================================================//\n//====================================================================================================================//\n\n//Creating lightbulbs\n  var lightBulb;\n  function createLightbulbs() {\n    lightBulb = document.createElement('div');\n    lightBulb.className = \"container__lightbulb\";\n  }\n\n\n  //Appends the lightbulbs dynamically\n  function appendLightbulbs() {\n    var lightsContainer = document.getElementsByClassName(\"container--lightbulbs\")[0];\n    for (var i=0; i<100; i++) {\n      createLightbulbs();\n      lightsContainer.append(lightBulb);\n    }\n  }\n  appendLightbulbs();\n\n\n\n//==============================================CONTROL PANEL BTNS SECTION=============================================//\n//=====================================================================================================================//\n\n  //Adding event listeners for color buttons\n  function changeLightColors([...colors]) {\n    var lightBulbs = Array.from(document.getElementsByClassName(\"container__lightbulb\"));\n    for (var i = 0; i < lightBulbs.length; i++) {\n      lightBulbs[i].style.borderTopColor = colors[i % colors.length];\n    }\n  }\n\n  //Creating buttons for control panel\n  function createColorBtns(array, onClick) {\n    const button = document.createElement('button');\n    button.innerText = array[0];\n    button.className = \"button button-color\";\n    button.value = array;\n    button.addEventListener('click', onClick);\n    return button;\n  }\n\n\n\n  const colorChangeEvent = () => {\n    var array = event.target.value;\n    var newArray = array.split(\",\")\n    //Use the spread operator to copy the array\n    var itemInstance = [...newArray];\n    itemInstance.shift();\n    changeLightColors(itemInstance);\n  };\n\n\n\n  var colorSchemes = [[\"Halloween\", \"orange\", \"black\"], [\"Christmas\", \"red\", \"green\"], [\"Valentines\", \"pink\", \"red\"], [\"St. Patricks Day\", \"#099441\", \"#60A830\"]];\n  colorSchemes.forEach(scheme=> {\n    var colorSection = document.getElementsByClassName(\"container--colors\")[0];\n    const button = createColorBtns(scheme, colorChangeEvent);\n    colorSection.append(button);\n  })\n\n\n\n\n  var motionSection = document.getElementsByClassName(\"container--motions\")[0];\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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