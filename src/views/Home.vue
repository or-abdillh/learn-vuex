<template>
   <div class="home-wrapper">
      <h2>Wellcome</h2>
      <p>Hello, {{ username }}</p>
      <button @click="logout" type="button">Log out</button>
   </div>
   <div class="user-wrapper">
      <img :src="userDetails.picture.large" />
      <strong>{{ userDetails.name.title }} {{ userDetails.name.first }} {{ userDetails.name.last }}</strong>
      <small>{{ userDetails.location.city }} - {{ userDetails.location.country }}</small>
   </div>
</template>

<script>
   
   import { ref, computed } from 'vue'
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
         
         const username = computed(() => {
            return store.state.username
         })
         
         const userDetails = computed(() => {
            return store.state.userDetails[0]
         })
         
         return { logout, username, userDetails }
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
      
      h2 {
         margin-bottom: .55rem;
      }
      
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
   
   .user-wrapper {
      width: 80%;
      margin: .55rem auto 0;
      background: whitesmoke;
      padding: 1rem .75rem;
      border-radius: 12px;
      
      img {
         display: block;
         border-radius: 50%;
         margin: 0 auto .55rem;
         border: 2px solid white;
      }
      
      strong, small {
         display: block;
         width: 100%;
         text-align: center;
      }
   }
   
</style>