<template>
    <div class="container">
        <div class="header_main_wrapper">
            <nuxt-link to="/" class="header_main_logo">
                <img class="" data-mobile-hide="" src="~/assets/images/logo_screen.svg" alt="logo_green">
            </nuxt-link>
            <nuxt-link to="/companies" class="btn_start_blue">
                <img src="https://trustme.kz/assets/img/icon_start_blue.svg" alt="icon_start_blue">
                    Начать пользоваться
            </nuxt-link>  
        </div>
    </div>
</template>
<style scoped>

    .header_main_wrapper{
        padding: 2rem;
        width: 100%;
        flex-direction: row;

    }
    .btn_start_blue{
        margin-left: 30%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-color: aqua;
    }

</style>