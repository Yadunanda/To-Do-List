import firebase from "firebase"
const firebaseApp=firebase.initializeApp{
  apiKey: "AIzaSyBm0Bp5CvFIcJTRjC1zXsW1po41HPAvh3s",
  authDomain: "todolist-9ae78.firebaseapp.com",
  projectId: "todolist-9ae78",
  storageBucket: "todolist-9ae78.appspot.com",
  messagingSenderId: "285290980573",
  appId: "1:285290980573:web:36b42a4195cc4021e1a734"
}
let database=firebaseApp.firestore()
