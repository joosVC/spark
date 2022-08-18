import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const state = {
    labels: []
}

const mutations = {
    'LOAD_LABELS'(state, dataLabel) {
        state.labels = dataLabel;
    },
    'ADD_LABEL'(state, dataLabel) {
        state.labels.push(dataLabel);
    },
    'REMOVE_LABEL'(state, idLabel) {
        const i = state.labels.map(label => label.id).indexOf(idLabel);
        state.labels.splice(i, 1);
    }
}

const actions = {
    loadLabels({ commit }) {
        firebase.firestore().collection("labels").orderBy("name").get().then(
            (querySnapshot) => {
                const labels = [];

                querySnapshot.forEach(doc => {
                    labels.push({
                        id: doc.id,
                        name: doc.data().name,
                    }
                    );
                });
                commit('LOAD_LABELS', labels);
            }).catch((data) => {
                console.log(data)
            })
    },
    addLabel({ commit }, payload) {
        const label = {
            name: payload.name,
        }
        let key
        firebase.firestore().collection("labels").add(label)
            .then((data) => {
                key = data.id
                return key
            })
            .then(() => {
                commit('ADD_LABEL', { ...label, id: key });
            })
            .catch((error) => {
                console.log(error)
            })
    },
    removeLabel({ commit }, id) {
        firebase.firestore().collection("labels").doc(id).delete().then(() => {
            commit('REMOVE_LABEL', id);
        })
            .catch(error => {
                console.log(error);
            });
    }
}

const getters = {
    getLabels(state) {
        return state.labels;
    },
    getLabelNames(state) {
        return state.labels.map((l) => l.name);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}