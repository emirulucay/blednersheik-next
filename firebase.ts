// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxVs4_myDW6L5EYy_mlHFKz85X2yV6AcE",
  authDomain: "blednersheik.firebaseapp.com",
  projectId: "blednersheik",
  storageBucket: "blednersheik.appspot.com",
  messagingSenderId: "543293758014",
  appId: "1:543293758014:web:50590e50da865bb63ccf6f",
  measurementId: "G-R477L3WW56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
