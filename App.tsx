import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'src/screens/LoginScreen';
import AccountScreen from 'src/screens/AccountScreen';

import CaseContactListScreen from 'src/screens/CaseContactListScreen';
import CaseContactDetailScreen from 'src/screens/CaseContactDetailScreen';


const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="CaseContactListScreen"
          component={CaseContactListScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="CaseContactDetailScreen"
          component={CaseContactDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
