import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/offcanvas'
import 'animate.css/animate.min.css';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.all'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueAxios,axios)
Vue.use(IconsPlugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')