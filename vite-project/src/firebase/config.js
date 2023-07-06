// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAidodu1FF11cFwYaVN-QuPa8AcEaegEB8",
  authDomain: "rcai-40ffd.firebaseapp.com",
  projectId: "rcai-40ffd",
  storageBucket: "rcai-40ffd.appspot.com",
  messagingSenderId: "787814488676",
  appId: "1:787814488676:web:096c9684201d42b7aa5d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;