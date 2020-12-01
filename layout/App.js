import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';


const App = () => {
  return (
    <>
      <ScrollView style={styles.bg}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View styl={styles.contenedor}>
          <Text style={styles.titulo}>¿Que hacer en Gijon?</Text>
          <ScrollView
            horizontal
          >
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer1.jpg')}
              />
              <Text style={styles.descripcion}>Viajes en globo</Text>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer2.jpg')}
              />
              <Text style={styles.descripcion}>Termas romanas</Text>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer3.jpg')}
              />
              <Text style={styles.descripcion}>Exposiciones</Text>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer4.jpg')}
              />
              <Text style={styles.descripcion}>Jardin botanico</Text>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer5.jpg')}
              />
              <Text style={styles.descripcion}>Fotografia de aves</Text>
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/quehacer6.jpg')}
              />
              <Text style={styles.descripcion}>Fauna local</Text>
            </View>
          </ScrollView>
          {/* Mejores ******************/}
          <Text style={styles.titulo}>Los mejores espectaculos</Text>
          <View>
            <View>
              <Image
                style={styles.espectaculos}
                source={require('./assets/img/espectaculos1.jpg')}
              />
              <Text style={styles.descripcion}>Horror,El musical</Text>
            </View>
            <View>
              <Image
                style={styles.espectaculos}
                source={require('./assets/img/espectaculos2.jpg')}
              />
              <Text style={styles.descripcion}>Fuegos artificiales</Text>
            </View>
            <View>
              <Image
                style={styles.espectaculos}
                source={require('./assets/img/espectaculos3.jpg')}
              />
              <Text style={styles.descripcion}>Festiva aerero</Text>
            </View>
          </View>
        </View>

        <Text style={styles.titulo}>Lugares</Text>
        <ScrollView
          horizontal
          style={styles.listado}>
          <View style={styles.listadoItem} >
            <Image
              style={styles.mejores}
              source={require('./assets/img/monumentos1.jpg')}
            />
            <Text style={styles.descripcion}>Paisaje Germinador</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/monumentos2.jpg')}
            />
            <Text style={styles.descripcion}>Elogio al horizonte</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/monumentos3.jpg')}
            />
            <Text style={styles.descripcion}>Soliraridad</Text>
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/monumentos4.jpg')}
            />
            <Text style={styles.descripcion}>Cesar</Text>
          </View>
        </ScrollView>


      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({

  bg: {
    backgroundColor: 'whitesmoke'
  },
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  }, ciudad: {
    width: 350,
    flex: 1,
    marginRight: 10
  },
  espectaculos: {
    width: '100%',
    marginVertical: 5
  },
  listado: {
    width: 350,
    height: 300,
    flex: 1


  }, listadoItem: {
    marginHorizontal: 10
  },
  descripcion:{
    fontWeight: 'bold',
    fontSize: 10,
  }
});

export default App;
