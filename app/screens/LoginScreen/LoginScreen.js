

import { View, Text, Alert, StyleSheet, TouchableHighlight, Modal, Pressable } from "react-native"
import { Button, Icon } from '@rneui/base';
import { useState } from "react";
import { cerrarSesion, RecuperarUsuario } from "../../Services/AutenticacionSrv";
import { Ingresar } from "../../Services/AutenticacionSrv";
import { Image, Input } from '@rneui/themed';
import StyledText from '../../theme/StyledText';
import { HelperText, TextInput } from 'react-native-paper';
import theme from '../../theme/theme'
import { validateEmail } from "../../commons/validations";
import { PedidoContext } from "../../context/PedidosContext";
import { useContext } from 'react';
import StyledInput from '../../Components/StyledInput'
export const LoginForm = ({ navigation }) => {
    const { user, setUser } = useContext(PedidoContext);
    const [usuario, setUsuario] = useState();
    const [contraseña, setcontraseña] = useState();
    const [errorCorreo, setErrorCorreo] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const [hasErrorcorreo, sethasErrorcorreo] = useState(false)
    const [hasErrorcontraseña, sethasErrorcontraseña] = useState();
    const [cambiarOjo, setCambiarOjo] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const contraseñaRegex = /^(?=.*[A-Z])(?=.*[1-9])[A-Za-z0-9]{1,10}$/;
    const validaciones = () => {
        if (contraseña == null || contraseña == "") {
            sethasErrorcontraseña(true)
            setErrorPassword("ingrese una contraseña")

        } else {

            sethasErrorcontraseña(false)
        }
        if (usuario == null || usuario == "") {
            sethasErrorcorreo(true)
            setErrorCorreo("Ingrese un correo")
            setModalVisible(true);

        } else {

            sethasErrorcorreo(false)


            if (!emailRegex.test(usuario)) {
                setErrorCorreo("Invalid email");
                sethasErrorcorreo(true)

            } else {
                setErrorCorreo("Ingrese un correo")
                sethasErrorcorreo(false)
            }


        }







    }









    const ValidarLogin = async () => {
        validaciones()

        await Ingresar(usuario, contraseña);

        // Alert.alert("Vlaidando")


    }

    return <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{errorCorreo}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

        <View style={styles.cajaCabecera}>
            <Image source={require('../../../assets/HermesLogo.png')} style={{ width: 400, height: 160 }} />
        </View>
        <View style={styles.cajaCuerpo}>

            <TextInput
                label="Email"
                value={usuario}
                onChangeText={setUsuario}
                mode="outlined"
                maxLength={50}


            />
            <HelperText type="error" visible={hasErrorcorreo}>
                {errorCorreo}
            </HelperText>

            <TextInput
                label="Contraseña"
                value={contraseña}
                onChangeText={setcontraseña}
                mode="outlined"
                secureTextEntry={cambiarOjo}
                right={
                    cambiarOjo ? <TextInput.Icon icon="eye"

                        onPress={() => {
                            setCambiarOjo(!cambiarOjo);
                            return false;
                        }} /> : <TextInput.Icon icon="eye"
                            onPress={() => {
                                setCambiarOjo(!cambiarOjo);
                                return false;
                            }} />
                }



            />
            <HelperText type="error" visible={hasErrorcontraseña}>
                {errorPassword}
            </HelperText>
        </View>
        <View style={styles.cajaBotones}>

            <Button
                title='Iniciar Sesion'
                onPress={ValidarLogin}
                buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.morado }}
                containerStyle={{
                    width: 200,
                    paddingTop: 40
                }}
            />
            <View style={{ flexDirection: "row" }}>
                <Text>Recupera tu cuenta.</Text>

                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => { navigation.navigate("ReseteoNav") }}>
                    <View >
                        <Text style={styles.titulo} >Click aqui</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Button
                title='Crear Cuenta'
                onPress={() => {
                    navigation.navigate("RegistrarNav")
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 100
    },
    cajaCuerpo: {
        //backgroundColor: 'brown',
        flex: 4,
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
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 4
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "10%",
        // backgroundColor: 'red',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop:"5%",
        padding: "20%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

});