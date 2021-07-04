import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig: any = {
  apiKey: "AIzaSyDV6xlNsDwmKlAkIJglaedehp3-zUqy3lk",
  authDomain: "vue-coach-f57dd.firebaseapp.com",
  projectId: "vue-coach-f57dd",
  storageBucket: "vue-coach-f57dd.appspot.com",
  messagingSenderId: "763239678297",
  appId: "1:763239678297:web:1321eee5e20dd34fc24c48",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
