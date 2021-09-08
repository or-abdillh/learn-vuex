<template>
   <template v-for="post in 6" :key="post">
      <div class="post-wrapper">
         <h3>Title Goes Here</h3>
         <p>at imperdiet dui gravida arcu ac tortor dignissim convallis aenean</p>
         <button @click="$router.push({ name: 'Post' })" type="button">read more</button>
      </div>
   </template>
</template>

<script>
   
   export default {
      name: 'Posts'
   }
   
</script>

<style lang="scss" >
   
   .post-wrapper {
      width: 80%;
      text-align: ledt;
      margin: 1rem auto 0;
      background: whitesmoke;
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 12px;
      
      h3, p {
         margin-bottom: 1rem;
      }
      
      p {
         text-align: left;
      }
      
      button {
         width: 35%;
         padding: .45rem .55rem;
         font-size: 1rem;
         font-weight: bold;
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