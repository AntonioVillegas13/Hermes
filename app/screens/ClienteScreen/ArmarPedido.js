import { Button, Input, Icon } from "@rneui/base"
import { useEffect, useState } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import { CrearUsuario } from "../../Services/AutenticacionSrv"
import { TextInput } from 'react-native-paper';
import { Image } from '@rneui/themed';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { consultarProducto } from "../../Services/ProductosSrv";

import theme from '../../theme/theme'
import { set } from "react-native-reanimated";

global.ResumenPedido = [];
export const ArmarPedido = ({ navigation }) => {

    const [txtCod, setTxtCod] = useState("");
    const [txtNomP, setTxtNomP] = useState("");
    const [txtCategoria, setTxtCategoria] = useState("");
    const [txPrecioComp, setTxtPrecioComp] = useState("");
    const [txtCantidad, setTxtCantidad] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [Productos, setProductos] = useState([])
    const [suggestionList, setsuggestionlist] = useState([])

    useEffect(() => {
        cargarProducto();
        const willFocusSubscription = navigation.addListener("focus", () => {
            cargarProducto();
        });
        
        return willFocusSubscription;
      
    }, [])
    // useEffect(() => {
    //     setTxtCod(selectedItem?.precio)
    // }, [selectedItem])


    const cargarProducto = async() => {
        await consultarProducto();
        let response = Productos
        let lista = []
        if (response) {
            response.forEach(element => {
                lista.push({ id: element.id, title: element.nombre })
            });
        }


        setsuggestionlist(global.ListaProducto)



        console.log("response", response)
        console.log("Lista", lista)
        console.log("Pr", Productos)
        console.log("Pr2", global.ListaProducto)

    }
    const limpiar = () => {
        setTxtCantidad("")
        setSelectedItem(null)
    }

    const ArmarPed = () => {
        let ProductoAux = {
            codigo: selectedItem?.id,
            nombre: selectedItem?.title,
            categoria: selectedItem?.Category,
            precio: selectedItem?.price,
            cantidad: txtCantidad
        }

        ResumenPedido.push(ProductoAux)
        console.log(ResumenPedido.length)
        console.log(ResumenPedido)
        limpiar();

    }



    return <View style={styles.container}>

        <View style={styles.cajaCabecera} >

            <Text style={{ fontSize: theme.fontSize.title }}>Pedido</Text>
        </View>
        <View style={styles.cajaCuerpo} >

            <AutocompleteDropdown
                // clearOnFocus={false}
                // closeOnBlur={true}

                // closeOnSubmit={false}
                initialValue={{ id: '2' }} // or just '2'
                onSelectItem={setSelectedItem}
                dataSet={suggestionList}
                emptyResultText={'No existe ese producto'}
                containerStyle={{ width: Dimensions.get("window").width - 58 }}
                rightButtonsContainerStyle={{
                    right: 8,
                    height: 30,
                    // backgroundColor:'gray',
                    alignSelf: 'center',

                }}
                inputContainerStyle={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 5,
                    borderWidth: 1,
                }}

            />

            {/* <Text>{selectedItem?.precio}</Text> */}
            <TextInput
                value={selectedItem?.id}
                label='Codigo'
                onChangeText={setTxtCod}
                keyboardType="numeric"
                editable={false}
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={selectedItem?.title}
                label='Nombre'
                editable={false}

                onChangeText={setTxtNomP}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={selectedItem?.Category}
                label='Categoria'
                onChangeText={setTxtCategoria}
                editable={false}

                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={selectedItem?.price}
                label='Precio'
                editable={false}

                onChangeText={setTxtPrecioComp}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />

            <TextInput
                value={txtCantidad}
                label='Cantidad'
                onChangeText={(e) => {
                    console.log("")
                    setTxtCantidad(e)
                }}
                keyboardType="numeric"
                mode="outlined"

                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }
            />

        </View>






        <View style={styles.cajaBotones}>
            <Button
                title='Agregar al Pedido'
                onPress={() => {
                    if (txPrecioComp != null && txtCod != null && txtCategoria != null && txPrecioComp != null) {

                        ArmarPed();

                    }
                }}
                buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade }}
                containerStyle={{
                    width: 200,
                    paddingTop: 40
                }}
            />
        </View>



    </View>
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
        paddingTop: 100,
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