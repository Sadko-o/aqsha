import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
// import {firestore} from 'firebase/compat/firestore';
// import firebase from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyBDzJhID_8iRySdFZS1thmyMPzEDWbdQns",
  authDomain: "aqsha-5cdfa.firebaseapp.com",
  projectId: "aqsha-5cdfa",
  storageBucket: "aqsha-5cdfa.appspot.com",
  messagingSenderId: "665507561158",
  appId: "1:665507561158:web:4cb087700ac84986b8e1c7",
  measurementId: "G-H9WVVNNWEX"

}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// const projectFirestore = firebase.firestore();
// const projectAuth = firebase.auth();

// const timestamp = firebase.firestore.Timestamp;

export {auth}