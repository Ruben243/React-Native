
import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Cita from './componentes/Cita'
import Formulario from './componentes/formulario'



const App = () => {

  const [mostrarForm, guardarMostrarForm] = useState(false)


  // definir el state de citas
  const [citas, setCitas] = useState([]);

  // Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    })
  }

  // muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm)
  }


  // cerrar Teclado
const cerrarTeclado=()=>{
  Keyboard.dismiss();
}


  return (
    <TouchableWithoutFeedback onPress={() => { cerrarTeclado() }}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <View>
          <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Tus Citas' : 'Crea una nueva Cita'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {/* ternario que muestra el formulario o el lisatado segun condicion */}
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>

              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}

              />
            </>

          ) : (
              <>
                <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas.Agrega una cita'}</Text>
                <FlatList style={styles.listado}
                  data={citas}
                  renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
                  keyExtractor={cita => cita.id}
                />
              </>
            )}


        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'blue',
    flex: 1
  },
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',


  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'

  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    paddingBottom: 2,
    backgroundColor: 'darkred',
    marginVertical: 10
  },
  textoMostrarForm: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19
  }

});

export default App;
