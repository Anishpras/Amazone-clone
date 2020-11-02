// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbTX2UHyjgpffv6WXS9zo_MXwhmNIdw98",
  authDomain: "clone-anish-baea0.firebaseapp.com",
  databaseURL: "https://clone-anish-baea0.firebaseio.com",
  projectId: "clone-anish-baea0",
  storageBucket: "clone-anish-baea0.appspot.com",
  messagingSenderId: "198582592041",
  appId: "1:198582592041:web:ac4d2e8f8939d13ceaf238",
  measurementId: "G-X92KNDE5EQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
