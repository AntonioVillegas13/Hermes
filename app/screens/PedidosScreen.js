import {View,Text,StyleSheet,Alert}  from 'react-native'

import { Input ,Button,Icon} from '@rneui/base';
import { useState } from 'react';
// Import the functions you need from the SDKs you need
import { loadConfiguration } from '../utils/FirebaseConfig';
import { guardar,guardar2} from '../Services/ProductosSrv'

export const Pedidos =({navigation,route})=>{
    loadConfiguration();
const GuardarProducto=()=>{
    Alert.alert("Guardando");

    if(nameProducto!=null ||codigo!=null || precio!=null|| Peso!=null){
    guardar2({
        nombre:nameProducto,
        codigo:codigo,
        precio:parseFloat(precio),
        Peso:Peso
    })
}
}

const [nameProducto,setnameProducto]=useState(null);
const [codigo,setcodigo]=useState(null);
const [precio,setprecio]=useState(null);
const [Peso,setpeso]=useState(null);


const limpiar =()=>{
    setpeso(null);
    setprecio(null);
    setcodigo(null);
    setnameProducto(null);
    navigation.goBack();
    if(route.params&&route.params.fnRepintarLista){
    route.params.fnRepintarLista();
}

}

    return <View styles={styles.container}>
        <Text>{nameProducto}</Text>
       
    <Input
      placeholder='Producto'
     value={nameProducto}
     onChangeText={setnameProducto}   
     label="nombre"
     leftIcon={<Icon
        name='idcard'
        type='ant-design'
        color='black'
        size={23}
     />
     
     }
    />

    <Input
      placeholder='Codigo'
     value={codigo}
     onChangeText={setcodigo}  
     label="Codigo"
     leftIcon={<Icon
        name='barcode'
        type='ant-design'
        color='black'
        size={23}
     /> 
     } s
     /> 

    <Input
      placeholder='Precio'
     value={precio}
     onChangeText={setprecio}  
     label="Precio"
     leftIcon={<Icon
        name='monetization-on'
        type='material-icons'
        color='black'
        size={23}
     /> 
     } 
    />
    
    <Input
      placeholder='Peso'
     value={Peso}
     onChangeText={setpeso}   

     leftIcon={<Icon
        name='weight'
        type='material-community'
        color='black'
        size={23}
     /> 
     } 
    />


    <Button
    title='Guardar'
    icon={{
        name: 'user',
        type: 'font-awesome',
        size: 15,
        color: 'white',

      }}
      onPress={()=>{
        //Alert.alert("es",nameProducto);
        //{RecuperarDocumento();
        GuardarProducto();
        limpiar();
}}

    />



    </View>



}

const styles =StyleSheet.create(
    {
        container:{
            flex :1,
            flexDirection:"column",
            justifyContent:"flex-start",//eje principal
            alignItems:'stretch',
            backgroundColor:'#fff'
        }
    }
)