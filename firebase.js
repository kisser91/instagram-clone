// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB8s7LLTETT7XLs1qu_43ccpsi-RP6FY4c",

  authDomain: "instagram-clone-48565.firebaseapp.com",

  projectId: "instagram-clone-48565",

  storageBucket: "instagram-clone-48565.appspot.com",

  messagingSenderId: "287881708251",

  appId: "1:287881708251:web:26461382db4b01184d42fe"

};


// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };