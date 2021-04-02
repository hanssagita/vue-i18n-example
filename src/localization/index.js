import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import ID from './id'
import EN from './en'
import JP from './jp'
import CN from './cn'

export default new VueI18n({
  locale: 'EN', // set locale
  messages:{
    ID,
    EN,
    JP,
    CN
  }, // set locale messages
})
