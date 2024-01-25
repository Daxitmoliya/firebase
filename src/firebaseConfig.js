// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCA5iqUazTW5oERpf8kS-e8p8-u6U_KAQ",
  authDomain: "fir-pro-f1028.firebaseapp.com",
  projectId: "fir-pro-f1028",
  storageBucket: "fir-pro-f1028.appspot.com",
  messagingSenderId: "311588339596",
  appId: "1:311588339596:web:b33d1ff9ef6d3312efe0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig };