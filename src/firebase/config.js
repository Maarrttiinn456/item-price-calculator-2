import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2EX1BqFzBlRkE8Np8x-gZJJyE1g_XIBc",
  authDomain: "item-caluclator-app.firebaseapp.com",
  projectId: "item-caluclator-app",
  storageBucket: "item-caluclator-app.appspot.com",
  messagingSenderId: "648397151172",
  appId: "1:648397151172:web:d7877a11b2c2d1f9f2e291"
};

firebase.initializeApp(firebaseConfig);

const myDatabase = firebase.firestore();

export default  myDatabase;