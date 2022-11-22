import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user, { userState } from "./user";
import post, { postState } from "./post";

export interface reducerType {
  user: userState;
  post: postState;
}

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
