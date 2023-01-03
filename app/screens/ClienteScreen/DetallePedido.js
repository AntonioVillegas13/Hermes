
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";


export const DetallePedido=({ route, navigation })=>{
    const { Itemid } = route.params;
return(
    <View>
        <Text>Detalle Pedidos:{Itemid}</Text>
    </View>
)

} 
