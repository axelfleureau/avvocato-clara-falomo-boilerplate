import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBpWVLPK9VZkkPdcs7CyHDPyJ7-GWxrqo4",
  authDomain: "clarafalomo-7cff5.firebaseapp.com",
  projectId: "clarafalomo-7cff5",
  storageBucket: "clarafalomo-7cff5.firebasestorage.app",
  messagingSenderId: "137325996192",
  appId: "1:137325996192:web:738de6629efb6ca39ac1c5",
  measurementId: "G-YKCNGYYLKQ",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
