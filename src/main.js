import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "@/plugins"
import "@/layouts"
import "@/assets/css/main.css"
import "@/assets/css/estilo-ahoracado.css"
import "@/assets/css/style.css"
import "@/assets/css/EstilosPaginas.css"

Vue.config.productionTip = false
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

