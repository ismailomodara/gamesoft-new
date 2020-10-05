import * as mutations from "../../../store/mutation-types";
import * as actions from "../../../store/action-types";
import clusters from "../../../requests/clusters";

export default {
  [actions.GET_CLUSTERS](context, page) {
    return new Promise((resolve, reject) => {
      clusters
        .index(page)
        .then(response => {
          if (response.data.status) {
            context.commit(mutations.CLUSTERS, {
              page,
              clusters: response.data.data
            });
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  [actions.GET_CLUSTERS_LIST](context) {
    return new Promise((resolve, reject) => {
      clusters
        .list()
        .then(response => {
          if (response.data.status) {
            context.commit(mutations.CLUSTERS_LIST, response.data.data);
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
