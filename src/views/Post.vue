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
         width: 55%;
         padding: .45rem;
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