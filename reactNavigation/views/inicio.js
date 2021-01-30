import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native"


const inicio = ({ navigation }) => {

  const informacion={
    clienteId:'Hola Linkedin',
    totalPagar:500
  }

// NAVIGATION SON LOS METODOS Y FUNCIONES PARA IR ENTRE PANTALLAS
  const visitarNosotros = () => {
    navigation.navigate('Nosotros',informacion)

  }
  return (
    <View
      style={styles.contenedor}
    >
      <Text>Navegar a segunda pantalla!</Text>

      <Button
        title="Click me!"
        onPress={() => visitarNosotros()}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default inicio;