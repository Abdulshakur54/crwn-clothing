import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClXKzTguyPUhaS7Jdt4yh9sHNuobIjdcQ",
  authDomain: "crwn-clothing-84816.firebaseapp.com",
  projectId: "crwn-clothing-84816",
  storageBucket: "crwn-clothing-84816.appspot.com",
  messagingSenderId: "834117691516",
  appId: "1:834117691516:web:7a11a2c4a5e84109a7c1f9"
};


const app = initializeApp(firebaseConfig);