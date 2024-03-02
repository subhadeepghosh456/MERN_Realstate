// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d9d59.firebaseapp.com",
  projectId: "mern-estate-d9d59",
  storageBucket: "mern-estate-d9d59.appspot.com",
  messagingSenderId: "648469771856",
  appId: "1:648469771856:web:a05cfbac91032478f30355",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
