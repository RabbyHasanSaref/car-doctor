// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwfZ3qIan3omonC1kklHHxA2dwXDGu7RY",
  authDomain: "car-doctor-29f0d.firebaseapp.com",
  projectId: "car-doctor-29f0d",
  storageBucket: "car-doctor-29f0d.appspot.com",
  messagingSenderId: "667205970273",
  appId: "1:667205970273:web:b58d0927b9872d6e82fd20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;