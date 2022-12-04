import {
  ADD_POST_TO_ME,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_POST_OF_ME,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from "../reducers/user";

export interface meState {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  Posts: { id: number }[];
  Followers: { id: number }[];
  Followings: { id: number }[];
}

export interface userState {
  loadUserLoading: boolean; // 유저 정보 가져오기 시도중
  loadUserDone: boolean;
  loadUserError: null;
  followLoading: boolean; // 팔로우 시도중
  followDone: boolean;
  followError: null;
  unfollowLoading: boolean; // 언팔로우 시도중
  unfollowDone: boolean;
  unfollowError: null;
  logInLoading: boolean; // 로그인 시도중
  logInDone: boolean;
  logInError: null;
  logOutLoading: boolean; // 로그아웃 시도중
  logOutDone: boolean;
  logOutError: null;
  signUpLoading: boolean; // 회원가입 시도중
  signUpDone: boolean;
  signUpError: null;
  changeNicknameLoading: boolean; // 닉네임 변경 시도중
  changeNicknameDone: boolean;
  changeNicknameError: null;
  me: meState | null;
  signUpData: object;
  loginData: object;
}

export interface loginData {
  [key: string]: string;
}

export interface LoadMyInfoRequestAction {
  type: typeof LOAD_MY_INFO_REQUEST;
}
export interface LoadMyInfoSuccessction {
  type: typeof LOAD_MY_INFO_SUCCESS;
  data: any;
}
export interface LoadMyInfoFailureAction {
  error: null;
  type: typeof LOAD_MY_INFO_FAILURE;
}

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
}
export interface LogInSuccessction {
  type: typeof LOG_IN_SUCCESS;
  data: meState;
}
export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: any;
}

export interface LogOutRequestAction {
  type: typeof LOG_OUT_REQUEST;
}
export interface LogOutSuccessAction {
  type: typeof LOG_OUT_SUCCESS;
}
export interface LogOutFailureAction {
  type: typeof LOG_OUT_FAILURE;
  error: any;
}

export interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
}
export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}
export interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  error: any;
}

export interface ChangeNicknameRequestAction {
  type: typeof CHANGE_NICKNAME_REQUEST;
}
export interface ChangeNicknameSuccessAction {
  type: typeof CHANGE_NICKNAME_SUCCESS;
}
export interface ChangeNicknameFailureAction {
  type: typeof CHANGE_NICKNAME_FAILURE;
  error: any;
}

export interface AddPostToMeAction {
  type: typeof ADD_POST_TO_ME;
  data: any;
}
export interface RemovePostOfMeAction {
  type: typeof REMOVE_POST_OF_ME;
  data: any;
}

export interface FollowRequestAction {
  type: typeof FOLLOW_REQUEST;
}
export interface FollowSuccessAction {
  type: typeof FOLLOW_SUCCESS;
  data: number;
}
export interface FollowFailureAction {
  type: typeof FOLLOW_FAILURE;
  error: any;
}

export interface UnFollowRequestAction {
  type: typeof UNFOLLOW_REQUEST;
}
export interface UnFollowSuccessAction {
  type: typeof UNFOLLOW_SUCCESS;
  data: number;
}
export interface UnFollowFailureAction {
  type: typeof UNFOLLOW_FAILURE;
  error: any;
}

export type UserReducerAction =
  | LogInRequestAction
  | LogInSuccessction
  | LogInFailureAction
  | LogOutRequestAction
  | LogOutSuccessAction
  | LogOutFailureAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | ChangeNicknameRequestAction
  | ChangeNicknameSuccessAction
  | ChangeNicknameFailureAction
  | AddPostToMeAction
  | RemovePostOfMeAction
  | FollowRequestAction
  | FollowSuccessAction
  | FollowFailureAction
  | UnFollowRequestAction
  | UnFollowSuccessAction
  | UnFollowFailureAction
  | LoadMyInfoRequestAction
  | LoadMyInfoSuccessction
  | LoadMyInfoFailureAction;
