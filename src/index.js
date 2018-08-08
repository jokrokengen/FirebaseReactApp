import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";


var config = {
    apiKey: "AIzaSyAyOpA_2BuhqWlV8URbtWSo0rDGzyEs72I",
    authDomain: "fir-reacttest-4fa59.firebaseapp.com",
    databaseURL: "https://fir-reacttest-4fa59.firebaseio.com",
    projectId: "fir-reacttest-4fa59",
    storageBucket: "",
    messagingSenderId: "58495669772"
  };
  
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
