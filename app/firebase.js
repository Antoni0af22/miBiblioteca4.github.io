import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDdjTKmpbctgYypNml0wqb_Y-CtINmiKz0",
  authDomain: "mibiblioteca4-e1e3b.firebaseapp.com",
  projectId: "mibiblioteca4-e1e3b",
  storageBucket: "mibiblioteca4-e1e3b.appspot.com",
  messagingSenderId: "420886032953",
  appId: "1:420886032953:web:2733e3e9bd3e8253f8d3e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

/**
 * Save a New Task in Firestore
 * @param {string} titulo the title of the Task
 * @param {string} autor the description of the Task
 * @param {string} editorial
 * @param {string} isbn
 * @param {Date} fecha
 */
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
  addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });
