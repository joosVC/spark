import { LocalStorage, Loading } from 'quasar';
import { showErrorMessage } from 'src/functions/show-error-message';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const state = {
    loggedIn: false
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    }
}

const actions = {
    loginUser({ }, payload) {
        Loading.show();
        firebase.auth().signInWithEmailAndPassword(
            payload.email, payload.password)
            .then((response) => {
                Loading.hide();
                console.log(response + ' login user succes response');
                LocalStorage.set('loggedIn', true);
                console.log(response + ' logged in success');
                this.$router.push('/admin').catch(err => { console.log(err + 'pus maak error') });
                console.log(response + ' push succes to /admin');
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    handleAuthStateChange({ commit, dispatch }) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Loading.hide();
                commit('setLoggedIn', true);
                LocalStorage.set('loggedIn', true);
            }
            else {
                Loading.hide();
                commit('setLoggedIn', false);
                LocalStorage.set('loggedIn', false);
                this.$router.push('/login').catch(error => { showErrorMessage(error.message) });
            }
        })
    },
    logoutUser() {
        firebase.auth().signOut();
    }
}

const getters = {
    getLoggedIn: (state) => {
        return state.loggedIn;
    }

}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}