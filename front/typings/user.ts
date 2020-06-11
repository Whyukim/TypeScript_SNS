import {
  ADD_POST_TO_ME,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
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
export interface aboutState {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  Posts: number;
  Followings: number;
  Followers: number;
}

export interface userState {
  me: meState | null;
  userInfo: aboutState | null;
  loadMyInfoLoading: boolean; // 유저 정보 가져오기 시도중
  loadMyInfoDone: boolean;
  loadMyInfoError: string | null;
  loadUserLoading: boolean; // 유저 정보 가져오기 시도중
  loadUserDone: boolean;
  loadUserError: string | null;
  followLoading: boolean; // 팔로우 시도중
  followDone: boolean;
  followError: string | null;
  unfollowLoading: boolean; // 언팔로우 시도중
  unfollowDone: boolean;
  unfollowError: string | null;
  logInLoading: boolean; // 로그인 시도중
  logInDone: boolean;
  logInError: string | null;
  logOutLoading: boolean; // 로그아웃 시도중
  logOutDone: boolean;
  logOutError: string | null;
  signUpLoading: boolean; // 회원가입 시도중
  signUpDone: boolean;
  signUpError: string | null;
  changeNicknameLoading: boolean; // 닉네임 변경 시도중
  changeNicknameDone: boolean;
  changeNicknameError: null;
  loadFollowersLoading: boolean; // 팔로워 가져오기 시도중
  loadFollowersDone: boolean;
  loadFollowersError: string | null;
  loadFollowingsLoading: boolean; // 팔로잉 가져오기 시도중
  loadFollowingsDone: boolean;
  loadFollowingsError: string | null;
  removeFollowerLoading: boolean; // 팔로워 삭제 시도중
  removeFollowerDone: boolean;
  removeFollowerError: string | null;
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

export interface LoadUserRequestAction {
  type: typeof LOAD_USER_REQUEST;
}
export interface LoadUserSuccessction {
  type: typeof LOAD_USER_SUCCESS;
  data: any;
}
export interface LoadUserFailureAction {
  error: null;
  type: typeof LOAD_USER_FAILURE;
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
  data: {
    nickname: string;
  };
}
export interface ChangeNicknameFailureAction {
  type: typeof CHANGE_NICKNAME_FAILURE;
  error: any;
}

export interface AddPostToMeAction {
  type: typeof ADD_POST_TO_ME;
  data: number;
}
export interface RemovePostOfMeAction {
  type: typeof REMOVE_POST_OF_ME;
  data: {
    PostId: number;
  };
}

export interface FollowRequestAction {
  type: typeof FOLLOW_REQUEST;
}
export interface FollowSuccessAction {
  type: typeof FOLLOW_SUCCESS;
  data: {
    UserId: number;
  };
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
  data: {
    UserId: number;
  };
}
export interface UnFollowFailureAction {
  type: typeof UNFOLLOW_FAILURE;
  error: any;
}

export interface LoadFollowersRequestAction {
  type: typeof LOAD_FOLLOWERS_REQUEST;
}
export interface LoadFollowersSuccessAction {
  type: typeof LOAD_FOLLOWERS_SUCCESS;
  data: any;
}
export interface LoadFollowersFailureAction {
  type: typeof LOAD_FOLLOWERS_FAILURE;
  error: any;
}

export interface LoadFollowingsRequestAction {
  type: typeof LOAD_FOLLOWINGS_REQUEST;
}
export interface LoadFollowingsSuccessAction {
  type: typeof LOAD_FOLLOWINGS_SUCCESS;
  data: any;
}
export interface LoadFollowingsFailureAction {
  type: typeof LOAD_FOLLOWINGS_FAILURE;
  error: any;
}

export interface RemoveFollowerRequestAction {
  type: typeof REMOVE_FOLLOWER_REQUEST;
}
export interface RemoveFollowerSuccessAction {
  type: typeof REMOVE_FOLLOWER_SUCCESS;
  data: {
    UserId: number;
  };
}
export interface RemoveFollowerFailureAction {
  type: typeof REMOVE_FOLLOWER_FAILURE;
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
  | LoadMyInfoFailureAction
  | LoadFollowersRequestAction
  | LoadFollowersSuccessAction
  | LoadFollowersFailureAction
  | LoadFollowingsRequestAction
  | LoadFollowingsSuccessAction
  | LoadFollowingsFailureAction
  | RemoveFollowerRequestAction
  | RemoveFollowerSuccessAction
  | RemoveFollowerFailureAction
  | LoadUserRequestAction
  | LoadUserSuccessction
  | LoadUserFailureAction;
