import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYJOQFXsFe2bRWK7U-c9r2qp1wsJY3HF4",
    authDomain: "jaimessengerclone.firebaseapp.com",
    databaseURL: "https://jaimessengerclone.firebaseio.com",
    projectId: "jaimessengerclone",
    storageBucket: "jaimessengerclone.appspot.com",
    messagingSenderId: "576457640132",
    appId: "1:576457640132:web:42638cf7d18afb01b8a191",
    measurementId: "G-6DGM4KG3E4"  
});

const db = firebaseApp.firestore();
export default db;