import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDStrXSIrH5HU4e-93f2YTmY6f9c4O5edk",
  authDomain: "pf-react-gonzalez.firebaseapp.com",
  projectId: "pf-react-gonzalez",
  storageBucket: "pf-react-gonzalez.appspot.com",
  messagingSenderId: "446271676747",
  appId: "1:446271676747:web:915343e5440332f4e888ce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)