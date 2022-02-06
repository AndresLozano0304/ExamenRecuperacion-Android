import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'




export default function HistoriaScreen() {

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

  const styles = StyleSheet.create({
    textos: {
      backgroundColor: "white",
      textAlign: "left",
      padding: 10,
      paddingLeft:15,
      paddingRight:15
    },
    view: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      justifyContent: "center"
  
    }
  });