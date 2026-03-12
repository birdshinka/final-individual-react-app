// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjfvzfLJD7-VkeQCWl7pF9Nt2vg8blMJg",
  authDomain: "react-firebase-app-274f9.firebaseapp.com",
  projectId: "react-firebase-app-274f9",
  storageBucket: "react-firebase-app-274f9.firebasestorage.app",
  messagingSenderId: "703958973623",
  appId: "1:703958973623:web:93f4587b0c017653d2e132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);