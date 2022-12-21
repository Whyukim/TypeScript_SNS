"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FollowList = ({
  header,
  data,
  onClickMore,
  loading
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClickUnFollow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(id => () => {
    if (header === "팔로잉") {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .UNFOLLOW_REQUEST */ .Bk,
        data: id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .REMOVE_FOLLOWER_REQUEST */ .IB,
        data: id
      });
    }
  }, []);
  if (!data) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: "hello"
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      children: header
    }),
    loadMore: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      style: {
        textAlign: "center",
        margin: "10px 0"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: onClickMore,
        loading: loading,
        children: "\uB354\uBCF4\uAE30"
      })
    }),
    bordered: true,
    dataSource: data,
    renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
      style: {
        marginTop: 20
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        actions: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.StopOutlined, {}, "stop")],
        onClick: onClickUnFollow(item.id),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          description: item.nickname
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(648);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_5__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NickNameForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_0__.Form).withConfig({
  displayName: "NickNameEditForm__NickNameForm",
  componentId: "sc-sqv72z-0"
})(["margin-bottom:20px;border:1px solid #d9d9d9;padding:20px;"]);

const NickNameEditForm = () => {
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(me?.nickname || "");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__/* .CHANGE_NICKNAME_REQUEST */ .o,
      data: nickname
    });
  }, [nickname]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(NickNameForm, {
    style: {
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input.Search, {
      value: nickname,
      onChange: onChangeNickname,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815",
      onSearch: onSubmit
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NickNameEditForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5998);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5707);
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6740);
/* harmony import */ var _components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6592);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5529);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2243);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, redux_saga__WEBPACK_IMPORTED_MODULE_5__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__, _components_FollowList__WEBPACK_IMPORTED_MODULE_7__, _components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_8__, _reducers_user__WEBPACK_IMPORTED_MODULE_9__, _store_configureStore__WEBPACK_IMPORTED_MODULE_10__, swr__WEBPACK_IMPORTED_MODULE_11__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, redux_saga__WEBPACK_IMPORTED_MODULE_5__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__, _components_FollowList__WEBPACK_IMPORTED_MODULE_7__, _components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_8__, _reducers_user__WEBPACK_IMPORTED_MODULE_9__, _store_configureStore__WEBPACK_IMPORTED_MODULE_10__, swr__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
  withCredentials: true
}).then(res => res.data);

const profile = () => {
  // const dispatch = useDispatch();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user);
  const {
    0: followersLimit,
    1: setFollowersLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(3);
  const {
    0: followingsLimit,
    1: setFollowingsLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(3);
  const {
    data: followersData,
    error: followersError
  } = (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
  const {
    data: followingsData,
    error: followingsError
  } = (0,swr__WEBPACK_IMPORTED_MODULE_11__["default"])(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
    }
  }, [me && me.id]);
  const loadMoreFollowings = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setFollowingsLimit(prev => prev + 3);
  }, []);
  const loadMoreFollowers = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setFollowersLimit(prev => prev + 3);
  }, []);
  if (!me) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
    children: "\uB0B4\uC815\uBCF4 \uB85C\uB4DC\uC911"
  });

  if (followersError | followingsError) {
    console.error(followersError || followingsError);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      children: "\uD314\uB85C\uC789 \uD314\uB85C\uC6CC \uB85C\uB529\uC911 \uC5D0\uB7EC"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("title", {
        children: "\uD504\uB85C\uD544 | twitter"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_NickNameEditForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingsData && !followingsError
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        header: "\uD314\uB85C\uC6CC",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followersData && !followersError
      })]
    })]
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.Cookie = ""; // 프론트 서버에서 쿠기가 공유되는 문제

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__/* .LOAD_MY_INFO_REQUEST */ .qq
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_5__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,243,707], () => (__webpack_exec__(4158)));
module.exports = __webpack_exports__;

})();