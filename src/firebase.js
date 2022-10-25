import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDx8I9H14ovEzuH-KkBB7bbZZ1HUEhA_M4",
  authDomain: "apple-a817d.firebaseapp.com",
  projectId: "apple-a817d",
  storageBucket: "apple-a817d.appspot.com",
  messagingSenderId: "855261105997",
  appId: "1:855261105997:web:287bec1067daa7ab787104",
  measurementId: "G-L0PQ84X7GZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)