import Vue from "vue";
import Vuex from "vuex";

import Coffee from "./modules/Coffee";
import Auth from "./modules/Auth";
import Notification from "./modules/Notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Coffee,
    Auth,
    Notification
  }
});
