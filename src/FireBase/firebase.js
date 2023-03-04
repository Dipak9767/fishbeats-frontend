// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbT0hiJCUwK8-YfUP3Vb1E38SX3LduFs8",
  authDomain: "fishbeats-23689.firebaseapp.com",
  projectId: "fishbeats-23689",
  storageBucket: "fishbeats-23689.appspot.com",
  messagingSenderId: "100178073961",
  appId: "1:100178073961:web:ea0958bbecfb314d1185f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);