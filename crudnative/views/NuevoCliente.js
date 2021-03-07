import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, LogBox } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import globalStyles from "../styles/global";


const NuevoCliente = ({ navigation, route }) => {

    const { guardarConsultarApi } = route.params;
    console.log(route.params);
    //campos formulario

    const [nombre, guardarNombre] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [email, guardarEmail] = useState('');
    const [empresa, guardarEmpresa] = useState('');
    const [alert, guardarAlert] = useState('');

    // detectar si estamoseditando o no
    useEffect(() => {
        if (route.params?.cliente) {
            const { nombre, telefono, email, empresa } = route.params.cliente;
            guardarNombre(nombre)
            guardarTelefono(telefono)
            guardarEmail(email)
            guardarEmpresa(empresa)
        } else {
            console.log('nuevo cliente');
        }
    }, [])

    const guardarCliente = async () => {
        // validar
        if (nombre === '' || telefono === '' || email === '' || empresa === '') {
            
            guardarAlert(true)
            return
        }

        // generar el cliente
        const cliente = { nombre, telefono, email, empresa }
        console.log(cliente);

        // Si estamos editando o creando un nuevo cliente

        if (route.params?.cliente) {
            const { id } = route.params.cliente;
            cliente.id = id;
            if (Platform.OS === 'ios') {
                const url = `http://localhost:3000/clientes/${id}`;
                await axios.put(url, cliente)
            } else {
                const url = `http://192.168.0.7:3000/clientes/${id}`;
                await axios.put(url, cliente);
            }


        } else {
            // guardar el cliente en la api
            try {

                if (Platform.OS === 'ios') {
                    await axios.post('http://localhost:3000/clientes', cliente) //se debe poner localhost en ios

                } else {

                    await axios.post('http://192.168.0.7:3000/clientes', cliente) //se debe poner tu ip no localhost en android
                }

            } catch (error) {
                console.log(error);
            }

        }



        // redireccionar
        navigation.navigate('Inicio')

        // limipar el form
        guardarNombre("")
        guardarTelefono("")
        guardarEmail("")
        guardarEmpresa("")

        // cambiar a true para traernos al nuevo cliente
        guardarConsultarApi(true)

    }


    return (

        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

            <TextInput
                label="Nombre"
                placeholder="Escriba su nombre"
                onChangeText={text => guardarNombre(text)}
                value={nombre}
                style={styles.input}
            />
            <TextInput
                label="Telefono"
                placeholder="xxxxxxxx"
                onChangeText={text => guardarTelefono(text)}
                value={telefono}
                style={styles.input}
            />
            <TextInput
                label="E-mail"
                placeholder="Escriba su Correo"
                onChangeText={text => guardarEmail(text)}
                value={email}
                style={styles.input}
            />
            <TextInput
                label="Empresa"
                placeholder="Empresa"
                onChangeText={text => guardarEmpresa(text)}
                value={empresa}
                style={styles.input}
            />

            <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()}>
                Guardar Cliente
            </Button>

            <Portal>
                <Dialog
                    visible={alert}
                    // cuando clickas fuera del dialogo se cierra
                    onDismiss={() => guardarAlert(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        {/* Al pulsar ok se cierra el dialogo */}
                        <Button onPress={() => guardarAlert(false)}  >OK</Button>
                    </Dialog.Actions>
                </Dialog>

            </Portal>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})
export default NuevoCliente;