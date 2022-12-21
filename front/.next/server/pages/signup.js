"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 1626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5707);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(648);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5529);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2243);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__]);
([_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const signup = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    signUpLoading,
    signUpDone,
    signUpError,
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: termError,
    1: setTermError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("");
  const [nickname, onChangeNickName] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("");
  const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (me && me?.id) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default().replace("/");
    }
  }, [me, me?.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default().replace("/");
    }
  }, [signUpDone]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }

    if (!term) {
      setTermError(true);
      return;
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__/* .SIGN_UP_REQUEST */ .pK,
      data: {
        email,
        password,
        nickname
      }
    });
  }, [email, nickname, password, passwordCheck, term]);
  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeTerm = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("title", {
          children: "\uD68C\uC6D0\uAC00\uC785 | twitter"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
        onFinish: onSubmit,
        style: {
          padding: 10
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("label", {
            htmlFor: "user-email",
            children: "\uC774\uBA54\uC77C"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            name: "user-email",
            value: email,
            type: "email",
            required: true,
            onChange: onChangeEmail
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("label", {
            htmlFor: "user-nickname",
            children: "\uB2C9\uB124\uC784"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            name: "user-nickname",
            value: nickname,
            required: true,
            onChange: onChangeNickName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("label", {
            htmlFor: "user-password",
            children: "\uBE44\uBC00\uBC88\uD638"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            name: "user-password",
            type: "password",
            value: password,
            required: true,
            onChange: onChangePassword
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("label", {
            htmlFor: "user-password-check",
            children: "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            name: "user-password-check",
            type: "password",
            value: passwordCheck,
            required: true,
            onChange: onChangePasswordCheck
          }), passwordError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            style: {
              color: "red"
            },
            children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
            name: "user-term",
            checked: term,
            onChange: onChangeTerm,
            children: "\uC81C\uB85C\uCD08 \uB9D0\uC744 \uC798 \uB4E4\uC744 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."
          }), termError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            style: {
              color: "red"
            },
            children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          style: {
            marginTop: 10
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
            type: "primary",
            htmlType: "submit",
            loading: signUpLoading,
            children: "\uAC00\uC785\uD558\uAE30"
          })
        })]
      })]
    })
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = ""; // 프론트 서버에서 쿠기가 공유되는 문제

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__/* .LOAD_MY_INFO_REQUEST */ .qq
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_10__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 7481:
/***/ ((module) => {

module.exports = require("faker");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,243,707], () => (__webpack_exec__(1626)));
module.exports = __webpack_exports__;

})();