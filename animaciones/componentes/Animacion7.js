import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
const Animacion7 = () => {

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.loop(

            Animated.sequence([
                Animated.timing(animacion1, {
                    toValue: 300,
                    duration: 1000,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione

                }),
                Animated.spring(animacion2, {
                    toValue: 10,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione

                }),
                Animated.spring(animacion2, {
                    toValue: 1,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione

                }),
                Animated.timing(animacion1, {
                    toValue: 620,
                    duration: 1000,
                    useNativeDriver: true//debe ser especificado como true o false para que funcione

                })
            ])

        ).start()

    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 }
        ]
    }
    return (
        <View>
            <Animated.View
                style={[
                    styles.caja,
                    estiloAnimacion
                ]}
            >

            </Animated.View>
        </View>

    );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
})
export default Animacion7;