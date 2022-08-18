import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7VfHyeWToE3Uwq6YRNkS72JDMuAscDHU",
    authDomain: "spark-vlaio.firebaseapp.com",
    projectId: "spark-vlaio",
    storageBucket: "spark-vlaio.appspot.com",
    messagingSenderId: "779882339167",
    appId: "1:779882339167:web:8b8a0ac30e32f7119934ea",
    measurementId: "G-20CHPZJEEK"
  };
// Initialize Firebase

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseAnalytics = firebase.analytics()
const db = firebaseApp.firestore()

export { firebaseAuth, firebaseAnalytics , db }
