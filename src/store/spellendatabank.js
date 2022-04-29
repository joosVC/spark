import spellen from '../data/Spellendatabank';

const state = {
    spellen: []
}

const mutations = {
    'SET_SPELLEN'(state, data) {
        state.spellen = data;
    },

}

const actions = {
    initSpellen: ({ commit }) => {
        commit('SET_SPELLEN', spellen);
    },
}

const getters = {
    getSpellen: state => {
        return state.spellen;
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}