// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmflD1cqEFYhknA4Mpu170kfQVW5M3ndY",
  authDomain: "responsivecars.firebaseapp.com",
  databaseURL: "https://responsivecars-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "responsivecars",
  storageBucket: "responsivecars.appspot.com",
  messagingSenderId: "144917361064",
  appId: "1:144917361064:web:7cdcfa92d647d3f0d8ed9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;