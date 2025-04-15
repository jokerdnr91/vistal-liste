import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZrDn05JeuPOW0qUBueU70WsbUhzyBEM",
  authDomain: "todoliste-dedba.firebaseapp.com",
  projectId: "todoliste-dedba",
  storageBucket: "todoliste-dedba.firebasestorage.app",
  messagingSenderId: "168489748905",
  appId: "1:168489748905:web:7fe38b41318dc57a821cb8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
