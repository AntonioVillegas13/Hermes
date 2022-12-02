// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { doc, setDoc,addDoc,collection ,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";



export const loadConfiguration=()=>{
   // Alert.alert("carga la configuracio!!!");
    const app = initializeApp(firebaseConfig);
    global.dbCon=getFirestore(app);
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA1gAmzWzLm7eNt5d40naFkWwBTMGE8BQ",
  authDomain: "prueba13112022.firebaseapp.com",
  projectId: "prueba13112022",
  storageBucket: "prueba13112022.appspot.com",
  messagingSenderId: "103190844507",
  appId: "1:103190844507:web:54e388ae3623ba8e849b7e",
  measurementId: "G-Y4ZVK3CG9W"
};

// Initialize Firebase

//funciones a usar  para guardar,editar,recuperar
 {/* Esto no funcionará 
const guardar=()=>{
    let miPedido={
        nombre:"agua Gas2",
        Precio:"3.4",
        Peso:"433"
    
    }

    const refPedido =doc(db,"Pedidos","P-3");
        setDoc(refPedido,miPedido)
}

const guardarConAdd=()=>{
    let miPedido={
        nombre:"agua Gas2",
        Precio:"3.4",
        Peso:"433"
    
    }
    const refPedidios =collection(db,"Pedidos");
    addDoc(refPedidios,miPedido)
}
const RecuperarDocumento=async ()=>{
    const refPedido=doc(db,'Pedidos',"P-3")
    const personaSnap=await getDoc(refPedido);
   if (personaSnap.exists()){
    Alert.alert("existe")
   }else{
    Alert.alert("No existe")
   }
}
 */}