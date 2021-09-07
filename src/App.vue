<template>
   <div class="nav" v-if="$route.fullPath != '/login'" >
      <ul :class="isSlide ? 'active' : '' ">
         <li>
            <router-link to="/" >Home</router-link>
         </li>
         <li>
            <router-link to="/about" >About</router-link>
         </li>
         <li>
            <router-link to="/post" >Post</router-link>
         </li>
      </ul>
      <button @click="isSlide = !isSlide" type="button">
         <span>Nav</span>
      </button>
   </div>
   <router-view>
   </router-view>
</template>

<script>
   
   import { ref } from 'vue'
   
   export default {
      name: 'App',
      setup() {
         
         const isSlide = ref(false)
         
         return { isSlide } 
      }
   }
   
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.nav {
   
   .router-link-active {
      background: #1bd25f;
      padding: .25rem .5rem;
      color: whitesmoke;
      border-radius: 8px;
   }
   
   ul {
      background: whitesmoke;
      box-sizing: border-box;
      padding: .75rem;
      
      li {
         list-style: none;
         margin-right: 1rem;
         
         a {
            text-decoration: none;
            color: #1bd25f;
            font-size: 1.25rem;
         }
      }
   }
}

@media only screen and (min-width: 64.063em) {
   .nav {
      padding: 1rem 0;
      background: whitesmoke;  
      
      button {
         display: none;
      }
      
      ul {
         display: flex;
         justify-content: center;
      }
   }
}

@media only screen and (max-width: 64em) {
   
   .nav {
      min-width: 100%;
      height: 50px;
      display: flex;
      position: relative;
      
      .active {
         left: 0;
      }
      
      button {
         padding: .55rem 1rem;
         position: absolute;
         right: 2rem;
         top: 1rem;
         border-radius: 8px;
         border: none;
         cursor: pointer;
         border: 2px solid gray;
         transition: .3s ease;
         
         &:active {
            border-color: salmon;
            letter-spacing: 2px;
            outline: none;
         }
      }
      
      ul {
         width: 40%;
         position: fixed;
         top: 0;
         bottom: 0;
         left: -100%;
         padding-top: 2rem;
         transition: .3s ease;
         
         li {
            text-align: center;
            margin-bottom: 1rem;
         }
      }
   }   
}

</style>