import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Historia from '../containers/Historia';


export default function historiaStack(){
    const historiaStack = createNativeStackNavigator();

    return(
       <historiaStack.Navigator>
           <historiaStack.Screen name="Historia" component ={Historia} initialParams={{}} options={{
               title:'Historia',
               headerTitleAlign: 'center',
               headerStyle:{
                   backgroundColor:"#AEE368"
               },
               headerTintColor:"#fff"
           }}/>
       </historiaStack.Navigator>
    );
}