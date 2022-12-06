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
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
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

export interface postCommentState {
  User: {
    id: number;
    nickname: string;
  };
  content: string;
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

export interface postStateChild {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  RetWeetId: null;
  Images: [];
  Comments: any[];
  Likers: postLikersState[];
  User: {
    id: number;
    email: string;
    nickname: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
  Retweet: any;
  RetweetId: number;
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

export interface LoadPostRequestAction {
  type: typeof LOAD_POSTS_REQUEST;
}
export interface LoadPostSuccesstAction {
  type: typeof LOAD_POSTS_SUCCESS;
  data: any;
}
export interface LoadPostFailureAction {
  type: typeof LOAD_POSTS_FAILURE;
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
  | LoadPostRequestAction
  | LoadPostSuccesstAction
  | LoadPostFailureAction
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
  | RemoveImagesAction;
