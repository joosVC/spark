import firebase from 'firebase/compat/app';
import 'firebase/storage';
import "firebase/firestore";
import "firebase/storage";

const state = {
    posts: [],
    postsSequence: [],
    postsDraft: [],
    editedDraft: {},
    editedPost: {},
    about: {},
    offer: {},
    herohome: { media: [{src: ""}]},
    postCount: 0
}

const mutations = {
    'LOAD_HEROHOME'(state, hero) {
        state.herohome.media = hero;
    },
    'LOAD_POSTS'(state, allePosts) {
        state.posts = allePosts;
    },
    'LOAD_POSTS_SEQUENCE'(state, sequence) {
        state.postsSequence = sequence;
    },
    'LOAD_POSTSDRAFT'(state, allePostsDraft) {
        state.postsDraft = allePostsDraft;
    },
    'LOAD_POSTCOUNT'(state, count) {
        state.postCount = count;
    },
    'LOAD_ABOUT'(state, about) {
        state.about = about;
    },
    'LOAD_OFFER'(state, offer) {
        state.offer = offer;
    },
    'ADD_POST'(state, dataPost) {
        state.posts.push(dataPost);
    },
    'ADD_DRAFT'(state, dataDraft) {
        state.postsDraft.push(dataDraft);
    },
    'ADD_HEROHOME'(state, payload) {
        state.herohome.media = payload;
    },
    'REMOVE_DRAFT'(state, idDraft) {
        const i = state.postsDraft.map(a => a.id).indexOf(idDraft);
        state.postsDraft.splice(i, 1);
    },
    'EDIT_DRAFT'(state, idDraft) {
        const i = state.postsDraft.map(a => a.id).indexOf(idDraft);
        state.editedDraft = Object.assign({}, state.postsDraft[i]);
    },
    'RESET_DRAFT'(state) {
        state.editedDraft = {};
    },
    'UPDATE_DRAFT'(state, payload) {
        const i = state.postsDraft.map(a => a.id).indexOf(payload.id);
        state.postsDraft[i] = Object.assign({}, payload);
    },
    'REMOVE_POST'(state, idPost) {
        const i = state.posts.map(a => a.id).indexOf(idPost);
        state.posts.splice(i, 1);
    },
    'EDIT_POST'(state, idPost) {
        const i = state.posts.map(a => a.id).indexOf(idPost);
        state.editedPost = Object.assign({}, state.posts[i]);
    },
    'RESET_POST'(state) {
        state.editedPost = {};
    },
    'UPDATE_POST'(state, payload) {
        const i = state.posts.map(a => a.id).indexOf(payload.id);
        state.posts[i] = Object.assign({}, payload);
    },
    'UPDATE_AFTER_SORT_POSTS'(state, payload) {
        state.postsSequence = payload;
    }
}

const actions = {
    loadHerohome({commit}){
        firebase.firestore().collection("pages").doc("home").get().then(
            (doc) => {
                if(doc.exists) {
                    commit('LOAD_HEROHOME', doc.data().media);
                } else {
                    console.log("No such Document as herohome!");
                }
            }
        ).catch((data) => {
            console.log(data)
        })
    },
    loadPostCount({ commit }) {
        firebase.firestore().collection("postcount").doc("PC").get().then(
            (doc) => {
                if (doc.exists) {
                    commit('LOAD_POSTCOUNT', doc.data().postcount);
                } else {
                    console.log("No such document!");
                }
            }).catch((data) => {
                console.log(data)
            })
    },
    loadPosts({ commit }) {
        firebase.firestore().collection("posts").orderBy("title").get().then(
            (querySnapshot) => {

                const posts = [];

                querySnapshot.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        author: doc.data().author,
                        category: doc.data().category,
                        title: doc.data().title,
                        intro: doc.data().intro,
                        hero: doc.data().hero,
                        labels: doc.data().labels,
                        blocks: doc.data().blocks,
                        url: doc.data().url
                    }
                    );
                });
                commit('LOAD_POSTS', posts);
            }).catch((data) => {
                console.log(data)
            })
    },
    loadPostsSequence({commit}){
        firebase.firestore().collection("posts").doc("postsSequence").get().then(
            (doc) => {
                if (doc.exists) {
                    commit('LOAD_POSTS_SEQUENCE', doc.data().postsSequence);
                } else {
                    console.log("No such document as postsSequence!");
                }
            }).catch((data) => {
                console.log(data)
            })
    },
    loadPostsDraft({ commit }) {
        firebase.firestore().collection("postsDraft").orderBy("title").get().then(
            (querySnapshot) => {

                const posts = [];

                querySnapshot.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        author: doc.data().author,
                        category: doc.data().category,
                        title: doc.data().title,
                        intro: doc.data().intro,
                        hero: doc.data().hero,
                        labels: doc.data().labels,
                        blocks: doc.data().blocks,
                        url: doc.data().url
                    }
                    );
                });
                commit('LOAD_POSTSDRAFT', posts);
            }).catch((data) => {
                console.log(data)
            })
    },
    addPost({ state, commit }, payload) {

        let key = null;
        firebase.firestore().collection("posts").add(payload)
            .then(function (docRef) {
                key = docRef.id
                commit('ADD_POST', { ...payload, id: key })
                console.log("Document successfully written!" + key + payload);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        
            let postsSequenceUpdate = state.postsSequence;
            postsSequenceUpdate.unshift(key);
            console.log("post sequence update - add post");
            console.log(postsSequenceUpdate);

        firebase.firestore().collection("posts").doc("postsSequence").update({
            postsSequenceUpdate
        }).then(()=> {
            commit('UPDATE_AFTER_SORT_POSTS', postsSequenceUpdate);
        })

    },
    addPostDraft({ commit }, payload) {
        firebase.firestore().collection("postsDraft").add(payload)
            .then(function (docRef) {
                const key = docRef.id
                commit('ADD_DRAFT', { ...payload, id: key })
                console.log("Document succesfully written!" + key + payload);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            })
    },
    addHeroHome({commit}, payload) {
        firebase.firestore().collection("pages").doc("home").set({media: payload})
        .then (() => {
            commit('ADD_HEROHOME', payload)
        })
        .catch (function (error) {
            console.error("Error writing document: ", error);
        })
    },
    removePostDraft({ commit }, id) {
        firebase.firestore().collection("postsDraft").doc(id).delete().then(() => {
            commit('REMOVE_DRAFT', id);
        })
            .catch(error => {
                console.log(error);
            });
    },
    editPostDraft({ commit }, id) {
        commit('EDIT_DRAFT', id);
    },
    resetPostDraft({ commit }) {
        commit('RESET_DRAFT');
    },
    removePost({ commit }, id) {
        firebase.firestore().collection("posts").doc(id).delete().then(() => {
            commit('REMOVE_POST', id);
        })
            .catch(error => {
                console.log(error);
            });
    },
    editPost({ commit }, id) {
        commit('EDIT_POST', id);
    },
    resetPost({ commit }) {
        commit('RESET_POST');
    },
    updatePostDraft({commit}, payload){
        firebase.firestore().collection("postsDraft").doc(payload.id).update({
            id: payload.id,
            author: payload.author,
            category: payload.category,
            title: payload.title,
            intro: payload.intro,
            hero: payload.hero,
            labels: payload.labels,
            blocks: payload.blocks,
            url: payload.url 
        }).then(() => {
            commit('UPDATE_DRAFT', {
                id: payload.id,
                author: payload.author,
                category: payload.category,
                title: payload.title,
                intro: payload.intro,
                hero: payload.hero,
                labels: payload.labels,
                blocks: payload.blocks,
                url: payload.url  
            })
        }).catch(error => { console.log(error); })
    },
    updatePost({ commit }, payload) {
        firebase.firestore().collection("posts").doc(payload.id).update({
            id: payload.id,
            author: payload.author,
            category: payload.category,
            title: payload.title,
            intro: payload.intro,
            hero: payload.hero,
            labels: payload.labels,
            blocks: payload.blocks,
            url: payload.url
        }).then(() => {
            commit('UPDATE_POST', {
                id: payload.id,
                author: payload.author,
                category: payload.category,
                title: payload.title,
                intro: payload.intro,
                hero: payload.hero,
                labels: payload.labels,
                blocks: payload.blocks,
                url: payload.url
            });
        }).catch(error => { console.log(error); })
    },
    updateAfterSortPosts({commit}, payload){
        
        let seq = [];

        payload.forEach((p) => {
            seq.push(p.id);
        })
        firebase.firestore().collection("posts").doc("postsSequence").update({
            postsSequence: seq
        });

        commit('UPDATE_AFTER_SORT_POSTS', seq);

    }


}

const getters = {
    getPostCount: state => {
        return state.postCount;
    },
    getPosts: state => {
        return state.posts;
    },
    getPostsDrafts: state => {
        return state.postsDraft
    },
    getDraftEdit: state => {
        return state.editedDraft;
    },
    getPostEdit: state => {
        return state.editedPost;
    },
    getPostByUrl: state => url => {
        let raw = Object.assign({}, (state.posts.find(post => post.url === url)));
        return raw;
    },
    getPostsTitlesSorted: state => {
        let postSelection = [];

        let unordered = state.posts.slice(0);
        let ordered = state.postsSequence.slice(0);


        unordered.sort((a,b) => {
            return  ordered.indexOf(a.id) - ordered.indexOf(b.id);
        });
        
        unordered.forEach((p) => {
            postSelection.push({
                url: p.url,
                id: p.id,
                hero: p.hero,
                title: p.title
            })
        });


        return postSelection;
    },
    getPostsTitles: state => {
        let postSelection = [];

        state.posts.forEach((p) => {
            postSelection.push({
                url: p.url,
                id: p.id,
                hero: p.hero,
                title: p.title,
                intro: p.intro,
                author: p.author
            })
        })

        return postSelection;
    },
    getPostsDraftsTitles: state => {
        let postSelection = [];

        state.postsDraft.forEach((p) => {
            postSelection.push({
                url: p.url,
                id: p.id,
                hero: p.hero,
                title: p.title
            })
        })
        return postSelection;
    },
    getHerohomeSrc: state => {
        return state.herohome.media[0].src;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}