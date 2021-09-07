import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         username: '',
         authErrMsg: ''
      }
   },
   mutations: {
      setUserName(state, value) {
         state.username = value
      },
      setAuthErrMsg(state, msg) {
         state.authErrMsg = msg
      }
   }
})