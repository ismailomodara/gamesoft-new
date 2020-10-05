import * as types from "../../mutation-types";

export default {
  [types.AUTHENTICATED](state, authenticated) {
    state.authenticated = authenticated;
  },

  [types.USER](state, user) {
    state.user = { ...user };
  },

  [types.GARDENER_DASHBOARD](state, gardener_dashboard) {
    state.gardener_dashboard = gardener_dashboard;
  },

  [types.GROWTH_DASHBOARD](state, growth_dashboard) {
    state.growth_dashboard = growth_dashboard;
  },

  [types.ADMIN_DASHBOARD](state, admin_dashboard) {
    state.admin_dashboard = admin_dashboard;
  },

  [types.TEAM_MEMBERS](state, { page, team_members }) {
    state.team_members[page] = {};
    state.team_members[page] = team_members;
  },

  [types.RESET_AUTH](state, defaultState) {
    Object.assign(state, { defaultState });
  }
};
