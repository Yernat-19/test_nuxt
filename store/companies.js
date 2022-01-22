import { gql } from 'nuxt-graphql-request';
export const state=()=>({
    companies:[]
})
export const mutations = {
    setCompanies(state,companies){
        state.companies=companies;
    }
}
export const actions = {
    async fetchCompanies({commit}){
        const query = gql`
        query{
            InvictusRequsites{
                Id,
                IIK,
                Name,
                Phone,
                Address,
                BIK,
                BIN,
                Director,
                NameBank
              }
        }
      `;
      this.$graphql.default.setEndpoint('https://graphql.trustme.kz/v1/graphql/');
      const companies = await this.$graphql.default.request(query);
      console.log(companies);
      commit('setCompanies',companies['InvictusRequsites'])
      //this.$set(this, 'planets', planets);
    }

}

export const getters={
    companies: state=>state.companies,
}