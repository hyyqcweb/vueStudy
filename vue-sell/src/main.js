import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/css/reset.css';
import './common/css/index.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
