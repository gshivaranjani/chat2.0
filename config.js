import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBx67iurJFMiAHA8fbUZuKbJbMqXo9pVX8",
    authDomain: "chat-2967e.firebaseapp.com",
    projectId: "chat-2967e",
    storageBucket: "chat-2967e.appspot.com",
    messagingSenderId: "610356252180",
    appId: "1:610356252180:web:7d0f71707ee7f5fe95a101",
    measurementId: "G-F9C4FQVH0B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
