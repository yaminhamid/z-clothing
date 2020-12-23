import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';


  const config = {
    apiKey: "AIzaSyB0gCEzyudknL1PvB3AUJNx9K_WEuwbqF0",
    authDomain: "z-db-4c189.firebaseapp.com",
    projectId: "z-db-4c189",
    storageBucket: "z-db-4c189.appspot.com",
    messagingSenderId: "418033712425",
    appId: "1:418033712425:web:7eaf12731ab7cc4f0b8b38",
    measurementId: "G-X1G8YQZDY9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

