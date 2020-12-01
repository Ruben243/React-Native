import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;
    return (
        <View style={styles.resultado}>
            <Text style={styles.texto}>Precio:
                <Text style={[styles.span, styles.precio]}>  {resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas alto del dia:{' '}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas bajo del dia:{' '}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variacion ultimas 24 horas:{' '}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.texto}>Ultima Actualizacion:{' '}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5e49e2',
        padding: 20,
     
    },
    texto: {
        color: 'white',
        fontFamily: 'Lato-regular',
        fontSize: 18,
        marginBottom: 10,
        textTransform:'uppercase'

    },
    precio: {
        fontSize: 30,
        color:'whitesmoke'
    },
    span: {
        fontFamily: 'Lato-black'
    }
})
export default Cotizacion;