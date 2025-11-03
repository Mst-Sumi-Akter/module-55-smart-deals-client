// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkUQFYNMTriGMpzF0mEM_nPkmbR8cx91Q",
  authDomain: "smart-deals-48feb.firebaseapp.com",
  projectId: "smart-deals-48feb",
  storageBucket: "smart-deals-48feb.firebasestorage.app",
  messagingSenderId: "334302434825",
  appId: "1:334302434825:web:865ce3eb582a7522e64ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);