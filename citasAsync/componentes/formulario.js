
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "shortid";

const Formulario = ({citas,guardarMostrarForm,setCitas}) => {

  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [sintomas, guardarsintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  // muestra el calendario
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // oculta el calendario
  const hideDatePicker = () => {
    setDatePickerVisibility(false)

  };

  const confirmaFecha = date => {
    const fecha = { year: 'numeric', month: 'long', day: "2-digit" }
    guardarFecha(date.toLocaleDateString('es-ES', fecha));

    hideDatePicker();
  }
  // muestra la hora
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  //oculta la hora
  const hideTimePicker = () => {
    setTimePickerVisibility(false)
  };

  const confirmaHora = hora => {
    const reloj = hora.toString().substring(16, 21)
    guardarHora(reloj);
    hideTimePicker();

  }

  const crearNuevaCita = () => {
    //  validar
    if (paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' ||
      fecha.trim === '' || hora === '' || sintomas === '') {
      // falla validacion
      mostrarAlerta()
      return;

    }
    // Crea una nueva cita
    const cita = { paciente, propietario, telefono, fecha, hora, sintomas }

    cita.id=shortid.generate();
    console.log(cita);
    const citasNuevo=[...citas,cita];
    setCitas(citasNuevo);
    // ocultar formulario
    guardarMostrarForm(false);

    // resetear formulario

  }

  // muestra la alerta si falla la validacion

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',//titulo
      'Todos los campos son obligatorios',//mensaje
      [{
        text: 'OK'//arreglo de botones
      }]
    )
  }

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarPaciente(texto)}

          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarPropietario(texto)}

          />
        </View>
        <View>
          <Text style={styles.label}>Telefono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarTelefono(texto)}
            keyboardType='numeric'

          />
        </View>

        {/* boton de fecha */}
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmaFecha}
            onCancel={hideDatePicker}
            locale='es_ES'
          />
          <Text>La Fecha de la cita es:{fecha}</Text>
        </View>

        {/* boton de hora */}
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmaHora}
            onCancel={hideTimePicker}
            locale='es_ES'
            is24Hour
          />
          <Text>La hora de la cita es: {hora}</Text>
        </View>

        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={texto => guardarsintomas(texto)}


          />
          <View>
            <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnsubmit}>
              <Text style={styles.textoEliminar}>Crear Cita</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={styles.label}></Text>
          </View>
        </View>



      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    marginBottom: 1,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  btnsubmit: {
    padding: 10,
    paddingBottom: 2,
    backgroundColor: 'blue',
    marginVertical: 10
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
export default Formulario;