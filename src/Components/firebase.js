import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA0U00AOaaML9h0mQDFrdE-awgv2DG51Q",
  authDomain: "tiktok-bharath.firebaseapp.com",
  databaseURL: "https://tiktok-bharath.firebaseio.com",
  projectId: "tiktok-bharath",
  storageBucket: "tiktok-bharath.appspot.com",
  messagingSenderId: "1094676701213",
  appId: "1:1094676701213:web:c38c201fe4b04672c9e6f4",
  measurementId: "G-DCE3NWG3L2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
