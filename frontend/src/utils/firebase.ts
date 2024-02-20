import { initializeApp } from "firebase/app";
// import { Signin } from './components/Signin';

const firebaseConfig = {
  apiKey: "AIzaSyBXSd9-nbOVwaXS5682sLJI3SxvNMoZh4g",
  authDomain: "lms-compiler-3843c.firebaseapp.com",
  projectId: "lms-compiler-3843c",
  storageBucket: "lms-compiler-3843c.appspot.com",
  messagingSenderId: "740239781647",
  appId: "1:740239781647:web:9c5e6099d974e57b6a987a",
  measurementId: "G-QRZ4CRMPRK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);