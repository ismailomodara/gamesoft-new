import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  user_authenticated: !!localStorage.getItem("gamesoft-user-token"),
  user: JSON.parse(localStorage.getItem("gamesoft-user"))
});

export default {
  state,
  getters,
  actions,
  mutations
};
