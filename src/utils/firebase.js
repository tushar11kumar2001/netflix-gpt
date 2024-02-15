// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzAwRP5JD-0noUbsli2RqO87MQB1ns_dY",
  authDomain: "netflix-gpt-73203.firebaseapp.com",
  projectId: "netflix-gpt-73203",
  storageBucket: "netflix-gpt-73203.appspot.com",
  messagingSenderId: "433675501572",
  appId: "1:433675501572:web:4294994b1ee3e6cf16f551",
  measurementId: "G-KER8LBRG2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();