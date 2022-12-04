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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.ts\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CommentForm = (param)=>{\n    let { post  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var ref, ref1;\n        return (ref = state.user) === null || ref === void 0 ? void 0 : (ref1 = ref.me) === null || ref1 === void 0 ? void 0 : ref1.id;\n    });\n    const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n    const { addCommentDone  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.post);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (addCommentDone) {\n            setCommentText(\"\");\n        }\n    }, [\n        addCommentDone\n    ]);\n    const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.ADD_COMMENT_REQUEST,\n            data: {\n                content: commentText,\n                PostId: post.id,\n                userId: id\n            }\n        });\n    }, [\n        commentText,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        onFinish: onSubmitComment,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {\n            style: {\n                position: \"relative\",\n                margin: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.TextArea, {\n                    rows: 4,\n                    value: commentText,\n                    onChange: onChangeCommentText\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    style: {\n                        position: \"absolute\",\n                        right: 0,\n                        bottom: -40,\n                        zIndex: 1\n                    },\n                    type: \"primary\",\n                    htmlType: \"submit\",\n                    children: \"보내기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\home\\\\Desktop\\\\배포\\\\sns\\\\front\\\\components\\\\CommentForm.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CommentForm, \"F+xMtJZqjBcj3TIgkQQPCq9R0wE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDZTtBQUNIO0FBQ2Q7QUFFYztBQU92RCxNQUFNVSxjQUF5QixTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUN0QyxNQUFNQyxXQUFXTix3REFBV0E7SUFDNUIsTUFBTU8sS0FBS04sd0RBQVdBLENBQUMsQ0FBQ087WUFBdUJBO1FBQUFBLE9BQUFBLENBQUFBLE1BQUFBLE1BQU1DLElBQUksY0FBVkQsaUJBQUFBLEtBQUFBLElBQUFBLFFBQUFBLElBQVlFLGtDQUFaRixLQUFBQSxTQUFnQkQsRUFBRjs7SUFDN0QsTUFBTSxDQUFDSSxhQUFhQyxxQkFBcUJDLGVBQWUsR0FBR1gsMkRBQVFBLENBQUM7SUFDcEUsTUFBTSxFQUFFWSxlQUFjLEVBQUUsR0FBR2Isd0RBQVdBLENBQUMsQ0FBQ08sUUFBdUJBLE1BQU1ILElBQUk7SUFFekVOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJZSxnQkFBZ0I7WUFDbEJELGVBQWU7UUFDakIsQ0FBQztJQUNILEdBQUc7UUFBQ0M7S0FBZTtJQUVuQixNQUFNQyxrQkFBa0JqQixrREFBV0EsQ0FBQyxJQUFNO1FBQ3hDUSxTQUFTO1lBQ1BVLE1BQU1iLCtEQUFtQkE7WUFDekJjLE1BQU07Z0JBQUVDLFNBQVNQO2dCQUFhUSxRQUFRZCxLQUFLRSxFQUFFO2dCQUFFYSxRQUFRYjtZQUFHO1FBQzVEO0lBQ0YsR0FBRztRQUFDSTtRQUFhSjtLQUFHO0lBRXBCLHFCQUNFLDhEQUFDWixzQ0FBSUE7UUFBQzBCLFVBQVVOO2tCQUNkLDRFQUFDcEIsMkNBQVM7WUFBQzRCLE9BQU87Z0JBQUVDLFVBQVU7Z0JBQVlDLFFBQVE7WUFBRTs7OEJBQ2xELDhEQUFDN0IsZ0RBQWM7b0JBQ2IrQixNQUFNO29CQUNOQyxPQUFPakI7b0JBQ1BrQixVQUFVakI7Ozs7Ozs4QkFFWiw4REFBQ2xCLHdDQUFNQTtvQkFDTDZCLE9BQU87d0JBQ0xDLFVBQVU7d0JBQ1ZNLE9BQU87d0JBQ1BDLFFBQVEsQ0FBQzt3QkFDVEMsUUFBUTtvQkFDVjtvQkFDQWhCLE1BQUs7b0JBQ0xpQixVQUFTOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBMUNNN0I7O1FBQ2FKLG9EQUFXQTtRQUNqQkMsb0RBQVdBO1FBQ3FDQyx1REFBUUE7UUFDeENELG9EQUFXQTs7O0tBSmxDRztBQTRDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLnRzeD9jZTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgcmVkdWNlclR5cGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IHBvc3RTdGF0ZUNoaWxkIH0gZnJvbSBcIi4uL3R5cGluZ3MvcG9zdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0OiBwb3N0U3RhdGVDaGlsZDtcclxufVxyXG5cclxuY29uc3QgQ29tbWVudEZvcm06IEZDPFByb3BzPiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogcmVkdWNlclR5cGUpID0+IHN0YXRlLnVzZXI/Lm1lPy5pZCk7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCB7IGFkZENvbW1lbnREb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xyXG4gICAgICBzZXRDb21tZW50VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBQb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWQgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IC00MCxcclxuICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDrs7TrgrTquLBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VJbnB1dCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsImlkIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImFkZENvbW1lbnREb25lIiwib25TdWJtaXRDb21tZW50IiwidHlwZSIsImRhdGEiLCJjb250ZW50IiwiUG9zdElkIiwidXNlcklkIiwib25GaW5pc2giLCJJdGVtIiwic3R5bGUiLCJwb3NpdGlvbiIsIm1hcmdpbiIsIlRleHRBcmVhIiwicm93cyIsInZhbHVlIiwib25DaGFuZ2UiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentForm.tsx\n"));

/***/ })

});