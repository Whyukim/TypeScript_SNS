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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FollowList = (param)=>{\n    let { header , data  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const onClickUnFollow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>()=>{\n            dispatch({\n                type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_REQUEST,\n                data: id\n            });\n        }, []);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 27,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List, {\n        style: {\n            marginBottom: 20\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: header\n        }, void 0, false, void 0, void 0),\n        loadMore: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\",\n                margin: \"10px 0\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                children: \"더보기\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        bordered: true,\n        dataSource: data,\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item, {\n                style: {\n                    marginTop: 20\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.StopOutlined, {}, \"stop\", false, void 0, void 0)\n                    ],\n                    onClick: onClickUnFollow(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                        description: item.nickname\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FollowList, \"8nYlJmoucaxyWpcgFuAyuYAa1oA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFpRDtBQUNQO0FBQ0s7QUFDTDtBQUNVO0FBVXBELE1BQU1RLGFBQXdCLFNBQXNCO1FBQXJCLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFFOztJQUM3QyxNQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIsTUFBTU0sa0JBQWtCUCxrREFBV0EsQ0FDakMsQ0FBQ1EsS0FBTyxJQUFNO1lBQ1pGLFNBQVM7Z0JBQ1BHLE1BQU1QLDREQUFnQkE7Z0JBQ3RCRyxNQUFNRztZQUNSO1FBQ0YsR0FDQSxFQUFFO0lBR0osSUFBSSxDQUFDSCxNQUFNLHFCQUFPLDhEQUFDSztrQkFBSTs7Ozs7O0lBQ3ZCLHFCQUNFLDhEQUFDWixzQ0FBSUE7UUFDSGEsT0FBTztZQUFFQyxjQUFjO1FBQUc7UUFDMUJDLE1BQU07WUFBRUMsUUFBUTtZQUFHQyxJQUFJO1lBQUdDLElBQUk7UUFBRTtRQUNoQ0MsTUFBSztRQUNMYixzQkFBUSw4REFBQ007c0JBQUtOOztRQUNkYyx3QkFDRSw4REFBQ1I7WUFBSUMsT0FBTztnQkFBRVEsV0FBVztnQkFBVUMsUUFBUTtZQUFTO3NCQUNsRCw0RUFBQ3hCLHdDQUFNQTswQkFBQzs7O1FBR1p5QixRQUFRO1FBQ1JDLFlBQVlqQjtRQUNaa0IsWUFBWSxDQUFDQyxxQkFDWCw4REFBQzFCLDJDQUFTO2dCQUFDYSxPQUFPO29CQUFFZSxXQUFXO2dCQUFHOzBCQUNoQyw0RUFBQzdCLHNDQUFJQTtvQkFDSDhCLFNBQVM7c0NBQUMsOERBQUNoQywyREFBWUEsTUFBSztxQkFBVTtvQkFDdENpQyxTQUFTckIsZ0JBQWdCaUIsS0FBS2hCLEVBQUU7OEJBRWhDLDRFQUFDWCwyQ0FBUzt3QkFBQ2lDLGFBQWFOLEtBQUtPLFFBQVE7Ozs7Ozs7OztBQU1qRDtHQXRDTTVCOztRQUNhRixvREFBV0E7OztLQUR4QkU7QUF3Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LnRzeD8wMDBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoZWFkZXI6IHN0cmluZztcclxuICBkYXRhOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmlja25hbWU6IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3Q6IEZDPFByb3BzPiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uQ2xpY2tVbkZvbGxvdyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGlkKSA9PiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+aGVsbG88L2Rpdj47XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0XHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxyXG4gICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAgIGxvYWRNb3JlPXtcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjEwcHggMFwiIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbj7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiAvPl19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tVbkZvbGxvdyhpdGVtLmlkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgID48L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJTdG9wT3V0bGluZWQiLCJCdXR0b24iLCJDYXJkIiwiTGlzdCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VEaXNwYXRjaCIsIlVORk9MTE9XX1JFUVVFU1QiLCJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsImRpc3BhdGNoIiwib25DbGlja1VuRm9sbG93IiwiaWQiLCJ0eXBlIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJncmlkIiwiZ3V0dGVyIiwieHMiLCJtZCIsInNpemUiLCJsb2FkTW9yZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsImJvcmRlcmVkIiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiSXRlbSIsIm1hcmdpblRvcCIsImFjdGlvbnMiLCJvbkNsaWNrIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FollowList.tsx\n"));

/***/ })

});