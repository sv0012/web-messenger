import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC8dIXpOwN7cxnNmSh-CkH5Av4b6cN_u_k",

  authDomain: "web-messenger-b29bf.firebaseapp.com",

  projectId: "web-messenger-b29bf",

  storageBucket: "web-messenger-b29bf.appspot.com",

  messagingSenderId: "848490159105",

  appId: "1:848490159105:web:fee068ee6e9d924e49b400",

  measurementId: "G-JJ60E6N3RN"

};

firebase.initializeApp(firebaseConfig);

window.store=store;

ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
