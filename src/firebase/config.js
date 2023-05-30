// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzd1s0bpKN2luV917mums-B_Nm-i4w0Hg",
  authDomain: "react-hackathon-f.firebaseapp.com",
  projectId: "react-hackathon-f",
  storageBucket: "react-hackathon-f.appspot.com",
  messagingSenderId: "861919042748",
  appId: "1:861919042748:web:c7c191e7152310f16944b9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
