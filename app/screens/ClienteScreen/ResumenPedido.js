import { useEffect } from "react";
import { Alert } from "react-native";
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableHighlight } from "react-native"


export const ResumenPedido = () => {

    useEffect(() => {
        resumen
    }, []);




    let ItemProduct = ({ prod, indice }) => {

        return (

            <ScrollView style={styles.impar} >
                <TouchableHighlight onPress={() => {
                }}>
                    <View style={{ flexDirection: 'row', alignContent: 'flex-start', flex: 1 }}>



                        <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 1, alignItems: 'center', alignContent: 'center', marginTop: 20 }}>
                            <Text>{prod.id}</Text>
                        </View>

                        <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 4 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 4, color: '#FAC028', fontWeight: 'bold' }}>{prod.title}</Text>
                            <Text style={{ fontSize: 15, fontStyle: 'italic', textAlign: 'left', color: "#eeeeee" }}> ({prod.Category})</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'flex-end', flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#F7621E', fontStyle: 'italic', marginTop: 4 }}> USD</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7621E', textDecorationStyle: 'dashed', justifyContent: 'flex-end' }}> {prod.price}</Text>
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
    console.log("REsumenpedios:", global.ResumenPedido);
    let resumen = global.ResumenPedido;

    return (

        <FlatList
            data={resumen}
            renderItem={(e) => {

                return <ItemProduct
                    indice={e.index}
                    prod={e.item}
                />



            }}
            keyExtractor={(item) => { return resumen.id }}

        />
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