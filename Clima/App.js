import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert, ImageBackground } from 'react-native';
import Formulario from './componentes/Formulario'
import Clima from './componentes/Clima'

const App = () => {


  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardaResultado] = useState({})

  const [bgImg, guardarBgImg] = useState(require('./img/fondo-Azul.png'))

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appID = 'youapikey';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardaResultado(resultado);
          guardarConsultar(false);

          //modifica los colores de fondo basado en la temperatura

          const kelvin = 273.15;
          const { main } = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10) {
            guardarBgImg(require('./img/frio.jpg'))

          } else if (actual >= 10 && actual < 25) {
            guardarBgImg(require('./img/medio.jpg'))
          } else {
            guardarBgImg(require('./img/muchocalor.png'))
          }

        } catch (error) {
          mostrarAlerta()
        }
      }
    }
    consultarClima();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultado,intenta con otra ciudad o pais',
      [{ text: 'OK' }]
    )
  }
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  /*const bgColorApp = {
    backgroundColor: bgColor
  }
*/

  return (
    <>
      <ImageBackground  source={bgImg}  
        style={styles.image}>
        <TouchableWithoutFeedback
          onPress={() => ocultarTeclado()}
        >

          <View style={[styles.app]}>
            <View style={styles.contenido}>
              <Clima
                resultado={resultado}
              />
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </View>
          </View>



        </TouchableWithoutFeedback>


      </ImageBackground>


    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%',

  },
  image: {
    flex:1
  },

});

export default App;
