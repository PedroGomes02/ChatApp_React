// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJtYGNdGu7ZRcjXIVd1nweYGo2gB_nOxc",
  authDomain: "chatapp---react.firebaseapp.com",
  projectId: "chatapp---react",
  storageBucket: "chatapp---react.appspot.com",
  messagingSenderId: "80061783600",
  appId: "1:80061783600:web:1a1cd328969eb0704b17f5",
  measurementId: "G-9D0HXGRT1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
