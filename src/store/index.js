import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginShow: false
}
const mutations = {
  changeLoginShow (state) {
    state.loginShow = !state.loginShow
  }
}
const actions = {
  changeLoginShow (context) {
    context.commit('changeLoginShow')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
