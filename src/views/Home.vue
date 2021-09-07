<template>
   <div class="home-wrapper">
      <h2>Wellcome</h2>
      <p>Hello, {{ store.state.username }}</p>
      <button @click="logout" type="button">Log out</button>
   </div>
</template>

<script>
   
   import { ref } from 'vue'
   import { router } from '../router'
   import { store } from '../store'
   
   export default {
      name: 'Home',
      setup() {
         
         const logout = () => {
            localStorage.removeItem('isAuth')
            setTimeout(() => {
               router.push({ name: 'Login' })
            }, 500);
         }
         
         return { logout, store }
      }
   }
   
</script>

<style lang="scss" >
   
   .home-wrapper {
      width: 80%;
      text-align: center;
      margin: 4rem auto 0;
      background: whitesmoke;
      padding: 1rem .75rem;
      border-radius: 12px;
      
      
      button {
         width: 55%;
         padding: .45rem;
         font-size: 1rem;
         font-weight: bold;
         border-radius: 8px;
         border: 1.5px solid gray;
         margin-top: 1rem;
         transition: .3s ease;
         
         &:active, &:hover {
            border-color: salmon;
            letter-spacing: 2px;
         }
      }
   }
   
</style>