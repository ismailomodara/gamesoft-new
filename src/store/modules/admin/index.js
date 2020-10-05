import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  admin_authenticated: !!localStorage.getItem("gamesoft-admin-token"),
  admin: JSON.parse(localStorage.getItem("gamesoft-admin"))
});

export default {
  state,
  getters,
  actions,
  mutations
};
