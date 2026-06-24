import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, getDoc, collection, addDoc, getDocs, query, where, onSnapshot, updateDoc } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";