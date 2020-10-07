import Vue from "vue";
import dates from "./dates";
import image from "./image";
import numbers from "./numbers"
import status from "./status";
import support from "./support";

Vue.mixin(dates);
Vue.mixin(image);
Vue.mixin(numbers);
Vue.mixin(status);
Vue.mixin(support);
