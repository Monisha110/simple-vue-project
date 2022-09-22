import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faCaretdown } from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faCaretUp,
  faCaretDown
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
  position: "bottom-right",
  duration: 4000
});

Vue.use(BootstrapVue)
Vue.config.productionTip = false
import router from "@/router/index"
import store from "@/store/index"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
