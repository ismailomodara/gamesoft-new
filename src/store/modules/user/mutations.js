import * as types from "../../mutation-types";

export default {
  [types.USER_AUTHENTICATED](state, user_authenticated) {
    state.user_authenticated = user_authenticated;
  },

  [types.USER](state, user) {
    state.user = { ...user };
  }
};
