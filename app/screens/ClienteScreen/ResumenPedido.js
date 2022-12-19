import { Button } from "@rneui/base";
import { useEffect } from "react";
import { Alert } from "react-native";
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableHighlight } from "react-native"
import { enviarPedidos  } from "../../Services/ProductosSrv";

export const ResumenPedido = () => {
    let Total = 0
    useEffect(() => {


        console.log("UID:",global.userIdLogin)

        resumen
        console.log((global.ResumenPedido));
        const productos = global.ResumenPedido
       
        productos.forEach(element => {
            let subTotal = element.precio * element.cantidad
            Total = Total + subTotal;
            console.log("sum", subTotal)
        });

        console.log("tOTAL", Total)


    }, []);



    const enviarDatos=()=>{
        let  pedido={
            total:Total,
            productosArray:resumen,
             codigo:global.userIdLogin
        }
        console.log("UID:",global.userIdLogin)

        console.log("elemento enviado",pedido)
        // enviarPedidos(pedido)
    }




    let ItemPedido = ({ prod, indice }) => {

        return (
            <View>
                <View>
                    <Text></Text>

                </View>




                <ScrollView style={styles.impar} >
                    <TouchableHighlight onPress={() => {
                    }}>
                        <View style={{ margin: 10 }}>
                            <View style={styles.ViewRow}>
                                <Text>PEDIDO #</Text>
                                <Text>{prod.nombre}</Text>
                            </View>

                        </View>


                    </TouchableHighlight>

                </ScrollView  >
            </View>

        );
    }

    console.log("Resumenpedios:", global.ResumenPedido);
    let resumen = global.ResumenPedido;

    return (
        <View >
            <FlatList
                data={resumen}

                renderItem={(e) => {

                    return <ItemPedido
                        indice={e.index}
                        prod={e.item}
                    />
                }}




                keyExtractor={item => item.codigo}

            />






            <Button
                title='Cerrar Sesion'
                onPress={enviarDatos}

            />
        </View>

    )


}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 25,
        marginBottom: 20
    },
    cajaCuerpo: {
        //backgroundColor: 'brown',
        flex: 6,
        alignItems: 'stretch',
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2
    },
    txtinput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: 'gray',
        width: 310,
        height: 50
    },
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -11,
        left: 10,
        marginLeft: 11,
    }

});