// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5EA_0m86ASYStbvy4lsnhVYoZbBY5qbQ",
  authDomain: "lark-login-4a849.firebaseapp.com",
  projectId: "lark-login-4a849",
  storageBucket: "lark-login-4a849.appspot.com",
  messagingSenderId: "328376337439",
  appId: "1:328376337439:web:8f54a1580695dd2f19c12a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
