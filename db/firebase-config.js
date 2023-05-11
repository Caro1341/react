import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2wX6NQugJQqPTmA7BGcSVQCK4nWf9nXs",
  authDomain: "aquarella-coder.firebaseapp.com",
  projectId: "aquarella-coder",
  storageBucket: "aquarella-coder.appspot.com",
  messagingSenderId: "760248734037",
  appId: "1:760248734037:web:5b11d2edca8ccea6189fdc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db