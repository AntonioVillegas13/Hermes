

import { collection, doc, getDocs, setDoc, addDoc ,getDoc,query,where} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


export const guardar = (producto) => {
   
    console.log(global.dbCon);
    const productRef = doc(global.dbCon, "Pedidos", producto.codigo);
    setDoc(productRef, producto);
}

export const guardar2 = (producto) => {
    console.log(global.dbCon);
    const productRef = collection(global.dbCon, "Pedidos");
    addDoc(productRef, producto);
}

export const consultar = async (fnsetPedidos,Id) => {
    
    console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("codigo", "==",Id));
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}

export const consultarProcesado = async (fnsetPedidos,Id) => {
    
    console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("codigo", "==",Id), where("StatusPedido", "==", true));
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}


export const consultarNoProcesado = async (fnsetPedidos,Id) => {
    
    console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= query(collection(global.dbCon, "Pedidos"), where("codigo", "==",Id), where("StatusPedido", "==", false));

    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}

export const consultarProducto = async () => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Producto");
    const SnapProductos = await getDocs(productoRef);
    let ProductosArray = []
    SnapProductos.forEach((documento) => {
        console.log("doc", documento.data());
        ProductosArray.push(documento.data());

    });

    global.ListaProducto = ProductosArray
    console.log("productoFunc", ProductosArray);

}

export const enviarPedidos = (pedido) => {
   
    pedido
    const pedidoRef = doc(global.dbCon, "Pedidos", pedido.id);
    setDoc(pedidoRef, pedido);




}


export const consultarUnPedido = async (id,fnsetObj) => {
    //console.log("globla",global.dbCon);
    const productoRef = doc(global.dbCon, "Pedidos",id);
    const docSnap = await getDoc(productoRef);
    console.log("dsfdsfdfdsfdsfds",docSnap.data());

    let PedidoObj = {}
    PedidoObj=docSnap.data();
    fnsetObj(PedidoObj);
    // console.log("productoFunc", PedidoObj);

}