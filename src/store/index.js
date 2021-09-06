import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         username: ''
      }
   },
   mutations: {
      setUserName(state, value) {
         state.username = value
      }
   }
})