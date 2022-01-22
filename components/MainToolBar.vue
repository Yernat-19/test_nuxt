<template>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid end-0">
    <form class="d-flex  align-items-stretch">
      <input class="form-control top-10 width-300 " type="search" placeholder="Поиск по БИН/Наименованию" aria-label="Поиск">
      <button class="btn btn-toolbar top-10 " type="submit">Поиск</button>
      <button class="btn btn-toolbar  top-10 start-5 width-300" type="submit">Написать Отзыв</button>
      <button class="btn btn-toolbar  top-10 start-5 width-300" @click.prevent="" type="submit" v-if="isAuth">+{{user['username']}}</button>
      <button class="btn btn-toolbar  top-10 start-5" type="submit" @click.prevent="goToLogin()" v-if="!isAuth">Воити</button>
      <button class="btn btn-toolbar  top-10 start-5"   type="submit" @click.prevent="logOut()" v-if="isAuth">Выити</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {
    methods:{
        goToLogin(){
            this.$router.push("/login");
        },
        async logOut(){
            this.$store.dispatch("user/logOut");
            //this.$router.push("/login");
        }
    },
    data(){
        return {isAuth: this.$store.getters['user/isAuth']}
        
    },
    computed:{
        // isAuth(){
        //     return this.$store.getters['user/isAuth'];
            
        // },
        user(){
            if(this.$store.getters['user/user']===undefined){
                return {"username":""};
            }
            return this.$store.getters['user/user'];
        }
    }
}
</script>
<style scoped>
 .btn-toolbar{
     height: 5%;
     border-color: lightseagreen;
     
 }
 .width-300{
     width: 270px;
     align-self: center;
 }
.top-10{
    margin-top: 13px;
}
.start-5{
    margin-left:5%;
}
form{
    width: 100%;
    
}
</style>