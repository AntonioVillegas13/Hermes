
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { Home } from './app/screens/HomeScreen'
//import { Pedidos } from './app/screens/PedidosScreen';
import { loadConfiguration } from './app/utils/FirebaseConfig';
import { ListaPedidos } from './app/screens/ListaPedidosScreen';
import { LoginForm } from './app/screens/LoginScreen/LoginScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { Registrar } from './app/screens/LoginScreen/RegistrarUsuario';
import { ReseteoForm } from './app/screens/LoginScreen/ReseteoCorreoScreen';
import { Pedidos } from './app/screens/PedidosScreen'
import { ListaPedidosFinal } from './app/screens/ClienteScreen/PedidosScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContenidoA } from "./app/screens/ContenidoA";
import { Contenidob } from "./app/screens/ContenidoB";
import { Icon } from '@rneui/base';

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const ClientesTab=()=>{
return <Tab.Navigator>
  <Tab.Screen
        name="TabListaPedidos"
        component={ListaPedidosFinal}
        options={{
          title: "Pedidos"
        }}
      />
</Tab.Navigator>

}

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          title: "Productos"
        }}
      />
      <Tab.Screen
        name="TabPedidos"
        component={Pedidos}
        options={{
          title: "Pedidos"
        }}
      />
      <Tab.Screen
        name="TabContenidoB"
        component={Contenidob}
        options={{
          title: "Productos",
          tabBarLabel: "Acerca De",
          tabBarIcon: ({ size, tintColor }) => {
            return (
              < Icon
                name="tool"
                size={size}
                color={tintColor}
                type='ant-design'
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="ProductosNav"
        options={{
          headerShown: false
        }}
        component={ProductoNav} />
    </Tab.Navigator>
  )
}

const LoginNav = () => {
  return <LoginStack.Navigator>


    <LoginStack.Screen
      name="LoginNav"
      options={{
        headerShown: false
      }}
      component={LoginForm} />
    <LoginStack.Screen
      name="RegistrarNav"
      options={{
        headerShown: false
      }}
      component={Registrar} />

    <LoginStack.Screen
      name="ReseteoNav"
      options={{
        headerShown: false
      }}
      component={ReseteoForm} />



  </LoginStack.Navigator>
}
const ProductoNav = () => {
  return <Stack.Navigator screenOptions={{
    // title: 'Formulario Pedido',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }} >
    <Stack.Screen name='ListaProductosNav' component={ListaPedidos} />
    <Stack.Screen name='PedidosNav' component={Pedidos} />




  </Stack.Navigator>

}




export default function App() {

  const [Login, setlogin] = useState(false);
  const registarObserver = () => {
    const auth = getAuth();
    if (!global.DesSuscribirObserver) {
      global.DesSuscribirObserver = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid;
          console.log("Observer Cambia !!!!a sing in1")
          setlogin(true);
          console.log("L,", Login)
          // ...
        } else {
          // User is signed out
          // ...
          console.log("Observer Cambia !!!!a sing out")
          setlogin(false);
        }
      });
    }
  }

  loadConfiguration();
  registarObserver();



  return (


    <NavigationContainer>
      {Login ? <ClientesTab /> : <LoginNav />}

    </NavigationContainer>
  );
}
