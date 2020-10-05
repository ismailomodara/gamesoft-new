import * as mutations from "../../../store/mutation-types";
import * as actions from "../../../store/action-types";
import admin from "../../../controllers/admin";
import store from "../../index";

export default {
  [actions.ADMIN_LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      admin
        .login(payload)
        .then(response => {
          const res = response.data.response
          const token = response.headers['x-auth-token']
          if (!res.error) {
            context.commit(mutations.ADMIN, res.data)
            localStorage.setItem('gamesoft-admin-token', token)
            localStorage.setItem('gamesoft-admin', JSON.stringify(res.data))
            localStorage.setItem(
                "gamesoft-admin-state",
                JSON.stringify(store.state)
            );
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  [actions.ADMIN_LOGOUT](context) {
    return new Promise(() => {
      const defaultState = JSON.parse(
        localStorage.getItem("gamesoft-admin-state")
      );

      localStorage.removeItem("gamesoft-admin-token");
      localStorage.removeItem("gamesoft-admin");

      store.replaceState(defaultState);
      context.commit(mutations.ADMIN_AUTHENTICATED, false);
    });
  }
};
