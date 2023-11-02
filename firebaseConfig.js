import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDwOtJBRuE6NIP8a0JbIJILzGWAePqxqpc",
    authDomain: "medapi-11100.firebaseapp.com",
    projectId: "medapi-11100",
    storageBucket: "medapi-11100.appspot.com",
    messagingSenderId: "247344260276",
    appId: "1:247344260276:web:f4e88605990a1fca6be3e1",
    measurementId: "G-YWX2K7E75N"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the