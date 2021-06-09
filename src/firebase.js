import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8tayMke6Fe8_UVNAxdqjkRno9ozk01QM",
    authDomain: "twitter-clone-ae726.firebaseapp.com",
    projectId: "twitter-clone-ae726",
    storageBucket: "twitter-clone-ae726.appspot.com",
    messagingSenderId: "815109769078",
    appId: "1:815109769078:web:c1abfde955e1fac6c61c57"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;