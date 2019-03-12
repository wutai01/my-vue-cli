
import Vue from 'vue';
import router from '@/router/index.js';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import '@/assets/css/base.scss';
import LayoutBase from '@/layouts/base.vue';
import store from '@/store/index.js';
// 自定义的主题引入，主题配置 https://elementui.github.io/theme-chalk-preview/#/zh-CN
import '@/assets/theme/index.css';

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(LayoutBase)
});
