// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyANb7GCAPA0GGUsKcUDimiJPLm01M5dCSM",
  authDomain: "swayam-bazaar.firebaseapp.com",
  projectId: "swayam-bazaar",
  storageBucket: "swayam-bazaar.appspot.com",
  messagingSenderId: "153877352659",
  appId: "1:153877352659:web:b3ca5026b472d3aaacc426",
  measurementId: "G-WW1NJVKK4V"
});

export const auth = app.auth();
export const db = getFirestore(app); // Initialize Firestore using the app instance
export default app;
