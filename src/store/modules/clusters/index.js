import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  clusters: {},
  clusters_list: []
});

export default {
  state,
  getters,
  actions,
  mutations
};
