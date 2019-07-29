import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire';
import { capitalize } from './filters/filters'

Vue.use(firestorePlugin);
Vue.filter('capitalize', capitalize)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
