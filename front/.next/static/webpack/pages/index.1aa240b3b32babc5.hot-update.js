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

/***/ "./components/CommentForm.tsx":
/*!************************************!*\
  !*** ./components/CommentForm.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CommentForm = (param)=>{\n    let { post  } = param;\n    _s();\n    const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var ref, ref1;\n        return (ref = state.user) === null || ref === void 0 ? void 0 : (ref1 = ref.me) === null || ref1 === void 0 ? void 0 : ref1.id;\n    });\n    const [commentText, onChangeCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n    const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        console.log(post.id, commentText);\n    }, [\n        commentText\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {\n        onFinish: onSubmitComment,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.TextArea, {\n                    value: commentText,\n                    onChange: onChangeCommentText,\n                    rows: 4\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    type: \"primary\",\n                    htmlType: \"submit\",\n                    children: \"보내기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CommentForm, \"PptqMkMnW7reCXQEE7qotaIWwp0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyQztBQUNJO0FBQ0w7QUFDRDtBQU96QyxNQUFNTyxjQUF5QixTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUN0QyxNQUFNQyxLQUFLSix3REFBV0EsQ0FBQyxDQUFDSztZQUFVQTtRQUFBQSxPQUFBQSxDQUFBQSxNQUFBQSxNQUFNQyxJQUFJLGNBQVZELGlCQUFBQSxLQUFBQSxJQUFBQSxRQUFBQSxJQUFZRSxrQ0FBWkYsS0FBQUEsU0FBZ0JELEVBQUY7O0lBQ2hELE1BQU0sQ0FBQ0ksYUFBYUMsb0JBQW9CLEdBQUdSLDJEQUFRQSxDQUFDO0lBRXBELE1BQU1TLGtCQUFrQlgsa0RBQVdBLENBQUMsSUFBTTtRQUN4Q1ksUUFBUUMsR0FBRyxDQUFDVCxLQUFLQyxFQUFFLEVBQUVJO0lBQ3ZCLEdBQUc7UUFBQ0E7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1osc0NBQUlBO1FBQUNpQixVQUFVSDtrQkFDZCw0RUFBQ2QsMkNBQVM7OzhCQUNSLDhEQUFDQyxnREFBYztvQkFDYm1CLE9BQU9SO29CQUNQUyxVQUFVUjtvQkFDVlMsTUFBTTs7Ozs7OzhCQUVSLDhEQUFDdkIsd0NBQU1BO29CQUFDd0IsTUFBSztvQkFBVUMsVUFBUzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7R0F0Qk1sQjs7UUFDT0Ysb0RBQVdBO1FBQ3FCQyx1REFBUUE7OztLQUYvQ0M7QUF3Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS50c3g/Y2U1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHBvc3RTdGF0ZUNoaWxkIH0gZnJvbSBcIi4uL3JlZHVjZXIvcG9zdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0OiBwb3N0U3RhdGVDaGlsZDtcclxufVxyXG5cclxuY29uc3QgQ29tbWVudEZvcm06IEZDPFByb3BzPiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyPy5tZT8uaWQpO1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCwgY29tbWVudFRleHQpO1xyXG4gIH0sIFtjb21tZW50VGV4dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIOuztOuCtOq4sFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU2VsZWN0b3IiLCJ1c2VJbnB1dCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImlkIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJvblN1Ym1pdENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2giLCJJdGVtIiwiVGV4dEFyZWEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicm93cyIsInR5cGUiLCJodG1sVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentForm.tsx\n"));

/***/ })

});