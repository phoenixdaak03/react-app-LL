import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY0wjX0bDUIQ0jKka8ah05nVcXJM3LXZM",
  authDomain: "full-stack-react-9aa64.firebaseapp.com",
  projectId: "full-stack-react-9aa64",
  storageBucket: "full-stack-react-9aa64.firebasestorage.app",
  messagingSenderId: "317753719712",
  appId: "1:317753719712:web:1479a08f81977920eb42c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
