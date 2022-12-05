
import { View, Text, Alert, StyleSheet, FlatList } from "react-native"
import { Button, FAB } from "@rneui/base"
import { consultar } from "../../Services/ProductosSrv"
import { useEffect, useState } from "react"
import { cerrarSesion } from "../../Services/AutenticacionSrv";
export const ListaPedidosFinal = ({ navigation }) => {
    const [pedidos, setPedidos] = useState([]);
    const recuperarProductos = () => {
        console.log("recupernado datos ")
        consultar(setPedidos);
        console.log("OED", pedidos);
    }

    useEffect(() => {
        recuperarProductos();
    }, [])

    return <View style={styles.container}>

        <Text>liSTA DE PRODUCTOS</Text>
        <Button
            title='presiona'
            onPress={recuperarProductos}

        />

        <FlatList
            data={pedidos}
            renderItem={({ item }) => {

                return <Text>{item.precio}m</Text>
            }}
            keyExtractor={(item) => { return item.codigo }}

        />
        <Button
            title='Cerrar Sesion'
            onPress={cerrarSesion}

        />
        <FAB
            title="+ "
            placement="right"
            onPress={() => {
                navigation.navigate("PedidosNav", { fnRepintarLista: recuperarProductos })
            }
            }
        />

    </View>




}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)