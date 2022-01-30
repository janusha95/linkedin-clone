import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMl7N1C8TZ351RnKGztGYxGD7GN8rW76U",
  authDomain: "linkedin-clone-6c232.firebaseapp.com",
  projectId: "linkedin-clone-6c232",
  storageBucket: "linkedin-clone-6c232.appspot.com",
  messagingSenderId: "903425343238",
  appId: "1:903425343238:web:0c842adb2205ce14c46887",
  measurementId: "G-3NDVGMFBWS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
