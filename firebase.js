// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLOe67AkHeE7S2vlskwqm9SCo7aVEBEyk",
  authDomain: "fir-auth-e6040.firebaseapp.com",
  projectId: "fir-auth-e6040",
  storageBucket: "fir-auth-e6040.appspot.com",
  messagingSenderId: "892421499616",
  appId: "1:892421499616:web:8e9819db91341cf573be85"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };