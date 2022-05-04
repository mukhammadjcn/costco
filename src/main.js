import Vue from "vue";
import App from "./App.vue";
import Paginate from "vuejs-paginate";
import Toast from "vue-toastification";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
  timeout: 3000,
};

Vue.use(Toast, options);

Vue.component("page-paginate", Paginate);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
