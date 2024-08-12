
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore}  from  'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAsuNjc5E-s8dB8-pticfaPdPnLVJE1SVM",
  authDomain: "blog-spot-1d81b.firebaseapp.com",
  projectId: "blog-spot-1d81b",
  storageBucket: "blog-spot-1d81b.appspot.com",
  messagingSenderId: "401182133578",
  appId: "1:401182133578:web:38510e00ac1c1ccc0085b3",
  measurementId: "G-Q8BV120XST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth= getAuth(app)
 const db=getFirestore(app)
 const stora=getStorage(app)
 export { auth,db, stora}