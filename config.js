import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC6oHytQX-js2jVqeEV1sxub6e0NghLMSw",
    authDomain: "dictionary-app-3c0b7.firebaseapp.com",
    databaseURL: "https://dictionary-app-3c0b7.firebaseio.com",
    projectId: "dictionary-app-3c0b7",
    storageBucket: "dictionary-app-3c0b7.appspot.com",
    messagingSenderId: "1066168492678",
    appId: "1:1066168492678:web:c7beb988a3355710dc6707"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();