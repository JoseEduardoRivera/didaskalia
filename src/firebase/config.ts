// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjDdMVTqMKJWFvQnEwSsAMdWJq6JiRaeY",
  authDomain: "nextjs-firebase-auth-93d9a.firebaseapp.com",
  projectId: "nextjs-firebase-auth-93d9a",
  storageBucket: "nextjs-firebase-auth-93d9a.appspot.com",
  messagingSenderId: "582076516513",
  appId: "1:582076516513:web:7846729c74605ecae788e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;