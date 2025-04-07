// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuZKIXffulbMHO5nMGnQAbL9Z_NT_syw",
  authDomain: "komik-dewantara.firebaseapp.com",
  projectId: "komik-dewantara",
  storageBucket: "komik-dewantara.firebasestorage.app",
  messagingSenderId: "364019380021",
  appId: "1:364019380021:web:2e74eace0e7773155e267c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
