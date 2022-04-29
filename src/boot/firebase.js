import firebase from 'firebase/app';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7VfHyeWToE3Uwq6YRNkS72JDMuAscDHU",
    authDomain: "spark-vlaio.firebaseapp.com",
    projectId: "spark-vlaio",
    storageBucket: "spark-vlaio.appspot.com",
    messagingSenderId: "779882339167",
    appId: "1:779882339167:web:8b8a0ac30e32f7119934ea",
    measurementId: "G-20CHPZJEEK"
};
// Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let firebaseAnalytics = firebase.analytics()

export { firebaseAnalytics }