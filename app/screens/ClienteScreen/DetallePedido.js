
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect, useState } from "react";
import { consultarUnPedido } from "../../Services/ProductosSrv";
import StyledText from "../../Components/StyledText";
import Header from "../../Components/Header";

export const DetallePedido = ({ route, navigation }) => {
    const { id } = route.params;
    const [ObjPedido, setObjPedido] = useState({});
    useEffect(() => {
        console.log("PEDIDO2", id);
        const willFocusSubscription = navigation.addListener("focus", () => {
            consultar();

        });
        return willFocusSubscription;


    }, [])
    const consultar = async () => {


        await consultarUnPedido(id, setObjPedido);
        console.log("---------------------------OBJPedido", ObjPedido)

    }

    return (
        <View>
            <Header back={() => navigation?.goBack()} />
            <StyledText title bold center>Resumen de pedido</StyledText >
            <StyledText>{ObjPedido.id}</StyledText>
            <ScrollView>
                <TarjetaDetallePedidos
                    item={id}
                    objPedido={ObjPedido}


                />

            </ScrollView>










        </View>
    )

} 
