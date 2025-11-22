
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD449R-GR4eN47OXMguJbdxdBLIPuFAMVk",
  authDomain: "ecommerce-camara.firebaseapp.com",
  projectId: "ecommerce-camara",
  storageBucket: "ecommerce-camara.firebasestorage.app",
  messagingSenderId: "258367717517",
  appId: "1:258367717517:web:f39db69a7314a9ce66e2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;