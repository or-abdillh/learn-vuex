import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         username: '',
         authErrMsg: '',
         userDetails: {}
      }
   },
   mutations: {
      setUserName(state, value) {
         state.username = value
      },
      setAuthErrMsg(state, msg) {
         state.authErrMsg = msg
      },
      setUserDetails(state, data) {
         state.userDetails = data
      }
   },
   actions: {
      async getUserData({ commit }) {
         const response = await fetch('https://randomuser.me/api/')
         const { results } = await response.json()
         
         commit('setUserDetails', results)
      }
   }
})