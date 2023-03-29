import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// import the screens of our app
import AccountScreen from './src/screens/AccountScreen';
import CaseContactCreateScreen from './src/screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './src/screens/CaseContactDetailScreen';
import CaseContactListScreen from './src/screens/CaseContactListScreen';
import LoginScreen from './src/screens/LoginScreen';

// this variable holds the navigation structure of our app
const switchNavigator = createSwitchNavigator({
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

export default createAppContainer(switchNavigator);
