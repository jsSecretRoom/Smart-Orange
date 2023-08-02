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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/slider */ \"./src/js/module/slider.js\");\n/* harmony import */ var _module_tabbsAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/tabbsAnimation */ \"./src/js/module/tabbsAnimation.js\");\n/* harmony import */ var _module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/scrollAnimation */ \"./src/js/module/scrollAnimation.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    (0,_module_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.left-arrov', '.right-arrov', '.bilding-img', '.slid');\r\n    (0,_module_tabbsAnimation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.category', '.category-button', '.category-list');\r\n\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.info-kompany-block');\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.nav-tabs');\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.project-naim');\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.bilding-img');\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.plans'); \r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('form');\r\n    (0,_module_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.foto-block');\r\n});\n\n//# sourceURL=webpack://smart-orange/./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/scrollAnimation.js":
/*!******************************************!*\
  !*** ./src/js/module/scrollAnimation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction scrollAnimation(selector){\r\n    const scrollBlock = document.querySelectorAll(selector);\r\n    \r\n    function animateBlocks() {\r\n        scrollBlock.forEach(block => {\r\n            const blockTop = block.getBoundingClientRect().top;\r\n            const windowHeight = window.innerHeight;\r\n            \r\n            if (blockTop < windowHeight) {\r\n                block.classList.add('animate');\r\n            }\r\n        });\r\n    }\r\n\r\n    animateBlocks();\r\n\r\n    window.addEventListener('scroll', animateBlocks);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAnimation);\r\n\r\n\r\n\n\n//# sourceURL=webpack://smart-orange/./src/js/module/scrollAnimation.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderSwiper(buttonLeft, buttonRight, carousel, slides) {\r\n    const leftButtons = document.querySelectorAll(buttonLeft);\r\n    const rightButtons = document.querySelectorAll(buttonRight);\r\n\r\n    function slideToNext(container) {\r\n        const slideItems = container.querySelectorAll(slides);\r\n        const slideWidth = slideItems[0].offsetWidth;\r\n\r\n        container.style.transition = 'transform 0.5s ease';\r\n        container.style.transform = `translateX(-${slideWidth}px)`;\r\n\r\n        setTimeout(function() {\r\n            container.appendChild(slideItems[0]);\r\n            container.style.transition = 'none';\r\n            container.style.transform = 'translateX(0)';\r\n        }, 500);\r\n    }\r\n\r\n    function slideToPrev(container) {\r\n        const slideItems = container.querySelectorAll(slides);\r\n        const slideWidth = slideItems[0].offsetWidth;\r\n\r\n        const lastSlide = slideItems[slideItems.length - 1];\r\n        container.insertBefore(lastSlide, slideItems[0]);\r\n\r\n        container.style.transition = 'none';\r\n        container.style.transform = `translateX(-${slideWidth}px`;\r\n\r\n        setTimeout(function() {\r\n            container.style.transition = 'transform 0.5s ease';\r\n            container.style.transform = 'translateX(0)';\r\n        }, 50);\r\n    }\r\n\r\n    function addClickListener(buttons, callback) {\r\n        buttons.forEach((button) => {\r\n            button.addEventListener('click', () => {\r\n                const section = button.closest('.slider-section');\r\n                const container = section.querySelector(carousel);\r\n                callback(container);\r\n            });\r\n        });\r\n    }\r\n\r\n    addClickListener(leftButtons, slideToPrev);\r\n    addClickListener(rightButtons, slideToNext);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSwiper);\r\n\n\n//# sourceURL=webpack://smart-orange/./src/js/module/slider.js?");

/***/ }),

/***/ "./src/js/module/tabbsAnimation.js":
/*!*****************************************!*\
  !*** ./src/js/module/tabbsAnimation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setupDropdownMenus(category, categoryButton, categoryList) {\r\n    const categorySellector = document.querySelectorAll(category);\r\n    categorySellector.forEach(oneCategory => {\r\n        let button = oneCategory.querySelector(categoryButton);\r\n        let listSelector = oneCategory.querySelector(categoryList);\r\n\r\n        function toggleDropdown() {\r\n            console.log('click');\r\n            listSelector.classList.toggle('show');\r\n        }\r\n\r\n        button.addEventListener('click', toggleDropdown);\r\n        \r\n       \r\n        window.addEventListener('DOMContentLoaded', function() {\r\n            const windowWidth = window.innerWidth;\r\n            if (windowWidth > 1076) {\r\n                listSelector.classList.toggle('show');\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupDropdownMenus);\n\n//# sourceURL=webpack://smart-orange/./src/js/module/tabbsAnimation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;