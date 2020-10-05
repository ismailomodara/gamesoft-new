import * as types from "../../mutation-types";

export default {
  [types.ADMIN_AUTHENTICATED](state, admin_authenticated) {
    state.admin_authenticated = admin_authenticated;
  },

  [types.ADMIN](state, admin) {
    state.admin = { ...admin };
  },

  [types.ADMIN_LOGOUT](state, defaultState) {
    Object.assign(state, { defaultState });
  }
};
