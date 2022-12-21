"use strict";
exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 1328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const CommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Comment__CommentWrapper",
  componentId: "sc-19j9nkw-0"
})(["display:flex;align-items:center;padding:10px 0;& > div{display:flex;flex-direction:column;justify-content:center;padding-left:10px;& > span{color:rgba(0,0,0,0.45);}& > p{margin:0;padding:0;}}"]);

const Comment = ({
  author,
  avartar,
  content
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CommentWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
      children: avartar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: author
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        children: content
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ 7008:
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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(648);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3796);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_post__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const CommentForm = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user?.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
  const {
    addCommentDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.post);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__/* .ADD_COMMENT_REQUEST */ .Ot,
      data: {
        content: commentText,
        PostId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
      style: {
        position: "relative",
        margin: 0
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input.TextArea, {
        rows: 4,
        value: commentText,
        onChange: onChangeCommentText
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        style: {
          position: "absolute",
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        children: "\uBCF4\uB0B4\uAE30"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2:
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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_3__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FollowButton = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    me,
    followLoading,
    unfollowLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  const isFollowing = me?.Followings.find(v => v.id === post.User.id);
  const onClickButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .UNFOLLOW_REQUEST */ .Bk,
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .FOLLOW_REQUEST */ .U_,
        data: post.User.id
      });
    }
  }, [isFollowing]);
  if (post.User.id === me.id) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? "언팔로우" : "팔로우"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3796);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1328);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7008);
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(257);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3581);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_5__, _CommentForm__WEBPACK_IMPORTED_MODULE_7__, _FollowButton__WEBPACK_IMPORTED_MODULE_8__]);
([_reducers_post__WEBPACK_IMPORTED_MODULE_5__, _CommentForm__WEBPACK_IMPORTED_MODULE_7__, _FollowButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const PostCard = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user.me?.id);
  const liked = post.Likers.find(v => v.id === id);
  const {
    removePostLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const onLike = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!id) return alert("로그인이 필요합니다.");
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .LIKE_POST_REQUEST */ .xD,
      data: post.id
    });
  }, [id]);
  const onUnLike = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!id) return alert("로그인이 필요합니다.");
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .UNLIKE_POST_REQUEST */ .VT,
      data: post.id
    });
  }, [id]);
  const onToggleComment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!id) return alert("로그인이 필요합니다.");
    return setCommentFormOpened(prev => !prev);
  }, [id]);
  const onRemovePost = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!id) return alert("로그인이 필요합니다.");
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .REMOVE_POST_REQUEST */ .HU,
      data: post.id
    });
  }, [id]);
  const onRetweet = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!id) return alert("로그인이 필요합니다.");
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .RETWEET_REQUEST */ .a0,
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
      cover: post.Images.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_PostImages__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        images: post.Images
      }),
      actions: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.RetweetOutlined, {
        onClick: onRetweet
      }, "retweet"), liked ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.HeartTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onUnLike
      }, "headr") : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.HeartOutlined, {
        onClick: onLike
      }, "heart"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.MessageOutlined, {
        onClick: onToggleComment
      }, "message"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button.Group, {
          children: id && post.User.id === Number(id) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              children: "\uC218\uC815"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              danger: true,
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            children: "\uC2E0\uACE0"
          })
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.EllipsisOutlined, {})
      }, "ellipsis")],
      title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,
      extra: id && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        post: post
      }),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        cover: post.Retweet.Images[0] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_PostImages__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          images: post.Retweet.Images
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          style: {
            float: "right"
          },
          children: moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).fromNow(true)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/user/${post.Retweet.User.id}`,
            prefetch: false,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
              children: post.Retweet.User.nickname[0]
            })
          }),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            postData: post.Retweet.content
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          style: {
            float: "right"
          },
          children: moment__WEBPACK_IMPORTED_MODULE_11___default()(post.createdAt).fromNow(true)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/user/${post.User.id}`,
            prefetch: false,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
              children: post.User.nickname[0]
            })
          }),
          title: post.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            postData: post.content
          })
        })]
      })
    }), commentFormOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        post: post
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => {
          console.log(3333333333333, item);
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              author: item.User.nickname,
              avartar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/user/${item.User.id}`,
                prefetch: false,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                  children: item.User.nickname[0]
                })
              }),
              content: item.content
            })
          });
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const PostCardContent = ({
  postData
}) => {
  const reg = /(#[^\s#]+)/g;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    children: postData?.split(reg).map((v, i) => {
      if (v.match(reg)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: `/hashtag/${v.slice(1)}`,
          children: v
        }, i);
      }

      return v;
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardContent);

/***/ }),

/***/ 3581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PostImages)
});

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ImagesZoom/styles.tsx


const Global = (0,external_styled_components_.createGlobalStyle)([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-18vcevl-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = external_styled_components_default().header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-18vcevl-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const SlickWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-18vcevl-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const CloseBtn = external_styled_components_default()(icons_.CloseOutlined).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-18vcevl-3"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const Indicator = external_styled_components_default().div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-18vcevl-4"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const ImgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-18vcevl-5"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ImagesZoom/index.tsx






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Overlay, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Global, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(CloseBtn, {
        onClick: onClose
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(SlickWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), {
          initialSlide: 0,
          beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            })
          }, v.src))
        }), /*#__PURE__*/jsx_runtime_.jsx(Indicator, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [currentSlide + 1, " /", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_ImagesZoom = (ImagesZoom);
;// CONCATENATED MODULE: ./components/PostImages.tsx







const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = (0,external_react_.useState)(false);
  const onZoom = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        style: {
          maxHeight: "200px"
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  } else if (images.length === 2) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        style: {
          width: "50%",
          display: "inline-block"
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        style: {
          width: "50%",
          display: "inline-block"
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        style: {
          width: "50%"
        },
        role: "presentation",
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle"
        },
        onClick: onZoom,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      })]
    }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
      images: images,
      onClose: onClose
    })]
  });
};

/* harmony default export */ const components_PostImages = (PostImages);

/***/ })

};
;