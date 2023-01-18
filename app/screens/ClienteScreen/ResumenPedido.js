import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableHighlight } from "react-native"
import { enviarPedidos } from "../../Services/ProductosSrv";
import theme from "../../theme/theme";

export const ResumenPedido = ({ navigation }) => {
    let Total = 0
    const [tolta,setToral]=useState();
    useEffect(() => {



        const willFocusSubscription = navigation.addListener("focus", () => {
            console.log("UID:", global.userIdLogin)

            resumen
            console.log((global.ResumenPedido));
            const productos = global.ResumenPedido

            productos.forEach(element => {
                let subTotal = element.precio * element.cantidad
                Total = Total + subTotal;
                console.log("sum", subTotal)
            });

            console.log("tOTAL", Total)
            setToral(Total)

        });
        return willFocusSubscription;




    }, [resumen]);



    const enviarDatos = () => {
        let pedido = {
            total: Total,
            productosArray: resumen,
            codigo: global.userIdLogin
        }
        console.log("UID:", global.userIdLogin)

        console.log("elemento enviado", pedido)
        enviarPedidos(pedido)
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
                        <View style={{ margin: 10, borderWidth: 3, margin: 20 }}>
                            <View style={styles.ViewRow}>
                                <Text>Producto #{prod.codigo}</Text>
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


        <View style={styles.container}>
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


            <Text>TOTAL:{tolta}</Text>


            <View style={styles.cajaBotones}>

                <Button
                    title='Enviar Pedido'
                    onPress={()=>{
                        enviarDatos();
                    }}
                    buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade }}
                    containerStyle={{
                        width: 200,
                        paddingTop: 40
                    }}

                />
            </View>
        </View>
    )


}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',

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
        justifyContent: 'center',
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
        flex: 1
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
    },


});