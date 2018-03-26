import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const state = {
    auth: false,
    role: ''
}
const mutations = {
    login (state, n) {
        console.log('mutations login')
        state.auth = true
        state.role = n
    },
    logout (state) {
        console.log('mutations logout')
        state.auth = false
        state.role = ''
    },
    checkState (state){
        return state.auth
    }
}
const actions = {
    login: ({ commit }, n) => commit('login',n),
    logout: ({ commit }) => commit('logout'),
    checkState: ({commit}) => commit('checkState')
}
const getters = {
    loggedIn: state => state.auth
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})