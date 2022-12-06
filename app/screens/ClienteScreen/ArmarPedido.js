import { Button, Input, Icon } from "@rneui/base"
import { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { CrearUsuario } from "../../Services/AutenticacionSrv"
import { TextInput } from 'react-native-paper';
import { Image } from '@rneui/themed';
import { guardarUSuario } from "../../Services/Usuarios";
import theme from '../../theme/theme'

global.ResumenPedido = [];
export const ArmarPedido = ({ navigation }) => {
    
    const [txtCod, setTxtCod] = useState("!23");
    const [txtNomP, setTxtNomP] = useState("sfdsf");
    const [txtCategoria, setTxtCategoria] = useState("ewrewr");
    const [txPrecioComp, setTxtPrecioComp] = useState("vs");
    const [txtCantidad, setTxtCantidad] = useState("erwr");


    const limpiar = () => {
        setTxtCod("");
        setTxtNomP("");
        setTxtCategoria("");
        setTxtPrecioComp("");
        setTxtCantidad("")
    }

    const ArmarPed = () => {
        let ProductoAux = {
            codigo: txtCod,
            nombre: txtNomP,
            categoria: txtCategoria,
            precio: txPrecioComp,
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
            <TextInput
                value={txtCod}
                label='Codigo'
                onChangeText={setTxtCod}
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
            <TextInput
                value={txtNomP}
                label='Nombre'
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
                value={txtCategoria}
                label='Categoria'
                onChangeText={setTxtCategoria}
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
                value={txPrecioComp}
                label='Precio'
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
                onChangeText={setTxtCantidad}
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