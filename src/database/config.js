import firebase from 'firebase/app'
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyCcJcA1pi4OP23cK5KraIMr6-W_0kY7uDI",
    authDomain: "photowall-c02fe.firebaseapp.com",
    databaseURL: "https://photowall-c02fe-default-rtdb.firebaseio.com",
    projectId: "photowall-c02fe",
    storageBucket: "photowall-c02fe.appspot.com",
    messagingSenderId: "588130909136",
    appId: "1:588130909136:web:1ca8f8abc9fd1b4c2c17d5"
};
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database}