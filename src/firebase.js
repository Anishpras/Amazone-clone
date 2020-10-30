// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxHHsLidI6aVFtnaZHMoLJalOkt6UtBTM",
  authDomain: "clone-5f170.firebaseapp.com",
  databaseURL: "https://clone-5f170.firebaseio.com",
  projectId: "clone-5f170",
  storageBucket: "clone-5f170.appspot.com",
  messagingSenderId: "4455516124",
  appId: "1:4455516124:web:c5284b12f549b18ff3f119",
  measurementId: "G-EJGH1W4CHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
