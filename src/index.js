import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { cardsProduct } from './Componetes/Cards/items';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import ProductCard from './Componetes/Cards/Card';
// import { ProductionQuantityLimits } from '@mui/icons-material';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJxNzDTaUR6HSnvR748TF34JkepyhrfAc",
  authDomain: "techmarket-582a9.firebaseapp.com",
  projectId: "techmarket-582a9",
  storageBucket: "techmarket-582a9.appspot.com",
  messagingSenderId: "7274947271",
  appId: "1:7274947271:web:adf3a90470f59fe85914e2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const db = getFirestore()
// const ref = collection(db, 'product')

// cardsProduct.map((product) => addDoc(ref, product))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
