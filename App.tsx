import { NativeWindStyleSheet } from 'nativewind';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
// import the screens of our app
import AccountScreen from './src/screens/AccountScreen';
import CaseContactCreateScreen from './src/screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './src/screens/CaseContactDetailScreen';
import CaseContactListScreen from './src/screens/CaseContactListScreen';
import LoginScreen from './src/screens/LoginScreen';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import store from './src/app/store'
import { Provider } from 'react-redux'

NativeWindStyleSheet.setOutput({
  default: 'native',
});

// this variable holds the navigation structure of our app
const switchNavigator = createSwitchNavigator({
  LoadingAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },{
    defaultNavigationOptions: {
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}),
  // mainFlow: createMaterialBottomTabNavigator({
  caseContactListFlow: createStackNavigator({
    CaseContactList: {
      screen: CaseContactListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CaseContactDetail: {
      screen: CaseContactDetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },{
    defaultNavigationOptions: {
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}),
  CaseContactCreateFlow: createStackNavigator({
    CaseContactCreateScreen: {
      screen: CaseContactCreateScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },{
    defaultNavigationOptions: {
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}),
  AccountFlow: createStackNavigator({
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },{
    defaultNavigationOptions: {
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}),
  // }),
},{
  initialRouteName: 'loginFlow',
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
      </Provider>
    </AuthProvider>
  );
};
