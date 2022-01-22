<template>
    <nav id="navbar-example3"  class="position-absolute top-0 end-0 navbar navbar-light bg-dark flex-column align-items-stretch p-4 height-100 ">
  
  <nav class="nav nav-pills flex-column">
    <nuxt-link class="nav-link text-white" to="/">Trust me</nuxt-link>
    <div class="divider  nav-divider "></div> 
    <nuxt-link class="nav-link text-white" to="@/">Info</nuxt-link>
    <div class="divider  nav-divider "></div>
    <nuxt-link  class="nav-link text-white" to="/companies">Компании</nuxt-link>
    <nuxt-link class="nav-link text-white" to="/people">Люди</nuxt-link>
    <nuxt-link class="nav-link text-white" to="/locations">Места</nuxt-link>
    <nuxt-link class="nav-link text-white" to="/authors">Авторы</nuxt-link>
    <div class="divider  nav-divider "></div>
    <nuxt-link class="nav-link text-white" to="/news">Новости</nuxt-link>
    <nuxt-link class="nav-link text-white" to="/support">Поддержка</nuxt-link>
   
  </nav>
  <div class="bottom-social-buttons">
      <!-- <img src="assets/images/instagram.png"/>
      <img src="assets/images/facebook.png"/> -->
  </div>
</nav>
</template>
<style scoped>
.height-100{
  height: 100%;
}
.text-white{
  color: #fff;
}
  .nav-divider{
    color: white;
    height: 1px;
    background-color:white;
  }
  .width-low{
    width: 20%;
  }
  
</style>
