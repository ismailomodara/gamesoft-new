import Vue from "vue";
import Vuex from "vuex";
import admin from "./modules/admin";
import user from "./modules/user"
Vue.use(Vuex);

const ifInProduction = process.env.NODE_ENV === "production";

const store = new Vuex.Store({
  modules: {
    admin,
    user
  },
  strict: ifInProduction
});

export default store;
