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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst FollowList = (param)=>{\n    let { header , data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n        style: {\n            marginBottom: 20\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: header\n        }, void 0, false, void 0, void 0),\n        loadMore: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\",\n                margin: \"10px 0\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"더보기\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        bordered: true,\n        dataSource: data,\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                style: {\n                    marginTop: 20\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.StopOutlined, {}, \"stop\", false, void 0, void 0)\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {\n                        description: item.nickname\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNQO0FBQ1I7QUFXbEMsTUFBTUssYUFBNEIsU0FBc0I7UUFBckIsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUU7SUFDakQscUJBQ0UsOERBQUNKLHNDQUFJQTtRQUNISyxPQUFPO1lBQUVDLGNBQWM7UUFBRztRQUMxQkMsTUFBTTtZQUFFQyxRQUFRO1lBQUdDLElBQUk7WUFBR0MsSUFBSTtRQUFFO1FBQ2hDQyxNQUFLO1FBQ0xSLHNCQUFRLDhEQUFDUztzQkFBS1Q7O1FBQ2RVLHdCQUNFLDhEQUFDRDtZQUFJUCxPQUFPO2dCQUFFUyxXQUFXO2dCQUFVQyxRQUFRO1lBQVM7c0JBQ2xELDRFQUFDakIsd0NBQU1BOzBCQUFDOzs7UUFHWmtCLFFBQVE7UUFDUkMsWUFBWWI7UUFDWmMsWUFBWSxDQUFDQyxxQkFDWCw4REFBQ25CLDJDQUFTO2dCQUFDSyxPQUFPO29CQUFFZ0IsV0FBVztnQkFBRzswQkFDaEMsNEVBQUN0QixzQ0FBSUE7b0JBQUN1QixTQUFTO3NDQUFDLDhEQUFDekIsMkRBQVlBLE1BQUs7cUJBQVU7OEJBQzFDLDRFQUFDRSwyQ0FBUzt3QkFBQ3lCLGFBQWFMLEtBQUtNLFFBQVE7Ozs7Ozs7OztBQU1qRDtLQXZCTXZCO0FBeUJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sbG93TGlzdC50c3g/MDAwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG5pY2tuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHNEYXRhIGV4dGVuZHMgUHJvcHMge1xyXG4gIGhlYWRlcjogc3RyaW5nO1xyXG4gIGRhdGE6IFByb3BzW107XHJcbn1cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3Q6IEZDPFByb3BzRGF0YT4gPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdFxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDMgfX1cclxuICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICBsb2FkTW9yZT17XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIxMHB4IDBcIiB9fT5cclxuICAgICAgICAgIDxCdXR0b24+642U67O06riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgYm9yZGVyZWRcclxuICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgID48L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJTdG9wT3V0bGluZWQiLCJCdXR0b24iLCJDYXJkIiwiTGlzdCIsIlJlYWN0IiwiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdyaWQiLCJndXR0ZXIiLCJ4cyIsIm1kIiwic2l6ZSIsImRpdiIsImxvYWRNb3JlIiwidGV4dEFsaWduIiwibWFyZ2luIiwiYm9yZGVyZWQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIml0ZW0iLCJJdGVtIiwibWFyZ2luVG9wIiwiYWN0aW9ucyIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.tsx\n"));

/***/ })

});