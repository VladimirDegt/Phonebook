import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyASTHAbguVs2CuYYkaXdLJpSwodnd8Lzzc",
  authDomain: "phonebook-c7e4a.firebaseapp.com",
  databaseURL: "https://phonebook-c7e4a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phonebook-c7e4a",
  storageBucket: "phonebook-c7e4a.appspot.com",
  messagingSenderId: "138103350330",
  appId: "1:138103350330:web:466a9bf9bf630c54184103"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
