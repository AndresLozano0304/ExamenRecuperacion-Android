import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import historiaStack from './navigation/HistoriaStack';
import MusicosStack from './navigation/MusicosStack';

export default function App() {
  const Tab = createBottomTabNavigator();
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
          tabBarActiveBackgroundColor:"#7CC93D",
          tabBarInactiveBackgroundColor:"#AEE368",
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen name="Historia" component={historiaStack} options={{ headerStyle: { backgroundColor: '#AEE368' }, headerTitleAlign: 'center' ,headerShown:false}} />
        <Tab.Screen name="Musicos" component={MusicosStack} options={{ headerStyle: { backgroundColor: '#AEE368' }, headerTitleAlign: 'center', headerShown:false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );

}