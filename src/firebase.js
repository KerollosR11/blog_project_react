// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxEmTG5xL3sfZiVLMNzsBo4WAL373pWVE",
  authDomain: "final-project-react-7e237.firebaseapp.com",
  projectId: "final-project-react-7e237",
  storageBucket: "final-project-react-7e237.appspot.com",
  messagingSenderId: "1093950067075",
  appId: "1:1093950067075:web:7cb586aa0babffbc0766b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);