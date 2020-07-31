import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hi, I am coming from the state that is why you can find me in every component with passing props'
  },
  mutations: {
    changeMessageValue (state, message) {
      state.message = message
    }
  },
  actions: {
    changeMessageValue (context, message) {
      context.commit('changeMessageValue', message)
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
})
