import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker'
import axios from 'axios';


const Formulario = ({ moneda, cryptomoneda, guardarMoneda, guardarCryptomoneda,guardarConsultarAPI }) => {

    const [cryptomonedas, guardarCryptomonedas] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            console.log(resultado.data.Data);
            guardarCryptomonedas(resultado.data.Data);
        }
        consultarAPI()
    }, [])
    const obtenerMoneda = moneda => {
        guardarMoneda(moneda);
    }
    const obtenerCryptomoneda = crypto => {
        guardarCryptomoneda(crypto);
    }

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || cryptomoneda.trim() === '') {
            mostrarAlerta();
            return;
        }
        // pasa la validacion
        guardarConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        Alert.alert('ERROR...', 'Ambos campos son obligatorios',
            [
                { text: 'OK' }
            ])
    }

  
    return (

        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                itemStyle={{ height: 120 }}
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label="- Seleccione-" value="" />
                <Picker.Item label="Dolar Estadounidense" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                itemStyle={{ height: 120 }}
                selectedValue={cryptomoneda}
                onValueChange={cripto => obtenerCryptomoneda(cripto)}
            >
                <Picker.Item label="- Seleccione-" value="" />
                {cryptomonedas.map(crypto => (
                    <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                ))}
            </Picker>
            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text style={styles.textoCotizar}>Obtener Resultados</Text>
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    },
    btnCotizar: {
        backgroundColor: '#5e49e2',
        width: '65%',
        padding: 10,
        marginTop: 20,
        marginHorizontal: '19%'

    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-black',
        textTransform: 'uppercase',
        textAlign: 'center'

    }
})
export default Formulario;