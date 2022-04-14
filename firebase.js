// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlorRKR_QmDYnj7WqQN6HWBopcfnAvEv0",
  authDomain: "facebook-clone-9501c.firebaseapp.com",
  projectId: "facebook-clone-9501c",
  storageBucket: "facebook-clone-9501c.appspot.com",
  messagingSenderId: "710020076025",
  appId: "1:710020076025:web:de103853340987cab22d28",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage, firebaseApp };
