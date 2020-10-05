import * as types from "../../mutation-types";

export default {
  [types.CLUSTERS](state, { page, clusters }) {
    state.clusters[page] = {};
    state.clusters[page] = clusters;
  },
  [types.CLUSTERS_LIST](state, clusters_list) {
    state.clusters_list = clusters_list;
  }
};
