import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyFWCdFxNX83MOUwbZnGKgJZqndc8gJ2Y",
    authDomain: "clone-instagram-11016.firebaseapp.com",
    projectId: "clone-instagram-11016",
    storageBucket: "clone-instagram-11016.appspot.com",
    messagingSenderId: "580381476098",
    appId: "1:580381476098:web:c6ce498d65993d0fc7ae1b",
    measurementId: "G-V1G8ZFWDTX"
});

const db = firebase.firestore();
const auth = firebase.auth();
// const storege = firebase.storege();
const functions = firebase.functions();

export { db, auth, functions };