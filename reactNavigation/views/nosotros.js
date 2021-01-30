import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native"

const nosotros = ({ navigation, route }) => {

  const { clienteId } = route.params;

  const volver = () => {
    // FORMA DE NAVEGAR ENTRE PANTALLAS

    // navigation.navigate('Inicio')
    navigation.goBack()
    // navigation.push('Inicio')
  }

  return (
    <View
      style={styles.contenedor}
    >
      <Text>Volver atras</Text>

      <Button
        title="Click me!"
        onPress={() => volver()}
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

export default nosotros;