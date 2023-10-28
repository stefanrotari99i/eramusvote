import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA_p0SEOmMuLH2nR38Q_x-MLcF5R0OVIA",
  authDomain: "erasmusvote.firebaseapp.com",
  projectId: "erasmusvote",
  storageBucket: "erasmusvote.appspot.com",
  messagingSenderId: "884575442398",
  appId: "1:884575442398:web:890ae61e639f1853eb794f",
  measurementId: "G-WNZEZLMC3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { auth, analytics, db };
