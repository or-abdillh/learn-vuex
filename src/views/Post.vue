<template>
   <div class="post-container">
      <button @click="$router.go(-1)" type="button"> Back </button>
      <div class="post-box">
         <h3>Title Goes Here</h3>
         <p> &nbsp; at imperdiet dui gravida arcu ac tortor dignissim convallis aenean dui gravida arcu ac tortor dignissim convallis dui gravida arcu ac tortor dignissim convallis</p>
         <button @click="addLike" type="button">Like</button>
      </div>
   </div>
</template>

<script>
   
   import { useStore } from 'vuex'
   
   export default {
      name: 'Post',
      setup() {
         
         const store = useStore()
         const addLike = () => {
            store.commit('setLikes')
         }
         
         return { addLike }
      }
   }
   
</script>

<style lang="scss" >
   
   .post-container {
      width: 100%;
      padding: .55rem .65rem;
      box-sizing: border-box;
      margin-top: 1rem;
      
      .post-box {
         width: 80%;
         text-align: left;
         margin: 1rem auto 0;
         background: whitesmoke;
         padding: 1rem;
         box-sizing: border-box;
         border-radius: 12px;
         
         h3, p {
            margin-bottom: 1rem;
         }
         
         h3 {
            text-align: center;
         }
      }
      
      button {
         width: auto;
         padding: .25rem .45rem;
         font-size: .85rem;
         margin-bottom: 1rem;
         border-radius: 8px;
         border: 1.5px solid gray;
         transition: .3s ease;
         
         &:active, &:hover {
            border-color: salmon;
            letter-spacing: 2px;
         }
      }
   }
   
</style>