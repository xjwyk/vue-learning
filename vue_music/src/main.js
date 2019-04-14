import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueLazyload from 'vue-lazyload';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;
const axiosConfig = {
  baseURL: "http://localhost:3000",
}

Vue.prototype.$axios = axios.create(axiosConfig);

Vue.use(VueLazyload);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
