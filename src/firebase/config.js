// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDiZ2T7LbKOFKTa-IdpemBIEdTumsQ0SWk",
  authDomain: "vue-logos.firebaseapp.com",
  projectId: "vue-logos",
  storageBucket: "vue-logos.appspot.com",
  messagingSenderId: "831171007159",
  appId: "1:831171007159:web:aa2b171569c648f8bbb332"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });