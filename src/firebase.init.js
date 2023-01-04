// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ5ooPncx0hNUpPWf60z4tKwrGXKIxgOY",
  authDomain: "auth-practice-53a67.firebaseapp.com",
  projectId: "auth-practice-53a67",
  storageBucket: "auth-practice-53a67.appspot.com",
  messagingSenderId: "703512986891",
  appId: "1:703512986891:web:f15d581bd79bd61f74ce0e",
  measurementId: "G-R7ZBJEQHX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
