import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Animated, Alert} from 'react-native'
import { Picker } from "@react-native-community/picker";


const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const { pais, ciudad } = busqueda;

    const [animacionBoton] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if (pais.trim() === '' || ciudad.trim() === '') {
            mostrarAlerta();
            return;
        }
        guardarConsultar(true)
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y pais para la busqueda',
            [{ text: 'Entendido' }]
        )
    }
    const animacionEntrada = () => {
        Animated.spring(animacionBoton, {
            toValue: .75,
            useNativeDriver: true,
        }).start();
    }
    const animacionSalida = () => {
        Animated.spring(animacionBoton, {
            toValue: 1,
            friction: 3,
            tension: 10,
            useNativeDriver: true,
        }).start();
    }


    const estiloAnimacion = {
        transform: [{ scale: animacionBoton }]
    }
    return (
        <>  
            <View style={styles.formulario}>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.input}
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                        onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
                    />
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        itemStyle={{ height: 120, backgroundColor: 'white' }}
                        onValueChange={pais => guardarBusqueda({ ...busqueda, pais })}
                    >
                        <Picker.Item label="--Seleccione un pais--" value="" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="Mexico" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Peru" value="PE" />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={() => consultarClima()}
                >
                    <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                        <Text style={styles.btnTextoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'

    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'

    },
    btnTextoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }

})
export default Formulario;