
import {collection, doc,getDocs,setDoc,addDoc} from 'firebase/firestore'





export const guardarUSuario=(usuario)=>{
    const productRef=doc(global.dbCon,"Usuarios",usuario.cedula);
    setDoc(productRef,usuario);


}