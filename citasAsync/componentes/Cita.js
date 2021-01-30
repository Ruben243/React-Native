import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({ cita,eliminarPaciente}) => {

const dialogoEliminar=id=>{
    console.log('Eliminando',id);
    eliminarPaciente(id);
}

    return (
        (
            <View style={styles.cita}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <Text style={styles.texto}>{cita.paciente}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.texto}>{cita.propietario}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.texto}>{cita.telefono}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <Text style={styles.texto}>{cita.sintomas}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text style={styles.texto}>{cita.fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Text style={styles.texto}>{cita.hora}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={() => dialogoEliminar(cita.id)} style={styles.botonEliminar}>
                        <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                    </TouchableHighlight>
                </View>


            </View>
        )
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingLeft: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20

    },
    texto: {
        fontSize: 18,
    },
    botonEliminar: {
        padding: 10,
        backgroundColor: 'blue',
        marginVertical: 10
    },
    textoEliminar: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Cita;