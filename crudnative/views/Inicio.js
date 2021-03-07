import React, { useEffect, useState } from 'react';
import { Platform, FlatList, View, LogBox } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global'

const Inicio = ({ navigation }) => {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);
    // state de la app
    const [clientes, guardarClientes] = useState([])
    const [consultaApi, guardarConsultarApi] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                if (Platform.OS === 'ios') {
                    const resultado = await axios.get('http://localhost:3000/clientes');
                    guardarClientes(resultado.data);
                    guardarConsultarApi(false)
                } else {
                    const resultado = await axios.get('http://192.168.0.7:3000/clientes');
                    guardarClientes(resultado.data);
                    guardarConsultarApi(false)

                }


            } catch (error) {
                console.log(error);
            }

        }
        if (consultaApi) {
            obtenerClientesApi()
        }

    }, [consultaApi]);


    return (
        <View style={globalStyles.contenedor}>
            <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarApi })} >
                Nuevo Cliente
            </Button>
            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Cliente" : "No hay ningun cliente"}</Headline>
            <FlatList
                data={clientes}
                keyExtractor={cliente => (cliente.id).toString()}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={() => navigation.navigate("DetallesCliente", { item, guardarConsultarApi })}
                    />

                )}

            />
            <FAB
                icon="plus"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarApi })}

            />
        </View>
    );
}


export default Inicio;