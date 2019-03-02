import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

const isLocal = document.location.hostname === 'localhost';
const isDeveloper = document.cookie.indexOf('is_dev') > -1;

if (isLocal || isDeveloper) {
  window['ga-disable-UA-134225660-1'] = true;
}
