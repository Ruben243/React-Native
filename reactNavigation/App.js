import 'react-native-gesture-handler';//DEBE IR EL PRIMERO
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"

// PANTALLAS
import Inicio from "./views/inicio"
import Nosotros from "./views/nosotros"

// TIPO DE NAVEGACION STACK
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      {/* TODO DEBE IR EN UN NAVIGATIONCONTAINER */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          //personalizacion que afecta a todas las pantallas
          screenOptions={{
             headerTitleStyle: {
                fontWeight: 'bold', //personaliza el tipo de letra
                alignSelf: 'center' //aliena al centro el texto
              }
          }}
        >
          {/* CADA PANTALLA DEBE IR DENTRO DE UN STACK.NAVIGATOR Y  SE DEFINEN CON STACK.SCREEN */}
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            // personaliza el titulo de la pagina 
            options={{
              title: "Componente principal",
              headerStyle: {
                backgroundColor: "#F4511E" //cambia el fondo
              },
              headerTintColor: "#FFF", //personaliza las el color de las letras
             
            }}

          />

          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            // titulo dinamico
            options={({ route }) => ({
              title: route.params.clienteId,
              headerTintColor: "#FFF", //personaliza las el color de las letras
              headerStyle: {
                backgroundColor: "blue"
              }
            })}
          />


        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
