<template>
    <div class="position-relative top-0 end-0 right-c"  >
        
        <h1 class="page-title">Список Компании</h1>    
            <div class="page-wrapper">
                <div v-for="company in companies" :key="company['Id']" @click="goTo(company['Id'])" class="card mb-3" style="max-width: 540px; margin-left:-10%;margin-top:-2rem;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://www.kindpng.com/picc/m/228-2289593_corporate-office-properties-company-icon-png-white-transparent.png" class="img-fluid " alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{company['Id']+"."+company['Name']}}</h5>
                                <p class="card-text">Адресс : {{company['Address']}}</p>
                                <p class="card-text">Директор : {{company['Director']}}</p>
                                <p class="card-text">Телефон : {{company['Phone']}}</p>
                                <p class="card-text"><small class="text-muted">IIK :{{company['IIK']}} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<style scoped>
.page-wrapper{
    margin-top: 5rem;
}
.page-title{
    padding-top:3rem;
    margin-left: -20%;
    
}
    .right-c{
        margin-left: 30%;
    }
</style>
<script>
import MainToolBar from "@/components/MainToolBar"
export default {
    components:{
        MainToolBar
    },
    methods:{
        goTo(companyId){
            this.$router.push("/companies/getCompanyInfo/"+companyId);
        }
    },
    async fetch({store,error}){
        //if(store.getters['companies/companies'].length===0){
            try{
                await store.dispatch('companies/fetchCompanies')
            }catch(e){
            error(e)
            }
        //}
        
    },
    computed:{
        companies(){
            return this.$store.getters['companies/companies']
        }
    }
}
</script>