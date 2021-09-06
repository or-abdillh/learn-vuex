<template>
   <ul>
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
   <router-view></router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

ul {
   display: flex;
   justify-content: center;
   margin-top: 2rem;
}

ul li {
   list-style: none;
   display: block;
   margin-right: .55rem;
}

ul li a {
   color: green;
   font-size: 1.25rem;
   text-decoration: none;
}

.router-link-active,
.router-link-exact-active {
   background-color: gray;
   color: white;
   padding: .25rem .45rem;
   border-radius: 10px;
   font-weight: bold;
   cursor: pointer;
 }
</style>