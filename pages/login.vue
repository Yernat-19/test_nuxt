<template>
    <form>
        <h1> Login Page</h1>

        <div class="form-group">
            <input type="text" class="form-control" v-model="phone"/>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="password1"/>
        </div>
        <p><nuxt-link class="" to="/">Home</nuxt-link></p>
        <button class="btn btn-primary" @click.prevent="onSubmit()">Login</button>

    </form>
</template>
<script>
export default {
    layout:'empty',
    data(){
        return {
            phone:"",
            password1:"",
        }
    },
    
    methods:{
        async onSubmit(){
            
                    try{
                        await this.$store.dispatch("user/login",this.phone,this.password1);
                        if(await this.$store.getters['user/user']['token'].length>0){
                                this.$router.push("companies/");
                        }
                        
                    }catch(e){
                        console.error(e);
                    }
                }
        
        
    }
}
</script>
<style scoped>
    form{
        width: 600px;
    }
</style>