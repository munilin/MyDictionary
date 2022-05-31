// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyjMl8JmhGIQr8vkq6T3GEgTa_Nhxp5zA",
  authDomain: "sparta-react-basic-d91df.firebaseapp.com",
  projectId: "sparta-react-basic-d91df",
  storageBucket: "sparta-react-basic-d91df.appspot.com",
  messagingSenderId: "506247075584",
  appId: "1:506247075584:web:60315c49374d46ea2c85e5",
  measurementId: "G-BR9TP3CLPX"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
