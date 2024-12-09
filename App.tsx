import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './global.css'; // so tailwind works

import LoginScreen from 'src/screens/LoginScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: LoginScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
