import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
// import the screens of our app
import AccountScreen from './src/screens/AccountScreen';
import CaseContactCreateScreen from './src/screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './src/screens/CaseContactDetailScreen';
import CaseContactListScreen from './src/screens/CaseContactListScreen';
import LoginScreen from './src/screens/LoginScreen';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

// this variable holds the navigation structure of our app
const switchNavigator = createSwitchNavigator({
  LoadingAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Login: LoginScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    caseContactListFlow: createStackNavigator({
      CaseContactList: CaseContactListScreen,
      CaseContactDetail: CaseContactDetailScreen,
    }),
    CaseContactCreate: CaseContactCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
