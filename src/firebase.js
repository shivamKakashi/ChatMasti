import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyC1LKT3XVUB5g9LwE5TyecHhKNbxIJ5hPA",
    authDomain: "chatmasti-e00d8.firebaseapp.com",
    projectId: "chatmasti-e00d8",
    storageBucket: "chatmasti-e00d8.appspot.com",
    messagingSenderId: "905758224287",
    appId: "1:905758224287:web:178ea1d7abb5ec6f1197aa",
    measurementId: "G-PXLXSQ9172"
  })

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth};