// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {initializeFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { doc, setDoc,addDoc,collection ,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyBA1gAmzWzLm7eNt5d40naFkWwBTMGE8BQ",
    authDomain: "prueba13112022.firebaseapp.com",
    projectId: "prueba13112022",
    storageBucket: "prueba13112022.appspot.com",
    messagingSenderId: "103190844507",
    appId: "1:103190844507:web:0b19c6797e547e65849b7e",
};






export const loadConfiguration=()=>{
   // Alert.alert("carga la configuracio!!!");
    const app = initializeApp(firebaseConfig);
    const db =initializeFirestore(app,{
        experimentalForceLongPolling: true,
    });
    initializeApp(firebaseConfig);
    global.dbCon=db;
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

