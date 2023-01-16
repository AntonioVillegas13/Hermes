
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect } from "react";


export const DetallePedido=({ route, navigation })=>{
    const { ItemPed } = route.params;

    useEffect(() => {
        console.log("PEDIDO2",ItemPed);
     }, [])
return(
    <View>
        <TarjetaDetallePedidos 
        item={ItemPed}
        
        />






       
       
    </View>
)

} 
