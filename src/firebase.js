import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRlSWfBuebReUn4zypsRsfd3ieWVsDVDo",
    authDomain: "apple-development-f7a4b.firebaseapp.com",
    projectId: "apple-development-f7a4b",
    storageBucket: "apple-development-f7a4b.appspot.com",
    messagingSenderId: "466898038235",
    appId: "1:466898038235:web:fe3fa97226be2fe8a18bfe"
})

export const auth = app.auth()
export default app