import Vue from 'vue';
import Router from 'vue-router';
 
//组件模块
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Play from './pages/Play';
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    { 
      path: '/rank',
      name: 'rank', 
      component: Home 
    },
    { 
      path: '/recommend',
      name: 'recommend', 
      component: Home
    },
    { 
      path: '/search', 
      name: 'Search', 
      component: Search
    },
    { 
      path: '/recommend/detail', 
      name: 'recommend_detail', 
      component: Detail,
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    { 
      path: '/rank/detail', 
      name: 'rank_detail', 
      component: Detail,
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    { 
      path: '/play', 
      name: 'Play', 
      component: Play
    }
  ],
  mode: "history"
})