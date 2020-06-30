import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SkillBar from 'vue-skill-bar'
import 'ant-design-vue/dist/antd.css'

Vue.component('skill-bar', SkillBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
