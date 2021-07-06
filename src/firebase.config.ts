import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPqH1WZ7NpaxEsomUyU2MoR66ajl-ZyOQ",
  authDomain: "vue-coach-5e739.firebaseapp.com",
  projectId: "vue-coach-5e739",
  storageBucket: "vue-coach-5e739.appspot.com",
  messagingSenderId: "509106641797",
  appId: "1:509106641797:web:7885c1c6f48424b9e442ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;