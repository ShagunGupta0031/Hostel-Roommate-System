import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXMlrJG1AWmiSegMHQZmP5U_ZeaQSu0ho",
  authDomain: "hostel-roommate-system.firebaseapp.com",
  projectId: "hostel-roommate-system",
  storageBucket: "hostel-roommate-system.appspot.com",
  messagingSenderId: "447802425013",
  appId: "1:447802425013:web:63f4a5b3a6697ffbe988fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

