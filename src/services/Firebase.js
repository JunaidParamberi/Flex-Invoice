import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeGjtc85Lexe3Bz_3DtioLthWZwrZ4n2U",
  authDomain: "flex-invoice-aed05.firebaseapp.com",
  projectId: "flex-invoice-aed05",
  storageBucket: "flex-invoice-aed05.appspot.com",
  messagingSenderId: "31291175194",
  appId: "1:31291175194:web:da7da66ea4911f67723ca3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
