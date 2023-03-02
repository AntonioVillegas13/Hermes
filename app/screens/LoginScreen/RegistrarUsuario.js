import { Button, Input, Icon } from "@rneui/base"
import { useContext, useState } from "react"
import { View, StyleSheet, Text, Alert, Dimensions, Pressable, ScrollView } from "react-native"
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
    const [clave, setClave] = useState("");
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
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const contraseñaRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    function validarCedula(cedula) {
        // Verificar que la cédula tenga 10 dígitos numéricos
        if (!/^\d{10}$/.test(cedula)) {
            return false;
        }

        // Verificar que los dos primeros dígitos correspondan a un número entre 01 y 24
        const provincia = Number(cedula.substring(0, 2));
        if (provincia < 1 || provincia > 24) {
            return false;
        }

        // Verificar que el tercer dígito sea un número entre 0 y 6, o 9 para extranjeros
        const tipoCedula = Number(cedula.charAt(2));
        if (tipoCedula < 0 || tipoCedula === 7 || tipoCedula === 8 || (tipoCedula === 9 && provincia !== 0)) {
            return false;
        }

        // Verificar el dígito verificador
        let suma = 0;
        const ultimoDigito = Number(cedula.charAt(9));
        for (let i = 0; i < 9; i++) {
            const digito = Number(cedula.charAt(i));
            if (i % 2 === 0) {
                let resultado = digito * 2;
                if (resultado > 9) {
                    resultado -= 9;
                }
                suma += resultado;
            } else {
                suma += digito;
            }
        }
        const ultimoDigitoCalculado = (10 - (suma % 10)) % 10;
        return ultimoDigito === ultimoDigitoCalculado;
    }

    const validaciones = () => {
        if (usuario == null || usuario == "") {
            sethasErrorusuario(true)
            setmensajeusuario("Ingrese un nombre")

        } else {
            sethasErrorusuario(false)

        }

        if (cedula == null || cedula == "") {
            sethasErrorcedula(true)
            setmensajecedula("Ingrese una cedula")

        } else if (!validarCedula(cedula)) {
            sethasErrorcedula(true)
            setmensajecedula("Ingrese una cedula valida")
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
            if (!contraseñaRegex.test(clave)) {
                setmensajeclave("Contraseña no valida \nIntente  nuevamente \nRecuerde que debe tener 1 Mayúscula  y 1 número");
                sethasErrorclave(true)



            } else {

                sethasErrorclave(false)
            }



        }
        if (confirmar == null || confirmar == "") {
            sethasErrorconfirmacion(true)
            setmensajeconfirmacion("Ingrese una confirmacion de contraseña")

        } else {
            sethasErrorclave(false)
            if (clave == confirmar) {
                console.log("COINCIDEN SIGUE ADELANTE VIAJERO")
                if (!contraseñaRegex.test(confirmar)) {
                    setmensajeclave("Contraseña no valida \nIntente  nuevamente \nRecuerde que debe tener 1 Mayúscula  y 1 número");
                    sethasErrorclave(true)



                } else {

                    crearUsuario();
                    setModalVisible(true)
                    sethasErrorclave(false)
                }

            } else {
                console.log("NO COINCIDEN")
                sethasErrorclave(true)
                sethasErrorconfirmacion(true)
                setmensajeclave("Contraseña No Coincide")
                setmensajeconfirmacion("Contraseña No Coincide")

            }
        }

        if (hasErrorconfirmacion && hasErrorclave && hasErrorcorreo && hasErrorcedula && hasErrorusuario) {

            return null;
        } else {
            if (clave == confirmar) {

                console.log("COINCIDEN SIGUE ADELANTE VIAJERO")
                crearUser()
                sethasErrorclave(false)
                sethasErrorconfirmacion(false)
            } else {
                console.log("1.", clave, "2.", confirmar)
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

        <ScrollView>
            <View style={styles.cajaCabecera}>
                <Image source={require('../../../assets/HermesLogo.png')} style={{ width: 300, height: 150 }} />
                {/* <Text style={{ fontSize: 20 }}>Registrar Usuario</Text> */}
                <StyledText center bold secondTitle >Registrar Usuario</StyledText>
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
        </ScrollView>
    </View>
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        // backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 4
    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 1,
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
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 3
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