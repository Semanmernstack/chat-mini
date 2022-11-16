
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdXaswUjs-QE-MMolXHmAvIeDrrgoGO_4",
  authDomain: "chat-mini-16fc0.firebaseapp.com",
  projectId: "chat-mini-16fc0",
  storageBucket: "chat-mini-16fc0.appspot.com",
  messagingSenderId: "267350805735",
  appId: "1:267350805735:web:5e85360687453f5203e642"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)