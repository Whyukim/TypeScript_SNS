"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducer/post.ts":
/*!*************************!*\
  !*** ./reducer/post.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; }\n/* harmony export */ });\nconst ADD_POST = \"ADD_POST\";\nconst initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: \"hello\"\n            },\n            content: \"첫번째 게시글 #해시태그 #익스프레스\",\n            Images: [\n                {\n                    src: \"https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg\"\n                }\n            ],\n            Comments: [\n                {\n                    user: {\n                        nickname: \"neor\"\n                    },\n                    content: \"신기하다\"\n                },\n                {\n                    user: {\n                        nickname: \"babvo\"\n                    },\n                    content: \"허허\"\n                }\n            ]\n        }\n    ],\n    imagePaths: [],\n    postAdded: false\n};\nconst addPost = {\n    type: ADD_POST\n};\nconst dummyPost = {\n    id: 2,\n    content: \"더미데이터입니다.\",\n    User: {\n        id: 1,\n        nickname: \"화이팅\"\n    },\n    Images: [],\n    Comments: []\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case ADD_POST:\n            return {\n                ...state,\n                mainPosts: [\n                    dummyPost,\n                    ...state.mainPosts\n                ],\n                postAdded: true\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyL3Bvc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVc7QUEwQ2pCLE1BQU1DLGVBQTBCO0lBQzlCQyxXQUFXO1FBQ1Q7WUFDRUMsSUFBSTtZQUNKQyxNQUFNO2dCQUNKRCxJQUFJO2dCQUNKRSxVQUFVO1lBQ1o7WUFDQUMsU0FBUztZQUNUQyxRQUFRO2dCQUNOO29CQUNFQyxLQUFLO2dCQUNQO2FBT0Q7WUFDREMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTt3QkFDSkwsVUFBVTtvQkFDWjtvQkFDQUMsU0FBUztnQkFDWDtnQkFDQTtvQkFDRUksTUFBTTt3QkFDSkwsVUFBVTtvQkFDWjtvQkFDQUMsU0FBUztnQkFDWDthQUNEO1FBQ0g7S0FDRDtJQUNESyxZQUFZLEVBQUU7SUFDZEMsV0FBVyxLQUFLO0FBQ2xCO0FBTU8sTUFBTUMsVUFBVTtJQUNyQkMsTUFBTWQ7QUFDUixFQUFFO0FBRUYsTUFBTWUsWUFBWTtJQUNoQlosSUFBSTtJQUNKRyxTQUFTO0lBQ1RGLE1BQU07UUFDSkQsSUFBSTtRQUNKRSxVQUFVO0lBQ1o7SUFDQUUsUUFBUSxFQUFFO0lBQ1ZFLFVBQVUsRUFBRTtBQUNkO0FBSUEsTUFBTU8sVUFBVSxXQUFxRDtRQUFwREMseUVBQVFoQixjQUFjaUI7SUFDckMsT0FBUUEsT0FBT0osSUFBSTtRQUNqQixLQUFLZDtZQUNILE9BQU87Z0JBQ0wsR0FBR2lCLEtBQUs7Z0JBQ1JmLFdBQVc7b0JBQUNhO3VCQUFjRSxNQUFNZixTQUFTO2lCQUFDO2dCQUMxQ1UsV0FBVyxJQUFJO1lBQ2pCO1FBQ0Y7WUFDRSxPQUFPSztJQUNYO0FBQ0Y7QUFFQSwrREFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2VyL3Bvc3QudHM/YjhjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zdFN0YXRlQ2hpbGQge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgfTtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgSW1hZ2VzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogc3RyaW5nO1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IHN0cmluZztcclxuICAgIH1cclxuICBdO1xyXG4gIENvbW1lbnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcclxuICAgICAgfTtcclxuICAgICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zdFN0YXRlIHtcclxuICBtYWluUG9zdHM6IHBvc3RTdGF0ZUNoaWxkW107XHJcbiAgaW1hZ2VQYXRoczogQXJyYXk8c3RyaW5nPjtcclxuICBwb3N0QWRkZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogcG9zdFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcImhlbGxvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZGltZy5kb25nYS5jb20vdWdjL0NEQi9TSElORE9OR0EvQXJ0aWNsZS81Zi85YS80Yy9mNi81ZjlhNGNmNjE1Y2ZkMjczOGRlNi5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIHNyYzogXCJodHRwczovL21ibG9ndGh1bWItcGhpbmYucHN0YXRpYy5uZXQvTWpBeE9EQXhNRE5mTkRBZy9NREF4TlRFME9UWXlOVEE1TmpVMC51NWNVOWduQWRNSEs0dUFtZjU0Z05HYktaaWcwV29JaUNLQUQycUNhRGYwZy55enhOdXdGeHRlTXNGOXdYN1EwTTRRcXVjQkNGNklOeWN6THNqb0t5Q0R3Zy5KUEVHLnlnMTEzOTgvMC5qcGc/dHlwZT13ODAwXCIsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICBzcmM6IFwiaHR0cHM6Ly93Lm5hbXUubGEvcy8zMDRkNzFlODhjZWYyMzc1MTQ4Y2E1YWQwMDRlN2E3MWE2OWE4NDQzMzU1Nzg3NzY5NmU4OGZjYjkxNGRkNmJkNThlODQzMGRiNzE0MjMyNzM4NDdhZWY0MTg1MzQyOTExMjA3NmQ5M2Q0ZThhOGRkN2M2MGRhNTZiZDQwMTg1YWI3NDgyNDQ4NDljOWY5NTMwOGEwMGQ0YWM4N2NhZjQxYTA3OGExN2VmNzkwNTU4NGVlM2JmZTU2NjRkNmJjMjIxZDhjNjFhZDFjZjIzNTVlZjMxMmNhNDkwYzU1ZDEwYlwiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJuZW9yXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLsi6DquLDtlZjri6RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiYmFidm9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIu2XiO2XiFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUG9zdFJlcXVlc3RBY3Rpb24ge1xyXG4gIHR5cGU6IHR5cGVvZiBBRERfUE9TVDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgdHlwZTogQUREX1BPU1QsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgaWQ6IDIsXHJcbiAgY29udGVudDogXCLrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuXCIsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLtmZTsnbTtjIVcIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxudHlwZSBQb3N0UmVkdWNlckFjdGlvbiA9IEFkZFBvc3RSZXF1ZXN0QWN0aW9uO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQb3N0UmVkdWNlckFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiQUREX1BPU1QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInVzZXIiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducer/post.ts\n"));

/***/ })

});