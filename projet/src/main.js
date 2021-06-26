import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/offcanvas'
// import 'bootstrap-icons/icons/bootstrap-icons.svg'
import {IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// import Admin from './components/dashboard-admin/Admin.vue'
// import Colaboradores from './components/dashboard-admin/Colaboradores.vue'
// import Despesas from './components/dashboard-admin/Despesas.vue'
// import Encomendas from './components/dashboard-admin/Encomendas.vue'

Vue.use(IconsPlugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')