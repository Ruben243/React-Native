import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';


const Animacion6 = () => {
    const [animacion1] = useState(new Animated.Value(0));

    const [animacion2] = useState(new Animated.Value(-50));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione
                }),
                Animated.timing(animacion1, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione
                }),
                Animated.timing(animacion2, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione
                }),
                Animated.timing(animacion1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione
                }),
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 500,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione
                }),
            ])
        ).start();
    }, []);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 }
        ]

    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[
                    styles.caja,
                    estiloAnimacion
                ]}>

            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'blue'
    }
});

export default Animacion6;