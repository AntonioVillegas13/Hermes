import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableHighlight } from "react-native"
import { enviarPedidos } from "../../Services/ProductosSrv";
import theme from "../../theme/theme";
import { PedidoContext } from "../../context/PedidosContext";
import { useContext } from 'react';
import StyledText from "../../Components/StyledText";
import Header from "../../Components/Header";
import { RadioButton } from "react-native-paper";
import PedidoCard from "../../Components/PedidoCard";

export const ResumenPedido = ({ navigation }) => {
    const { user, setUser } = useContext(PedidoContext);
    const [txtEstado, setTxtEstado] = useState("");

    let Total = 0
    const [tolta, setToral] = useState();
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
                console.log(element.estado)

            });

            console.log("tOTAL", Total)
            setToral(Total)

        });
        return willFocusSubscription;




    }, [resumen]);



    const enviarDatos = () => {
        let pedido = {
            total: tolta,
            productosArray: resumen,
            codigo: user,
            estados:txtEstado
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


        <View style={styles.container2}>
            <Header back={() => navigation?.goBack()} />
            <StyledText title bold center>Resumen de pedido</StyledText >













            <View style={{ alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }} >
                    <RadioButton
                        value="first"
                        status={txtEstado === 'true' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTxtEstado('true')
                            console.log(txtEstado)
                        }}
                        color="red"
                    />
                    <StyledText body margin >Urgente</StyledText>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }} >

                    <RadioButton
                        value="second"
                        status={txtEstado === 'false' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTxtEstado('false')
                            console.log(txtEstado)

                        }}
                    />
                    <StyledText body margin  >Normal</StyledText>
                </View>

            </View>

            <View style={styles.container} >
                <View style={styles.cajaCuerpo}>


                    <StyledText subtitle bold white margin >Productos </StyledText>


                </View>







                <FlatList
                    data={
                        resumen
                    }
                    renderItem={({ item, index }) => {
                        // //console.log("ordersListStock-------item------",item)
                        return (
                            <PedidoCard
                                pedido={item}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return index;
                    }}
                />

            </View>

            <View style={styles.container} >





                <View style={styles.cajaCuerpo}>


                    <StyledText subtitle bold white margin >Resumen </StyledText>


                </View>



                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <StyledText body  >TOTAL:</StyledText>
                    <StyledText body >{tolta}</StyledText>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <StyledText body >TOTAL:</StyledText>
                    <StyledText body >{tolta}</StyledText>
                </View>

            </View>









            <Text>TOTAL:{tolta}</Text>


            <View style={styles.cajaBotones}>

                <Button
                    title='Enviar Pedido'
                    onPress={() => {
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
        alignItems: 'stretch',
        justifyContent: 'center',
        shadowColor: "black",
        margin: 20

    }, container2: {
        flex: 1,
        backgroundColor: '#fff1',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
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
        backgroundColor: theme.colors.jade,

        alignItems: 'stretch',
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