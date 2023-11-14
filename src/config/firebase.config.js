// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFXYL63i0bavYmHdG-uS6tqpAzJFIEbEU",
  authDomain: "portfolio-shree.firebaseapp.com",
  projectId: "portfolio-shree",
  storageBucket: "portfolio-shree.appspot.com",
  messagingSenderId: "429782357941",
  appId: "1:429782357941:web:12784ec1c906d77791abfc",
  measurementId: "G-RDV4S4R0KJ"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
