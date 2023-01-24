import { useEffect } from "react";
import { FlatList, ScrollView, TouchableHighlight, StyleSheet, View, Text } from "react-native";
import theme from "../theme/theme";
import PedidoCard from "./PedidoCard";
import StyledText from "./StyledText";


export const TarjetaDetallePedidos = (props) => {

    const Pedido = props.item;
    const ObjPedido = props.objPedido

    useEffect(() => {
        console.log("PEDIDO", Pedido);
    }, [])




    return (




        <ScrollView >


            <View style={styles.container} >





                <View style={styles.cajaCuerpo}>


                    <StyledText subtitle bold white margin >Productos </StyledText>


                </View>


                <FlatList
                    data={
                        ObjPedido.productosArray
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
                    <StyledText body >{ObjPedido.subTotal}</StyledText>
                </View>
                <View style={styles.itemsResumen}>
                    <StyledText body >Monto por envio urgente:</StyledText>
                    <StyledText body >{ObjPedido.extra}</StyledText>
                </View>
                <View style={styles.itemsResumen}>
                    <StyledText body >Total:</StyledText>
                    <StyledText body >{ObjPedido.total}</StyledText>
                </View>
                

            </View>
        </ScrollView  >

    );



}
const styles = StyleSheet.create({
    itemsResumen: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding:4
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        shadowColor: "black",
        margin: 20

    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
    ,
    impar: {

        marginLeft: 1,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        //backgroundColor: '#E09726',
        borderRadius: 5




    },
    titulo: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#F03E0A',
        letterSpacing: 3


    },
    Inputs: {
        borderBottomColor: "#82B5FA",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 3.7,
        borderBottomRightRadius: 3.7,
        backgroundColor: "#B3DDF2",
        margin: 20,
        marginTop: 2,
        marginLeft: 1,
        shadowColor: "#0000",
        shadowRadius: 100
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonS: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#6B7FE3",
        margin: 10
    },
    buttonP: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#82B5FA",
        margin: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginBottom: 50,
        paddingTop: 10,
    },
    cajaCuerpo: {
        backgroundColor: theme.colors.jade,
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
    ,
    cajaCuerpo2: {
        backgroundColor: theme.colors.morado,
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
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
    }

});
