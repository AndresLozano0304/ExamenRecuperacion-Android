import React, { useState } from 'react';
import { FlatList, Text, View ,Image} from 'react-native';

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



export default function FiltroScreen({route}) {
    console.log("----instrumento",route.params.instrumento);
    function filtro({item}) {
        if (item.instrumento === route.params.instrumento) {

        return  <View>
        <View style={{flexDirection:'row'}}>
          <Image style={{ height: 100, width: 100 , marginLeft:20,alignItems:'center'}} source={{ uri: 'https://www.fecoljuegos.com.co/wp-content/uploads/2016/11/usuario.png' }} />
                <View style={{alignItems:'center'}}>
                  <Text style={{marginTop:10}}>Nombre: {item.nombre} </Text>
                  <Text>Edad: {item.edad} </Text>
                  <Text style={{color:'red'}}>{item.instrumento} </Text>
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
return (

  <View>
    <FlatList
      data={users}
      renderItem={filtro}
      kayExtractor={item => item.id} />
  </View>
);

}

