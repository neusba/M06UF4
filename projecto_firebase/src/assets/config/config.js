// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  doc,
  onSnapshot,
  addDoc,
  collection,
  query,
  updateDoc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBqw7ARO6u_oOGyUGmsqpkm65VMcSvEqeU",
  authDomain: "pelicules-87c99.firebaseapp.com",
  projectId: "pelicules-87c99",
  storageBucket: "pelicules-87c99.appspot.com",
  messagingSenderId: "498172148429",
  appId: "1:498172148429:web:59b541f223bcd4c043c784",
  // measurementId is not required for Cloud Firestore
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default db;

