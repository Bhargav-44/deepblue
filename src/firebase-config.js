// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo6Qu0mD_RZQ_YPpd_9i5qfMGeFN3QHa4",
  authDomain: "project-deep-blue-e03f3.firebaseapp.com",
  projectId: "project-deep-blue-e03f3",
  storageBucket: "project-deep-blue-e03f3.appspot.com",
  messagingSenderId: "57209866284",
  appId: "1:57209866284:web:259eb14676ba43fa52a989",
  measurementId: "G-80NRE79V9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);