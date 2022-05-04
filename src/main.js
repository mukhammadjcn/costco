import Vue from "vue";
import App from "./App.vue";
import Paginate from "vuejs-paginate";
import LottieAnimation from "lottie-web-vue";

Vue.component("page-paginate", Paginate);
Vue.use(LottieAnimation); // add lottie-animation to your global scope
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
