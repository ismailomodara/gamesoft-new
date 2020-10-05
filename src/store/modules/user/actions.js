import * as mutations from "../../../store/mutation-types";
import * as actions from "../../../store/action-types";
import user from "../../../controllers/user";
import store from "../../index";

export default {
  [actions.USER_LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      user
        .login(payload)
        .then(response => {
          const res = response.data.response
          const token = response.headers['x-auth-token']
          if (!res.error) {
            context.commit(mutations.ADMIN, res.data)
            localStorage.setItem('gamesoft-user-token', token)
            localStorage.setItem('gamesoft-user', JSON.stringify(res.data))
            localStorage.setItem(
                "gamesoft-user-state",
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

  [actions.USER_LOGOUT](context) {
    return new Promise(() => {
      const defaultState = JSON.parse(
        localStorage.getItem("gamesoft-user-state")
      );

      localStorage.removeItem("gamesoft-user-token");
      localStorage.removeItem("gamesoft-user");

      store.replaceState(defaultState);
      context.commit(mutations.USER_AUTHENTICATED, false);
    });
  }
};
