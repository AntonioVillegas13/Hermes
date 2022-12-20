import { Button, Input, Icon } from "@rneui/base"
import { useState } from "react"
import { View, StyleSheet, Text, Alert } from "react-native"
import { CrearUsuario } from "../../Services/AutenticacionSrv"
import { TextInput } from 'react-native-paper';
import { Image } from '@rneui/themed';
import { guardarUSuario } from "../../Services/Usuarios";
import theme from '../../theme/theme'
export const Registrar = ({ navigation }) => {

    const [usuario, setUsuario] = useState();
    const [cedula, setCedula] = useState();
    const [correo, setCorreo] = useState();
    const [clave, setClave] = useState();
    const [confirmar, setConfirmar] = useState();
    const [uid, setuid] = useState("");
    const [cambiarOjo, setCambiarOjo] = useState(false);
    const [cambiarOjo2, setCambiarOjo2] = useState(false);
    
    const [hasErrorusuario, sethasErrorusuario] = useState(false)
    const [hasErrorcedula, sethasErrorcedula] = useState(false)
    const [hasErrorcorreo, sethasErrorcorreo] = useState(false)
    const [hasErrorclave, sethasErrorclave] = useState(false)
    const [hasErrorconfirmacion, sethasErrorconfirmacion] = useState(false)
    
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

        }
        
        if(hasErrorconfirmacion &&hasErrorclave &&hasErrorcorreo&&hasErrorcedula&&hasErrorusuario){
            Alert.alert("no se creo")
            return null;ss
        }else{
            crearUsuario();
        }

    }

    const crearUsuario = () => {
        CrearUsuario(correo, clave);

        console.log("uiID", global.userId)
        guardarUSuario({
            name: usuario,
            cedula: cedula,
            correo: correo,
            clave: clave,
            identificacion: global.userId
        });
        navigation.navigate("LoginNav");

    }



    return <View style={styles.container}>

        <View style={styles.cajaCabecera} >
            <Image source={require('../../../assets/HermesLogo.png')} style={{ width: 400, height: 160 }} />
            <Text style={{ fontSize: 20 }}>Registrar Usuario</Text>
        </View>
        <View style={styles.cajaCuerpo} >
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
        padding: 100,
        marginBottom: 50
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