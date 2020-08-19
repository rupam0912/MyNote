import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyAIOnfGUm5DtmOqf_Efgc5Tuk7y7VRk_n0",
  authDomain: "mynote-8c5ba.firebaseapp.com",
  databaseURL: "https://mynote-8c5ba.firebaseio.com",
  projectId: "mynote-8c5ba",
  storageBucket: "mynote-8c5ba.appspot.com",
  messagingSenderId: "16534767849",
  appId: "1:16534767849:web:06cdfd0ca06d7cdb01c878",
  measurementId: "G-KVF79M1608"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
