// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';


const firebase = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});


export const firestore = getFirestore(firebase);

export const database = getDatabase(firebase);
