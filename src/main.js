import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vee-validate.js";

//  IMPORT SCSS FILES
import "./scss/mainStyle.scss";

//BOOTSTRAP && JQUERY && POPPER.JS RENDERING
import("jquery");
import("bootstrap");
import("popper.js");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
