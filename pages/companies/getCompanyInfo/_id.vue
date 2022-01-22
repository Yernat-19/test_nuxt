<template>
    <div class="postion-relative   start-30">
        <div class="  " style="width:120%">
            <img 
            src="https://shapka-youtube.ru/wp-content/uploads/2020/11/neon-grid.jpg" 
            class="card-img-top height-30p" alt="..." >
            <div class="card-body">
                <h5 class="card-title">{{company['Name']}}</h5>
                <p class="card-text">{{company['Director']}}</p>
                <p class="card-text"><small class="text-muted">{{company['Address']}}</small></p>
            </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Главная</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Профиль</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Контакт</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
    </div>
</template>
<script>

export default {
    
    computed:{
        company(){
            return this.$store.getters['companies/companies'][this.$route.params.id-1]
        }
    }
    }
</script>
<style scoped>
img{
  display:block;
  width:100%; 
  height:100px;
  object-fit: cover;
}
.start-30{
        margin-left: 15%;
        
    }
    .height-30p{
        /* height: 5rem; */
        width: 70%;
    }
</style>