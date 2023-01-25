import { collection, doc, getDocs, setDoc, addDoc, query, where, getDoc } from 'firebase/firestore'

export const consultarPedidosGenerales = async (fnsetPedidos) => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Pedidos");
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
        
            console.log("doce", documento.data());
            PedidoArray.push(documento.data());
            });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc", PedidoArray);

}


export const  RecuperarUsuarioFire=async(Id,FnSetUser)=>{
    console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= doc(global.dbCon,"Usuarios",Id)

    const SnapCliente = await getDoc(productoRef);
    console.log(Id)
    console.log("----------------------------------------------------------------USUARIO:",SnapCliente.data())
    FnSetUser(SnapCliente.data());
//     let PedidoArray = []
//     await SnapPedidos.forEach((documento) => {
//         console.log("doc", documento.data());
       
//             console.log("doce-------------------", documento.data());
//             PedidoArray.push(documento.data());
        



// });

}


