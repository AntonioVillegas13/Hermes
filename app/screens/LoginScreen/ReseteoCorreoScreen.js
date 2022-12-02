import { View, Text, Alert, StyleSheet, FlatList } from "react-native"
import { Input, Button, Icon } from '@rneui/base';
import { useState } from "react";
import { cerrarSesion } from "../../Services/AutenticacionSrv";
import { ResetContraseña } from "../../Services/AutenticacionSrv"; 

export const ReseteoForm = ({ navigation }) => {

    const [correo, setCorreo] = useState();

    const Reseteo = () => {
        //Alert.alert("Vlaidando")
        ResetContraseña(correo);
        navigation.goBack();
    }

    return <View style={styles.container}>
        <Text>Login Sistema </Text>
        <Input
            value={correo}
            label='Mail'
            onChangeText={setCorreo}
            KeyboardType="email-address"
            lefIcon={
                <Icon
                    name="user"
                    size={24}
                    color='black'
                    type='ant-design'
                />

            }

        />

        <Button
            title='Resetear Contraseña'
            onPress={Reseteo}

        />


    </View>
}



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)