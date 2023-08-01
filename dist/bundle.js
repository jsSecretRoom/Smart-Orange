/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function(){\r\n    \r\n    function setupDropdownMenus(buttonSelector, listSelector, tabObject, masivMarket) {\r\n        const categories = document.querySelectorAll(tabObject);\r\n        \r\n        let currentCategory = null;\r\n    \r\n        categories.forEach((category) => {\r\n            const button = category.querySelector(buttonSelector);\r\n            const list = category.querySelector(listSelector);\r\n    \r\n            button.addEventListener('click', () => {\r\n\r\n                categories.forEach((c) => {\r\n                    if (c !== category) {\r\n                        c.querySelector(listSelector).classList.remove('show');\r\n                    }\r\n                });\r\n                list.classList.toggle('show');\r\n                currentCategory = list.classList.contains('show') ? category : null;\r\n                categories.forEach((c) => {\r\n                    if (c !== category) {\r\n                        c.style.display = currentCategory ? 'none' : 'block';\r\n                    }\r\n                });\r\n                if (list.classList.contains('show')) {\r\n                    const listItems = list.querySelectorAll('li');\r\n                    let delay = 0.1;\r\n                    listItems.forEach((item) => {\r\n                        item.style.animationDelay = delay + 's';\r\n                        delay += 0.1;\r\n                    });\r\n                }\r\n            });\r\n        }),\r\n        document.addEventListener('click', (event) => {\r\n        const tabsMarket = document.querySelector(masivMarket);\r\n            if (!event.target.closest(masivMarket) && currentCategory) {\r\n                currentCategory.querySelector(listSelector).classList.remove('show');\r\n                currentCategory = null;\r\n                tabsMarket.querySelectorAll(tabObject).forEach(category => {\r\n                    category.style.display = 'block';\r\n                });\r\n            }\r\n        });\r\n    }\r\n  \r\n    setupDropdownMenus('.category-button', '.category-list', '.category', '.futer-head');\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;