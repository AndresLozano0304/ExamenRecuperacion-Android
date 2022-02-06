import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Musicos from '../containers/Musicos';
import Filtro from '../containers/Filtro';

export default function usuarioStack({ }) {
    const usuarioStack = createNativeStackNavigator();

    return (
        <usuarioStack.Navigator>
            <usuarioStack.Screen name="Musicos" component={Musicos} initialParams={{}} options={{
                title: 'Musicos',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#AEE368"
                },
                headerTintColor: "#fff"
            }} />
            <usuarioStack.Screen name="Filtro" component={Filtro} options={{
                title: 'Filtro',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#AEE368"
                },
                headerTintColor: "#fff"
            }} />
        </usuarioStack.Navigator>
    );
}