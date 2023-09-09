// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB864LOcbbbBieIklIwBFBAjsPGDyI1j0U",
    authDomain: "coderfire-1ab09.firebaseapp.com",
    projectId: "coderfire-1ab09",
    storageBucket: "coderfire-1ab09.appspot.com",
    messagingSenderId: "305562127396",
    appId: "1:305562127396:web:90d89ce118e85b50e41cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
