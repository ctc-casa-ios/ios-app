import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'src/screens/LoginScreen';

import './global.css'; // so tailwind works

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false, // removes header
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
