const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export interface userState {
  isLoggedIn: boolean;
  user: userState | null;
  signUpDate: object;
  loginData: object;
}

export interface LogInRequestAction {
  type: typeof LOG_IN;
  data: {
    id: string;
    password: string;
  };
}

export interface LogOutRequestAction {
  type: typeof LOG_OUT;
}

export const initialState: userState = {
  isLoggedIn: false,
  user: null,
  signUpDate: {},
  loginData: {},
};

export const loginAction = (data: { id: string; password: string }) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

type UserReducerAction = LogInRequestAction | LogOutRequestAction;

const reducer = (state = initialState, action: UserReducerAction) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
