import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, View } from 'react-native';


const Animacion3 = () => {
    const [animacion] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 40, //valor que llega
            duration: 500, //cantidad de tiempo que tarda en llegar
            useNativeDriver:false //debe ser especificado como true o false para que funcione
        }
        ).start();//inicia la animacion
    }, [])
    return (
        <View>
            <Animated.Text style={
                [styles.texto, {
                    fontSize:animacion
                }
                ]}>Animacion3</Animated.Text>
        </View>


    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})


export default Animacion3;