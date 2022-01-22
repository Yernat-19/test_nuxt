import { gql } from 'nuxt-graphql-request';
export const state=()=>({
    user:{},
    isAuth:false,
    
})
export const mutations = {
    setUser:function(state,user){
        state.user=user;
    },
    setAuth: function(state,isAuth){
        state.isAuth=isAuth;
    }
}
export const actions = {
    logOut({commit}){
        commit('setUser',{});
    },
    async login({commit},phone,password){
        const query = gql`
        query{
            login(password:"`+"aselok13A@"+`",phone:"`+phone+`"){
                userid,
                username,
                token
              }
        }
      `;
      this.$graphql.default.setEndpoint("https://api.trustme.kz/");
      const user1 = await this.$graphql.default.request(query);
      const user=user1['login'];
      console.log(user);
      commit('setUser',user);
      commit('setAuth',true);
      //this.$set(this, 'planets', planets);
    }

}

export const getters={
    user: state=>state.user,
    isAuth:state=>state.isAuth
}