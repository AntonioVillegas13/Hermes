
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import { consultar } from "../../Services/ProductosSrv"
import { useEffect, useState } from "react"
import { cerrarSesion } from "../../Services/AutenticacionSrv";
import theme from "../../theme/theme";
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



    let ItemProduct = ({ prod, indice }) => {

        return (

            <ScrollView style={styles.impar} >
                <TouchableHighlight onPress={() => {
                }}>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start', flex: 1 }}>



                        <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 1, alignItems: 'center', alignContent: 'center', marginTop: 20 }}>
                            <Text>{prod.codigo}</Text>
                        </View>

                        <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 4 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 4, color: '#FAC028', fontWeight: 'bold' }}>{prod.nombre}</Text>
                            <Text style={{ fontSize: 15, fontStyle: 'italic', textAlign: 'left', color: "#eeeeee" }}> ({prod.categoria})</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'flex-end', flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#F7621E', fontStyle: 'italic', marginTop: 4 }}> USD</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7621E', textDecorationStyle: 'dashed', justifyContent: 'flex-end' }}> {prod.precio}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'flex-start', flex: 0.8, padding: 12 }}>
                            <View style={{ marginRight: 1, marginLeft: 2 }}>

                            </View>
                            <View style={{ marginLeft: 10 }}>

                            </View>

                        </View>




                    </View>

                </TouchableHighlight>

            </ScrollView  >


        );
    }









    return <View style={styles.container}>
        <View style={styles.cajaCabecera} >
           
                <Text style={{ fontSize: theme.fontSize.title }}>PEDIDOS</Text>
        </View>
        <View style={styles.cajaCuerpo} >
            <FlatList
                data={pedidos}
                renderItem={(e) => {

                    return <ItemProduct
                        indice={e.index}
                        prod={e.item}
                    />
                }}
                keyExtractor={(item) => { return item.codigo }}

            />
        </View>
        <View style={styles.cajaBotones}>
            <Button
                title='Cerrar Sesion'
                onPress={cerrarSesion}

            />
        </View>


        <FAB
            title="+ "
            placement="right"
            onPress={() => {
                navigation.navigate("TabArmarPedido")
            }
            }
        />

    </View>




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 100,
        paddingLeft: 30
    },
    impar: {

        marginLeft: 1,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#E09726',
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
        marginBottom:50
    },
    cajaCuerpo: {
       // backgroundColor: 'brown',
        flex:5,
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
        flex: 1
    }

});
