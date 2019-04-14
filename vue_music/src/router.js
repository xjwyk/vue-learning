import Vue from 'vue';
import Router from 'vue-router';
 
//组件模块
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail.vue';

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/main', name: 'Main', component: Home },
    { path: '/search', name: 'Search', component: Search},
    { path: '/detail', name: 'Detail', component: Detail}
  ],
  mode: "history"
})