<template>
   <div class="post-wrapper">
      <h3>Title Goes Here..</h3>
      <p>at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean</p>
      <button type="button">Like</button>
   </div>
</template>

<script>
   
   export default {
      name: 'Post'
   }
   
</script>

<style lang="scss" >
   
   .post-wrapper {
      width: 80%;
      text-align: center;
      margin: 4rem auto 0;
      background: whitesmoke;
      padding: .75rem;
      border-radius: 12px;
      
      p {
         text-align: left;
      }
      
      button {
         width: 55%;
         padding: .45rem;
         font-size: 1rem;
         font-weight: bold;
         border-radius: 8px;
         border: 1.5px solid gray;
         
         &:active, &:hover {
            border-color: salmon;
            box-shadow: 1px 1px 2px gray;
         }
      }
   }
   
</style>