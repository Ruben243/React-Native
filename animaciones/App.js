import React from 'react';
import { StyleSheet, View, } from 'react-native';
//import Animacion1 from "./componentes/Animacion1";
//import Animacion2 from "./componentes/Animacion2";
// import Animacion3 from "./componentes/Animacion3";
// import Animacion4 from "./componentes/Animacion4";
//import Animacion5 from "./componentes/Animacion5";
// import Animacion6 from "./componentes/Animacion6";
import Animacion7 from "./componentes/Animacion7";


const App = () => {
  return (
    <>
      {/* <View style={StyleSheet.contenido}> 
      </View>
         <Animacion1 />
          </View>
       
       <View style={StyleSheet.contenido}>
        <Animacion2 />
      </View>
      
            <View style={StyleSheet.contenido}>
        <Animacion3 />
        </View>

      <View style={StyleSheet.contenido}>
        <Animacion4 />
        </View>

      <View style={styles.contenido}>
        <Animacion5 />
        </View>
        
        <View styles={styles.contenido}>
        <Animacion6/>*/}

        <View styles={styles.contenido}>
        <Animacion7/>
      </View>
        
  


    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100
  }
});

export default App;
