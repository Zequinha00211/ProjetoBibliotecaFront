import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Conf } from './conf';
import localization from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';


import 'font-awesome/css/font-awesome.min.css'
import '@/assets/css/inspinia.css'
import '@/assets/css/sst.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'iview/dist/styles/iview.css';
import 'jquerykeyframes'
import 'metismenu'
import 'metismenu/dist/metisMenu.css'
import 'animate.css/animate.min.css'

import 'jquery-slimscroll'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import 'devextreme-intl';
import { format } from 'date-fns';

localization.loadMessages(ptMessages);
localization.locale(navigator.language || navigator.browserLanguage)

Vue.router = router
Vue.config.productionTip = false
new Conf()
  .requests()
  .auth()
  .iView();

Date.prototype.toJSON = function () {
  return format(this, "YYYY-MM-DDTHH:mm:ss.ms");
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
