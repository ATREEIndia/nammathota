// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNnpkDB7vx08r2JDFt93pRhjWGK3gvliU",
  authDomain: "nammathotta.firebaseapp.com",
  databaseURL: "https://nammathotta-default-rtdb.firebaseio.com",
  projectId: "nammathotta",
  storageBucket: "nammathotta.firebasestorage.app",
  messagingSenderId: "404074789690",
  appId: "1:404074789690:web:88df20c36b5e6676b1ae03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);

const auth=getAuth(app)

export{db, auth}