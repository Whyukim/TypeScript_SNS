import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";
import { userState } from "../typings/user";
import { postState } from "../typings/post";

export interface reducerType {
  user: userState;
  post: postState;
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
