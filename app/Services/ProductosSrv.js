

import { collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore'


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

export const consultar = async (fnsetPedidos) => {
    //console.log("globla",global.dbCon);
    const productoRef = collection(global.dbCon, "Pedidos");
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    SnapPedidos.forEach((documento) => {
        if (documento.data().codigo==!global.userIdLogin){
            console.log("doc", documento.data());
            PedidoArray.push(documento.data());
        }
        

    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc", PedidoArray);

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
    const  pedidoRef= doc(global.dbCon, "Pedidos", pedido.codigo);
    setDoc(pedidoRef, pedido);




}