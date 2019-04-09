import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Home from './views/Home';
import Form from './components/common/nav1/Form';
import Table from './components/common/nav1/Table';
import Page4 from './components/common/nav2/Page4';
import Page5 from './components/common/nav2/Page5';
import Page6 from './components/common/nav3/Page6';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register.vue'),
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
          { path: '/table', component: Table, name: 'Table' },
          { path: '/form', component: Form, name: 'Form' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'fa fa-id-card-o',
      children: [
          { path: '/page4', component: Page4, name: '页面4' },
          { path: '/page5', component: Page5, name: '页面5' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'fa fa-address-card',
      leaf: true,//只有一个节点
      children: [
          { path: '/page6', component: Page6, name: '导航三' }
      ]
    }
  ],
  mode: 'history'
});
