// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-_3SfBkDVqEMhvjSuDbBokbIspl-EKI",
  authDomain: "lohith-pro.firebaseapp.com",
  projectId: "lohith-pro",
  storageBucket: "lohith-pro.appspot.com",
  messagingSenderId: "87609945807",
  appId: "1:87609945807:web:736d44ec2285d71679d1ba",
  measurementId: "G-1ZR8EYBTF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);