<template>
  
    
    <div class="container">
      <EntryToolBar/>
      <div class="main-wrapper flex-row">
                    <h1 class="">Экосистема <br> доверия <br> <span style="color:darkcyan">Trustme</span></h1>
                    <img class="main-image position-absolute" src="~/assets/images/main.png" alt="main">
                </div>
    </div>
  
</template>
<style scoped>
.main-wrapper{
  flex-direction: row;
  
}
.main-image{
  position: absolute;
  margin-top: -10%;
  margin-left: 20%;
}
</style>
<script>
import EntryToolBar from "@/components/EntryToolBar"
export default {
  name: 'IndexPage',
  layout:'empty',
  components:{
    EntryToolBar,
  }
}
</script>
