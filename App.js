
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
import { ArmarPedido } from './app/screens/ClienteScreen/ArmarPedido';
import PedidosContext, { PedidoContext } from './app/context/PedidosContext'
import { ResumenPedido } from './app/screens/ClienteScreen/ResumenPedido';
import { AdminPedidos } from './app/screens/AdministradorScreen/AdminPedidosScreen'
import theme from './app/theme/theme';
import { DetallePedido } from './app/screens/ClienteScreen/DetallePedido';
import { ListaPedidosNoProcesados } from './app/screens/TiposPedidoScreen/PedidosNoProcesadosScreen';
import { ListaPedidosProcesados } from './app/screens/TiposPedidoScreen/PedidosProcesadosScreen';
import { useContext } from 'react';


const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const DetalleStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const ClientesTab = () => {
  return <Stack.Navigator


    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
    }
    }>
    <Stack.Screen
      name="TabListaPedidos"
      component={ListaPedidosFinal}
      options={{
        title: "Pedidos"

      }}
    />
    <Stack.Screen
      name="TabArmarPedido"
      component={ArmarPedidoTab}
      options={{
        title: "Pedidos",

      }}
    />

    <Stack.Screen
      name="detallePedido"
      component={DetallePedido}
      options={{
        title: "Pedidos",

      }}
    />
      <Stack.Screen
      name="ListaPedidosProcesados"
      component={ListaPedidosProcesados}
      options={{
        title: "Pedidos",

      }}
    />
      <Stack.Screen
      name="ListaPedidosNoProcesados"
      component={ListaPedidosNoProcesados}
      options={{
        title: "Pedidos",

      }}
    />

  </Stack.Navigator>




}
// const Administrador = () => {
//   return <Tab.Navigator screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (route.name === 'TabArmarPedido1') {
//         iconName = "pencil-square-o"
//       } else if (route.name === 'TabPedidosAdmin') {
//         iconName = "shopping-cart";
//       }

//       // You can return any component that you like here!
//       return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
//     },
//     tabBarActiveTintColor: theme.colors.morado,
//     tabBarInactiveTintColor: 'gray',
//     tabBarStyle: {
//       // position: 'absolute',
//       backgroundColor: "#FBFBFF",
//       height: 60,
//     },
//     tabBarHideOnKeyboard: true,
//     headerShown: false,
//     // tabBarShowLabel: false,
//   })}


//   >
//     <Tab.Screen
//       name="TabPedidosAdmin"
//       component={AdminPedidos}
//       options={{
//         title: "PedidosAdminstrador"

//       }}
//     />



//   </Tab.Navigator>



// }


const ArmarPedidoTab = () => {
  return <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'TabArmarPedido1') {
        iconName = "pencil-square-o"
      } else if (route.name === 'TabResumenPedidos') {
        iconName = "shopping-cart";
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
    },
    tabBarActiveTintColor: theme.colors.morado,
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      // position: 'absolute',
      backgroundColor: "#FBFBFF",
      height: 60,
    },
    tabBarHideOnKeyboard: true,
    headerShown: false,
    // tabBarShowLabel: false,
  })}



  >



    <Tab.Screen
      name="TabArmarPedido1"
      component={ArmarPedido}
      options={{
        title: "ArmarPedidos"

      }}
    />

    <Tab.Screen
      name="TabResumenPedidos"
      component={ResumenPedido}
      options={{
        title: "resumenPedio"
      }}
    />

    {/* <Tab.Screen
      name="detallePedidoNav"
      component={DetallePedidoNav}
      options={{
        title: "detalle"
      }}
    /> */}

  </Tab.Navigator>

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
    <Stack.Screen name='Resumenpedidos' component={DetallePedido} />



  </Stack.Navigator>

}




export default function App() {
  const PedidosData = {
    productos: []
  }
  const [Login, setlogin] = useState(false);
  const[user,setUser]=useState();
  const registarObserver = async() => {
    const auth = getAuth();
    if (!global.DesSuscribirObserver) {
      global.DesSuscribirObserver = await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid;
          setUser(uid)
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

    <PedidoContext.Provider value={{user,setUser}} >
      <NavigationContainer>
        {Login ? <ClientesTab /> : <LoginNav />}
        {/* //Administrador ClientesTab */}
      </NavigationContainer>
    </PedidoContext.Provider>
  );
}
