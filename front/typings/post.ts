import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  REMOVE_IMAGE,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  RETWEET_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from "../reducers/post";

export interface userState {
  id: number;
  nickname: string;
  content?: string;
  User?: any;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface postCommentState {
  id: number;
  content: string;
  User: {
    id: number;
    nickname: string;
  };
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  PostId: number;
}
export interface postLikersState {
  id: number;
  Like?: {
    createdAt: Date;
    updatedAt: Date;
    PostId: number;
    UserId: number;
  };
}

export interface retweetState {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  RetweetId: number;
  Images: { src: string }[];
  User: userState;
}

export interface postStateChild {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  RetweetId: number;
  Retweet: retweetState;
  Images: { src: string }[];
  Comments: userState[];
  Likers: postLikersState[];
  User: userState;
}

export interface postState {
  mainPosts: postStateChild[];
  imagePaths: string[];
  hasMorePosts: boolean;
  loadPostsLoading: boolean;
  loadPostsDone: boolean;
  loadPostsError: string | null;
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: string | null;
  removePostLoading: boolean;
  removePostDone: boolean;
  removePostError: string | null;
  addCommentLoading: boolean;
  addCommentDone: boolean;
  addCommentError: string | null;
  likePostLoading: boolean;
  likePostDone: boolean;
  likePostError: string | null;
  unLikePostLoading: boolean;
  unLikePostDone: boolean;
  unLikePostError: string | null;
  uploadImagesLoading: boolean;
  uploadImagesDone: boolean;
  uploadImagesError: string | null;
  retweetLoading: boolean;
  retweetDone: boolean;
  retweetError: string | null;
  loadPostLoading: boolean;
  loadPostDone: boolean;
  loadPostError: string | null;
  singlePost: null | postStateChild;
}

export interface AddPostRequestAction {
  type: typeof ADD_POST_REQUEST;
}
export interface AddPostSuccesstAction {
  type: typeof ADD_POST_SUCCESS;
  data: postStateChild;
}
export interface AddPostFailureAction {
  error: any;
  type: typeof ADD_POST_FAILURE;
}

export interface LoadPostRequestAction {
  type: typeof LOAD_POST_REQUEST;
}
export interface LoadPostSuccesstAction {
  type: typeof LOAD_POST_SUCCESS;
  data: postStateChild;
}
export interface LoadPostFailureAction {
  type: typeof LOAD_POST_FAILURE;
  error: any;
}

export interface AddCommentRequestAction {
  type: typeof ADD_COMMENT_REQUEST;
}
export interface AddCommentSuccesstAction {
  type: typeof ADD_COMMENT_SUCCESS;
  data: any;
}
export interface AddCommentFailureAction {
  type: typeof ADD_COMMENT_FAILURE;
  error: any;
}

export interface RemovePostRequestAction {
  type: typeof REMOVE_POST_REQUEST;
}
export interface RemovePostSuccesstAction {
  type: typeof REMOVE_POST_SUCCESS;
  data: {
    PostId: number;
  };
}
export interface RemovePostFailureAction {
  type: typeof REMOVE_POST_FAILURE;
  error: any;
}

export interface LoadPostsRequestAction {
  type: typeof LOAD_POSTS_REQUEST;
}
export interface LoadPostsSuccesstAction {
  type: typeof LOAD_POSTS_SUCCESS;
  data: any;
}
export interface LoadPostsFailureAction {
  type: typeof LOAD_POSTS_FAILURE;
  error: any;
}

export interface LoadUserPostsRequestAction {
  type: typeof LOAD_USER_POSTS_REQUEST;
}
export interface LoadUserPostsSuccesstAction {
  type: typeof LOAD_USER_POSTS_SUCCESS;
  data: any;
}
export interface LoadUserPostsFailureAction {
  type: typeof LOAD_USER_POSTS_FAILURE;
  error: any;
}

export interface LoadHashTagPostsRequestAction {
  type: typeof LOAD_HASHTAG_POSTS_REQUEST;
}
export interface LoadHashTagPostsSuccesstAction {
  type: typeof LOAD_HASHTAG_POSTS_SUCCESS;
  data: any;
}
export interface LoadHashTagPostsFailureAction {
  type: typeof LOAD_HASHTAG_POSTS_FAILURE;
  error: any;
}
export interface LikePostRequestAction {
  type: typeof LIKE_POST_REQUEST;
}
export interface LikePostSuccesstAction {
  type: typeof LIKE_POST_SUCCESS;
  data: any;
}
export interface LikePostFailureAction {
  type: typeof LIKE_POST_FAILURE;
  error: any;
}

export interface UnLikePostRequestAction {
  type: typeof UNLIKE_POST_REQUEST;
}
export interface UnLikePostSuccesstAction {
  type: typeof UNLIKE_POST_SUCCESS;
  data: any;
}
export interface UnLikePostFailureAction {
  type: typeof UNLIKE_POST_FAILURE;
  error: any;
}

export interface RetWeetRequestAction {
  type: typeof RETWEET_REQUEST;
}
export interface RetWeetSuccesstAction {
  type: typeof RETWEET_SUCCESS;
  data: any;
}
export interface RetWeetFailureAction {
  type: typeof RETWEET_FAILURE;
  error: any;
}

export interface UpLoadImagesRequestAction {
  type: typeof UPLOAD_IMAGES_REQUEST;
}
export interface UpLoadImagesSuccesstAction {
  type: typeof UPLOAD_IMAGES_SUCCESS;
  data: any;
}
export interface UpLoadImagesFailureAction {
  type: typeof UPLOAD_IMAGES_FAILURE;
  error: any;
}

export interface RemoveImagesAction {
  type: typeof REMOVE_IMAGE;
  data: number;
}

export type PostReducerAction =
  | AddPostRequestAction
  | AddPostSuccesstAction
  | AddPostFailureAction
  | AddCommentRequestAction
  | AddCommentSuccesstAction
  | AddCommentFailureAction
  | RemovePostRequestAction
  | RemovePostSuccesstAction
  | RemovePostFailureAction
  | LoadPostsRequestAction
  | LoadPostsSuccesstAction
  | LoadPostsFailureAction
  | LikePostRequestAction
  | LikePostSuccesstAction
  | LikePostFailureAction
  | UnLikePostRequestAction
  | UnLikePostSuccesstAction
  | UnLikePostFailureAction
  | RetWeetRequestAction
  | RetWeetSuccesstAction
  | RetWeetFailureAction
  | UpLoadImagesRequestAction
  | UpLoadImagesSuccesstAction
  | UpLoadImagesFailureAction
  | RemoveImagesAction
  | LoadPostRequestAction
  | LoadPostSuccesstAction
  | LoadPostFailureAction
  | LoadUserPostsRequestAction
  | LoadUserPostsSuccesstAction
  | LoadUserPostsFailureAction
  | LoadHashTagPostsRequestAction
  | LoadHashTagPostsSuccesstAction
  | LoadHashTagPostsFailureAction;
