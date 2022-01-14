import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  textos: {
    backgroundColor: "white",
    textAlign: "left",
    padding: 10,
    paddingLeft:15,
    paddingRight:15
  },
  texto2: {
    textAlign: "left",
    padding: 30,
    paddingLeft:15,
    paddingRight:30
  },
  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center"

  },
  touchable: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  header: {
    backgroundColor: "#B3DF78",
  },
  image: {
    height: 150,
     width: 150,
     padding:10
  },
  textinput: {
    height: 40,
    width: 225,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    marginTop:20
    },
    musicos: {
      marginRight:10,
      padding: 10,
      textAlign: 'center'
    },
    boton: {
     margin:20
    }
});

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'md-musical-note' : 'md-musical-note-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveBackgroundColor:"#AEE368",
          tabBarInactiveBackgroundColor:"#AEE368",
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaScreen} options={{ headerStyle: { backgroundColor: '#AEE368' }, headerTitleAlign: 'center' }} />
        <Tab.Screen name="Musicos" component={Musicos} options={{ headerStyle: { backgroundColor: '#AEE368' }, headerTitleAlign: 'center'}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );

}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Filtro">
      <HomeStack.Screen name="Filtro" component={FiltroScreen} options={{ headerStyle: { backgroundColor: 'red' } }} />
    </HomeStack.Navigator>

  );
}

function HistoriaScreen() {

  return (

    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.textos}>Bienvenidos a la Historia de los dispositivos</Text>
        <Image style={{ height: 200, width: 150 ,padding: 20}} source={{ uri: 'https://m.media-amazon.com/images/I/81tnErm2w6L._AC_SX355_.jpg' }} />
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Fecha de lanzamiento:</Text><Text style={styles.textos}>19 de enero de 1999</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Historia: </Text><Text style={styles.textos}>El primer dispositivo de la familia fue la BlackBerry 850, el dispositivo móvil tenía un teclado completo, lo que era inusual en ese momento. Podía enviar mensajes, acceder al correo electrónico, enviar y recibir páginas de internet completas e implementaba una agenda para organizar tareas, con tan solo una pequeña pantalla que podía mostrar ocho líneas de texto.</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Conclusión:</Text><Text style={styles.textos}>Lamentablemente, BlackBerry no sigue en el mercado de moviles ya que el mercado ha evolucionado muchisimo.</Text></Text>

        <Image style={{ height: 250, width: 200,padding: 20 }} source={{ uri: 'https://ar.celulares.com/fotos/apple-apple-iphone-3g-7659-g.jpg' }} />
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Fecha de lanzamiento:</Text><Text style={styles.textos}>29 de junio de 2007</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Historia: </Text><Text style={styles.textos}>Carece de un teclado físico, integra uno en la pantalla táctil con orientaciones tanto vertical como horizontal. El iPhone de Primera Generación dispone de una cámara de fotos de 2 megapíxeles y un reproductor de música basado en ITunes, además de software para enviar y recibir mensajes de texto y de voz. También ofrece servicios de Internet como leer correo electrónico, cargar páginas web y conectividad por Wi-Fi. Los teléfonos de la primera generación eran GSM cuatribanda con la tecnología EDGE. La segunda generación ya incluía UMTS con HSDPA.</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Conclusión:</Text><Text style={styles.textos}>No fue el mejor telefono, pero sin duda el 29 de junio de 2007 se lanzo a la venta el primer telefono inteligente, aun asi este modelo lo han seguido mejorando hasta hoy en dia</Text></Text>

        <Image style={{ height: 200, width: 150 ,padding: 20}} source={{ uri: 'https://manzanarota.com/wp-content/uploads/2019/08/samsung-galaxy-s-mini-s5570-pantalla-bateria-carga-reparacion-manzana-rota.jpg' }} />
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Fecha de lanzamiento:</Text><Text style={styles.textos}>4 de junio de 2010</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Historia: </Text><Text style={styles.textos}>Hace aproximadamente nueve años nacía en el seno de Samsung el que se convertiría a la postre en uno de sus grandes teléfonos. Pese a todo, el Samsung Galaxy S no era especialmente grande, ni siquiera para su época. 4 pulgadas lucía en su pantalla Super AMOLED, una tecnología ya instaurada en la marca desde hacía algún tiempo, y contaba con una resolución bastante alejada de las que vemos actualmente. 800 x 400 píxeles para su panel. Recordemos, hace ya nueve años de esto.</Text></Text>
        <Text style={styles.textos}><Text style={{fontWeight: 'bold' }}>Conclusión:</Text><Text style={styles.textos}>En general, el dispositivo tiene un diseño muy conseguido, unos acabados bastante buenos y un tacto exquisito. Seguramente los materiales podrían mejorarse, aunque en realidad creemos que Samsung ha acertado con la mejor relación entre tamaño y peso que ha sido posible.</Text></Text>


      </View>
    </ScrollView>

  );
}


function Musicos({navigation}) {
  const [instrumento, setInstrumento] = useState();
  return (

    
    <View >

      <View style={{flexDirection:'row'}}>
        <Text style={styles.texto2}>Instrumento</Text>
        <TextInput style={styles.textinput}
          onChangeText={(x) => setInstrumento(x)}
        />
      </View>

      <Button
        title='Buscar'
        onPress={() => navigation.navigate("Filtro", { z : instrumento })}
      />
      
      
      <FlatList
        data={users}
        renderItem={Enseñar}
        kayExtractor={item => item.id} />

    </View>
  )

  function Enseñar({item}) {
    
      return <View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                   <Image style={{ height: 100, width: 100 , marginLeft:20,alignItems:'center'}} source={{ uri: 'https://www.fecoljuegos.com.co/wp-content/uploads/2016/11/usuario.png' }} />
                    <View>
                      <Text>{item.nombre}</Text>
                      <Text style={{color:'red'}}>{item.instrumento}</Text>
                    </View>
                  </View>

                  
                

                <View
                  style={{
                  borderBottomColor: 'blue',
                  borderBottomWidth: 1,
                  padding:10
                  }}
                />
        
              </View>
    
  }
  
}


const users = [{ id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' },

  { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' },
  
  { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' },
  
  { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' },
  
  { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' },
  
  { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' },
  
  { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' },
  
  { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' },
  
  { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' },
  
  { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' },
  
  { id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' },
  
  { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' },
  
  { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' }];


  
function FiltroScreen({route}) {


  const { z } = route.params;
  

  function filtro(instrumento,item) {
    if (item.instrumento === z) {
      return <View>
        <Text>{item.nombre}</Text>
        <Text>{item.edad}</Text>
        <Text>{item.instrumento}</Text>
        
      </View>
    }
  }
  return (

    <View>
      <FlatList
        data={users}
        renderItem={filtro}
        kayExtractor={item => item.id} />
    </View>
  );

}