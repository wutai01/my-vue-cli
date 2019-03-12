import Vue from 'vue';
import Router from 'vue-router';
import Default from '@/layouts/default.vue';
import Error404 from '@/layouts/404.vue';
import Power401 from '@/layouts/401.vue';

import helloWord from '@/views/helloWorld/index.vue';
import testPage1 from '@/views/testPage1/index.vue';
import testPage2 from '@/views/testPage2/index.vue';
Vue.use(Router);
const config = new Router({
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [{
        path: '401',
        name: 'Power401',
        component: Power401
      }, {
        path: '',
        name: 'hello',
        component: helloWord
      }, {
        path: 'test/page1',
        name: 'testPage1',
        component: testPage1
      }, {
        path: 'test/page2',
        name: 'testPage2',
        component: testPage2
      }]
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404
    }
  ]
});
// config.beforeEach((to, from, next) => {
//   axios.get('/AdminLTE/dist/version.json?_=' + Math.random()).then(response => {
//     if (process.env.VERSION !== response.version) {
//       MessageBox.confirm('系统版本有更新,点击确认加载最新,或按【CTRL + F5】!', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         location.reload();
//       }).catch(() => {
//         MessageBox({
//           type: 'info',
//           message: '已取消'
//         });
//       });
//       return;
//     }
//     next();
//   }, (error) => {
//     console.log(error);
//     next();
//   }).catch((err) => {
//     console.log(err);
//   });
// });
export default config;
