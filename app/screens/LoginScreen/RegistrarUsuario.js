import { Button, Input, Icon } from "@rneui/base"
import { useContext, useState } from "react"
import { View, StyleSheet, Text, Alert, Dimensions, Pressable } from "react-native"
import { CrearUsuario } from "../../Services/AutenticacionSrv"
import { HelperText, Modal, TextInput } from 'react-native-paper';
import { Image } from '@rneui/themed';
import { guardarUSuario } from "../../Services/Usuarios";
import theme from '../../theme/theme'
import StyledInput from '../../Components/StyledInput'
import { PedidoContext } from "../../context/PedidosContext";
import Logotipo from "../../../assets/HermesLogo.png";
import StyledText from "../../Components/StyledText";


export const Registrar = ({ navigation }) => {
    const { user, setUser } = useContext(PedidoContext);
    const [usuario, setUsuario] = useState();
    const [cedula, setCedula] = useState();
    const [correo, setCorreo] = useState();
    const [clave, setClave] = useState();
    const [confirmar, setConfirmar] = useState();
    const [uid, setuid] = useState("");
    const [cambiarOjo, setCambiarOjo] = useState(false);
    const [cambiarOjo2, setCambiarOjo2] = useState(false);
    const [Uid, setUid] = useState();

    const [hasErrorusuario, sethasErrorusuario] = useState(false)
    const [hasErrorcedula, sethasErrorcedula] = useState(false)
    const [hasErrorcorreo, sethasErrorcorreo] = useState(false)
    const [hasErrorclave, sethasErrorclave] = useState(false)
    const [hasErrorconfirmacion, sethasErrorconfirmacion] = useState(false)
    const [modalVisible, setModalVisible] = useState(true);

    const [mensajeUsuario, setmensajeusuario] = useState("")
    const [mensajeCedula, setmensajecedula] = useState("")
    const [mensajeCorreo, setmensajecorreo] = useState("")
    const [mensajeclave, setmensajeclave] = useState("")
    const [mensajeConfirmacion, setmensajeconfirmacion] = useState("")


    const validaciones = () => {
        if (usuario == null || usuario == "") {
            sethasErrorusuario(true)
            setmensajeusuario("Ingrese un nombre")
            
        } else {
            sethasErrorusuario(false)

        }

        if (cedula == null || cedula == "") {
            sethasErrorcedula(true)
            setmensajecedula("Ingrese una contraseña")

        } else {
            sethasErrorcedula(false)

        }
        if (correo == null || correo == "") {
            sethasErrorcorreo(true)
            setmensajecorreo("Ingrese un correo")

        } else {
            sethasErrorcorreo(false)

        }
        if (clave == null || clave == "") {
            sethasErrorclave(true)
            setmensajeclave("Ingrese una contraseña")
        } else {
            sethasErrorclave(false)

        }
        if (confirmar == null || clave == "") {
            sethasErrorconfirmacion(true)
            setmensajeconfirmacion("Ingrese una confirmacion de contraseña")

        } else {
            sethasErrorclave(false)
            if (clave == confirmar) {
                console.log("COINCIDEN SIGUE ADELANTE VIAJERO")
               
                crearUsuario();
                setModalVisible(true)
                sethasErrorclave(false)
            } else {
                console.log("NO COINCIDEN")
                sethasErrorclave(true)
                sethasErrorconfirmacion(true)
                setmensajeclave("Contraseña No Coincide")
                setmensajeconfirmacion("Contraseña No Coincide")

            }
        }

        if (hasErrorconfirmacion && hasErrorclave && hasErrorcorreo && hasErrorcedula && hasErrorusuario) {
            Alert.alert("no se creo")
            return null;
        } else {

            if (clave == confirmar) {
                console.log("COINCIDEN SIGUE ADELANTE VIAJERO")
               
                crearUsuario();
                setModalVisible(true)
                sethasErrorclave(false)
            } else {
                console.log("NO COINCIDEN")
                sethasErrorclave(true)
                sethasErrorconfirmacion(true)
                setmensajeclave("Contraseña No Coincide")
                setmensajeconfirmacion("Contraseña No Coincide")

            }

        }

    }

    const crearUser = async () => {

        await CrearUsuario(correo, clave, setUser);
        console.log("uiID", global.userId)
        console.log("uiID2", uid)
        await guardarUSuario({
            name: usuario,
            cedula: cedula,
            correo: correo,
            clave: clave,
            identificacion: global.userId
        });




    }



    const crearUsuario = () => {



        crearUser();
        console.log("User---------------------", user)

        navigation.navigate("LoginNav");

    }



    return <View style={styles.centeredView}>
      

        <View style={styles.cajaCabecera}>
            <Image source={require('../../../assets/HermesLogo.png')} style={{ width: 400, height: 160 }} />
            {/* <Text style={{ fontSize: 20 }}>Registrar Usuario</Text> */}
            <StyledText  center   bold    secondTitle >Registrar Usuario</StyledText>
        </View>
        <View style={styles.cajaCuerpo}>

            <TextInput
                value={cedula}
                label='Cedula'
                onChangeText={setCedula}
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
              <HelperText type="error" visible={hasErrorcedula}>
                {mensajeCedula}
            </HelperText>
            <TextInput
                value={usuario}
                label='Nombre'
                onChangeText={setUsuario}
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
              <HelperText type="error" visible={hasErrorusuario}>
                {mensajeUsuario}
            </HelperText>
            <TextInput
                value={correo}
                label='Correo Electronico'
                onChangeText={setCorreo}
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
              <HelperText type="error" visible={hasErrorcorreo}>
                {mensajeCorreo}
            </HelperText>
            <TextInput
                value={clave}
                label='Contraseña'
                onChangeText={setClave}
                KeyboardType="email-address"
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
             <HelperText type="error" visible={hasErrorclave}>
                {mensajeclave}
            </HelperText>

            <TextInput
                value={confirmar}
                label='Confirmar Contraseña'
                onChangeText={setConfirmar}
                KeyboardType="email-address"
                mode="outlined"
                secureTextEntry={cambiarOjo2}
                right={
                    cambiarOjo2 ? <TextInput.Icon icon="eye"

                        onPress={() => {
                            setCambiarOjo2(!cambiarOjo2);
                            return false;
                        }} /> : <TextInput.Icon icon="eye"
                            onPress={() => {
                                setCambiarOjo2(!cambiarOjo2);
                                return false;
                            }} />
                }
            />
            <HelperText type="error" visible={hasErrorconfirmacion}>
                {mensajeConfirmacion}
            </HelperText>
        </View>
        <View style={styles.cajaBotones}>

            <Button
                title='Crear Usuario'
                onPress={validaciones}
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
        // backgroundColor: "blue",
        // backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 3,
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
        paddingTop: 130,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: "10%",
        // backgroundColor: 'red',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: "5%",
        paddingHorizontal: "20%",
        justifyContent: "space-around",
        paddingBottom: "5%",
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
    }, logo: {
        marginVertical: 20,
        resizeMode: "center",
    }

});