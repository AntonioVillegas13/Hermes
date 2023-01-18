
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect, useState } from "react";
import { consultarUnPedido } from "../../Services/ProductosSrv";

export const DetallePedido=({ route, navigation })=>{
    const { id } = route.params;
    const [ObjPedido,setObjPedido]= useState({});
    useEffect(() => {
        console.log("PEDIDO2",id);
        const willFocusSubscription = navigation.addListener("focus", () => {
            consultar();
            
        });
        return willFocusSubscription;
      

     }, [])
const consultar=async()=>{


 await   consultarUnPedido(id,setObjPedido);
 console.log("---------------------------OBJPedido",ObjPedido)

}

return(
    <View>
        <TarjetaDetallePedidos 
        item={id}
        objPedido={ObjPedido}

        
        />








       
       
    </View>
)

} 
