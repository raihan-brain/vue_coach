import fireabse from 'firebase/app'
import 'firebase/auth'
import { firebaseConfigType } from './types'

const firebaseConfig:firebaseConfigType = {
  apiKey: "AIzaSyDPqH1WZ7NpaxEsomUyU2MoR66ajl-ZyOQ",
  authDomain: "vue-coach-5e739.firebaseapp.com",
  databaseURL: "https://vue-coach-5e739-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-coach-5e739",
  storageBucket: "vue-coach-5e739.appspot.com",
  messagingSenderId: "509106641797",
  appId: "1:509106641797:web:7885c1c6f48424b9e442ec"
}

fireabse.initializeApp(firebaseConfig);

export default fireabse;