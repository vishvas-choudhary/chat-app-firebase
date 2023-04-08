import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-fdc5d.firebaseapp.com",
  projectId: "chat-app-fdc5d",
  storageBucket: "chat-app-fdc5d.appspot.com",
  messagingSenderId: "547925885974",
  appId: "1:547925885974:web:3b90ab1f8de576d242a137",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
