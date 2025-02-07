// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAuOs2gNhAWRS7njNY6XE3xANb16un3sg",
  authDomain: "fir-dataconnect-e39f5.firebaseapp.com",
  projectId: "fir-dataconnect-e39f5",
  storageBucket: "fir-dataconnect-e39f5.firebasestorage.app",
  messagingSenderId: "538340622976",
  appId: "1:538340622976:web:06f5a4a06a381686031c65",
  measurementId: "G-GZ386E59TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);