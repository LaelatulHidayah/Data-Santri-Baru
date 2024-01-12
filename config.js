import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCv4-UxJ5Hci5axeXFZW97_K8_OS1DaPv4",
  authDomain: "praktekapi.firebaseapp.com",
  databaseURL: "https://praktekapi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "praktekapi",
  storageBucket: "praktekapi.appspot.com",
  messagingSenderId: "591850350900",
  appId: "1:591850350900:web:c251cbbfbbd1a0b2831d61",
  measurementId: "G-55CKGJWN5S"
}

if  (firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db }