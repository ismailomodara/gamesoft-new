import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "@/assets/css/gs-variable.scss";
import "element-ui/lib/theme-chalk/display.css";
import "@/assets/css/gs-design-system.scss";
import "@/assets/css/gs-icons.css";
import "@/assets/css/gs-main.scss";
import "./mixins";
import "./directives";
import router from "./router";
import store from "./store";
import "./axios";

import DefaultLayout from "./layouts/default"
import AdminLayout from "./layouts/admin"
import UserLayout from "./layouts/user"


Vue.component('default-layout', DefaultLayout)
Vue.component('admin-layout', AdminLayout)
Vue.component('user-layout', UserLayout)

const ifInProduction = process.env.NODE_ENV === "production";
Vue.config.productionTip = ifInProduction;

Vue.config.devtools = !ifInProduction;

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
