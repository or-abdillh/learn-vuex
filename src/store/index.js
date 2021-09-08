import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         username: '',
         likes: 0,
         userDetails: {}
      }
   },
   getters: {
     getUserName(state) {
        return state.username
     },
     getUserDetails(state) {
        return state.userDetails
     },
     getTotalLikes(state) {
        return state.likes
     }
   },
   mutations: {
      setUserName(state, value) {
         state.username = value
      },
      setLikes(state) {
         state.likes++
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