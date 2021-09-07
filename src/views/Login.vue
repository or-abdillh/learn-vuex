<template>
   <div class="login-wrapper">
      <h3>Login</h3>
      <input v-model="userName" type="text" placeholder="Username" />
      <input type="password" placeholder="password" />
      <button ref="btnLogin" :disabled="userName == ''" @click="login" type="button">Submit</button>
      <small ref="textMsgAuth" ></small>
   </div>
   <pre>
      {{ router.currentRoute.path }}
   </pre>
</template>
<script>
   import { ref, onMounted } from 'vue'
   import { useRouter } from 'vue-router'
   import { useStore } from 'vuex'
   import axios from 'axios'
   
   export default {
      name: 'Login',
      setup() {
         
         const userName = ref('')
         const btnLogin = ref(null)
         const textMsgAuth = ref(null)
         const store = useStore()
         const router = useRouter()
         
         const login = () => {
            btnLogin.value.innerHTML = 'Loading, please wait'
            localStorage.setItem('isAuth', 'true')
            store.commit('setUserName', userName.value)
            store.commit('setAuthErrMsg', '')
            
            setTimeout(() => {
               router.push({ name: 'Home' })
            }, 1500)
         }
         
         return { userName, btnLogin, login, textMsgAuth, router }
      }
   }
   
</script>

<style lang="scss" >
   
   .login-wrapper {
      width: 80%;
      margin: 2rem auto 0;
      display: flex;
      flex-wrap: wrap;
      
      h3 {
         font-size: 1.5rem;
         display: block;
         width: 100%;
         text-align: center;
         margin-bottom: 1rem;
      }
      
      input {
         padding: .45rem .65rem;
         
         &:focus {
            outline: none;
            border-color: salmon;
         }
      }
      
      button {
         padding: .35rem;
         transition: .3s ease;
         
         &:active {
            letter-spacing: 2px;
            border-color: salmon;
         }
      }
      
      input, button {
         width: 100%;
         border-radius: 8px;
         border: 1.5px solid gray;
         margin-bottom: .55rem;
      }
      
      small {
         color: #cf1e1e;
         font-weight: bold;
         letter-spacing: .5px;
      }
   }
   
</style>