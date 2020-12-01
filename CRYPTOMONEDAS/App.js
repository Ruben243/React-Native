import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import axios from 'axios'
import Cotizacion from './componentes/Cotizacion';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [cryptomoneda, guardarCryptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCryptomonedas = async () => {
      if (consultarAPI) {
        // consultar la api para obtener los rsultados
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        // ocultar el spiner y mostrar resultado
        guardarCargando(true)
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
          guardarConsultarAPI(false),
            guardarCargando(false)
        }, 3000);
      }
    }
    cotizarCryptomonedas()
  }, [consultarAPI]);

  // mostrar el spiner o el resultado
  const spinner = cargando ? <ActivityIndicator size="large" color="#5e49e2" /> : <Cotizacion resultado={resultado} />


  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.image}
          source={require('./assets/assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            cryptomoneda={cryptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCryptomoneda={guardarCryptomoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />

        </View>
        <View style={{marginTop:40}}>
          {spinner}

        </View>

      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido: {
    marginHorizontal: '2.5%',
  }
});

export default App;
