// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU9XcG3HgUpMyEYJq9fBbMhjCnMmr0Vuk",
  authDomain: "birch-c.firebaseapp.com",
  projectId: "birch-c",
  storageBucket: "birch-c.appspot.com",
  messagingSenderId: "929799086982",
  appId: "1:929799086982:web:44a7f59d902bb3aa438207",
  measurementId: "G-23XLPT5CGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()