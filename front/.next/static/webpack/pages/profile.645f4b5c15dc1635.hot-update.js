"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/FollowList.tsx":
/*!***********************************!*\
  !*** ./components/FollowList.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst FollowList = (param)=>{\n    let { header , data  } = param;\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 13,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n        style: {\n            marginBottom: 20\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: header\n        }, void 0, false, void 0, void 0),\n        loadMore: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\",\n                margin: \"10px 0\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"더보기\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        bordered: true,\n        dataSource: data,\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                style: {\n                    marginTop: 20\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.StopOutlined, {}, \"stop\", false, void 0, void 0)\n                    ],\n                    onClick: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {\n                        description: item.nickname\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNQO0FBQ1I7QUFTbEMsTUFBTUssYUFBd0IsU0FBc0I7UUFBckIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUU7SUFDN0MsSUFBSSxDQUFDQSxNQUFNLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3ZCLHFCQUNFLDhEQUFDTCxzQ0FBSUE7UUFDSE0sT0FBTztZQUFFQyxjQUFjO1FBQUc7UUFDMUJDLE1BQU07WUFBRUMsUUFBUTtZQUFHQyxJQUFJO1lBQUdDLElBQUk7UUFBRTtRQUNoQ0MsTUFBSztRQUNMVCxzQkFBUSw4REFBQ0U7c0JBQUtGOztRQUNkVSx3QkFDRSw4REFBQ1I7WUFBSUMsT0FBTztnQkFBRVEsV0FBVztnQkFBVUMsUUFBUTtZQUFTO3NCQUNsRCw0RUFBQ2pCLHdDQUFNQTswQkFBQzs7O1FBR1prQixRQUFRO1FBQ1JDLFlBQVliO1FBQ1pjLFlBQVksQ0FBQ0MscUJBQ1gsOERBQUNuQiwyQ0FBUztnQkFBQ00sT0FBTztvQkFBRWUsV0FBVztnQkFBRzswQkFDaEMsNEVBQUN0QixzQ0FBSUE7b0JBQUN1QixTQUFTO3NDQUFDLDhEQUFDekIsMkRBQVlBLE1BQUs7cUJBQVU7b0JBQUUwQixPQUFPOzhCQUNuRCw0RUFBQ3hCLDJDQUFTO3dCQUFDMEIsYUFBYU4sS0FBS08sUUFBUTs7Ozs7Ozs7O0FBTWpEO0tBeEJNeEI7QUEwQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LnRzeD8wMDBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgZGF0YToge1xyXG4gICAgbmlja25hbWU6IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3Q6IEZDPFByb3BzPiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5oZWxsbzwvZGl2PjtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgbG9hZE1vcmU9e1xyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uPuuNlOuztOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIGJvcmRlcmVkXHJcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0gb25DbGljaz5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgID48L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJTdG9wT3V0bGluZWQiLCJCdXR0b24iLCJDYXJkIiwiTGlzdCIsIlJlYWN0IiwiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdyaWQiLCJndXR0ZXIiLCJ4cyIsIm1kIiwic2l6ZSIsImxvYWRNb3JlIiwidGV4dEFsaWduIiwibWFyZ2luIiwiYm9yZGVyZWQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIml0ZW0iLCJJdGVtIiwibWFyZ2luVG9wIiwiYWN0aW9ucyIsIm9uQ2xpY2siLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJuaWNrbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.tsx\n"));

/***/ })

});