import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL = 'https://60dd1cc5c2b6280017febdc2.mockapi.io/LG-TP6'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        async getUsuarios({commit}) {
            try {
                let {data:usuarios} = await axios(URL)
                commit('getUsuarios',usuarios)
            }
            catch {
                commit('getUsuarios',[])
            }
        },
        async postUsuarioAsyncAwait({commit}, usuario) {
            try {
                await axios.post(URL, usuario)
                commit('postUsuarios',usuario)
            }
            catch(err) {
                console.log('Error.', err)
            }
        }
    },
    mutations : {
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        postUsuarios(usuario){
            console.log(usuario)
        }
    }
})