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

/***/ "./components/Comment.tsx":
/*!********************************!*\
  !*** ./components/Comment.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n\\n  & > div {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n\\n    & > span {\\n    }\\n\\n    & > p {\\n      margin: 0;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst CommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = CommentWrapper;\nconst Comment = (param)=>{\n    let { author , avartar , content  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                children: avartar\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\Comment.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: author\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\Comment.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\Comment.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\Comment.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\Comment.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c, _c1;\n$RefreshReg$(_c, \"CommentWrapper\");\n$RefreshReg$(_c1, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDVDtBQVE5QixNQUFNRyxpQkFBaUJGLDZEQUFVO0tBQTNCRTtBQWtCTixNQUFNRSxVQUFxQixTQUFrQztRQUFqQyxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDTDs7MEJBQ0MsOERBQUNELHdDQUFNQTswQkFBRUs7Ozs7OzswQkFDVCw4REFBQ0g7O2tDQUNDLDhEQUFDSztrQ0FBTUg7Ozs7OztrQ0FDUCw4REFBQ0k7a0NBQUdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWjtNQVZNSDtBQVlOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudC50c3g/ZjUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgYXZhcnRhcjogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29tbWVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICYgPiBzcGFuIHtcclxuICAgIH1cclxuXHJcbiAgICAmID4gcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50OiBGQzxQcm9wcz4gPSAoeyBhdXRob3IsIGF2YXJ0YXIsIGNvbnRlbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29tbWVudFdyYXBwZXI+XHJcbiAgICAgIDxBdmF0YXI+e2F2YXJ0YXJ9PC9BdmF0YXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+e2F1dGhvcn08L3NwYW4+XHJcbiAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29tbWVudFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkF2YXRhciIsIkNvbW1lbnRXcmFwcGVyIiwiZGl2IiwiQ29tbWVudCIsImF1dGhvciIsImF2YXJ0YXIiLCJjb250ZW50Iiwic3BhbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comment.tsx\n"));

/***/ })

});