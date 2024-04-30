// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6NrQYAlXQ_Ycs3Y1VuvqksLv3YFp9TTY",
  authDomain: "netflixclone-c3d8f.firebaseapp.com",
  projectId: "netflixclone-c3d8f",
  storageBucket: "netflixclone-c3d8f.appspot.com",
  messagingSenderId: "1094853907988",
  appId: "1:1094853907988:web:dac88cd0513ed008b0f901",
  measurementId: "G-FZR0QE88RD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
