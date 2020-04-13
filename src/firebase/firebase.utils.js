import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-EwhNHPnWNOX-lw0AYtQbdVAJFnADcjI",
    authDomain: "crwn-db-fa7e4.firebaseapp.com",
    databaseURL: "https://crwn-db-fa7e4.firebaseio.com",
    projectId: "crwn-db-fa7e4",
    storageBucket: "crwn-db-fa7e4.appspot.com",
    messagingSenderId: "539113328137",
    appId: "1:539113328137:web:d3fcd70e4ac846b3ce32d8",
    measurementId: "G-CT80Y9Q8N0"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;