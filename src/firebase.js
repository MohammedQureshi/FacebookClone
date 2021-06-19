import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHKKhItLxx2StMqKQpFCESbSYRxJIqVOQ",
    authDomain: "facebookclone-8a962.firebaseapp.com",
    projectId: "facebookclone-8a962",
    storageBucket: "facebookclone-8a962.appspot.com",
    messagingSenderId: "698961290112",
    appId: "1:698961290112:web:8ce9b5255dc6d61735d765",
    measurementId: "G-7FCF4M7E9F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;