"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostImages.tsx":
/*!***********************************!*\
  !*** ./components/PostImages.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PostImages = (param)=>{\n    let { images  } = param;\n    _s();\n    const [showImagesZoome, setShowImagesZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setShowImagesZoom(true);\n    }, []);\n    if (images.length === 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                src: images[0].src,\n                alt: images[0].src,\n                onClick: onZoom\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\PostImages.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    } else if (images.length === 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    width: \"50%\",\n                    role: \"presentation\",\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\PostImages.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    width: \"50%\",\n                    role: \"presentation\",\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\PostImages.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"구현중...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\PostImages.tsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PostImages, \"Cq71VPVjogQjo+PapH4WFAVlgiA=\");\n_c = PostImages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXlEO0FBUXpELE1BQU1HLGFBQXdCLFNBQWdCO1FBQWYsRUFBRUMsT0FBTSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLGlCQUFpQkMsa0JBQWtCLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFFM0QsTUFBTUssU0FBU04sa0RBQVdBLENBQUMsSUFBTTtRQUMvQkssa0JBQWtCLElBQUk7SUFDeEIsR0FBRyxFQUFFO0lBRUwsSUFBSUYsT0FBT0ksTUFBTSxLQUFLLEdBQUc7UUFDdkIscUJBQ0U7c0JBQ0UsNEVBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxLQUFLUCxNQUFNLENBQUMsRUFBRSxDQUFDTyxHQUFHO2dCQUNsQkMsS0FBS1IsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sR0FBRztnQkFDbEJFLFNBQVNOOzs7Ozs7O0lBSWpCLE9BQU8sSUFBSUgsT0FBT0ksTUFBTSxLQUFLLEdBQUc7UUFDOUIscUJBQ0U7OzhCQUNFLDhEQUFDQztvQkFDQ0ssT0FBTTtvQkFDTkosTUFBSztvQkFDTEMsS0FBS1AsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sR0FBRztvQkFDbEJDLEtBQUtSLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7b0JBQ2xCRSxTQUFTTjs7Ozs7OzhCQUVYLDhEQUFDRTtvQkFDQ0ssT0FBTTtvQkFDTkosTUFBSztvQkFDTEMsS0FBS1AsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sR0FBRztvQkFDbEJDLEtBQUtSLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7b0JBQ2xCRSxTQUFTTjs7Ozs7Ozs7SUFJakIsQ0FBQztJQUVELHFCQUFPLDhEQUFDUTtrQkFBSTs7Ozs7O0FBQ2Q7R0F4Q01aO0tBQUFBO0FBMENOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy50c3g/Y2QxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpbWFnZXM6IHtcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gIH1bXTtcclxufVxyXG5cclxuY29uc3QgUG9zdEltYWdlczogRkM8UHJvcHM+ID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0ltYWdlc1pvb21lLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2Puq1rO2YhOykkS4uLjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwic2hvd0ltYWdlc1pvb21lIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJsZW5ndGgiLCJpbWciLCJyb2xlIiwic3JjIiwiYWx0Iiwib25DbGljayIsIndpZHRoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostImages.tsx\n"));

/***/ })

});