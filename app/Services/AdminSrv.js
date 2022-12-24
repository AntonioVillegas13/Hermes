import { collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore'

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