export const ItemProduct = ({ prod, indice }) => {
  
      return (<ScrollView style={styles.impar} >
        <TouchableHighlight onPress={() => {
  
    
  
          nuevo = false;
          indice = indice
        }}>
          <View style={{ flexDirection: 'row', alignContent: 'flex-start', flex: 1 }}>
  
  
  
            <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 1, alignItems: 'center', alignContent: 'center', marginTop: 20 }}>
              <Text>{prod.id}</Text>
            </View>
  
            <View style={{ flexDirection: 'column', alignContent: 'flex-start', flex: 4 }}>
              <Text style={{ fontSize: 20, paddingLeft: 4, color: '#FAC028', fontWeight: 'bold' }}>{prod.nombre}</Text>
              <Text style={{ fontSize: 15, fontStyle: 'italic', textAlign: 'left', color: "#eeeeee" }}> ({prod.categoria})</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'flex-end', flex: 2, alignItems: 'center' }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#F7621E', fontStyle: 'italic', marginTop: 4 }}> USD</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7621E', textDecorationStyle: 'dashed', justifyContent: 'flex-end' }}> {prod.PrecioVenta}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'flex-start', flex: 0.8, padding: 12 }}>
              <View style={{ marginRight: 1, marginLeft: 2 }}>
  
              </View>
              <View style={{ marginLeft: 10 }}>
                <Button title='X'
                  color={"red"}
                  onPress={({ indice }) => {
                    let indiceSec = indice;
                    setModalVisible(true);
                    return indiceSec
                  }
  
                  }
                />
              </View>
  
            </View>
  
  
  
  
          </View>
  
        </TouchableHighlight>
  
      </ScrollView  >
  
  
      );
    }