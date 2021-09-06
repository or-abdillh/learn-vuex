<template>
   <div class="home-wrapper">
      <h2>Wellcome</h2>
      <p>Hello, user</p>
   </div>
</template>

<script>
   
   export default {
      name: 'Home'
   }
   
</script>

<style lang="scss" >
   
   .home-wrapper {
      width: 80%;
      text-align: center;
      margin: 4rem auto 0;
      background: whitesmoke;
      padding: .55rem;
      border-radius: 12px;
      
      h2, p {
         line-height: 50%;
      }
   }
   
</style>