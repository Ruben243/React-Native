import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

const Animacion4 = () => {
    const [animacion] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 360, //valor que llega
            duration:500, //cantidad de tiempo que tarda en llegar
            useNativeDriver: false //debe ser especificado como true o false para que funcione
        }
        ).start();//inicia la animacion
    }, [])


    const interpolacion=animacion.interpolate({
        inputRange:[0,360],
        outputRange:['0deg','360deg']

    })

    const estiloAnimacion={
        transform:[{rotate:interpolacion}]
    }

    return (
        <>
            <View>
                <Animated.View style={[styles.texto,estiloAnimacion]}></Animated.View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        width:100,
        height:100,
        backgroundColor:'blue',
        marginTop:30,
        marginLeft:30
    }
})


export default Animacion4;