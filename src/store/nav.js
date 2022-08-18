import firebase from 'firebase/compat/app';

const state = {
    drawerLeft: false
}

const mutations = {
    'SET_DRAWER'(state) {
        state.drawerLeft = !state.drawerLeft;
    }
}

const actions = {
    setDrawerLeft({commit}){
        commit('SET_DRAWER');
    }
}

const getters = {
    getDrawerLeft: state => {
        return state.drawerLeft;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}