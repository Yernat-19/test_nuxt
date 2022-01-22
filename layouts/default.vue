<template>
  <div class="container default-container" >
  <LeftNavBar/>
  <MainToolBar style="margin-left:15%"/>
  <Nuxt />
  </div>
</template>
<script>
import LeftNavBar from "@/components/LeftNavBar";
export default {
  components:{
    LeftNavBar,
  }
}
</script>
<style scoped>
  .default-container{
    flex-direction: row;
    width: 100%;
    
  }
</style>