<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ChangeLanguage />
    <Localization :msg="welcomeMessage"/>
  </div>
</template>

<script>
import Localization from './components/Localization.vue'
import ChangeLanguage from './components/ChangeLanguage.vue'

export default {
  name: 'App',
  components: {
    Localization,
    ChangeLanguage
  },
  computed: {
    welcomeMessage () {
      return this.$t('welcomeMessage')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
