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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FollowList = (param)=>{\n    let { header , data  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const onClickUnFollow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>()=>{\n            if (header === \"팔로잉\") {\n                dispatch({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_REQUEST,\n                    data: id\n                });\n            } else {\n                dispatch({\n                    type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.REMOVE_FOLLOWER_REQUEST,\n                    data: id\n                });\n            }\n        }, []);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 35,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List, {\n        style: {\n            marginBottom: 20\n        },\n        grid: {\n            gutter: 4,\n            xs: 2,\n            md: 3\n        },\n        size: \"small\",\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: header\n        }, void 0, false, void 0, void 0),\n        loadMore: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\",\n                margin: \"10px 0\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                children: \"더보기\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        bordered: true,\n        dataSource: data,\n        renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item, {\n                style: {\n                    marginTop: 20\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.StopOutlined, {}, \"stop\", false, void 0, void 0)\n                    ],\n                    onClick: onClickUnFollow(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                        description: item.nickname\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\FollowList.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FollowList, \"8nYlJmoucaxyWpcgFuAyuYAa1oA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFpRDtBQUNQO0FBQ0s7QUFDTDtBQUNtQztBQVU3RSxNQUFNUyxhQUF3QixTQUFzQjtRQUFyQixFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRTs7SUFDN0MsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCLE1BQU1PLGtCQUFrQlIsa0RBQVdBLENBQ2pDLENBQUNTLEtBQU8sSUFBTTtZQUNaLElBQUlKLFdBQVcsT0FBTztnQkFDcEJFLFNBQVM7b0JBQ1BHLE1BQU1QLDREQUFnQkE7b0JBQ3RCRyxNQUFNRztnQkFDUjtZQUNGLE9BQU87Z0JBQ0xGLFNBQVM7b0JBQ1BHLE1BQU1SLG1FQUF1QkE7b0JBQzdCSSxNQUFNRztnQkFDUjtZQUVGLENBQUM7UUFDSCxHQUNBLEVBQUU7SUFHSixJQUFJLENBQUNILE1BQU0scUJBQU8sOERBQUNLO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0UsOERBQUNiLHNDQUFJQTtRQUNIYyxPQUFPO1lBQUVDLGNBQWM7UUFBRztRQUMxQkMsTUFBTTtZQUFFQyxRQUFRO1lBQUdDLElBQUk7WUFBR0MsSUFBSTtRQUFFO1FBQ2hDQyxNQUFLO1FBQ0xiLHNCQUFRLDhEQUFDTTtzQkFBS047O1FBQ2RjLHdCQUNFLDhEQUFDUjtZQUFJQyxPQUFPO2dCQUFFUSxXQUFXO2dCQUFVQyxRQUFRO1lBQVM7c0JBQ2xELDRFQUFDekIsd0NBQU1BOzBCQUFDOzs7UUFHWjBCLFFBQVE7UUFDUkMsWUFBWWpCO1FBQ1prQixZQUFZLENBQUNDLHFCQUNYLDhEQUFDM0IsMkNBQVM7Z0JBQUNjLE9BQU87b0JBQUVlLFdBQVc7Z0JBQUc7MEJBQ2hDLDRFQUFDOUIsc0NBQUlBO29CQUNIK0IsU0FBUztzQ0FBQyw4REFBQ2pDLDJEQUFZQSxNQUFLO3FCQUFVO29CQUN0Q2tDLFNBQVNyQixnQkFBZ0JpQixLQUFLaEIsRUFBRTs4QkFFaEMsNEVBQUNaLDJDQUFTO3dCQUFDa0MsYUFBYU4sS0FBS08sUUFBUTs7Ozs7Ozs7O0FBTWpEO0dBOUNNNUI7O1FBQ2FILG9EQUFXQTs7O0tBRHhCRztBQWdETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QudHN4PzAwMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoZWFkZXI6IHN0cmluZztcclxuICBkYXRhOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmlja25hbWU6IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3Q6IEZDPFByb3BzPiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uQ2xpY2tVbkZvbGxvdyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGlkKSA9PiAoKSA9PiB7XHJcbiAgICAgIGlmIChoZWFkZXIgPT09IFwi7YyU66Gc7J6JXCIpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5oZWxsbzwvZGl2PjtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgbG9hZE1vcmU9e1xyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uPuuNlOuztOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIGJvcmRlcmVkXHJcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX1cclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1VuRm9sbG93KGl0ZW0uaWQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgPjwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcclxuIl0sIm5hbWVzIjpbIlN0b3BPdXRsaW5lZCIsIkJ1dHRvbiIsIkNhcmQiLCJMaXN0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZURpc3BhdGNoIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsIm9uQ2xpY2tVbkZvbGxvdyIsImlkIiwidHlwZSIsImRpdiIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiZ3JpZCIsImd1dHRlciIsInhzIiwibWQiLCJzaXplIiwibG9hZE1vcmUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJhY3Rpb25zIiwib25DbGljayIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.tsx\n"));

/***/ })

});