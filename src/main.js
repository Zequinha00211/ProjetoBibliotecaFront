import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {Conf} from './conf';


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

Vue.router = router
Vue.config.productionTip = false
new Conf()
  .requests()
  .auth()
  .iView()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
