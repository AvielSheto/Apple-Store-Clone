import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRlSWfBuebReUn4zypsRsfd3ieWVsDVDo",
  authDomain: "apple-development-f7a4b.firebaseapp.com",
  projectId: "apple-development-f7a4b",
  storageBucket: "apple-development-f7a4b.appspot.com",
  messagingSenderId: "466898038235",
  appId: "1:466898038235:web:fe3fa97226be2fe8a18bfe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)