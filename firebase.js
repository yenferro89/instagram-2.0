// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ff6hQjMrdAxutlPLKhDCbUK3sQly42U",
  authDomain: "insta-clone-fd292.firebaseapp.com",
  projectId: "insta-clone-fd292",
  storageBucket: "insta-clone-fd292.appspot.com",
  messagingSenderId: "8270558631",
  appId: "1:8270558631:web:8faaf1d8b661e747ac7282",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
