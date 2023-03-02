
import {collection, doc,getDocs,setDoc,addDoc, getDoc} from 'firebase/firestore'





export const guardarUSuario=(usuario)=>{
    const productRef=doc(global.dbCon,"UsuarioComun",usuario.identificacion);
    setDoc(productRef,usuario);


}


export const recuperarUsuario2=async(Id,fnNombre)=>{

    const docRef = await doc(global.dbCon, "UsuarioComun", Id);
    const docSnap = await getDoc(docRef);
    console.log("----------Usuario",docSnap.data())
    fnNombre(docSnap.data())
}



