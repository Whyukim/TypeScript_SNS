import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../reducers/post";

export interface postCommentState {
  User: {
    id: number;
    nickname: string;
  };
  content: string;
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
  User: {
    id: number;
    email: string;
    nickname: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface postState {
  mainPosts: postStateChild[];
  imagePaths: [];
  hasMorePosts: boolean;
  loadPostsLoading: boolean;
  loadPostsDone: boolean;
  loadPostsError: null;
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: null;
  removePostLoading: boolean;
  removePostDone: boolean;
  removePostError: null;
  addCommentLoading: boolean;
  addCommentDone: boolean;
  addCommentError: null;
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
  data: number;
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
  | LoadPostFailureAction;
