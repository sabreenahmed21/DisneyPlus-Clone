import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDA2oXrjXuHkp0RRWVrD4zG0qZsCxWg410",
  authDomain: "disney-clone-ae34a.firebaseapp.com",
  projectId: "disney-clone-ae34a",
  storageBucket: "disney-clone-ae34a.appspot.com",
  messagingSenderId: "785207153809",
  appId: "1:785207153809:web:2d8be85f2598ccea3cdb30",
  measurementId: "G-07GYRMWLVV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
const db = getFirestore(app);
export default db;