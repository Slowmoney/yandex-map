import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import YmapPlugin from 'vue-yandex-maps'
const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
  }
Vue.use(YmapPlugin, settings)
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
