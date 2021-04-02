import Vue from 'vue'
import App from './App.vue'
import i18n from '@/localization'

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
