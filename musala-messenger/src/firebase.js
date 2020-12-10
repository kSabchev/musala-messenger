import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEFrjmthfon3qmW0w7kvHwKArcleNlnlI",
  authDomain: "musala-messenger.firebaseapp.com",
  projectId: "musala-messenger",
  storageBucket: "musala-messenger.appspot.com",
  messagingSenderId: "388853908067",
  appId: "1:388853908067:web:69ef4159a9e3dd047f6e56",
  measurementId: "G-4ZJN508PV8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

export {
        // firebaseApp as firebase,
        db,
        auth,
        firestore
}
