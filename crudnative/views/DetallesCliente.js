import React from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from "react-native-paper";
import globalStyles from "../styles/global";
import axios from 'axios';

const DetallesCliente = ({ navigation, route }) => {
    const { nombre, telefono, email, empresa, id } = route.params.item;
    const { guardarConsultarApi } = route.params;
    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [{ text: 'Eliminar', onPress: () => eliminarContacto() },
            { text: 'Cancelar', style: 'cancel' }]
        )
    }

    const eliminarContacto = async () => {


        if (Platform.OS === 'ios') {
            const url = `http://localhost:3000/clientes/${id}`;
            await axios.delete(url)
        } else {
            const url = `http://192.168.0.7:3000/clientes/${id}`;
            await axios.delete(url);
        }
        try {

        } catch (error) {
            console.log(error);
        }

        // redireccionar
        navigation.navigate('Inicio')
        // volver a consultar
        guardarConsultarApi(true)
    }

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}> {nombre}</Headline>
            <Text style={styles.texto}>Empresa:<Subheading>{empresa}</Subheading></Text>
            <Text style={styles.texto}>Telefono:<Subheading>{telefono}</Subheading></Text>
            <Text style={styles.texto}>Email: <Subheading>{email}</Subheading></Text>

            <Button style={styles.boton}
                mode="contained" ç
                icon="cancel"
                onPress={() => mostrarConfirmacion()}>
                Eliminar Cliente
            </Button>
            <FAB
                icon="pencil"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", {cliente:route.params.item, guardarConsultarApi })}

            />
        </View>

    );
}
const styles = StyleSheet.create({
    texto: {
        marginBottom: 20,
        fontSize: 18
    },
    boton: {
        marginTop: 100,
        backgroundColor: 'red'
    }
})

export default DetallesCliente;

