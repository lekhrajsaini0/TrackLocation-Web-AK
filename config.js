// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB93JcAjXCfFGfTfFXYN-eWxy0IAhLo4c4",
    authDomain: "locationtracker-d73a0.firebaseapp.com",
    databaseURL: "https://locationtracker-d73a0-default-rtdb.firebaseio.com",
    projectId: "locationtracker-d73a0",
    storageBucket: "locationtracker-d73a0.appspot.com",
    messagingSenderId: "383146212098",
    appId: "1:383146212098:web:08a78b6de880e2dec8e01b",
    measurementId: "G-4987X6RQPZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);