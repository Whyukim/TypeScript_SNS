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

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.tsx\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.tsx\");\n/* harmony import */ var _components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NickNameEditForm */ \"./components/NickNameEditForm.tsx\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst profile = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.user);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch({\n            type: LOAD_FOLLOWERS_REQUEST\n        });\n        dispatch({\n            type: LOAD_FOLLOWINGS_REQUEST\n        });\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!(me && me.id)) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        }\n    }, [\n        me && me.id\n    ]);\n    if (!me) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"프로필 | twitter\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FollowList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        header: \"팔로잉\",\n                        data: me === null || me === void 0 ? void 0 : me.Followings\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FollowList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        header: \"팔로워\",\n                        data: me === null || me === void 0 ? void 0 : me.Followers\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\pages\\\\profile.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(profile, \"fbnKT8L8lz2gO63V5O/0N0ZqJVA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNJO0FBQ1k7QUFDVTtBQUNQO0FBQ0U7QUFDWTtBQUU3QjtBQUVqQyxNQUFNUyxVQUFjLElBQU07O0lBQ3hCLE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVPLEdBQUUsRUFBRSxHQUFHTix3REFBV0EsQ0FBQyxDQUFDTyxRQUF1QkEsTUFBTUMsSUFBSTtJQUU3RFYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTyxTQUFTO1lBQ1BJLE1BQU1DO1FBQ1I7UUFDQUwsU0FBUztZQUNQSSxNQUFNRTtRQUNSO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBRVEsQ0FBQUEsTUFBTUEsR0FBR00sRUFBRSxHQUFHO1lBQ2xCaEIsdURBQVcsQ0FBQztRQUNkLENBQUM7SUFDSCxHQUFHO1FBQUNVLE1BQU1BLEdBQUdNLEVBQUU7S0FBQztJQUVoQixJQUFJLENBQUNOLElBQUksT0FBTyxJQUFJO0lBQ3BCLHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUlBOzBCQUNILDRFQUFDbUI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDYiw2REFBU0E7O2tDQUNSLDhEQUFDRSxvRUFBZ0JBOzs7OztrQ0FDakIsOERBQUNELDhEQUFVQTt3QkFBQ2EsUUFBTzt3QkFBTUMsTUFBTVYsZUFBQUEsZ0JBQUFBLEtBQUFBLElBQUFBLEdBQUlXLFVBQVU7Ozs7OztrQ0FDN0MsOERBQUNmLDhEQUFVQTt3QkFBQ2EsUUFBTzt3QkFBTUMsTUFBTVYsZUFBQUEsZ0JBQUFBLEtBQUFBLElBQUFBLEdBQUlZLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0dBaENNZDs7UUFDYUwsb0RBQVdBO1FBQ2JDLG9EQUFXQTs7O0FBZ0M1QiwrREFBZUksT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3RcIjtcclxuaW1wb3J0IE5pY2tOYW1lRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja05hbWVFZGl0Rm9ybVwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyVHlwZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge30gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IHByb2ZpbGU6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHJlZHVjZXJUeXBlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7tlITroZztlYQgfCB0d2l0dGVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxOaWNrTmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17bWU/LkZvbGxvd2luZ3N9IC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMXCIgZGF0YT17bWU/LkZvbGxvd2Vyc30gLz5cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJBcHBMYXlvdXQiLCJGb2xsb3dMaXN0IiwiTmlja05hbWVFZGl0Rm9ybSIsInByb2ZpbGUiLCJkaXNwYXRjaCIsIm1lIiwic3RhdGUiLCJ1c2VyIiwidHlwZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsImlkIiwicHVzaCIsInRpdGxlIiwiaGVhZGVyIiwiZGF0YSIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});