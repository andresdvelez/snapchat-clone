import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwnkDqUbNzjvpZU-dp8jSv6WeTJwbRts8",
  authDomain: "snapchat-clone-6d53c.firebaseapp.com",
  projectId: "snapchat-clone-6d53c",
  storageBucket: "snapchat-clone-6d53c.appspot.com",
  messagingSenderId: "174281067862",
  appId: "1:174281067862:web:fe446c37a8e04badb1daf7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
