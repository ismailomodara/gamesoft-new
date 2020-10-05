import * as mutations from "../../../store/mutation-types";
import * as actions from "../../../store/action-types";
import auth from "../../../controllers/auth";
import store from "../../index";

export default {
  [actions.LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      auth
        .login(payload)
        .then(response => {
          const res = response.data.response
          const token = response.headers['x-auth-token']
          if (!res.error) {
            context.commit('USER', res.data)
            context.commit('TOKEN', token)
            context.commit('AUTHENTICATED', true)
            localStorage.setItem('gamesoft-token', token)
            localStorage.setItem('gamesoft-state', this.state)
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  [actions.LOGOUT](context) {
    return new Promise(() => {
      const defaultState = JSON.parse(
        localStorage.getItem("gamesoft-state")
      );

      localStorage.removeItem("gamesoft-token");

      store.replaceState(defaultState);
      context.commit(mutations.AUTHENTICATED, false);
    });
  }
};
