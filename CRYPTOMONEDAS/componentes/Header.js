import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Header = () => (
    <Text style={styles.encabezado}>Criptomonedas</Text>

);

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor:'#5e48e2',
        paddingBottom:10,
        textAlign:'center',
        fontSize:20,
        textTransform:'uppercase',
        color:'#FFF',
        marginBottom:30

    },
})



export default Header;